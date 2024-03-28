"use strict";
t.r(r), t.d(r, {
  default: function() {
    return A
  }
}), t("47120");
var a = t("735250"),
  n = t("470079"),
  i = t("803997"),
  o = t.n(i),
  l = t("913527"),
  s = t.n(l),
  c = t("442837"),
  d = t("481060"),
  u = t("129861"),
  h = t("594174"),
  p = t("825185"),
  m = t("740727"),
  g = t("502568"),
  f = t("55935"),
  b = t("120816"),
  y = t("31336"),
  x = t("257785"),
  k = t("484036"),
  v = t("681619"),
  C = t("621060"),
  S = t("689938"),
  j = t("403434"),
  T = t("779869");
let w = [{
  key: "event",
  cellClassName: j.eventColumn,
  render(e) {
    let {
      event: r
    } = e;
    return r
  }
}, {
  key: "location",
  cellClassName: j.locationColumn,
  render(e) {
    let {
      properties: r
    } = e;
    return r.location
  }
}];

function N(e) {
  let {
    children: r
  } = e;
  return (0, a.jsx)(d.ScrollerThin, {
    className: j.customPropertiesContainer,
    children: (0, a.jsx)("dl", {
      children: r
    })
  })
}

function E(e) {
  let {
    name: r,
    children: t
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("dt", {
      className: j.customPropertiesName,
      children: r
    }), (0, a.jsx)("dd", {
      className: j.customPropertiesValue,
      children: t
    })]
  })
}
let L = [{
    id: "details",
    name: "Details",
    render: e => {
      let {
        loggedEvent: {
          event: r,
          properties: t,
          timestamp: n,
          fingerprint: i
        }
      } = e, l = h.default.getUser(i), c = s()(n);
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(g.default, {
          className: o()(T.headerBar, j.subPanelHeaderBar),
          children: [(0, a.jsx)(g.default.Icon, {
            icon: p.default,
            tooltip: r
          }), (0, a.jsx)(g.default.Title, {
            children: r
          })]
        }), (0, a.jsxs)(x.Properties, {
          className: j.commonProperties,
          children: [(0, a.jsx)(x.Property, {
            name: "Timestamp (local)",
            children: (0, a.jsx)("time", {
              dateTime: n.toISOString(),
              title: (0, f.dateFormat)(c, "LLLL"),
              children: (0, f.calendarFormat)(c)
            })
          }), null != l && (0, a.jsx)(x.Property, {
            name: "User",
            children: (0, a.jsx)(u.default, {
              user: l
            })
          }), (0, a.jsx)(x.Property, {
            name: "Fingerprint",
            children: (0, a.jsx)("code", {
              children: i
            })
          })]
        }), (0, a.jsx)(N, {
          children: Object.entries(t).map(e => {
            let [r, t] = e;
            return (0, a.jsx)(E, {
              name: "".concat(r, ":"),
              children: null != t ? (0, a.jsx)("code", {
                children: JSON.stringify(t)
              }) : (0, a.jsx)("code", {
                className: j.emptyProperty,
                children: "null"
              })
            }, r)
          })
        })]
      })
    }
  }],
  _ = {
    events: {
      label: "Events",
      filter: e => Object.entries(_).filter(e => {
        let [r] = e;
        return "events" !== r
      }).map(r => {
        let [t, {
          filter: a
        }] = r;
        return !a(e)
      }).every(e => e)
    },
    experiments: {
      label: "Experiments",
      filter: e => ["experiment_user_triggered", "experiment_guild_triggered"].includes(e.event)
    },
    impressions: {
      label: "Impressions",
      filter: e => e.event.startsWith("impression_")
    },
    networkActions: {
      label: "Network",
      filter: e => e.event.startsWith("network_action")
    }
  };

function A() {
  let e = n.useRef(null),
    r = (0, c.useStateFromStores)([b.default], () => b.default.loggedEvents),
    [t, i] = n.useState(Object.keys(_)),
    l = r.filter(e => {
      for (let r of t)
        if (_[r].filter(e)) return !0;
      return !1
    }),
    [s, u] = n.useState(void 0),
    h = l.find(e => e.key === s),
    {
      TabBar: p,
      renderSelectedTab: g
    } = (0, C.default)({
      tabs: L
    }, []);
  return (0, a.jsxs)("div", {
    ref: e,
    className: o()(T.panel, j.panel),
    children: [(0, a.jsxs)("div", {
      className: j.toolbar,
      children: [(0, a.jsx)(d.Button, {
        className: j.toolbarButton,
        look: d.Button.Looks.BLANK,
        size: d.Button.Sizes.ICON,
        onClick: y.clearAnalyticsLog,
        children: (0, a.jsx)("span", {
          title: S.default.Messages.CLEAR,
          children: (0, a.jsx)(m.default, {
            "aria-label": S.default.Messages.CLEAR
          })
        })
      }), (0, a.jsx)("div", {
        className: j.toolbarDivider
      }), (0, a.jsx)("div", {
        className: j.filters,
        children: Object.entries(_).map(e => {
          let [r, n] = e;
          return (0, a.jsx)(d.Clickable, {
            className: o()(j.filter, t.includes(r) && j.activeFilter),
            onClick: () => {
              var e;
              return e = r, void i(r => r.includes(e) ? r.filter(r => r !== e) : [...r, e])
            },
            children: n.label
          }, r)
        })
      })]
    }), (0, a.jsx)(d.ScrollerThin, {
      className: j.tableContainer,
      children: (0, a.jsx)(v.default, {
        columns: w,
        data: l,
        selectedRowKey: s,
        onClickRow: u
      })
    }), null != h && (0, a.jsxs)(k.default, {
      className: j.subPanel,
      minHeight: 100,
      initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
      children: [(0, a.jsx)(p, {}), g({
        loggedEvent: h
      })]
    })]
  })
}