n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(143927),
  o = n(481060),
  c = n(963202),
  d = n(105671),
  u = n(92373),
  _ = n(377171),
  h = n(207796),
  E = n(308083),
  I = n(689938),
  m = n(543802);

function g(e) {
  let {
icon: t,
text: n,
ariaLabel: s,
tooltip: l,
onClick: c,
isActive: d,
autoWidth: u = !1
  } = e, [_, E] = a.useState(!1), [I, g] = a.useState(!1), p = h.GN.getState().mode, T = p === h.v0.GAMES || p === h.v0.PLAYSTYLE || p === h.v0.TRAITS;
  a.useEffect(() => {
T && (E(!1), g(!1));
  }, [T]);
  let S = d && (I || _),
f = a.useMemo(() => null != l ? (0, i.jsxs)(o.Clickable, {
  className: m.tooltipContentWrapper,
  onClick: c,
  onMouseEnter: () => {
    !T && E(!0);
  },
  onMouseLeave: () => {
    E(!1);
  },
  children: [
    (0, i.jsx)('div', {
      className: m.tooltipHoverBridge
    }),
    l
  ]
}) : null, [
  l,
  c,
  T
]),
C = a.useCallback(e => (0, i.jsxs)(o.Button, {
  ...e,
  className: r()(m.filterPill, {
    [m.filterPillActive]: d
  }),
  innerClassName: m.filterPillContents,
  look: o.ButtonLooks.OUTLINED,
  color: o.ButtonColors.CUSTOM,
  onClick: c,
  onMouseEnter: () => {
    g(!0);
  },
  onMouseLeave: () => {
    g(!1);
  },
  children: [
    t,
    (0, i.jsxs)('div', {
      className: m.filterPillText,
      children: [
        (0, i.jsx)(o.Text, {
          variant: 'text-xs/medium',
          color: 'none',
          children: n
        }),
        null != f && (0, i.jsx)(o.ChevronSmallDownIcon, {
          className: m.chevron,
          color: 'currentColor'
        })
      ]
    })
  ]
}), [
  t,
  n,
  d,
  c,
  f
]);
  return null == f ? C({}) : (0, i.jsx)(o.Tooltip, {
text: f,
position: 'bottom',
'aria-label': s,
shouldShow: S,
forceOpen: S,
allowOverflow: !0,
disableTooltipPointerEvents: !1,
tooltipClassName: r()(m.filterTooltip, {
  [m.filterTooltipAutoWidth]: u
}),
tooltipContentClassName: m.filterTooltipContent,
children: C
  });
}

function p() {
  var e;
  let t = (0, h.GN)(e => e.selectedGames, l.Z),
n = a.useCallback(() => {
  (0, h.fH)(h.v0.GAMES, !0);
}, []),
s = null !== (e = (0, d.i)(t)) && void 0 !== e ? e : '',
r = t.slice(0, 3),
c = t.length - 3,
_ = (0, i.jsx)('div', {
  className: m.gamesTooltip,
  children: r.map((e, t) => (0, i.jsx)(u.Z, {
    applicationId: e,
    otherGamesCount: 2 === t && c > 0 ? c + 1 : void 0
  }, e))
}),
E = (0, i.jsx)(o.GameControllerIcon, {
  className: m.filterPillIcon,
  color: 'currentColor'
});
  return (0, i.jsx)(g, {
icon: E,
text: I.Z.Messages.CLAN_DISCOVERY_GAME_FILTER.format({
  count: t.length
}),
tooltip: _,
onClick: n,
isActive: t.length > 0,
ariaLabel: s,
autoWidth: !0
  });
}

function T() {
  let e = a.useMemo(E.f4, []),
t = (0, h.GN)(e => e.selectedPlaystyle, l.Z),
n = null != t ? e[t] : null,
s = null == n ? void 0 : n.title,
r = a.useCallback(() => {
  (0, h.fH)(h.v0.PLAYSTYLE, !0);
}, []),
c = null != n ? (0, i.jsxs)(i.Fragment, {
  children: [
    (0, i.jsx)(o.Heading, {
      variant: 'heading-xxl/medium',
      children: n.emoji
    }),
    (0, i.jsxs)('div', {
      children: [
        (0, i.jsx)(o.Heading, {
          variant: 'heading-md/medium',
          children: n.title
        }),
        (0, i.jsx)(o.Text, {
          variant: 'text-xs/normal',
          children: n.subtitle
        })
      ]
    })
  ]
}) : null,
d = (0, i.jsx)(o.DpadIcon, {
  className: m.filterPillIcon,
  color: 'currentColor'
});
  return (0, i.jsx)(g, {
icon: d,
text: null != s ? s : I.Z.Messages.CLAN_DISCOVERY_ANY_PLAYSTYLE,
tooltip: c,
onClick: r,
isActive: null != n,
ariaLabel: null != s ? s : I.Z.Messages.CLAN_DISCOVERY_ANY_PLAYSTYLE
  });
}

function S() {
  let e = (0, h.GN)(e => e.selectedTraits, l.Z),
t = a.useCallback(() => {
  (0, h.fH)(h.v0.TRAITS, !0);
}, []);
  if (null == e)
return null;
  let n = (0, i.jsx)('div', {
  className: m.traitsTooltip,
  children: e.map(e => (0, i.jsx)('div', {
    className: m.trait,
    children: (0, i.jsx)(o.Text, {
      variant: 'text-xs/medium',
      color: 'none',
      children: e
    })
  }, e))
}),
s = (0, i.jsx)(o.TagIcon, {
  className: m.filterPillIcon,
  color: 'currentColor'
});
  return (0, i.jsx)(g, {
icon: s,
text: I.Z.Messages.CLAN_DISCOVERY_PREFERENCES_FILTER,
tooltip: n,
onClick: t,
isActive: e.length > 0,
ariaLabel: e.join(', '),
autoWidth: !0
  });
}

function f() {
  let {
enableClanCreation: e
  } = (0, c.C3)({
location: 'clan_discovery_add_clan',
includeConverted: !1
  });
  return e ? (0, i.jsxs)(o.Clickable, {
className: r()(m.buttonPill),
onClick: () => (0, h.fH)(h.v0.ADMIN_UPSELL),
children: [
  (0, i.jsx)(o.PlusSmallIcon, {
    className: m.filterPillIcon,
    color: 'currentColor'
  }),
  (0, i.jsx)('div', {
    className: m.filterPillText,
    children: (0, i.jsx)(o.Text, {
      variant: 'text-xs/medium',
      color: 'none',
      children: I.Z.Messages.CLAN_DISCOVERY_ADD_CLAN
    })
  })
]
  }) : null;
}

function C() {
  let e = (0, h.GN)(e => e.mode, l.Z),
t = (0, h.GN)(e => e.savedGuildIds, l.Z),
n = a.useCallback(() => {
  if (e === h.v0.SAVED_GUILDS) {
    (0, h.fH)(h.v0.DISCOVERY, !0);
    return;
  }
  (0, h.fH)(h.v0.SAVED_GUILDS, !0);
}, [e]),
s = (0, i.jsx)(o.HeartIcon, {
  className: m.filterPillIcon,
  color: 'currentColor'
}),
r = (0, i.jsxs)('div', {
  className: m.savedInnerContainer,
  children: [
    I.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS,
    t.length > 0 ? (0, i.jsx)(o.NumberBadge, {
      count: t.length,
      color: _.Z.ICON_MUTED
    }) : null
  ]
});
  return (0, i.jsx)(g, {
icon: s,
text: r,
onClick: n,
isActive: e === h.v0.SAVED_GUILDS,
ariaLabel: I.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS,
autoWidth: !0
  });
}

function N(e) {
  let {
title: t
  } = e;
  return null == t ? null : (0, i.jsxs)('div', {
className: m.backToDiscovery,
children: [
  (0, i.jsx)(o.Clickable, {
    className: m.backArrow,
    onClick: () => (0, h.fH)(h.v0.DISCOVERY),
    children: (0, i.jsx)(o.ArrowLargeLeftIcon, {
      color: 'currentColor'
    })
  }),
  (0, i.jsx)(o.Heading, {
    variant: 'heading-lg/semibold',
    color: 'none',
    children: t
  })
]
  });
}

function A(e) {
  let {
className: t
  } = e;
  return (0, i.jsxs)('div', {
className: r()(m.toolbar, t),
children: [
  (0, i.jsx)('div', {
    className: m.addClan,
    children: (0, i.jsx)(N, {
      title: I.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS
    })
  }),
  (0, i.jsx)('div', {
    className: m.actions
  })
]
  });
}
t.Z = function(e) {
  let {
className: t
  } = e, n = (0, h.GN)(e => e.mode, l.Z), a = (0, c.iN)('discovery_toolbar');
  return n === h.v0.SAVED_GUILDS ? (0, i.jsx)(A, {
className: t
  }) : (0, i.jsxs)('div', {
className: r()(m.toolbar, t),
children: [
  (0, i.jsx)('div', {
    className: m.addClan,
    children: (0, i.jsx)(f, {})
  }),
  (0, i.jsxs)('div', {
    className: m.preferences,
    children: [
      (0, i.jsx)(p, {}),
      (0, i.jsx)(T, {}),
      (0, i.jsx)(S, {})
    ]
  }),
  (0, i.jsx)('div', {
    className: m.actions,
    children: a && (0, i.jsx)(C, {})
  })
]
  });
};