n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(278323),
    o = n(13245),
    r = n(45114),
    l = n(237997),
    s = n(145597),
    a = n(620954),
    u = n(987650),
    c = n(981631),
    d = n(388032);
function h(e, t, n, h) {
    let f = t.username,
        p = d.intl.format(d.t.VDODnp, {
            username: '',
            game: n.name
        }),
        m = t.getAvatarURL(e.guild_id, 80),
        { trackView: v, trackClick: g } = (0, a.R)(u.n0.ActivityInvite, {
            notif_type: u.n0.ActivityInvite,
            notif_user_id: t.id,
            activity_type: c.mFx.JOIN_REQUEST,
            activity_name: n.name
        });
    return {
        icon: m,
        title: f,
        body: p,
        confirmText: d.intl.string(d.t['fgP/wc']),
        cancelText: d.intl.string(d.t.tpXzJy),
        onNotificationShow: () => {
            v();
        },
        onConfirmClick: (t, n) => {
            i.Z.sendActivityInvite({
                channelId: e.id,
                type: c.mFx.JOIN,
                activity: h,
                location: l.Z.isLocked((0, s.QF)()) ? c.Sbl.LOCKED_OVERLAY : c.Sbl.UNLOCKED_OVERLAY
            }),
                g('join'),
                o.Z.updateNotificationStatus(n);
        },
        onCancelClick: (t, n) => {
            (0, r.In)(e.id, !0, !0), o.Z.updateNotificationStatus(n), g('decline');
        },
        onDismissClick: () => {
            g('dismiss');
        }
    };
}
