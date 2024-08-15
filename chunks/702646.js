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
  E = n(207796),
  h = n(308083),
  m = n(689938),
  I = n(630244);

function g(e) {
  let {
icon: t,
text: n,
ariaLabel: s,
tooltip: l,
onClick: c,
isActive: d,
autoWidth: u = !1
  } = e, [_, h] = a.useState(!1), [m, g] = a.useState(!1), p = E.GN.getState().mode, T = p === E.v0.GAMES || p === E.v0.PLAYSTYLE || p === E.v0.TRAITS;
  a.useEffect(() => {
T && (h(!1), g(!1));
  }, [T]);
  let S = d && (m || _),
f = a.useMemo(() => null != l ? (0, i.jsxs)(o.Clickable, {
  className: I.tooltipContentWrapper,
  onClick: c,
  onMouseEnter: () => {
    !T && h(!0);
  },
  onMouseLeave: () => {
    h(!1);
  },
  children: [
    (0, i.jsx)('div', {
      className: I.tooltipHoverBridge
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
  className: r()(I.filterPill, {
    [I.filterPillActive]: d
  }),
  innerClassName: I.filterPillContents,
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
      className: I.filterPillText,
      children: [
        (0, i.jsx)(o.Text, {
          variant: 'text-xs/medium',
          color: 'none',
          children: n
        }),
        null != f && (0, i.jsx)(o.ChevronSmallDownIcon, {
          className: I.chevron,
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
tooltipClassName: r()(I.filterTooltip, {
  [I.filterTooltipAutoWidth]: u
}),
tooltipContentClassName: I.filterTooltipContent,
children: C
  });
}

function p() {
  var e;
  let t = (0, E.GN)(e => e.selectedGames, l.Z),
n = a.useCallback(() => {
  (0, E.fH)(E.v0.GAMES, !0);
}, []),
s = null !== (e = (0, d.i)(t)) && void 0 !== e ? e : '',
r = t.slice(0, 3),
c = t.length - 3,
_ = (0, i.jsx)('div', {
  className: I.gamesTooltip,
  children: r.map((e, t) => (0, i.jsx)(u.Z, {
    applicationId: e,
    otherGamesCount: 2 === t && c > 0 ? c + 1 : void 0
  }, e))
}),
h = (0, i.jsx)(o.GameControllerIcon, {
  className: I.filterPillIcon,
  color: 'currentColor'
});
  return (0, i.jsx)(g, {
icon: h,
text: m.Z.Messages.CLAN_DISCOVERY_GAME_FILTER.format({
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
  let e = a.useMemo(h.f4, []),
t = (0, E.GN)(e => e.selectedPlaystyle, l.Z),
n = null != t ? e[t] : null,
s = null == n ? void 0 : n.title,
r = a.useCallback(() => {
  (0, E.fH)(E.v0.PLAYSTYLE, !0);
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
  className: I.filterPillIcon,
  color: 'currentColor'
});
  return (0, i.jsx)(g, {
icon: d,
text: null != s ? s : m.Z.Messages.CLAN_DISCOVERY_ANY_PLAYSTYLE,
tooltip: c,
onClick: r,
isActive: null != n,
ariaLabel: null != s ? s : m.Z.Messages.CLAN_DISCOVERY_ANY_PLAYSTYLE
  });
}

function S() {
  let e = (0, E.GN)(e => e.selectedTraits, l.Z),
t = a.useCallback(() => {
  (0, E.fH)(E.v0.TRAITS, !0);
}, []);
  if (null == e)
return null;
  let n = (0, i.jsx)('div', {
  className: I.traitsTooltip,
  children: e.map(e => (0, i.jsx)('div', {
    className: I.trait,
    children: (0, i.jsx)(o.Text, {
      variant: 'text-xs/medium',
      color: 'none',
      children: e
    })
  }, e))
}),
s = (0, i.jsx)(o.TagIcon, {
  className: I.filterPillIcon,
  color: 'currentColor'
});
  return (0, i.jsx)(g, {
icon: s,
text: m.Z.Messages.CLAN_DISCOVERY_PREFERENCES_FILTER,
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
className: r()(I.buttonPill),
onClick: () => (0, E.fH)(E.v0.ADMIN_UPSELL),
children: [
  (0, i.jsx)(o.PlusSmallIcon, {
    className: I.filterPillIcon,
    color: 'currentColor'
  }),
  (0, i.jsx)('div', {
    className: I.filterPillText,
    children: (0, i.jsx)(o.Text, {
      variant: 'text-xs/medium',
      color: 'none',
      children: m.Z.Messages.CLAN_DISCOVERY_ADD_CLAN
    })
  })
]
  }) : null;
}

function C(e) {
  let {
onClick: t
  } = e, n = (0, E.GN)(e => e.mode, l.Z), a = (0, E.GN)(e => e.savedGuildIds, l.Z), s = (0, i.jsx)(o.HeartIcon, {
className: I.filterPillIcon,
color: 'currentColor'
  }), r = (0, i.jsxs)('div', {
className: I.savedInnerContainer,
children: [
  m.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS,
  a.length > 0 ? (0, i.jsx)(o.NumberBadge, {
    count: a.length,
    color: _.Z.BG_MOD_SUBTLE
  }) : null
]
  });
  return (0, i.jsx)(g, {
icon: s,
text: r,
onClick: t,
isActive: n === E.v0.SAVED_GUILDS,
ariaLabel: m.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS,
autoWidth: !0
  });
}

function N() {
  let e = (0, E.GN)(e => e.mode, l.Z),
{
  selectedGames: t,
  selectedPlaystyle: n,
  selectedTraits: s
} = (0, E.GN)(e => ({
  selectedGames: e.selectedGames,
  selectedPlaystyle: e.selectedPlaystyle,
  selectedTraits: e.selectedTraits
})),
r = t.length + (null != n ? 1 : 0) + s.length,
c = a.useCallback(() => {
  if (e === E.v0.PREFERENCES) {
    (0, E.fH)(E.v0.DISCOVERY);
    return;
  }
  (0, E.fH)(E.v0.PREFERENCES);
}, [e]),
d = (0, i.jsxs)('div', {
  className: I.savedInnerContainer,
  children: [
    m.Z.Messages.CLAN_DISCOVERY_PREFERENCES,
    r > 0 ? (0, i.jsx)(o.NumberBadge, {
      count: r,
      color: _.Z.BG_MOD_SUBTLE
    }) : null
  ]
});
  return (0, i.jsx)(g, {
icon: (0, i.jsx)(o.FiltersHorizontalIcon, {
  className: I.filterPillIcon,
  color: 'currentColor'
}),
text: d,
onClick: c,
isActive: r > 0,
ariaLabel: m.Z.Messages.CLAN_DISCOVERY_PREFERENCES,
autoWidth: !0
  });
}

function A(e) {
  let {
title: t,
onNavigateBack: n
  } = e;
  return null == t ? null : (0, i.jsxs)('div', {
className: I.backToDiscovery,
children: [
  (0, i.jsx)(o.Clickable, {
    className: I.backArrow,
    onClick: n,
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

function v(e) {
  let {
className: t,
onNavigateBack: n
  } = e;
  return (0, i.jsxs)('div', {
className: r()(I.toolbar, t),
children: [
  (0, i.jsx)('div', {
    className: I.addClan,
    children: (0, i.jsx)(A, {
      title: m.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS,
      onNavigateBack: n
    })
  }),
  (0, i.jsx)('div', {
    className: I.actions
  })
]
  });
}

function Z(e) {
  let {
className: t
  } = e, n = (0, E.GN)(e => e.mode, l.Z), s = (0, E.GN)(e => e.started, l.Z), o = a.useCallback(() => {
if (n !== E.v0.SAVED_GUILDS)
  return (0, E.fH)(E.v0.SAVED_GUILDS);
  }, [n]), c = a.useCallback(() => s ? (0, E.fH)(E.v0.DISCOVERY) : (0, E.fH)(E.v0.GET_STARTED), [s]);
  return n === E.v0.SAVED_GUILDS ? (0, i.jsx)(v, {
className: t,
onNavigateBack: c
  }) : (0, i.jsxs)('div', {
className: r()(I.toolbar, t),
children: [
  (0, i.jsx)('div', {
    className: I.addClan,
    children: (0, i.jsx)(f, {})
  }),
  (0, i.jsx)('div', {
    className: I.preferences
  }),
  (0, i.jsxs)('div', {
    className: I.actions,
    children: [
      (0, i.jsx)(N, {}),
      (0, i.jsx)(C, {
        onClick: o
      })
    ]
  })
]
  });
}
t.Z = function(e) {
  let {
className: t
  } = e, n = (0, E.GN)(e => e.mode, l.Z);
  return (0, c.iN)('discovery_toolbar') ? (0, i.jsx)(Z, {
className: t
  }) : n === E.v0.SAVED_GUILDS ? (0, i.jsx)(v, {
className: t
  }) : (0, i.jsxs)('div', {
className: r()(I.toolbar, t),
children: [
  (0, i.jsx)('div', {
    className: I.addClan,
    children: (0, i.jsx)(f, {})
  }),
  (0, i.jsxs)('div', {
    className: I.preferences,
    children: [
      (0, i.jsx)(p, {}),
      (0, i.jsx)(T, {}),
      (0, i.jsx)(S, {})
    ]
  }),
  (0, i.jsx)('div', {
    className: I.actions
  })
]
  });
};