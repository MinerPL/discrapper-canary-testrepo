r.d(t, {
  Z: function() {
return S;
  }
}), r(47120);
var a = r(735250),
  n = r(470079),
  i = r(120356),
  o = r.n(i),
  l = r(392711),
  c = r.n(l),
  s = r(876215),
  d = r(442837),
  u = r(481060),
  h = r(570140),
  m = r(812206),
  g = r(681619),
  p = r(810568),
  b = r(168524),
  f = r(77498),
  y = r(71585),
  x = r(146282),
  k = r(650613),
  v = r(789086),
  _ = r(206583),
  C = r(262737),
  w = r(979756);
let j = [{
key: 'type',
cellClassName: o()(C.cell, C.cellType),
render(e) {
  let {
    type: t
  } = e;
  return (0, a.jsx)(u.Text, {
    variant: 'text-md/semibold',
    children: s.s[t]
  });
}
  },
  {
key: 'count',
cellClassName: o()(C.cell, C.cellCount),
render(e) {
  let {
    entries: t
  } = e;
  return (0, a.jsx)('div', {
    children: (0, a.jsx)(u.Text, {
      variant: 'text-md/normal',
      children: t.length
    })
  });
}
  },
  {
key: 'only?',
cellClassName: C.cell,
render(e) {
  let {
    type: t
  } = e;
  return (0, a.jsx)(N, {
    type: t
  });
}
  }
];

function N(e) {
  var t, r;
  let {
type: n
  } = e, i = (0, d.e7)([x.Z], () => x.Z.getFilters()), o = null !== (r = null == i ? void 0 : null === (t = i.types) || void 0 === t ? void 0 : t.has(n)) && void 0 !== r && r;
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
  let t = (0, d.e7)([x.Z], () => x.Z.getFeed(_.YN.GLOBAL_FEED)),
r = (0, d.e7)([x.Z], () => x.Z.getDebugImpressionCappingDisabled()),
i = (0, d.e7)([y.Z], () => y.Z.getDebugFastImpressionCappingEnabled()),
l = function(e) {
  let t = c().groupBy(e, e => e.content_type);
  return Object.keys(t).map(e => {
    let r = t[e];
    return {
      key: ''.concat(e),
      type: r[0].content_type,
      entries: r
    };
  });
}(null == t ? void 0 : null === (e = t.entries) || void 0 === e ? void 0 : e.map(e => e.content)),
s = (0, d.e7)([x.Z], () => {
  var e;
  return (null === (e = x.Z.getFeedState(_.YN.GLOBAL_FEED)) || void 0 === e ? void 0 : e.loading) === !0;
}),
[N, S] = n.useState(''),
T = (0, d.e7)([
  f.Z,
  m.Z
], () => {
  var e, t, r;
  return parseInt(N) > 0 ? N : null !== (r = null === (e = f.Z.getGameByName(N)) || void 0 === e ? void 0 : e.id) && void 0 !== r ? r : null === (t = m.Z.getApplicationByName(N)) || void 0 === t ? void 0 : t.id;
}, [N]),
I = (0, b.Z)({
  applicationId: T,
  location: 'DevToolsContentInventory',
  source: p.m1.DevTools
});
  return (0, a.jsx)('div', {
className: o()(w.panel),
children: (0, a.jsxs)(u.ScrollerThin, {
  className: C.content,
  children: [
    (0, a.jsxs)(u.FormSection, {
      children: [
        (0, a.jsx)(u.FormTitle, {
          children: 'Inventory'
        }),
        l.length > 0 && (0, a.jsx)(g.Z, {
          columns: j,
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
          children: r ? 'Enable Impression Capping' : 'Disable Impression Capping'
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
            'Enter' === e.key && (N === e.currentTarget.value ? null == I || I() : S(e.currentTarget.value));
          },
          error: N.length > 0 && null == I ? 'No game profile for '.concat(null != T ? T : N + ' - try by id', '.') : void 0,
          style: null != I ? {
            border: '1px solid green'
          } : {}
        })
      ]
    })
  ]
})
  });
}