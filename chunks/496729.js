e.d(t, {
    Z: function () {
        return c;
    },
    s: function () {
        return s;
    }
});
var i = e(200651),
    r = e(704215),
    l = e(481060),
    u = e(570140),
    a = e(605236),
    d = e(592125),
    o = e(305587);
function s(n) {
    let { channelId: t, location: e } = n,
        i = d.Z.getChannel(t),
        l = (0, a.un)(r.z.USER_DM_MUTE_FEEDBACK);
    if (null != i && !!i.isDM() && !l)
        (0, o.Xs)(e) &&
            u.Z.dispatch({
                type: 'USER_DM_MUTE_SHOW_FEEDBACK',
                channel: i
            });
}
function c() {
    (0, l.openModalLazy)(async () => {
        let { default: n } = await e.e('87995').then(e.bind(e, 180970));
        return (t) => (0, i.jsx)(n, { ...t });
    });
}
