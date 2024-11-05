n.d(t, {
    FK: function () {
        return function e(t, n, r, l, u, c, d) {
            if (1 === t.length && (0, a.O4)(t[0]))
                return [
                    {
                        type: i.literal,
                        value: t[0].value
                    }
                ];
            for (var f, _ = [], h = 0; h < t.length; h++) {
                var p = t[h];
                if ((0, a.O4)(p)) {
                    _.push({
                        type: i.literal,
                        value: p.value
                    });
                    continue;
                }
                if ((0, a.yx)(p)) {
                    'number' == typeof c &&
                        _.push({
                            type: i.literal,
                            value: r.getNumberFormat(n).format(c)
                        });
                    continue;
                }
                var m = p.value;
                if (!(u && m in u)) throw new s.HR(m, d);
                var g = u[m];
                if ((0, a.VG)(p)) {
                    (!g || 'string' == typeof g || 'number' == typeof g) && (g = 'string' == typeof g || 'number' == typeof g ? String(g) : ''),
                        _.push({
                            type: 'string' == typeof g ? i.literal : i.object,
                            value: g
                        });
                    continue;
                }
                if ((0, a.rp)(p)) {
                    var E = 'string' == typeof p.style ? l.date[p.style] : (0, a.Ii)(p.style) ? p.style.parsedOptions : void 0;
                    _.push({
                        type: i.literal,
                        value: r.getDateTimeFormat(n, E).format(g)
                    });
                    continue;
                }
                if ((0, a.pe)(p)) {
                    var E = 'string' == typeof p.style ? l.time[p.style] : (0, a.Ii)(p.style) ? p.style.parsedOptions : l.time.medium;
                    _.push({
                        type: i.literal,
                        value: r.getDateTimeFormat(n, E).format(g)
                    });
                    continue;
                }
                if ((0, a.uf)(p)) {
                    var E = 'string' == typeof p.style ? l.number[p.style] : (0, a.Wh)(p.style) ? p.style.parsedOptions : void 0;
                    E && E.scale && (g *= E.scale || 1),
                        _.push({
                            type: i.literal,
                            value: r.getNumberFormat(n, E).format(g)
                        });
                    continue;
                }
                if ((0, a.HI)(p)) {
                    var v = p.children,
                        I = p.value,
                        S = u[I];
                    if (!o(S)) throw new s.YR(I, 'function', d);
                    var T = S(
                        e(v, n, r, l, u, c).map(function (e) {
                            return e.value;
                        })
                    );
                    !Array.isArray(T) && (T = [T]),
                        _.push.apply(
                            _,
                            T.map(function (e) {
                                return {
                                    type: 'string' == typeof e ? i.literal : i.object,
                                    value: e
                                };
                            })
                        );
                }
                if ((0, a.Wi)(p)) {
                    var b = p.options[g] || p.options.other;
                    if (!b) throw new s.C8(p.value, g, Object.keys(p.options), d);
                    _.push.apply(_, e(b.value, n, r, l, u));
                    continue;
                }
                if ((0, a.Jo)(p)) {
                    var b = p.options['='.concat(g)];
                    if (!b) {
                        if (!Intl.PluralRules) throw new s.u_('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', s.jK.MISSING_INTL_API, d);
                        var y = r.getPluralRules(n, { type: p.pluralType }).select(g - (p.offset || 0));
                        b = p.options[y] || p.options.other;
                    }
                    if (!b) throw new s.C8(p.value, g, Object.keys(p.options), d);
                    _.push.apply(_, e(b.value, n, r, l, u, g - (p.offset || 0)));
                    continue;
                }
            }
            return (f = _).length < 2
                ? f
                : f.reduce(function (e, t) {
                      var n = e[e.length - 1];
                      return n && n.type === i.literal && t.type === i.literal ? (n.value += t.value) : e.push(t), e;
                  }, []);
        };
    },
    Gt: function () {
        return o;
    },
    du: function () {
        return i;
    }
});
var r,
    i,
    a = n(322182),
    s = n(584811);
((r = i || (i = {}))[(r.literal = 0)] = 'literal'), (r[(r.object = 1)] = 'object');
function o(e) {
    return 'function' == typeof e;
}
