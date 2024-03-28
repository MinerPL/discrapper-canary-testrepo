"use strict";
t.r(r), t.d(r, {
  default: function() {
    return S
  }
}), t("47120");
var a = t("735250"),
  n = t("470079"),
  i = t("803997"),
  o = t.n(i),
  l = t("442837"),
  s = t("481060"),
  c = t("6048"),
  d = t("548420"),
  u = t("502568"),
  h = t("428530"),
  p = t("484036"),
  m = t("681619"),
  g = t("621060"),
  f = t("779869"),
  b = t("852535");

function y(e, r) {
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
    className: b.inspectorContainer,
    children: (0, a.jsx)(h.default, {
      data: i
    })
  })
}
let k = [{
    key: "name",
    cellClassName: b.__invalid_eventColumn,
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
        className: b.inspectorContainer,
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
    className: b.subPanel,
    minHeight: 100,
    initialHeight: t,
    children: [(0, a.jsx)(n, {}), (0, a.jsxs)(u.default, {
      className: o()(f.headerBar, b.subPanelHeaderBar),
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
    })).sort(y), [i]).filter(e => (function(e, r) {
      let {
        store: t
      } = e;
      return t.getName().toLowerCase().includes(r.toLowerCase())
    })(e, r)),
    [u, h] = n.useState(),
    p = i.find(e => e._dispatchToken === u);
  return (0, a.jsxs)("div", {
    ref: e,
    className: o()(f.panel, b.panel),
    children: [(0, a.jsx)("div", {
      className: b.toolbar,
      children: (0, a.jsx)(c.default, {
        className: b.searchBar,
        size: c.default.Sizes.SMALL,
        query: r,
        onChange: t,
        onClear: () => t(""),
        placeholder: "Search stores",
        "aria-label": "Search stores"
      })
    }), (0, a.jsx)(s.ScrollerThin, {
      className: b.tableContainer,
      children: (0, a.jsx)(m.default, {
        columns: k,
        data: d,
        selectedRowKey: u,
        onClickRow: h
      })
    }), null != p && (0, a.jsx)(C, {
      store: p,
      initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
    })]
  })
}