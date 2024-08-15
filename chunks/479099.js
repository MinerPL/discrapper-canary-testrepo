l.d(t, {
  Z: function() {
return M;
  },
  f: function() {
return x;
  }
}), l(47120);
var i, n, s = l(735250),
  a = l(470079),
  o = l(120356),
  r = l.n(o),
  d = l(91192),
  u = l(442837),
  c = l(481060),
  _ = l(239091),
  m = l(596454),
  f = l(607070),
  g = l(339085),
  h = l(695346),
  E = l(572004),
  A = l(689938),
  p = l(109756);

function M(e) {
  let {
tag: t,
size: i = 1,
disabled: n,
className: o,
onClick: M,
onRemove: x,
selected: I,
ariaLabel: T
  } = e, {
name: O,
emojiId: R,
emojiName: v
  } = t, b = null != x, [C, L] = a.useState(!1), j = (0, u.e7)([g.ZP], () => null != R ? g.ZP.getUsableCustomEmojiById(R) : null), P = b || null != M, Z = (!b || !C) && (null != R || null != v), D = 0 === i, S = a.useRef(null), N = (0, u.e7)([f.Z], () => f.Z.keyboardModeEnabled), U = e => {
let i = h.Sb.getSetting();
E.wS && i && (0, _.jW)(e, async () => {
  let {
    default: e
  } = await l.e('29646').then(l.bind(l, 955116));
  return l => (0, s.jsx)(e, {
    ...l,
    tag: t
  });
});
  }, y = (0, s.jsxs)(s.Fragment, {
children: [
  Z ? (0, s.jsx)(m.Z, {
    className: r()(p.emoji, {
      [p.small]: D
    }),
    emojiId: R,
    emojiName: v,
    animated: !!(null == j ? void 0 : j.animated),
    size: 'reaction'
  }) : null,
  C && b && (0, s.jsx)('div', {
    className: p.closeCircle,
    children: (0, s.jsx)(c.XSmallIcon, {
      size: 'md',
      color: 'currentColor',
      className: p.close
    })
  }),
  (0, s.jsx)(c.Text, {
    variant: D ? 'text-xs/semibold' : 'text-sm/semibold',
    lineClamp: 1,
    children: O
  })
]
  }), z = {
key: t.id,
className: r()(p.pill, {
  [p.disabled]: n,
  [p.clickable]: P,
  [p.small]: D,
  [p.selected]: I
}, o),
onClick: e => {
  null == M || M(e), null == x || x(t), !N && null != S.current && S.current.blur();
},
onContextMenu: e => U(e),
onMouseEnter: () => b && L(!0),
onMouseLeave: () => b && L(!1)
  }, w = (0, d.JA)('forum-tag-'.concat(t.id));
  return P ? (0, s.jsx)(c.Clickable, {
...w,
innerRef: S,
focusProps: {
  ringTarget: S
},
'aria-label': null != T ? T : A.Z.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
  tagName: O
}),
role: 'button',
'aria-pressed': I,
...z,
children: y
  }) : (0, s.jsx)('div', {
...z,
children: y
  });
}

function x(e) {
  let {
tags: t,
count: l,
size: i = 1
  } = e, n = 0 === i;
  return (0, s.jsx)(c.Tooltip, {
'aria-label': A.Z.Messages.FORUM_TAGS,
text: (0, s.jsx)(s.Fragment, {
  children: t.map(e => (0, s.jsx)(M, {
    tag: e,
    className: p.tooltipPill,
    size: M.Sizes.SMALL
  }, e.id))
}),
children: e => (0, s.jsx)('div', {
  ...e,
  className: r()(p.pill, {
    [p.small]: n
  }),
  children: (0, s.jsxs)(c.Text, {
    variant: n ? 'text-xs/semibold' : 'text-sm/semibold',
    children: [
      '+',
      l
    ]
  })
})
  });
}
(n = i || (i = {}))[n.SMALL = 0] = 'SMALL', n[n.MEDIUM = 1] = 'MEDIUM', M.Sizes = i;