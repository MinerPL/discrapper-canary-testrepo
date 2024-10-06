t.d(s, {
    Z: function () {
        return _;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(442837),
    r = t(481060),
    o = t(607070),
    l = t(667105),
    c = t(211712),
    d = t(690412);
function _() {
    let { selectedPreset: e, onShuffle: s } = (function () {
        let [e, s] = a.useState(c.eQ.ABOVE_THE_CLOUDS),
            t = a.useRef({ ...c.J2 }),
            n = a.useCallback(() => {
                let e = Object.values(t.current);
                return e[Math.floor(Math.random() * e.length)];
            }, []),
            i = a.useCallback(() => {
                0 === Object.values(t.current).length && (t.current = { ...c.J2 });
                let a = n();
                for (; a.presetName === e; ) a = n();
                s(a.presetName), delete t.current[a.presetName];
            }, [n, e]);
        return {
            selectedPreset: e,
            onShuffle: i
        };
    })();
    (0, c.m4)(e);
    let t = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        _ = (0, l.g2)({ useReducedMotion: t });
    return (0, n.jsxs)('div', {
        className: d.container,
        children: [
            (0, n.jsx)(r.Clickable, {
                onClick: () => {
                    s(), _.startAnimation(!1);
                },
                className: d.button,
                'aria-label': 'Shuffle',
                children: _.render()
            }),
            (0, n.jsxs)('div', {
                className: d.select,
                children: [
                    (0, n.jsx)('img', {
                        alt: '',
                        'aria-hidden': !0,
                        src: c.J2[e].presetBackgroundUrl,
                        className: d.presetImage
                    }),
                    (0, n.jsx)(r.Text, {
                        className: d.presetLabel,
                        variant: 'text-sm/bold',
                        color: 'always-white',
                        children: (0, c._h)(e)
                    })
                ]
            })
        ]
    });
}
