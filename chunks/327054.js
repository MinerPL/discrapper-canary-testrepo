"use strict";
t.r(n), t.d(n, {
  default: function() {
    return r
  }
});
var u = t("300322"),
  a = t("913491"),
  l = t("49111");

function r(e, n, t) {
  let r = n.isSystemDM(),
    s = !r && !(0, a.default)(e);
  return s && (t || n.isPrivate()) && (0, u.getIsActiveChannelOrUnarchivableThread)(n) && n.type !== l.ChannelTypes.GUILD_VOICE && n.type !== l.ChannelTypes.GUILD_STAGE_VOICE
}