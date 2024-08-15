var n, a, o, i, _, E, s, c, I, u, l, R, A, T, d, N, p;
r.d(t, {
  Ax: function() {
return I;
  },
  GA: function() {
return L;
  },
  JC: function() {
return C;
  },
  KQ: function() {
return h;
  },
  NB: function() {
return n;
  },
  XZ: function() {
return D;
  },
  Y_: function() {
return o;
  },
  cP: function() {
return S;
  },
  fy: function() {
return c;
  },
  h1: function() {
return a;
  },
  ic: function() {
return g;
  },
  oX: function() {
return O;
  },
  rP: function() {
return i;
  },
  to: function() {
return E;
  },
  u0: function() {
return u;
  },
  vY: function() {
return f;
  },
  vc: function() {
return M;
  },
  yP: function() {
return s;
  }
});
let O = 250,
  f = 762880,
  S = 'ROLE_SUBSCRIPTIONS',
  D = 'APPLICATION_SUBSCRIPTION_SUBSECTION',
  L = 'SOUNDBOARD_SUBSECTION';
(l = n || (n = {})).USER_PROFILE = 'user_profile', l.GUILD = 'guild', l.TRY_IT_OUT = 'try_it_out', (a || (a = {})).CUSTOM_APP_ICONS = 'custom_app_icon', (o || (o = {})).TRY_IT_OUT = 'try_it_out', (R = i || (i = {})).REDUCED_MOTION = 'reduced_motion', R.SYNC_PROFILE_THEME_WITH_USER_THEME = 'sync_profile_theme_with_user_theme', R.LEGACY_CHAT_INPUT = 'legacy_chat_input', (_ || (_ = {})).HARDWARE_ACCELERATION = 'hardware_acceleration', (A = E || (E = {})).DM_SAFETY_ALERTS = 'dm_safety_alerts', A.MESSAGE_REQUESTS = 'message_requests', A.EXPLICIT_MEDIA_REDACTION = 'explicit_media_redaction';
let h = {
  ProfileCustomizationScrollPositions: o,
  AccessibilityScrollPositions: i,
  VoiceAndVideoScrollPositions: _,
  AppearanceScrollPositions: a,
  PrivacyAndSafetyScrollPositions: E
};

function C() {
  return {
protoToSave: void 0,
timeout: void 0,
timeoutDelay: Number.MIN_SAFE_INTEGER,
rateLimited: !1,
cleanupFuncs: [],
loaded: !1,
loading: !1,
triggeredMigrations: !1,
offlineEditDataVersion: void 0
  };
}
(T = s || (s = {}))[T.PRELOADED_USER_SETTINGS = 1] = 'PRELOADED_USER_SETTINGS', T[T.FRECENCY_AND_FAVORITES_SETTINGS = 2] = 'FRECENCY_AND_FAVORITES_SETTINGS', T[T.TEST_SETTINGS = 3] = 'TEST_SETTINGS', (d = c || (c = {}))[d.INFREQUENT_USER_ACTION = 0] = 'INFREQUENT_USER_ACTION', d[d.FREQUENT_USER_ACTION = 10] = 'FREQUENT_USER_ACTION', d[d.SLOW_USER_ACTION = 20] = 'SLOW_USER_ACTION', d[d.AUTOMATED = 30] = 'AUTOMATED', d[d.DAILY = 86400] = 'DAILY', (N = I || (I = {}))[N.CONFIRM_START = 0] = 'CONFIRM_START', N[N.CONFIRM_CODE = 1] = 'CONFIRM_CODE', N[N.CHANGE_EMAIL_REASONS = 2] = 'CHANGE_EMAIL_REASONS', N[N.CHANGE_EMAIL_WARNING = 3] = 'CHANGE_EMAIL_WARNING', N[N.EMAIL_AND_PASSWORD = 4] = 'EMAIL_AND_PASSWORD', N[N.COMPLETE = 5] = 'COMPLETE';
let g = {
NEW_FORUM_THREADS_ON: 16384,
NEW_FORUM_THREADS_OFF: 8192,
OPT_IN_ENABLED: 4096,
FAVORITED: 2048,
UNREADS_ALL_MESSAGES: 1024,
UNREADS_ONLY_MENTIONS: 512
  },
  M = {
OPT_IN_CHANNELS_ON: 16384,
OPT_IN_CHANNELS_OFF: 8192,
UNREADS_ONLY_MENTIONS: 4096,
UNREADS_ALL_MESSAGES: 2048
  };
(p = u || (u = {})).USER = 'user', p.STREAM = 'stream';