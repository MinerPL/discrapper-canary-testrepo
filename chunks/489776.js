"use strict";
t.d(s, {
  Z: function() {
    return m
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(920906),
  a = t(722770),
  r = t(442837),
  o = t(481060),
  c = t(607070),
  d = t(151785),
  u = t(236413),
  E = t(85960),
  _ = t(65912),
  I = t(564488),
  T = t(689938),
  N = t(31067);

function m(e) {
  let {
    guildId: s,
    triggerType: t
  } = e, m = i.useMemo(() => () => (0, u.ep)(s, t), [s, t]), [S] = i.useState(m), [h, g] = i.useState(!1), {
    editingRule: x,
    createNewEditingRule: C
  } = (0, _.V)(), {
    getDefaultRuleName: R
  } = E.I6[t], L = (0, r.e7)([c.Z], () => c.Z.useReducedMotion), O = !(0, u.Vb)(x) && (null == x ? void 0 : x.triggerType) === t, [A, p] = i.useState(O ? x : S), M = (0, l.useSpring)({
    opacity: O ? 0 : 1,
    pointerEvents: O ? "none" : "all",
    config: {
      ...l.config.stiff,
      clamp: !0
    },
    immediate: L
  }), f = (0, l.useSpring)({
    opacity: O ? 1 : 0,
    pointerEvents: O ? "all" : "none",
    config: {
      ...l.config.stiff,
      clamp: !0
    },
    immediate: L,
    onStart: () => {
      p(O ? x : S)
    },
    onRest: () => {
      p(O ? x : S), g(O)
    }
  });
  return null == x || O ? (0, n.jsxs)("div", {
    className: N.mainRuleContainer,
    style: {
      height: O ? "auto" : "60px"
    },
    children: [(0, n.jsx)(l.animated.div, {
      className: N.animatedRuleCardContainer,
      style: f,
      children: (0, n.jsx)(I.Z, {
        rule: A,
        persistEdit: h
      })
    }), (0, n.jsx)(l.animated.div, {
      className: N.animatedNewRuleContainer,
      style: M,
      children: (0, n.jsxs)(o.Clickable, {
        className: N.addAnotherRuleCardContainer,
        onClick: () => {
          C(s, t)
        },
        children: [(0, n.jsx)(d.Z, {
          width: 20,
          height: 20,
          color: a.Z.BLUE_345,
          className: N.plusIcon
        }), (0, n.jsx)(o.Text, {
          variant: "text-md/semibold",
          color: "text-link",
          children: T.Z.Messages.GUILD_AUTOMOD_ADD_ADDITIONAL_RULE.format({
            ruleName: R()
          })
        })]
      })
    })]
  }) : null
}