t.d(n, {
  HV: function() {
return u;
  },
  IS: function() {
return o;
  },
  VY: function() {
return s;
  }
}), t(627494), t(757143), t(201133);
var l = t(5192),
  r = t(561308),
  a = t(689938);
let o = (e, n) => a.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
username: n.username,
activity: e.extra.game_name
  }),
  i = e => {
let n = (0, r.kr)(e);
return (0, r.Ol)(e) ? n ? a.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_NEW_GAME : a.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_NEW_GAME : n ? a.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_GAME : a.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME;
  },
  u = (e, n, t) => {
let r = i(e),
  a = l.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, t),
  o = e.extra.game_name;
return r.plainFormat({
  gameName: o,
  userName: a
}).replaceAll('*', '');
  },
  s = e => {
let {
  entry: n,
  channel: t,
  users: o,
  countOthers: i
} = e;
return ((0, r.kr)(n) ? a.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYING : a.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYED).plainFormat({
  gameName: n.extra.game_name,
  user1: l.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, o[0]),
  user2: l.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, o[1]),
  countOthers: i
}).replaceAll('*', '');
  };