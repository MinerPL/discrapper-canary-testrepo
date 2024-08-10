e.r(o), e(653041);
var s = e(735250);
e(470079);
var a = e(481060),
  c = e(493683),
  E = e(239091),
  i = e(108843),
  t = e(100527),
  r = e(299206),
  u = e(87620),
  _ = e(505737),
  l = e(389052),
  O = e(822972),
  N = e(622724),
  S = e(981631),
  R = e(689938);
o.default = (0, i.Z)(function(n) {
  let {
user: o,
isCurrentUser: e,
guildId: i,
relationshipType: I,
trackUserProfileAction: U,
onClose: Z,
onSelect: d
  } = n, h = o.isNonUserBot(), p = (0, u.oV)(t.Z.USER_PROFILE_ACTIONS_MENU), M = (0, _.Z)(o.id, i), C = (0, l.Z)({
user: o,
color: 'danger',
location: t.Z.USER_PROFILE_ACTIONS_MENU,
onBlock: () => U({
  action: 'BLOCK'
}),
onUnblock: () => U({
  action: 'UNBLOCK'
})
  }), P = (0, O.Z)({
user: o,
color: 'danger',
location: t.Z.USER_PROFILE_ACTIONS_MENU,
onAction: () => U({
  action: 'REMOVE_FRIEND'
})
  }), A = (0, N.Z)({
user: o,
guildId: i,
color: 'danger',
location: t.Z.USER_PROFILE_ACTIONS_MENU,
onAction: () => U({
  action: 'REPORT'
})
  }), T = (0, N.T)({
user: o,
guildId: i,
location: t.Z.USER_PROFILE_ACTIONS_MENU,
color: 'danger',
onAction: () => U({
  action: 'REPORT'
})
  }), L = (0, r.Z)({
id: o.id,
label: R.Z.Messages.COPY_ID_USER,
onSuccess: () => {
  U({
    action: 'COPY_USER_ID'
  }), (0, E.Zy)();
}
  }), G = (0, s.jsx)(a.MenuItem, {
id: 'user-message',
label: R.Z.Messages.USER_POPOUT_MESSAGE,
action: () => {
  U({
    action: 'SEND_MESSAGE'
  }), c.Z.openPrivateChannel(o.id, !1, !1, t.Z.USER_PROFILE_ACTIONS_MENU), Z();
}
  }), f = [];
  if (!h && !e)
switch (I) {
  case S.OGo.BLOCKED:
    f.push(C);
    break;
  case S.OGo.FRIEND:
    f.push(P), f.push(C), p && (f.push(A), f.push(T));
    break;
  case S.OGo.NONE:
  case S.OGo.PENDING_INCOMING:
  default:
    f.push(C), p && (f.push(A), f.push(T));
}
  return M && f.push(G), (0, s.jsxs)(a.Menu, {
navId: 'user-profile-actions',
'aria-label': R.Z.Messages.USER_ACTIONS_MENU_LABEL,
onClose: E.Zy,
onSelect: d,
children: [
  (0, s.jsx)(a.MenuGroup, {
    children: f
  }),
  null != L ? (0, s.jsx)(a.MenuGroup, {
    children: L
  }) : null
]
  });
}, [
  t.Z.CONTEXT_MENU,
  t.Z.USER_PROFILE_ACTIONS_MENU
]);