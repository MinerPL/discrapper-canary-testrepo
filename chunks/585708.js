n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var o = n(937889),
    r = n(703656),
    l = n(974180),
    s = n(150097),
    a = n(358085),
    u = n(557177),
    c = n(998502),
    d = n(516542),
    h = n(380736),
    f = n(620954),
    p = n(987650),
    m = n(981631),
    v = n(388032);
function g(e, t, n, g) {
    var E;
    let { icon: _, title: C, body: S } = (0, s.Xi)(e, t, n),
        { trackView: x, trackClick: Z } = (0, f.R)(p.n0.TextChat, {
            notif_type: p.n0.TextChat,
            notif_user_id: null === (E = t.author) || void 0 === E ? void 0 : E.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: _,
        title: C,
        body:
            t.content.length > 0
                ? (0, o.ZP)(t, {
                      noStyleAndInteraction: !0,
                      formatInline: !0,
                      hideSimpleEmbedContent: !1
                  }).content
                : S,
        hint: (e) => (e ? null : (0, h.Q)((0, f.P)(), v.t.tHtcCg)),
        maxBodyLines: 2,
        renderFooter: (t, n) =>
            t
                ? (0, i.jsx)(d.Z, {
                      id: n,
                      channel: e,
                      onSend: () => Z('send')
                  })
                : null,
        onNotificationShow: () => {
            g && (0, u.GN)(l.Ay, l.yk), x();
        },
        onNotificationClick: () => {
            (0, r.uL)(m.Z5c.CHANNEL(e.guild_id, e.id, t.id)), Z('jump'), a.isPlatformEmbedded ? c.ZP.focus() : window.focus();
        },
        onDismissClick: () => {
            Z('dismiss');
        }
    };
}
