"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
}), s("724458"), s("653041"), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("392711"),
  i = s("481060"),
  r = s("239091"),
  o = s("132580"),
  d = s("688465"),
  u = s("621113"),
  c = s("236413"),
  E = s("727072"),
  _ = s("85960"),
  I = s("65912"),
  T = s("457414"),
  S = s("154502"),
  f = s("295708"),
  m = s("273504"),
  N = s("689938"),
  g = s("326135");

function h(e) {
  let {
    rule: t,
    triggerType: s
  } = e, n = l.useMemo(() => null == t ? (0, _.getAvailableActionTypes)(s).map(e => (0, a.jsx)(S.default, {
    actionType: e,
    triggerType: s
  }, e)) : (0, _.getAvailableActionTypes)(s).reduce((e, l) => {
    var n;
    let i = t.actions.find(e => {
      let {
        type: t
      } = e;
      return l === t
    });
    return null == i ? e : (e.push((0, a.jsx)(S.default, {
      actionType: l,
      action: i,
      triggerType: null !== (n = null == t ? void 0 : t.triggerType) && void 0 !== n ? n : s
    }, l)), e)
  }, []), [t, s]);
  return 0 === n.length ? null : (0, a.jsx)("div", {
    className: g.actionRuleListContainer,
    children: n
  })
}
let C = (e, t) => () => t({
    ...e,
    enabled: !e.enabled
  }),
  R = e => {
    e.stopPropagation(), e.preventDefault()
  },
  x = e => {
    let {
      className: t,
      children: s,
      ...l
    } = e;
    return (0, a.jsx)(i.Clickable, {
      className: t,
      onClick: R,
      onMouseDown: R,
      onMouseUp: R,
      ...l,
      children: s
    })
  };

function L(e) {
  var t;
  let {
    rule: s,
    onChangeRule: l,
    onContextMenu: n
  } = e, r = C(s, l), o = e => {
    R(e), n(e)
  };
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: g.ruleTextContainer,
      children: (0, a.jsx)(f.default, {
        rule: s,
        onChangeRule: l
      })
    }), (0, a.jsxs)(x, {
      className: g.actionContainer,
      children: [(0, a.jsx)(i.Switch, {
        className: g.toggle,
        onChange: r,
        checked: null !== (t = null == s ? void 0 : s.enabled) && void 0 !== t && t
      }), (0, a.jsx)(i.Tooltip, {
        text: N.default.Messages.MORE,
        position: "top",
        "aria-label": N.default.Messages.MORE_OPTIONS,
        children: e => (0, a.jsx)(i.Clickable, {
          ...e,
          onClick: o,
          className: g.menuIconButton,
          children: (0, a.jsx)(u.default, {
            width: 24,
            height: 24,
            className: g.menuIcon
          })
        })
      })]
    })]
  })
}

function O(e) {
  return (0, _.checkTriggerTypeForFlag)(e, _.AutomodTriggerConfigFlags.ALPHA) ? (0, a.jsx)(o.default, {
    className: g.alphaBetaTag
  }) : (0, _.checkTriggerTypeForFlag)(e, _.AutomodTriggerConfigFlags.BETA) ? (0, a.jsx)(d.default, {
    className: g.alphaBetaTag
  }) : null
}

function A(e) {
  let {
    rule: t,
    isDefaultRule: s,
    onContextMenu: r
  } = e, o = (0, T.getRuleInfo)(t.triggerType, t), {
    isLoading: d,
    saveRule: _
  } = (0, I.useAutomodEditingRuleActions)(), {
    updateRule: S
  } = (0, E.useAutomodRulesList)(t.guildId), [f, m] = l.useState(t.enabled), C = (0, n.throttle)(async (e, s) => {
    if (s.preventDefault(), s.stopPropagation(), !d) {
      let e = {
        ...t,
        enabled: !f
      };
      m(!f);
      let s = await _(e, []);
      if (null != s) S(s), m(s.enabled)
    }
  }, 300), L = e => {
    R(e), r(e)
  };
  if (null == o) return null;
  let {
    headerText: A,
    headerSubtext: p,
    descriptionText: M,
    icon: D
  } = o, v = !(0, c.isBackendPersistedRule)(t);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: g.ruleIconContainer,
      children: (0, a.jsx)(D, {
        width: 24,
        height: 24,
        className: g.ruleIcon
      })
    }), (0, a.jsxs)("div", {
      className: g.ruleTextContainer,
      children: [(0, a.jsxs)(i.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        className: g.ruleTextHeaderContainer,
        children: [(0, a.jsxs)("div", {
          className: g.ruleTextHeader,
          children: [A, O(t.triggerType)]
        }), (0, a.jsx)(i.Text, {
          className: g.ruleSubtextHeader,
          variant: "text-sm/normal",
          children: p
        })]
      }), v && (0, a.jsx)(i.Text, {
        className: g.ruleTextDescription,
        variant: "text-sm/normal",
        children: M
      }), (0, a.jsx)(h, {
        rule: t,
        triggerType: t.triggerType
      })]
    }), (0, a.jsxs)(x, {
      className: g.actionContainer,
      children: [(0, a.jsx)(i.Switch, {
        className: g.toggle,
        onChange: C,
        checked: null != f && f
      }), !s && (0, a.jsx)(i.Tooltip, {
        text: N.default.Messages.MORE,
        position: "top",
        "aria-label": N.default.Messages.MORE_OPTIONS,
        children: e => (0, a.jsx)(i.Clickable, {
          ...e,
          onClick: L,
          className: g.menuIconButton,
          children: (0, a.jsx)(u.default, {
            width: 24,
            height: 24,
            className: g.menuIcon
          })
        })
      })]
    })]
  })
}

function p(e) {
  let {
    triggerType: t,
    onSetupRule: s
  } = e, n = l.useMemo(() => (0, T.getRuleInfo)(t), [t]);
  if (null == n) return null;
  let {
    headerText: r,
    descriptionText: o,
    icon: d
  } = n;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: g.ruleIconContainer,
      children: (0, a.jsx)(d, {
        width: 24,
        height: 24,
        className: g.ruleIcon
      })
    }), (0, a.jsxs)("div", {
      className: g.ruleTextContainer,
      children: [(0, a.jsx)(i.Heading, {
        className: g.ruleTextHeader,
        variant: "text-md/semibold",
        color: "header-primary",
        children: (0, a.jsxs)("div", {
          className: g.ruleTextHeader,
          children: [r, O(t)]
        })
      }), (0, a.jsx)(i.Text, {
        className: g.ruleTextDescription,
        variant: "text-sm/normal",
        children: o
      }), (0, a.jsx)(h, {
        triggerType: t
      })]
    }), (0, a.jsx)(x, {
      className: g.actionContainer,
      children: (0, a.jsx)(i.Button, {
        size: i.Button.Sizes.SMALL,
        onClick: s,
        children: t === m.AutomodTriggerType.KEYWORD ? N.default.Messages.CREATE : N.default.Messages.GUILD_AUTOMOD_RULE_SETUP_BUTTON
      })
    })]
  })
}

function M(e) {
  let {
    rule: t,
    triggerType: l,
    isEditMode: n,
    isDefaultRule: o,
    forceSetup: d,
    onSetupRule: u,
    onChangeRule: c
  } = e, E = e => {
    null != t && (e.preventDefault(), e.stopPropagation(), (0, r.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await s.e("25443").then(s.bind(s, "46577"));
      return s => (0, a.jsx)(e, {
        rule: t,
        ...s
      })
    }))
  }, _ = (0, a.jsx)(p, {
    triggerType: l,
    onSetupRule: u
  });
  return null != t && !d && (_ = n ? (0, a.jsx)(L, {
    rule: t,
    onChangeRule: c,
    onContextMenu: E
  }) : (0, a.jsx)(A, {
    rule: t,
    isDefaultRule: o,
    onContextMenu: E
  })), (0, a.jsx)(i.Clickable, {
    className: g.mainContainer,
    onContextMenu: E,
    children: _
  })
}