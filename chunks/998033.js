n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var r = n(13245),
    s = n(703656),
    a = n(974180),
    l = n(237997),
    o = n(150097),
    c = n(557177),
    d = n(312839),
    u = n(981631),
    h = n(987650),
    p = n(388032);
function f(e, t, n, f) {
    var g;
    let { icon: m, title: v, body: _ } = (0, o.Xi)(e, t, n),
        { trackView: E, trackClick: x } = (0, d.R)(h.n0.TextChat, {
            notif_type: h.n0.TextChat,
            notif_user_id: null === (g = t.author) || void 0 === g ? void 0 : g.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: m,
        title: v,
        body: _,
        renderFooter: (e) =>
            e
                ? (0, i.jsx)('div', {
                      style: { textAlign: 'center' },
                      children: p.intl.string(p.t['+MJm39'])
                  })
                : null,
        maxBodyLines: 2,
        onNotificationShow: () => {
            f && (0, c.GN)(a.Ay, a.yk), E();
        },
        onNotificationClick: () => {
            (0, s.uL)(u.Z5c.CHANNEL(e.guild_id, e.id)), x('jump'), l.Z.isInstanceLocked() && r.Z.setInstanceLocked(!1);
        },
        onDismissClick: () => {
            x('dismiss');
        }
    };
}
