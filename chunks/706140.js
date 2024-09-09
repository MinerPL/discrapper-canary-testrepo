n.d(t, {
    EM: function () {
        return h;
    },
    cv: function () {
        return f;
    }
});
var r = n(470079),
    i = n(442837),
    a = n(581883),
    s = n(914010),
    o = n(915486),
    l = n(68985),
    u = n(211644),
    c = n(605236),
    d = n(57207),
    _ = n(526761);
function E(e, t, n, a, s) {
    let o = (0, u.ZP)((t) => null != e && t.currentlyShown.has(e)),
        d = (0, i.e7)([l.Z], () => null != e && l.Z.hasUserHitDCCap(e));
    return (
        r.useEffect(() => {
            if (null != e)
                return (
                    (0, c.kk)(
                        e,
                        {
                            groupName: n,
                            guildId: t,
                            version: s
                        },
                        a
                    ),
                    () => {
                        if (null == e) return;
                        let t = !l.Z.hasUserHitDCCap();
                        (0, u.gE)(
                            {
                                content: e,
                                groupName: n
                            },
                            t
                        );
                    }
                );
        }, [e, n, t, d, a, s]),
        o && null != e ? e : null
    );
}
function f(e, t, n) {
    let l = (0, i.e7)([a.Z], () => {
            var e;
            return null === (e = a.Z.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents;
        }),
        u = (0, i.e7)([s.Z], () => s.Z.getGuildId()),
        f = (0, d.i)(e),
        h = null;
    a.Z.hasLoaded(_.yP.PRELOADED_USER_SETTINGS) ? (h = f.find((e) => null == l || !(0, o.jl)(l, e))) : null != l && (h = f.find((e) => !(0, o.jl)(l, e)));
    let p = E(h, u, t, n);
    return [
        p,
        r.useCallback(
            (e, n) => {
                null != h &&
                    (0, c.EW)(h, {
                        dismissAction: e,
                        groupName: t,
                        guildId: u,
                        forceTrack: n
                    });
            },
            [h, t, u]
        )
    ];
}
function h(e, t, n, o) {
    let l = (0, i.e7)([a.Z], () => {
            var t, n, r;
            return null !== e ? (null === (r = a.Z.settings.userContent) || void 0 === r ? void 0 : null === (n = r.recurringDismissibleContentStates) || void 0 === n ? void 0 : null === (t = n[e]) || void 0 === t ? void 0 : t.lastDismissedVersion) : void 0;
        }),
        u = (0, i.e7)([s.Z], () => s.Z.getGuildId()),
        f = null;
    if (null != e) {
        let n = !(0, d.B)(e);
        a.Z.hasLoaded(_.yP.PRELOADED_USER_SETTINGS) ? (f = n && (null == l || l < t) ? e : null) : null != l && (f = n && l < t ? e : null);
    }
    let h = E(f, u, n, o, t);
    return [
        h,
        r.useCallback(
            (e, r) => {
                null != f &&
                    (0, c.wH)(f, t, {
                        dismissAction: e,
                        groupName: n,
                        guildId: u,
                        forceTrack: r,
                        version: t
                    });
            },
            [f, n, u, t]
        )
    ];
}
