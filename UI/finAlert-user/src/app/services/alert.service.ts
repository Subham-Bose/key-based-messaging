import { inject, Injectable, signal } from '@angular/core';
import { parseAlertString, ParsedAlert } from '../models/api-response.model';
import { catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Alert {
  private http = inject(HttpClient);

  // Signals — components read these reactively
  alert = signal<ParsedAlert | null>(null);
  loading = signal(false);
  error = signal<string | null>(null);

  fetchAlert(choice: number): void {
    this.loading.set(true);
    this.error.set(null);

    this.http
      .get(`/api/alerts/${choice}`, { responseType: 'text' })
      .pipe(
        map((raw) => parseAlertString(raw)),
        catchError((err) => {
          this.error.set('Failed to fetch alert');
          return of(null);
        }),
      )
      .subscribe((parsed) => {
        this.alert.set(parsed);
        this.loading.set(false);
      });
  }

  // ---- For local dev / mock (no real backend yet) ----
  triggerMock(raw: string): void {
    this.alert.set(parseAlertString(raw));
  }
}
