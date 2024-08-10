t.d(r, {
  Z: function() {
return E;
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
  u = t(433517),
  h = t(481060),
  m = t(570140),
  g = t(812206),
  p = t(835473),
  b = t(681619),
  f = t(810568),
  y = t(168524),
  x = t(77498),
  k = t(823379),
  v = t(71585),
  _ = t(146282),
  j = t(650613),
  w = t(789086),
  C = t(206583),
  N = t(262737),
  S = t(979756);
let T = [{
key: 'type',
cellClassName: o()(N.cell, N.cellType),
render(e) {
  let {
    type: r
  } = e;
  return (0, a.jsx)(h.Text, {
    variant: 'text-md/semibold',
    children: s.s[r]
  });
}
  },
  {
key: 'count',
cellClassName: o()(N.cell, N.cellCount),
render(e) {
  let {
    entries: r
  } = e;
  return (0, a.jsx)('div', {
    children: (0, a.jsx)(h.Text, {
      variant: 'text-md/normal',
      children: r.length
    })
  });
}
  },
  {
key: 'only?',
cellClassName: N.cell,
render(e) {
  let {
    type: r
  } = e;
  return (0, a.jsx)(Z, {
    type: r
  });
}
  }
];

function Z(e) {
  var r, t;
  let {
type: n
  } = e, i = (0, d.e7)([_.Z], () => _.Z.getFilters()), o = null !== (t = null == i ? void 0 : null === (r = i.types) || void 0 === r ? void 0 : r.has(n)) && void 0 !== t && t;
  return (0, a.jsx)(h.Checkbox, {
value: o,
onClick: function() {
  o ? m.Z.dispatch({
    type: 'CONTENT_INVENTORY_SET_FILTERS',
    filters: void 0
  }) : m.Z.dispatch({
    type: 'CONTENT_INVENTORY_SET_FILTERS',
    filters: {
      types: new Set([n])
    }
  });
}
  });
}

function E() {
  var e, r;
  let t = (0, d.e7)([_.Z], () => _.Z.getFeed(C.YN.GLOBAL_FEED)),
i = (0, d.e7)([_.Z], () => _.Z.getDebugImpressionCappingDisabled()),
l = (0, d.e7)([v.Z], () => v.Z.getDebugFastImpressionCappingEnabled()),
s = function(e) {
  let r = c().groupBy(e, e => e.content_type);
  return Object.keys(r).map(e => {
    let t = r[e];
    return {
      key: ''.concat(e),
      type: t[0].content_type,
      entries: t
    };
  });
}(null == t ? void 0 : null === (e = t.entries) || void 0 === e ? void 0 : e.map(e => e.content)),
Z = (0, d.e7)([_.Z], () => {
  var e;
  return (null === (e = _.Z.getFeedState(C.YN.GLOBAL_FEED)) || void 0 === e ? void 0 : e.loading) === !0;
}),
[E, R] = n.useState(''),
O = (0, d.e7)([
  x.Z,
  g.Z
], () => {
  var e, r, t;
  return parseInt(E) > 0 ? E : null !== (t = null === (e = x.Z.getGameByName(E)) || void 0 === e ? void 0 : e.id) && void 0 !== t ? t : null === (r = g.Z.getApplicationByName(E)) || void 0 === r ? void 0 : r.id;
}, [E]),
B = (0, y.Z)({
  applicationId: O,
  location: 'DevToolsContentInventory',
  source: f.m1.DevTools
}),
A = Object.entries(null !== (r = u.K.get('GameProfileModal')) && void 0 !== r ? r : {}).filter(e => {
  let [r, t] = e;
  return t;
}).map(e => {
  let [r] = e;
  return r;
}),
P = (0, p.Z)(A).filter(k.lm);
  return (0, a.jsx)('div', {
className: o()(S.panel),
children: (0, a.jsxs)(h.ScrollerThin, {
  className: N.content,
  children: [
    (0, a.jsxs)(h.FormSection, {
      children: [
        (0, a.jsx)(h.FormTitle, {
          children: 'Inventory'
        }),
        s.length > 0 && (0, a.jsx)(b.Z, {
          columns: T,
          data: s
        }),
        (0, a.jsx)(h.Spacer, {
          size: 8
        }),
        (0, a.jsx)(w.Z, {}),
        (0, a.jsx)(h.Button, {
          fullWidth: !0,
          onClick: function() {
            m.Z.dispatch({
              type: 'CONTENT_INVENTORY_MANUAL_REFRESH',
              feedId: C.YN.GLOBAL_FEED
            });
          },
          submitting: Z,
          children: 'Refresh Now'
        })
      ]
    }),
    (0, a.jsxs)(h.FormSection, {
      children: [
        (0, a.jsx)(h.FormTitle, {
          children: 'Impression Capping'
        }),
        (0, a.jsx)(h.Button, {
          fullWidth: !0,
          onClick: function() {
            m.Z.dispatch({
              type: 'CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS'
            });
          },
          children: 'Clear Impressions'
        }),
        (0, a.jsx)(h.Spacer, {
          size: 8
        }),
        (0, a.jsx)(h.Button, {
          fullWidth: !0,
          onClick: function() {
            m.Z.dispatch({
              type: 'CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS'
            });
          },
          children: 'Log Impressions'
        }),
        (0, a.jsx)(h.Spacer, {
          size: 8
        }),
        (0, a.jsx)(h.Button, {
          fullWidth: !0,
          onClick: function() {
            m.Z.dispatch({
              type: 'CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING'
            });
          },
          children: i ? 'Enable Impression Capping' : 'Disable Impression Capping'
        }),
        (0, a.jsx)(h.Spacer, {
          size: 8
        }),
        (0, a.jsx)(h.Button, {
          fullWidth: !0,
          onClick: function() {
            m.Z.dispatch({
              type: 'CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING'
            });
          },
          children: l ? 'Disable Fast Impression Capping' : 'Enable Fast Impression Capping'
        })
      ]
    }),
    false,
    (0, a.jsx)(j.Z, {}),
    (0, a.jsxs)(h.FormSection, {
      children: [
        (0, a.jsx)(h.FormTitle, {
          children: 'Game Profile'
        }),
        (0, a.jsx)(h.TextInput, {
          placeholder: 'App ID or full name',
          onChange: e => (0 === e.length || e.length >= 18) && R(e),
          onKeyDown: e => {
            'Enter' === e.key && (E === e.currentTarget.value ? null == B || B() : R(e.currentTarget.value));
          },
          error: E.length > 0 && null == B ? 'No game profile for '.concat(null != O ? O : E + ' - try by id', '.') : void 0,
          style: null != B ? {
            border: '1px solid green'
          } : {}
        }),
        (0, a.jsx)('ul', {
          children: P.map(e => (0, a.jsx)('li', {
            children: (0, a.jsx)(I, {
              application: e
            })
          }, 'follow-game-'.concat(e.id)))
        })
      ]
    })
  ]
})
  });
}
let I = e => {
  let {
application: r
  } = e, t = (0, y.Z)({
applicationId: r.id,
location: 'DevToolsContentInventory',
source: f.m1.DevTools
  });
  return (0, a.jsx)(h.Clickable, {
onClick: t,
style: {
  margin: '2px',
  cursor: 'pointer'
},
children: (0, a.jsx)(h.Text, {
  variant: 'text-xs/normal',
  color: 'text-muted',
  children: r.name
})
  });
};