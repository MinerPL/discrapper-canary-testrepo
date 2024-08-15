n.d(t, {
  Z: function() {
return _;
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  s = n(481060),
  r = n(210887),
  l = n(687683),
  o = n(689938),
  c = n(163868),
  d = n(138715),
  u = n(979770);

function _(e) {
  let {
section: t
  } = e, n = (0, a.e7)([r.Z], () => r.Z.theme);
  return (0, i.jsxs)(s.EmptyState, {
theme: n,
className: c.emptyStateContainer,
children: [
  (0, i.jsx)(s.EmptyStateImage, {
    width: 415,
    height: 200,
    lightSrc: u,
    darkSrc: d
  }),
  (0, i.jsx)(s.EmptyStateText, {
    note: t === l.pS.SPAM ? o.Z.Messages.MESSAGE_REQUESTS_SPAM_EMPTY_STATE_BODY : o.Z.Messages.MESSAGE_REQUESTS_EMPTY_STATE_BODY
  })
]
  });
}