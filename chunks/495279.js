t.d(n, {
	Z: function () {
		return i;
	}
});
var l = t(482241);
function i(e, n, t, i) {
	let { scheduled_start_time: u, scheduled_end_time: s } = e;
	return null == u && null == s
		? l.Z.deleteGuildEventException(n, t, i)
		: l.Z.updateGuildEventException(
				{
					scheduled_start_time: u,
					scheduled_end_time: s,
					is_canceled: !1
				},
				n,
				t,
				i
			);
}
