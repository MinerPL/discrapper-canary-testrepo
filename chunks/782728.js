n.d(t, {
	H: function () {
		return a;
	}
});
var r = n(470079),
	i = n(210422),
	o = n(209851),
	u = n(175806);
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
