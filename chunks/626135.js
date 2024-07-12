n.r(t), n.d(t, {
  AnalyticEventConfigs: function() {
return S;
  },
  AnalyticsContext: function() {
return p;
  },
  AnalyticsSchema: function() {
return c;
  },
  addExtraAnalyticsDecorator: function() {
return g;
  },
  debugLogEvent: function() {
return C;
  },
  expandEventProperties: function() {
return R;
  },
  expandLocation: function() {
return A;
  },
  setUTMContext: function() {
return O;
  },
  trackNetworkAction: function() {
return D;
  }
}), n(653041), n(47120);
var r = n(470079),
  i = n(990547),
  a = n(570140),
  o = n(565384),
  s = n(569611),
  l = n(97145),
  u = n(857192),
  c = n(747161),
  d = n(848479),
  _ = n(960048),
  E = n(981631),
  f = n(94752),
  h = n(689938);
let p = r.createContext({
location: {}
  }),
  m = {},
  I = performance.now(),
  T = [];

function g(e) {
  T.push(e);
}
let S = {
  [E.rMx.APP_OPENED]: {
throttlePeriod: 300000,
throttleKeys: () => []
  },
  [E.rMx.APP_BACKGROUND]: {
throttlePeriod: 120000,
throttleKeys: () => []
  },
  [E.rMx.ACK_MESSAGES]: {
throttlePeriod: 900000,
throttleKeys: e => [
  e.guild_id,
  e.channel_id,
  e.location_section
]
  },
  [E.rMx.ACTIVITIES_RESTRICTRED_CSP_VIOLATION]: {
throttlePeriod: 86400000,
throttleKeys: e => [e.application_id],
throttlePercent: 0.001
  },
  [E.rMx.GUILD_VIEWED]: {
throttlePeriod: 900000,
throttleKeys: e => [
  e.guild_id,
  e.is_pending
]
  },
  [E.rMx.FRIENDS_LIST_VIEWED]: {
throttlePeriod: 900000,
throttleKeys: e => [e.tab_opened]
  },
  [E.rMx.NOW_PLAYING_CARD_HOVERED]: {
throttlePeriod: 900000,
throttleKeys: e => [e.tab_opened]
  },
  [E.rMx.START_SPEAKING]: {
throttlePeriod: 900000,
throttleKeys: e => [e.server]
  },
  [E.rMx.START_LISTENING]: {
throttlePeriod: 900000,
throttleKeys: e => [e.server]
  },
  [E.rMx.ACTIVITY_UPDATED]: {
throttlePeriod: 60000,
throttleKeys: e => [e.application_id],
deduplicate: !0
  },
  [E.rMx.CHANNEL_OPENED]: {
throttlePeriod: 900000,
throttleKeys: e => null != e.channel_static_route ? [
  e.guild_id,
  e.channel_static_route,
  e.channel_view
] : [
  e.channel_id,
  e.channel_view
]
  },
  [E.rMx.TEXT_IN_VOICE_OPENED]: {
throttlePeriod: 86400000,
throttleKeys: e => [e.channel_id]
  },
  [E.rMx.NOTIFICATION_VIEWED]: {
throttlePeriod: 900000,
throttleKeys: e => [e.notif_type]
  },
  [E.rMx.MEMBER_LIST_VIEWED]: {
throttlePeriod: 900000,
throttleKeys: e => [e.channel_id]
  },
  [E.rMx.DM_LIST_VIEWED]: {
throttlePeriod: 900000,
throttleKeys: e => [e.channel_id]
  },
  [E.rMx.NAV_DRAWER_OPENED]: {
throttlePeriod: 900000,
throttleKeys: () => []
  },
  [E.rMx.KEYBOARD_SHORTCUT_USED]: {
throttlePeriod: 120000,
throttleKeys: e => {
  var t;
  return [
    e.shortcut_name,
    e.location_object,
    ...null !== (t = e.source_class_list) && void 0 !== t ? t : []
  ];
}
  },
  [E.rMx.QUICKSWITCHER_OPENED]: {
throttlePeriod: 10000,
throttleKeys: () => []
  },
  [E.rMx.CHAT_INPUT_COMPONENT_VIEWED]: {
throttlePeriod: 900000,
throttleKeys: e => [e.type]
  },
  [E.rMx.ROLE_PAGE_VIEWED]: {
throttlePeriod: 120000,
throttleKeys: e => [
  e.role_id,
  e.tab_opened
]
  },
  [E.rMx.VIDEO_INPUT_INITIALIZED]: {
throttlePeriod: 300000,
throttleKeys: () => []
  },
  [E.rMx.HUB_ONBOARDING_CAROUSEL_SCROLLED]: {
throttlePeriod: 900000,
throttleKeys: () => []
  },
  [E.rMx.HUB_STUDENT_PROMPT_CLICKED]: {
throttlePeriod: 900000,
throttleKeys: () => []
  },
  [E.rMx.RPC_SERVER_ERROR_CAUGHT]: {
throttlePeriod: 86400000,
throttleKeys: () => []
  },
  [E.rMx.RPC_COMMAND_SENT]: {
throttlePeriod: 86400000,
throttleKeys: e => [
  e.application_id,
  e.command
],
throttlePercent: 0.001
  },
  [E.rMx.RPC_SUBSCRIPTION_REQUESTED]: {
throttlePeriod: 86400000,
throttleKeys: e => [
  e.application_id,
  e.event
],
throttlePercent: 0.001
  },
  [E.rMx.CHANNEL_BANNER_VIEWED]: {
throttlePeriod: 86400000,
throttleKeys: e => [
  e.banner_type,
  e.channel_id
]
  },
  [E.rMx.PREMIUM_UPSELL_VIEWED]: {
throttlePeriod: 60000,
throttleKeys: e => [e.type]
  },
  [E.rMx.FORUM_CHANNEL_SEARCHED]: {
throttlePeriod: 60000,
throttleKeys: e => [
  e.guild_id,
  e.channel_id
]
  },
  [E.rMx.FORUM_CHANNEL_SCROLLED]: {
throttlePeriod: 900000,
throttleKeys: e => [
  e.guild_id,
  e.channel_id
]
  },
  [E.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: {
throttlePeriod: 60000,
throttleKeys: e => [e.user_id]
  },
  [E.rMx.DM_PROFILE_VIEWED]: {
throttlePeriod: 3600000,
throttleKeys: e => [e.viewed_profile_user_id]
  },
  [E.rMx.MEDIA_VIEWER_SESSION_COMPLETED]: {
throttlePercent: 0.01
  },
  [E.rMx.SUMMARIES_UNREAD_BAR_VIEWED]: {
throttlePeriod: 300000,
throttleKeys: e => [e.channel_id]
  },
  [E.rMx.ACTIVITY_CARDS_VIEWED]: {
throttlePeriod: 900000,
throttleKeys: e => [
  e.context,
  e.guild_id
]
  },
  [E.rMx.GUILD_TOOLTIP_SHOWN]: {
throttlePeriod: 900000,
throttleKeys: e => [e.guild_id]
  },
  [E.rMx.ACK_COMMUNITY_MESSAGES]: {
throttlePeriod: 900000,
throttleKeys: e => [e.channel_id]
  },
  [E.rMx.REDESIGN_NAV_BAR_CLICKED]: {
throttlePeriod: 900000,
throttleKeys: e => [e.tab]
  },
  [E.rMx.BROADCAST_START_BUTTON_HOVERED]: {
throttlePeriod: 60000,
throttleKeys: () => []
  },
  [E.rMx.BROADCAST_LIST_VISITED]: {
throttlePeriod: 300000,
throttleKeys: () => []
  },
  [E.rMx.CHANNEL_LIST_END_REACHED]: {
throttlePeriod: 900000,
throttleKeys: e => [e.guild_id]
  },
  [E.rMx.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: {
throttlePeriod: 60000,
throttleKeys: e => [
  e.guild_id,
  e.channel_id
]
  },
  [E.rMx.LIVE_ACTIVITY_SETTINGS_UPDATED]: {
throttlePeriod: 3600000,
throttleKeys: () => []
  },
  [E.rMx.KEYWORD_FILTER_MATCH]: {
throttlePeriod: 900000,
throttleKeys: e => [e.message_id]
  }
};

function A(e) {
  return 'string' == typeof e ? {
location: e
  } : {
location: e.page,
location_page: e.page,
location_section: e.section,
location_object: e.object,
location_object_type: e.objectType
  };
}
let N = () => f.E.NONE,
  v = (0, i.trackMaker)({
analyticEventConfigs: S,
dispatcher: a.Z,
TRACK_ACTION_NAME: 'TRACK'
  });

function O(e) {
  return m = e;
}

function R(e) {
  var t, n, r, i, a;
  let o = e;
  if (!o && (o = {}), null != o.location) {
let {
  location: e,
  ...t
} = o;
o = {
  ...t,
  ...A(e)
};
  }
  if (null != o.source) {
;
let {
  source: e,
  ...t
} = o;
o = {
  ...t,
  ...'string' == typeof(a = e) ? {
    source: a
  } : {
    source_page: a.page,
    source_section: a.section,
    source_object: a.object,
    source_object_type: a.objectType,
    source_promotion_id: a.promotionId
  }
};
  }
  o.client_performance_cpu = d.Z.getCurrentCPUUsagePercent(), o.client_performance_memory = d.Z.getCurrentMemoryUsageKB(), o.cpu_core_count = d.Z.getCPUCoreCount(), o.accessibility_features = N(), o.rendered_locale = h.Z.getLocale(), o.uptime_app = Math.floor((performance.now() - I) / 1000);
  let s = d.Z.getProcessUptime();
  null != s && (o.uptime_process_renderer = Math.floor(s));
  let {
utmSource: l,
utmMedium: u,
utmCampaign: c,
utmContent: _
  } = m;
  return o.utm_source = null !== (t = o.utm_source) && void 0 !== t ? t : l, o.utm_medium = null !== (n = o.utm_medium) && void 0 !== n ? n : u, o.utm_campaign = null !== (r = o.utm_campaign) && void 0 !== r ? r : c, o.utm_content = null !== (i = o.utm_content) && void 0 !== i ? i : _, T.forEach(e => e(o)), o;
}

function C(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  u.default.isLoggingAnalyticsEvents && console.info('AnalyticsUtils.track(...):', e, t), n ? s.Hj('Analytics', e, t) : s.Hj('Analytics', e);
}
let y = (0, i.trackMaker)({
  analyticEventConfigs: S,
  dispatcher: a.Z,
  TRACK_ACTION_NAME: 'TRACK'
});

function D(e, t) {
  let n = R({
location: (0, o.k$)(),
...t
  });
  (0, o.dT)(e, {
type: 'action',
...t
  }), C(e, n), y(e, n);
}
t.default = {
  ...i,
  getCampaignParams: i.getCampaignParams,
  setSystemAccessibilityFeatures: function(e) {
N = e;
  },
  expandEventProperties: R,
  track: function(e, t) {
let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
if (!l.R.includes(e) && _.Z.addBreadcrumb({
    category: 'analytics',
    message: ''.concat(e)
  }), null != n.throttlePercent && Math.random() > n.throttlePercent)
  return Promise.resolve();
let r = R(t);
return C(e, r, n.logEventProperties), v(e, r, {
  flush: n.flush,
  fingerprint: n.fingerprint
});
  }
};