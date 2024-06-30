n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(735250);
n(470079);
var s = n(13245), a = n(703656), o = n(974180), r = n(237997), l = n(454902), c = n(150097), d = n(557177), u = n(312839), h = n(981631), p = n(987650), f = n(689938);
function _(e, t, n, _) {
    var g;
    let {
            icon: m,
            title: E,
            body: Z
        } = (0, c.Xi)(e, t, n), {
            trackView: I,
            trackClick: S
        } = (0, u.R)(p.n0.TextChat, {
            notif_type: p.n0.TextChat,
            notif_user_id: null === (g = t.author) || void 0 === g ? void 0 : g.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        colorScheme: l.IC.PRIMARY,
        icon: m,
        title: E,
        body: Z,
        renderFooter: e => e ? (0, i.jsx)('div', {
            style: { textAlign: 'center' },
            children: f.Z.Messages.OVERLAY_CLICK_TO_JUMP_TO_CHANNEL
        }) : null,
        maxBodyLines: 2,
        onNotificationShow: () => {
            _ && (0, d.GN)(o.Ay, o.yk), I();
        },
        onNotificationClick: () => {
            (0, a.uL)(h.Z5c.CHANNEL(e.guild_id, e.id)), S('jump'), r.Z.isInstanceUILocked() && s.Z.setInstanceLocked(!1);
        },
        onDismissClick: () => {
            S('dismiss');
        }
    };
}
