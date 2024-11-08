var r;
(r = 0),
    (function (e) {
        function t(e, t, n, r) {
            var i = {
                s: ['viensas secunds', "'iensas secunds"],
                ss: [e + ' secunds', '' + e + ' secunds'],
                m: ["'n míut", "'iens míut"],
                mm: [e + ' míuts', '' + e + ' míuts'],
                h: ["'n þora", "'iensa þora"],
                hh: [e + ' þoras', '' + e + ' þoras'],
                d: ["'n ziua", "'iensa ziua"],
                dd: [e + ' ziuas', '' + e + ' ziuas'],
                M: ["'n mes", "'iens mes"],
                MM: [e + ' mesen', '' + e + ' mesen'],
                y: ["'n ar", "'iens ar"],
                yy: [e + ' ars', '' + e + ' ars']
            };
            return r ? i[n][0] : t ? i[n][0] : i[n][1];
        }
        e.defineLocale('tzl', {
            months: 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
            monthsShort: 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
            weekdays: 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
            weekdaysShort: 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
            weekdaysMin: 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
            longDateFormat: {
                LT: 'HH.mm',
                LTS: 'HH.mm.ss',
                L: 'DD.MM.YYYY',
                LL: 'D. MMMM [dallas] YYYY',
                LLL: 'D. MMMM [dallas] YYYY HH.mm',
                LLLL: 'dddd, [li] D. MMMM [dallas] YYYY HH.mm'
            },
            meridiemParse: /d\'o|d\'a/i,
            isPM: function (e) {
                return "d'o" === e.toLowerCase();
            },
            meridiem: function (e, t, n) {
                return e > 11 ? (n ? "d'o" : "D'O") : n ? "d'a" : "D'A";
            },
            calendar: {
                sameDay: '[oxhi à] LT',
                nextDay: '[demà à] LT',
                nextWeek: 'dddd [à] LT',
                lastDay: '[ieiri à] LT',
                lastWeek: '[sür el] dddd [lasteu à] LT',
                sameElse: 'L'
            },
            relativeTime: {
                future: 'osprei %s',
                past: 'ja%s',
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
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
