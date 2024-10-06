n.d(t, {
    $R: function () {
        return Y;
    },
    A0: function () {
        return ee;
    },
    GU: function () {
        return q;
    },
    H8: function () {
        return r;
    },
    HI: function () {
        return X;
    },
    HW: function () {
        return H;
    },
    Ib: function () {
        return ei;
    },
    KB: function () {
        return ec;
    },
    S2: function () {
        return V;
    },
    W6: function () {
        return et;
    },
    XM: function () {
        return en;
    },
    YC: function () {
        return eu;
    },
    YE: function () {
        return ea;
    },
    h9: function () {
        return el;
    },
    iw: function () {
        return a;
    },
    jC: function () {
        return z;
    },
    jQ: function () {
        return U;
    },
    lT: function () {
        return K;
    },
    rd: function () {
        return es;
    },
    t4: function () {
        return eo;
    },
    uF: function () {
        return ed;
    },
    zn: function () {
        return $;
    }
}),
    n(47120),
    n(724458),
    n(653041);
var r,
    a,
    l,
    i,
    o = n(470079),
    s = n(216397),
    c = n(764160),
    d = n(808131),
    u = n(757028),
    h = n(694626),
    m = n(855930),
    x = n(385787),
    f = n(566162),
    p = n(567027),
    g = n(461195),
    b = n(857702),
    v = n(20450),
    _ = n(312976),
    j = n(147591),
    C = n(135164),
    T = n(940172),
    S = n(81011),
    N = n(981613),
    y = n(762399),
    I = n(232112),
    E = n(53796),
    w = n(723757),
    k = n(375924),
    R = n(596136),
    Z = n(341901),
    O = n(856308),
    A = n(665352),
    L = n(394900),
    B = n(661105),
    P = n(525169),
    M = n(433517),
    D = n(190558),
    F = n(231338);
let H = {
        sRGB: s.Z,
        A98RGB: c.Z,
        ACEScc: d.Z,
        ACEScg: u.Z,
        HPLuv: h.Z,
        HSL: m.Z,
        HSLuv: x.Z,
        HSV: f.Z,
        HWB: p.Z,
        ICTCP: g.Z,
        JzCzHz: b.Z,
        Jzazbz: v.Z,
        LCH: _.Z,
        LCHuv: j.Z,
        Lab: C.Z,
        Lab_D65: T.Z,
        Luv: S.Z,
        OKLCH: N.Z,
        OKLab: y.Z,
        P3: I.Z,
        ProPhoto: E.Z,
        REC_2020: w.Z,
        REC_2100_HLG: k.Z,
        REC_2100_PQ: R.Z,
        XYZ_D50: Z.Z,
        XYZ_D65: O.Z
    },
    U = Object.fromEntries(Object.keys(H).map((e) => [e, e]));
Object.values(H).forEach((e) => A.Z.register(e));
let { SemanticColors: G } = D.V,
    z = G,
    V = CSS.supports('color', 'color(display-p3 1 0 0)') && CSS.supports('color', 'color(display-p3 1 0 0 / 1)');
function W(e, t) {
    let [n, r] = o.useState(() => {
        let n = M.K.get(e);
        return null != n ? n : t;
    });
    return (
        o.useEffect(() => {
            M.K.set(e, n);
        }, [e, n]),
        [n, r]
    );
}
function Y(e) {
    let t = z[e];
    return {
        name: e,
        colors: Object.fromEntries(
            Object.values(F.BR).map((e) => [
                e,
                {
                    color: t[e].raw,
                    opacity: t[e].opacity
                }
            ])
        ),
        highlight: !1
    };
}
function K(e, t, n, r, a) {
    return {
        name: t,
        colors: {
            ...e.colors,
            [a]: {
                color: n,
                opacity: r
            }
        },
        highlight: !1
    };
}
function q(e) {
    return {
        ...e,
        highlight: !e.highlight
    };
}
function X(e) {
    return (0, L.Z)((0, B.Z)(e, s.Z), { format: 'hex' });
}
function $() {
    return (function (e, t) {
        let [n, r] = W(''.concat(e, '-states'), [t]),
            [a, l] = W(''.concat(e, '-index'), 0),
            i = n[a],
            s = o.useCallback(
                (e) => {
                    r(['function' == typeof e ? e(i) : e, ...n].slice(0, 20)), l(0);
                },
                [l, r, n, i]
            ),
            c = o.useCallback(() => {
                l(Math.min(n.length - 1, a + 1));
            }, [a, l, n.length]),
            d = o.useCallback(() => {
                l(Math.max(0, a - 1));
            }, [a, l]),
            u = a < n.length - 1;
        return [i, s, c, d, u, a > 0];
    })('color-override-9-24-2024', {
        semanticColorOverrides: {},
        rawColorOverrides: {},
        tab: 'Tokens',
        scales: []
    });
}
((l = r || (r = {})).TOKENS = 'Tokens'), (l.PALETTES = 'Palettes');
let Q = [100, 130, 160, 200, 230, 260, 300, 330, 345, 360, 400, 430, 460, 500, 530, 560, 600, 630, 660, 700, 730, 760, 800, 830, 860, 900],
    J = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
function ee(e) {
    return 'plum' === e ? J : Q;
}
function et(e, t) {
    let n = ee(t),
        r = Object.keys(e).map((e) => parseInt(e.split('-')[1])),
        a = Math.max(...r) / (n.length - 1),
        l = {};
    return (
        n.forEach((e, n) => {
            let i = Math.round(n * a),
                o = r.reduce((e, t) => (Math.abs(t - i) < Math.abs(e - i) ? t : e));
            l[''.concat(t, '-').concat(o)] = ''.concat(t, '-').concat(e);
        }),
        l
    );
}
function en(e) {
    let { name: t, base: n, steps: r = 26, darkness: a, lightness: l, easingStrength: i = 1 } = e,
        o = H[e.colorSpace],
        c = (0, B.Z)(n, o),
        d = (0, P.CD)(c, 'white', 1 - a, {
            space: o,
            outputSpace: s.Z
        }),
        u = (0, P.CD)(c, 'black', 1 - l, {
            space: o,
            outputSpace: s.Z
        }),
        h = Math.floor(r / 2),
        m = r - h,
        x = (0, P.w6)(d, c, {
            steps: h,
            outputSpace: o,
            space: o,
            progression: (e) => e ** i
        }),
        f = (0, P.w6)(u, c, {
            steps: m,
            outputSpace: o,
            space: o,
            progression: (e) => e ** i
        }),
        p = [];
    for (let e = 0; e < h; e++) {
        let t = x(e / h);
        p.push(t);
    }
    p.push(c);
    for (let e = 1; e < m; e++) {
        let t = f(1 - e / m);
        p.push(t);
    }
    return Object.fromEntries(p.map((e, n) => [''.concat(t, '-').concat(n), e]));
}
function er(e, t, n) {
    n((n) =>
        null == n.scales.find((t) => t.name === e)
            ? n
            : {
                  ...n,
                  scales: n.scales.map((n) => (n.name === e ? t(n) : n))
              }
    );
}
function ea(e, t, n) {
    er(
        e,
        (e) => ({
            ...e,
            darkness: t
        }),
        n
    );
}
function el(e, t, n) {
    er(
        e,
        (e) => ({
            ...e,
            lightness: t
        }),
        n
    );
}
function ei(e, t, n) {
    er(
        e,
        (e) => ({
            ...e,
            base: t
        }),
        n
    );
}
function eo(e, t, n) {
    er(
        e,
        (e) => ({
            ...e,
            colorSpace: t
        }),
        n
    );
}
function es(e, t, n) {
    er(
        e,
        (e) => ({
            ...e,
            easingStrength: t
        }),
        n
    );
}
function ec(e, t, n) {
    er(
        e,
        (e) => ({
            ...e,
            showColumnarPalettePreview: t
        }),
        n
    );
}
function ed(e, t, n) {
    er(
        e,
        (e) => ({
            ...e,
            useP3ColorSpace: t
        }),
        n
    );
}
function eu(e, t, n) {
    er(
        e,
        (e) => ({
            ...e,
            steps: t
        }),
        n
    );
}
((i = a || (a = {})).LINEAR = 'Linear'), (i.EASE_IN = 'Ease In'), (i.EASE_OUT = 'Ease Out'), (i.EASE_IN_OUT = 'Ease In Out');
