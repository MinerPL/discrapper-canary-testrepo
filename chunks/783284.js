function t(i, n) {
    if (void 0 !== i.one && 1 === n) return i.one;
    var t = n % 10,
        e = n % 100;
    return 1 === t && 11 !== e ? i.singularNominative.replace('{{count}}', String(n)) : t >= 2 && t <= 4 && (e < 10 || e > 20) ? i.singularGenitive.replace('{{count}}', String(n)) : i.pluralGenitive.replace('{{count}}', String(n));
}
function e(i) {
    return function (n, e) {
        if (!e || !e.addSuffix) return t(i.regular, n);
        if (e.comparison && e.comparison > 0) return i.future ? t(i.future, n) : 'за ' + t(i.regular, n);
        return i.past ? t(i.past, n) : t(i.regular, n) + ' тому';
    };
}
var a = {
    lessThanXSeconds: e({
        regular: {
            one: 'менше секунди',
            singularNominative: 'менше {{count}} секунди',
            singularGenitive: 'менше {{count}} секунд',
            pluralGenitive: 'менше {{count}} секунд'
        },
        future: {
            one: 'менше, ніж за секунду',
            singularNominative: 'менше, ніж за {{count}} секунду',
            singularGenitive: 'менше, ніж за {{count}} секунди',
            pluralGenitive: 'менше, ніж за {{count}} секунд'
        }
    }),
    xSeconds: e({
        regular: {
            singularNominative: '{{count}} секунда',
            singularGenitive: '{{count}} секунди',
            pluralGenitive: '{{count}} секунд'
        },
        past: {
            singularNominative: '{{count}} секунду тому',
            singularGenitive: '{{count}} секунди тому',
            pluralGenitive: '{{count}} секунд тому'
        },
        future: {
            singularNominative: 'за {{count}} секунду',
            singularGenitive: 'за {{count}} секунди',
            pluralGenitive: 'за {{count}} секунд'
        }
    }),
    halfAMinute: function (i, n) {
        if (n && n.addSuffix) return n.comparison && n.comparison > 0 ? 'за півхвилини' : 'півхвилини тому';
        return 'півхвилини';
    },
    lessThanXMinutes: e({
        regular: {
            one: 'менше хвилини',
            singularNominative: 'менше {{count}} хвилини',
            singularGenitive: 'менше {{count}} хвилин',
            pluralGenitive: 'менше {{count}} хвилин'
        },
        future: {
            one: 'менше, ніж за хвилину',
            singularNominative: 'менше, ніж за {{count}} хвилину',
            singularGenitive: 'менше, ніж за {{count}} хвилини',
            pluralGenitive: 'менше, ніж за {{count}} хвилин'
        }
    }),
    xMinutes: e({
        regular: {
            singularNominative: '{{count}} хвилина',
            singularGenitive: '{{count}} хвилини',
            pluralGenitive: '{{count}} хвилин'
        },
        past: {
            singularNominative: '{{count}} хвилину тому',
            singularGenitive: '{{count}} хвилини тому',
            pluralGenitive: '{{count}} хвилин тому'
        },
        future: {
            singularNominative: 'за {{count}} хвилину',
            singularGenitive: 'за {{count}} хвилини',
            pluralGenitive: 'за {{count}} хвилин'
        }
    }),
    aboutXHours: e({
        regular: {
            singularNominative: 'близько {{count}} години',
            singularGenitive: 'близько {{count}} годин',
            pluralGenitive: 'близько {{count}} годин'
        },
        future: {
            singularNominative: 'приблизно за {{count}} годину',
            singularGenitive: 'приблизно за {{count}} години',
            pluralGenitive: 'приблизно за {{count}} годин'
        }
    }),
    xHours: e({
        regular: {
            singularNominative: '{{count}} годину',
            singularGenitive: '{{count}} години',
            pluralGenitive: '{{count}} годин'
        }
    }),
    xDays: e({
        regular: {
            singularNominative: '{{count}} день',
            singularGenitive: '{{count}} днi',
            pluralGenitive: '{{count}} днів'
        }
    }),
    aboutXWeeks: e({
        regular: {
            singularNominative: 'близько {{count}} тижня',
            singularGenitive: 'близько {{count}} тижнів',
            pluralGenitive: 'близько {{count}} тижнів'
        },
        future: {
            singularNominative: 'приблизно за {{count}} тиждень',
            singularGenitive: 'приблизно за {{count}} тижні',
            pluralGenitive: 'приблизно за {{count}} тижнів'
        }
    }),
    xWeeks: e({
        regular: {
            singularNominative: '{{count}} тиждень',
            singularGenitive: '{{count}} тижні',
            pluralGenitive: '{{count}} тижнів'
        }
    }),
    aboutXMonths: e({
        regular: {
            singularNominative: 'близько {{count}} місяця',
            singularGenitive: 'близько {{count}} місяців',
            pluralGenitive: 'близько {{count}} місяців'
        },
        future: {
            singularNominative: 'приблизно за {{count}} місяць',
            singularGenitive: 'приблизно за {{count}} місяці',
            pluralGenitive: 'приблизно за {{count}} місяців'
        }
    }),
    xMonths: e({
        regular: {
            singularNominative: '{{count}} місяць',
            singularGenitive: '{{count}} місяці',
            pluralGenitive: '{{count}} місяців'
        }
    }),
    aboutXYears: e({
        regular: {
            singularNominative: 'близько {{count}} року',
            singularGenitive: 'близько {{count}} років',
            pluralGenitive: 'близько {{count}} років'
        },
        future: {
            singularNominative: 'приблизно за {{count}} рік',
            singularGenitive: 'приблизно за {{count}} роки',
            pluralGenitive: 'приблизно за {{count}} років'
        }
    }),
    xYears: e({
        regular: {
            singularNominative: '{{count}} рік',
            singularGenitive: '{{count}} роки',
            pluralGenitive: '{{count}} років'
        }
    }),
    overXYears: e({
        regular: {
            singularNominative: 'більше {{count}} року',
            singularGenitive: 'більше {{count}} років',
            pluralGenitive: 'більше {{count}} років'
        },
        future: {
            singularNominative: 'більше, ніж за {{count}} рік',
            singularGenitive: 'більше, ніж за {{count}} роки',
            pluralGenitive: 'більше, ніж за {{count}} років'
        }
    }),
    almostXYears: e({
        regular: {
            singularNominative: 'майже {{count}} рік',
            singularGenitive: 'майже {{count}} роки',
            pluralGenitive: 'майже {{count}} років'
        },
        future: {
            singularNominative: 'майже за {{count}} рік',
            singularGenitive: 'майже за {{count}} роки',
            pluralGenitive: 'майже за {{count}} років'
        }
    })
};
n.Z = function (i, n, t) {
    return (t = t || {}), a[i](n, t);
};
