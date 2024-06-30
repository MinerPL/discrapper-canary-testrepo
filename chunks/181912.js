n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(26151), s = n(13245), a = n(43267), o = n(933557), r = n(699516), l = n(594174), c = n(454902), d = n(312839), u = n(981631), h = n(987650), p = n(689938);
function f(e) {
    let t = (0, o.F6)(e, l.default, r.Z), n = p.Z.Messages.OVERLAY_NOTIFICATION_INCOMING_CALL, f = (0, a.x)(e), {
            trackView: _,
            trackClick: g
        } = (0, d.R)(h.n0.IncomingCall, {
            notif_type: h.n0.IncomingCall,
            notif_user_id: 1 === e.recipients.length ? e.recipients[0] : null,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        colorScheme: c.ZP.ColorSchemes.PRIMARY,
        icon: f,
        title: t,
        body: n,
        hint: e => (0, c.QR)(e, (0, d.P)(), p.Z.Messages.OVERLAY_UNLOCK_TO_ANSWER),
        confirmText: p.Z.Messages.JOIN_CALL,
        cancelText: p.Z.Messages.DECLINE,
        onNotificationShow: () => {
            _();
        },
        onConfirmClick: () => {
            s.Z.callPrivateChannel(e.id), g('join'), s.Z.track(u.rMx.VOICE_CHANNEL_SELECTED, {
                location: 'Overlay Notificaiton',
                guild_id: null,
                channel_id: e.id,
                video_enabled: !1
            });
        },
        onCancelClick: () => {
            i.Z.stopRinging(e.id), g('decline');
        },
        onDismissClick: () => {
            g('dismiss');
        }
    };
}
