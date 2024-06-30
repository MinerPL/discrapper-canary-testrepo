n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(735250);
n(470079);
var a = n(120356), l = n.n(a), s = n(512722), r = n.n(s), o = n(442837), c = n(481060), u = n(924301), d = n(786915), h = n(430824), p = n(496675), m = n(981631), _ = n(689938), f = n(967928);
function E(e) {
    var t, a;
    let {
            stream: s,
            applicationId: E,
            channel: C,
            exitFullScreen: g,
            appContext: I,
            analyticsLocation: x,
            className: T,
            ...N
        } = e, v = null == C ? void 0 : C.getGuildId(), S = null == C ? void 0 : C.id, Z = (0, o.e7)([h.Z], () => null != v ? h.Z.getGuild(v) : null, [v]), A = (0, o.e7)([u.ZP], () => u.ZP.getActiveEventByChannel(S), [S]);
    if (t = Z, a = C, !(null != t && null != a && p.Z.can(m.Plq.CREATE_INSTANT_INVITE, a)))
        return null;
    let M = _.Z.Messages.INSTANT_INVITE;
    return null != s ? M = _.Z.Messages.INVITE_STREAM_HEADER : null != E && (M = _.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_TO_ACTIVITY), (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.Button, {
                size: c.Button.Sizes.SMALL,
                color: f.buttonColor,
                onClick: () => {
                    r()(null != Z, 'guild cannot be null'), r()(null != C, 'channel cannot be null'), !function (e) {
                        let {
                            guild: t,
                            channel: a,
                            streamUserId: l,
                            applicationId: s,
                            appContext: r,
                            exitFullScreen: o,
                            analyticsLocation: u,
                            guildScheduledEvent: d
                        } = e;
                        null == o || o(), (0, c.openModalLazy)(async () => {
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
                                source: a.isGuildStageVoice() ? m.t4x.STAGE_CHANNEL : m.t4x.STREAM_INVITE,
                                guildScheduledEvent: d
                            });
                        }, {
                            modalKey: 'stream-invite-modal',
                            contextKey: r === m.IlC.POPOUT ? c.POPOUT_MODAL_CONTEXT : c.DEFAULT_MODAL_CONTEXT
                        });
                    }({
                        guild: Z,
                        channel: C,
                        streamUserId: null == s ? void 0 : s.ownerId,
                        applicationId: E,
                        appContext: I,
                        exitFullScreen: g,
                        analyticsLocation: x,
                        guildScheduledEvent: A
                    });
                },
                className: l()(T, f.textButton),
                ...N,
                children: M
            }),
            (0, i.jsx)(d.Z, {
                channel: C,
                stream: s,
                appContext: I,
                className: l()(T, f.iconButton),
                exitFullScreen: g,
                analyticsLocation: x,
                guildScheduledEvent: A
            })
        ]
    });
}
