n.d(t, {
  Z: function() {
return p;
  }
});
var r = n(735250);
n(470079);
var i = n(442837),
  a = n(481060),
  s = n(194359),
  o = n(906732),
  l = n(822972),
  u = n(314897),
  c = n(699516),
  d = n(785717),
  _ = n(475413),
  E = n(228168),
  f = n(981631),
  h = n(689938);

function p(e) {
  let {
user: t,
friendToken: n,
profileType: p
  } = e, {
newestAnalyticsLocation: m
  } = (0, o.ZP)(), {
trackUserProfileAction: I
  } = (0, d.KZ)(), T = (0, i.e7)([u.default], () => u.default.getId() === (null == t ? void 0 : t.id)), g = (0, i.e7)([c.Z], () => null != t ? c.Z.getRelationshipType(t.id) : f.OGo.NONE), S = (0, l.Z)({
user: t,
color: 'danger',
location: m,
onAction: () => I({
  action: 'REMOVE_FRIEND'
})
  });
  return null == t || t.bot || T || g === f.OGo.BLOCKED ? null : g === f.OGo.FRIEND ? (0, r.jsx)(a.Popout, {
renderPopout: e => {
  let {
    closePopout: t
  } = e;
  return (0, r.jsx)(a.Menu, {
    navId: 'user-profile-friend-request-buttons',
    onSelect: void 0,
    onClose: t,
    'aria-label': h.Z.Messages.FRIEND_ACTIONS_MENU_LABEL,
    children: S
  });
},
children: e => (0, r.jsx)(_.oY, {
  icon: a.UserCheckIcon,
  tooltipText: h.Z.Messages.FRIENDS,
  ...e
})
  }) : g === f.OGo.PENDING_INCOMING || g === f.OGo.PENDING_OUTGOING ? p === E.y0.FULL_SIZE ? null : (0, r.jsx)(_.oY, {
icon: a.UserClockIcon,
tooltipText: h.Z.Messages.FRIENDS_SECTION_PENDING,
disabled: !0
  }) : p === E.y0.FULL_SIZE ? null : (0, r.jsx)(_.oY, {
action: 'SEND_FRIEND_REQUEST',
icon: a.UserPlusIcon,
tooltipText: h.Z.Messages.ADD_FRIEND,
onClick: () => {
  s.Z.addRelationship({
    userId: t.id,
    friendToken: n,
    context: {
      location: m
    }
  });
}
  });
}