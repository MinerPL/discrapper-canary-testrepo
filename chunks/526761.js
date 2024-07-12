var n, _, a, i, o, E, s, c, I, R, T, u, l, A, N, d, O;
r.d(e, {
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
return f;
  },
  Y_: function() {
return a;
  },
  cP: function() {
return D;
  },
  fy: function() {
return c;
  },
  h1: function() {
return _;
  },
  ic: function() {
return g;
  },
  oX: function() {
return S;
  },
  rP: function() {
return i;
  },
  to: function() {
return E;
  },
  u0: function() {
return R;
  },
  vY: function() {
return p;
  },
  vc: function() {
return P;
  },
  yP: function() {
return s;
  }
});
let S = 250,
  p = 762880,
  D = 'ROLE_SUBSCRIPTIONS',
  f = 'APPLICATION_SUBSCRIPTION_SUBSECTION',
  L = 'SOUNDBOARD_SUBSECTION';
(T = n || (n = {})).USER_PROFILE = 'user_profile', T.GUILD = 'guild', T.TRY_IT_OUT = 'try_it_out', (_ || (_ = {})).CUSTOM_APP_ICONS = 'custom_app_icon', (a || (a = {})).TRY_IT_OUT = 'try_it_out', (u = i || (i = {})).REDUCED_MOTION = 'reduced_motion', u.SYNC_PROFILE_THEME_WITH_USER_THEME = 'sync_profile_theme_with_user_theme', u.LEGACY_CHAT_INPUT = 'legacy_chat_input', (o || (o = {})).HARDWARE_ACCELERATION = 'hardware_acceleration', (l = E || (E = {})).DM_SAFETY_ALERTS = 'dm_safety_alerts', l.MESSAGE_REQUESTS = 'message_requests', l.EXPLICIT_MEDIA_REDACTION = 'explicit_media_redaction';
let h = {
  ProfileCustomizationScrollPositions: a,
  AccessibilityScrollPositions: i,
  VoiceAndVideoScrollPositions: o,
  AppearanceScrollPositions: _,
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
(A = s || (s = {}))[A.PRELOADED_USER_SETTINGS = 1] = 'PRELOADED_USER_SETTINGS', A[A.FRECENCY_AND_FAVORITES_SETTINGS = 2] = 'FRECENCY_AND_FAVORITES_SETTINGS', A[A.TEST_SETTINGS = 3] = 'TEST_SETTINGS', (N = c || (c = {}))[N.INFREQUENT_USER_ACTION = 0] = 'INFREQUENT_USER_ACTION', N[N.FREQUENT_USER_ACTION = 10] = 'FREQUENT_USER_ACTION', N[N.SLOW_USER_ACTION = 20] = 'SLOW_USER_ACTION', N[N.AUTOMATED = 30] = 'AUTOMATED', N[N.DAILY = 86400] = 'DAILY', (d = I || (I = {}))[d.CONFIRM_START = 0] = 'CONFIRM_START', d[d.CONFIRM_CODE = 1] = 'CONFIRM_CODE', d[d.CHANGE_EMAIL_REASONS = 2] = 'CHANGE_EMAIL_REASONS', d[d.EMAIL_AND_PASSWORD = 3] = 'EMAIL_AND_PASSWORD', d[d.COMPLETE = 4] = 'COMPLETE';
let g = {
NEW_FORUM_THREADS_ON: 16384,
NEW_FORUM_THREADS_OFF: 8192,
OPT_IN_ENABLED: 4096,
FAVORITED: 2048,
UNREADS_ALL_MESSAGES: 1024,
UNREADS_ONLY_MENTIONS: 512
  },
  P = {
OPT_IN_CHANNELS_ON: 16384,
OPT_IN_CHANNELS_OFF: 8192,
UNREADS_ONLY_MENTIONS: 4096,
UNREADS_ALL_MESSAGES: 2048
  };
(O = R || (R = {})).USER = 'user', O.STREAM = 'stream';