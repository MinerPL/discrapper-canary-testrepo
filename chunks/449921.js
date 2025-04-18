n.d(i, { Z: () => a });
var o = {
    lessThanXSeconds: {
        one: {
            regular: 'mniej niż sekunda',
            past: 'mniej niż sekundę',
            future: 'mniej niż sekundę'
        },
        twoFour: 'mniej niż {{count}} sekundy',
        other: 'mniej niż {{count}} sekund'
    },
    xSeconds: {
        one: {
            regular: 'sekunda',
            past: 'sekundę',
            future: 'sekundę'
        },
        twoFour: '{{count}} sekundy',
        other: '{{count}} sekund'
    },
    halfAMinute: {
        one: 'pół minuty',
        twoFour: 'pół minuty',
        other: 'pół minuty'
    },
    lessThanXMinutes: {
        one: {
            regular: 'mniej niż minuta',
            past: 'mniej niż minutę',
            future: 'mniej niż minutę'
        },
        twoFour: 'mniej niż {{count}} minuty',
        other: 'mniej niż {{count}} minut'
    },
    xMinutes: {
        one: {
            regular: 'minuta',
            past: 'minutę',
            future: 'minutę'
        },
        twoFour: '{{count}} minuty',
        other: '{{count}} minut'
    },
    aboutXHours: {
        one: {
            regular: 'około godziny',
            past: 'około godziny',
            future: 'około godzinę'
        },
        twoFour: 'około {{count}} godziny',
        other: 'około {{count}} godzin'
    },
    xHours: {
        one: {
            regular: 'godzina',
            past: 'godzinę',
            future: 'godzinę'
        },
        twoFour: '{{count}} godziny',
        other: '{{count}} godzin'
    },
    xDays: {
        one: {
            regular: 'dzień',
            past: 'dzień',
            future: '1 dzień'
        },
        twoFour: '{{count}} dni',
        other: '{{count}} dni'
    },
    aboutXWeeks: {
        one: 'około tygodnia',
        twoFour: 'około {{count}} tygodni',
        other: 'około {{count}} tygodni'
    },
    xWeeks: {
        one: 'tydzień',
        twoFour: '{{count}} tygodnie',
        other: '{{count}} tygodni'
    },
    aboutXMonths: {
        one: 'około miesiąc',
        twoFour: 'około {{count}} miesiące',
        other: 'około {{count}} miesięcy'
    },
    xMonths: {
        one: 'miesiąc',
        twoFour: '{{count}} miesiące',
        other: '{{count}} miesięcy'
    },
    aboutXYears: {
        one: 'około rok',
        twoFour: 'około {{count}} lata',
        other: 'około {{count}} lat'
    },
    xYears: {
        one: 'rok',
        twoFour: '{{count}} lata',
        other: '{{count}} lat'
    },
    overXYears: {
        one: 'ponad rok',
        twoFour: 'ponad {{count}} lata',
        other: 'ponad {{count}} lat'
    },
    almostXYears: {
        one: 'prawie rok',
        twoFour: 'prawie {{count}} lata',
        other: 'prawie {{count}} lat'
    }
};
function t(e, i, n) {
    var o = (function (e, i) {
        if (1 === i) return e.one;
        var n = i % 100;
        if (n <= 20 && n > 10) return e.other;
        var o = n % 10;
        return o >= 2 && o <= 4 ? e.twoFour : e.other;
    })(e, i);
    return ('string' == typeof o ? o : o[n]).replace('{{count}}', String(i));
}
let a = function (e, i, n) {
    var a = o[e];
    return null != n && n.addSuffix ? (n.comparison && n.comparison > 0 ? 'za ' + t(a, i, 'future') : t(a, i, 'past') + ' temu') : t(a, i, 'regular');
};
