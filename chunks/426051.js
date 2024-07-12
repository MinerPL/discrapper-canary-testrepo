n.d(t, {
  Z: function() {
return g;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(286379),
  r = n(481060),
  l = n(797614),
  o = n(359110),
  c = n(6025),
  d = n(433355),
  u = n(26373),
  _ = n(486622),
  h = n(376191),
  E = n(86203),
  I = n(689938),
  m = n(679638);

function g(e) {
  let {
active: t,
user: n,
channel: g
  } = e, p = (0, u.V)(), T = s.useCallback(() => {
(0, r.showToast)((0, r.createToast)(I.Z.Messages.MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE, r.ToastType.FAILURE)), l.Z.increment({
  name: a.V.SPAM_MESSAGE_REQUEST_ERROR_VIEW
});
  }, []), S = s.useCallback(() => {
c.Z.closeChannelSidebar(d.uZ);
  }, []), C = s.useCallback(() => {
c.Z.closeChannelSidebar(d.uZ), p && (0, o.Kh)(g.id);
  }, [
g.id,
p
  ]), {
acceptMessageRequest: f,
isAcceptLoading: N,
isUserProfileLoading: A,
isOptimisticAccepted: Z
  } = (0, _.m)({
user: n,
onAcceptSuccess: C,
onRejectSuccess: S,
onError: T
  }), L = N || A, v = L || Z;
  return (0, i.jsxs)('div', {
className: m.container,
children: [
  (0, i.jsx)(h.Z, {
    otherUser: n,
    channel: g,
    active: t
  }),
  (0, i.jsxs)('div', {
    className: m.actions,
    children: [
      (0, i.jsx)(r.Button, {
        className: m.button,
        color: r.ButtonColors.PRIMARY,
        size: r.Button.Sizes.SMALL,
        onClick: e => {
          f(g.id), e.stopPropagation();
        },
        disabled: v,
        submitting: L,
        children: I.Z.Messages.MESSAGE_REQUESTS_SPAM_ACCEPT
      }),
      (0, i.jsx)(E.Z, {
        className: m.button,
        channel: g,
        buttonSize: r.Button.Sizes.SMALL
      })
    ]
  })
]
  });
}