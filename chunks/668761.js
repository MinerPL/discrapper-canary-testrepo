n.d(t, {
    f: function () {
        return h;
    },
    y: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    s = n(312839),
    a = n(556296),
    l = n(13140),
    o = n(981631),
    c = n(987650),
    d = n(388032);
function u() {
    let { trackView: e, trackClick: t } = (0, s.R)(c.n0.ClipsReminderNotification, { notif_type: c.n0.ClipsReminderNotification }),
        n = a.Z.getKeybindForAction(o.kg4.SAVE_CLIP);
    if (null == n) return null;
    let u = l.BB(n.shortcut, !0);
    return {
        title: d.intl.format(d.t.S5uhCA, {
            keybind: u,
            keybindHook: () =>
                (0, i.jsx)('span', {
                    style: { display: 'inline-block' },
                    children: (0, i.jsx)(r.KeyCombo, { shortcut: u })
                })
        }),
        icon: (0, i.jsx)(r.ClipsIcon, {
            size: 'xs',
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
function h(e) {
    let { trackView: t, trackClick: n } = (0, s.R)(c.n0.ClipsNotification, { notif_type: c.n0.ClipsNotification });
    return {
        title: e,
        icon: (0, i.jsx)(r.ClipsIcon, {
            size: 'xs',
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
