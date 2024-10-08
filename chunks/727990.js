var r;
(r = 0),
    (function (e) {
        function t(e, t, n, r) {
            var i = {
                m: ['eine Minute', 'einer Minute'],
                h: ['eine Stunde', 'einer Stunde'],
                d: ['ein Tag', 'einem Tag'],
                dd: [e + ' Tage', e + ' Tagen'],
                M: ['ein Monat', 'einem Monat'],
                MM: [e + ' Monate', e + ' Monaten'],
                y: ['ein Jahr', 'einem Jahr'],
                yy: [e + ' Jahre', e + ' Jahren']
            };
            return t ? i[n][0] : i[n][1];
        }
        e.defineLocale('de-ch', {
            months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
            monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
            monthsParseExact: !0,
            weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
            weekdaysShort: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
            weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: 'HH:mm',
                LTS: 'HH:mm:ss',
                L: 'DD.MM.YYYY',
                LL: 'D. MMMM YYYY',
                LLL: 'D. MMMM YYYY HH:mm',
                LLLL: 'dddd, D. MMMM YYYY HH:mm'
            },
            calendar: {
                sameDay: '[heute um] LT [Uhr]',
                sameElse: 'L',
                nextDay: '[morgen um] LT [Uhr]',
                nextWeek: 'dddd [um] LT [Uhr]',
                lastDay: '[gestern um] LT [Uhr]',
                lastWeek: '[letzten] dddd [um] LT [Uhr]'
            },
            relativeTime: {
                future: 'in %s',
                past: 'vor %s',
                s: 'ein paar Sekunden',
                ss: '%d Sekunden',
                m: t,
                mm: '%d Minuten',
                h: t,
                hh: '%d Stunden',
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: '%d.',
            week: {
                dow: 1,
                doy: 4
            }
        });
    })(n(913527));
