n.d(t, {
    K: function () {
        return o;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(709014);
let s = {
        all: {
            name: 'all',
            start: 0,
            duration: 90
        }
    },
    o = () => {
        let e = i.useRef(null),
            t = i.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []),
            o = i.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []),
            l = i.useCallback(() => {
                null != e.current && e.current.stopIfPlaying('all');
            }, []);
        return {
            events: {
                onMouseEnter: o,
                onMouseLeave: l
            },
            play: t,
            Component: i.useCallback(
                (t) =>
                    (0, r.jsx)(a.L, {
                        ...t,
                        src: () => n.e('52680').then(n.t.bind(n, 728913, 19)),
                        ref: e,
                        markers: s
                    }),
                []
            )
        };
    };
