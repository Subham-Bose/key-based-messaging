import { NgClass } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { Alert } from '../../services/alert.service';

@Component({
  selector: 'app-backend-panel',
  standalone: true,
  imports: [NgClass],
  templateUrl: './backend-panel.html',
  styleUrl: './backend-panel.scss',
})
export class BackendPanel {
  private alertService = inject(Alert);

  alert = this.alertService.alert;

  paramEntries = computed(() =>
    Object.entries(this.alert()?.params ?? {}).map(([key, value]) => ({ key, value })),
  );

  severityClass = computed(() => ({
    'j-sev-info': this.alert()?.severity === 'INFO',
    'j-sev-warn': this.alert()?.severity === 'WARNING',
    'j-sev-err': this.alert()?.severity === 'ERROR',
  }));

  isNumeric(value: string): boolean {
    return !isNaN(Number(value)) && value.trim() !== '';
  }
}
