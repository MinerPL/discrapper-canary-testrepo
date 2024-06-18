"use strict";
n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(300284),
  o = n(785717),
  a = n(981631),
  l = n(689938),
  u = n(758144);
let _ = {
    page: a.ZY5.GUILD_CHANNEL,
    section: a.jXE.PROFILE_POPOUT,
    object: a.qAy.EDIT_PER_SERVER_IDENTITY
  },
  d = {
    page: a.ZY5.USER_POPOUT,
    section: a.jXE.PROFILE_POPOUT
  };

function c(e) {
  let {
    onSelect: t,
    onClose: n,
    guild: a
  } = e, c = (0, s.Z)({
    guild: a,
    analyticsLocation: _
  }), E = (0, s.Z)({
    analyticsLocation: d
  }), {
    trackUserProfileAction: I
  } = (0, o.KZ)();
  return (0, i.jsxs)(r.Menu, {
    className: u.popoutMenu,
    onSelect: t,
    navId: "edit-profile-popout",
    onClose: n,
    "aria-label": l.Z.Messages.PROFILE_ACTIONS_MENU_LABEL,
    children: [(0, i.jsx)(r.MenuItem, {
      id: "edit-server-profile",
      label: l.Z.Messages.CHANGE_IDENTITY,
      subtext: l.Z.Messages.CHANGE_IDENTITY_SERVER_PROFILE_MENU_HELP,
      action: () => {
        I({
          action: "EDIT_GUILD_PROFILE"
        }), c()
      }
    }), (0, i.jsx)(r.MenuItem, {
      id: "edit-main-profile",
      label: l.Z.Messages.EDIT_MAIN_PROFILE,
      subtext: l.Z.Messages.USER_PROFILE_MENU_HELP,
      action: () => {
        I({
          action: "EDIT_PROFILE"
        }), E()
      }
    })]
  })
}