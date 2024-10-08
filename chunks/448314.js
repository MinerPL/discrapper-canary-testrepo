var r;
(r = 0),
    (function (e) {
        var t = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
            n = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
        e.defineLocale('es-us', {
            months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
            monthsShort: function (e, r) {
                return e ? (/-MMM-/.test(r) ? n[e.month()] : t[e.month()]) : t;
            },
            monthsParseExact: !0,
            weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
            weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
            weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: 'h:mm A',
                LTS: 'h:mm:ss A',
                L: 'MM/DD/YYYY',
                LL: 'MMMM [de] D [de] YYYY',
                LLL: 'MMMM [de] D [de] YYYY h:mm A',
                LLLL: 'dddd, MMMM [de] D [de] YYYY h:mm A'
            },
            calendar: {
                sameDay: function () {
                    return '[hoy a la' + (1 !== this.hours() ? 's' : '') + '] LT';
                },
                nextDay: function () {
                    return '[mañana a la' + (1 !== this.hours() ? 's' : '') + '] LT';
                },
                nextWeek: function () {
                    return 'dddd [a la' + (1 !== this.hours() ? 's' : '') + '] LT';
                },
                lastDay: function () {
                    return '[ayer a la' + (1 !== this.hours() ? 's' : '') + '] LT';
                },
                lastWeek: function () {
                    return '[el] dddd [pasado a la' + (1 !== this.hours() ? 's' : '') + '] LT';
                },
                sameElse: 'L'
            },
            relativeTime: {
                future: 'en %s',
                past: 'hace %s',
                s: 'unos segundos',
                ss: '%d segundos',
                m: 'un minuto',
                mm: '%d minutos',
                h: 'una hora',
                hh: '%d horas',
                d: 'un día',
                dd: '%d días',
                M: 'un mes',
                MM: '%d meses',
                y: 'un año',
                yy: '%d años'
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: '%dº',
            week: {
                dow: 0,
                doy: 6
            }
        });
    })(n(913527));
