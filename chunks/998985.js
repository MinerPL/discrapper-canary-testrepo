function i(a) {
    return a.replace(/sekuntia?/, 'sekunnin');
}
function t(a) {
    return a.replace(/minuuttia?/, 'minuutin');
}
function n(a) {
    return a.replace(/tuntia?/, 'tunnin');
}
function u(a) {
    return a.replace(/(viikko|viikkoa)/, 'viikon');
}
function o(a) {
    return a.replace(/(kuukausi|kuukautta)/, 'kuukauden');
}
function r(a) {
    return a.replace(/(vuosi|vuotta)/, 'vuoden');
}
var l = {
    lessThanXSeconds: {
        one: 'alle sekunti',
        other: 'alle {{count}} sekuntia',
        futureTense: i
    },
    xSeconds: {
        one: 'sekunti',
        other: '{{count}} sekuntia',
        futureTense: i
    },
    halfAMinute: {
        one: 'puoli minuuttia',
        other: 'puoli minuuttia',
        futureTense: function (a) {
            return 'puolen minuutin';
        }
    },
    lessThanXMinutes: {
        one: 'alle minuutti',
        other: 'alle {{count}} minuuttia',
        futureTense: t
    },
    xMinutes: {
        one: 'minuutti',
        other: '{{count}} minuuttia',
        futureTense: t
    },
    aboutXHours: {
        one: 'noin tunti',
        other: 'noin {{count}} tuntia',
        futureTense: n
    },
    xHours: {
        one: 'tunti',
        other: '{{count}} tuntia',
        futureTense: n
    },
    xDays: {
        one: 'päivä',
        other: '{{count}} päivää',
        futureTense: function (a) {
            return a.replace(/päivää?/, 'päivän');
        }
    },
    aboutXWeeks: {
        one: 'noin viikko',
        other: 'noin {{count}} viikkoa',
        futureTense: u
    },
    xWeeks: {
        one: 'viikko',
        other: '{{count}} viikkoa',
        futureTense: u
    },
    aboutXMonths: {
        one: 'noin kuukausi',
        other: 'noin {{count}} kuukautta',
        futureTense: o
    },
    xMonths: {
        one: 'kuukausi',
        other: '{{count}} kuukautta',
        futureTense: o
    },
    aboutXYears: {
        one: 'noin vuosi',
        other: 'noin {{count}} vuotta',
        futureTense: r
    },
    xYears: {
        one: 'vuosi',
        other: '{{count}} vuotta',
        futureTense: r
    },
    overXYears: {
        one: 'yli vuosi',
        other: 'yli {{count}} vuotta',
        futureTense: r
    },
    almostXYears: {
        one: 'lähes vuosi',
        other: 'lähes {{count}} vuotta',
        futureTense: r
    }
};
e.Z = function (a, e, i) {
    var t = l[a],
        n = 1 === e ? t.one : t.other.replace('{{count}}', String(e));
    if (null != i && i.addSuffix) return i.comparison && i.comparison > 0 ? t.futureTense(n) + ' kuluttua' : n + ' sitten';
    return n;
};
