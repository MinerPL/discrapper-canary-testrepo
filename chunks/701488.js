"use strict";
n.d(t, {
  AC: function() {
    return er
  },
  Br: function() {
    return $
  },
  ES: function() {
    return _
  },
  Ec: function() {
    return Z
  },
  Es: function() {
    return et
  },
  Ev: function() {
    return L
  },
  Fr: function() {
    return g
  },
  Fu: function() {
    return J
  },
  GR: function() {
    return k
  },
  IF: function() {
    return Y
  },
  In: function() {
    return X
  },
  JT: function() {
    return Q
  },
  K8: function() {
    return i
  },
  MO: function() {
    return b
  },
  N4: function() {
    return K
  },
  OF: function() {
    return e_
  },
  PD: function() {
    return B
  },
  Pc: function() {
    return es
  },
  QJ: function() {
    return ee
  },
  S4: function() {
    return s
  },
  SL: function() {
    return W
  },
  Si: function() {
    return en
  },
  V5: function() {
    return U
  },
  W0: function() {
    return d
  },
  Ws: function() {
    return r
  },
  Zc: function() {
    return j
  },
  ag: function() {
    return u
  },
  am: function() {
    return V
  },
  cE: function() {
    return c
  },
  cc: function() {
    return p
  },
  dv: function() {
    return P
  },
  eB: function() {
    return ei
  },
  f9: function() {
    return q
  },
  fE: function() {
    return F
  },
  jT: function() {
    return x
  },
  js: function() {
    return G
  },
  l4: function() {
    return H
  },
  m2: function() {
    return a
  },
  mI: function() {
    return w
  },
  n1: function() {
    return y
  },
  qG: function() {
    return z
  },
  qm: function() {
    return v
  },
  um: function() {
    return eo
  },
  wP: function() {
    return eu
  },
  wT: function() {
    return el
  },
  xK: function() {
    return l
  }
}), n(47120);
var i, r, s, o, a, l, u, _, d, c, E, I, T, h, S, f, N, A, m, O, R = n(911969),
  C = n(981631);
let p = 160,
  g = /^https?:\/\/(?:www\.)?(twitch\.tv\/(.+)|youtube.com\/watch\?v=)/,
  L = "438122941302046720",
  v = "773336526917861400",
  D = "880218832743055411",
  M = "1050941315912835122",
  P = "1019001450015100928",
  y = "1019304931275968512",
  U = "1019326282124623872",
  b = "1070087967294631976",
  G = "1007373802981822582",
  w = "1039835161136746497",
  k = "852509694341283871",
  B = "903769130790969345",
  x = "880218394199220334",
  V = "1078728822972764312",
  Z = "947957217959759964",
  H = "832013003968348200",
  F = "832012774040141894",
  Y = "832025144389533716",
  j = "755827207812677713",
  W = "879863686565621790",
  K = "902271654783242291",
  z = "1037680572660727838",
  q = "945737671223947305",
  X = "1011683823555199066",
  Q = "1234546995360694434",
  J = "1214629548377768066",
  $ = "1196535986226745437",
  ee = "1199817737728442569",
  et = "https://discord.sjc1.qualtrics.com/jfe/form/SV_6SvWAOxlcSRWiEu",
  en = {
    SMALL: 64,
    LARGE: 160
  },
  ei = ["in_development", "activities_team", "employee_release"];
(E = i || (i = {})).ADS = "ADS", E.FAILED_LOAD = "FAILED_LOAD", E.LAGGING = "LAGGING", E.CONFUSING = "CONFUSING", E.NOT_FUN = "NOT_FUN", E.OTHER = "OTHER", (I = r || (r = {}))[I.PLAY = 0] = "PLAY", I[I.SPECTATE = 1] = "SPECTATE", (T = s || (s = {})).DESKTOP = "desktop", T.MOBILE = "mobile", (h = o || (o = {})).BETRAYAL_MARKETING_TOOLTIP = "BETRAYAL_MARKETING_TOOLTIP", h.FISHINGTON_MARKETING_TOOLTIP = "FISHINGTON_MARKETING_TOOLTIP", h.POKER_MARKETING_TOOLTIP = "POKER_MARKETING_TOOLTIP", h.YOUTUBE_MARKETING_TOOLTIP = "YOUTUBE_MARKETING_TOOLTIP", (S = a || (a = {}))[S.NO_UPDATE = 0] = "NO_UPDATE", S[S.ACTIVITY_STATE_UPDATE = 1] = "ACTIVITY_STATE_UPDATE", S[S.ACTIVITY_STARTED = 2] = "ACTIVITY_STARTED", S[S.ACTIVITY_ENDED = 3] = "ACTIVITY_ENDED", S[S.USER_JOINED = 4] = "USER_JOINED", S[S.USER_LEFT = 5] = "USER_LEFT", S[S.ACTIVITY_TERMINATED_NO_ELIGIBLE_HOST = 6] = "ACTIVITY_TERMINATED_NO_ELIGIBLE_HOST", (f = l || (l = {}))[f.UNLOCKED = 1] = "UNLOCKED", f[f.PORTRAIT = 2] = "PORTRAIT", f[f.LANDSCAPE = 3] = "LANDSCAPE", (N = u || (u = {}))[N.DIRECTORY = 0] = "DIRECTORY", N[N.SELECT_CHANNEL = 1] = "SELECT_CHANNEL", N[N.DETAIL_PAGE = 2] = "DETAIL_PAGE";
let er = "activity-shelf",
  es = new Set(["755600276941176913", D, M, x]),
  eo = new Set([D, M, x]);
(A = _ || (_ = {})).DISCORD_TURNS_8 = "DISCORD_TURNS_8", A.GDM_ACTIVITIES = "GDM_ACTIVITIES", A.PUTT_PARTY = "PUTT_PARTY", A.JAMSPACE_OLD = "JAMSPACE", A.JAMSPACE = "JAMSPACE2", A.POKER = "POKER", A.FREE = "FREE", (m = d || (d = {}))[m.PORTRAIT = 0] = "PORTRAIT", m[m.LANDSCAPE = 1] = "LANDSCAPE", (O = c || (c = {}))[O.FOCUSED = 0] = "FOCUSED", O[O.PIP = 1] = "PIP", O[O.GRID = 2] = "GRID";
let ea = {
    label_type: R.ww.NONE,
    release_phase: "",
    label_until: null
  },
  el = {
    application_id: "",
    requires_age_gate: !1,
    default_orientation_lock_state: 1,
    tablet_default_orientation_lock_state: 1,
    supported_platforms: [R.C3.WEB],
    client_platform_config: {
      [R.C3.WEB]: ea,
      [R.C3.IOS]: ea,
      [R.C3.ANDROID]: ea
    },
    has_csp_exception: !1,
    displays_advertisements: !1
  },
  eu = [C.d4z.GUILD_TEXT, C.d4z.DM, C.d4z.GROUP_DM],
  e_ = "https://support-dev.discord.com/hc/en-us/articles/21692628851351-Private-Activity-Safety"