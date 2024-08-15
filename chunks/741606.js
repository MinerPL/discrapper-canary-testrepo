n.d(t, {
	Z: function () {
		return o;
	}
});
var r = n(470079),
	i = n(442837),
	a = n(693546),
	s = n(937111);
function o(e) {
	let t = (0, i.e7)([s.Z], () => (null == e ? null : s.Z.getRequest(e))),
		n = (0, i.e7)([s.Z], () => s.Z.hasFetchedRequestToJoinGuilds);
	return (
		r.useEffect(() => {
			!n && a.Z.fetchRequestToJoinGuilds();
		}, [n]),
		t
	);
}
