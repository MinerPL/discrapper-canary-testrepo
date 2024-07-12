r.r(t), r.d(t, {
  default: function() {
return W;
  }
}), r(653041), r(47120);
var a = r(735250),
  n = r(470079),
  i = r(120356),
  o = r.n(i),
  l = r(990547),
  c = r(442837),
  s = r(481060),
  d = r(347469),
  u = r(213609),
  h = r(213713),
  m = r(665149),
  g = r(906467),
  p = r(259580),
  b = r(31336),
  f = r(19759),
  y = r(432877);
r(381996);
var x = r(392750),
  k = r(926976),
  v = r(592197),
  _ = r(860337),
  C = r(789654),
  w = r(691867),
  j = r(916790),
  N = r(912072),
  S = r(246992),
  T = r(442954),
  I = r(702904),
  E = r(178821),
  Z = r(248526),
  R = r(958328),
  B = r(514866),
  O = r(678639),
  P = r(351930),
  L = r(771751),
  A = r(596768),
  D = r(621060),
  M = r(689938),
  G = r(683597),
  H = r(979756);

function F(e) {
  let {
resizableNode: t,
onResize: r,
onResizeEnd: n
  } = e, i = (0, d.Z)({
minDimension: f.h,
resizableDomNodeRef: t,
onElementResize: r,
onElementResizeEnd: n,
orientation: d.y.HORIZONTAL_LEFT
  });
  return (0, a.jsx)('div', {
onMouseDown: i,
className: G.resizeHandle
  });
}

function z() {
  var e;
  let t = n.useMemo(() => {
  let e = [{
      id: 'analytics',
      name: 'Analytics',
      render: () => (0, a.jsx)(k.Z, {})
    },
    {
      id: 'triggers',
      name: 'Triggers',
      render: () => (0, a.jsx)(A.Z, {})
    },
    {
      id: 'stores',
      name: 'Stores',
      render: () => (0, a.jsx)(O.Z, {})
    },
    {
      id: 'dispatcher',
      name: 'Dispatcher',
      render: () => (0, a.jsx)(j.Z, {})
    }
  ];
  return g.Z.isDeveloper && (e.push({
    id: 'quick_actions',
    name: 'Quick Actions',
    render: () => (0, a.jsx)(B.Z, {})
  }), e.push({
    id: 'perks_demos',
    name: 'Perks Demos',
    render: () => (0, a.jsx)(Z.Z, {})
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
    render: () => (0, a.jsx)(C.Z, {})
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
    render: () => (0, a.jsx)(L.Z, {})
  }), e.push({
    id: 'payments',
    name: 'Payments',
    render: () => (0, a.jsx)(I.Z, {})
  }), e.push({
    id: 'subscriptions',
    name: 'Subscriptions',
    render: () => (0, a.jsx)(P.Z, {})
  }), e.push({
    id: 'billing',
    name: 'Billing',
    render: () => (0, a.jsx)(v.Z, {})
  })), e;
}, []),
{
  TabBar: r,
  renderSelectedTab: i,
  selectedTabId: o
} = (0, D.Z)({
  tabs: t,
  initialSelectedTabId: null !== (e = f.Z.lastOpenTabId) && void 0 !== e ? e : void 0,
  onChangeTab: e => {
    (0, b.Qh)({
      lastOpenTabId: e
    });
  }
}, [t]);
  return (0, u.Z)({
type: l.ImpressionTypes.PANE,
name: l.ImpressionNames.VIEW_PANEL_DEVTOOLS,
properties: {
  panel: o
}
  }), (0, a.jsxs)(S.Gk, {
children: [
  (0, a.jsxs)(m.ZP, {
    className: H.headerBar,
    toolbar: (0, a.jsx)(m.ZP.Icon, {
      icon: s.CloseSmallIcon,
      tooltip: M.Z.Messages.CLOSE,
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
  (0, a.jsx)(r, {}),
  i(),
  (0, a.jsx)(S.Br, {
    className: G.layerContainer
  })
]
  });
}

function U() {
  let e = n.useRef(null),
t = (0, c.e7)([f.Z], () => f.Z.sidebarWidth),
[r, i] = n.useState(null),
l = n.useCallback(e => (0, b.Qh)({
  sidebarWidth: e
}), []);
  return (n.useEffect(() => {
null === r && null !== t && i(t);
  }, [
t,
r
  ]), null === r) ? null : (0, a.jsxs)('div', {
ref: e,
className: o()(G.container),
style: {
  minWidth: f.h,
  width: r
},
children: [
  (0, a.jsx)(F, {
    resizableNode: e,
    onResize: i,
    onResizeEnd: l
  }),
  (0, a.jsx)('div', {
    className: G.sidebarContent,
    children: (0, a.jsx)(z, {})
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
  children: (0, a.jsx)(z, {})
})
  }) : (0, a.jsx)('div', {
className: G.container,
children: (0, a.jsx)(s.Clickable, {
  onClick: b.SO,
  children: (0, a.jsxs)(m.ZP, {
    className: o()(H.headerBar, G.mobileHeaderCollapsed),
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

function W(e) {
  let {
mobile: t
  } = e;
  return t ? (0, a.jsx)(V, {}) : (0, a.jsx)(U, {});
}