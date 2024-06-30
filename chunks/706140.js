n.d(t, {
    c: function () {
        return E;
    }
});
var r = n(470079), i = n(442837), a = n(581883), o = n(914010), s = n(915486), l = n(68985), u = n(211644), c = n(605236), d = n(57207), _ = n(526761);
function E(e, t, n) {
    let E = (0, i.e7)([a.Z], () => {
            var e;
            return null === (e = a.Z.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents;
        }), f = (0, i.e7)([o.Z], () => o.Z.getGuildId()), h = (0, d.i)(e), p = null;
    a.Z.hasLoaded(_.yP.PRELOADED_USER_SETTINGS) ? p = h.find(e => null == E || !(0, s.jl)(E, e)) : null != E && (p = h.find(e => !(0, s.jl)(E, e)));
    let m = (0, u.ZP)(e => null != p && e.currentlyShown.has(p)), I = (0, i.e7)([l.Z], () => null != p && l.Z.hasUserHitDCCap(p));
    r.useEffect(() => {
        if (null != p)
            return (0, c.kk)(p, {
                groupName: t,
                guildId: f
            }, n), () => {
                if (null == p)
                    return;
                let e = !l.Z.hasUserHitDCCap();
                (0, u.gE)({
                    content: p,
                    groupName: t
                }, e);
            };
    }, [
        p,
        t,
        f,
        I,
        n
    ]);
    let T = r.useCallback((e, n) => {
        null != p && (0, c.EW)(p, {
            dismissAction: e,
            groupName: t,
            guildId: f,
            forceTrack: n
        });
    }, [
        p,
        t,
        f
    ]);
    return [
        m && null != p ? p : null,
        T
    ];
}
