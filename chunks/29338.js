"use strict";
r.r(t), r.d(t, {
  default: function() {
    return C
  }
}), r("47120");
var a = r("735250"),
  i = r("470079"),
  l = r("120356"),
  n = r.n(l),
  o = r("392711"),
  s = r.n(o),
  c = r("876215"),
  d = r("442837"),
  u = r("481060"),
  h = r("570140"),
  m = r("681619"),
  p = r("682864"),
  g = r("71585"),
  f = r("146282"),
  y = r("206583"),
  b = r("475549"),
  x = r("277513");
let k = [{
  key: "type",
  cellClassName: n()(b.cell, b.cellType),
  render(e) {
    let {
      type: t
    } = e;
    return (0, a.jsx)(u.Text, {
      variant: "text-md/semibold",
      children: c.ContentInventoryEntryType[t]
    })
  }
}, {
  key: "count",
  cellClassName: n()(b.cell, b.cellCount),
  render(e) {
    let {
      entries: t
    } = e;
    return (0, a.jsx)("div", {
      children: (0, a.jsx)(u.Text, {
        variant: "text-md/normal",
        children: t.length
      })
    })
  }
}, {
  key: "only?",
  cellClassName: b.cell,
  render(e) {
    let {
      type: t
    } = e;
    return (0, a.jsx)(v, {
      type: t
    })
  }
}];

function v(e) {
  var t, r;
  let {
    type: i
  } = e, l = (0, d.useStateFromStores)([f.default], () => f.default.getFilters()), n = null !== (r = null == l ? void 0 : null === (t = l.types) || void 0 === t ? void 0 : t.has(i)) && void 0 !== r && r;
  return (0, a.jsx)(u.Checkbox, {
    value: n,
    onClick: function() {
      n ? h.default.dispatch({
        type: "CONTENT_INVENTORY_SET_FILTERS",
        filters: void 0
      }) : h.default.dispatch({
        type: "CONTENT_INVENTORY_SET_FILTERS",
        filters: {
          types: new Set([i])
        }
      })
    }
  })
}

function C() {
  var e;
  let t = (0, d.useStateFromStores)([f.default], () => f.default.getFeed(y.ContentInventoryFeedKey.GLOBAL_FEED)),
    r = (0, d.useStateFromStores)([f.default], () => f.default.getDebugImpressionCappingDisabled()),
    l = (0, d.useStateFromStores)([g.default], () => g.default.getDebugFastImpressionCappingEnabled()),
    o = function(e) {
      let t = s().groupBy(e, e => e.content_type);
      return Object.keys(t).map(e => {
        let r = t[e];
        return {
          key: "".concat(e),
          type: r[0].content_type,
          entries: r
        }
      })
    }(null == t ? void 0 : null === (e = t.entries) || void 0 === e ? void 0 : e.map(e => e.content)),
    [c, v] = i.useState(void 0),
    C = null != c && c === t;
  return (0, a.jsx)("div", {
    className: n()(x.panel),
    children: (0, a.jsxs)(u.ScrollerThin, {
      className: b.content,
      children: [(0, a.jsxs)(u.FormSection, {
        children: [(0, a.jsx)(u.FormTitle, {
          children: "Inventory"
        }), o.length > 0 && (0, a.jsx)(m.default, {
          columns: k,
          data: o
        }), (0, a.jsx)(p.default, {
          size: 8
        }), (0, a.jsx)(u.Button, {
          fullWidth: !0,
          onClick: function() {
            v(t), h.default.dispatch({
              type: "CONTENT_INVENTORY_MANUAL_REFRESH"
            })
          },
          submitting: C,
          children: "Refresh"
        })]
      }), (0, a.jsxs)(u.FormSection, {
        children: [(0, a.jsx)(u.FormTitle, {
          children: "Impression Capping"
        }), (0, a.jsx)(u.Button, {
          fullWidth: !0,
          onClick: function() {
            h.default.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS"
            })
          },
          children: "Clear Impressions"
        }), (0, a.jsx)(p.default, {
          size: 8
        }), (0, a.jsx)(u.Button, {
          fullWidth: !0,
          onClick: function() {
            h.default.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS"
            })
          },
          children: "Log Impressions"
        }), (0, a.jsx)(p.default, {
          size: 8
        }), (0, a.jsx)(u.Button, {
          fullWidth: !0,
          onClick: function() {
            h.default.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING"
            })
          },
          children: r ? "Enable Impression Capping" : "Disable Impression Capping"
        }), (0, a.jsx)(p.default, {
          size: 8
        }), (0, a.jsx)(u.Button, {
          fullWidth: !0,
          onClick: function() {
            h.default.dispatch({
              type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING"
            })
          },
          children: l ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping"
        })]
      })]
    })
  })
}