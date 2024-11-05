n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(26151),
    r = n(13245),
    s = n(43267),
    a = n(933557),
    l = n(593481),
    o = n(699516),
    c = n(594174),
    d = n(312839),
    u = n(981631),
    h = n(987650),
    p = n(388032);
function f(e) {
    let t = (0, a.F6)(e, c.default, o.Z),
        n = p.intl.string(p.t.ssrVzM),
        f = (0, s.x)(e),
        { trackView: g, trackClick: m } = (0, d.R)(h.n0.IncomingCall, {
            notif_type: h.n0.IncomingCall,
            notif_user_id: 1 === e.recipients.length ? e.recipients[0] : null,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: f,
        title: t,
        body: n,
        hint: (e) => (0, l.QR)(e, (0, d.P)(), p.t['Odi54+']),
        confirmText: p.intl.string(p.t['0D/6R0']),
        cancelText: p.intl.string(p.t.BVN4pK),
        onNotificationShow: () => {
            g();
        },
        onConfirmClick: () => {
            r.Z.callPrivateChannel(e.id),
                m('join'),
                r.Z.track(u.rMx.VOICE_CHANNEL_SELECTED, {
                    location: 'Overlay Notificaiton',
                    guild_id: null,
                    channel_id: e.id,
                    video_enabled: !1
                });
        },
        onCancelClick: () => {
            i.Z.stopRinging(e.id), m('decline');
        },
        onDismissClick: () => {
            m('dismiss');
        }
    };
}
