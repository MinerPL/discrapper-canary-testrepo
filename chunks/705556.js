n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    s = n(300284),
    o = n(314897),
    l = n(430824),
    u = n(785717),
    c = n(475413),
    d = n(689938),
    _ = n(980932);
function E(e) {
    let { user: t, guildId: n, fullWidth: E, onClose: f } = e,
        h = (0, i.e7)([o.default], () => o.default.getId() === t.id),
        p = (0, i.e7)([l.Z], () => (null != n ? l.Z.getGuild(n) : null)),
        I = (0, s.Z)(),
        m = (0, s.Z)(),
        { trackUserProfileAction: T } = (0, u.KZ)();
    return h
        ? null == p
            ? (0, r.jsx)(c.tG, {
                  action: 'EDIT_PROFILE',
                  text: d.Z.Messages.EDIT_PROFILE,
                  icon: a.PencilIcon,
                  autoFocus: !0,
                  fullWidth: E,
                  onClick: () => {
                      null == f || f(), m();
                  }
              })
            : (0, r.jsx)(a.Popout, {
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, r.jsxs)(a.Menu, {
                          className: _.popoutMenu,
                          onSelect: void 0,
                          navId: 'edit-profile-popout',
                          onClose: () => {
                              t(), null == f || f();
                          },
                          'aria-label': d.Z.Messages.PROFILE_ACTIONS_MENU_LABEL,
                          children: [
                              (0, r.jsx)(a.MenuItem, {
                                  id: 'edit-server-profile',
                                  label: d.Z.Messages.CHANGE_IDENTITY,
                                  subtext: d.Z.Messages.CHANGE_IDENTITY_SERVER_PROFILE_MENU_HELP,
                                  action: () => {
                                      T({ action: 'EDIT_GUILD_PROFILE' }), I();
                                  }
                              }),
                              (0, r.jsx)(a.MenuItem, {
                                  id: 'edit-main-profile',
                                  label: d.Z.Messages.EDIT_MAIN_PROFILE,
                                  subtext: d.Z.Messages.USER_PROFILE_MENU_HELP,
                                  action: () => {
                                      T({ action: 'EDIT_PROFILE' }), m();
                                  }
                              })
                          ]
                      });
                  },
                  children: (e) =>
                      (0, r.jsx)(c.tG, {
                          text: d.Z.Messages.EDIT_PROFILE,
                          icon: a.PencilIcon,
                          autoFocus: !0,
                          fullWidth: E,
                          ...e
                      })
              })
        : null;
}
