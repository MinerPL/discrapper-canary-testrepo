n.d(t, {
    EH: function () {
        return _;
    },
    Mf: function () {
        return d;
    },
    lL: function () {
        return E;
    },
    t4: function () {
        return u;
    }
});
var s = n(442837), a = n(592125), i = n(430824), r = n(700785), l = n(889369), o = n(981631), c = n(689938);
function d(e, t) {
    return (0, s.e7)([l.Z], () => l.Z.editedDefaultChannelIds.has(e) || null != t && l.Z.editedDefaultChannelIds.has(t));
}
function u(e, t) {
    return (0, s.e7)([l.Z], () => e === t || null != t && l.Z.editedDefaultChannelIds.has(t));
}
function _(e, t) {
    return (0, s.e7)([
        l.Z,
        a.Z
    ], () => null != t && l.Z.editedDefaultChannelIds.has(t) ? c.Z.Messages.CHANNEL_BROWSER_DISABLED_BY_CATEGORY : r.Uu(o.Plq.VIEW_CHANNEL, a.Z.getChannel(e)) ? void 0 : c.Z.Messages.DEFAULT_CHANNELS_DISABLED_PRIVATE);
}
function E(e, t) {
    let n = (0, s.e7)([i.Z], () => {
            var n;
            return (null === (n = i.Z.getGuild(e)) || void 0 === n ? void 0 : n.rulesChannelId) === t;
        }), r = (0, s.e7)([a.Z], () => {
            var e;
            return null === (e = a.Z.getChannel(t)) || void 0 === e ? void 0 : e.isGuildVocal();
        });
    return n ? c.Z.Messages.GUILD_ONBOARDING_DEFAULT_CHANNELS_RULES_DISCOURAGED : r ? c.Z.Messages.GUILD_ONBOARDING_DEFAULT_CHANNELS_VOICE_TOOLTIP : void 0;
}
