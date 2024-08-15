n.d(t, {
  Z: function() {
return _;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(873546),
  l = n(442837),
  r = n(481060),
  o = n(665149),
  c = n(911560),
  u = n(210887),
  d = n(914010),
  h = n(981631),
  m = n(689938),
  p = n(42894);

function _(e) {
  let t, {
channelId: _
  } = e;
  a.useEffect(() => {
c.Z.loadThread(_);
  });
  let f = (0, l.e7)([d.Z], () => d.Z.getGuildId()) === h.I_8,
E = (0, l.e7)([u.Z], () => u.Z.theme);
  return t = f ? (0, i.jsx)(r.EmptyStateText, {
note: m.Z.Messages.FAVORITES_EMPTY_BODY,
children: m.Z.Messages.FAVORITES_EMPTY_TITLE
  }) : null != _ ? (0, i.jsx)(r.Spinner, {
type: r.Spinner.Type.SPINNING_CIRCLE
  }) : (0, i.jsx)(r.EmptyStateText, {
note: m.Z.Messages.CHANNELS_UNAVAILABLE_BODY,
children: m.Z.Messages.CHANNELS_UNAVAILABLE_TITLE
  }), (0, i.jsxs)('div', {
className: p.noChannel,
children: [
  s.tq && (0, i.jsx)(o.ZP, {
    children: (0, i.jsx)(a.Fragment, {})
  }),
  (0, i.jsxs)(r.EmptyState, {
    theme: E,
    children: [
      (0, i.jsx)(r.EmptyStateImage, {
        darkSrc: f ? n(691270) : n(625065),
        lightSrc: f ? n(704139) : n(875184),
        width: 272,
        height: 222
      }),
      t
    ]
  })
]
  });
}