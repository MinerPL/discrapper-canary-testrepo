n.d(t, {
	u: function () {
		return p;
	}
}),
	n(653041),
	n(998459),
	n(47120);
var r = n(735250);
n(470079);
var i = n(481060),
	a = n(355467),
	s = n(179360),
	o = n(821849),
	l = n(594174),
	u = n(314884),
	c = n(509545),
	d = n(626135),
	_ = n(267642),
	E = n(852679),
	f = n(981631);
let h = 'apply-guild-boost-modal';
async function p(e) {
	let {
			analyticsLocations: t,
			analyticsLocation: p,
			analyticsSourceLocation: I,
			numberOfBoostsToAdd: m,
			onClose: T,
			closeLayer: g,
			onSubscriptionConfirmation: S,
			guild: A,
			handleSubscribeModalClose: N,
			disablePremiumUpsell: v,
			inPopout: O,
			applicationId: R
		} = e,
		C = O ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT,
		y = l.default.getCurrentUser();
	if (null == y) return;
	if (!y.verified) {
		(0, i.openModalLazy)(
			async () => {
				let { default: e } = await n.e('20102').then(n.bind(n, 444688));
				return (t) => {
					let { onClose: n, ...i } = t;
					return (0, r.jsx)(e, {
						...i,
						onClose: n
					});
				};
			},
			{ contextKey: C }
		);
		return;
	}
	let D = [];
	!c.Z.isLoadedForPremiumSKUs() && D.push((0, o.Y2)()),
		!u.Z.hasFetched && (D.push(a.jg()), D.push((0, s.X8)())),
		D.length > 0 && (await Promise.allSettled(D));
	let L = (0, _.vx)(u.Z.boostSlots),
		b = L.length,
		M = (e) => {
			null == T || T(), null == N || N(e);
		};
	if (b > 0 && (null == m || b >= m)) {
		let e;
		1 === b ? (e = L.slice(0, 1)) : null != m && (e = L.slice(0, m)),
			await (0, i.openModalLazy)(
				async () => {
					let { default: t } = await Promise.all([
						n.e('52249'),
						n.e('29549'),
						n.e('15685'),
						n.e('8016'),
						n.e('22646'),
						n.e('30419'),
						n.e('72407')
					]).then(n.bind(n, 760558));
					return (n) => {
						let { onClose: i, ...a } = n;
						return (0, r.jsx)(t, {
							...a,
							onClose: (e) => {
								i(), M(e);
							},
							selectedGuild: A,
							locationSection: f.ZY5.PREMIUM_GUILD_USER_MODAL,
							guildBoostSlots: e
						});
					};
				},
				{
					modalKey: h,
					onCloseRequest: () => {
						(0, i.closeModal)(h), M(!1);
					},
					contextKey: C
				}
			);
	} else
		(0, E.Z)({
			analyticsLocations: t,
			analyticsLocation: p,
			analyticsSourceLocation: I,
			guildId: A.id,
			closeLayer: () => {
				null == T || T(),
					null == g || g(),
					d.default.track(f.rMx.MODAL_DISMISSED, {
						type: f.ZY5.PREMIUM_GUILD_USER_MODAL,
						location_section: p.section
					});
			},
			totalNumberOfSlotsToAssign: null != m ? m : 1,
			onCloseModal: M,
			disablePremiumUpsell: v,
			onSubscriptionConfirmation: S,
			inPopout: O,
			applicationId: R
		});
}
