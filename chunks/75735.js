n.d(t, {
    o: function () {
        return o;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(709014);
let s = {
        disable: {
            name: 'disable',
            start: 0,
            duration: 70
        },
        enable: {
            name: 'enable',
            start: 100,
            duration: 70
        },
        hover_enabled: {
            name: 'hover_enabled',
            start: 180,
            duration: 70
        },
        hover_disabled: {
            name: 'hover_disabled',
            start: 280,
            duration: 70
        }
    },
    o = (e) => {
        let t = i.useRef(null),
            o = i.useRef(e),
            l = i.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e]
            ),
            u = i.useCallback(() => {
                if (null == t.current) return;
                let n = 'enable' === e ? 'hover_disabled' : 'hover_enabled';
                t.current.play(n);
            }, [e]),
            c = i.useCallback(() => {
                if (null == t.current) return;
                let n = 'enable' === e ? 'hover_disabled' : 'hover_enabled';
                t.current.stopIfPlaying(n);
            }, [e]);
        return {
            events: {
                onClick: l,
                onMouseEnter: u,
                onMouseLeave: c
            },
            play: l,
            Component: i.useCallback(
                (e) =>
                    (0, r.jsx)(a.L, {
                        ...e,
                        src: () => n.e('8366').then(n.t.bind(n, 553427, 19)),
                        ref: t,
                        initialAnimation: o.current,
                        markers: s
                    }),
                []
            )
        };
    };
