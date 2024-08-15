n.d(t, {
	Q: function () {
		return a;
	},
	t: function () {
		return s;
	}
});
var r = n(780570),
	i = n(358085);
function a() {
	return (0, i.isWindows)() || (0, i.isMac)();
}
function s(e) {
	let { LibraryApplicationStore: t, LaunchableGameStore: n, DispatchApplicationStore: i, ConnectedAppsStore: a, applicationId: s, branchId: o } = e;
	if (a.isConnected(s)) return !0;
	if ((null == o && (o = s), i.isLaunchable(s, o))) return !0;
	let l = t.getLibraryApplication(s, o);
	return !(null != l && (0, r.Je)(l)) && n.isLaunchable(s);
}
