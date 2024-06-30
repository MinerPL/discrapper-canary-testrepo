n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(735250);
n(470079);
var a = n(512722), l = n.n(a), s = n(442837), r = n(481060), o = n(40851), c = n(430824), u = n(496675), d = n(871499), h = n(981631), p = n(689938);
function m(e) {
    var t, a;
    let {
            applicationId: m,
            stream: _,
            channel: f,
            exitFullScreen: E,
            appContext: C,
            analyticsLocation: g,
            guildScheduledEvent: I,
            ...x
        } = e, T = (0, o.bp)(), N = null == f ? void 0 : f.getGuildId(), v = (0, s.e7)([c.Z], () => null != N ? c.Z.getGuild(N) : null, [N]);
    return (t = v, a = f, null != t && null != a && u.Z.can(h.Plq.CREATE_INSTANT_INVITE, a)) ? (0, i.jsx)(d.Z, {
        onClick: () => {
            l()(null != v, 'guild cannot be null'), l()(null != f, 'channel cannot be null'), !function (e) {
                let {
                    guild: t,
                    channel: a,
                    streamUserId: l,
                    applicationId: s,
                    appContext: o,
                    exitFullScreen: c,
                    analyticsLocation: u,
                    guildScheduledEvent: d
                } = e;
                null == c || c(), (0, r.openModalLazy)(async () => {
                    let {default: e} = await Promise.all([
                        n.e('7654'),
                        n.e('17520')
                    ]).then(n.bind(n, 560114));
                    return n => (0, i.jsx)(e, {
                        ...n,
                        guild: t,
                        channel: a,
                        streamUserId: l,
                        applicationId: s,
                        analyticsLocation: u,
                        source: a.isGuildStageVoice() ? h.t4x.STAGE_CHANNEL : h.t4x.STREAM_INVITE,
                        guildScheduledEvent: d
                    });
                }, {
                    modalKey: 'stream-invite-modal',
                    contextKey: o === h.IlC.POPOUT ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT
                });
            }({
                guild: v,
                channel: f,
                streamUserId: null == _ ? void 0 : _.ownerId,
                applicationId: m,
                appContext: null != C ? C : T,
                exitFullScreen: E,
                analyticsLocation: g,
                guildScheduledEvent: I
            });
        },
        iconComponent: null != m ? r.ActivitiesPlusIcon : r.GroupPlusIcon,
        label: null != m ? p.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_TO_ACTIVITY : p.Z.Messages.ACTIVITY_INVITE_MODAL_INVITE,
        ...x
    }) : null;
}
