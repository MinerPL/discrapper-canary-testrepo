n.d(t, {
    N: function () {
        return l;
    }
});
var r = n(812975),
    i = n(686942),
    a = n(713267),
    s = n(695170),
    o = n(829105);
function l(e) {
    for (var t = [], n = '', l = Object.keys(e), u = Object.keys(r.WN), c = 0; c < l.length; c++) {
        if ('tzid' !== l[c] && !!(0, i.q9)(u, l[c])) {
            var d = l[c].toUpperCase(),
                _ = e[l[c]],
                E = '';
            if (!(!(0, i.EN)(_) || ((0, i.kJ)(_) && !_.length))) {
                switch (d) {
                    case 'FREQ':
                        E = r.Ci.FREQUENCIES[e.freq];
                        break;
                    case 'WKST':
                        E = (0, i.hj)(_) ? new a.O(_).toString() : _.toString();
                        break;
                    case 'BYWEEKDAY':
                        (d = 'BYDAY'),
                            (E = (0, i.qo)(_)
                                .map(function (e) {
                                    return e instanceof a.O ? e : (0, i.kJ)(e) ? new a.O(e[0], e[1]) : new a.O(e);
                                })
                                .toString());
                        break;
                    case 'DTSTART':
                        n = (function (e, t) {
                            return e ? 'DTSTART' + new o.M(new Date(e), t).toString() : '';
                        })(_, e.tzid);
                        break;
                    case 'UNTIL':
                        E = (0, s.Od)(_, !e.tzid);
                        break;
                    default:
                        if ((0, i.kJ)(_)) {
                            for (var f = [], h = 0; h < _.length; h++) f[h] = String(_[h]);
                            E = f.toString();
                        } else E = String(_);
                }
                E && t.push([d, E]);
            }
        }
    }
    var p = t
            .map(function (e) {
                var t = e[0],
                    n = e[1];
                return ''.concat(t, '=').concat(n.toString());
            })
            .join(';'),
        m = '';
    return (
        '' !== p && (m = 'RRULE:'.concat(p)),
        [n, m]
            .filter(function (e) {
                return !!e;
            })
            .join('\n')
    );
}
