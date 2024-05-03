"use strict";
n.r(t), n.d(t, {
  FOR_YOU_ICONS: function() {
    return A
  },
  getBackground: function() {
    return O
  },
  getIcon: function() {
    return M
  },
  getIconByName: function() {
    return R
  },
  getMask: function() {
    return v
  }
});
var s, a, l, i, r = n("692547"),
  o = n("497089"),
  u = n("650473"),
  d = n("389765"),
  c = n("137492"),
  f = n("387661"),
  E = n("659953"),
  _ = n("319707"),
  m = n("584914"),
  T = n("334702"),
  I = n("333722"),
  p = n("549931"),
  h = n("178561"),
  N = n("39863"),
  S = n("130312");
(s = l || (l = {})).CHECKED = "CHECKED", s.FRIENDS = "FRIENDS", s.SHARE_SCREEN = "SHARE_SCREEN", s.NEW_MESSAGE = "NEW_MESSAGE";
let C = {
  CHECKED: f,
  FRIENDS: _,
  SHARE_SCREEN: N,
  NEW_MESSAGE: p
};
(a = i || (i = {})).MISSED_MESSAGES = "MISSED_MESSAGES", a.FRIEND_REQUEST_REMINDER = "FRIEND_REQUEST_REMINDER", a.SCHEDULED_GUILD_EVENT = "SCHEDULED_GUILD_EVENT", a.TOP_MESSAGES = "TOP_MESSAGES", a.NOTIFICATION_CENTER = "NOTIFICATION_CENTER", a.UPDATE_PROFILE = "UPDATE_PROFILE", a.FIND_FRIENDS = "FIND_FRIENDS", a.ADD_FRIEND = "ADD_FRIEND", a.FIRST_MESSAGE = "FIRST_MESSAGE";
let A = {
    MISSED_MESSAGES: I,
    FRIEND_REQUEST_REMINDER: m,
    SCHEDULED_GUILD_EVENT: E,
    TOP_MESSAGES: T,
    NOTIFICATION_CENTER: c,
    UPDATE_PROFILE: S,
    FIND_FRIENDS: d,
    ADD_FRIEND: d,
    FIRST_MESSAGE: h
  },
  g = e => {
    switch (e.item_enum) {
      case o.ItemEnum.ADD_FRIEND:
        return "ADD_FRIEND";
      case o.ItemEnum.FIND_FRIENDS:
        return "FIND_FRIENDS";
      case o.ItemEnum.FIRST_MESSAGE:
        return "FIRST_MESSAGE";
      case o.ItemEnum.UPDATE_PROFILE:
        return "UPDATE_PROFILE";
      default:
        return "NOTIFICATION_CENTER"
    }
  },
  M = e => {
    switch (e.type) {
      case "lifecycle_item":
        return g(e);
      case "missed_messages":
        return "MISSED_MESSAGES";
      case "friend_request_reminder":
        return "FRIEND_REQUEST_REMINDER";
      case "scheduled_guild_event_started":
        return "SCHEDULED_GUILD_EVENT";
      case "top_messages":
        return "TOP_MESSAGES";
      default:
        return "NOTIFICATION_CENTER"
    }
  },
  R = e => {
    if ("icHighlight" === e) return "TOP_MESSAGES";
    return "NOTIFICATION_CENTER"
  },
  v = e => {
    switch (e) {
      case o.NotificationCenterItems.GO_LIVE_PUSH:
        return {
          icon: C.SHARE_SCREEN, color: r.default.colors.BACKGROUND_ACCENT
        };
      case o.NotificationCenterItems.FRIEND_REQUEST_ACCEPTED:
        return {
          icon: C.CHECKED, color: r.default.colors.STATUS_POSITIVE_BACKGROUND
        };
      case o.NotificationCenterItems.FRIEND_REQUEST_PENDING:
      case o.NotificationCenterItems.FRIEND_SUGGESTION_CREATED:
        return {
          icon: C.FRIENDS, color: r.default.colors.BACKGROUND_ACCENT
        };
      case o.NotificationCenterItems.DM_FRIEND_NUDGE:
        return {
          icon: C.NEW_MESSAGE, color: r.default.colors.BACKGROUND_ACCENT
        };
      case o.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS:
      case o.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED:
        return {
          icon: C.FRIENDS, color: r.default.colors.BACKGROUND_ACCENT
        };
      default:
        return null
    }
  },
  O = e => {
    switch (e.item_enum) {
      case o.ItemEnum.UPDATE_PROFILE:
        return u.PROFILE_BACKGROUND;
      case o.ItemEnum.ADD_FRIEND:
      case o.ItemEnum.FIND_FRIENDS:
        return u.FRIEND_BACKGROUND;
      case o.ItemEnum.FIRST_MESSAGE:
        return u.MESSAGE_BACKGROUND;
      default:
        return r.default.unsafe_rawColors.BRAND_500.css
    }
  }