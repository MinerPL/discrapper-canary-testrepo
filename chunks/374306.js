n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(735250);
n(470079);
var a = n(442837),
    s = n(481060),
    l = n(961675),
    r = n(883429),
    o = n(238349),
    c = n(109434),
    u = n(456269),
    d = n(432771),
    h = n(920303),
    m = n(665149),
    p = n(689938);
function _(e) {
    var t, n;
    let { channel: _ } = e,
        E = (0, u.r_)(_),
        f = (0, a.e7)([l.Z], () => l.Z.hasHidden(_.id)),
        C = (0, d.c)(_.id),
        { sortOrder: g, tagFilter: I } = (0, c.H)(_.id),
        x = (0, a.e7)([o.Z, h.Z], () => !!(o.Z.getThreadIds(_.id, g, I).length > 0) || !!(h.Z.getThreads(_.id, g, I).length > 0) || !1, [_.id, g, I]),
        T = _.isMediaChannel();
    if (!E || C || (T && x)) return null;
    let N = ((t = f), (n = T), t ? (n ? p.Z.Messages.MEDIA_CHANNEL_ADMIN_EDUCATION_SHOW : p.Z.Messages.FORUM_CHANNEL_ONBOARDING_SHOW) : n ? p.Z.Messages.MEDIA_CHANNEL_ADMIN_EDUCATION_HIDE : p.Z.Messages.FORUM_CHANNEL_ONBOARDING_HIDE);
    return (0, i.jsx)(m.JO, {
        tooltip: N,
        icon: s.CircleInformationIcon,
        onClick: () => r.Z.hideAdminOnboarding(_.id, !f),
        selected: !f
    });
}
