n.d(t, {
  R: function() {
return E;
  }
});
var i = n(735250),
  a = n(470079),
  l = n(442837),
  s = n(481060),
  r = n(239091),
  o = n(151827),
  c = n(485267),
  d = n(146282),
  u = n(703180),
  h = n(809017),
  p = n(981631),
  m = n(689938),
  _ = n(544165),
  f = n(849787);

function E(e) {
  return (null == e ? void 0 : e.id) === h.G;
}
t.Z = a.memo(function(e) {
  let t, {
  title: h,
  onToggleExpand: E,
  expanded: C,
  expandedCount: g
} = e,
I = (0, l.e7)([d.Z], () => d.Z.hidden),
x = a.useCallback(e => {
  (0, r.jW)(e, async () => {
    let {
      MemberListContentSettingsMenu: e
    } = await Promise.resolve().then(n.bind(n, 703180));
    return () => (0, i.jsx)(e, {
      closePopout: r.Zy
    });
  });
}, []);
  return (0, i.jsxs)(o.Z, {
className: f.membersGroup,
children: [
  (0, i.jsx)(s.HiddenVisually, {
    children: m.Z.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
      title: h,
      count: g
    })
  }),
  (0, i.jsxs)(s.Clickable, {
    onClick: e => {
      if (e.currentTarget === e.target || e.currentTarget.contains(e.target))
        return I ? (0, c.l)() : g > 3 ? E() : (0, p.dG4)();
    },
    onContextMenu: x,
    tag: 'span',
    'aria-hidden': !0,
    className: _.headerContainer,
    children: [
      (0, i.jsxs)('div', {
        className: _.header,
        children: [
          (0, i.jsxs)('span', {
            children: [
              h,
              ' \u2014 ',
              g
            ]
          }),
          (0, i.jsx)(u.default, {})
        ]
      }),
      g <= 3 && !I ? null : (t = I ? (0, i.jsx)(s.ChevronSmallUpIcon, {
        className: _.toggleExpandIcon
      }) : C ? (0, i.jsx)(s.ChevronSmallDownIcon, {
        className: _.toggleExpandIcon
      }) : (0, i.jsx)(s.ChevronSmallRightIcon, {
        className: _.toggleExpandIcon
      }), (0, i.jsx)(s.FocusRing, {
        children: (0, i.jsx)('div', {
          tabIndex: 0,
          className: _.toggleExpandIcon,
          children: t
        })
      }))
    ]
  })
]
  });
});