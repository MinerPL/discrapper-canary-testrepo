n.d(t, {
    P: function () {
        return h;
    }
}), n(47120);
var i = n(470079), l = n(392711), r = n.n(l), a = n(367907), s = n(770471), o = n(158631), c = n(143614), u = n(981631);
let d = (e, t) => [...t].filter(t => !e.has(t)), h = () => {
        let e = (0, c.Z)(), t = (0, o.ZP)(), {canViewBroadcasts: n} = s.Z.useExperiment({ location: 'Home Button' }, { autoTrackExposure: !1 }), l = i.useRef(t), h = i.useRef(new Set());
        i.useEffect(() => {
            let i = new Set(e.map(e => e.channelId)), s = !r().isEqual(h.current, i);
            if (n && s) {
                let n = d(h.current, i);
                a.ZP.trackWithMetadata(u.rMx.NEW_BROADCAST_DETECTED, {
                    active_broadcast_highlight: e.length > 0,
                    num_active_broadcasts: e.length,
                    is_broadcasting: t,
                    prev_is_broadcasting: l.current,
                    prev_num_active_broadcasts: h.current.size,
                    new_broadcast_channel_ids: n,
                    broadcast_channel_ids: [...i]
                }), h.current = i, l.current = t;
            }
        }, [
            e,
            t,
            n
        ]);
    };
