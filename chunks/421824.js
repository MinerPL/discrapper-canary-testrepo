n.d(t, {
    f: function () {
        return f;
    },
    y: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var o = n(481060),
    r = n(556296),
    l = n(13140),
    s = n(44359),
    a = n(620954),
    u = n(987650),
    c = n(981631),
    d = n(388032);
function h() {
    let { trackView: e, trackClick: t } = (0, a.R)(u.n0.ClipsReminderNotification, { notif_type: u.n0.ClipsReminderNotification }),
        n = r.Z.getKeybindForAction(c.kg4.SAVE_CLIP);
    if (null == n) return null;
    let h = l.BB(n.shortcut, !0);
    return {
        title: d.intl.format(d.t.S5uhCA, {
            keybind: h,
            keybindHook: (e, t) => (0, i.jsx)(s.Z, { keybind: h.split('+') }, t)
        }),
        icon: (0, i.jsx)(o.ClipsIcon, {
            size: 'lg',
            color: 'currentColor'
        }),
        onNotificationShow: () => {
            e();
        },
        onDismissClick: () => {
            t('dismiss');
        }
    };
}
function f(e) {
    let { trackView: t, trackClick: n } = (0, a.R)(u.n0.ClipsNotification, { notif_type: u.n0.ClipsNotification });
    return {
        title: e,
        icon: (0, i.jsx)(o.ClipsIcon, {
            size: 'lg',
            color: 'currentColor'
        }),
        onNotificationShow: () => {
            t();
        },
        onDismissClick: () => {
            n('dismiss');
        }
    };
}
