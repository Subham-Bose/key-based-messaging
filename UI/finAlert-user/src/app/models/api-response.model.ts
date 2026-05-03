export type Severity = 'INFO' | 'WARNING' | 'ERROR';

// Severity is derived from the key namespace — no need for backend to send it
const SEVERITY_MAP: Record<string, Severity> = {
  'LOGIN.LOGIN_SUCCESS': 'INFO',
  'LOGIN.WELCOME_USER': 'INFO',
  'MONEY.TRANSFER_SUCCESS': 'INFO',
  'MONEY.EMI_DUE': 'WARNING',
  'MONEY.BALANCE_BELOW_THRESHOLD': 'WARNING',
  'MONEY.DAILY_LIMIT_REACHED': 'WARNING',
  'LOGIN.LOGIN_ATTEMPTS_REMAINING': 'ERROR',
  'LOGIN.USER_LOCKED': 'ERROR',
};

export interface ParsedAlert {
  messageKey: string; // "LOGIN.WELCOME_USER"
  params: Record<string, string>; // { "0": "Subham", "1": "4" }
  severity: Severity;
  raw: string; // original string for debug panel
}

export function parseAlertString(raw: string): ParsedAlert | null {
  if (!raw?.trim()) return null;

  const parts = raw.split('|');
  const messageKey = parts[0].trim(); // "LOGIN.WELCOME_USER"
  const positionalValues = parts.slice(1); // ["Subham", "4"]

  // Convert ["Subham", "4"] → { "0": "Subham", "1": "4" }
  const params = Object.fromEntries(positionalValues.map((val, idx) => [String(idx), val.trim()]));

  const severity = SEVERITY_MAP[messageKey] ?? 'INFO';

  return { messageKey, params, severity, raw };
}
