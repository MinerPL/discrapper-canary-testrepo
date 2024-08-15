n(47120), n(733860);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(392711),
  l = n.n(o),
  u = n(338545),
  c = n(91192),
  d = n(946188),
  _ = n(477690),
  E = n(481060),
  f = n(80932),
  h = n(351773),
  p = n(209613),
  m = n(313201),
  I = n(633302),
  T = n(176354),
  g = n(624138),
  S = n(981631),
  A = n(689938),
  N = n(847838);
let v = (0, m.hQ)(),
  O = d.Z.convert.fromCodePoint('1f44f'),
  R = (0, g.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
  C = (0, g.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE),
  y = e => {
let {
  fade: t,
  surrogate: n,
  onClick: i,
  delay: a,
  index: s
} = e, o = (0, c.JA)('item-'.concat(s)), l = T.ZP.getURL(O + n), _ = (0, E.useSpring)({
  opacity: 1,
  from: {
    opacity: t ? 0 : 1
  },
  delay: a
}, 'animate-always');
return (0, r.jsx)(E.Clickable, {
  ...o,
  role: 'option',
  'aria-selected': 0 === s,
  onClick: () => i(n),
  className: N.diversityEmojiItem,
  children: (0, r.jsx)(u.animated.div, {
    'aria-label': function(e) {
      switch (d.Z.convert.toCodePoint(e)) {
        case '1f3fb':
          return A.Z.Messages.EMOJI_MODIFIER_LIGHT_SKIN_TONE;
        case '1f3fc':
          return A.Z.Messages.EMOJI_MODIFIER_MEDIUM_LIGHT_SKIN_TONE;
        case '1f3fd':
          return A.Z.Messages.EMOJI_MODIFIER_MEDIUM_SKIN_TONE;
        case '1f3fe':
          return A.Z.Messages.EMOJI_MODIFIER_MEDIUM_DARK_SKIN_TONE;
        case '1f3ff':
          return A.Z.Messages.EMOJI_MODIFIER_DARK_SKIN_TONE;
        default:
          return A.Z.Messages.EMOJI_MODIFIER_NONE;
      }
    }(n),
    className: N.diversityEmojiItemImage,
    style: {
      backgroundImage: 'url("'.concat(l, '")'),
      ..._
    }
  })
});
  },
  D = e => {
let {
  id: t,
  selectedSurrogate: n,
  onClick: a,
  hasTabWrapper: o
} = e, d = (0, p.Z)('diversity'), _ = (0, E.useSpring)({
  height: (C + 2 * R) * (I.gw.length + 1),
  from: {
    height: C
  },
  config: {
    duration: 125
  }
});
i.useEffect(() => {
  d.focusFirstVisibleItem();
}, [d]);
let f = [
  '',
  ...I.gw
];
return l().remove(f, e => e === n), f.unshift(n), (0, r.jsx)(c.bG, {
  navigator: d,
  children: (0, r.jsx)(c.SJ, {
    children: e => {
      let {
        ref: n,
        ...i
      } = e;
      return (0, r.jsx)(u.animated.div, {
        ...i,
        id: t,
        ref: n,
        className: s()(N.diversitySelectorOptions, {
          [N.diversitySelectorOptionsHasTabWrapper]: o
        }),
        style: _,
        role: 'listbox',
        children: f.map((e, t) => (0, r.jsx)(y, {
          index: t,
          fade: 0 !== t,
          delay: 20 * t,
          surrogate: e,
          onClick: a
        }, t))
      });
    }
  })
});
  };
t.Z = e => {
  let {
searchBarRef: t,
selectedSurrogate: n,
className: a,
hasTabWrapper: s
  } = e, o = T.ZP.getURL(O + n), [l, u] = i.useState(!1), c = (0, h.Z)(null, () => u(!1)), d = i.useRef(null);
  return (0, r.jsxs)('div', {
ref: c,
className: a,
children: [
  (0, r.jsx)(E.Clickable, {
    innerRef: d,
    className: N.diversitySelectorButton,
    onClick: () => {
      u(!0);
    },
    'aria-label': A.Z.Messages.EMOJI_MODIFIER_MENU_BUTTON,
    'aria-haspopup': !0,
    'aria-expanded': l,
    'aria-controls': v,
    tabIndex: l ? -1 : 0,
    children: (0, r.jsx)('div', {
      className: N.diversityEmojiItemImage,
      style: {
        backgroundImage: 'url("'.concat(o, '")')
      }
    })
  }),
  l ? (0, r.jsx)('div', {
    onKeyDown: e => {
      e.keyCode === S.yXg.ESCAPE && (e.stopPropagation(), u(!1), null != d.current && d.current.focus());
    },
    children: (0, r.jsx)(D, {
      id: v,
      hasTabWrapper: s,
      selectedSurrogate: n,
      onClick: e => {
        var n;
        (0, f.t0)(e), u(!1), null === (n = t.current) || void 0 === n || n.focus();
      }
    })
  }) : null
]
  });
};