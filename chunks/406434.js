n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(126387), i = n(632471), a = n(205208), o = n(740078);
function s(e) {
    var t, n = e.reference, s = e.element, l = e.placement, u = l ? (0, r.Z)(l) : null, c = l ? (0, i.Z)(l) : null, d = n.x + n.width / 2 - s.width / 2, _ = n.y + n.height / 2 - s.height / 2;
    switch (u) {
    case o.we:
        t = {
            x: d,
            y: n.y - s.height
        };
        break;
    case o.I:
        t = {
            x: d,
            y: n.y + n.height
        };
        break;
    case o.F2:
        t = {
            x: n.x + n.width,
            y: _
        };
        break;
    case o.t$:
        t = {
            x: n.x - s.width,
            y: _
        };
        break;
    default:
        t = {
            x: n.x,
            y: n.y
        };
    }
    var E = u ? (0, a.Z)(u) : null;
    if (null != E) {
        var f = 'y' === E ? 'height' : 'width';
        switch (c) {
        case o.BL:
            t[E] = t[E] - (n[f] / 2 - s[f] / 2);
            break;
        case o.ut:
            t[E] = t[E] + (n[f] / 2 - s[f] / 2);
        }
    }
    return t;
}
