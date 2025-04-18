var r;
(r = 0),
    (function (e) {
        var t = {
                1: '١',
                2: '٢',
                3: '٣',
                4: '٤',
                5: '٥',
                6: '٦',
                7: '٧',
                8: '٨',
                9: '٩',
                0: '٠'
            },
            n = {
                '١': '1',
                '٢': '2',
                '٣': '3',
                '٤': '4',
                '٥': '5',
                '٦': '6',
                '٧': '7',
                '٨': '8',
                '٩': '9',
                '٠': '0'
            },
            r = function (e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
            },
            i = {
                s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
                m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
                h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
                d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
                M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
                y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
            },
            a = function (e) {
                return function (t, n, a, s) {
                    var o = r(t),
                        l = i[e][r(t)];
                    return 2 === o && (l = l[n ? 0 : 1]), l.replace(/%d/i, t);
                };
            },
            s = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
        e.defineLocale('ar', {
            months: s,
            monthsShort: s,
            weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
            weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
            weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: 'HH:mm',
                LTS: 'HH:mm:ss',
                L: 'D/\u200FM/\u200FYYYY',
                LL: 'D MMMM YYYY',
                LLL: 'D MMMM YYYY HH:mm',
                LLLL: 'dddd D MMMM YYYY HH:mm'
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
                return 'م' === e;
            },
            meridiem: function (e, t, n) {
                return e < 12 ? 'ص' : 'م';
            },
            calendar: {
                sameDay: '[اليوم عند الساعة] LT',
                nextDay: '[غدًا عند الساعة] LT',
                nextWeek: 'dddd [عند الساعة] LT',
                lastDay: '[أمس عند الساعة] LT',
                lastWeek: 'dddd [عند الساعة] LT',
                sameElse: 'L'
            },
            relativeTime: {
                future: 'بعد %s',
                past: 'منذ %s',
                s: a('s'),
                ss: a('s'),
                m: a('m'),
                mm: a('m'),
                h: a('h'),
                hh: a('h'),
                d: a('d'),
                dd: a('d'),
                M: a('M'),
                MM: a('M'),
                y: a('y'),
                yy: a('y')
            },
            preparse: function (e) {
                return e
                    .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                        return n[e];
                    })
                    .replace(/،/g, ',');
            },
            postformat: function (e) {
                return e
                    .replace(/\d/g, function (e) {
                        return t[e];
                    })
                    .replace(/,/g, '\u060C');
            },
            week: {
                dow: 6,
                doy: 12
            }
        });
    })(n(913527));
