n.d(t, {
    S: function () {
        return c;
    }
});
var r = n(146150),
    i = n(812975),
    a = n(531171),
    s = n(695170),
    o = n(686942),
    l = n(200734),
    u = {
        dtstart: null,
        cache: !1,
        unfold: !1,
        forceset: !1,
        compatible: !1,
        tzid: null
    };
function c(e, t) {
    return (
        void 0 === t && (t = {}),
        (function (e, t) {
            var n,
                r,
                s,
                u,
                c,
                E,
                f,
                h,
                p,
                m =
                    ((n = e),
                    (r = t),
                    (s = []),
                    (u = []),
                    (c = []),
                    (E = []),
                    (h = (f = (0, l.o)(n)).dtstart),
                    (p = f.tzid),
                    (function (e, t) {
                        if ((void 0 === t && (t = !1), !(e = e && e.trim()))) throw Error('Invalid empty string');
                        if (!t) return e.split(/\s/);
                        for (var n = e.split('\n'), r = 0; r < n.length; ) {
                            var i = (n[r] = n[r].replace(/\s+$/g, ''));
                            i ? (r > 0 && ' ' === i[0] ? ((n[r - 1] += i.slice(1)), n.splice(r, 1)) : (r += 1)) : n.splice(r, 1);
                        }
                        return n;
                    })(n, r.unfold).forEach(function (e) {
                        if (e) {
                            var t,
                                n = (function (e) {
                                    var t = (function (e) {
                                            if (-1 === e.indexOf(':'))
                                                return {
                                                    name: 'RRULE',
                                                    value: e
                                                };
                                            var t = (0, o.Vl)(e, ':', 1);
                                            return {
                                                name: t[0],
                                                value: t[1]
                                            };
                                        })(e),
                                        n = t.name,
                                        r = t.value,
                                        i = n.split(';');
                                    if (!i) throw Error('empty property name');
                                    return {
                                        name: i[0].toUpperCase(),
                                        parms: i.slice(1),
                                        value: r
                                    };
                                })(e),
                                r = n.name,
                                i = n.parms,
                                a = n.value;
                            switch (r.toUpperCase()) {
                                case 'RRULE':
                                    if (i.length) throw Error('unsupported RRULE parm: '.concat(i.join(',')));
                                    s.push((0, l.B)(e));
                                    break;
                                case 'RDATE':
                                    var d = (null !== (t = /RDATE(?:;TZID=([^:=]+))?/i.exec(e)) && void 0 !== t ? t : [])[1];
                                    d && !p && (p = d), (u = u.concat(_(a, i)));
                                    break;
                                case 'EXRULE':
                                    if (i.length) throw Error('unsupported EXRULE parm: '.concat(i.join(',')));
                                    c.push((0, l.B)(a));
                                    break;
                                case 'EXDATE':
                                    E = E.concat(_(a, i));
                                    break;
                                case 'DTSTART':
                                    break;
                                default:
                                    throw Error('unsupported property: ' + r);
                            }
                        }
                    }),
                    {
                        dtstart: h,
                        tzid: p,
                        rrulevals: s,
                        rdatevals: u,
                        exrulevals: c,
                        exdatevals: E
                    }),
                I = m.rrulevals,
                T = m.rdatevals,
                g = m.exrulevals,
                S = m.exdatevals,
                A = m.dtstart,
                N = m.tzid,
                v = !1 === t.cache;
            if ((t.compatible && ((t.forceset = !0), (t.unfold = !0)), t.forceset || I.length > 1 || T.length || g.length || S.length)) {
                var O = new a.p(v);
                return (
                    O.dtstart(A),
                    O.tzid(N || void 0),
                    I.forEach(function (e) {
                        O.rrule(new i.Ci(d(e, A, N), v));
                    }),
                    T.forEach(function (e) {
                        O.rdate(e);
                    }),
                    g.forEach(function (e) {
                        O.exrule(new i.Ci(d(e, A, N), v));
                    }),
                    S.forEach(function (e) {
                        O.exdate(e);
                    }),
                    t.compatible && t.dtstart && O.rdate(A),
                    O
                );
            }
            var R = I[0] || {};
            return new i.Ci(d(R, R.dtstart || t.dtstart || A, R.tzid || t.tzid || N), v);
        })(
            e,
            (function (e) {
                var t = [],
                    n = Object.keys(e),
                    i = Object.keys(u);
                if (
                    (n.forEach(function (e) {
                        !(0, o.q9)(i, e) && t.push(e);
                    }),
                    t.length)
                )
                    throw Error('Invalid options: ' + t.join(', '));
                return (0, r.pi)((0, r.pi)({}, u), e);
            })(t)
        )
    );
}
function d(e, t, n) {
    return (0, r.pi)((0, r.pi)({}, e), {
        dtstart: t,
        tzid: n
    });
}
function _(e, t) {
    return (
        !(function (e) {
            e.forEach(function (e) {
                if (!/(VALUE=DATE(-TIME)?)|(TZID=)/.test(e)) throw Error('unsupported RDATE/EXDATE parm: ' + e);
            });
        })(t),
        e.split(',').map(function (e) {
            return (0, s.gE)(e);
        })
    );
}
