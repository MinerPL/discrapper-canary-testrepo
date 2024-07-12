t.d(n, {
  Z: function() {
return d;
  }
});
var i = t(735250),
  l = t(470079),
  a = t(481060),
  r = t(783097),
  s = t(753972),
  o = t(532309),
  c = t(875164),
  u = t(413097);

function d(e) {
  var n;
  let {
command: t,
application: d,
onClick: m,
query: p,
searchResultsPosition: _
  } = e, {
iconURL: E,
name: A,
description: f
  } = l.useMemo(() => (0, r.sl)(d, {
fakeAppIconURL: u
  }), [d]), {
trackSearchResultsItemImpressionRef: h
  } = (0, o.Z)({
applicationId: d.id,
commandId: null == t ? void 0 : t.id,
query: p,
searchResultsPosition: _
  });
  return (0, i.jsxs)(a.Clickable, {
innerRef: e => h.current = e,
className: c.container,
onClick: m,
children: [
  (0, i.jsx)(s.Z, {
    src: E,
    className: c.icon,
    'aria-hidden': !0,
    rendersPlaceholder: !0
  }),
  (0, i.jsxs)('div', {
    className: c.cmdDetails,
    children: [
      (0, i.jsx)(a.Heading, {
        variant: 'heading-md/semibold',
        color: 'header-primary',
        lineClamp: 1,
        children: null !== (n = null == t ? void 0 : t.displayName) && void 0 !== n ? n : A
      }),
      (0, i.jsx)(a.Text, {
        variant: 'text-sm/normal',
        color: 'text-secondary',
        lineClamp: 1,
        children: f
      })
    ]
  }),
  null != t ? (0, i.jsx)(a.Text, {
    className: c.cmdAppName,
    variant: 'text-sm/normal',
    color: 'text-secondary',
    children: A
  }) : null,
  (0, i.jsx)('div', {
    className: c.underline
  })
]
  });
}