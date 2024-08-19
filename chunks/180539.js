n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(735250);
n(470079);
var a = n(442837),
    s = n(481060),
    l = n(816782),
    r = n(221292),
    o = n(318661),
    c = n(87728),
    u = n(433355),
    d = n(665149),
    h = n(981631),
    m = n(689938);
function p(e) {
    let { channel: t, showCallOrActivityPanel: n } = e,
        p = (0, a.e7)([u.ZP], () => u.ZP.getSection(t.id, null == t ? void 0 : t.isDM())),
        _ = (0, o.ZP)(t.getRecipientId()),
        E = (0, c.Z)(),
        f = p === h.ULH.PROFILE && !E;
    return (0, i.jsx)(d.JO, {
        disabled: E || n,
        tooltip: E || n ? m.Z.Messages.SHOW_USER_PROFILE_UNAVAILABLE : f ? m.Z.Messages.HIDE_USER_PROFILE : m.Z.Messages.SHOW_USER_PROFILE,
        icon: s.UserCircleStatusIcon,
        onClick: () => {
            (0, r.TY)({
                displayProfile: _,
                isProfileOpen: !f
            }),
                l.Z.toggleProfilePanelSection();
        },
        selected: f && !E && !n
    });
}
