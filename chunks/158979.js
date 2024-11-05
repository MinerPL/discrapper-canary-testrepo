n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    s = n(13245),
    a = n(312839),
    l = n(981631),
    o = n(987650),
    c = n(388032),
    d = n(57266);
function u() {
    return (0, i.jsx)('div', {
        className: d.footer,
        children: (0, i.jsx)(r.Button, {
            color: r.Button.Colors.GREEN,
            size: r.Button.Sizes.SMALL,
            className: d.ctaButton,
            children: c.intl.string(c.t.U76Ft7)
        })
    });
}
function h(e) {
    switch (e.type) {
        case o.nc.GO_LIVE_VOICE: {
            let { game: t, voiceGuild: d } = e,
                { trackView: h, trackClick: p } = (0, a.R)(o.n0.GoLiveNudge, { notif_type: o.n0.GoLiveNudge });
            return {
                icon: n(847881),
                title: null,
                body: c.intl.formatToPlainString(c.t.z9znpa, {
                    game: t.name,
                    server: d.toString()
                }),
                hint: () => (0, i.jsx)(u, {}),
                renderFooter: () => (0, i.jsx)(u, {}),
                onNotificationShow: () => {
                    h();
                },
                onNotificationClick: (e, t) => {
                    p('unlock'),
                        s.Z.updateNotificationStatus(t),
                        s.Z.setInstanceLocked(!1),
                        (0, r.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e('46746'), n.e('33641')]).then(n.bind(n, 60594));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    selectSource: !1,
                                    guildId: d.id,
                                    analyticsLocation: l.Sbl.OVERLAY_NUDGE
                                });
                        });
                },
                onDismissClick: () => {
                    p('dismiss');
                }
            };
        }
        case o.nc.GO_LIVE_NON_VOICE: {
            let { game: t } = e,
                { trackView: d, trackClick: h } = (0, a.R)(o.n0.GoLiveNonVoiceNudge, { notif_type: o.n0.GoLiveNonVoiceNudge });
            return {
                icon: n(847881),
                title: null,
                body: c.intl.formatToPlainString(c.t['0SVWgI'], { game: t.name }),
                hint: () => (0, i.jsx)(u, {}),
                renderFooter: () => (0, i.jsx)(u, {}),
                onNotificationShow: () => {
                    d();
                },
                onNotificationClick: (e, t) => {
                    h('unlock'),
                        s.Z.updateNotificationStatus(t),
                        s.Z.setInstanceLocked(!1),
                        (0, r.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e('46746'), n.e('33641')]).then(n.bind(n, 60594));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    selectSource: !1,
                                    selectGuild: !0,
                                    analyticsLocation: l.Sbl.OVERLAY_NUDGE
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
