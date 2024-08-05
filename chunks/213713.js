t.d(r, {
  Z: function() {
return S;
  }
}), t(47120);
var a = t(735250),
  n = t(470079),
  i = t(120356),
  o = t.n(i),
  l = t(392711),
  c = t.n(l),
  s = t(876215),
  d = t(442837),
  u = t(481060),
  h = t(570140),
  m = t(812206),
  g = t(681619),
  p = t(810568),
  b = t(168524),
  f = t(77498),
  y = t(71585),
  x = t(146282),
  k = t(650613),
  v = t(789086),
  _ = t(206583),
  j = t(262737),
  w = t(979756);
let C = [{
key: 'type',
cellClassName: o()(j.cell, j.cellType),
render(e) {
  let {
    type: r
  } = e;
  return (0, a.jsx)(u.Text, {
    variant: 'text-md/semibold',
    children: s.s[r]
  });
}
  },
  {
key: 'count',
cellClassName: o()(j.cell, j.cellCount),
render(e) {
  let {
    entries: r
  } = e;
  return (0, a.jsx)('div', {
    children: (0, a.jsx)(u.Text, {
      variant: 'text-md/normal',
      children: r.length
    })
  });
}
  },
  {
key: 'only?',
cellClassName: j.cell,
render(e) {
  let {
    type: r
  } = e;
  return (0, a.jsx)(N, {
    type: r
  });
}
  }
];

function N(e) {
  var r, t;
  let {
type: n
  } = e, i = (0, d.e7)([x.Z], () => x.Z.getFilters()), o = null !== (t = null == i ? void 0 : null === (r = i.types) || void 0 === r ? void 0 : r.has(n)) && void 0 !== t && t;
  return (0, a.jsx)(u.Checkbox, {
value: o,
onClick: function() {
  o ? h.Z.dispatch({
    type: 'CONTENT_INVENTORY_SET_FILTERS',
    filters: void 0
  }) : h.Z.dispatch({
    type: 'CONTENT_INVENTORY_SET_FILTERS',
    filters: {
      types: new Set([n])
    }
  });
}
  });
}

function S() {
  var e;
  let r = (0, d.e7)([x.Z], () => x.Z.getFeed(_.YN.GLOBAL_FEED)),
t = (0, d.e7)([x.Z], () => x.Z.getDebugImpressionCappingDisabled()),
i = (0, d.e7)([y.Z], () => y.Z.getDebugFastImpressionCappingEnabled()),
l = function(e) {
  let r = c().groupBy(e, e => e.content_type);
  return Object.keys(r).map(e => {
    let t = r[e];
    return {
      key: ''.concat(e),
      type: t[0].content_type,
      entries: t
    };
  });
}(null == r ? void 0 : null === (e = r.entries) || void 0 === e ? void 0 : e.map(e => e.content)),
s = (0, d.e7)([x.Z], () => {
  var e;
  return (null === (e = x.Z.getFeedState(_.YN.GLOBAL_FEED)) || void 0 === e ? void 0 : e.loading) === !0;
}),
[N, S] = n.useState(''),
T = (0, d.e7)([
  f.Z,
  m.Z
], () => {
  var e, r, t;
  return parseInt(N) > 0 ? N : null !== (t = null === (e = f.Z.getGameByName(N)) || void 0 === e ? void 0 : e.id) && void 0 !== t ? t : null === (r = m.Z.getApplicationByName(N)) || void 0 === r ? void 0 : r.id;
}, [N]),
Z = (0, b.Z)({
  applicationId: T,
  location: 'DevToolsContentInventory',
  source: p.m1.DevTools
});
  return (0, a.jsx)('div', {
className: o()(w.panel),
children: (0, a.jsxs)(u.ScrollerThin, {
  className: j.content,
  children: [
    (0, a.jsxs)(u.FormSection, {
      children: [
        (0, a.jsx)(u.FormTitle, {
          children: 'Inventory'
        }),
        l.length > 0 && (0, a.jsx)(g.Z, {
          columns: C,
          data: l
        }),
        (0, a.jsx)(u.Spacer, {
          size: 8
        }),
        (0, a.jsx)(v.Z, {}),
        (0, a.jsx)(u.Button, {
          fullWidth: !0,
          onClick: function() {
            h.Z.dispatch({
              type: 'CONTENT_INVENTORY_MANUAL_REFRESH',
              feedId: _.YN.GLOBAL_FEED
            });
          },
          submitting: s,
          children: 'Refresh Now'
        })
      ]
    }),
    (0, a.jsxs)(u.FormSection, {
      children: [
        (0, a.jsx)(u.FormTitle, {
          children: 'Impression Capping'
        }),
        (0, a.jsx)(u.Button, {
          fullWidth: !0,
          onClick: function() {
            h.Z.dispatch({
              type: 'CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS'
            });
          },
          children: 'Clear Impressions'
        }),
        (0, a.jsx)(u.Spacer, {
          size: 8
        }),
        (0, a.jsx)(u.Button, {
          fullWidth: !0,
          onClick: function() {
            h.Z.dispatch({
              type: 'CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS'
            });
          },
          children: 'Log Impressions'
        }),
        (0, a.jsx)(u.Spacer, {
          size: 8
        }),
        (0, a.jsx)(u.Button, {
          fullWidth: !0,
          onClick: function() {
            h.Z.dispatch({
              type: 'CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING'
            });
          },
          children: t ? 'Enable Impression Capping' : 'Disable Impression Capping'
        }),
        (0, a.jsx)(u.Spacer, {
          size: 8
        }),
        (0, a.jsx)(u.Button, {
          fullWidth: !0,
          onClick: function() {
            h.Z.dispatch({
              type: 'CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING'
            });
          },
          children: i ? 'Disable Fast Impression Capping' : 'Enable Fast Impression Capping'
        })
      ]
    }),
    false,
    (0, a.jsx)(k.Z, {}),
    (0, a.jsxs)(u.FormSection, {
      children: [
        (0, a.jsx)(u.FormTitle, {
          children: 'Game Profile'
        }),
        (0, a.jsx)(u.TextInput, {
          placeholder: 'App ID or full name',
          onChange: e => (0 === e.length || e.length >= 18) && S(e),
          onKeyDown: e => {
            'Enter' === e.key && (N === e.currentTarget.value ? null == Z || Z() : S(e.currentTarget.value));
          },
          error: N.length > 0 && null == Z ? 'No game profile for '.concat(null != T ? T : N + ' - try by id', '.') : void 0,
          style: null != Z ? {
            border: '1px solid green'
          } : {}
        })
      ]
    })
  ]
})
  });
}