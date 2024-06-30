e.d(t, {
    tS: function () {
        return _;
    },
    x3: function () {
        return s;
    }
}), e(47120);
var r = e(735250), i = e(470079), u = e(442837), o = e(846519), E = e(481060), a = e(706454), l = e(506071), T = e(561308), c = e(539331);
function _(n) {
    let [t, e] = i.useState(Date.now()), r = (0, l.n)(), u = i.useMemo(() => {
            let {hours: e} = (0, T.JY)(n, t);
            return e > 0 ? 300000 : 1000;
        }, [
            n,
            t
        ]);
    return i.useEffect(() => {
        let n = new o.Xp();
        return n.start(u, () => {
            e(Date.now());
        }), !r && n.stop(), () => n.stop();
    }, [
        u,
        r
    ]), t;
}
let s = n => {
    let {
            entry: t,
            inline: e = !1,
            textColor: u
        } = n, o = _(t), a = i.useMemo(() => (0, T.T_)(t, o), [
            t,
            o
        ]);
    return (0, r.jsx)(E.Text, {
        className: e ? c.inlineTimestamp : void 0,
        variant: 'text-xs/normal',
        tabularNumbers: !0,
        color: u,
        children: a
    });
};
t.ZP = n => {
    let {
            entry: t,
            textColor: e
        } = n, i = (0, T.kr)(t), o = (0, u.e7)([a.default], () => a.default.locale);
    return i ? (0, r.jsx)(s, {
        entry: t,
        textColor: e
    }) : (0, r.jsx)(E.Text, {
        variant: 'text-xs/normal',
        color: e,
        lineClamp: 1,
        children: (0, T.GL)(t, o)
    });
};
