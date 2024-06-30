var i = n(544891), a = n(900849), s = n(981631);
t.Z = e => i.tn.get({
    url: s.ANM.STICKER_GUILD_DATA(e),
    oldFormErrors: !0
}).then(e => (null == e ? void 0 : e.body) != null ? (0, a.PP)(e.body) : null).catch(() => null);
