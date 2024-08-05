t.d(n, {
  Z: function() {
return f;
  }
}), t(47120);
var r = t(735250),
  o = t(470079),
  a = t(120356),
  l = t.n(a),
  i = t(338545),
  s = t(399606),
  c = t(692547),
  u = t(780384),
  d = t(481060),
  m = t(596454),
  h = t(410030),
  v = t(339085),
  p = t(14263),
  g = t(689938),
  x = t(99931);

function f(e) {
  let {
guildId: n,
option: t,
selected: a,
onSelect: f,
hideMemberCount: C,
canBeNew: b
  } = e, O = (0, u.wj)((0, h.ZP)()), [N, j] = o.useState(!1), _ = N && !C, M = o.useRef(null), {
reducedMotion: k
  } = o.useContext(d.AccessibilityPreferencesContext), Z = (0, s.e7)([v.Z], () => {
var e, n, r, o;
return (null === (e = t.emoji) || void 0 === e ? void 0 : e.id) != null && null !== (o = null === (n = v.Z.getCustomEmojiById(null === (r = t.emoji) || void 0 === r ? void 0 : r.id)) || void 0 === n ? void 0 : n.animated) && void 0 !== o && o;
  }), y = (0, p.Z)(n, 1000), T = null == y || null == t.roleIds ? 0 : Math.max(...t.roleIds.map(e => y[e])), S = b && !a && t.isUnseen, w = (0, d.useSpring)({
transform: a || k.enabled ? 'scale(1)' : 'scale(0.7)',
opacity: a ? 1 : 0,
config: {
  duration: 150
}
  }, 'animate-always'), I = (0, d.useToken)(c.Z.colors.BACKGROUND_MODIFIER_ACCENT), R = (0, d.useToken)(c.Z.unsafe_rawColors.BRAND_500), E = (0, d.useSpring)({
from: {
  color: R.spring()
},
color: I.spring({
  opacity: O ? 0.5 : 0.25
}),
config: {
  duration: 300
},
delay: 500
  }, 'animate-always'), A = (0, d.useTransition)(_, {
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
  }, 'animate-always'), [D, B] = o.useState(!1);
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
P = S ? {
  borderColor: E.color
} : {};
  return (0, r.jsx)(r.Fragment, {
children: (0, r.jsx)(i.animated.div, {
  style: P,
  className: L,
  children: (0, r.jsxs)(d.Clickable, {
    className: l()(x.optionButton),
    onClick: () => {
      j(!a), f(!a);
    },
    onMouseDown: () => B(!0),
    onMouseUp: () => B(!1),
    children: [
      null != t.emoji && (null != t.emoji.id || null != t.emoji.name) ? (0, r.jsx)(m.Z, {
        animated: t.emoji.animated || Z,
        className: x.buttonEmoji,
        emojiId: t.emoji.id,
        emojiName: t.emoji.name
      }) : null,
      (0, r.jsxs)('div', {
        className: x.buttonText,
        children: [
          (0, r.jsx)(d.Text, {
            variant: 'text-md/medium',
            color: 'header-primary',
            children: t.title
          }),
          t.description.length > 0 ? (0, r.jsx)(d.Text, {
            variant: 'text-xs/normal',
            color: 'header-secondary',
            children: t.description
          }) : null
        ]
      }),
      (0, r.jsx)(i.animated.div, {
        className: x.checkIcon,
        style: w,
        children: (0, r.jsx)(d.CheckmarkLargeIcon, {
          size: 'custom',
          width: 10,
          height: 10,
          color: c.Z.unsafe_rawColors.WHITE_500.css
        })
      }),
      A((e, n) => T > 0 && n && (0, r.jsx)(i.animated.div, {
        className: x.memberCount,
        style: e,
        children: (0, r.jsx)(d.Text, {
          variant: 'text-xs/normal',
          color: 'always-white',
          children: g.Z.Messages.ONBOARDING_OPTION_ROLE_COUNTS.format({
            memberCount: T
          })
        })
      })),
      S && (0, r.jsx)(d.TextBadge, {
        color: c.Z.unsafe_rawColors.BRAND_260.css,
        text: g.Z.Messages.NEW,
        className: x.newBadge
      })
    ]
  })
})
  });
}