n.d(t, {
    Ui: function () {
        return l;
    },
    p$: function () {
        return o;
    }
});
var i = n(818083), a = n(981631);
let s = (0, i.B)({
    kind: 'guild',
    id: '2023-03_guild_media_channel',
    label: 'Media Channel',
    defaultConfig: { enabled: !1 },
    treatments: [{
            id: 1,
            label: 'Enables guild to create a media channel',
            config: { enabled: !0 }
        }]
});
function l(e) {
    var t;
    let {enabled: n} = s.useExperiment({
        guildId: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : a.lds,
        location: '96e84c_1'
    }, { autoTrackExposure: !0 });
    return (null == e ? void 0 : e.id) != null && n;
}
let r = (0, i.B)({
    kind: 'user',
    id: '2023-04_guild_media_channel_post_preview_embed_users',
    label: 'Guild Role Subscription Users',
    defaultConfig: { enabledForUser: !1 },
    treatments: [{
            id: 1,
            label: 'Enables for users Guild Media Post Preview Embeds',
            config: { enabledForUser: !0 }
        }]
});
function o() {
    let {enabledForUser: e} = r.useExperiment({ location: '96e84c_2' }, { autoTrackExposure: !0 });
    return e;
}
