n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(528734), i = n(951516), a = n(964415);
function o(e) {
    (0, i.Z)(1, arguments);
    var t = (0, r.default)(e), n = t.getUTCFullYear(), o = new Date(0);
    o.setUTCFullYear(n + 1, 0, 4), o.setUTCHours(0, 0, 0, 0);
    var s = (0, a.Z)(o), l = new Date(0);
    l.setUTCFullYear(n, 0, 4), l.setUTCHours(0, 0, 0, 0);
    var u = (0, a.Z)(l);
    return t.getTime() >= s.getTime() ? n + 1 : t.getTime() >= u.getTime() ? n : n - 1;
}
