n.d(t, {
  Z: function() {
return A;
  }
}), n(724458), n(653041), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(392711),
  r = n(481060),
  l = n(239091),
  o = n(132580),
  c = n(688465),
  d = n(236413),
  u = n(727072),
  _ = n(85960),
  I = n(65912),
  E = n(457414),
  T = n(154502),
  m = n(295708),
  N = n(273504),
  S = n(689938),
  h = n(292750);

function g(e) {
  let {
rule: t,
triggerType: n
  } = e, i = a.useMemo(() => null == t ? (0, _.V9)(n).map(e => (0, s.jsx)(T.Z, {
actionType: e,
triggerType: n
  }, e)) : (0, _.V9)(n).reduce((e, a) => {
var i;
let r = t.actions.find(e => {
  let {
    type: t
  } = e;
  return a === t;
});
return null == r ? e : (e.push((0, s.jsx)(T.Z, {
  actionType: a,
  action: r,
  triggerType: null !== (i = null == t ? void 0 : t.triggerType) && void 0 !== i ? i : n
}, a)), e);
  }, []), [
t,
n
  ]);
  return 0 === i.length ? null : (0, s.jsx)('div', {
className: h.actionRuleListContainer,
children: i
  });
}
let C = (e, t) => () => t({
...e,
enabled: !e.enabled
  }),
  x = e => {
e.stopPropagation(), e.preventDefault();
  },
  p = e => {
let {
  className: t,
  children: n,
  ...a
} = e;
return (0, s.jsx)(r.Clickable, {
  className: t,
  onClick: x,
  onMouseDown: x,
  onMouseUp: x,
  ...a,
  children: n
});
  };

function R(e) {
  var t;
  let {
rule: n,
onChangeRule: a,
onContextMenu: i
  } = e, l = C(n, a), o = e => {
x(e), i(e);
  };
  return (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsx)('div', {
    className: h.ruleTextContainer,
    children: (0, s.jsx)(m.Z, {
      rule: n,
      onChangeRule: a
    })
  }),
  (0, s.jsxs)(p, {
    className: h.actionContainer,
    children: [
      (0, s.jsx)(r.Switch, {
        className: h.toggle,
        onChange: l,
        checked: null !== (t = null == n ? void 0 : n.enabled) && void 0 !== t && t
      }),
      (0, s.jsx)(r.Tooltip, {
        text: S.Z.Messages.MORE,
        position: 'top',
        'aria-label': S.Z.Messages.MORE_OPTIONS,
        children: e => (0, s.jsx)(r.Clickable, {
          ...e,
          onClick: o,
          className: h.menuIconButton,
          children: (0, s.jsx)(r.MoreVerticalIcon, {
            size: 'md',
            color: 'currentColor',
            className: h.menuIcon
          })
        })
      })
    ]
  })
]
  });
}

function f(e) {
  return (0, _.r5)(e, _.vT.ALPHA) ? (0, s.jsx)(o.Z, {
className: h.alphaBetaTag
  }) : (0, _.r5)(e, _.vT.BETA) ? (0, s.jsx)(c.Z, {
className: h.alphaBetaTag
  }) : null;
}

function L(e) {
  let {
rule: t,
isDefaultRule: n,
onContextMenu: l
  } = e, o = (0, E.w)(t.triggerType, t), {
isLoading: c,
saveRule: _
  } = (0, I.w)(), {
updateRule: T
  } = (0, u.pH)(t.guildId), [m, N] = a.useState(t.enabled), C = (0, i.throttle)(async (e, n) => {
if (n.preventDefault(), n.stopPropagation(), !c) {
  let e = {
    ...t,
    enabled: !m
  };
  N(!m);
  let n = await _(e, []);
  if (null != n)
    T(n), N(n.enabled);
}
  }, 300), R = e => {
x(e), l(e);
  };
  if (null == o)
return null;
  let {
headerText: L,
headerSubtext: O,
descriptionText: A,
icon: M
  } = o, D = !(0, d.Vb)(t);
  return (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsx)('div', {
    className: h.ruleIconContainer,
    children: (0, s.jsx)(M, {
      size: 'md',
      color: 'currentColor',
      className: h.ruleIcon
    })
  }),
  (0, s.jsxs)('div', {
    className: h.ruleTextContainer,
    children: [
      (0, s.jsxs)(r.Heading, {
        variant: 'text-md/semibold',
        color: 'header-primary',
        className: h.ruleTextHeaderContainer,
        children: [
          (0, s.jsxs)('div', {
            className: h.ruleTextHeader,
            children: [
              L,
              f(t.triggerType)
            ]
          }),
          (0, s.jsx)(r.Text, {
            className: h.ruleSubtextHeader,
            variant: 'text-sm/normal',
            children: O
          })
        ]
      }),
      D && (0, s.jsx)(r.Text, {
        className: h.ruleTextDescription,
        variant: 'text-sm/normal',
        children: A
      }),
      (0, s.jsx)(g, {
        rule: t,
        triggerType: t.triggerType
      })
    ]
  }),
  (0, s.jsxs)(p, {
    className: h.actionContainer,
    children: [
      (0, s.jsx)(r.Switch, {
        className: h.toggle,
        onChange: C,
        checked: null != m && m
      }),
      !n && (0, s.jsx)(r.Tooltip, {
        text: S.Z.Messages.MORE,
        position: 'top',
        'aria-label': S.Z.Messages.MORE_OPTIONS,
        children: e => (0, s.jsx)(r.Clickable, {
          ...e,
          onClick: R,
          className: h.menuIconButton,
          children: (0, s.jsx)(r.MoreVerticalIcon, {
            size: 'md',
            color: 'currentColor',
            className: h.menuIcon
          })
        })
      })
    ]
  })
]
  });
}

function O(e) {
  let {
triggerType: t,
onSetupRule: n
  } = e, i = a.useMemo(() => (0, E.w)(t), [t]);
  if (null == i)
return null;
  let {
headerText: l,
descriptionText: o,
icon: c
  } = i;
  return (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsx)('div', {
    className: h.ruleIconContainer,
    children: (0, s.jsx)(c, {
      color: 'currentColor',
      size: 'md',
      className: h.ruleIcon
    })
  }),
  (0, s.jsxs)('div', {
    className: h.ruleTextContainer,
    children: [
      (0, s.jsx)(r.Heading, {
        className: h.ruleTextHeader,
        variant: 'text-md/semibold',
        color: 'header-primary',
        children: (0, s.jsxs)('div', {
          className: h.ruleTextHeader,
          children: [
            l,
            f(t)
          ]
        })
      }),
      (0, s.jsx)(r.Text, {
        className: h.ruleTextDescription,
        variant: 'text-sm/normal',
        children: o
      }),
      (0, s.jsx)(g, {
        triggerType: t
      })
    ]
  }),
  (0, s.jsx)(p, {
    className: h.actionContainer,
    children: (0, s.jsx)(r.Button, {
      size: r.Button.Sizes.SMALL,
      onClick: n,
      children: t === N.fX.KEYWORD ? S.Z.Messages.CREATE : S.Z.Messages.GUILD_AUTOMOD_RULE_SETUP_BUTTON
    })
  })
]
  });
}

function A(e) {
  let {
rule: t,
triggerType: a,
isEditMode: i,
isDefaultRule: o,
forceSetup: c,
onSetupRule: d,
onChangeRule: u
  } = e, _ = e => {
if (null != t)
  e.preventDefault(), e.stopPropagation(), (0, l.jW)(e, async () => {
    let {
      default: e
    } = await n.e('25443').then(n.bind(n, 46577));
    return n => (0, s.jsx)(e, {
      rule: t,
      ...n
    });
  });
  }, I = (0, s.jsx)(O, {
triggerType: a,
onSetupRule: d
  });
  return null != t && !c && (I = i ? (0, s.jsx)(R, {
rule: t,
onChangeRule: u,
onContextMenu: _
  }) : (0, s.jsx)(L, {
rule: t,
isDefaultRule: o,
onContextMenu: _
  })), (0, s.jsx)(r.Clickable, {
className: h.mainContainer,
onContextMenu: _,
children: I
  });
}