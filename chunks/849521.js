n.d(t, {
    y: function () {
        return l;
    }
});
var r = n(873546),
    i = n(944486),
    a = n(914010),
    s = n(626135),
    o = n(981631);
function l(e, t) {
    s.default.track(o.rMx.APP_DIRECTORY_PROFILE_EMBED_SENT, {
        application_id: e,
        device_platform: r.tq ? 'mobile_web' : 'desktop_web',
        guild_id: a.Z.getGuildId(),
        channel_id: i.Z.getChannelId(),
        section: t
    });
}
