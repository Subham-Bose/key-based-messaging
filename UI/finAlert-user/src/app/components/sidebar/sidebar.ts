import { Component, inject } from '@angular/core';
import { Alert } from '../../services/alert.service';
import { NgClass } from '@angular/common';

interface SidebarAction {
  id: number;
  key: string;
  raw: string;
  label: string;
  sev: 'info' | 'warn' | 'err';
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  alertService = inject(Alert);
  actions: SidebarAction[] = [
    {
      id: 1,
      key: 'LOGIN.LOGIN_SUCCESS',
      raw: 'LOGIN.LOGIN_SUCCESS|30',
      label: 'Login success',
      sev: 'info',
    },
    {
      id: 2,
      key: 'LOGIN.WELCOME_USER',
      raw: 'LOGIN.WELCOME_USER|Subham|4',
      label: 'Dashboard load',
      sev: 'info',
    },
    {
      id: 3,
      key: 'MONEY.TRANSFER_SUCCESS',
      raw: 'MONEY.TRANSFER_SUCCESS|12500|Priya M.|87340',
      label: 'Transfer funds',
      sev: 'info',
    },
    {
      id: 4,
      key: 'MONEY.EMI_DUE',
      raw: 'MONEY.EMI_DUE|8200|3|05 May',
      label: 'EMI reminder',
      sev: 'warn',
    },
    {
      id: 5,
      key: 'MONEY.BALANCE_BELOW_THRESHOLD',
      raw: 'MONEY.BALANCE_BELOW_THRESHOLD|1820|2500',
      label: 'Low balance',
      sev: 'warn',
    },
    {
      id: 6,
      key: 'MONEY.DAILY_LIMIT_REACHED',
      raw: 'MONEY.DAILY_LIMIT_REACHED|50000|7',
      label: 'Daily limit hit',
      sev: 'warn',
    },
    {
      id: 7,
      key: 'LOGIN.LOGIN_ATTEMPTS_REMAINING',
      raw: 'LOGIN.LOGIN_ATTEMPTS_REMAINING|2',
      label: 'Login attempts',
      sev: 'err',
    },
    { id: 8, key: 'LOGIN.USER_LOCKED', raw: 'LOGIN.USER_LOCKED|5', label: 'Account locked', sev: 'err' },
  ];
}
