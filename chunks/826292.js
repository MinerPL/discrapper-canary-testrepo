n.d(t, {
    pU: function () {
        return l;
    }
});
var s = n(818083),
    a = n(981631);
let i = (0, s.B)({
        kind: 'user',
        id: '2022-02_guild_audit_log_user',
        label: 'Guild Audit Log - User Feature Flag',
        defaultConfig: { enableForUser: !1 },
        treatments: [
            {
                id: 1,
                label: 'Show Guild Audit Log 2.0 for user',
                config: { enableForUser: !0 }
            }
        ]
    }),
    r = (0, s.B)({
        kind: 'guild',
        id: '2022-02_guild_audit_log_guild',
        label: 'Guild Audit Log - Guild Feature Flag',
        defaultConfig: { enableForGuild: !1 },
        treatments: [
            {
                id: 1,
                label: 'Show Guild Audit Log 2.0 for guild',
                config: { enableForGuild: !0 }
            }
        ]
    });
function l(e) {
    let { enableForGuild: t } = r.useExperiment({
            guildId: null != e ? e : a.lds,
            location: 'da2d90_1'
        }),
        { enableForUser: n } = i.useExperiment({ location: 'da2d90_2' }, { autoTrackExposure: !1 });
    return n && t;
}
