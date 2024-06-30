n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(528734), i = n(951516);
function a(e) {
    (0, i.Z)(1, arguments);
    var t = (0, r.default)(e), n = t.getTime();
    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
    var a = t.getTime();
    return Math.floor((n - a) / 86400000) + 1;
}
