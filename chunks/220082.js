n.d(t, {
    Cf: function () {
        return h;
    },
    SR: function () {
        return d;
    },
    ZP: function () {
        return f;
    },
    vM: function () {
        return _;
    }
}), n(47120);
var r = n(470079), i = n(979590), a = n.n(i), o = n(652874), s = n(442837), l = n(607070), u = n(302221), c = n(956664);
let d = (0, o.Z)(() => ({
    palette: {},
    fetching: {}
}));
async function _(e) {
    null == d.getState().palette[e] && await E(e);
}
async function E(e) {
    if (!d.getState().fetching[e]) {
        d.setState(t => ({
            fetching: {
                ...t.fetching,
                [e]: !0
            }
        }));
        try {
            let t = await (0, c.OF)(e), n = (0, u.WY)(t[0]);
            d.setState(r => ({
                fetching: {
                    ...r.fetching,
                    [e]: !1
                },
                palette: {
                    ...r.palette,
                    [e]: [
                        ...t.slice(0, 2),
                        ...n
                    ]
                }
            }));
        } catch (t) {
            d.setState(t => ({
                fetching: {
                    ...t.fetching,
                    [e]: !1
                }
            }));
        }
    }
}
function f(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2], [r] = h(e, t, n);
    return r;
}
function h(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2], i = d(t => null == e ? void 0 : t.palette[e]), o = (0, s.e7)([l.Z], () => n && l.Z.desaturateUserColors ? l.Z.saturation : 1);
    r.useEffect(() => {
        if (null != e && null == i)
            E(e);
    }, [
        e,
        i
    ]);
    let u = r.useMemo(() => null == i ? void 0 : i.map(e => {
        let [t, n, r] = e, {
                h: i,
                s,
                l
            } = a()({
                r: t,
                g: n,
                b: r
            }).toHsl();
        return a()({
            h: i,
            s: s * o,
            l
        }).toHexString();
    }), [
        i,
        o
    ]);
    return null != u ? u : [
        t,
        t
    ];
}
