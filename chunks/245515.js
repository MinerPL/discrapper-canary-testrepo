"use strict";
t.r(r), t.d(r, {
  default: function() {
    return E
  }
}), t("222007");
var a = t("37983"),
  n = t("884691"),
  i = t("414456"),
  o = t.n(i),
  l = t("866227"),
  s = t.n(l),
  c = t("77078"),
  d = t("913144"),
  u = t("561703"),
  h = t("315585"),
  p = t("664336"),
  m = t("888400"),
  g = t("50625"),
  f = t("332814"),
  y = t("928063"),
  b = t("637171"),
  x = t("724209"),
  k = t("183698"),
  v = t("699412");

function C(e) {
  return parseFloat(e.toFixed(3))
}
let S = [{
  key: "store",
  cellClassName: k.actionColumn,
  render(e) {
    let {
      trace: r
    } = e;
    return r.name
  }
}, {
  key: "time",
  cellClassName: k.totalTimeColumn,
  render(e) {
    let {
      trace: r
    } = e;
    return "".concat(C(r.time), " ms")
  }
}];

function j(e) {
  let {
    actionLog: r
  } = e, t = n.useMemo(() => r.traces.map(e => ({
    key: e.name,
    trace: e
  })), [r]);
  return (0, a.jsx)(c.ScrollerThin, {
    children: (0, a.jsx)(b.default, {
      columns: S,
      data: t
    })
  })
}
let T = [{
  id: "action",
  name: "Action",
  render(e) {
    var r;
    let {
      actionLog: t
    } = e, n = s(t.createdAt);
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(f.Properties, {
        className: k.actionProperties,
        children: [(0, a.jsx)(f.Property, {
          name: "Created at",
          children: (0, a.jsx)("time", {
            dateTime: null === (r = t.createdAt) || void 0 === r ? void 0 : r.toISOString(),
            title: (0, m.dateFormat)(n, "LLLL"),
            children: (0, m.calendarFormat)(n)
          })
        }), (0, a.jsxs)(f.Property, {
          name: "Total Time",
          children: [C(t.totalTime), " ms"]
        })]
      }), (0, a.jsx)(c.ScrollerThin, {
        className: k.inspectorContainer,
        children: (0, a.jsx)(g.default, {
          data: t.action
        })
      })]
    })
  }
}, {
  id: "traces",
  name: "Store Handlers",
  render(e) {
    let {
      actionLog: r
    } = e;
    return (0, a.jsx)(j, {
      actionLog: r
    })
  }
}];

function w(e) {
  let {
    actionLog: r,
    initialHeight: t
  } = e, i = n.useMemo(() => r.error ? [...T, {
    id: "error",
    name: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(h.default, {
        className: k.errorIcon
      }), "Error"]
    }),
    render(e) {
      let {
        actionLog: r
      } = e;
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: o(k.errorToolbar, v.toolbar),
          children: (0, a.jsx)("div", {
            className: v.toolbarGroup,
            children: (0, a.jsx)(c.Button, {
              className: v.toolbarButton,
              size: c.Button.Sizes.MIN,
              onClick: () => console.error(r.error),
              children: "Log to Console"
            })
          })
        }), (0, a.jsx)(c.ScrollerThin, {
          className: k.inspectorContainer,
          children: (0, a.jsx)(g.default, {
            data: r.error
          })
        })]
      })
    }
  }] : T, [r]), {
    TabBar: l,
    renderSelectedTab: s
  } = (0, x.default)({
    tabs: i
  }, [i]);
  return (0, a.jsxs)(y.default, {
    className: k.subPanel,
    minHeight: 100,
    initialHeight: t,
    children: [(0, a.jsx)(l, {}), (0, a.jsxs)(p.default, {
      className: o(v.headerBar, k.subPanelHeaderBar),
      children: [(0, a.jsx)(p.default.Icon, {
        icon: u.default,
        tooltip: r.name
      }), (0, a.jsx)(p.default.Title, {
        children: r.name
      })]
    }), s({
      actionLog: r
    })]
  })
}
let N = [{
  key: "action",
  cellClassName: k.actionColumn,
  render(e) {
    let {
      actionLog: r
    } = e;
    return (0, a.jsxs)(a.Fragment, {
      children: [r.error && (0, a.jsx)(h.default, {
        className: k.errorIcon
      }), r.name]
    })
  }
}, {
  key: "total time",
  cellClassName: k.totalTimeColumn,
  render(e) {
    let {
      actionLog: r
    } = e;
    return "".concat(C(r.totalTime), " ms")
  }
}];

function E() {
  let e = n.useRef(null),
    r = function(e) {
      let [r, t] = n.useState([...e.logs]), a = n.useCallback(() => t([...e.logs]), [e]);
      return n.useEffect(() => (e.on("log", a), () => {
        e.off("log", a)
      }), [e, a]), r
    }(d.default.actionLogger),
    t = n.useMemo(() => r.map(e => ({
      key: e.id.toString(),
      actionLog: e
    })), [r]),
    [i, l] = n.useState(),
    s = r.find(e => e.id === i);
  return (0, a.jsxs)("div", {
    ref: e,
    className: o(v.panel, k.panel),
    children: [(0, a.jsx)(c.ScrollerThin, {
      className: k.tableContainer,
      children: (0, a.jsx)(b.default, {
        columns: N,
        data: t,
        selectedRowKey: null == i ? void 0 : i.toString(),
        onClickRow: e => l(Number.parseInt(e, 10))
      })
    }), null != s && (0, a.jsx)(w, {
      actionLog: s,
      initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
    })]
  })
}