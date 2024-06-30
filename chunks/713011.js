n.d(t, {
    F: function () {
        return a;
    }
});
var r = n(573654), i = n(964742);
function a(e) {
    return function () {
        var t = e.getMonitor(), n = e.getRegistry();
        (function (e) {
            (0, r.k)(e.isDragging(), 'Cannot call endDrag while not dragging.');
        }(t));
        var a = t.getSourceId();
        return null != a && (n.getSource(a, !0).endDrag(t, a), n.unpinSource()), { type: i.Bs };
    };
}
