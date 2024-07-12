t.d(n, {
  Z: function() {
return G;
  }
}), t(47120), t(653041), t(724458);
var i = t(735250),
  l = t(470079),
  a = t(392711),
  r = t.n(a),
  s = t(892814),
  o = t(79411),
  c = t(442837),
  u = t(481060),
  d = t(911969),
  m = t(595519),
  p = t(115130),
  _ = t(566620),
  E = t(127255),
  A = t(880308),
  h = t(427996),
  f = t(367907),
  N = t(399654),
  C = t(844439),
  v = t(254711),
  I = t(213459),
  P = t(10718),
  x = t(895924),
  T = t(148958),
  g = t(424602),
  R = t(541099),
  S = t(827498),
  L = t(87005),
  M = t(783097),
  O = t(695676),
  y = t(98880),
  j = t(804307),
  b = t(888617),
  Z = t(561160),
  H = t(41558),
  U = t(105862),
  D = t(28147),
  k = t(981631),
  B = t(689079),
  w = t(689938),
  V = t(678313);
let W = [],
  F = Array(8).fill(0).map((e, n) => n),
  Y = [{
  cards: [, , , , ].fill(0).map((e, n) => n),
  look: y.U4.LARGE_BANNER
},
{
  cards: Array(8).fill(0).map((e, n) => n),
  look: y.U4.NO_BANNER
},
{
  cards: [, , , , ].fill(0).map((e, n) => n),
  look: y.U4.NO_BANNER
}
  ];

function G(e) {
  let {
channel: n,
entrypoint: t,
searchQuery: a,
setSearchQuery: r,
setScroller: s
  } = e, o = (0, m.NX)(n.id, !0), d = (0, c.e7)([p.Z], () => p.Z.getIsEnabled(), []), E = t === S._b.TEXT, A = t === S._b.TEXT, h = t === S._b.TEXT, f = t === S._b.VOICE, N = t === S._b.TEXT, [C, v] = ee(E), [I, P] = ee(A), [x, T] = ee(h), [g, R] = ee(f), L = C && I && x && g, M = (h || A) && !L, O = f && d;
  l.useEffect(() => {
o && (0, _.w1)({
  guildId: n.getGuildId(),
  force: !0
});
  }, [
o,
n
  ]);
  let y = a.length > 0;
  return (0, i.jsxs)('div', {
className: V.container,
children: [
  O ? (0, i.jsx)(z, {}) : null,
  (0, i.jsx)(X, {
    searchQuery: a,
    setSearchQuery: r,
    placeholder: N ? w.Z.Messages.APP_LAUNCHER_SEARCH_PLACEHOLDER : w.Z.Messages.APP_LAUNCHER_SEARCH_ACTIVITIES_PLACEHOLDER
  }),
  (0, i.jsx)(u.Scroller, {
    ref: s,
    className: V.scrollableContent,
    fade: !0,
    children: y ? (0, i.jsx)('div', {
      children: (0, i.jsx)(D.Z, {
        channel: n,
        query: a,
        entrypoint: t,
        enableGlobalSearch: t === S._b.TEXT,
        enableActivitiesSearch: o
      })
    }) : (0, i.jsxs)('div', {
      children: [
        E && (0, i.jsx)(q, {
          channel: n,
          entrypoint: t,
          onEmptyState: v
        }),
        A && (0, i.jsx)(J, {
          channel: n,
          onEmptyState: P
        }),
        h && (0, i.jsx)($, {
          channel: n,
          onEmptyState: T
        }),
        f && (0, i.jsx)(Q, {
          channel: n,
          onEmptyState: R
        }),
        L && (0, i.jsx)(Z.A, {
          type: S.LG.HOME_EMPTY,
          textContent: t === S._b.TEXT ? w.Z.Messages.APP_LAUNCHER_HOME_EMPTY_STATE_SEARCH_SUGGEST_BODY : w.Z.Messages.APP_LAUNCHER_HOME_EMPTY_STATE_ACTIVITIES_BODY
        }),
        M && (0, i.jsx)(U.Z, {})
      ]
    })
  })
]
  });
}

function z() {
  return (0, i.jsxs)('div', {
className: V.developerShelfControlsContainer,
children: [
  (0, i.jsx)(u.Text, {
    className: V.developerShelfControlsLabel,
    variant: 'text-sm/normal',
    children: w.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_SHELF_SUBTITLE
  }),
  (0, i.jsx)(h.W, {
    hideSearch: !0
  })
]
  });
}

function X(e) {
  let {
searchQuery: n,
setSearchQuery: t,
placeholder: a
  } = e, [s, o] = l.useState(!0), [c, d] = l.useState(!1), m = l.useMemo(() => r().debounce(e => {
(0, f.yw)(k.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
  query: e,
  source: R.Z.entrypoint(),
  location: x.Vh.APP_LAUNCHER_HOME
});
  }, 400, {
leading: !1,
trailing: !0
  }), []), p = l.useCallback(() => t(''), [t]), _ = l.useCallback(() => {
d(!0), (0, f.yw)(k.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
  source: R.Z.entrypoint(),
  location: x.Vh.APP_LAUNCHER_HOME
});
  }, []), E = l.useCallback(() => {
if (s) {
  o(!1);
  return;
}
_();
  }, [
s,
_
  ]), A = l.useCallback(e => {
!c && _(), t(e), m(e);
  }, [
c,
t,
_,
m
  ]);
  return (0, i.jsx)('div', {
className: V.searchBarContainer,
children: (0, i.jsx)(u.SearchBar, {
  placeholder: a,
  query: n,
  onChange: A,
  onClear: p,
  size: u.SearchBar.Sizes.MEDIUM,
  autoFocus: !0,
  onFocus: E
})
  });
}

function q(e) {
  let {
channel: n,
entrypoint: t,
onEmptyState: a
  } = e, {
frecentApps: r,
loading: s
  } = (0, L.f)(n, !0), o = l.useMemo(() => {
let e = [];
for (let n of r)
  null != n.application && e.push({
    application: n.application,
    isPartner: !1
  });
return e;
  }, [r]), c = w.Z.Messages.APP_LAUNCHER_HOME_RECENT_APPS_HEADER, {
items: u,
handleViewMore: d
  } = en(c, t === S._b.VOICE ? y.U4.LARGE_BANNER : y.U4.NO_BANNER, o, 8, S.L3.RECENT_APPS);
  l.useEffect(() => {
if (!0 !== s.current)
  0 !== u.length && (0, f.yw)(k.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
    num: u.length,
    section_name: S.L3.RECENT_APPS,
    location: S.G0.HOME,
    source: t
  });
  }, [
u.length,
t,
s
  ]);
  let m = s.current,
p = !m && 0 === u.length;
  return (l.useEffect(() => {
a(p);
  }, [
p,
a
  ]), m || p) ? null : (0, i.jsxs)('div', {
children: [
  (0, i.jsx)(H.Z, {
    title: c,
    buttonType: H.Z.buttonTypes.VIEW_MORE,
    onClickViewButton: d
  }),
  (0, i.jsx)('div', {
    className: V.sectionContentContainer,
    children: (0, i.jsx)('div', {
      className: V.frecentList,
      children: u.map((e, n) => {
        let {
          application: t,
          isPartner: l
        } = e;
        return (0, i.jsx)(y.kA, {
          application: t,
          look: y.U4.ICON,
          isPartner: l,
          location: S.G0.HOME,
          sectionName: S.L3.RECENT_APPS,
          resultsPosition: n
        }, t.id);
      })
    })
  })
]
  });
}

function Q(e) {
  let {
channel: n,
onEmptyState: t
  } = e;
  (0, A.g)();
  let a = (0, E.Z)({
  guildId: n.getGuildId(),
  channel: n
}),
r = y.U4.LARGE_BANNER,
{
  trackSectionImpressionRef: s
} = (0, b.Z)({
  sectionName: S.L3.ACTIVITIES,
  numItems: a.length,
  numVisibleItems: a.length
}),
{
  clickOnHomeActivityOpensAppDetail: o
} = g.m1.getCurrentConfig({
  location: 'ActivitiesShelfSection'
}, {
  autoTrackExposure: !1
}),
c = 0 === a.length;
  return (l.useEffect(() => {
t(c);
  }, [
t,
c
  ]), c) ? null : (0, i.jsxs)('div', {
children: [
  (0, i.jsx)('div', {
    ref: e => s.current = e,
    children: (0, i.jsx)(H.Z, {
      title: w.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
    })
  }),
  (0, i.jsx)('div', {
    className: V.sectionContentContainer,
    children: a.map((e, t) => {
      let {
        application: l
      } = e;
      return (0, i.jsx)(y.qR, {
        channel: n,
        application: l,
        look: r,
        location: x.Vh.APP_LAUNCHER_HOME,
        sectionName: S.L3.ACTIVITIES,
        resultsPosition: t,
        isOneClickCTA: !o
      }, l.id);
    })
  })
]
  });
}

function J(e) {
  var n;
  let {
channel: t,
onEmptyState: a
  } = e, s = (0, I.LD)(t.guild_id, !0), {
commandsByActiveSection: o,
loading: c
  } = P.wi(t, {
commandType: d.yU.CHAT
  }, {
placeholderCount: 0,
limit: B.tn,
includeFrecency: !0
  }), u = l.useMemo(() => o.reduce((e, n) => {
let {
  section: t,
  data: i
} = n;
return i.length > 0 && e.add(t.id), e;
  }, new Set()), [o]), m = l.useMemo(() => {
var e, n;
return Object.values(null !== (n = null === (e = s.result) || void 0 === e ? void 0 : e.sections) && void 0 !== n ? n : {}).map(e => {
  let {
    descriptor: n
  } = e;
  return n;
}).filter(e => !(e.id in v.Tm) && u.has(e.id));
  }, [
null === (n = s.result) || void 0 === n ? void 0 : n.sections,
u
  ]), p = (0, T.h)(m), _ = S.L3.APPS_IN_THIS_SERVER, E = l.useMemo(() => r().compact(p.map(e => {
let {
  application: n
} = e;
return n;
  })).map(e => ({
application: e
  })), [p]), {
items: A,
handleViewMore: h
  } = en(w.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER, y.U4.NO_BANNER, E, 8, _), {
trackSectionImpressionRef: f
  } = (0, b.Z)({
sectionName: _,
numItems: E.length,
numVisibleItems: A.length
  }), N = s.fetchState.fetching || c.current, C = !N && 0 === A.length;
  return (l.useEffect(() => {
a(C);
  }, [
C,
a
  ]), C) ? null : (0, i.jsxs)('div', {
children: [
  (0, i.jsx)('div', {
    ref: e => f.current = e,
    children: (0, i.jsx)(H.Z, {
      title: w.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER,
      buttonType: H.Z.buttonTypes.VIEW_MORE,
      onClickViewButton: h
    })
  }),
  (0, i.jsx)('div', {
    className: V.sectionContentContainer,
    children: N ? F.map(e => (0, i.jsx)(j.Z, {
      look: y.U4.NO_BANNER
    }, e)) : A.map((e, n) => {
      let {
        application: t,
        isPartner: l
      } = e;
      return null != t ? (0, i.jsx)(y.kA, {
        application: t,
        isPartner: l,
        look: y.U4.NO_BANNER,
        sectionName: _,
        resultsPosition: n,
        location: x.Vh.APP_LAUNCHER_HOME
      }, t.id) : null;
    })
  })
]
  });
}

function $(e) {
  let {
channel: n,
onEmptyState: t
  } = e, {
fetchState: a,
recommendationsSections: r,
isInstallOnDemand: o
  } = function(e) {
let {
  channel: n,
  location: t
} = e, i = n.id;
l.useEffect(() => {
  (0, N.$)({
    channelId: i,
    location: t
  });
}, [
  i,
  t
]);
let {
  sectionDescriptors: a
} = P.wi(n, {
  commandType: d.yU.CHAT
}, {
  placeholderCount: 0,
  limit: B.tn,
  includeFrecency: !0
}), r = l.useCallback(e => !(0, M.ye)({
  application: e
}) && !(null != a.find(n => n.id === e.id)), [a]), {
  fetchState: s,
  recommendationsSections: o
} = (0, c.cj)([C.ZP], () => ({
  fetchState: C.ZP.getFetchState({
    channelId: i,
    location: t
  }),
  recommendationsSections: C.ZP.getRecommendations({
    channelId: i,
    location: t
  })
}));
return {
  fetchState: s,
  recommendationsSections: o,
  isInstallOnDemand: r
};
  }({
channel: n,
location: s.I.APP_LAUNCHER_TEXT
  }), u = function(e) {
let {
  channel: n,
  recommendationsSections: t
} = e;
(0, A.g)();
let i = (0, E.Z)({
  guildId: n.getGuildId(),
  channel: n
});
return l.useMemo(() => {
  if (!t.some(e => e.appends_remaining_activities))
    return W;
  let e = new Set();
  return t.forEach(n => {
    n.items.forEach(n => {
      null != n.application && e.add(n.application.id);
    });
  }), i.filter(n => !e.has(n.application.id));
}, [
  t,
  i
]);
  }({
channel: n,
recommendationsSections: r
  }), m = a === C.M.FETCHING, p = !m && 0 === r.length;
  return (l.useEffect(() => {
t(p);
  }, [
p,
t
  ]), p) ? null : (0, i.jsx)(i.Fragment, {
children: m ? Y.map((e, n) => {
  let {
    cards: t,
    look: l
  } = e;
  return (0, i.jsxs)('div', {
    children: [
      (0, i.jsx)(H.Z.Loading, {}),
      (0, i.jsx)('div', {
        className: V.sectionContentContainer,
        children: t.map(e => (0, i.jsx)(j.Z, {
          look: l
        }, e))
      })
    ]
  }, n);
}) : r.map(e => (0, i.jsx)(K, {
  recommendationsSection: e,
  remainingActivities: u,
  isInstallOnDemand: o
}, e.key))
  });
}

function K(e) {
  let {
recommendationsSection: n,
remainingActivities: t,
isInstallOnDemand: a
  } = e, r = n.section_title, s = n.type === o.i.BANNER_CARDS ? y.U4.LARGE_BANNER : y.U4.NO_BANNER, c = l.useMemo(() => {
let e = n.items.map(e => {
  let {
    application: n,
    is_partner: t
  } = e;
  return {
    application: n,
    isPartner: t,
    installOnDemand: a(n)
  };
});
return n.appends_remaining_activities && e.push(...t.map(e => {
  let {
    application: n
  } = e;
  return {
    application: n,
    isPartner: !1,
    installOnDemand: !1
  };
})), e;
  }, [
n.items,
n.appends_remaining_activities,
a,
t
  ]), u = n.key, {
items: d,
handleViewMore: m
  } = en(r, s, c, 8, u), {
trackSectionImpressionRef: p
  } = (0, b.Z)({
sectionName: u,
numItems: c.length,
numVisibleItems: d.length
  });
  return (0, i.jsxs)('div', {
children: [
  (0, i.jsx)('div', {
    ref: e => p.current = e,
    children: (0, i.jsx)(H.Z, {
      title: n.section_title,
      buttonType: H.Z.buttonTypes.VIEW_MORE,
      onClickViewButton: m
    })
  }),
  (0, i.jsx)('div', {
    className: V.sectionContentContainer,
    children: d.map((e, n) => {
      let {
        application: t,
        isPartner: l,
        installOnDemand: a
      } = e;
      return (0, i.jsx)(y.kA, {
        application: t,
        look: s,
        isPartner: l,
        sectionName: u,
        resultsPosition: n,
        location: x.Vh.APP_LAUNCHER_HOME,
        installOnDemand: a
      }, t.id);
    })
  })
]
  });
}

function ee(e) {
  let [n, t] = l.useState(!e);
  return [
n,
l.useCallback(function() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  t(e);
}, [])
  ];
}

function en(e, n, t, i, a) {
  let {
pushHistory: r
  } = (0, O.hH)();
  return l.useMemo(() => t.length <= i ? {
items: t,
handleViewMore: void 0
  } : {
items: t.slice(0, i),
handleViewMore: () => {
  (0, f.yw)(k.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
    section_name: a,
    source: R.Z.entrypoint()
  }), r({
    type: O.gc.LIST,
    title: e,
    look: n,
    items: t,
    sectionName: a
  });
}
  }, [
t,
i,
a,
r,
e,
n
  ]);
}