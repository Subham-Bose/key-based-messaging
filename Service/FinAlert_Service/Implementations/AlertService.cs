using FinAlert_Service.Interfaces;

namespace FinAlert_Service.Implementations
{
    public class AlertService : IAlertService
    {
        public string? GetAlert(int choice)
        {
            return choice switch
            {
                1 => "LOGIN.LOGIN_SUCCESS|30",

                2 => "LOGIN.WELCOME_USER|Subham|4",

                3 => "MONEY.TRANSFER_SUCCESS|12500|Priya M.|87340",

                4 => "MONEY.EMI_DUE|8200|3|05 May",

                5 => "MONEY.BALANCE_BELOW_THRESHOLD|1820|2500",

                6 => "MONEY.DAILY_LIMIT_REACHED|50000|7",

                7 => "LOGIN.LOGIN_ATTEMPTS_REMAINING|2",

                8 => "LOGIN.USER_LOCKED|5",

                _ => null
            };
        }
    }
}
