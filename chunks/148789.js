n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(481060),
  r = n(194359),
  l = n(689938),
  o = n(134082);

function c(e) {
  let {
userId: t
  } = e, n = a.useCallback(e => {
e.stopPropagation(), r.Z.cancelFriendRequest(t);
  }, [t]), c = a.useCallback(e => {
e.stopPropagation(), r.Z.addRelationship({
  userId: t
});
  }, [t]);
  return (0, i.jsxs)('div', {
className: o.friendRequestContainer,
children: [
  (0, i.jsx)(s.Button, {
    className: o.acceptButton,
    look: s.Button.Looks.FILLED,
    color: s.Button.Colors.GREEN,
    size: s.Button.Sizes.NONE,
    onClick: c,
    children: (0, i.jsx)(s.Text, {
      variant: 'text-sm/medium',
      color: 'always-white',
      children: l.Z.Messages.FRIEND_REQUEST_ACCEPT
    })
  }),
  (0, i.jsx)(s.Button, {
    className: o.ignoreButton,
    look: s.Button.Looks.FILLED,
    color: s.Button.Colors.PRIMARY,
    size: s.Button.Sizes.NONE,
    onClick: n,
    children: (0, i.jsx)(s.Text, {
      variant: 'text-sm/medium',
      color: 'always-white',
      children: l.Z.Messages.FRIEND_REQUEST_IGNORE
    })
  })
]
  });
}