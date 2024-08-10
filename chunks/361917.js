t.d(n, {
  Z: function() {
return Y;
  }
}), t(47120), t(653041), t(724458);
var i = t(735250),
  a = t(470079),
  l = t(392711),
  o = t.n(l),
  r = t(892814),
  s = t(79411),
  c = t(442837),
  u = t(481060),
  d = t(911969),
  m = t(115130),
  p = t(566620),
  _ = t(127255),
  C = t(880308),
  f = t(427996),
  h = t(367907),
  A = t(399654),
  E = t(844439),
  N = t(254711),
  v = t(213459),
  x = t(10718),
  I = t(895924),
  g = t(148958),
  P = t(424602),
  L = t(541099),
  R = t(827498),
  S = t(87005),
  T = t(783097),
  b = t(695676),
  M = t(98880),
  j = t(804307),
  y = t(888617),
  O = t(561160),
  Z = t(41558),
  H = t(105862),
  U = t(28147),
  B = t(981631),
  k = t(689079),
  D = t(689938),
  w = t(678313);
let V = [],
  W = [, , , , ].fill(0).map((e, n) => n),
  F = [{
  cards: [, , , , ].fill(0).map((e, n) => n),
  look: M.U4.MEDIUM_BANNER
},
{
  cards: [, , , , ].fill(0).map((e, n) => n),
  look: M.U4.ROW
},
{
  cards: [, , , , ].fill(0).map((e, n) => n),
  look: M.U4.ROW
}
  ];

function Y(e) {
  let {
channel: n,
entrypoint: t,
searchQuery: l,
setSearchQuery: o,
setScroller: r,
isScrollCloseToBottom: s
  } = e, d = (0, c.e7)([m.Z], () => m.Z.getIsEnabled(), []), _ = !!P.nS.useExperiment({
location: 'app_launcher_home'
  }).enabled || t === R._b.TEXT, C = t === R._b.TEXT && !n.isPrivate(), f = t === R._b.TEXT, h = t === R._b.VOICE, A = t === R._b.TEXT, [E, N] = $(_), [v, x] = $(C), [I, g] = $(f), [L, S] = $(h), T = E && v && I && L, b = (f || C) && !T, M = h && d;
  a.useEffect(() => {
(0, p.w1)({
  guildId: n.getGuildId(),
  force: !0
});
  }, [n]), a.useEffect(() => {
t === R._b.VOICE && p.ux();
  }, [t]);
  let j = l.length > 0;
  return (0, i.jsxs)('div', {
className: w.container,
children: [
  M ? (0, i.jsx)(G, {}) : null,
  (0, i.jsx)(z, {
    searchQuery: l,
    setSearchQuery: o,
    placeholder: A ? D.Z.Messages.APP_LAUNCHER_SEARCH_PLACEHOLDER : D.Z.Messages.APP_LAUNCHER_SEARCH_ACTIVITIES_PLACEHOLDER
  }),
  (0, i.jsx)(u.Scroller, {
    ref: r,
    className: w.scrollableContent,
    fade: !0,
    children: j ? (0, i.jsx)(U.Z, {
      channel: n,
      query: l,
      entrypoint: t,
      enableGlobalSearch: t === R._b.TEXT,
      isScrollCloseToBottom: s
    }) : (0, i.jsxs)('div', {
      children: [
        _ && (0, i.jsx)(X, {
          channel: n,
          entrypoint: t,
          onEmptyState: N
        }),
        C && (0, i.jsx)(Q, {
          channel: n,
          onEmptyState: x
        }),
        f && (0, i.jsx)(J, {
          channel: n,
          onEmptyState: g
        }),
        h && (0, i.jsx)(q, {
          channel: n,
          onEmptyState: S
        }),
        T && (0, i.jsx)(O.A, {
          type: R.LG.HOME_EMPTY,
          textContent: t === R._b.TEXT ? D.Z.Messages.APP_LAUNCHER_HOME_EMPTY_STATE_SEARCH_SUGGEST_BODY : D.Z.Messages.APP_LAUNCHER_HOME_EMPTY_STATE_ACTIVITIES_BODY
        }),
        b && (0, i.jsx)(H.Z, {})
      ]
    })
  })
]
  });
}

function G() {
  return (0, i.jsxs)('div', {
className: w.developerShelfControlsContainer,
children: [
  (0, i.jsx)(u.Text, {
    className: w.developerShelfControlsLabel,
    variant: 'text-sm/normal',
    children: D.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_SHELF_SUBTITLE
  }),
  (0, i.jsx)(f.W, {
    hideSearch: !0
  })
]
  });
}

function z(e) {
  let {
searchQuery: n,
setSearchQuery: t,
placeholder: l
  } = e, r = a.useRef(null), [s, c] = a.useState(!1), d = a.useMemo(() => o().debounce(e => {
(0, h.yw)(B.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
  query: e,
  source: L.Z.entrypoint(),
  location: I.Vh.APP_LAUNCHER_HOME
});
  }, 400, {
leading: !1,
trailing: !0
  }), []), m = a.useCallback(() => t(''), [t]), p = a.useCallback(() => {
c(!0), (0, h.yw)(B.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
  source: L.Z.entrypoint(),
  location: I.Vh.APP_LAUNCHER_HOME
});
  }, []), _ = a.useCallback(() => {
c(!1);
  }, []), C = a.useCallback(e => {
!s && p(), t(e), d(e);
  }, [
s,
t,
p,
d
  ]);
  return a.useEffect(() => {
let e = r.current;
if (null == e)
  return;
let n = () => {
  !s && p();
};
return e.addEventListener('click', n), () => {
  e.removeEventListener('click', n);
};
  }, [
s,
p
  ]), (0, i.jsx)('div', {
className: w.searchBarContainer,
children: (0, i.jsx)(u.SearchBar, {
  ref: e => {
    var n;
    r.current = null !== (n = null == e ? void 0 : e.containerRef.current) && void 0 !== n ? n : null;
  },
  placeholder: l,
  query: n,
  onChange: C,
  onClear: m,
  size: u.SearchBar.Sizes.MEDIUM,
  onFocus: _,
  autoFocus: !0
})
  });
}

function X(e) {
  let {
channel: n,
entrypoint: t,
onEmptyState: l
  } = e, {
frecentApps: o,
loading: r
  } = (0, S.f)(n), s = t === R._b.VOICE, c = a.useMemo(() => {
let e = [];
for (let n of o)
  if (null != n.application) {
    if (s && !(0, T.ye)({
        application: n.application
      }))
      continue;
    e.push({
      application: n.application,
      isPartner: !1
    });
  }
return e;
  }, [
o,
s
  ]), u = D.Z.Messages.APP_LAUNCHER_HOME_RECENT_APPS_HEADER, d = u;
  s && (d = D.Z.Messages.APP_LAUNCHER_HOME_RECENT_APPS_HEADER_ACTIVITIES);
  let {
items: m,
handleViewMore: p
  } = ee(d, t === R._b.VOICE ? M.U4.LARGE_BANNER : M.U4.ROW, c, 8, R.L3.RECENT_APPS);
  a.useEffect(() => {
if (!0 !== r.current)
  0 !== m.length && (0, h.yw)(B.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
    num: m.length,
    section_name: R.L3.RECENT_APPS,
    location: R.G0.HOME,
    source: t
  });
  }, [
m.length,
t,
r
  ]);
  let _ = r.current,
C = !_ && 0 === m.length;
  return (a.useEffect(() => {
l(C);
  }, [
C,
l
  ]), _ || C) ? null : (0, i.jsxs)('div', {
children: [
  (0, i.jsx)(Z.Z, {
    title: u,
    buttonType: Z.Z.buttonTypes.VIEW_MORE,
    onClickViewButton: p
  }),
  (0, i.jsx)('div', {
    className: w.sectionContentContainer,
    children: (0, i.jsx)('div', {
      className: w.frecentList,
      children: m.map((e, t) => {
        let {
          application: a,
          isPartner: l
        } = e;
        return s ? (0, i.jsx)(M.qR, {
          channel: n,
          application: a,
          look: M.U4.ICON,
          isPartner: l,
          location: R.G0.HOME,
          sectionName: R.L3.RECENT_APPS,
          resultsPosition: t,
          isOneClickCTA: !0
        }, a.id) : (0, i.jsx)(M.kA, {
          application: a,
          look: M.U4.ICON,
          isPartner: l,
          location: R.G0.HOME,
          sectionName: R.L3.RECENT_APPS,
          resultsPosition: t
        }, a.id);
      })
    })
  })
]
  });
}

function q(e) {
  let {
channel: n,
onEmptyState: t
  } = e;
  (0, C.g)();
  let l = (0, _.Z)({
  guildId: n.getGuildId()
}),
o = M.U4.LARGE_BANNER,
{
  trackSectionImpressionRef: r
} = (0, y.Z)({
  sectionName: R.L3.ACTIVITIES,
  numItems: l.length,
  numVisibleItems: l.length
}),
{
  clickOnHomeActivityOpensAppDetail: s
} = P.m1.getCurrentConfig({
  location: 'ActivitiesShelfSection'
}, {
  autoTrackExposure: !1
}),
c = 0 === l.length;
  return (a.useEffect(() => {
t(c);
  }, [
t,
c
  ]), c) ? null : (0, i.jsxs)('div', {
children: [
  (0, i.jsx)('div', {
    ref: e => r.current = e,
    children: (0, i.jsx)(Z.Z, {
      title: D.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE
    })
  }),
  (0, i.jsx)('div', {
    className: w.sectionTwoColumnContentContainer,
    children: l.map((e, t) => {
      let {
        application: a
      } = e;
      return (0, i.jsx)(M.qR, {
        channel: n,
        application: a,
        look: o,
        location: I.Vh.APP_LAUNCHER_HOME,
        sectionName: R.L3.ACTIVITIES,
        resultsPosition: t,
        isOneClickCTA: !s
      }, a.id);
    })
  })
]
  });
}

function Q(e) {
  var n;
  let {
channel: t,
onEmptyState: l
  } = e, r = (0, v.LD)(t.guild_id, !0), {
commandsByActiveSection: s,
loading: c
  } = x.wi(t, {
commandTypes: [d.yU.CHAT]
  }, {
placeholderCount: 0,
limit: k.tn,
includeFrecency: !0
  }), u = a.useMemo(() => s.reduce((e, n) => {
let {
  section: t,
  data: i
} = n;
return i.length > 0 && e.add(t.id), e;
  }, new Set()), [s]), m = a.useMemo(() => {
var e, n;
return Object.values(null !== (n = null === (e = r.result) || void 0 === e ? void 0 : e.sections) && void 0 !== n ? n : {}).map(e => {
  let {
    descriptor: n
  } = e;
  return n;
}).filter(e => !(e.id in N.Tm) && u.has(e.id));
  }, [
null === (n = r.result) || void 0 === n ? void 0 : n.sections,
u
  ]), p = (0, g.h)(m), _ = R.L3.APPS_IN_THIS_SERVER, C = a.useMemo(() => o().compact(p.map(e => {
let {
  application: n
} = e;
return n;
  })).map(e => ({
application: e
  })), [p]), {
items: f,
handleViewMore: h
  } = ee(D.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER, M.U4.ROW, C, 4, _), {
trackSectionImpressionRef: A
  } = (0, y.Z)({
sectionName: _,
numItems: C.length,
numVisibleItems: f.length
  }), E = r.fetchState.fetching || c.current, P = !E && 0 === f.length;
  return (a.useEffect(() => {
l(P);
  }, [
P,
l
  ]), P) ? null : (0, i.jsxs)('div', {
children: [
  (0, i.jsx)('div', {
    ref: e => A.current = e,
    children: (0, i.jsx)(Z.Z, {
      title: D.Z.Messages.APP_LAUNCHER_HOME_APPS_IN_SERVER_HEADER,
      buttonType: Z.Z.buttonTypes.VIEW_MORE,
      onClickViewButton: h
    })
  }),
  (0, i.jsx)('div', {
    className: w.sectionRowsContentContainer,
    children: E ? W.map(e => (0, i.jsx)(j.Z, {
      look: M.U4.ROW
    }, e)) : f.map((e, n) => {
      let {
        application: t,
        isPartner: a
      } = e;
      return null != t ? (0, i.jsx)(M.kA, {
        application: t,
        isPartner: a,
        look: M.U4.ROW,
        sectionName: _,
        resultsPosition: n,
        location: I.Vh.APP_LAUNCHER_HOME
      }, t.id) : null;
    })
  })
]
  });
}

function J(e) {
  let {
channel: n,
onEmptyState: t
  } = e, {
fetchState: l,
recommendationsSections: o,
isInstallOnDemand: s
  } = function(e) {
let {
  channel: n,
  location: t
} = e, i = n.id;
a.useEffect(() => {
  (0, A.a)({
    channelId: i,
    location: t,
    withCommands: !1
  });
}, [
  i,
  t
]);
let {
  sectionDescriptors: l
} = x.wi(n, {
  commandTypes: [d.yU.CHAT]
}, {
  placeholderCount: 0,
  limit: k.tn,
  includeFrecency: !0
}), o = a.useCallback(e => !(null != l.find(n => n.id === e.id)), [l]), {
  fetchState: r,
  recommendationsSections: s
} = (0, c.cj)([E.ZP], () => ({
  fetchState: E.ZP.getFetchState({
    channelId: i,
    location: t,
    withCommands: !1
  }),
  recommendationsSections: E.ZP.getRecommendations({
    channelId: i,
    location: t,
    withCommands: !1
  })
}));
return {
  fetchState: r,
  recommendationsSections: s,
  isInstallOnDemand: o
};
  }({
channel: n,
location: r.I.APP_LAUNCHER_TEXT
  }), u = function(e) {
let {
  channel: n,
  recommendationsSections: t
} = e;
(0, C.g)();
let i = (0, _.Z)({
  guildId: n.getGuildId()
});
return a.useMemo(() => {
  if (!t.some(e => e.appends_remaining_activities))
    return V;
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
recommendationsSections: o
  }), m = l === E.M.FETCHING, p = !m && 0 === o.length;
  return (a.useEffect(() => {
t(p);
  }, [
p,
t
  ]), p) ? null : (0, i.jsx)(i.Fragment, {
children: m ? F.map((e, n) => {
  let {
    cards: t,
    look: a
  } = e;
  return (0, i.jsxs)('div', {
    children: [
      (0, i.jsx)(Z.Z.Loading, {}),
      (0, i.jsx)('div', {
        className: a === M.U4.ROW ? w.sectionRowsContentContainer : w.sectionTwoColumnContentContainer,
        children: t.map(e => (0, i.jsx)(j.Z, {
          look: a
        }, e))
      })
    ]
  }, n);
}) : o.map(e => (0, i.jsx)(K, {
  recommendationsSection: e,
  remainingActivities: u,
  isInstallOnDemand: s
}, e.key))
  });
}

function K(e) {
  let n, t, {
  recommendationsSection: l,
  remainingActivities: o,
  isInstallOnDemand: r
} = e,
c = l.section_title;
  switch (l.type) {
case s.i.BANNER_CARDS:
  n = M.U4.LARGE_BANNER;
  break;
case s.i.SMALL_BANNER_CARDS:
  n = M.U4.MEDIUM_BANNER;
  break;
default:
  n = M.U4.ROW;
  }
  let u = a.useMemo(() => {
  let e = l.items.map(e => {
    let {
      application: n,
      is_partner: t
    } = e;
    return {
      application: n,
      isPartner: t,
      installOnDemand: r(n)
    };
  });
  return l.appends_remaining_activities && e.push(...o.map(e => {
    let {
      application: n
    } = e;
    return {
      application: n,
      isPartner: !1,
      installOnDemand: !0
    };
  })), e;
}, [
  l.items,
  l.appends_remaining_activities,
  r,
  o
]),
d = l.key;
  switch (l.type) {
case s.i.BANNER_CARDS:
case s.i.SMALL_BANNER_CARDS:
  t = 6;
  break;
case s.i.EXPANDABLE_LIST:
default:
  t = 4;
  }
  let {
items: m,
handleViewMore: p
  } = ee(c, n, u, t, d), {
trackSectionImpressionRef: _
  } = (0, y.Z)({
sectionName: d,
numItems: u.length,
numVisibleItems: m.length
  }), C = l.type !== s.i.SMALL_BANNER_CARDS;
  return (0, i.jsxs)('div', {
children: [
  (0, i.jsx)('div', {
    ref: e => _.current = e,
    children: (0, i.jsx)(Z.Z, {
      title: l.section_title,
      buttonType: Z.Z.buttonTypes.VIEW_MORE,
      onClickViewButton: p
    })
  }),
  (0, i.jsx)('div', {
    className: n === M.U4.ROW ? w.sectionRowsContentContainer : w.sectionTwoColumnContentContainer,
    children: m.map((e, t) => {
      let {
        application: a,
        isPartner: l,
        installOnDemand: o
      } = e;
      return (0, i.jsx)(M.kA, {
        application: a,
        look: n,
        isPartner: l,
        sectionName: d,
        resultsPosition: t,
        location: I.Vh.APP_LAUNCHER_HOME,
        installOnDemand: o,
        enableVideoBanner: C
      }, a.id);
    })
  })
]
  });
}

function $(e) {
  let [n, t] = a.useState(!e);
  return [
n,
a.useCallback(function() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  t(e);
}, [])
  ];
}

function ee(e, n, t, i, l) {
  let {
pushHistory: o
  } = (0, b.hH)();
  return a.useMemo(() => t.length <= i ? {
items: t,
handleViewMore: void 0
  } : {
items: t.slice(0, i),
handleViewMore: () => {
  (0, h.yw)(B.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
    section_name: l,
    source: L.Z.entrypoint(),
    num: t.length
  }), o({
    type: b.gc.LIST,
    title: e,
    look: n,
    items: t,
    sectionName: l
  });
}
  }, [
t,
i,
l,
o,
e,
n
  ]);
}