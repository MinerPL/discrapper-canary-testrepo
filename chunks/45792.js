n.d(t, {
    S: function () {
        return a;
    }
});
var i = n(137006);
function a(e, t) {
    var n;
    let { scope: a, handler: s } = t,
        r = {
            scope: a,
            handler: s
        },
        l = null === (n = i.m[e]) || void 0 === n ? void 0 : n.request,
        o = null;
    return (
        null != l &&
            (r.validation = function (e) {
                return null == o && (o = l(e)), o;
            }),
        r
    );
}
