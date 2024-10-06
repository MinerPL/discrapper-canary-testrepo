t.d(n, {
    Z: function () {
        return _;
    }
}),
    t(653041);
var s = t(697927),
    i = t(200634),
    o = t(369566),
    l = t(326094),
    r = t(708108),
    c = t(146078),
    a = t(228168),
    d = t(981631),
    u = t(689938);
function _(e) {
    var n, t;
    let { user: _, currentUser: I } = e,
        { live: E, recent: f, stream: m } = (0, o.Z)(_.id),
        x = null === (n = (0, s.Z)(_.id, _.id !== (null == I ? void 0 : I.id)).mutualFriends) || void 0 === n ? void 0 : n.length,
        Z = null === (t = (0, i.Z)(_.id, _.id !== (null == I ? void 0 : I.id)).mutualGuilds) || void 0 === t ? void 0 : t.length,
        p = (0, l.Z)({
            user: _,
            currentUser: I,
            location: d.Sbl.PROFILE_MODAL_TABS
        }),
        h = [
            {
                section: a.oh.USER_INFO,
                text: u.Z.Messages.USER_PROFILE_ABOUT_ME
            }
        ];
    return (
        (E.length > 0 || f.length > 0 || null != m) &&
            h.push({
                section: a.oh.ACTIVITY,
                text: u.Z.Messages.USER_PROFILE_ACTIVITY
            }),
        _.id !== (null == I ? void 0 : I.id) &&
            p &&
            (h.push({
                section: a.oh.MUTUAL_FRIENDS,
                text: (0, r.Z)(x)
            }),
            h.push({
                section: a.oh.MUTUAL_GUILDS,
                text: (0, c.Z)(Z)
            })),
        h
    );
}
