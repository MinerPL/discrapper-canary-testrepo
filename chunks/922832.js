"use strict";
E.r(t), E.d(t, {
  FAMILY_CENTER_REFETCH_COOLDOWN: function() {
    return F
  },
  MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: function() {
    return p
  },
  MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: function() {
    return U
  },
  FAMILY_CENTER_REQUEST_SECTION_HEIGHT: function() {
    return g
  },
  FAMILY_CENTER_REQUEST_ROW_HEIGHT: function() {
    return P
  },
  FAMILY_CENTER_REQUEST_QR_CODE_URL: function() {
    return V
  },
  FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS: function() {
    return m
  },
  QR_CODE_AUTO_HIDE_TIMEOUT: function() {
    return G
  },
  PLACEHOLDER_QR_CODE_URL: function() {
    return v
  },
  FAMILY_CENTER_SUB_ROUTES: function() {
    return H
  },
  UserLinkStatus: function() {
    return n
  },
  TeenActionDisplayType: function() {
    return I
  },
  FamilyCenterSubPages: function() {
    return s
  },
  FamilyCenterSubPageAnalyticsIds: function() {
    return a
  },
  FamilyCenterPageLocation: function() {
    return A
  },
  FamilyCenterPageLocationAnalyticsIds: function() {
    return i
  },
  FamilyCenterAction: function() {
    return r
  },
  ACTION_TO_TEXT: function() {
    return h
  },
  PENDING_LINK_REQUEST_TIMESTAMP_FORMATTER: function() {
    return w
  },
  ACCEPTED_LINK_REQUEST_TIMESTAMP_FORMATTER: function() {
    return Q
  }
}), E("222007");
var _, T, n, I, s, a, A, i, r, u, C, l, o, d, N, S, R, M, L, D, c, f, Y = E("447669"),
  O = E("718517"),
  y = E("782340");
let F = 30 * O.default.Millis.SECOND,
  p = 8,
  U = 3,
  g = 26,
  P = 64,
  V = (e, t) => "https://discord.com/feature/family-center/my-family/".concat(e, "/").concat(t),
  m = 4,
  G = 5 * O.default.Millis.MINUTE,
  v = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  H = (0, Y.wrapPaths)(Object.freeze({
    FAMILY_CENTER_SETTINGS: "/family-center/settings",
    FAMILY_CENTER_MY_FAMILY: "/family-center/my-family"
  }), [":", "?", "@"]);
(l = _ || (_ = {}))[l.DM_MESSAGE_SEND = 1] = "DM_MESSAGE_SEND", l[l.GDM_MESSAGE_SEND = 2] = "GDM_MESSAGE_SEND", l[l.MESSAGE_REACT = 3] = "MESSAGE_REACT", l[l.ADD_FRIEND = 4] = "ADD_FRIEND", l[l.SEND_CALL = 5] = "SEND_CALL", l[l.CALL_JOIN = 6] = "CALL_JOIN", l[l.GUILD_JOIN = 7] = "GUILD_JOIN", l[l.GUILD_MESSAGE_SEND = 8] = "GUILD_MESSAGE_SEND", l[l.GUILD_VC_JOIN = 9] = "GUILD_VC_JOIN", (o = T || (T = {}))[o.PARENT = 1] = "PARENT", o[o.CHILD = 2] = "CHILD", (d = n || (n = {}))[d.PENDING = 1] = "PENDING", d[d.ACTIVE = 2] = "ACTIVE", d[d.INACTIVE = 3] = "INACTIVE", d[d.DECLINED = 4] = "DECLINED", d[d.EXPIRED = 5] = "EXPIRED", (N = I || (I = {}))[N.USER_ADD = 1] = "USER_ADD", N[N.GUILD_ADD = 2] = "GUILD_ADD", N[N.USER_INTERACTION = 3] = "USER_INTERACTION", N[N.GUILD_INTERACTION = 4] = "GUILD_INTERACTION", N[N.USER_CALLED = 5] = "USER_CALLED", (S = s || (s = {})).ACTIVITY = "ACTIVITY", S.REQUESTS = "REQUESTS", S.SETTINGS = "SETTINGS", (R = a || (a = {}))[R.ACTIVITY = 0] = "ACTIVITY", R[R.REQUESTS = 1] = "REQUESTS", R[R.SETTINGS = 2] = "SETTINGS", (M = A || (A = {})).SIDENAV = "SIDENAV", M.SETTINGS = "SETTINGS", (L = i || (i = {}))[L.SIDENAV = 0] = "SIDENAV", L[L.SETTINGS = 1] = "SETTINGS", (D = r || (r = {}))[D.TabChange = 0] = "TabChange", D[D.ShowQRCodeModal = 1] = "ShowQRCodeModal", D[D.RevealQRCode = 2] = "RevealQRCode", D[D.ScanQRCodeButton = 3] = "ScanQRCodeButton", D[D.ScanQRCode = 4] = "ScanQRCode", D[D.LoadMore = 5] = "LoadMore", D[D.SelectTeen = 6] = "SelectTeen", D[D.HideQRCode = 7] = "HideQRCode";
let h = new Map([
  [3, {
    tooltipHeader: () => y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_INTERACTION_HEADER,
    tooltipDescription: e => e ? y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_INTERACTION_TOOLTIP_PARENT : y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_INTERACTION_TOOLTIP_TEEN,
    sectionHeader: e => y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_INTERACTION_SECTION_HEADER.format({
      count: e
    }),
    sectionDescription: e => e ? y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_INTERACTION_TOOLTIP_PARENT : y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_INTERACTION_TOOLTIP_TEEN,
    timestampFormatter: () => ({
      today: y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_MESSAGED_TIMESTAMP_TODAY,
      yesterday: y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_MESSAGED_TIMESTAMP_YESTERDAY,
      days: y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_MESSAGED_TIMESTAMP_DAYS
    })
  }],
  [5, {
    tooltipHeader: () => y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_HEADER,
    tooltipDescription: e => e ? y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TOOLTIP_PARENT : y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TOOLTIP_TEEN,
    sectionHeader: e => y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_SECTION_HEADER.format({
      count: e
    }),
    sectionDescription: e => e ? y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TOOLTIP_PARENT : y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TOOLTIP_TEEN,
    timestampFormatter: () => ({
      today: y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TIMESTAMP_TODAY,
      yesterday: y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TIMESTAMP_YESTERDAY,
      days: y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TIMESTAMP_DAYS
    })
  }],
  [1, {
    tooltipHeader: () => y.default.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_HEADER,
    tooltipDescription: e => e ? y.default.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_TOOLTIP_PARENT : y.default.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_TOOLTIP_TEEN,
    sectionHeader: e => y.default.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_SECTION_HEADER.format({
      count: e
    }),
    sectionDescription: e => e ? y.default.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_TOOLTIP_PARENT : y.default.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_TOOLTIP_TEEN,
    timestampFormatter: () => ({
      today: y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_ADDED_TIMESTAMP_TODAY,
      yesterday: y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_ADDED_TIMESTAMP_YESTERDAY,
      days: y.default.Messages.FAMILY_CENTER_ACTIVITY_USER_ADDED_TIMESTAMP_DAYS
    })
  }],
  [2, {
    tooltipHeader: () => y.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_HEADER,
    tooltipDescription: e => e ? y.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_TOOLTIP_PARENT : y.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_TOOLTIP_TEEN,
    sectionHeader: e => y.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_SECTION_HEADER.format({
      count: e
    }),
    sectionDescription: e => e ? y.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_TOOLTIP_PARENT : y.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_TOOLTIP_TEEN
  }],
  [4, {
    tooltipHeader: () => y.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_HEADER,
    tooltipDescription: k,
    sectionHeader: e => y.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_SECTION_HEADER.format({
      count: e
    }),
    sectionDescription: k
  }]
]);

function k(e, t) {
  return e ? t ? y.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_TOOLTIP_PARENT_WITH_VC : y.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_TOOLTIP_PARENT : t ? y.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_TOOLTIP_TEEN_WITH_VC : y.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_TOOLTIP_TEEN
}(c = u || (u = {}))[c.CHECK = 0] = "CHECK", c[c.X = 1] = "X", (f = C || (C = {}))[f.GENERIC_ERROR = 0] = "GENERIC_ERROR", f[f.INELIGIBLE_FOR_FAMILY_CENTER = 1] = "INELIGIBLE_FOR_FAMILY_CENTER", f[f.PENDING_REQUEST_EXISTS = 2] = "PENDING_REQUEST_EXISTS", f[f.MAX_CONNECTIONS_REACHED = 3] = "MAX_CONNECTIONS_REACHED";
let w = () => ({
    seconds: y.default.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_SECONDS,
    minutes: y.default.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_MINUTES,
    hours: y.default.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_HOURS,
    yesterday: y.default.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_YESTERDAY,
    days: y.default.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_DAYS,
    date: y.default.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_DATE
  }),
  Q = () => ({
    seconds: y.default.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_SECONDS,
    minutes: y.default.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_MINUTES,
    hours: y.default.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_HOURS,
    yesterday: y.default.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_YESTERDAY,
    days: y.default.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_DAYS,
    date: y.default.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_DATE
  })