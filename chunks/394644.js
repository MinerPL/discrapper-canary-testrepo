s.d(t, {
  Gj: function() {
return j;
  },
  Pt: function() {
return v;
  },
  VO: function() {
return U;
  },
  ji: function() {
return y;
  },
  q8: function() {
return G;
  }
}), s(639576), s(536091), s(47120), s(653041);
var n = s(470079),
  a = s(442837),
  i = s(704215),
  r = s(493544),
  o = s(634894),
  l = s(211242),
  c = s(770471),
  d = s(924557),
  _ = s(706140),
  E = s(592204),
  u = s(610697),
  T = s(631885),
  I = s(223639),
  S = s(160913),
  N = s(725727),
  C = s(977156),
  m = s(237292),
  A = s(314897),
  h = s(283595),
  g = s(663389),
  O = s(594174),
  p = s(202527),
  R = s(695346),
  x = s(620163),
  M = s(295545),
  D = s(168308),
  f = s(839469),
  P = s(726985),
  L = s(46140),
  Z = s(689938);

function b(e) {
  let t = [{
    header: Z.Z.Messages.USER_SETTINGS,
    settings: [
      P.s6.ACCOUNT,
      P.s6.GAMES,
      P.s6.PROFILE_CUSTOMIZATION,
      P.s6.PRIVACY_AND_SAFETY,
      P.s6.PRIVACY_FAMILY_CENTER,
      P.s6.AUTHORIZED_APPS,
      P.s6.SESSIONS,
      P.s6.CONNECTIONS,
      P.s6.CLIPS,
      P.s6.FRIEND_REQUESTS
    ]
  },
  {
    header: Z.Z.Messages.BILLING_SETTINGS,
    divider: !0,
    settings: [
      P.s6.PREMIUM,
      P.s6.GUILD_BOOSTING,
      P.s6.SUBSCRIPTIONS,
      P.s6.GIFT_INVENTORY,
      P.s6.BILLING
    ]
  },
  {
    header: Z.Z.Messages.APP_SETTINGS,
    divider: !0,
    settings: [
      P.s6.APPEARANCE,
      P.s6.ACCESSIBILITY,
      P.s6.VOICE_AND_VIDEO,
      P.s6.POGGERMODE,
      P.s6.CHAT,
      P.s6.NOTIFICATIONS,
      P.s6.KEYBINDS,
      P.s6.LANGUAGE,
      P.s6.WINDOW_SETTINGS,
      P.s6.LINUX_SETTINGS,
      P.s6.STREAMER_MODE,
      P.s6.SPEED_TEST,
      P.s6.SETTINGS_ADVANCED
    ]
  },
  {
    divider: !0,
    settings: [
      P.s6.CHANGELOG,
      P.s6.MERCHANDISE,
      P.s6.HYPESQUAD,
      P.s6.EXPERIMENTS,
      P.s6.DEVELOPER_OPTIONS,
      P.s6.HOTSPOT_OPTIONS,
      P.s6.DISMISSIBLE_CONTENT_OPTIONS,
      P.s6.PAYMENT_FLOW_MODALS,
      P.s6.DESIGN_SYSTEMS,
      P.s6.TEXT_PLAYGROUND,
      P.s6.TEXT_COMPONENTS,
      P.s6.PROFILE_EFFECTS_PREVIEW_TOOL,
      P.s6.QUEST_PREVIEW_TOOL
    ]
  },
  {
    divider: !0,
    settings: [P.s6.LOGOUT]
  },
  {
    divider: !0,
    settings: [
      P.s6.SOCIAL_LINKS,
      P.s6.CLIENT_DEBUG_INFO
    ]
  }
],
s = {
  header: Z.Z.Messages.ACTIVITY_SETTINGS,
  divider: !0,
  settings: [
    P.s6.ACTIVITY_PRIVACY,
    P.s6.REGISTERED_GAMES,
    P.s6.OVERLAY
  ]
};
  return e ? t : t.toSpliced(3, 0, s);
}

function v() {
  var e, t;
  let s = (0, N.YO)().length,
n = (0, S.U)(),
r = (0, a.e7)([g.Z], () => g.Z.getProps().impressionSource),
f = (0, T.gU)(),
P = (0, D.bC)(),
Z = (0, d.Go)(),
[b] = (0, _.c)(Z ? [i.z.CLIPS_SETTINGS_BETA_TAG] : []),
v = 'useGenerateUserSettingsSections';
  (0, o.j)({
location: v + ' auto on',
autoTrackExposure: !0
  }), (0, o.j)({
location: v + ' auto off',
autoTrackExposure: !1
  });
  let {
shouldMergeGameSettings: j
  } = p.b.useExperiment({
location: 'settings'
  }), B = (0, M.eA)({
location: 'settings'
  }), U = (0, E.Xo)({
location: 'settings'
  }), G = null !== (t = null === (e = O.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t, F = (0, m.y0)({
location: 'settings'
  }), y = (0, l.Q)(), V = (0, C.Zy)({
location: L.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY
  }), {
enabled: Y
  } = I.Z.useExperiment({
location: 'UserSettingsInventory'
  }, {
autoTrackExposure: !0
  }), w = (0, a.e7)([h.Z], () => h.Z.hasLibraryApplication()), k = (0, a.e7)([A.default], () => A.default.hasTOTPEnabled()), {
canBroadcast: H
  } = c.Z.useExperiment({
location: 'user_settings_activity_privacy'
  }, {
autoTrackExposure: !0
  }), W = R.Sb.useSetting(), K = (0, u.Z)();
  return (0, x.i)({
unseenGiftCount: s,
showPrepaidPaymentPastDueWarning: n,
impressionSource: r,
numOfPendingFamilyRequests: f,
isOverlaySupported: P,
isClipsBetaTagShowing: b === i.z.CLIPS_SETTINGS_BETA_TAG,
shouldMergeGameSettings: j,
isUserSettingsSearchEnabled: B,
isKeywordFilteringEnabled: U,
isStaff: G,
isInappropriateConversationWarningEnabled: F,
paymentsBlocked: y,
isEligibleForQuests: V,
showGiftNitro: Y,
isStricterMessageRequestsEnabled: K,
hasLibraryApplication: w,
hasTOTPEnabled: k,
canBroadcastActivity: H,
developerMode: W
  });
}

function j(e) {
  let {
searchResults: t
  } = (0, f.E)(), s = v();
  if (!(0, M.eA)({
  location: 'settings'
}))
return new Set();
  let n = s[e],
a = Object.fromEntries(Object.entries(s).filter(e => {
  let [t, s] = e;
  return s.section === n.section;
})),
i = Object.fromEntries(Object.entries(a).filter(e => {
  let [t, {
    parent: s,
    section: a
  }] = e;
  return null != s && a === n.section;
}).map(e => {
  let [t, {
    parent: s
  }] = e;
  return [
    t,
    s
  ];
})),
r = new Set(),
o = e => {
  let t = a[e];
  if (null == t)
    return;
  r.add(e);
  let s = t.parent;
  null != s && o(s);
},
l = e => {
  for (let t of (r.add(e), Object.entries(i).filter(t => {
      let [s, n] = t;
      return n === e;
    }).map(e => {
      let [t] = e;
      return t;
    })))
    l(t);
};
  for (let e of t.filter(e => e in a))
if (!r.has(e)) {
  if (null != a[e].element && null == a[e].parent) {
    r.clear();
    break;
  }
  Object.values(i).includes(e) && l(e), o(e);
}
  return r;
}

function B(e, t) {
  let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
n = arguments.length > 3 ? arguments[3] : void 0,
a = [],
i = F(t),
o = function(e, t) {
  let s = new Map();
  return null != t && t.forEach(t => {
    let n = e[t].parent;
    for (; null != n && null != e[n].parent;)
      n = e[n].parent;
    if (null != n) {
      var a;
      let e = null !== (a = s.get(n)) && void 0 !== a ? a : 0;
      s.set(n, e + 1);
    }
  }), s;
}(t, new Set(Array.from(null != n ? n : []).filter(e => i.has(e))));
  return e.forEach(e => {
0 !== e.settings.length && (!0 === e.divider && a.push({
  section: r.ID.DIVIDER
}), null != e.header && a.push({
  section: r.ID.HEADER,
  label: e.header
}), e.settings.forEach(e => {
  a.push({
    ...t[e],
    tabPredicate: () => {
      var t, s, a;
      return null == n || (t = e, s = n, a = o, t === P.s6.SEARCH_NO_RESULTS && 0 === s.size || a.has(t) || s.has(t));
    },
    searchFilterCount: !s || (null == n ? void 0 : n.has(e)) ? void 0 : o.get(e)
  });
}));
  }), a;
}

function U() {
  let e = v(),
{
  shouldMergeGameSettings: t
} = p.b.useExperiment({
  location: 'settings'
}),
s = n.useMemo(() => b(t), [t]);
  return n.useMemo(() => B(s, e), [
s,
e
  ]);
}

function G(e) {
  let t = v(),
s = function() {
  let {
    shouldMergeGameSettings: e
  } = p.b.useExperiment({
    location: 'settings'
  }), t = b(e);
  return n.useMemo(() => [{
    header: Z.Z.Messages.SEARCH_RESULTS_SECTION_LABEL,
    settings: [
      ...t.map(e => {
        let {
          settings: t
        } = e;
        return t;
      }).flat(1),
      P.s6.SEARCH_NO_RESULTS
    ]
  }], [t]);
}(),
a = (0, M.c3)({
  location: 'settings'
});
  return n.useMemo(() => B(s, t, a, new Set(e)), [
s,
t,
a,
e
  ]);
}

function F(e) {
  return new Map(Object.entries(e).filter(e => {
let [t, s] = e;
return s.section !== r.ID.CUSTOM && null != s.searchableTitles && (null == s.predicate || s.predicate());
  }));
}

function y(e) {
  return Array.from(F(e).entries()).map(e => {
let [t, s] = e;
return [
  t,
  s.searchableTitles
];
  });
}