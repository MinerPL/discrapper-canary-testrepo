n.d(t, {
  R: function() {
return i;
  }
}), n(47120);
var i, a, s = n(735250),
  l = n(470079),
  r = n(120356),
  o = n.n(r),
  c = n(481060),
  u = n(566898),
  d = n(259580),
  h = n(722326),
  m = n(261748);
(a = i || (i = {}))[a.MutualFriendsList = 0] = 'MutualFriendsList', a[a.MutualGuildList = 1] = 'MutualGuildList';
t.Z = e => {
  let {
header: t,
children: n,
itemType: i = 1,
isLoadingHeader: a,
isLoadingContents: r,
loadingContentsCount: p = 0,
className: _,
onExpand: f,
onHover: E,
onFocus: g
  } = e, [C, I] = l.useState(!0), x = (0, s.jsx)('div', {
className: h.iconWrapper,
children: (0, s.jsx)(d.Z, {
  direction: C ? d.Z.Directions.RIGHT : d.Z.Directions.DOWN
})
  });
  return (0, s.jsxs)('div', {
className: _,
children: [
  (0, s.jsx)(c.Button, {
    className: h.collapseBtn,
    innerClassName: h.collapseBtnContent,
    color: c.ButtonColors.CUSTOM,
    onMouseEnter: E,
    onFocus: g,
    onClick: () => {
      I(!C), C && (null == f || f());
    },
    children: a ? (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsx)(u.ZT, {
          width: 34,
          opacity: 0.08
        }),
        (0, s.jsx)(u.ZT, {
          width: 135,
          opacity: 0.08
        })
      ]
    }) : (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsx)(c.Text, {
          variant: 'text-sm/medium',
          children: t
        }),
        x
      ]
    })
  }),
  (0, s.jsx)('ul', {
    className: o()(h.connectionList, {
      [h.isCollapsed]: C
    }),
    children: r ? Array.from({
      length: p
    }).map((e, t) => (0, s.jsxs)('div', {
      className: o()({
        [m.mutualFriendItem]: 0 === i,
        [m.mutualGuildItem]: 1 === i
      }),
      children: [
        (0, s.jsx)(u.ZT, {
          width: 34,
          opacity: 0.08
        }),
        (0, s.jsx)(u.ZT, {
          width: 135,
          opacity: 0.08
        })
      ]
    }, t)) : n
  })
]
  });
};