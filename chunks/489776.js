"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("718017"),
  i = s("722770"),
  r = s("442837"),
  o = s("481060"),
  d = s("607070"),
  u = s("151785"),
  c = s("236413"),
  E = s("85960"),
  _ = s("65912"),
  I = s("564488"),
  T = s("689938"),
  S = s("966971");

function f(e) {
  let {
    guildId: t,
    triggerType: s
  } = e, f = l.useMemo(() => () => (0, c.createDefaultRule)(t, s), [t, s]), [m] = l.useState(f), [N, g] = l.useState(!1), {
    editingRule: h,
    createNewEditingRule: C
  } = (0, _.useAutomodEditingRuleState)(), {
    getDefaultRuleName: R
  } = E.triggerConfigs[s], x = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), L = !(0, c.isBackendPersistedRule)(h) && (null == h ? void 0 : h.triggerType) === s, [O, A] = l.useState(L ? h : m), p = (0, n.useSpring)({
    opacity: L ? 0 : 1,
    pointerEvents: L ? "none" : "all",
    config: {
      ...n.config.stiff,
      clamp: !0
    },
    immediate: x
  }), M = (0, n.useSpring)({
    opacity: L ? 1 : 0,
    pointerEvents: L ? "all" : "none",
    config: {
      ...n.config.stiff,
      clamp: !0
    },
    immediate: x,
    onStart: () => {
      A(L ? h : m)
    },
    onRest: () => {
      A(L ? h : m), g(L)
    }
  });
  return null == h || L ? (0, a.jsxs)("div", {
    className: S.mainRuleContainer,
    style: {
      height: L ? "auto" : "60px"
    },
    children: [(0, a.jsx)(n.animated.div, {
      className: S.animatedRuleCardContainer,
      style: M,
      children: (0, a.jsx)(I.default, {
        rule: O,
        persistEdit: N
      })
    }), (0, a.jsx)(n.animated.div, {
      className: S.animatedNewRuleContainer,
      style: p,
      children: (0, a.jsxs)(o.Clickable, {
        className: S.addAnotherRuleCardContainer,
        onClick: () => {
          C(t, s)
        },
        children: [(0, a.jsx)(u.default, {
          width: 20,
          height: 20,
          color: i.default.BLUE_345,
          className: S.plusIcon
        }), (0, a.jsx)(o.Text, {
          variant: "text-md/semibold",
          color: "text-link",
          children: T.default.Messages.GUILD_AUTOMOD_ADD_ADDITIONAL_RULE.format({
            ruleName: R()
          })
        })]
      })
    })]
  }) : null
}