n.d(t, {
    P: function () {
        return s;
    }
});
var r = n(735250), i = n(470079), a = n(709014);
let o = {
        enable: {
            name: 'enable',
            start: 0,
            duration: 70
        },
        disable: {
            name: 'disable',
            start: 90,
            duration: 70
        },
        hover_enabled: {
            name: 'hover_enabled',
            start: 180,
            duration: 40
        },
        hover_disabled: {
            name: 'hover_disabled',
            start: 240,
            duration: 40
        }
    }, s = e => {
        let t = i.useRef(null), s = i.useRef(e), l = i.useMemo(() => () => {
                null != t.current && t.current.play(e);
            }, [e]), u = i.useCallback(() => {
                if (null == t.current)
                    return;
                let n = 'enable' === e ? 'hover_disabled' : 'hover_enabled';
                t.current.play(n);
            }, [e]), c = i.useCallback(() => {
                if (null == t.current)
                    return;
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
            Component: i.useCallback(e => (0, r.jsx)(a.L, {
                ...e,
                src: () => n.e('59682').then(n.t.bind(n, 126683, 19)),
                ref: t,
                initialAnimation: s.current,
                markers: o
            }), [])
        };
    };
