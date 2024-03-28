"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var a = n("665906"),
  i = n("901461"),
  l = n("981631");

function s(e, t, n) {
  return !t.isSystemDM() && !(0, i.default)(e) && (n || t.isPrivate()) && (0, a.getIsActiveChannelOrUnarchivableThread)(t) && t.type !== l.ChannelTypes.GUILD_VOICE && t.type !== l.ChannelTypes.GUILD_STAGE_VOICE
}