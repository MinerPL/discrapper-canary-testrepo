"use strict";
var I, a, o, R, t, A, T, r, N, i, c, O, n, L;
e.r(E), e.d(E, {
  MAX_FAVORITES: function() {
    return D
  },
  MAX_FAVORITE_GIFS_SIZE: function() {
    return S
  },
  ROLE_SUBSCRIPTION_SUBSECTION: function() {
    return C
  },
  APPLICATION_SUBSCRIPTION_SUBSECTION: function() {
    return l
  },
  SOUNDBOARD_SUBSECTION: function() {
    return s
  },
  ProfileCustomizationSubsection: function() {
    return I
  },
  ProfileCustomizationScrollPositions: function() {
    return a
  },
  AccessibilityScrollPositions: function() {
    return o
  },
  UserSettingsScrollPositions: function() {
    return P
  },
  UserSettingsTypes: function() {
    return t
  },
  UserSettingsDelay: function() {
    return A
  },
  createEmptyEditInfo: function() {
    return M
  },
  ChangeEmailSteps: function() {
    return T
  },
  ChannelNotificationSettingsFlags: function() {
    return G
  },
  GuildNotificationSettingsFlags: function() {
    return U
  },
  ProtoAudioSettingsContextTypes: function() {
    return r
  }
});
let D = 250,
  S = 762880,
  C = "ROLE_SUBSCRIPTIONS",
  l = "APPLICATION_SUBSCRIPTION_SUBSECTION",
  s = "SOUNDBOARD_SUBSECTION";
(N = I || (I = {})).USER_PROFILE = "user_profile", N.GUILD = "guild", N.TRY_IT_OUT = "try_it_out", (a || (a = {})).TRY_IT_OUT = "try_it_out", (i = o || (o = {})).REDUCED_MOTION = "reduced_motion", i.SYNC_PROFILE_THEME_WITH_USER_THEME = "sync_profile_theme_with_user_theme", i.LEGACY_CHAT_INPUT = "legacy_chat_input", (R || (R = {})).HARDWARE_ACCELERATION = "hardware_acceleration";
let P = {
  ProfileCustomizationScrollPositions: a,
  AccessibilityScrollPositions: o,
  VoiceAndVideoScrollPositions: R
};

function M() {
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
  }
}(c = t || (t = {}))[c.PRELOADED_USER_SETTINGS = 1] = "PRELOADED_USER_SETTINGS", c[c.FRECENCY_AND_FAVORITES_SETTINGS = 2] = "FRECENCY_AND_FAVORITES_SETTINGS", c[c.TEST_SETTINGS = 3] = "TEST_SETTINGS", (O = A || (A = {}))[O.INFREQUENT_USER_ACTION = 0] = "INFREQUENT_USER_ACTION", O[O.FREQUENT_USER_ACTION = 10] = "FREQUENT_USER_ACTION", O[O.SLOW_USER_ACTION = 20] = "SLOW_USER_ACTION", O[O.AUTOMATED = 30] = "AUTOMATED", O[O.DAILY = 86400] = "DAILY", (n = T || (T = {}))[n.CONFIRM_START = 0] = "CONFIRM_START", n[n.CONFIRM_CODE = 1] = "CONFIRM_CODE", n[n.EMAIL_AND_PASSWORD = 2] = "EMAIL_AND_PASSWORD";
let G = {
    NEW_FORUM_THREADS_ON: 16384,
    NEW_FORUM_THREADS_OFF: 8192,
    OPT_IN_ENABLED: 4096,
    FAVORITED: 2048,
    UNREADS_ALL_MESSAGES: 1024,
    UNREADS_ONLY_MENTIONS: 512
  },
  U = {
    OPT_IN_CHANNELS_ON: 16384,
    OPT_IN_CHANNELS_OFF: 8192,
    UNREADS_ONLY_MENTIONS: 4096,
    UNREADS_ALL_MESSAGES: 2048
  };
(L = r || (r = {})).USER = "user", L.STREAM = "stream"