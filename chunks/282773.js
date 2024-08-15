n.d(t, {
	H: function () {
		return s;
	}
});
var i = n(470079),
	a = n(900849);
function s(e) {
	let { guildDiscoveryCardSeenManager: t, loadId: n } = e,
		s = i.useCallback(
			(e, i) => {
				t.markAsSeen(i, e, n);
			},
			[t, n]
		),
		r = i.useCallback(
			(e, t, i) =>
				a.Lq({
					loadId: n,
					guildId: e,
					index: t,
					analyticsContext: a.P1.GLOBAL_DISCOVERY,
					categoryId: i
				}),
			[n]
		);
	return i.useMemo(
		() => ({
			onGuildCardSeen: s,
			onGuildCardClick: r
		}),
		[r, s]
	);
}
