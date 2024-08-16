var r =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    i = n(512722),
    a = n(968598),
    s = n(592093),
    o = n(409940),
    l = n(763808),
    u = n(812797),
    c = n(683968),
    d = n(840552),
    _ = n(103840),
    E = n(916323);
n(464942);
var f = n(538605),
    h = n(19109),
    p = n(816479),
    m = function (e, t, n) {
        if (e instanceof o) {
            var i = r({}, t),
                a = r({}, t);
            for (var s in t) {
                var l = t[s],
                    u = l.x,
                    c = l.y;
                void 0 !== u && void 0 !== c && ((i[s] = u), (a[s] = c));
            }
            return g([n(e.x, i), n(e.y, a)], { stopTogether: !1 });
        }
        return null;
    },
    I = function e(t, n) {
        return (
            m(t, n, e) || {
                start: function (e) {
                    t.stopTracking(), n.toValue instanceof a ? t.track(new _(t, n.toValue, f, n, e)) : t.animate(new f(n), e);
                },
                stop: function () {
                    t.stopAnimation();
                }
            }
        );
    },
    T = function (e) {
        var t = 0;
        return {
            start: function (n) {
                0 === e.length
                    ? n && n({ finished: !0 })
                    : e[t].start(function r(i) {
                          if (!i.finished || ++t === e.length) {
                              n && n(i);
                              return;
                          }
                          e[t].start(r);
                      });
            },
            stop: function () {
                t < e.length && e[t].stop();
            }
        };
    },
    g = function (e, t) {
        var n = 0,
            r = {},
            i = !(t && !1 === t.stopTogether),
            a = {
                start: function (t) {
                    if (n === e.length) {
                        t && t({ finished: !0 });
                        return;
                    }
                    e.forEach(function (s, o) {
                        var l = function (s) {
                            if (((r[o] = !0), ++n === e.length)) {
                                (n = 0), t && t(s);
                                return;
                            }
                            !s.finished && i && a.stop();
                        };
                        s ? s.start(l) : l({ finished: !0 });
                    });
                },
                stop: function () {
                    e.forEach(function (e, t) {
                        r[t] || e.stop(), (r[t] = !0);
                    });
                }
            };
        return a;
    },
    S = function (e) {
        return I(new s(0), {
            toValue: 0,
            delay: e,
            duration: 0
        });
    };
e.exports = {
    Value: s,
    ValueXY: o,
    decay: function e(t, n) {
        return (
            m(t, n, e) || {
                start: function (e) {
                    t.stopTracking(), t.animate(new h(n), e);
                },
                stop: function () {
                    t.stopAnimation();
                }
            }
        );
    },
    timing: I,
    spring: function e(t, n) {
        return (
            m(t, n, e) || {
                start: function (e) {
                    t.stopTracking(), n.toValue instanceof a ? t.track(new _(t, n.toValue, p, n, e)) : t.animate(new p(n), e);
                },
                stop: function () {
                    t.stopAnimation();
                }
            }
        );
    },
    add: function (e, t) {
        return new l(e, t);
    },
    multiply: function (e, t) {
        return new u(e, t);
    },
    modulo: function (e, t) {
        return new c(e, t);
    },
    template: function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return new d(e, n);
    },
    delay: S,
    sequence: T,
    parallel: g,
    stagger: function (e, t) {
        return g(
            t.map(function (t, n) {
                return T([S(e * n), t]);
            })
        );
    },
    event: function (e, t) {
        return function () {
            for (var n = arguments.length, r = Array(n), a = 0; a < n; a++) r[a] = arguments[a];
            var o = function e(t, n, r) {
                if ('number' == typeof n) {
                    i(t instanceof s, 'Bad mapping of type ' + typeof t + ' for key ' + r + ', event value must map to AnimatedValue'), t.setValue(n);
                    return;
                }
                for (var r in (i('object' == typeof t, 'Bad mapping of type ' + typeof t + ' for key ' + r), i('object' == typeof n, 'Bad event of type ' + typeof n + ' for key ' + r), t)) e(t[r], n[r], r);
            };
            e.forEach(function (e, t) {
                o(e, r[t], 'arg' + t);
            }),
                t && t.listener && t.listener.apply(null, r);
        };
    },
    isAnimated: E,
    createAnimatedComponent: n(644971),
    inject: {
        ApplyAnimatedValues: n(752934).inject,
        InteractionManager: n(504144).inject,
        FlattenStyle: n(661493).inject,
        RequestAnimationFrame: n(1108).inject,
        CancelAnimationFrame: n(144613).inject
    },
    __PropsOnlyForTests: n(214438)
};
