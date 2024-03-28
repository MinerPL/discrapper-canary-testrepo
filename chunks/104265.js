"use strict";
l.r(t), l.d(t, {
  default: function() {
    return N
  }
}), l("47120");
var a = l("735250"),
  n = l("470079"),
  o = l("803997"),
  r = l.n(o),
  i = l("718017"),
  s = l("399606"),
  u = l("692547"),
  d = l("780384"),
  c = l("481060"),
  m = l("596454"),
  f = l("410030"),
  h = l("339085"),
  v = l("14263"),
  g = l("283027"),
  x = l("26290"),
  p = l("689938"),
  C = l("952194");

function N(e) {
  let {
    guildId: t,
    option: l,
    selected: o,
    onSelect: N,
    hideMemberCount: j,
    canBeNew: _
  } = e, O = (0, d.isThemeDark)((0, f.default)()), [T, S] = n.useState(!1), M = T && !j, A = n.useRef(null), {
    reducedMotion: I
  } = n.useContext(c.AccessibilityPreferencesContext), E = (0, s.useStateFromStores)([h.default], () => {
    var e, t, a, n;
    return (null === (e = l.emoji) || void 0 === e ? void 0 : e.id) != null && null !== (n = null === (t = h.default.getCustomEmojiById(null === (a = l.emoji) || void 0 === a ? void 0 : a.id)) || void 0 === t ? void 0 : t.animated) && void 0 !== n && n
  }), b = (0, v.default)(t, 1e3), D = null == b || null == l.roleIds ? 0 : Math.max(...l.roleIds.map(e => b[e])), L = _ && !o && l.isUnseen, k = (0, i.useSpring)({
    transform: o || I.enabled ? "scale(1)" : "scale(0.7)",
    opacity: o ? 1 : 0,
    config: {
      duration: 150
    }
  }), y = (0, c.useToken)(u.default.colors.BACKGROUND_MODIFIER_ACCENT), R = (0, c.useToken)(u.default.unsafe_rawColors.BRAND_500), w = (0, i.useSpring)({
    from: {
      color: R.spring()
    },
    color: y.spring({
      opacity: O ? .5 : .25
    }),
    config: {
      duration: 300
    },
    delay: 500
  }), B = (0, i.useTransition)(M, {
    from: {
      transform: I.enabled ? "translateX(0)" : "translateX(8px)",
      opacity: 0
    },
    enter: {
      transform: "translateX(0)",
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    trail: 400,
    config: {
      duration: 150
    }
  }), [P, U] = n.useState(!1);
  n.useEffect(() => {
    if (M) return A.current = setTimeout(() => {
      S(!1), A.current = null
    }, 3e3), () => {
      null != A.current && clearTimeout(A.current)
    }
  }, [M]);
  let H = r()(C.optionButtonWrapper, {
      [C.selected]: o,
      [C.pressed]: P
    }),
    F = L ? {
      borderColor: w.color
    } : {};
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsx)(i.animated.div, {
      style: F,
      className: H,
      children: (0, a.jsxs)(c.Clickable, {
        className: r()(C.optionButton),
        onClick: () => {
          S(!o), N(!o)
        },
        onMouseDown: () => U(!0),
        onMouseUp: () => U(!1),
        children: [null != l.emoji && (null != l.emoji.id || null != l.emoji.name) ? (0, a.jsx)(m.default, {
          animated: l.emoji.animated || E,
          className: C.buttonEmoji,
          emojiId: l.emoji.id,
          emojiName: l.emoji.name
        }) : null, (0, a.jsxs)("div", {
          className: C.buttonText,
          children: [(0, a.jsx)(c.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: l.title
          }), l.description.length > 0 ? (0, a.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            children: l.description
          }) : null]
        }), (0, a.jsx)(i.animated.div, {
          className: C.checkIcon,
          style: k,
          children: (0, a.jsx)(g.default, {
            width: 10,
            height: 10,
            color: u.default.unsafe_rawColors.WHITE_500.css
          })
        }), B((e, t) => D > 0 && t && (0, a.jsx)(i.animated.div, {
          className: C.memberCount,
          style: e,
          children: (0, a.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "always-white",
            children: p.default.Messages.ONBOARDING_OPTION_ROLE_COUNTS.format({
              memberCount: D
            })
          })
        })), L && (0, a.jsx)(x.TextBadge, {
          color: u.default.unsafe_rawColors.BRAND_260.css,
          text: p.default.Messages.NEW,
          className: C.newBadge
        })]
      })
    })
  })
}