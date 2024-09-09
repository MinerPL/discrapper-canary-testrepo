n.d(t, {
    j: function () {
        return l;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(709014);
let r = {
        all: {
            name: 'all',
            start: 0,
            duration: 66
        }
    },
    l = () => {
        let e = a.useRef(null),
            t = a.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []),
            l = a.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []),
            o = a.useCallback(() => {
                null != e.current && e.current.stopIfPlaying('all');
            }, []);
        return {
            events: {
                onClick: t,
                onMouseEnter: l,
                onMouseLeave: o
            },
            play: t,
            Component: a.useCallback(
                (t) =>
                    (0, i.jsx)(s.L, {
                        ...t,
                        src: () => n.e('66944').then(n.t.bind(n, 166174, 19)),
                        ref: e,
                        markers: r
                    }),
                []
            )
        };
    };
