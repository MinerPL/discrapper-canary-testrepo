n.d(t, {
    tS: function () {
        return p;
    },
    x3: function () {
        return I;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(846519),
    u = n(481060),
    c = n(607070),
    d = n(706454),
    _ = n(70956),
    E = n(506071),
    f = n(561308),
    h = n(666818);
function p(e) {
    let [t, n] = i.useState(Date.now()),
        r = (0, E.n)(),
        a = (0, o.e7)([c.Z], () => c.Z.useReducedMotion);
    return (
        i.useEffect(() => {
            let t = new l.Xp();
            return (
                t.start(_.Z.Millis.SECOND, () => {
                    n(Date.now());
                }),
                (!r || (a && !e)) && t.stop(),
                () => t.stop()
            );
        }, [r, a, e]),
        t
    );
}
let I = (e) => {
    let { entry: t, inline: n = !1, textColor: a, hovered: o = !1, bold: l = !1, scaleFontToUserSetting: c = !1 } = e,
        d = p(o),
        _ = i.useMemo(() => (0, f.T_)(t, d), [t, d]),
        E = i.useRef(_);
    return (
        i.useEffect(() => {
            E.current = _;
        }, [t]),
        (0, r.jsx)(u.Text, {
            className: s()(h.timestamp, {
                [h.inlineTimestamp]: n,
                [h.bold]: l
            }),
            variant: 'text-xs/medium',
            tabularNumbers: !0,
            color: a,
            scaleFontToUserSetting: c,
            'aria-label': E.current,
            children: _
        })
    );
};
t.ZP = (e) => {
    let { entry: t, textColor: n, hovered: i = !1, bold: a = !1, scaleFontToUserSetting: s = !1 } = e,
        l = (0, f.kr)(t),
        c = (0, o.e7)([d.default], () => d.default.locale);
    return l
        ? (0, r.jsx)(I, {
              entry: t,
              textColor: n,
              hovered: i,
              bold: a,
              scaleFontToUserSetting: s
          })
        : (0, r.jsx)(u.Text, {
              variant: 'text-xs/normal',
              color: n,
              lineClamp: 1,
              scaleFontToUserSetting: s,
              children: (0, f.GL)(t, c)
          });
};
