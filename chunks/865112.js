n.d(t, {
  RB: function() {
return x;
  },
  VH: function() {
return S;
  },
  Vi: function() {
return O;
  },
  Vu: function() {
return M;
  },
  q7: function() {
return R;
  }
});
var i, a, s, r, l = n(692547),
  o = n(497089),
  c = n(650473),
  u = n(389765),
  d = n(137492),
  _ = n(387661),
  E = n(659953),
  I = n(319707),
  m = n(584914),
  T = n(334702),
  h = n(333722),
  N = n(549931),
  f = n(178561),
  C = n(39863),
  p = n(130312);
(i = s || (s = {})).CHECKED = 'CHECKED', i.FRIENDS = 'FRIENDS', i.SHARE_SCREEN = 'SHARE_SCREEN', i.NEW_MESSAGE = 'NEW_MESSAGE';
let g = {
  CHECKED: _,
  FRIENDS: I,
  SHARE_SCREEN: C,
  NEW_MESSAGE: N
};
(a = r || (r = {})).MISSED_MESSAGES = 'MISSED_MESSAGES', a.FRIEND_REQUEST_REMINDER = 'FRIEND_REQUEST_REMINDER', a.SCHEDULED_GUILD_EVENT = 'SCHEDULED_GUILD_EVENT', a.TOP_MESSAGES = 'TOP_MESSAGES', a.NOTIFICATION_CENTER = 'NOTIFICATION_CENTER', a.UPDATE_PROFILE = 'UPDATE_PROFILE', a.FIND_FRIENDS = 'FIND_FRIENDS', a.ADD_FRIEND = 'ADD_FRIEND', a.FIRST_MESSAGE = 'FIRST_MESSAGE';
let S = {
MISSED_MESSAGES: h,
FRIEND_REQUEST_REMINDER: m,
SCHEDULED_GUILD_EVENT: E,
TOP_MESSAGES: T,
NOTIFICATION_CENTER: d,
UPDATE_PROFILE: p,
FIND_FRIENDS: u,
ADD_FRIEND: u,
FIRST_MESSAGE: f
  },
  A = e => {
switch (e.item_enum) {
  case o.AM.ADD_FRIEND:
    return 'ADD_FRIEND';
  case o.AM.FIND_FRIENDS:
    return 'FIND_FRIENDS';
  case o.AM.FIRST_MESSAGE:
    return 'FIRST_MESSAGE';
  case o.AM.UPDATE_PROFILE:
    return 'UPDATE_PROFILE';
  default:
    return 'NOTIFICATION_CENTER';
}
  },
  R = e => {
switch (e.type) {
  case 'lifecycle_item':
    return A(e);
  case 'missed_messages':
    return 'MISSED_MESSAGES';
  case 'friend_request_reminder':
    return 'FRIEND_REQUEST_REMINDER';
  case 'scheduled_guild_event_started':
    return 'SCHEDULED_GUILD_EVENT';
  case 'top_messages':
    return 'TOP_MESSAGES';
  default:
    return 'NOTIFICATION_CENTER';
}
  },
  x = e => {
if ('icHighlight' === e)
  return 'TOP_MESSAGES';
return 'NOTIFICATION_CENTER';
  },
  O = e => {
switch (e) {
  case o.DY.GO_LIVE_PUSH:
    return {
      icon: g.SHARE_SCREEN,
        color: l.Z.colors.BACKGROUND_ACCENT
    };
  case o.DY.FRIEND_REQUEST_ACCEPTED:
    return {
      icon: g.CHECKED,
        color: l.Z.colors.STATUS_POSITIVE_BACKGROUND
    };
  case o.DY.FRIEND_REQUEST_PENDING:
  case o.DY.FRIEND_SUGGESTION_CREATED:
    return {
      icon: g.FRIENDS,
        color: l.Z.colors.BACKGROUND_ACCENT
    };
  case o.DY.DM_FRIEND_NUDGE:
    return {
      icon: g.NEW_MESSAGE,
        color: l.Z.colors.BACKGROUND_ACCENT
    };
  case o.O7.INCOMING_FRIEND_REQUESTS:
  case o.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
    return {
      icon: g.FRIENDS,
        color: l.Z.colors.BACKGROUND_ACCENT
    };
  default:
    return null;
}
  },
  M = e => {
switch (e.item_enum) {
  case o.AM.UPDATE_PROFILE:
    return c.Y9;
  case o.AM.ADD_FRIEND:
  case o.AM.FIND_FRIENDS:
    return c.AZ;
  case o.AM.FIRST_MESSAGE:
    return c.bj;
  default:
    return l.Z.unsafe_rawColors.BRAND_500.css;
}
  };