n.d(t, {
    K: function () {
        return f;
    },
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(704215),
    s = n(481060),
    a = n(13245),
    l = n(312839),
    o = n(706140),
    c = n(658785),
    d = n(987650),
    u = n(921944),
    h = n(388032),
    p = n(240209);
function f() {
    let [e, t] = (0, o.cv)([r.z.OVERLAY_KEYBIND_NOTIFICATION]),
        { showKeybindIndicators: n } = c.Z.useExperiment({ location: 'Overlay' }, { autoTrackExposure: !1 });
    return {
        showKeybindIndicators: null != e && n,
        dismissKeybindNotification: t
    };
}
function g(e) {
    let { markAsDismissed: t } = e,
        { trackView: n, trackClick: r } = (0, l.R)(d.n0.KeybindIndicatorsNotification, { notif_type: d.n0.KeybindIndicatorsNotification });
    return {
        icon: null,
        body: (0, i.jsxs)('div', {
            className: p.notificationBody,
            children: [
                (0, i.jsx)('div', {
                    className: p.iconContainer,
                    children: (0, i.jsx)(s.MicrophoneIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 28,
                        width: 28
                    })
                }),
                (0, i.jsx)(s.Text, {
                    variant: 'text-sm/normal',
                    children: h.intl.string(h.t.EFRNtL)
                })
            ]
        }),
        onDismissClick: (e, n) => {
            r('dismiss'), t(u.L.DISMISS), a.Z.updateNotificationStatus(n);
        },
        onNotificationShow: () => {
            t(u.L.AUTO_DISMISS), n();
        }
    };
}
