n.d(t, {
  Z: function() {
return m;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(481060),
  r = n(194359),
  l = n(906732),
  o = n(171368),
  c = n(626135),
  d = n(321488),
  u = n(417183),
  _ = n(170245),
  h = n(981631),
  E = n(689938),
  I = n(812155);

function m(e) {
  let {
user: t,
key: n,
isFocused: m
  } = e, g = a.useContext(c.AnalyticsContext), {
analyticsLocations: p
  } = (0, l.ZP)(), T = e => {
e.stopPropagation(), r.Z.unblockUser(t.id, {
  location: 'Friends'
});
  };
  return (0, i.jsx)(u.Z, {
isFocused: m,
onClick: () => (0, o.openUserProfileModal)({
  userId: t.id,
  sourceAnalyticsLocations: p,
  analyticsLocation: g.location
}),
user: t,
children: e => (0, i.jsxs)('div', {
  className: I.listItemContents,
  children: [
    (0, i.jsx)(_.Z, {
      user: t,
      hovered: e,
      status: h.Skl.UNKNOWN,
      subText: E.Z.Messages.BLOCKED
    }),
    (0, i.jsx)(d.Z, {
      icon: s.UserMinusIcon,
      actionType: d.Z.ActionTypes.DENY,
      tooltip: E.Z.Messages.UNBLOCK,
      onClick: T,
      shouldHighlight: e
    })
  ]
})
  }, n);
}