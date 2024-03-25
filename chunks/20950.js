"use strict";
t.r(r), t.d(r, {
  default: function() {
    return _
  }
}), t("222007");
var a = t("37983"),
  n = t("884691"),
  i = t("414456"),
  o = t.n(i),
  l = t("448105"),
  s = t.n(l),
  c = t("866227"),
  d = t.n(c),
  u = t("446674"),
  h = t("77078"),
  p = t("913144"),
  m = t("810567"),
  g = t("756609"),
  f = t("228220"),
  y = t("664336"),
  b = t("888400"),
  x = t("398570"),
  k = t("370492"),
  v = t("332814"),
  C = t("928063"),
  S = t("637171"),
  j = t("724209"),
  T = t("782340"),
  w = t("731343"),
  N = t("699412");
let E = [{
    key: "id",
    cellClassName: w.eventColumn,
    render(e) {
      let {
        experimentId: r
      } = e;
      return r
    }
  }, {
    key: "bucket",
    cellClassName: w.locationColumn,
    render(e) {
      let {
        descriptor: r
      } = e;
      return r.bucket
    }
  }, {
    key: "timestamp",
    cellClassName: w.locationColumn,
    render(e) {
      let {
        timestamp: r
      } = e;
      return r.toLocaleString()
    }
  }],
  L = [{
    id: "details",
    name: "Details",
    render: e => {
      let {
        loggedTrigger: {
          experimentId: r,
          descriptor: t,
          exposureType: n,
          excluded: i,
          timestamp: l,
          location: s,
          previouslyTracked: c
        }
      } = e, u = d(l);
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(y.default, {
          className: o(N.headerBar, w.subPanelHeaderBar),
          children: [(0, a.jsx)(y.default.Icon, {
            icon: g.default,
            tooltip: r
          }), (0, a.jsx)(y.default.Title, {
            children: r
          })]
        }), (0, a.jsxs)(v.Properties, {
          className: w.commonProperties,
          children: [(0, a.jsx)(v.Property, {
            name: "Timestamp (local)",
            children: (0, a.jsx)("time", {
              dateTime: l.toISOString(),
              title: (0, b.dateFormat)(u, "LLLL"),
              children: (0, b.calendarFormat)(u)
            })
          }), "guild" === t.type && (0, a.jsx)(v.Property, {
            name: "Guild ID",
            children: (0, a.jsx)("code", {
              children: t.guildId
            })
          }), (0, a.jsx)(v.Property, {
            name: "Bucket",
            children: (0, a.jsx)("code", {
              children: t.bucket
            })
          }), (0, a.jsx)(v.Property, {
            name: "Revision",
            children: (0, a.jsx)("code", {
              children: t.revision
            })
          }), (0, a.jsx)(v.Property, {
            name: "Override",
            children: (0, a.jsx)(v.BooleanPropertyValue, {
              value: t.override
            })
          }), (0, a.jsx)(v.Property, {
            name: "Exposure type",
            children: (0, a.jsx)("code", {
              children: n
            })
          }), (0, a.jsx)(v.Property, {
            name: "Excluded",
            children: (0, a.jsx)(v.BooleanPropertyValue, {
              value: i
            })
          }), (0, a.jsx)(v.Property, {
            name: "Previously tracked",
            children: (0, a.jsx)(v.BooleanPropertyValue, {
              value: c
            })
          }), (0, a.jsx)(v.Property, {
            name: "Location",
            children: (0, a.jsx)("code", {
              children: s
            })
          })]
        })]
      })
    }
  }];

function _() {
  let [e, r] = n.useState(""), t = n.useRef(null), i = (0, u.useStateFromStoresArray)([x.default], () => x.default.loggedTriggers), l = n.useMemo(() => i.filter(r => 0 === e.length || s(e, r.experimentId)).sort((e, r) => r.timestamp.getTime() - e.timestamp.getTime()), [i, e]), [c, d] = n.useState(void 0), g = l.find(e => e.key === c), {
    TabBar: y,
    renderSelectedTab: b
  } = (0, j.default)({
    tabs: L
  }, []), v = (0, u.useStateFromStores)([x.default], () => x.default.trackTriggers), _ = n.useCallback(e => {
    p.default.dispatch({
      type: "SET_TRACK_TRIGGERS",
      enabled: e
    })
  }, []);
  return (0, a.jsxs)("div", {
    ref: t,
    className: o(N.panel, w.panel),
    children: [(0, a.jsxs)("div", {
      className: w.toolbar,
      children: [(0, a.jsx)("div", {
        title: "Enables tracking of all triggers",
        className: w.triggersEnable,
        children: (0, a.jsx)(h.Switch, {
          checked: v,
          onChange: _,
          className: w.toolbarSwitch
        })
      }), (0, a.jsx)(h.Button, {
        className: w.toolbarButton,
        look: h.Button.Looks.BLANK,
        size: h.Button.Sizes.ICON,
        onClick: k.clearAnalyticsLog,
        children: (0, a.jsx)("span", {
          title: T.default.Messages.CLEAR,
          children: (0, a.jsx)(f.default, {
            "aria-label": T.default.Messages.CLEAR
          })
        })
      }), (0, a.jsx)(m.default, {
        className: w.searchBar,
        query: e,
        onChange: r,
        onClear: () => r(""),
        placeholder: "Search by experiment id"
      })]
    }), (0, a.jsx)(h.ScrollerThin, {
      className: w.tableContainer,
      children: (0, a.jsx)(S.default, {
        columns: E,
        data: l,
        selectedRowKey: c,
        onClickRow: d
      })
    }), null != g && (0, a.jsxs)(C.default, {
      className: w.subPanel,
      minHeight: 100,
      initialHeight: null != t.current ? t.current.clientHeight / 2 : 300,
      children: [(0, a.jsx)(y, {}), b({
        loggedTrigger: g
      })]
    })]
  })
}