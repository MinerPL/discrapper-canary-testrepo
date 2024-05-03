"use strict";
n.r(t), n.d(t, {
  formatCanvasDescription: function() {
    return o
  },
  getContentAltText: function() {
    return i
  }
}), n("627494"), n("757143"), n("201133");
var a = n("5192"),
  l = n("561308"),
  s = n("689938");
let i = (e, t) => s.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
    username: t.username,
    activity: e.extra.game_name
  }),
  r = e => {
    let t = (0, l.isEntryActive)(e);
    return (0, l.isEntryNew)(e) ? t ? s.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_NEW_GAME : s.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_NEW_GAME : t ? s.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_GAME : s.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME
  },
  o = (e, t, n) => {
    let l = r(e),
      s = a.default.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
      i = e.extra.game_name;
    return l.plainFormat({
      gameName: i,
      userName: s
    }).replaceAll("*", "")
  }