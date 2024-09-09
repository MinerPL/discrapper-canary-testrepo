n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(49691),
    i = n(285363),
    a = n(977489),
    s = n(436857);
function o(e, t) {
    var n = (0, r.Z)(e),
        o = (0, i.Z)(e),
        l = n.visualViewport,
        u = o.clientWidth,
        c = o.clientHeight,
        d = 0,
        _ = 0;
    if (l) {
        (u = l.width), (c = l.height);
        var E = (0, s.Z)();
        (E || (!E && 'fixed' === t)) && ((d = l.offsetLeft), (_ = l.offsetTop));
    }
    return {
        width: u,
        height: c,
        x: d + (0, a.Z)(e),
        y: _
    };
}
