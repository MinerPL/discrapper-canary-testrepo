var i = n(544891),
  s = n(900849),
  a = n(981631);
t.Z = e => i.tn.get({
  url: a.ANM.STICKER_GUILD_DATA(e),
  oldFormErrors: !0
}).then(e => (null == e ? void 0 : e.body) != null ? (0, s.PP)(e.body) : null).catch(() => null);