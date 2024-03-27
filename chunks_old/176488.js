"use strict";
t.r(s), t.d(s, {
  default: function() {
    return f
  }
});
var a = t("872717"),
  r = t("679653"),
  l = t("305961"),
  n = t("42887"),
  d = t("27618"),
  i = t("697218"),
  o = t("171644"),
  c = t("49111"),
  u = t("782340");

function f(e, s) {
  var t;
  let {
    nonce: f,
    forQRCode: m
  } = s, x = e.getGuildId(), h = l.default.getGuild(x), N = (0, o.XBOX_HANDOFF_SEARCH_PARAMS)({
    guildId: null != x ? x : c.ZERO_STRING_GUILD_ID,
    channelId: e.id,
    channelName: (0, r.computeChannelName)(e, i.default, d.default),
    guildName: null !== (t = null == h ? void 0 : h.name) && void 0 !== t ? t : u.default.Messages.UNNAMED,
    muted: n.default.isSelfMute(),
    deafened: n.default.isSelfDeaf(),
    nonce: f
  });
  return m ? "".concat((0, a.getAPIBaseURL)()).concat(c.Endpoints.XBOX_HANDOFF, "?").concat(N.toString()) : "".concat(o.XBOX_URL_BASE, "?").concat(N.toString())
}