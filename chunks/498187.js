t.d(n, {
    Z: function () {
        return p;
    }
});
var l = t(876215),
    i = t(758713),
    a = t(835473),
    r = t(810568),
    o = t(168524),
    s = t(561308),
    c = t(206583),
    u = t(96513),
    d = t(701488),
    m = t(689938);
let f = {
        [i.z.XBOX]: c.kG.XBOX,
        [i.z.PLAYSTATION]: c.kG.PLAYSTATION
    },
    _ = { [u._.EMBED]: r.m1.Embed };
function p(e) {
    let n,
        t,
        { entry: i, location: r, baseEntryData: c } = e,
        u = (0, a.q)(i.extra.application_id),
        p = null == u ? void 0 : u.getIconURL(d.Si.LARGE),
        C = i.extra.game_name;
    if (null != i.extra.platform) {
        let e = f[i.extra.platform];
        null != e && (n = { type: e });
    }
    t = i.content_type === l.s.PLAYED_GAME ? ((0, s.kr)(i) && !(0, s.n2)(i) ? m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2 : m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2) : m.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2;
    let h = _[r],
        I = {
            onClick: (0, o.Z)({
                location: h,
                applicationId: i.extra.application_id,
                source: h,
                trackEntryPointImpression: !0,
                sourceUserId: i.author_id
            }),
            ariaDescription: m.Z.Messages.CONTENT_INVENTORY_OPEN_GAME_PROFILE_A11Y_DESCRIPTION.format({ gameName: C })
        };
    return {
        ...c,
        thumbnailUrl: p,
        title: C,
        titleClickable: I,
        thumbnailClickable: I,
        userDescription: t,
        providerIconProps: n
    };
}
