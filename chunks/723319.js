var t = {
    lessThanXSeconds: {
        one: 'mindre end ét sekund',
        other: 'mindre end {{count}} sekunder'
    },
    xSeconds: {
        one: '1 sekund',
        other: '{{count}} sekunder'
    },
    halfAMinute: 'ét halvt minut',
    lessThanXMinutes: {
        one: 'mindre end ét minut',
        other: 'mindre end {{count}} minutter'
    },
    xMinutes: {
        one: '1 minut',
        other: '{{count}} minutter'
    },
    aboutXHours: {
        one: 'cirka 1 time',
        other: 'cirka {{count}} timer'
    },
    xHours: {
        one: '1 time',
        other: '{{count}} timer'
    },
    xDays: {
        one: '1 dag',
        other: '{{count}} dage'
    },
    aboutXWeeks: {
        one: 'cirka 1 uge',
        other: 'cirka {{count}} uger'
    },
    xWeeks: {
        one: '1 uge',
        other: '{{count}} uger'
    },
    aboutXMonths: {
        one: 'cirka 1 måned',
        other: 'cirka {{count}} måneder'
    },
    xMonths: {
        one: '1 måned',
        other: '{{count}} måneder'
    },
    aboutXYears: {
        one: 'cirka 1 år',
        other: 'cirka {{count}} år'
    },
    xYears: {
        one: '1 år',
        other: '{{count}} år'
    },
    overXYears: {
        one: 'over 1 år',
        other: 'over {{count}} år'
    },
    almostXYears: {
        one: 'næsten 1 år',
        other: 'næsten {{count}} år'
    }
};
n.Z = function (e, n, a) {
    var r,
        i = t[e];
    if (((r = 'string' == typeof i ? i : 1 === n ? i.one : i.other.replace('{{count}}', String(n))), null != a && a.addSuffix)) return a.comparison && a.comparison > 0 ? 'om ' + r : r + ' siden';
    return r;
};
