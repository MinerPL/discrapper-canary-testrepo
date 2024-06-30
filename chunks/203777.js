n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(763472), i = n(647162), a = n(680686), o = n(131303);
async function s(e, t, n) {
    let {
        hasSpotifyAccount: s,
        activity: l,
        user: u
    } = e;
    (0, o.Z)(s) && null != l && null != l.sync_id && (await (0, i.KV)(), r.hY(l, u.id), (0, a.Z)(t, u, l, n));
}
