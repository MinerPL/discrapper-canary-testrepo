t.d(n, {
    Z: function () {
        return Z;
    }
});
var l = t(735250), i = t(470079), a = t(481060), r = t(40851), u = t(906732), s = t(171368), d = t(626135), o = t(981631), c = t(689938);
function Z(e, n, t) {
    let Z = i.useContext(d.AnalyticsContext), {analyticsLocations: E} = (0, u.ZP)(), M = (0, r.Aq)();
    return (0, l.jsx)(a.MenuItem, {
        id: 'user-profile',
        label: c.Z.Messages.PROFILE,
        action: () => {
            (0, s.openUserProfileModal)({
                userId: e,
                guildId: n,
                channelId: t,
                sourceAnalyticsLocations: E,
                analyticsLocation: Z.location
            }), M.dispatch(o.CkL.POPOUT_CLOSE);
        }
    });
}
