n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(285363),
    i = n(874900),
    a = n(977489),
    s = n(636226),
    o = n(894417);
function l(e) {
    var t,
        n = (0, r.Z)(e),
        l = (0, s.Z)(e),
        u = null == (t = e.ownerDocument) ? void 0 : t.body,
        c = (0, o.Fp)(n.scrollWidth, n.clientWidth, u ? u.scrollWidth : 0, u ? u.clientWidth : 0),
        d = (0, o.Fp)(n.scrollHeight, n.clientHeight, u ? u.scrollHeight : 0, u ? u.clientHeight : 0),
        _ = -l.scrollLeft + (0, a.Z)(e),
        E = -l.scrollTop;
    return (
        'rtl' === (0, i.Z)(u || n).direction && (_ += (0, o.Fp)(n.clientWidth, u ? u.clientWidth : 0) - c),
        {
            width: c,
            height: d,
            x: _,
            y: E
        }
    );
}
