n.d(t, {
    z: function () {
        return o;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(709014);
let s = {
        click: {
            name: 'click',
            start: 0,
            duration: 66
        },
        hover: {
            name: 'hover',
            start: 90,
            duration: 40
        }
    },
    o = () => {
        let e = i.useRef(null),
            t = i.useCallback(() => {
                null != e.current && e.current.play('click');
            }, []),
            o = i.useCallback(() => {
                null != e.current && e.current.play('hover');
            }, []),
            l = i.useCallback(() => {
                null != e.current && e.current.stopIfPlaying('hover');
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
                        src: () => n.e('36995').then(n.t.bind(n, 737962, 19)),
                        ref: e,
                        markers: s
                    }),
                []
            )
        };
    };
