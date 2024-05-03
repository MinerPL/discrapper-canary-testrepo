"use strict";
r.r(t), r.d(t, {
  default: function() {
    return K
  }
}), r("653041"), r("47120");
var a = r("735250"),
  i = r("470079"),
  l = r("120356"),
  n = r.n(l),
  o = r("990547"),
  s = r("442837"),
  c = r("481060"),
  d = r("347469"),
  u = r("213609"),
  h = r("906467"),
  m = r("259580"),
  p = r("465670"),
  g = r("54017"),
  f = r("502568"),
  b = r("31336"),
  y = r("19759"),
  x = r("432877");
r("381996");
var k = r("392750"),
  v = r("926976"),
  j = r("592197"),
  C = r("860337"),
  w = r("789654"),
  S = r("691867"),
  T = r("916790"),
  N = r("912072"),
  L = r("246992"),
  E = r("442954"),
  _ = r("702904"),
  R = r("248526"),
  D = r("958328"),
  I = r("514866"),
  O = r("678639"),
  A = r("351930"),
  P = r("771751"),
  B = r("596768"),
  M = r("621060"),
  F = r("689938"),
  H = r("350802"),
  U = r("893048");

function G(e) {
  let {
    resizableNode: t,
    onResize: r,
    onResizeEnd: i
  } = e, l = (0, d.default)({
    minDimension: y.DEVTOOLS_SIDEBAR_MIN_WIDTH,
    resizableDomNodeRef: t,
    onElementResize: r,
    onElementResizeEnd: i,
    orientation: d.ResizeOrientation.HORIZONTAL_LEFT
  });
  return (0, a.jsx)("div", {
    onMouseDown: l,
    className: H.resizeHandle
  })
}

function z() {
  var e;
  let t = i.useMemo(() => {
      let e = [{
        id: "analytics",
        name: "Analytics",
        render: () => (0, a.jsx)(v.default, {})
      }, {
        id: "triggers",
        name: "Triggers",
        render: () => (0, a.jsx)(B.default, {})
      }, {
        id: "stores",
        name: "Stores",
        render: () => (0, a.jsx)(O.default, {})
      }, {
        id: "dispatcher",
        name: "Dispatcher",
        render: () => (0, a.jsx)(T.default, {})
      }];
      return h.default.isDeveloper && (e.push({
        id: "quick_actions",
        name: "Quick Actions",
        render: () => (0, a.jsx)(I.default, {})
      }), e.push({
        id: "perks_demos",
        name: "Perks Demos",
        render: () => (0, a.jsx)(R.default, {})
      })), h.default.isDeveloper && e.push({
        id: "clans",
        name: "Clans",
        render: () => (0, a.jsx)(C.default, {})
      }), e.push({
        id: "colors",
        name: "Colors",
        render: () => (0, a.jsx)(w.default, {})
      }), e.push({
        id: "design_toggles",
        name: "Design Toggles",
        render: () => (0, a.jsx)(S.default, {})
      }), e.push({
        id: "overlays",
        name: "Dev Overlays",
        render: () => (0, a.jsx)(N.default, {
          devSettingsCategory: x.DevSettingsCategory.OVERLAYS
        })
      }), e.push({
        id: "messaging",
        name: "Messaging",
        render: () => (0, a.jsx)(N.default, {
          devSettingsCategory: x.DevSettingsCategory.MESSAGING
        })
      }), e.push({
        id: "permissions",
        name: "Permissions",
        render: () => (0, a.jsx)(D.default, {})
      }), e.push({
        id: "modals",
        name: "Modals",
        render: () => (0, a.jsx)(E.default, {})
      }), e.push({
        id: "affinity",
        name: "Affinity",
        render: () => (0, a.jsx)(k.default, {})
      }), window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") && (e.push({
        id: "trials",
        name: "Trials",
        render: () => (0, a.jsx)(P.default, {})
      }), e.push({
        id: "payments",
        name: "Payments",
        render: () => (0, a.jsx)(_.default, {})
      }), e.push({
        id: "subscriptions",
        name: "Subscriptions",
        render: () => (0, a.jsx)(A.default, {})
      }), e.push({
        id: "billing",
        name: "Billing",
        render: () => (0, a.jsx)(j.default, {})
      })), e
    }, []),
    {
      TabBar: r,
      renderSelectedTab: l,
      selectedTabId: n
    } = (0, M.default)({
      tabs: t,
      initialSelectedTabId: null !== (e = y.default.lastOpenTabId) && void 0 !== e ? e : void 0,
      onChangeTab: e => {
        (0, b.updateDevToolsSettings)({
          lastOpenTabId: e
        })
      }
    }, [t]);
  return (0, u.default)({
    type: o.ImpressionTypes.PANE,
    name: o.ImpressionNames.VIEW_PANEL_DEVTOOLS,
    properties: {
      panel: n
    }
  }), (0, a.jsxs)(L.DevToolsLayerProvider, {
    children: [(0, a.jsxs)(f.default, {
      className: U.headerBar,
      toolbar: (0, a.jsx)(f.default.Icon, {
        icon: p.default,
        tooltip: F.default.Messages.CLOSE,
        onClick: b.toggleDisplayDevTools
      }),
      children: [(0, a.jsx)(f.default.Icon, {
        icon: g.default,
        tooltip: "DevTools"
      }), (0, a.jsx)(f.default.Title, {
        children: "DevTools"
      })]
    }), (0, a.jsx)(r, {}), l(), (0, a.jsx)(L.DevToolsLayerContainer, {
      className: H.layerContainer
    })]
  })
}

function V() {
  let e = i.useRef(null),
    t = (0, s.useStateFromStores)([y.default], () => y.default.sidebarWidth),
    [r, l] = i.useState(null),
    o = i.useCallback(e => (0, b.updateDevToolsSettings)({
      sidebarWidth: e
    }), []);
  return (i.useEffect(() => {
    null === r && null !== t && l(t)
  }, [t, r]), null === r) ? null : (0, a.jsxs)("div", {
    ref: e,
    className: n()(H.container),
    style: {
      minWidth: y.DEVTOOLS_SIDEBAR_MIN_WIDTH,
      width: r
    },
    children: [(0, a.jsx)(G, {
      resizableNode: e,
      onResize: l,
      onResizeEnd: o
    }), (0, a.jsx)("div", {
      className: H.sidebarContent,
      children: (0, a.jsx)(z, {})
    })]
  })
}

function W() {
  let e = (0, s.useStateFromStores)([y.default], () => y.default.displayTools);
  return e ? (0, a.jsx)("div", {
    className: n()(H.container, H.mobileContainerExpanded),
    children: (0, a.jsx)("div", {
      className: H.sidebarContent,
      children: (0, a.jsx)(z, {})
    })
  }) : (0, a.jsx)("div", {
    className: H.container,
    children: (0, a.jsx)(c.Clickable, {
      onClick: b.toggleDisplayDevTools,
      children: (0, a.jsxs)(f.default, {
        className: n()(U.headerBar, H.mobileHeaderCollapsed),
        toolbar: (0, a.jsx)(m.default, {
          direction: m.default.Directions.UP
        }),
        children: [(0, a.jsx)(f.default.Icon, {
          icon: g.default,
          tooltip: "DevTools"
        }), (0, a.jsx)(f.default.Title, {
          children: "DevTools"
        })]
      })
    })
  })
}

function K(e) {
  let {
    mobile: t
  } = e;
  return t ? (0, a.jsx)(W, {}) : (0, a.jsx)(V, {})
}