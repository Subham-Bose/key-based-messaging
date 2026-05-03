import { Component, inject, signal } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Topbar } from './components/topbar/topbar';
import { BackendPanel } from './components/backend-panel/backend-panel';
import { Sidebar } from './components/sidebar/sidebar';
import { UiPanel } from './components/ui-panel/ui-panel';

@Component({
  selector: 'app-root',
  imports: [TranslateModule, Topbar, BackendPanel, Sidebar, UiPanel],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private translate = inject(TranslateService);

  constructor() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
