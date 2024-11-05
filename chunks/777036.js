n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(26151),
    o = n(13245),
    r = n(43267),
    l = n(933557),
    s = n(699516),
    a = n(594174),
    u = n(620954),
    c = n(987650),
    d = n(981631),
    h = n(388032);
function f(e) {
    let t = (0, l.F6)(e, a.default, s.Z),
        n = h.intl.string(h.t.ssrVzM),
        f = (0, r.x)(e),
        { trackView: p, trackClick: m } = (0, u.R)(c.n0.IncomingCall, {
            notif_type: c.n0.IncomingCall,
            notif_user_id: 1 === e.recipients.length ? e.recipients[0] : null,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: f,
        title: t,
        body: n,
        confirmText: h.intl.string(h.t['0D/6R0']),
        cancelText: h.intl.string(h.t.BVN4pK),
        onNotificationShow: () => {
            p();
        },
        onConfirmClick: () => {
            o.Z.callPrivateChannel(e.id),
                m('join'),
                o.Z.track(d.rMx.VOICE_CHANNEL_SELECTED, {
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
