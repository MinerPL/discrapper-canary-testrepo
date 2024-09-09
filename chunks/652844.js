n.d(t, {
    O: function () {
        return r;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(709014);
let l = {
        mute: {
            name: 'mute',
            start: 0,
            duration: 70
        },
        unmute: {
            name: 'unmute',
            start: 100,
            duration: 70
        },
        hover_unmuted: {
            name: 'hover_unmuted',
            start: 180,
            duration: 40
        },
        hover_muted: {
            name: 'hover_muted',
            start: 240,
            duration: 40
        }
    },
    r = (e) => {
        let t = a.useRef(null),
            r = a.useRef(e);
        r.current = e;
        let o = a.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e]
            ),
            c = a.useCallback(() => {
                if (null == t.current) return;
                let n = 'mute' === e ? 'hover_unmuted' : 'hover_muted';
                t.current.play(n);
            }, [e]),
            u = a.useCallback(() => {
                if (null == t.current) return;
                let n = 'mute' === e ? 'hover_unmuted' : 'hover_muted';
                t.current.stopIfPlaying(n);
            }, [e]);
        return {
            events: {
                onClick: o,
                onMouseEnter: c,
                onMouseLeave: u
            },
            play: o,
            Component: a.useCallback(
                (e) =>
                    (0, i.jsx)(s.L, {
                        ...e,
                        src: () => n.e('410').then(n.t.bind(n, 992285, 19)),
                        ref: t,
                        initialAnimation: r.current,
                        markers: l
                    }),
                []
            )
        };
    };
