n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(200651);
n(192379);
var o = n(512722),
    r = n.n(o),
    l = n(13245),
    s = n(835473),
    a = n(442550),
    u = n(998502),
    c = n(603618),
    d = n(620954),
    h = n(987650),
    f = n(981631),
    p = n(701488),
    m = n(388032),
    v = n(810257);
function g(e) {
    let { game: t } = e,
        n = (0, s.q)(t.id);
    return null == n
        ? null
        : (0, i.jsx)(a.f, {
              src: n.getIconURL(p.Si.LARGE),
              size: 40
          });
}
function E(e, t) {
    let { trackView: n, trackClick: o } = (0, d.R)(h.n0.SendGameInvitesNotification, { notif_type: h.n0.SendGameInvitesNotification });
    return (
        r()(t.length > 0, 'Some entries must be present'),
        {
            icon: (0, i.jsx)(g, { game: e }),
            title: e.name,
            body: m.intl.string(m.t.y9eo7e),
            renderFooter: () =>
                (0, i.jsx)('div', {
                    className: v.container,
                    children: (0, i.jsx)(c.i, { entries: t })
                }),
            onNotificationShow: () => {
                n(),
                    l.Z.track(f.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                        user_ids: t.map((e) => e.author_id),
                        entry_ids: t.map((e) => e.id)
                    });
            },
            onNotificationClick: (e, t) => {
                o('unlock'), u.ZP.focus(null, !0);
            },
            onDismissClick: () => {
                o('dismiss');
            }
        }
    );
}
