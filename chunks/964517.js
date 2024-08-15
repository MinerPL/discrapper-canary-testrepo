function r(e) {
	var t;
	return null !== (t = null == e ? void 0 : e.compositeInstanceId) && void 0 !== t
		? t
		: null == e
			? void 0
			: e.analyticsActivitySessionId;
}
n.d(t, {
	Z: function () {
		return r;
	}
});
