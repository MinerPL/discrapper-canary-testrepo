n.d(t, {
	G: function () {
		return T;
	},
	S: function () {
		return m;
	}
}),
	n(47120);
var r = n(913527),
	i = n.n(r),
	a = n(704215),
	s = n(835913),
	o = n(605236),
	l = n(675478),
	u = n(581883),
	c = n(430824),
	d = n(709054),
	_ = n(866817),
	E = n(637853),
	f = n(981631),
	h = n(921944);
let p = [
		a.z.GUILD_ONBOARDING_UPSELL_MODAL_V2,
		a.z.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE,
		a.z.GUILD_ONBOARDING_UPSELL_NAGBAR
	],
	I = [0, 1, 7];
function m(e, t) {
	var n;
	let r = c.Z.getGuilds(),
		a = d.default.entries(r).some((e) => {
			let [t, n] = e,
				r = (0, E.wC)(t),
				i = n.hasFeature(f.oNc.GUILD_ONBOARDING_EVER_ENABLED);
			return r && i;
		});
	if (a || !(0, E.wC)(e)) return !1;
	let l = null === (n = u.Z.settings.userContent) || void 0 === n ? void 0 : n.guildOnboardingUpsellDismissedAt,
		h = null != l ? s.E.toDate(l) : void 0,
		m = null != h ? i()().diff(h, 'days') : null,
		T = p.indexOf(t);
	if (-1 === T || !(null == m || m > I[T]) || p.find((e) => !(0, o.un)(e)) !== t) return !1;
	let { showLifecycleUpsells: g } = _.Z.getCurrentConfig(
		{
			guildId: e,
			location: '7f5b67_1'
		},
		{
			disable: a || !(0, E.wC)(e),
			autoTrackExposure: !0
		}
	);
	return g;
}
function T(e, t) {
	let n = s.E.now();
	l.hW.updateAsync(
		'userContent',
		(e) => {
			e.guildOnboardingUpsellDismissedAt = n;
		},
		l.fy.INFREQUENT_USER_ACTION
	),
		null != t &&
			(0, o.EW)(t, {
				forceTrack: !0,
				dismissAction: h.L.AUTO,
				guildId: e
			});
}
