import { Component, computed, effect, inject, signal } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Alert } from '../../services/alert.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-ui-panel',
  standalone: true,
  imports: [NgClass, TranslateModule],
  templateUrl: './ui-panel.html',
  styleUrl: './ui-panel.scss',
})
export class UiPanel {
  alertService = inject(Alert);
  private translate = inject(TranslateService);

  activeLang = this.translate.currentLang ?? 'en';

  // Steps animate in one by one when a new alert arrives
  private completedSteps = signal<number>(0);

  flowSteps = [
    { id: 1, label: 'Backend returns <code>messageKey</code> + params' },
    { id: 2, label: 'Angular reads active language' },
    { id: 3, label: 'Lookup key in <code>assets/i18n/{{lang}}.json</code>' },
    { id: 4, label: 'Interpolate <code>{{params}}</code> → final string' },
    { id: 5, label: 'Render with severity-based component' },
  ];

  paramEntries = computed(() =>
    Object.entries(this.alertService.alert()?.params ?? {}).map(([key, value]) => ({ key, value })),
  );

  isStepDone(stepId: number): boolean {
    return stepId <= this.completedSteps();
  }

  constructor() {
    // Re-run pipeline animation whenever alert changes
    effect(() => {
      const alert = this.alertService.alert();
      this.activeLang = this.translate.currentLang ?? 'en';

      if (!alert) {
        this.completedSteps.set(0);
        return;
      }

      this.completedSteps.set(0);
      this.flowSteps.forEach((_, i) => {
        setTimeout(() => this.completedSteps.set(i + 1), i * 220);
      });
    });
  }
}
