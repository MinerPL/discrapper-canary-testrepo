n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(49691), i = n(285363), a = n(977489), o = n(436857);
function s(e, t) {
    var n = (0, r.Z)(e), s = (0, i.Z)(e), l = n.visualViewport, u = s.clientWidth, c = s.clientHeight, d = 0, _ = 0;
    if (l) {
        u = l.width, c = l.height;
        var E = (0, o.Z)();
        (E || !E && 'fixed' === t) && (d = l.offsetLeft, _ = l.offsetTop);
    }
    return {
        width: u,
        height: c,
        x: d + (0, a.Z)(e),
        y: _
    };
}
