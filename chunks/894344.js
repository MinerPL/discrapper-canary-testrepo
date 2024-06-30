n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(481060), a = n(763472), o = n(647162), s = n(680686), l = n(131303);
async function u(e, t, u) {
    let {
        hasSpotifyAccount: c,
        activity: d,
        user: _
    } = e;
    (0, l.Z)(c) && null != d && null != d.sync_id && (await (0, o.KV)(), await (0, o.yp)().catch(e => ((0, i.openModalLazy)(async () => {
        let {default: e} = await n.e('46317').then(n.bind(n, 841178));
        return t => (0, r.jsx)(e, { ...t });
    }), Promise.reject(e))), a.Z_(d, _.id), (0, s.Z)(t, _, d, u));
}
