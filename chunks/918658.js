t.d(n, {
	Z: function () {
		return D;
	},
	d: function () {
		return U;
	}
});
var r = t(735250);
t(470079);
var i = t(120356),
	o = t.n(i),
	l = t(442837),
	u = t(692547),
	a = t(481060),
	s = t(549817),
	c = t(819553),
	d = t(17181),
	_ = t(303737),
	f = t(434404),
	E = t(703656),
	I = t(944486),
	g = t(914010),
	p = t(671533),
	S = t(259580),
	C = t(358085),
	T = t(962086),
	m = t(160404),
	A = t(889695),
	N = t(981631),
	h = t(176505),
	v = t(302463),
	L = t(293810),
	R = t(689938),
	M = t(370040);
function O(e) {
	let { className: n, onClick: t, children: i } = e;
	return (0, r.jsx)(a.Button, {
		className: o()(M.button, n),
		innerClassName: M.buttonInner,
		look: a.Button.Looks.OUTLINED,
		color: a.Button.Colors.WHITE,
		size: a.Button.Sizes.NONE,
		onClick: t,
		children: i
	});
}
function b(e) {
	let { onClick: n } = e;
	return (0, r.jsx)(O, {
		onClick: n,
		children: R.Z.Messages.DISABLE
	});
}
function D() {
	let e = (0, l.e7)([g.Z], () => g.Z.getGuildId()),
		n = (0, l.e7)([I.Z], () => I.Z.getChannelId(e)),
		{
			viewingRoles: t,
			backNavigationSection: i,
			isFullServerPreview: o,
			isServerShopPreview: C
		} = (0, l.cj)([m.Z], () => ({
			viewingRoles: null != e ? m.Z.getViewingRoles(e) : null,
			backNavigationSection: m.Z.getBackNavigationSection(e),
			isFullServerPreview: null != e && m.Z.isFullServerPreview(e),
			isServerShopPreview: null != e && m.Z.isViewingServerShop(e)
		}));
	if (null == t || null == e) return null;
	let D = (function (e) {
			switch (e) {
				case N.pNK.INTEGRATIONS:
					return R.Z.Messages.VIEWING_AS_ROLES_BACK_INTEGRATIONS;
				case N.pNK.ROLE_SUBSCRIPTIONS:
					return R.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_BACK;
				case N.pNK.ONBOARDING:
					return R.Z.Messages.VIEWING_AS_ONBOARDING_MEMBER_BACK;
				default:
					return R.Z.Messages.VIEWING_AS_ROLES_BACK;
			}
		})(i),
		U = i === N.pNK.ROLE_SUBSCRIPTIONS ? R.Z.Messages.VIEWING_AS_SUBSCRIPTION_ROLES_SELECT : R.Z.Messages.VIEWING_AS_ROLES_SELECT,
		Z = n === h.oC.GUILD_ONBOARDING,
		P = (n) => {
			let { backToSettings: t } = n;
			null != e && (m.Z.isFullServerPreview(e) && (0, E.uL)(N.Z5c.CHANNEL(e)), c.ZP.shouldShowOnboarding(e) && (s.Z.finishOnboarding(e), (0, d.discardOnboardingPromise)(e)), (0, T.mL)(e), t && f.Z.open(e, i), i === N.pNK.ROLE_SUBSCRIPTIONS && (0, _.GN)(e));
		};
	return (0, r.jsxs)(a.Notice, {
		color: a.NoticeColors.BRAND,
		className: M.notice,
		children: [
			(0, r.jsxs)(O, {
				onClick: () => P({ backToSettings: !0 }),
				className: M.backButton,
				children: [
					(0, r.jsx)(p.Z, {
						width: 16,
						height: 16,
						direction: p.Z.Directions.LEFT,
						className: M.backArrow
					}),
					D
				]
			}),
			Z && o
				? (0, r.jsx)('div', {
						className: M.noticeContents,
						children: (0, r.jsx)('div', {
							className: M.noticeText,
							children: R.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION
						})
					})
				: (0, r.jsxs)('div', {
						className: M.noticeContents,
						children: [
							(0, r.jsx)('div', {
								className: M.noticeText,
								children: o ? R.Z.Messages.VIEW_AS_MEMBER_DESCRIPTION_WITH_ROLES.format({ numRoles: Object.keys(t).length }) : R.Z.Messages.VIEWING_AS_ROLES.format({ numRoles: Object.keys(t).length })
							}),
							(0, r.jsx)(a.Popout, {
								position: 'bottom',
								renderPopout: () => (0, r.jsx)(A.Z, { guildId: e }),
								children: (e) => {
									let { onClick: n } = e;
									return (0, r.jsxs)(O, {
										onClick: n,
										children: [
											U,
											(0, r.jsx)(S.Z, {
												width: 16,
												height: 16,
												direction: S.Z.Directions.DOWN,
												className: M.selectCaret
											})
										]
									});
								}
							}),
							o &&
								(0, r.jsx)(a.TooltipContainer, {
									className: M.previewWarning,
									text: R.Z.Messages.VIEW_AS_MEMBER_ROLES_WARNING,
									children: (0, r.jsx)(a.CircleWarningIcon, {
										size: 'xs',
										color: u.Z.unsafe_rawColors.YELLOW_300.css
									})
								}),
							C &&
								(0, r.jsx)(a.TooltipContainer, {
									className: M.previewWarning,
									text: R.Z.Messages.SERVER_SHOP_PREVIEW_DISCLAIMER.format({
										maxTiers: L.fF,
										maxProducts: v.dD
									}),
									children: (0, r.jsx)(a.CircleWarningIcon, {
										size: 'xs',
										color: u.Z.unsafe_rawColors.YELLOW_300.css
									})
								})
						]
					}),
			o || i === N.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(b, { onClick: () => P({ backToSettings: !1 }) })
		]
	});
}
function U(e) {
	let { guildId: n } = e;
	return (0, l.e7)([m.Z], () => m.Z.isViewingRoles(n))
		? (0, r.jsx)('div', {
				className: o()(M.settingsWrapper, {
					[M.windows]: (0, C.isWindows)(),
					[M.osx]: (0, C.isMac)()
				}),
				children: (0, r.jsx)(D, {})
			})
		: null;
}
