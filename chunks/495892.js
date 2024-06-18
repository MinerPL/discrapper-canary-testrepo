"use strict";
t.d(s, {
  Z: function() {
    return f
  }
}), t(724458), t(653041), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(392711),
  a = t(481060),
  r = t(239091),
  o = t(132580),
  c = t(688465),
  d = t(621113),
  u = t(236413),
  E = t(727072),
  _ = t(85960),
  I = t(65912),
  T = t(457414),
  N = t(154502),
  m = t(295708),
  S = t(273504),
  h = t(689938),
  g = t(180170);

function x(e) {
  let {
    rule: s,
    triggerType: t
  } = e, l = i.useMemo(() => null == s ? (0, _.V9)(t).map(e => (0, n.jsx)(N.Z, {
    actionType: e,
    triggerType: t
  }, e)) : (0, _.V9)(t).reduce((e, i) => {
    var l;
    let a = s.actions.find(e => {
      let {
        type: s
      } = e;
      return i === s
    });
    return null == a ? e : (e.push((0, n.jsx)(N.Z, {
      actionType: i,
      action: a,
      triggerType: null !== (l = null == s ? void 0 : s.triggerType) && void 0 !== l ? l : t
    }, i)), e)
  }, []), [s, t]);
  return 0 === l.length ? null : (0, n.jsx)("div", {
    className: g.actionRuleListContainer,
    children: l
  })
}
let C = (e, s) => () => s({
    ...e,
    enabled: !e.enabled
  }),
  R = e => {
    e.stopPropagation(), e.preventDefault()
  },
  L = e => {
    let {
      className: s,
      children: t,
      ...i
    } = e;
    return (0, n.jsx)(a.Clickable, {
      className: s,
      onClick: R,
      onMouseDown: R,
      onMouseUp: R,
      ...i,
      children: t
    })
  };

function O(e) {
  var s;
  let {
    rule: t,
    onChangeRule: i,
    onContextMenu: l
  } = e, r = C(t, i), o = e => {
    R(e), l(e)
  };
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("div", {
      className: g.ruleTextContainer,
      children: (0, n.jsx)(m.Z, {
        rule: t,
        onChangeRule: i
      })
    }), (0, n.jsxs)(L, {
      className: g.actionContainer,
      children: [(0, n.jsx)(a.Switch, {
        className: g.toggle,
        onChange: r,
        checked: null !== (s = null == t ? void 0 : t.enabled) && void 0 !== s && s
      }), (0, n.jsx)(a.Tooltip, {
        text: h.Z.Messages.MORE,
        position: "top",
        "aria-label": h.Z.Messages.MORE_OPTIONS,
        children: e => (0, n.jsx)(a.Clickable, {
          ...e,
          onClick: o,
          className: g.menuIconButton,
          children: (0, n.jsx)(d.Z, {
            width: 24,
            height: 24,
            className: g.menuIcon
          })
        })
      })]
    })]
  })
}

function A(e) {
  return (0, _.r5)(e, _.vT.ALPHA) ? (0, n.jsx)(o.Z, {
    className: g.alphaBetaTag
  }) : (0, _.r5)(e, _.vT.BETA) ? (0, n.jsx)(c.Z, {
    className: g.alphaBetaTag
  }) : null
}

function p(e) {
  let {
    rule: s,
    isDefaultRule: t,
    onContextMenu: r
  } = e, o = (0, T.w)(s.triggerType, s), {
    isLoading: c,
    saveRule: _
  } = (0, I.w)(), {
    updateRule: N
  } = (0, E.pH)(s.guildId), [m, S] = i.useState(s.enabled), C = (0, l.throttle)(async (e, t) => {
    if (t.preventDefault(), t.stopPropagation(), !c) {
      let e = {
        ...s,
        enabled: !m
      };
      S(!m);
      let t = await _(e, []);
      if (null != t) N(t), S(t.enabled)
    }
  }, 300), O = e => {
    R(e), r(e)
  };
  if (null == o) return null;
  let {
    headerText: p,
    headerSubtext: M,
    descriptionText: f,
    icon: v
  } = o, D = !(0, u.Vb)(s);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("div", {
      className: g.ruleIconContainer,
      children: (0, n.jsx)(v, {
        width: 24,
        height: 24,
        className: g.ruleIcon
      })
    }), (0, n.jsxs)("div", {
      className: g.ruleTextContainer,
      children: [(0, n.jsxs)(a.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        className: g.ruleTextHeaderContainer,
        children: [(0, n.jsxs)("div", {
          className: g.ruleTextHeader,
          children: [p, A(s.triggerType)]
        }), (0, n.jsx)(a.Text, {
          className: g.ruleSubtextHeader,
          variant: "text-sm/normal",
          children: M
        })]
      }), D && (0, n.jsx)(a.Text, {
        className: g.ruleTextDescription,
        variant: "text-sm/normal",
        children: f
      }), (0, n.jsx)(x, {
        rule: s,
        triggerType: s.triggerType
      })]
    }), (0, n.jsxs)(L, {
      className: g.actionContainer,
      children: [(0, n.jsx)(a.Switch, {
        className: g.toggle,
        onChange: C,
        checked: null != m && m
      }), !t && (0, n.jsx)(a.Tooltip, {
        text: h.Z.Messages.MORE,
        position: "top",
        "aria-label": h.Z.Messages.MORE_OPTIONS,
        children: e => (0, n.jsx)(a.Clickable, {
          ...e,
          onClick: O,
          className: g.menuIconButton,
          children: (0, n.jsx)(d.Z, {
            width: 24,
            height: 24,
            className: g.menuIcon
          })
        })
      })]
    })]
  })
}

function M(e) {
  let {
    triggerType: s,
    onSetupRule: t
  } = e, l = i.useMemo(() => (0, T.w)(s), [s]);
  if (null == l) return null;
  let {
    headerText: r,
    descriptionText: o,
    icon: c
  } = l;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("div", {
      className: g.ruleIconContainer,
      children: (0, n.jsx)(c, {
        width: 24,
        height: 24,
        className: g.ruleIcon
      })
    }), (0, n.jsxs)("div", {
      className: g.ruleTextContainer,
      children: [(0, n.jsx)(a.Heading, {
        className: g.ruleTextHeader,
        variant: "text-md/semibold",
        color: "header-primary",
        children: (0, n.jsxs)("div", {
          className: g.ruleTextHeader,
          children: [r, A(s)]
        })
      }), (0, n.jsx)(a.Text, {
        className: g.ruleTextDescription,
        variant: "text-sm/normal",
        children: o
      }), (0, n.jsx)(x, {
        triggerType: s
      })]
    }), (0, n.jsx)(L, {
      className: g.actionContainer,
      children: (0, n.jsx)(a.Button, {
        size: a.Button.Sizes.SMALL,
        onClick: t,
        children: s === S.fX.KEYWORD ? h.Z.Messages.CREATE : h.Z.Messages.GUILD_AUTOMOD_RULE_SETUP_BUTTON
      })
    })]
  })
}

function f(e) {
  let {
    rule: s,
    triggerType: i,
    isEditMode: l,
    isDefaultRule: o,
    forceSetup: c,
    onSetupRule: d,
    onChangeRule: u
  } = e, E = e => {
    if (null != s) e.preventDefault(), e.stopPropagation(), (0, r.jW)(e, async () => {
      let {
        default: e
      } = await t.e("25443").then(t.bind(t, 46577));
      return t => (0, n.jsx)(e, {
        rule: s,
        ...t
      })
    })
  }, _ = (0, n.jsx)(M, {
    triggerType: i,
    onSetupRule: d
  });
  return null != s && !c && (_ = l ? (0, n.jsx)(O, {
    rule: s,
    onChangeRule: u,
    onContextMenu: E
  }) : (0, n.jsx)(p, {
    rule: s,
    isDefaultRule: o,
    onContextMenu: E
  })), (0, n.jsx)(a.Clickable, {
    className: g.mainContainer,
    onContextMenu: E,
    children: _
  })
}