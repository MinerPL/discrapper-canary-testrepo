r.d(n, {
  Z: function() {
return f;
  }
}), r(47120);
var t = r(735250),
  o = r(470079),
  a = r(120356),
  l = r.n(a),
  i = r(338545),
  s = r(399606),
  c = r(692547),
  u = r(780384),
  d = r(481060),
  m = r(596454),
  h = r(410030),
  v = r(339085),
  p = r(14263),
  g = r(689938),
  x = r(99931);

function f(e) {
  let {
guildId: n,
option: r,
selected: a,
onSelect: f,
hideMemberCount: C,
canBeNew: b
  } = e, O = (0, u.wj)((0, h.ZP)()), [N, j] = o.useState(!1), _ = N && !C, M = o.useRef(null), {
reducedMotion: k
  } = o.useContext(d.AccessibilityPreferencesContext), Z = (0, s.e7)([v.Z], () => {
var e, n, t, o;
return (null === (e = r.emoji) || void 0 === e ? void 0 : e.id) != null && null !== (o = null === (n = v.Z.getCustomEmojiById(null === (t = r.emoji) || void 0 === t ? void 0 : t.id)) || void 0 === n ? void 0 : n.animated) && void 0 !== o && o;
  }), T = (0, p.Z)(n, 1000), S = null == T || null == r.roleIds ? 0 : Math.max(...r.roleIds.map(e => T[e])), y = b && !a && r.isUnseen, I = (0, i.useSpring)({
transform: a || k.enabled ? 'scale(1)' : 'scale(0.7)',
opacity: a ? 1 : 0,
config: {
  duration: 150
}
  }), R = (0, d.useToken)(c.Z.colors.BACKGROUND_MODIFIER_ACCENT), w = (0, d.useToken)(c.Z.unsafe_rawColors.BRAND_500), E = (0, i.useSpring)({
from: {
  color: w.spring()
},
color: R.spring({
  opacity: O ? 0.5 : 0.25
}),
config: {
  duration: 300
},
delay: 500
  }), A = (0, i.useTransition)(_, {
from: {
  transform: k.enabled ? 'translateX(0)' : 'translateX(8px)',
  opacity: 0
},
enter: {
  transform: 'translateX(0)',
  opacity: 1
},
leave: {
  opacity: 0
},
trail: 400,
config: {
  duration: 150
}
  }), [D, B] = o.useState(!1);
  o.useEffect(() => {
if (_)
  return M.current = setTimeout(() => {
    j(!1), M.current = null;
  }, 3000), () => {
    null != M.current && clearTimeout(M.current);
  };
  }, [_]);
  let L = l()(x.optionButtonWrapper, {
  [x.selected]: a,
  [x.pressed]: D
}),
P = y ? {
  borderColor: E.color
} : {};
  return (0, t.jsx)(t.Fragment, {
children: (0, t.jsx)(i.animated.div, {
  style: P,
  className: L,
  children: (0, t.jsxs)(d.Clickable, {
    className: l()(x.optionButton),
    onClick: () => {
      j(!a), f(!a);
    },
    onMouseDown: () => B(!0),
    onMouseUp: () => B(!1),
    children: [
      null != r.emoji && (null != r.emoji.id || null != r.emoji.name) ? (0, t.jsx)(m.Z, {
        animated: r.emoji.animated || Z,
        className: x.buttonEmoji,
        emojiId: r.emoji.id,
        emojiName: r.emoji.name
      }) : null,
      (0, t.jsxs)('div', {
        className: x.buttonText,
        children: [
          (0, t.jsx)(d.Text, {
            variant: 'text-md/medium',
            color: 'header-primary',
            children: r.title
          }),
          r.description.length > 0 ? (0, t.jsx)(d.Text, {
            variant: 'text-xs/normal',
            color: 'header-secondary',
            children: r.description
          }) : null
        ]
      }),
      (0, t.jsx)(i.animated.div, {
        className: x.checkIcon,
        style: I,
        children: (0, t.jsx)(d.CheckmarkLargeIcon, {
          size: 'custom',
          width: 10,
          height: 10,
          color: c.Z.unsafe_rawColors.WHITE_500.css
        })
      }),
      A((e, n) => S > 0 && n && (0, t.jsx)(i.animated.div, {
        className: x.memberCount,
        style: e,
        children: (0, t.jsx)(d.Text, {
          variant: 'text-xs/normal',
          color: 'always-white',
          children: g.Z.Messages.ONBOARDING_OPTION_ROLE_COUNTS.format({
            memberCount: S
          })
        })
      })),
      y && (0, t.jsx)(d.TextBadge, {
        color: c.Z.unsafe_rawColors.BRAND_260.css,
        text: g.Z.Messages.NEW,
        className: x.newBadge
      })
    ]
  })
})
  });
}