l.d(t, {
  Z: function() {
return E;
  },
  f: function() {
return A;
  }
}), l(47120);
var i, n, s = l(735250),
  a = l(470079),
  o = l(120356),
  r = l.n(o),
  d = l(91192),
  u = l(442837),
  c = l(481060),
  _ = l(596454),
  m = l(607070),
  f = l(339085),
  h = l(689938),
  g = l(597677);

function E(e) {
  let {
tag: t,
size: l = 1,
disabled: i,
className: n,
onClick: o,
onRemove: E,
selected: A,
ariaLabel: p
  } = e, {
name: M,
emojiId: x,
emojiName: I
  } = t, T = null != E, [O, R] = a.useState(!1), v = (0, u.e7)([f.Z], () => null != x ? f.Z.getUsableCustomEmojiById(x) : null), b = T || null != o, C = (!T || !O) && (null != x || null != I), L = 0 === l, j = a.useRef(null), P = (0, u.e7)([m.Z], () => m.Z.keyboardModeEnabled), Z = (0, s.jsxs)(s.Fragment, {
children: [
  C ? (0, s.jsx)(_.Z, {
    className: r()(g.emoji, {
      [g.small]: L
    }),
    emojiId: x,
    emojiName: I,
    animated: !!(null == v ? void 0 : v.animated),
    size: 'reaction'
  }) : null,
  O && T && (0, s.jsx)('div', {
    className: g.closeCircle,
    children: (0, s.jsx)(c.CloseSmallIcon, {
      size: 'md',
      color: 'currentColor',
      className: g.close
    })
  }),
  (0, s.jsx)(c.Text, {
    variant: L ? 'text-xs/semibold' : 'text-sm/semibold',
    lineClamp: 1,
    children: M
  })
]
  }), D = {
key: t.id,
className: r()(g.pill, {
  [g.disabled]: i,
  [g.clickable]: b,
  [g.small]: L,
  [g.selected]: A
}, n),
onClick: e => {
  null == o || o(e), null == E || E(t), !P && null != j.current && j.current.blur();
},
onMouseEnter: () => T && R(!0),
onMouseLeave: () => T && R(!1)
  }, S = (0, d.JA)('forum-tag-'.concat(t.id));
  return b ? (0, s.jsx)(c.Clickable, {
...S,
innerRef: j,
focusProps: {
  ringTarget: j
},
'aria-label': null != p ? p : h.Z.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
  tagName: M
}),
role: 'button',
'aria-pressed': A,
...D,
children: Z
  }) : (0, s.jsx)('div', {
...D,
children: Z
  });
}

function A(e) {
  let {
tags: t,
count: l,
size: i = 1
  } = e, n = 0 === i;
  return (0, s.jsx)(c.Tooltip, {
'aria-label': h.Z.Messages.FORUM_TAGS,
text: (0, s.jsx)(s.Fragment, {
  children: t.map(e => (0, s.jsx)(E, {
    tag: e,
    className: g.tooltipPill,
    size: E.Sizes.SMALL
  }, e.id))
}),
children: e => (0, s.jsx)('div', {
  ...e,
  className: r()(g.pill, {
    [g.small]: n
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
(n = i || (i = {}))[n.SMALL = 0] = 'SMALL', n[n.MEDIUM = 1] = 'MEDIUM', E.Sizes = i;