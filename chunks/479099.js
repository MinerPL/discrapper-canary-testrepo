t.d(n, {
  Z: function() {
return p;
  },
  f: function() {
return S;
  }
}), t(47120);
var r, i, o = t(735250),
  l = t(470079),
  u = t(120356),
  a = t.n(u),
  s = t(91192),
  c = t(442837),
  d = t(481060),
  _ = t(596454),
  f = t(607070),
  E = t(339085),
  I = t(689938),
  g = t(597677);

function p(e) {
  let {
tag: n,
size: t = 1,
disabled: r,
className: i,
onClick: u,
onRemove: p,
selected: S,
ariaLabel: C
  } = e, {
name: T,
emojiId: m,
emojiName: A
  } = n, N = null != p, [h, v] = l.useState(!1), L = (0, c.e7)([E.Z], () => null != m ? E.Z.getUsableCustomEmojiById(m) : null), R = N || null != u, M = (!N || !h) && (null != m || null != A), O = 0 === t, b = l.useRef(null), D = (0, c.e7)([f.Z], () => f.Z.keyboardModeEnabled), U = (0, o.jsxs)(o.Fragment, {
children: [
  M ? (0, o.jsx)(_.Z, {
    className: a()(g.emoji, {
      [g.small]: O
    }),
    emojiId: m,
    emojiName: A,
    animated: !!(null == L ? void 0 : L.animated),
    size: 'reaction'
  }) : null,
  h && N && (0, o.jsx)('div', {
    className: g.closeCircle,
    children: (0, o.jsx)(d.XSmallIcon, {
      size: 'md',
      color: 'currentColor',
      className: g.close
    })
  }),
  (0, o.jsx)(d.Text, {
    variant: O ? 'text-xs/semibold' : 'text-sm/semibold',
    lineClamp: 1,
    children: T
  })
]
  }), Z = {
key: n.id,
className: a()(g.pill, {
  [g.disabled]: r,
  [g.clickable]: R,
  [g.small]: O,
  [g.selected]: S
}, i),
onClick: e => {
  null == u || u(e), null == p || p(n), !D && null != b.current && b.current.blur();
},
onMouseEnter: () => N && v(!0),
onMouseLeave: () => N && v(!1)
  }, P = (0, s.JA)('forum-tag-'.concat(n.id));
  return R ? (0, o.jsx)(d.Clickable, {
...P,
innerRef: b,
focusProps: {
  ringTarget: b
},
'aria-label': null != C ? C : I.Z.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
  tagName: T
}),
role: 'button',
'aria-pressed': S,
...Z,
children: U
  }) : (0, o.jsx)('div', {
...Z,
children: U
  });
}

function S(e) {
  let {
tags: n,
count: t,
size: r = 1
  } = e, i = 0 === r;
  return (0, o.jsx)(d.Tooltip, {
'aria-label': I.Z.Messages.FORUM_TAGS,
text: (0, o.jsx)(o.Fragment, {
  children: n.map(e => (0, o.jsx)(p, {
    tag: e,
    className: g.tooltipPill,
    size: p.Sizes.SMALL
  }, e.id))
}),
children: e => (0, o.jsx)('div', {
  ...e,
  className: a()(g.pill, {
    [g.small]: i
  }),
  children: (0, o.jsxs)(d.Text, {
    variant: i ? 'text-xs/semibold' : 'text-sm/semibold',
    children: [
      '+',
      t
    ]
  })
})
  });
}
(i = r || (r = {}))[i.SMALL = 0] = 'SMALL', i[i.MEDIUM = 1] = 'MEDIUM', p.Sizes = r;