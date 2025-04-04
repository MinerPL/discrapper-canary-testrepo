n.d(e, { Z: () => i });
var t = {
    lessThanXSeconds: {
        one: {
            standalone: 'manje od 1 sekunde',
            withPrepositionAgo: 'manje od 1 sekunde',
            withPrepositionIn: 'manje od 1 sekundu'
        },
        dual: 'manje od {{count}} sekunde',
        other: 'manje od {{count}} sekundi'
    },
    xSeconds: {
        one: {
            standalone: '1 sekunda',
            withPrepositionAgo: '1 sekunde',
            withPrepositionIn: '1 sekundu'
        },
        dual: '{{count}} sekunde',
        other: '{{count}} sekundi'
    },
    halfAMinute: 'pola minute',
    lessThanXMinutes: {
        one: {
            standalone: 'manje od 1 minute',
            withPrepositionAgo: 'manje od 1 minute',
            withPrepositionIn: 'manje od 1 minutu'
        },
        dual: 'manje od {{count}} minute',
        other: 'manje od {{count}} minuta'
    },
    xMinutes: {
        one: {
            standalone: '1 minuta',
            withPrepositionAgo: '1 minute',
            withPrepositionIn: '1 minutu'
        },
        dual: '{{count}} minute',
        other: '{{count}} minuta'
    },
    aboutXHours: {
        one: {
            standalone: 'oko 1 sat',
            withPrepositionAgo: 'oko 1 sat',
            withPrepositionIn: 'oko 1 sat'
        },
        dual: 'oko {{count}} sata',
        other: 'oko {{count}} sati'
    },
    xHours: {
        one: {
            standalone: '1 sat',
            withPrepositionAgo: '1 sat',
            withPrepositionIn: '1 sat'
        },
        dual: '{{count}} sata',
        other: '{{count}} sati'
    },
    xDays: {
        one: {
            standalone: '1 dan',
            withPrepositionAgo: '1 dan',
            withPrepositionIn: '1 dan'
        },
        dual: '{{count}} dana',
        other: '{{count}} dana'
    },
    aboutXWeeks: {
        one: {
            standalone: 'oko 1 tjedan',
            withPrepositionAgo: 'oko 1 tjedan',
            withPrepositionIn: 'oko 1 tjedan'
        },
        dual: 'oko {{count}} tjedna',
        other: 'oko {{count}} tjedana'
    },
    xWeeks: {
        one: {
            standalone: '1 tjedan',
            withPrepositionAgo: '1 tjedan',
            withPrepositionIn: '1 tjedan'
        },
        dual: '{{count}} tjedna',
        other: '{{count}} tjedana'
    },
    aboutXMonths: {
        one: {
            standalone: 'oko 1 mjesec',
            withPrepositionAgo: 'oko 1 mjesec',
            withPrepositionIn: 'oko 1 mjesec'
        },
        dual: 'oko {{count}} mjeseca',
        other: 'oko {{count}} mjeseci'
    },
    xMonths: {
        one: {
            standalone: '1 mjesec',
            withPrepositionAgo: '1 mjesec',
            withPrepositionIn: '1 mjesec'
        },
        dual: '{{count}} mjeseca',
        other: '{{count}} mjeseci'
    },
    aboutXYears: {
        one: {
            standalone: 'oko 1 godinu',
            withPrepositionAgo: 'oko 1 godinu',
            withPrepositionIn: 'oko 1 godinu'
        },
        dual: 'oko {{count}} godine',
        other: 'oko {{count}} godina'
    },
    xYears: {
        one: {
            standalone: '1 godina',
            withPrepositionAgo: '1 godine',
            withPrepositionIn: '1 godinu'
        },
        dual: '{{count}} godine',
        other: '{{count}} godina'
    },
    overXYears: {
        one: {
            standalone: 'preko 1 godinu',
            withPrepositionAgo: 'preko 1 godinu',
            withPrepositionIn: 'preko 1 godinu'
        },
        dual: 'preko {{count}} godine',
        other: 'preko {{count}} godina'
    },
    almostXYears: {
        one: {
            standalone: 'gotovo 1 godinu',
            withPrepositionAgo: 'gotovo 1 godinu',
            withPrepositionIn: 'gotovo 1 godinu'
        },
        dual: 'gotovo {{count}} godine',
        other: 'gotovo {{count}} godina'
    }
};
let i = function (o, e, n) {
    var i,
        a = t[o];
    if (((i = 'string' == typeof a ? a : 1 === e ? (null != n && n.addSuffix ? (n.comparison && n.comparison > 0 ? a.one.withPrepositionIn : a.one.withPrepositionAgo) : a.one.standalone) : e % 10 > 1 && e % 10 < 5 && '1' !== String(e).substr(-2, 1) ? a.dual.replace('{{count}}', String(e)) : a.other.replace('{{count}}', String(e))), null != n && n.addSuffix))
        if (n.comparison && n.comparison > 0) return 'za ' + i;
        else return 'prije ' + i;
    return i;
};
