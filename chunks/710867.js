var r = n(200651);
n(192379);
var i = n(293335),
    a = n(831748);
t.Z = (e) => {
    let { profileEffectConfig: t, onReady: n } = e,
        { pendingRef: s, setPending: o } = (0, i.Z)(t.effects, n);
    return (0, r.jsx)('div', {
        className: a.profileEffects,
        children: (0, r.jsx)('div', {
            className: a.inner,
            children: t.effects.map((e) =>
                (0, r.jsx)(
                    'img',
                    {
                        src: e.src,
                        alt: 'Preload Profile Effect Asset',
                        'aria-hidden': !0,
                        style: {
                            opacity: 0,
                            position: 'absolute'
                        },
                        onLoad: () => {
                            o(s.current - 1), (s.current = s.current - 1);
                        }
                    },
                    e.src
                )
            )
        })
    });
};
