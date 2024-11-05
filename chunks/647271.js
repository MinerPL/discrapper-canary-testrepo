n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var o = n(481060),
    r = n(13245),
    l = n(145597),
    s = n(620954),
    a = n(987650),
    u = n(981631),
    c = n(388032);
function d(e) {
    switch (e.type) {
        case a.nc.GO_LIVE_VOICE: {
            let { game: t, voiceGuild: d } = e,
                { trackView: h, trackClick: f } = (0, s.R)(a.n0.GoLiveNudge, { notif_type: a.n0.GoLiveNudge });
            return {
                icon: n(847881),
                title: null,
                body: c.intl.format(c.t.z9znpa, {
                    game: t.name,
                    server: d.toString()
                }),
                confirmText: c.intl.string(c.t.U76Ft7),
                onNotificationShow: () => {
                    h();
                },
                onConfirmClick: (e, t) => {
                    f('unlock'),
                        r.Z.updateNotificationStatus(t),
                        r.Z.setInputLocked(!1, (0, l.QF)()),
                        (0, o.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e('46746'), n.e('19942')]).then(n.bind(n, 60594));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    selectSource: !1,
                                    guildId: d.id,
                                    analyticsLocation: u.Sbl.OVERLAY_NUDGE
                                });
                        });
                },
                onDismissClick: () => {
                    f('dismiss');
                }
            };
        }
        case a.nc.GO_LIVE_NON_VOICE: {
            let { game: t } = e,
                { trackView: d, trackClick: h } = (0, s.R)(a.n0.GoLiveNonVoiceNudge, { notif_type: a.n0.GoLiveNonVoiceNudge });
            return {
                icon: n(847881),
                title: null,
                body: c.intl.format(c.t['0SVWgI'], { game: t.name }),
                confirmText: c.intl.string(c.t.U76Ft7),
                onNotificationShow: () => {
                    d();
                },
                onConfirmClick: (e, t) => {
                    h('unlock'),
                        r.Z.updateNotificationStatus(t),
                        r.Z.setInputLocked(!1, (0, l.QF)()),
                        (0, o.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e('46746'), n.e('19942')]).then(n.bind(n, 60594));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    selectSource: !1,
                                    selectGuild: !0,
                                    analyticsLocation: u.Sbl.OVERLAY_NUDGE
                                });
                        });
                },
                onDismissClick: () => {
                    h('dismiss');
                }
            };
        }
    }
}
