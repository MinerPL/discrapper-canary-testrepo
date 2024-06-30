t.d(n, {
    w: function () {
        return f;
    }
}), t(47120);
var l = t(470079), a = t(688619), r = t.n(a), o = t(979590), i = t.n(o), u = t(442837), s = t(866442), c = t(607070), d = t(220082), E = t(981631);
let _ = (e, n) => {
        let t = c.Z.desaturateUserColors ? c.Z.saturation : 1, l = d.SR.getState().palette[e], a = null == l ? void 0 : l.map(e => {
                let [n, l, a] = e, {
                        h: r,
                        s: o,
                        l: u
                    } = i()({
                        r: n,
                        g: l,
                        b: a
                    }).toHsl();
                return i()({
                    h: r,
                    s: o * t,
                    l: u
                }).toHexString();
            });
        return null != a ? a : [
            n,
            n
        ];
    }, f = e => {
        var n, l, a, o, i, u;
        let d;
        d = t(481060).tokens;
        let f = c.Z.saturation, [T, v] = _(e, null !== (u = null == d ? void 0 : null === (i = d.colors) || void 0 === i ? void 0 : null === (o = i.BACKGROUND_FLOATING) || void 0 === o ? void 0 : null === (a = o.resolve) || void 0 === a ? void 0 : null === (l = a.call(o, {
                theme: E.BRd.DARK,
                saturation: f
            })) || void 0 === l ? void 0 : null === (n = l.hex) || void 0 === n ? void 0 : n.call(l)) && void 0 !== u ? u : '#000'), m = (0, s._i)(T), N = (0, s._i)(v);
        for (let e = 1; e < 8 && !((0, s.Bd)(m) >= 0.725); e++) {
            ;
            m = r()(m).darken(0.5).num();
        }
        for (let e = 1; e < 8 && !((0, s.Bd)(N) >= 0.725); e++) {
            ;
            N = r()(N).darken(0.5).num();
        }
        let x = (0, s.Rf)(m);
        return {
            primaryColor: x,
            secondaryColor: (0, s.Rf)(N)
        };
    };
n.Z = e => {
    var n, a, o, i, _, f;
    let T;
    T = t(481060).tokens;
    let v = (0, u.e7)([c.Z], () => c.Z.saturation), [m, N] = (0, d.Cf)(e, null !== (f = null == T ? void 0 : null === (_ = T.colors) || void 0 === _ ? void 0 : null === (i = _.BACKGROUND_FLOATING) || void 0 === i ? void 0 : null === (o = i.resolve) || void 0 === o ? void 0 : null === (a = o.call(i, {
            theme: E.BRd.DARK,
            saturation: v
        })) || void 0 === a ? void 0 : null === (n = a.hex) || void 0 === n ? void 0 : n.call(a)) && void 0 !== f ? f : '#000');
    return l.useMemo(() => {
        let e = (0, s._i)(m), n = (0, s._i)(N);
        for (let n = 1; n < 8 && !((0, s.Bd)(e) >= 0.725); n++) {
            ;
            e = r()(e).darken(0.5).num();
        }
        for (let e = 1; e < 8 && !((0, s.Bd)(n) >= 0.725); e++) {
            ;
            n = r()(n).darken(0.5).num();
        }
        let t = (0, s.Rf)(e);
        return {
            primaryColor: t,
            secondaryColor: (0, s.Rf)(n)
        };
    }, [
        m,
        N
    ]);
};
