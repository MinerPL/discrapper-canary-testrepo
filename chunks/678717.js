t.r(r), t.d(r, {
  default: function() {
return Y;
  }
}), t(653041), t(47120);
var a = t(735250),
  n = t(470079),
  i = t(120356),
  o = t.n(i),
  l = t(990547),
  c = t(442837),
  s = t(481060),
  d = t(347469),
  u = t(213609),
  h = t(213713),
  m = t(665149),
  g = t(906467),
  p = t(259580),
  b = t(31336),
  f = t(19759),
  y = t(432877);
t(381996);
var x = t(392750),
  k = t(926976),
  v = t(592197),
  _ = t(860337),
  j = t(789654),
  w = t(691867),
  C = t(916790),
  N = t(912072),
  S = t(246992),
  T = t(442954),
  Z = t(702904),
  E = t(178821),
  I = t(248526),
  R = t(958328),
  O = t(514866),
  B = t(678639),
  A = t(351930),
  P = t(771751),
  M = t(596768),
  D = t(621060),
  L = t(689938),
  G = t(683597),
  U = t(979756);

function H(e) {
  let {
resizableNode: r,
onResize: t,
onResizeEnd: n
  } = e, i = (0, d.Z)({
minDimension: f.h,
resizableDomNodeRef: r,
onElementResize: t,
onElementResizeEnd: n,
orientation: d.y.HORIZONTAL_LEFT
  });
  return (0, a.jsx)('div', {
onMouseDown: i,
className: G.resizeHandle
  });
}

function F() {
  var e;
  let r = n.useMemo(() => {
  let e = [{
      id: 'analytics',
      name: 'Analytics',
      render: () => (0, a.jsx)(k.Z, {})
    },
    {
      id: 'triggers',
      name: 'Triggers',
      render: () => (0, a.jsx)(M.Z, {})
    },
    {
      id: 'stores',
      name: 'Stores',
      render: () => (0, a.jsx)(B.Z, {})
    },
    {
      id: 'dispatcher',
      name: 'Dispatcher',
      render: () => (0, a.jsx)(C.Z, {})
    }
  ];
  return g.Z.isDeveloper && (e.push({
    id: 'quick_actions',
    name: 'Quick Actions',
    render: () => (0, a.jsx)(O.Z, {})
  }), e.push({
    id: 'perks_demos',
    name: 'Perks Demos',
    render: () => (0, a.jsx)(I.Z, {})
  })), g.Z.isDeveloper && (e.push({
    id: 'clans',
    name: 'Clans',
    render: () => (0, a.jsx)(_.Z, {})
  }), e.push({
    id: 'performance',
    name: 'Performance',
    render: () => (0, a.jsx)(E.Z, {})
  })), e.push({
    id: 'colors',
    name: 'Colors',
    render: () => (0, a.jsx)(j.Z, {})
  }), e.push({
    id: 'design_toggles',
    name: 'Design Toggles',
    render: () => (0, a.jsx)(w.Z, {})
  }), e.push({
    id: 'overlays',
    name: 'Dev Overlays',
    render: () => (0, a.jsx)(N.Z, {
      devSettingsCategory: y.zU.OVERLAYS
    })
  }), e.push({
    id: 'messaging',
    name: 'Messaging',
    render: () => (0, a.jsx)(N.Z, {
      devSettingsCategory: y.zU.MESSAGING
    })
  }), e.push({
    id: 'reporting',
    name: 'Reporting',
    render: () => (0, a.jsx)(N.Z, {
      devSettingsCategory: y.zU.REPORTING
    })
  }), e.push({
    id: 'permissions',
    name: 'Permissions',
    render: () => (0, a.jsx)(R.Z, {})
  }), e.push({
    id: 'modals',
    name: 'Modals',
    render: () => (0, a.jsx)(T.Z, {})
  }), e.push({
    id: 'affinity',
    name: 'Affinity',
    render: () => (0, a.jsx)(x.Z, {})
  }), g.Z.isDeveloper && e.push({
    id: 'content_inventory',
    name: 'Content Inventory',
    render: () => (0, a.jsx)(h.Z, {})
  }), window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith('staging') && (e.push({
    id: 'trials',
    name: 'Trials',
    render: () => (0, a.jsx)(P.Z, {})
  }), e.push({
    id: 'payments',
    name: 'Payments',
    render: () => (0, a.jsx)(Z.Z, {})
  }), e.push({
    id: 'subscriptions',
    name: 'Subscriptions',
    render: () => (0, a.jsx)(A.Z, {})
  }), e.push({
    id: 'billing',
    name: 'Billing',
    render: () => (0, a.jsx)(v.Z, {})
  })), e;
}, []),
{
  TabBar: t,
  renderSelectedTab: i,
  selectedTabId: o
} = (0, D.Z)({
  tabs: r,
  initialSelectedTabId: null !== (e = f.Z.lastOpenTabId) && void 0 !== e ? e : void 0,
  onChangeTab: e => {
    (0, b.Qh)({
      lastOpenTabId: e
    });
  }
}, [r]);
  return (0, u.Z)({
type: l.ImpressionTypes.PANE,
name: l.ImpressionNames.VIEW_PANEL_DEVTOOLS,
properties: {
  panel: o
}
  }), (0, a.jsxs)(S.Gk, {
children: [
  (0, a.jsxs)(m.ZP, {
    className: U.headerBar,
    toolbar: (0, a.jsx)(m.ZP.Icon, {
      icon: s.XSmallIcon,
      tooltip: L.Z.Messages.CLOSE,
      onClick: b.SO
    }),
    children: [
      (0, a.jsx)(m.ZP.Icon, {
        icon: s.StaffBadgeIcon,
        tooltip: 'DevTools'
      }),
      (0, a.jsx)(m.ZP.Title, {
        children: 'DevTools'
      })
    ]
  }),
  (0, a.jsx)(t, {}),
  i(),
  (0, a.jsx)(S.Br, {
    className: G.layerContainer
  })
]
  });
}

function z() {
  let e = n.useRef(null),
r = (0, c.e7)([f.Z], () => f.Z.sidebarWidth),
[t, i] = n.useState(null),
l = n.useCallback(e => (0, b.Qh)({
  sidebarWidth: e
}), []);
  return (n.useEffect(() => {
null === t && null !== r && i(r);
  }, [
r,
t
  ]), null === t) ? null : (0, a.jsxs)('div', {
ref: e,
className: o()(G.container),
style: {
  minWidth: f.h,
  width: t
},
children: [
  (0, a.jsx)(H, {
    resizableNode: e,
    onResize: i,
    onResizeEnd: l
  }),
  (0, a.jsx)('div', {
    className: G.sidebarContent,
    children: (0, a.jsx)(F, {})
  })
]
  });
}

function V() {
  let e = (0, c.e7)([f.Z], () => f.Z.displayTools);
  return e ? (0, a.jsx)('div', {
className: o()(G.container, G.mobileContainerExpanded),
children: (0, a.jsx)('div', {
  className: G.sidebarContent,
  children: (0, a.jsx)(F, {})
})
  }) : (0, a.jsx)('div', {
className: G.container,
children: (0, a.jsx)(s.Clickable, {
  onClick: b.SO,
  children: (0, a.jsxs)(m.ZP, {
    className: o()(U.headerBar, G.mobileHeaderCollapsed),
    toolbar: (0, a.jsx)(p.Z, {
      direction: p.Z.Directions.UP
    }),
    children: [
      (0, a.jsx)(m.ZP.Icon, {
        icon: s.StaffBadgeIcon,
        tooltip: 'DevTools'
      }),
      (0, a.jsx)(m.ZP.Title, {
        children: 'DevTools'
      })
    ]
  })
})
  });
}

function Y(e) {
  let {
mobile: r
  } = e;
  return r ? (0, a.jsx)(V, {}) : (0, a.jsx)(z, {});
}