"use strict";
t.r(r), t.d(r, {
  default: function() {
    return S
  }
}), t("222007");
var a = t("37983"),
  n = t("884691"),
  i = t("414456"),
  o = t.n(i),
  l = t("446674"),
  s = t("77078"),
  c = t("810567"),
  d = t("547896"),
  u = t("664336"),
  h = t("50625"),
  p = t("928063"),
  m = t("637171"),
  g = t("724209"),
  f = t("699412"),
  y = t("232276");

function b(e, r) {
  return e.store.getName().localeCompare(r.store.getName())
}

function x(e) {
  let {
    store: r,
    dataGetter: t
  } = e, [i, o] = n.useState(t(r));
  return n.useEffect(() => {
    let e = () => o(t(r));
    return e(), r.addChangeListener(e), () => {
      r.removeChangeListener(e)
    }
  }, [r, t]), (0, a.jsx)(s.ScrollerThin, {
    className: y.inspectorContainer,
    children: (0, a.jsx)(h.default, {
      data: i
    })
  })
}
let k = [{
    key: "name",
    cellClassName: y.eventColumn,
    render(e) {
      let {
        store: r
      } = e;
      return r.getName()
    }
  }],
  v = [{
    id: "local",
    name: "Local Variables",
    render(e) {
      let {
        store: r
      } = e;
      return null == r.__getLocalVars ? (0, a.jsxs)("div", {
        className: y.inspectorContainer,
        children: ["Store is missing ", (0, a.jsx)("code", {
          children: "__getLocalVars"
        }), " method."]
      }) : (0, a.jsx)(x, {
        store: r,
        dataGetter: e => e.__getLocalVars()
      })
    }
  }, {
    id: "instance",
    name: "Store Instance",
    render(e) {
      let {
        store: r
      } = e;
      return (0, a.jsx)(x, {
        store: r,
        dataGetter: e => e
      })
    }
  }];

function C(e) {
  let {
    store: r,
    initialHeight: t
  } = e, {
    TabBar: n,
    renderSelectedTab: i
  } = (0, g.default)({
    tabs: v
  }, []);
  return (0, a.jsxs)(p.default, {
    className: y.subPanel,
    minHeight: 100,
    initialHeight: t,
    children: [(0, a.jsx)(n, {}), (0, a.jsxs)(u.default, {
      className: o(f.headerBar, y.subPanelHeaderBar),
      children: [(0, a.jsx)(u.default.Icon, {
        icon: d.default,
        tooltip: r.getName()
      }), (0, a.jsx)(u.default.Title, {
        children: r.getName()
      })]
    }), i({
      store: r
    })]
  })
}

function S() {
  let e = n.useRef(null),
    [r, t] = n.useState(""),
    i = l.Store.getAll(),
    d = n.useMemo(() => i.map(e => ({
      key: e._dispatchToken,
      store: e
    })).sort(b), [i]),
    u = d.filter(e => (function(e, r) {
      let {
        store: t
      } = e;
      return t.getName().toLowerCase().includes(r.toLowerCase())
    })(e, r)),
    [h, p] = n.useState(),
    g = i.find(e => e._dispatchToken === h);
  return (0, a.jsxs)("div", {
    ref: e,
    className: o(f.panel, y.panel),
    children: [(0, a.jsx)("div", {
      className: y.toolbar,
      children: (0, a.jsx)(c.default, {
        className: y.searchBar,
        size: c.default.Sizes.SMALL,
        query: r,
        onChange: t,
        onClear: () => t(""),
        placeholder: "Search stores",
        "aria-label": "Search stores"
      })
    }), (0, a.jsx)(s.ScrollerThin, {
      className: y.tableContainer,
      children: (0, a.jsx)(m.default, {
        columns: k,
        data: u,
        selectedRowKey: h,
        onClickRow: p
      })
    }), null != g && (0, a.jsx)(C, {
      store: g,
      initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
    })]
  })
}