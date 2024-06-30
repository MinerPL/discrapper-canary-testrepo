n.d(t, {
    $: function () {
        return s;
    }
});
var r = n(735250), i = n(470079), a = n(709014);
let o = {
        all: {
            name: 'all',
            start: 0,
            duration: 66
        }
    }, s = () => {
        let e = i.useRef(null), t = i.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []), s = i.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []), l = i.useCallback(() => {
                null != e.current && e.current.stopIfPlaying('all');
            }, []);
        return {
            events: {
                onMouseEnter: s,
                onMouseLeave: l
            },
            play: t,
            Component: i.useCallback(t => (0, r.jsx)(a.L, {
                ...t,
                src: () => n.e('8286').then(n.t.bind(n, 893346, 19)),
                ref: e,
                markers: o
            }), [])
        };
    };
