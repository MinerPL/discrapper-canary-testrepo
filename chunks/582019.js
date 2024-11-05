n.d(t, {
    j: function () {
        return s;
    }
});
var i = n(200651),
    o = n(192379),
    r = n(709014);
let l = {
        all: {
            name: 'all',
            start: 0,
            duration: 66
        }
    },
    s = () => {
        let e = o.useRef(null),
            t = o.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []),
            s = o.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []),
            a = o.useCallback(() => {
                null != e.current && e.current.stopIfPlaying('all');
            }, []);
        return {
            events: {
                onClick: t,
                onMouseEnter: s,
                onMouseLeave: a
            },
            play: t,
            Component: o.useCallback(
                (t) =>
                    (0, i.jsx)(r.L, {
                        ...t,
                        src: () => n.e('66944').then(n.t.bind(n, 166174, 19)),
                        ref: e,
                        markers: l
                    }),
                []
            )
        };
    };
