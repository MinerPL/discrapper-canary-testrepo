function r(e) {
	var t, n;
	null ===
		(n = (function () {
			return 'undefined' != typeof window ? window.__DISCORD_DEVTOOLS : null;
		})()) ||
		void 0 === n ||
		null === (t = n.reportEvent) ||
		void 0 === t ||
		t.call(n, e);
}
n.d(t, {
	LN: function () {
		return r;
	}
});
