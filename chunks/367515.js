n.d(t, {
  B: function() {
return C;
  }
});
var s = n(735250),
  a = n(470079),
  r = n(512722),
  i = n.n(r),
  l = n(399606),
  o = n(481060),
  c = n(594174),
  d = n(880257),
  _ = n(631885),
  u = n(933970),
  E = n(340453),
  T = n(292352),
  I = n(689938),
  R = n(46380);

function C(e) {
  let {
user: t
  } = e, r = (0, d.Z)(), C = (0, _.VM)(), p = (0, l.e7)([c.default], () => c.default.getCurrentUser()), g = a.useCallback(() => {
i()(void 0 !== p, 'User must be logged in to accept a link request'), (0, o.openModalLazy)(async () => {
  let {
    default: e
  } = await n.e('59716').then(n.bind(n, 275370));
  return n => (0, s.jsx)(e, {
    ...n,
    currentUser: p,
    otherUser: t
  });
});
  }, [
p,
t
  ]), A = a.useCallback(() => {
i()(void 0 !== p, 'User must be logged in to decline a link request'), (0, o.openModalLazy)(async () => {
  let {
    default: e
  } = await n.e('958').then(n.bind(n, 4526));
  return n => (0, s.jsx)(e, {
    ...n,
    currentUser: p,
    otherUser: t
  });
});
  }, [
p,
t
  ]), m = a.useCallback(() => {
i()(void 0 !== p, 'User must be logged in to decline a link request'), (0, o.openModalLazy)(async () => {
  let {
    default: e
  } = await n.e('69015').then(n.bind(n, 247265));
  return n => (0, s.jsx)(e, {
    ...n,
    currentUser: p,
    otherUser: t
  });
});
  }, [
p,
t
  ]);
  return (0, s.jsxs)('div', {
className: R.container,
children: [
  (0, s.jsx)('div', {
    className: R.details,
    children: (0, s.jsx)(E.Z, {
      otherUser: t,
      status: T.ne.PENDING
    })
  }),
  (0, s.jsx)('div', {
    className: R.actions,
    children: r ? (0, s.jsx)(u.Z, {
      icon: o.CloseSmallIcon,
      className: R.__invalid_actionDeny,
      tooltip: I.Z.Messages.FAMILY_CENTER_LINK_ACTION_CANCEL,
      onClick: m
    }) : (0, s.jsxs)(s.Fragment, {
      children: [
        C ? null : (0, s.jsx)(u.Z, {
          icon: o.CheckmarkLargeIcon,
          className: R.__invalid_actionAccept,
          tooltip: I.Z.Messages.FAMILY_CENTER_LINK_ACTION_ACCEPT,
          onClick: g
        }),
        (0, s.jsx)(u.Z, {
          icon: o.CloseSmallIcon,
          className: R.__invalid_actionDeny,
          tooltip: I.Z.Messages.FAMILY_CENTER_LINK_ACTION_DECLINE,
          onClick: A
        })
      ]
    })
  })
]
  });
}