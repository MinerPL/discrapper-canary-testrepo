!(function (e, t) {
    t(n(913527));
})(0, function (e) {
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
    function r(e, t, n, r) {
        var i = '';
        if (t)
            switch (n) {
                case 's':
                    i = 'काही सेकंद';
                    break;
                case 'ss':
                    i = '%d सेकंद';
                    break;
                case 'm':
                    i = 'एक मिनिट';
                    break;
                case 'mm':
                    i = '%d मिनिटे';
                    break;
                case 'h':
                    i = 'एक तास';
                    break;
                case 'hh':
                    i = '%d तास';
                    break;
                case 'd':
                    i = 'एक दिवस';
                    break;
                case 'dd':
                    i = '%d दिवस';
                    break;
                case 'M':
                    i = 'एक महिना';
                    break;
                case 'MM':
                    i = '%d महिने';
                    break;
                case 'y':
                    i = 'एक वर्ष';
                    break;
                case 'yy':
                    i = '%d वर्षे';
            }
        else
            switch (n) {
                case 's':
                    i = 'काही सेकंदां';
                    break;
                case 'ss':
                    i = '%d सेकंदां';
                    break;
                case 'm':
                    i = 'एका मिनिटा';
                    break;
                case 'mm':
                    i = '%d मिनिटां';
                    break;
                case 'h':
                    i = 'एका तासा';
                    break;
                case 'hh':
                    i = '%d तासां';
                    break;
                case 'd':
                    i = 'एका दिवसा';
                    break;
                case 'dd':
                    i = '%d दिवसां';
                    break;
                case 'M':
                    i = 'एका महिन्या';
                    break;
                case 'MM':
                    i = '%d महिन्यां';
                    break;
                case 'y':
                    i = 'एका वर्षा';
                    break;
                case 'yy':
                    i = '%d वर्षां';
            }
        return i.replace(/%d/i, e);
    }
    return e.defineLocale('mr', {
        months: 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
        monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
        weekdaysShort: 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
        weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
        longDateFormat: {
            LT: 'A h:mm वाजता',
            LTS: 'A h:mm:ss वाजता',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm वाजता',
            LLLL: 'dddd, D MMMM YYYY, A h:mm वाजता'
        },
        calendar: {
            sameDay: '[आज] LT',
            nextDay: '[उद्या] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[काल] LT',
            lastWeek: '[मागील] dddd, LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%sमध्ये',
            past: '%sपूर्वी',
            s: r,
            ss: r,
            m: r,
            mm: r,
            h: r,
            hh: r,
            d: r,
            dd: r,
            M: r,
            MM: r,
            y: r,
            yy: r
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
        meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
        meridiemHour: function (e, t) {
            return (12 === e && (e = 0), 'रात्री' === t) ? (e < 4 ? e : e + 12) : 'सकाळी' === t ? e : 'दुपारी' === t ? (e >= 10 ? e : e + 12) : 'सायंकाळी' === t ? e + 12 : void 0;
        },
        meridiem: function (e, t, n) {
            return e < 4 ? 'रात्री' : e < 10 ? 'सकाळी' : e < 17 ? 'दुपारी' : e < 20 ? 'सायंकाळी' : 'रात्री';
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
});
