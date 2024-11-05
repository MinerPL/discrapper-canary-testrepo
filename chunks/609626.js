n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(768581),
    o = n(620954),
    r = n(987650),
    l = n(981631),
    s = n(388032);
function a(e, t) {
    let n = e.username,
        a = s.intl.format(s.t['Yk+uYG'], { username: '' }),
        u = (0, i.ov)(e),
        c = s.intl.string(s.t.WRj1Wl),
        { trackView: d, trackClick: h } = (0, o.R)(r.n0.ActivityUserJoin, {
            notif_type: r.n0.ActivityUserJoin,
            notif_user_id: e.id,
            activity_type: l.mFx.JOIN,
            activity_name: t.name
        });
    return {
        icon: u,
        title: n,
        body: a,
        hint: c,
        onNotificationShow: () => {
            d();
        },
        onDismissClick: () => {
            h('dismiss');
        }
    };
}
