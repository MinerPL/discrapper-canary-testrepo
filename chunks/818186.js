n.d(t, {
  Z: function() {
return m;
  }
});
var i = n(735250);
n(470079);
var s = n(442837),
  a = n(481060),
  r = n(758059),
  l = n(377171),
  o = n(497089),
  c = n(703656),
  u = n(699516),
  d = n(626135),
  _ = n(981631),
  E = n(689938),
  I = n(600021);

function m(e) {
  let {
closePopout: t
  } = e, n = (0, s.e7)([u.Z], () => u.Z.getPendingCount());
  return (0, i.jsx)(a.TooltipContainer, {
text: E.Z.Messages.VIEW_FRIEND_REQUESTS,
children: (0, i.jsxs)(a.Clickable, {
  className: I.friendRequestsButton,
  onClick: () => {
    d.default.track(_.rMx.NOTIFICATION_CENTER_ACTION, {
      action_type: o.ud.FRIEND_REQUESTS_BUTTON_CLICK
    }), (0, c.uL)(_.Z5c.FRIENDS), r.Z.setSection(_.pJs.PENDING), t();
  },
  children: [
    (0, i.jsx)(a.FriendsIcon, {
      size: 'xs',
      color: 'currentColor'
    }),
    (0, i.jsx)(a.NumberBadge, {
      count: n,
      color: l.Z.BACKGROUND_ACCENT
    })
  ]
})
  });
}