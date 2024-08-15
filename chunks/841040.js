n.d(t, {
  Z: function() {
return _;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(300284),
  s = n(785717),
  o = n(981631),
  l = n(689938),
  u = n(311960);
let c = {
page: o.ZY5.GUILD_CHANNEL,
section: o.jXE.PROFILE_POPOUT,
object: o.qAy.EDIT_PER_SERVER_IDENTITY
  },
  d = {
page: o.ZY5.USER_POPOUT,
section: o.jXE.PROFILE_POPOUT
  };

function _(e) {
  let {
onSelect: t,
onClose: n,
guild: o
  } = e, _ = (0, a.Z)({
guild: o,
analyticsLocation: c
  }), E = (0, a.Z)({
analyticsLocation: d
  }), {
trackUserProfileAction: f
  } = (0, s.KZ)();
  return (0, r.jsxs)(i.Menu, {
className: u.popoutMenu,
onSelect: t,
navId: 'edit-profile-popout',
onClose: n,
'aria-label': l.Z.Messages.PROFILE_ACTIONS_MENU_LABEL,
children: [
  (0, r.jsx)(i.MenuItem, {
    id: 'edit-server-profile',
    label: l.Z.Messages.CHANGE_IDENTITY,
    subtext: l.Z.Messages.CHANGE_IDENTITY_SERVER_PROFILE_MENU_HELP,
    action: () => {
      f({
        action: 'EDIT_GUILD_PROFILE'
      }), _();
    }
  }),
  (0, r.jsx)(i.MenuItem, {
    id: 'edit-main-profile',
    label: l.Z.Messages.EDIT_MAIN_PROFILE,
    subtext: l.Z.Messages.USER_PROFILE_MENU_HELP,
    action: () => {
      f({
        action: 'EDIT_PROFILE'
      }), E();
    }
  })
]
  });
}