o.r(e), o(653041);
var s = o(735250);
o(470079);
var a = o(481060),
  c = o(493683),
  E = o(239091),
  i = o(108843),
  r = o(100527),
  t = o(299206),
  u = o(87620),
  l = o(505737),
  O = o(389052),
  _ = o(822972),
  N = o(622724),
  I = o(981631),
  S = o(689938);
e.default = (0, i.Z)(function(n) {
  let {
user: e,
isCurrentUser: o,
guildId: i,
relationshipType: U,
originalFriendingEnabled: d = !1,
viewProfileItem: R,
trackUserProfileAction: Z,
onClose: M,
onSelect: h
  } = n, p = e.isNonUserBot(), C = (0, u.oV)(r.Z.USER_PROFILE_ACTIONS_MENU), G = (0, l.Z)(e.id, i), P = (0, O.Z)({
user: e,
color: 'danger',
location: r.Z.USER_PROFILE_ACTIONS_MENU,
onBlock: () => Z({
  action: 'BLOCK'
}),
onUnblock: () => Z({
  action: 'UNBLOCK'
})
  }), A = (0, _.Z)({
user: e,
color: 'danger',
location: r.Z.USER_PROFILE_ACTIONS_MENU,
onAction: () => Z({
  action: 'REMOVE_FRIEND'
})
  }), T = (0, N.Z)({
user: e,
guildId: i,
color: 'danger',
location: r.Z.USER_PROFILE_ACTIONS_MENU,
onAction: () => Z({
  action: 'REPORT'
})
  }), L = (0, t.Z)({
id: e.id,
label: S.Z.Messages.COPY_ID_USER,
onSuccess: () => {
  Z({
    action: 'COPY_USER_ID'
  }), (0, E.Zy)();
}
  }), f = (0, s.jsx)(a.MenuItem, {
id: 'user-message',
label: S.Z.Messages.USER_POPOUT_MESSAGE,
action: () => {
  Z({
    action: 'SEND_MESSAGE'
  }), c.Z.openPrivateChannel(e.id, !1, !1, r.Z.USER_PROFILE_ACTIONS_MENU), M();
}
  }), b = [];
  if (!p && !o)
switch (U) {
  case I.OGo.BLOCKED:
    b.push(P);
    break;
  case I.OGo.FRIEND:
    b.push(A), b.push(P), C && b.push(T);
    break;
  case I.OGo.NONE:
  case I.OGo.PENDING_INCOMING:
  default:
    b.push(P), C && b.push(T);
}!d && G && b.push(f);
  let k = G && (U === I.OGo.NONE || U === I.OGo.PENDING_OUTGOING);
  return (0, s.jsxs)(a.Menu, {
navId: 'user-profile-actions',
'aria-label': S.Z.Messages.USER_ACTIONS_MENU_LABEL,
onClose: E.Zy,
onSelect: h,
children: [
  d && (0, s.jsxs)(a.MenuGroup, {
    children: [
      R,
      k ? f : null
    ]
  }),
  (0, s.jsx)(a.MenuGroup, {
    children: b
  }),
  null != L ? (0, s.jsx)(a.MenuGroup, {
    children: L
  }) : null
]
  });
}, [
  r.Z.CONTEXT_MENU,
  r.Z.USER_PROFILE_ACTIONS_MENU
]);