n.d(t, {
  Z: function() {
return g;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(481060),
  r = n(194359),
  l = n(906732),
  o = n(388380),
  c = n(171368),
  d = n(626135),
  u = n(321488),
  _ = n(417183),
  E = n(170245),
  h = n(981631),
  m = n(689938),
  I = n(423442);

function g(e) {
  let {
user: t,
nickname: n,
status: g,
isFocused: p
  } = e, T = a.useContext(d.AnalyticsContext), {
analyticsLocations: S
  } = (0, l.ZP)(), f = e => {
null == e || e.stopPropagation(), r.Z.addRelationship({
  userId: t.id,
  context: {
    location: 'Friends'
  },
  type: void 0,
  friendToken: void 0,
  fromFriendSuggestion: !0
});
  }, C = e => {
null == e || e.stopPropagation(), o.Z.ignore(t.id);
  }, N = g === h.Skl.OFFLINE ? h.Skl.UNKNOWN : g;
  return (0, i.jsx)(_.Z, {
isFocused: p,
user: t,
onClick: () => (0, c.openUserProfileModal)({
  userId: t.id,
  sourceAnalyticsLocations: S,
  analyticsLocation: T.location
}),
children: e => {
  let a = (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)(u.Z, {
        icon: s.CheckmarkLargeIcon,
        actionType: u.Z.ActionTypes.ACCEPT,
        tooltip: m.Z.Messages.FRIEND_REQUEST_ACCEPT,
        onClick: f,
        shouldHighlight: e
      }),
      (0, i.jsx)(u.Z, {
        icon: s.XSmallIcon,
        actionType: u.Z.ActionTypes.DENY,
        tooltip: m.Z.Messages.FRIEND_REQUEST_IGNORE,
        onClick: C,
        shouldHighlight: e
      })
    ]
  });
  return (0, i.jsxs)('div', {
    className: I.listItemContents,
    children: [
      (0, i.jsx)(E.Z, {
        user: t,
        hovered: e,
        status: N,
        subText: n,
        className: I.__invalid_userInfo
      }),
      (0, i.jsx)('div', {
        className: I.actions,
        children: a
      })
    ]
  });
}
  });
}