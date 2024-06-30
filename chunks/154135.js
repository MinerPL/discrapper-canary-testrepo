n.d(t, {
    EY: function () {
        return o;
    },
    Vh: function () {
        return a;
    },
    Yh: function () {
        return i;
    }
});
var r = n(406432);
let i = 4;
function a(e) {
    var t, n;
    if (null == e)
        return;
    let {
        thumbnail: r,
        image: i
    } = e;
    return null != r ? null !== (t = r.proxy_url) && void 0 !== t ? t : r.url : null != i ? null !== (n = i.proxy_url) && void 0 !== n ? n : i.url : void 0;
}
function o(e) {
    if (null == e)
        return;
    let {
        url: t,
        proxy_url: n
    } = e;
    return null != t && null != n ? (0, r.cb)(t) ? ''.concat(n, '?format=jpeg') : n : t;
}
