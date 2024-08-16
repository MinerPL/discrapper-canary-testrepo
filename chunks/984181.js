n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(528734),
    i = n(951516);
function a(e) {
    (0, i.Z)(1, arguments);
    var t = (0, r.default)(e),
        n = t.getFullYear(),
        a = t.getMonth(),
        s = new Date(0);
    return s.setFullYear(n, a + 1, 0), s.setHours(0, 0, 0, 0), s.getDate();
}
