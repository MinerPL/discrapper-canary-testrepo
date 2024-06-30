n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(735250);
n(470079);
var i = n(442837), a = n(481060), o = n(300284), s = n(314897), l = n(430824), u = n(877485), c = n(785717), d = n(841040), _ = n(993409), E = n(228168), f = n(689938);
function h(e) {
    let {
            user: t,
            guildId: n,
            profileType: h,
            onClose: p
        } = e, m = (0, i.e7)([s.default], () => s.default.getId() === t.id), I = (0, i.e7)([l.Z], () => null != n ? l.Z.getGuild(n) : null), {originalFriendingEnabled: T} = (0, u.V)({ location: 'UserProfileEditMenuButton' }), {trackUserProfileAction: g} = (0, c.KZ)(), S = (0, o.Z)(), A = T && h === E.y0.FULL_SIZE ? void 0 : a.PencilIcon;
    return m ? null == I ? (0, r.jsx)(_.Z, {
        variant: 'text',
        icon: A,
        text: f.Z.Messages.EDIT_PROFILE,
        autoFocus: !0,
        fullWidth: !0,
        onClick: () => {
            g({ action: 'EDIT_PROFILE' }), null == p || p(), S();
        }
    }) : (0, r.jsx)(a.Popout, {
        renderPopout: e => {
            let {closePopout: t} = e;
            return (0, r.jsx)(d.Z, {
                guild: I,
                onClose: () => {
                    t(), null == p || p();
                }
            });
        },
        children: e => (0, r.jsx)(_.Z, {
            variant: 'text',
            icon: A,
            text: f.Z.Messages.EDIT_PROFILE,
            autoFocus: !0,
            fullWidth: !0,
            ...e
        })
    }) : null;
}
