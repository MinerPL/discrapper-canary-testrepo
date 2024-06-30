n.d(t, {
    S: function () {
        return s;
    }
});
var i = n(137006);
function s(e, t) {
    var n;
    let {
            scope: s,
            handler: a
        } = t, r = {
            scope: s,
            handler: a
        }, l = null === (n = i.m[e]) || void 0 === n ? void 0 : n.request, o = null;
    return null != l && (r.validation = function (e) {
        return null == o && (o = l(e)), o;
    }), r;
}
