n.d(t, {
    H: function () {
        return a;
    }
});
var r = n(192379),
    i = n(875256),
    o = n(181034),
    u = n(89540);
function a(e) {
    var t = (0, o.N)(),
        n = (0, r.useMemo)(
            function () {
                return new i.Y(t.getBackend());
            },
            [t]
        );
    return (
        (0, u.L)(
            function () {
                return (
                    (n.dropTargetOptions = e || null),
                    n.reconnect(),
                    function () {
                        return n.disconnectDropTarget();
                    }
                );
            },
            [e]
        ),
        n
    );
}
