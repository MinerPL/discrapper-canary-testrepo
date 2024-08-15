n.d(t, {
	Y: function () {
		return a;
	}
});
var r = n(470079),
	i = n(446555),
	o = n(209851),
	u = n(175806);
function a(e, t) {
	var n = (0, o.N)(),
		a = (0, r.useMemo)(
			function () {
				return new i.x(n.getBackend());
			},
			[n]
		);
	return (
		(0, u.L)(
			function () {
				return (
					(a.dragSourceOptions = e || null),
					a.reconnect(),
					function () {
						return a.disconnectDragSource();
					}
				);
			},
			[a, e]
		),
		(0, u.L)(
			function () {
				return (
					(a.dragPreviewOptions = t || null),
					a.reconnect(),
					function () {
						return a.disconnectDragPreview();
					}
				);
			},
			[a, t]
		),
		a
	);
}
