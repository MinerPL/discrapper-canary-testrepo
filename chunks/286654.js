n.d(t, {
	z: function () {
		return u;
	}
});
var r = n(735250),
	i = n(470079),
	a = n(239091),
	s = n(430824),
	o = n(594174),
	l = n(74538);
function u(e, t) {
	return i.useCallback(
		(i) => {
			i.stopPropagation();
			let u = s.Z.getGuild(e.guildId),
				c = o.default.getCurrentUser();
			(null != u || l.ZP.canUseCustomCallSounds(c)) &&
				!(function (e, t, i, s) {
					let u = o.default.getCurrentUser();
					(null != t || l.ZP.canUseCustomCallSounds(u)) &&
						(0, a.jW)(e, async () => {
							let { default: e } = await n.e('2356').then(n.bind(n, 876308));
							return (n) =>
								(0, r.jsx)(e, {
									...n,
									soundGuild: t,
									activeCallGuildId: s,
									sound: i
								});
						});
				})(i, u, e, t);
		},
		[e, t]
	);
}
