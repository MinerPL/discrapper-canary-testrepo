r.d(t, {
	r: function () {
		return o;
	}
});
var n = r(967752),
	a = r(617726);
function o(e, { metadata: t, tunnel: r, dsn: o }) {
	let i = {
			event_id: e.event_id,
			sent_at: new Date().toISOString(),
			...(t &&
				t.sdk && {
					sdk: {
						name: t.sdk.name,
						version: t.sdk.version
					}
				}),
			...(!!r && !!o && { dsn: (0, n.RA)(o) })
		},
		_ = (function (e) {
			return [{ type: 'user_report' }, e];
		})(e);
	return (0, a.Jd)(i, [_]);
}
