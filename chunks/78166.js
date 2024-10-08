var r;
(r = 0),
    (function (e) {
        var t = {
                1: '१',
                2: '२',
                3: '३',
                4: '४',
                5: '५',
                6: '६',
                7: '७',
                8: '८',
                9: '९',
                0: '०'
            },
            n = {
                '१': '1',
                '२': '2',
                '३': '3',
                '४': '4',
                '५': '5',
                '६': '6',
                '७': '7',
                '८': '8',
                '९': '9',
                '०': '0'
            };
        e.defineLocale('ne', {
            months: 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
            monthsShort: 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
            monthsParseExact: !0,
            weekdays: 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
            weekdaysShort: 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
            weekdaysMin: 'आ._सो._मं._बु._बि._शु._श.'.split('_'),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: 'Aको h:mm बजे',
                LTS: 'Aको h:mm:ss बजे',
                L: 'DD/MM/YYYY',
                LL: 'D MMMM YYYY',
                LLL: 'D MMMM YYYY, Aको h:mm बजे',
                LLLL: 'dddd, D MMMM YYYY, Aको h:mm बजे'
            },
            preparse: function (e) {
                return e.replace(/[१२३४५६७८९०]/g, function (e) {
                    return n[e];
                });
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e];
                });
            },
            meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
            meridiemHour: function (e, t) {
                if ((12 === e && (e = 0), 'राति' === t)) return e < 4 ? e : e + 12;
                if ('बिहान' === t) return e;
                if ('दिउँसो' === t) return e >= 10 ? e : e + 12;
                else if ('साँझ' === t) return e + 12;
            },
            meridiem: function (e, t, n) {
                if (e < 3) return 'राति';
                if (e < 12) return 'बिहान';
                if (e < 16) return 'दिउँसो';
                else if (e < 20) return 'साँझ';
                else return 'राति';
            },
            calendar: {
                sameDay: '[आज] LT',
                nextDay: '[भोलि] LT',
                nextWeek: '[आउँदो] dddd[,] LT',
                lastDay: '[हिजो] LT',
                lastWeek: '[गएको] dddd[,] LT',
                sameElse: 'L'
            },
            relativeTime: {
                future: '%sमा',
                past: '%s अगाडि',
                s: 'केही क्षण',
                ss: '%d सेकेण्ड',
                m: 'एक मिनेट',
                mm: '%d मिनेट',
                h: 'एक घण्टा',
                hh: '%d घण्टा',
                d: 'एक दिन',
                dd: '%d दिन',
                M: 'एक महिना',
                MM: '%d महिना',
                y: 'एक बर्ष',
                yy: '%d बर्ष'
            },
            week: {
                dow: 0,
                doy: 6
            }
        });
    })(n(913527));
