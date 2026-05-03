import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar {
  private translate = inject(TranslateService);

  langs = ['en', 'hi', 'fr'];
  activeLang = 'en';

  setLang(lang: string): void {
    this.activeLang = lang;
    this.translate.use(lang);
  }
}
