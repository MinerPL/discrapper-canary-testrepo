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
        e.defineLocale('hi', {
            months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
            monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
            monthsParseExact: !0,
            weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
            weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
            weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
            longDateFormat: {
                LT: 'A h:mm बजे',
                LTS: 'A h:mm:ss बजे',
                L: 'DD/MM/YYYY',
                LL: 'D MMMM YYYY',
                LLL: 'D MMMM YYYY, A h:mm बजे',
                LLLL: 'dddd, D MMMM YYYY, A h:mm बजे'
            },
            calendar: {
                sameDay: '[आज] LT',
                nextDay: '[कल] LT',
                nextWeek: 'dddd, LT',
                lastDay: '[कल] LT',
                lastWeek: '[पिछले] dddd, LT',
                sameElse: 'L'
            },
            relativeTime: {
                future: '%s में',
                past: '%s पहले',
                s: 'कुछ ही क्षण',
                ss: '%d सेकंड',
                m: 'एक मिनट',
                mm: '%d मिनट',
                h: 'एक घंटा',
                hh: '%d घंटे',
                d: 'एक दिन',
                dd: '%d दिन',
                M: 'एक महीने',
                MM: '%d महीने',
                y: 'एक वर्ष',
                yy: '%d वर्ष'
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
            meridiemParse: /रात|सुबह|दोपहर|शाम/,
            meridiemHour: function (e, t) {
                if ((12 === e && (e = 0), 'रात' === t)) return e < 4 ? e : e + 12;
                if ('सुबह' === t) return e;
                if ('दोपहर' === t) return e >= 10 ? e : e + 12;
                else if ('शाम' === t) return e + 12;
            },
            meridiem: function (e, t, n) {
                if (e < 4) return 'रात';
                if (e < 10) return 'सुबह';
                if (e < 17) return 'दोपहर';
                else if (e < 20) return 'शाम';
                else return 'रात';
            },
            week: {
                dow: 0,
                doy: 6
            }
        });
    })(n(913527));
