o.r(e), o(653041);
var s = o(735250);
o(470079);
var a = o(481060),
  c = o(493683),
  i = o(239091),
  E = o(108843),
  t = o(100527),
  r = o(299206),
  u = o(87620),
  _ = o(505737),
  l = o(389052),
  O = o(822972),
  N = o(622724),
  S = o(981631),
  I = o(689938);
e.default = (0, E.Z)(function(n) {
  let {
user: e,
isCurrentUser: o,
guildId: E,
relationshipType: U,
trackUserProfileAction: R,
onClose: Z,
onSelect: d
  } = n, M = e.isNonUserBot(), h = (0, u.oV)(t.Z.USER_PROFILE_ACTIONS_MENU), p = (0, _.Z)(e.id, E), C = (0, l.Z)({
user: e,
color: 'danger',
location: t.Z.USER_PROFILE_ACTIONS_MENU,
onBlock: () => R({
  action: 'BLOCK'
}),
onUnblock: () => R({
  action: 'UNBLOCK'
})
  }), P = (0, O.Z)({
user: e,
color: 'danger',
location: t.Z.USER_PROFILE_ACTIONS_MENU,
onAction: () => R({
  action: 'REMOVE_FRIEND'
})
  }), A = (0, N.Z)({
user: e,
guildId: E,
color: 'danger',
location: t.Z.USER_PROFILE_ACTIONS_MENU,
onAction: () => R({
  action: 'REPORT'
})
  }), G = (0, r.Z)({
id: e.id,
label: I.Z.Messages.COPY_ID_USER,
onSuccess: () => {
  R({
    action: 'COPY_USER_ID'
  }), (0, i.Zy)();
}
  }), L = (0, s.jsx)(a.MenuItem, {
id: 'user-message',
label: I.Z.Messages.USER_POPOUT_MESSAGE,
action: () => {
  R({
    action: 'SEND_MESSAGE'
  }), c.Z.openPrivateChannel(e.id, !1, !1, t.Z.USER_PROFILE_ACTIONS_MENU), Z();
}
  }), T = [];
  if (!M && !o)
switch (U) {
  case S.OGo.BLOCKED:
    T.push(C);
    break;
  case S.OGo.FRIEND:
    T.push(P), T.push(C), h && T.push(A);
    break;
  case S.OGo.NONE:
  case S.OGo.PENDING_INCOMING:
  default:
    T.push(C), h && T.push(A);
}
  return p && T.push(L), (0, s.jsxs)(a.Menu, {
navId: 'user-profile-actions',
'aria-label': I.Z.Messages.USER_ACTIONS_MENU_LABEL,
onClose: i.Zy,
onSelect: d,
children: [
  (0, s.jsx)(a.MenuGroup, {
    children: T
  }),
  null != G ? (0, s.jsx)(a.MenuGroup, {
    children: G
  }) : null
]
  });
}, [
  t.Z.CONTEXT_MENU,
  t.Z.USER_PROFILE_ACTIONS_MENU
]);