t.d(n, {
    Z: function () {
        return f;
    }
});
var l = t(735250), i = t(470079), a = t(481060), r = t(906732), u = t(702557), s = t(171368), d = t(314897), o = t(246946), c = t(626135), Z = t(981631), E = t(228168), M = t(689938);
function f(e) {
    let {
            user: n,
            guildId: t,
            context: f
        } = e, {id: _} = n, {
            loading: g,
            note: I
        } = (0, u.Z)(_), m = !g && null != I && I.length > 0, R = f === Z.IlC.POPOUT, N = i.useContext(c.AnalyticsContext), {analyticsLocations: C} = (0, r.ZP)();
    return _ === d.default.getId() || o.Z.hidePersonalInformation || R ? null : (0, l.jsx)(a.MenuItem, {
        id: 'note',
        label: g ? M.Z.Messages.LOADING_NOTE : m ? M.Z.Messages.EDIT_NOTE : M.Z.Messages.ADD_NOTE,
        action: () => {
            (0, s.openUserProfileModal)({
                userId: n.id,
                section: E.oh.USER_INFO,
                subsection: E.Tb.NOTE,
                guildId: t,
                sourceAnalyticsLocations: C,
                analyticsLocation: N.location
            });
        }
    });
}
