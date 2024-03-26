"use strict";
t.r(r), t.d(r, {
  default: function() {
    return Y
  }
}), t("424973"), t("222007");
var a = t("37983"),
  n = t("884691"),
  i = t("414456"),
  o = t.n(i),
  l = t("759843"),
  s = t("446674"),
  c = t("77078"),
  d = t("594203"),
  u = t("428958"),
  h = t("368694"),
  p = t("461380"),
  m = t("945330"),
  g = t("496657"),
  f = t("664336"),
  y = t("370492"),
  b = t("584369"),
  x = t("676574");
t("444489");
var k = t("556857"),
  v = t("224249"),
  C = t("706098"),
  S = t("383925"),
  j = t("21573"),
  T = t("245515"),
  w = t("172248"),
  N = t("811199"),
  E = t("175768"),
  L = t("358344"),
  _ = t("34971"),
  A = t("134034"),
  R = t("79953"),
  P = t("388557"),
  M = t("238161"),
  O = t("20950"),
  I = t("724209"),
  B = t("782340"),
  D = t("34693"),
  G = t("699412");

function H(e) {
  let {
    resizableNode: r,
    onResize: t,
    onResizeEnd: n
  } = e, i = (0, d.default)({
    minDimension: b.DEVTOOLS_SIDEBAR_MIN_WIDTH,
    resizableDomNodeRef: r,
    onElementResize: t,
    onElementResizeEnd: n,
    orientation: d.ResizeOrientation.HORIZONTAL_LEFT
  });
  return (0, a.jsx)("div", {
    onMouseDown: i,
    className: D.resizeHandle
  })
}

function F() {
  var e;
  let r = n.useMemo(() => {
      let e = [{
        id: "analytics",
        name: "Analytics",
        render: () => (0, a.jsx)(v.default, {})
      }, {
        id: "triggers",
        name: "Triggers",
        render: () => (0, a.jsx)(O.default, {})
      }, {
        id: "stores",
        name: "Stores",
        render: () => (0, a.jsx)(R.default, {})
      }, {
        id: "dispatcher",
        name: "Dispatcher",
        render: () => (0, a.jsx)(T.default, {})
      }];
      return h.default.isDeveloper && e.push({
        id: "quick_actions",
        name: "Quick Actions",
        render: () => (0, a.jsx)(A.default, {})
      }), e.push({
        id: "colors",
        name: "Colors",
        render: () => (0, a.jsx)(S.default, {})
      }), e.push({
        id: "design_toggles",
        name: "Design Toggles",
        render: () => (0, a.jsx)(j.default, {})
      }), e.push({
        id: "overlays",
        name: "Dev Overlays",
        render: () => (0, a.jsx)(w.default, {
          devSettingsCategory: x.DevSettingsCategory.OVERLAYS
        })
      }), e.push({
        id: "messaging",
        name: "Messaging",
        render: () => (0, a.jsx)(w.default, {
          devSettingsCategory: x.DevSettingsCategory.MESSAGING
        })
      }), e.push({
        id: "permissions",
        name: "Permissions",
        render: () => (0, a.jsx)(_.default, {})
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
        render: () => (0, a.jsx)(M.default, {})
      }), e.push({
        id: "payments",
        name: "Payments",
        render: () => (0, a.jsx)(L.default, {})
      }), e.push({
        id: "subscriptions",
        name: "Subscriptions",
        render: () => (0, a.jsx)(P.default, {})
      }), e.push({
        id: "billing",
        name: "Billing",
        render: () => (0, a.jsx)(C.default, {})
      })), e
    }, []),
    {
      TabBar: t,
      renderSelectedTab: i,
      selectedTabId: o
    } = (0, I.default)({
      tabs: r,
      initialSelectedTabId: null !== (e = b.default.lastOpenTabId) && void 0 !== e ? e : void 0,
      onChangeTab: e => {
        (0, y.updateDevToolsSettings)({
          lastOpenTabId: e
        })
      }
    }, [r]);
  return (0, u.default)({
    type: l.ImpressionTypes.PANE,
    name: l.ImpressionNames.VIEW_PANEL_DEVTOOLS,
    properties: {
      panel: o
    }
  }), (0, a.jsxs)(N.DevToolsLayerProvider, {
    children: [(0, a.jsxs)(f.default, {
      className: G.headerBar,
      toolbar: (0, a.jsx)(f.default.Icon, {
        icon: m.default,
        tooltip: B.default.Messages.CLOSE,
        onClick: y.toggleDisplayDevTools
      }),
      children: [(0, a.jsx)(f.default.Icon, {
        icon: g.default,
        tooltip: "DevTools"
      }), (0, a.jsx)(f.default.Title, {
        children: "DevTools"
      })]
    }), (0, a.jsx)(t, {}), i(), (0, a.jsx)(N.DevToolsLayerContainer, {
      className: D.layerContainer
    })]
  })
}

function U() {
  let e = n.useRef(null),
    r = (0, s.useStateFromStores)([b.default], () => b.default.sidebarWidth),
    [t, i] = n.useState(null),
    l = n.useCallback(e => (0, y.updateDevToolsSettings)({
      sidebarWidth: e
    }), []);
  return (n.useEffect(() => {
    null === t && null !== r && i(r)
  }, [r, t]), null === t) ? null : (0, a.jsxs)("div", {
    ref: e,
    className: o(D.container),
    style: {
      minWidth: b.DEVTOOLS_SIDEBAR_MIN_WIDTH,
      width: t
    },
    children: [(0, a.jsx)(H, {
      resizableNode: e,
      onResize: i,
      onResizeEnd: l
    }), (0, a.jsx)("div", {
      className: D.sidebarContent,
      children: (0, a.jsx)(F, {})
    })]
  })
}

function z() {
  let e = (0, s.useStateFromStores)([b.default], () => b.default.displayTools);
  return e ? (0, a.jsx)("div", {
    className: o(D.container, D.mobileContainerExpanded),
    children: (0, a.jsx)("div", {
      className: D.sidebarContent,
      children: (0, a.jsx)(F, {})
    })
  }) : (0, a.jsx)("div", {
    className: D.container,
    children: (0, a.jsx)(c.Clickable, {
      onClick: y.toggleDisplayDevTools,
      children: (0, a.jsxs)(f.default, {
        className: o(G.headerBar, D.mobileHeaderCollapsed),
        toolbar: (0, a.jsx)(p.default, {
          direction: p.default.Directions.UP
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

function Y(e) {
  let {
    mobile: r
  } = e;
  return r ? (0, a.jsx)(z, {}) : (0, a.jsx)(U, {})
}