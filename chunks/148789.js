n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(481060),
  r = n(194359),
  l = n(689938),
  o = n(273270);

function c(e) {
  let {
userId: t
  } = e, n = s.useCallback(e => {
e.stopPropagation(), r.Z.cancelFriendRequest(t);
  }, [t]), c = s.useCallback(e => {
e.stopPropagation(), r.Z.addRelationship({
  userId: t
});
  }, [t]);
  return (0, i.jsxs)('div', {
className: o.friendRequestContainer,
children: [
  (0, i.jsx)(a.Button, {
    className: o.acceptButton,
    look: a.Button.Looks.FILLED,
    color: a.Button.Colors.GREEN,
    size: a.Button.Sizes.NONE,
    onClick: c,
    children: (0, i.jsx)(a.Text, {
      variant: 'text-sm/medium',
      color: 'always-white',
      children: l.Z.Messages.FRIEND_REQUEST_ACCEPT
    })
  }),
  (0, i.jsx)(a.Button, {
    className: o.ignoreButton,
    look: a.Button.Looks.FILLED,
    color: a.Button.Colors.PRIMARY,
    size: a.Button.Sizes.NONE,
    onClick: n,
    children: (0, i.jsx)(a.Text, {
      variant: 'text-sm/medium',
      color: 'always-white',
      children: l.Z.Messages.FRIEND_REQUEST_IGNORE
    })
  })
]
  });
}