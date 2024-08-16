t.d(n, {
    Z: function () {
        return c;
    }
}),
    t(653041),
    t(627341);
var s = t(278074),
    i = t(726059),
    o = t(162267),
    l = t(929498),
    r = t(228168),
    a = t(689938);
function c(e) {
    var n, t;
    let { user: c, currentUser: d } = e,
        { live: u, recent: I, stream: _ } = (0, l.Z)(c.id),
        f = null === (n = (0, i.Z)(c.id, c.id !== (null == d ? void 0 : d.id)).mutualFriends) || void 0 === n ? void 0 : n.length,
        E = null === (t = (0, o.Z)(c.id, c.id !== (null == d ? void 0 : d.id)).mutualGuilds) || void 0 === t ? void 0 : t.length,
        m = [
            {
                section: r.oh.USER_INFO,
                text: a.Z.Messages.USER_PROFILE_ABOUT_ME
            }
        ];
    return (
        (u.length > 0 || I.length > 0 || null != _) &&
            m.push({
                section: r.oh.ACTIVITY,
                text: a.Z.Messages.USER_PROFILE_ACTIVITY
            }),
        c.id !== (null == d ? void 0 : d.id) &&
            (m.push({
                section: r.oh.MUTUAL_FRIENDS,
                text: (0, s.EQ)(f)
                    .with(void 0, () => a.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER)
                    .with(0, () => a.Z.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS)
                    .otherwise((e) => a.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({ count: e }))
            }),
            m.push({
                section: r.oh.MUTUAL_GUILDS,
                text: (0, s.EQ)(E)
                    .with(void 0, () => a.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER)
                    .with(0, () => a.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS)
                    .otherwise((e) => a.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({ count: e }))
            })),
        m
    );
}
