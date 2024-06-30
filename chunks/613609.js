n(47120), n(773603);
var i = n(735250), s = n(470079), a = n(442837), r = n(447543), l = n(568154), o = n(703656), c = n(430824), d = n(701190), u = n(449934), _ = n(650233), E = n(981631), h = n(898625), I = n(96927);
t.Z = e => {
    let {
            guildId: t,
            inviteCode: n
        } = e, [m, p] = s.useState(h.hO.INITIAL), [g, T] = s.useState(null != n);
    s.useEffect(() => {
        null != n && r.Z.resolveInvite(n, 'Hub').finally(() => T(!1));
    }, [n]);
    let S = (0, a.e7)([d.Z], () => null != n ? d.Z.getInvite(n) : null), C = (0, a.e7)([c.Z], () => c.Z.getGuild(t));
    s.useEffect(() => {
        null != C && (0, o.uL)(E.Z5c.CHANNEL(t));
    }, [
        C,
        t
    ]);
    let N = s.useCallback(e => {
            p(t => Math.max(t, e));
        }, []), f = (0, u.gK)();
    return (0, i.jsx)('div', {
        className: I.page,
        children: (0, i.jsxs)(l.Z, {
            embedded: !0,
            splash: f,
            waveState: m,
            showLogo: !1,
            updateWaveState: N,
            children: [
                (0, i.jsx)('div', { className: I.dragRegion }),
                (0, i.jsx)('div', {
                    className: I.contentWrapper,
                    children: !g && (0, i.jsx)(_.HubEmailConnectionModalView, { invite: S })
                })
            ]
        })
    });
};
