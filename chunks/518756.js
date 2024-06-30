t(47120);
var i = t(470079), c = t(442837), r = t(889161), l = t(984933), a = t(430824), u = t(496675), o = t(981631);
n.Z = (e, n) => {
    let t = (0, c.e7)([a.Z], () => a.Z.getGuild(e), [e]), {canCreateGuildEvent: d} = (0, r.XJ)(t), s = (0, c.e7)([l.ZP], () => l.ZP.getChannels(e)[l.Zb], [e]), _ = i.useMemo(() => null != n ? s.filter(e => {
            let {channel: t} = e;
            return t.type === n;
        }) : s, [
            s,
            n
        ]);
    return (0, c.e7)([u.Z], () => {
        if (u.Z.can(o.Plq.ADMINISTRATOR, t) || d)
            return !0;
        for (let {channel: e} of _) {
            let {canCreateGuildEvent: n} = (0, r.Gw)(e);
            if (n)
                return !0;
        }
        return !1;
    }, [
        _,
        t,
        d
    ]);
};
