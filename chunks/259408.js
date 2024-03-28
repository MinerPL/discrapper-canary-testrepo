"use strict";
t.r(s), t.d(s, {
  default: function() {
    return f
  }
});
var a = t("544891"),
  r = t("933557"),
  l = t("430824"),
  n = t("131951"),
  d = t("699516"),
  i = t("594174"),
  o = t("927923"),
  c = t("981631"),
  u = t("689938");

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