t.d(e, {
	Z: function () {
		return l;
	}
});
var i = t(735250);
t(470079);
var a = t(442837),
	u = t(481060),
	c = t(978085),
	d = t(283595),
	r = t(417363);
function l(n, e) {
	let t = (0, a.e7)([r.Z], () => r.Z.getLaunchOptions(n.id, n.branchId)),
		l = (0, a.e7)([d.Z], () => d.Z.getActiveLaunchOptionId(n.id, n.branchId));
	return t.length < 2
		? null
		: t.map((t) =>
				(0, i.jsx)(
					u.MenuItem,
					{
						id: t.id,
						label: t.name,
						action: (i) => {
							t.id !== l && c.ul(n.id, n.branchId, t.id), null == e || e(i);
						}
					},
					t.id
				)
			);
}
