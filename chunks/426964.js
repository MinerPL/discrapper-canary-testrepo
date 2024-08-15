var r = n(735250),
	i = n(470079),
	a = n(704215),
	s = n(481060),
	o = n(442837),
	l = n(100527),
	u = n(231467),
	c = n(605236),
	d = n(246364),
	_ = n(937111),
	E = n(741606),
	f = n(703656),
	h = n(314897),
	p = n(271383),
	m = n(594174),
	I = n(63063),
	T = n(970606),
	g = n(645896),
	S = n(905362),
	A = n(353093),
	N = n(954138),
	v = n(169559),
	O = n(284019),
	R = n(308083),
	C = n(981631),
	y = n(689938),
	D = n(931797);
function L(e) {
	e.stopPropagation();
}
t.Z = i.memo(function (e) {
	var t;
	let { clan: n, isLoading: b, onClose: M, profileViewedAnalytics: P } = e,
		U = null == n ? void 0 : n.identityGuildId,
		w = (0, g.Cc)(null != U ? U : null),
		x = null == n ? void 0 : n.tag,
		G = (0, v.Z)('clan_guild_profile'),
		k = (0, N.Z)('base_clan_tag_chiplet'),
		B = (0, o.e7)([h.default], () => h.default.getId()),
		F = (0, o.e7)([p.ZP], () => (null != U ? p.ZP.getMember(U, B) : null), [U, B]),
		V = (0, o.e7)([_.Z], () => {
			var e;
			return (null == w ? void 0 : w.id) != null && (null === (e = _.Z.getRequest(w.id)) || void 0 === e ? void 0 : e.applicationStatus) === d.wB.SUBMITTED;
		}),
		H = null != w && w.memberCount >= R.Du,
		Z = (0, c.wE)(a.z.CLAN_TAG_WAITLIST),
		Y = (0, o.e7)([m.default], () => m.default.getUser(B), [B]),
		j = (null == F ? void 0 : F.joinedAt) != null,
		W = (0, A.Z4)(U, null == Y ? void 0 : Y.clan),
		K = null != (0, E.Z)(U);
	i.useEffect(() => {
		null != U &&
			(0, T.u0)({
				guildId: U,
				hasJoinRequest: K,
				...P,
				location: l.Z.CLAN_GUILD_PROFILE
			});
	}, [U, K, P]);
	let z = i.useCallback(() => {
			if (!Z)
				(0, T.pl)({
					originGuildId: null == P ? void 0 : P.guildId,
					tagGuildId: U,
					messageId: null == P ? void 0 : P.messageId,
					tagUserId: null == P ? void 0 : P.tagUserId,
					location: l.Z.CLAN_GUILD_PROFILE
				}),
					(0, s.showToast)((0, s.createToast)(y.Z.Messages.CLAN_USER_WAITLIST_TOAST_SUCCESS, s.ToastType.SUCCESS));
		}, [U, Z, P]),
		q = i.useCallback(
			(e) => {
				if (null != U) e.stopPropagation(), e.preventDefault(), null == M || M(), (0, S.S)(U);
			},
			[U, M]
		),
		Q = i.useCallback(
			(e) => {
				if (null == w || null == U) return;
				if ((e.stopPropagation(), e.preventDefault(), null == M || M(), !K))
					(0, S.q)(U, w, {
						source: null == P ? void 0 : P.source,
						messageId: null == P ? void 0 : P.messageId,
						tagUserId: null == P ? void 0 : P.tagUserId,
						location: l.Z.CLAN_GUILD_PROFILE
					});
			},
			[w, U, K, M, P]
		),
		X = i.useCallback(() => {
			open(I.Z.getArticleURL(C.BhN.CLANS_FAQ));
		}, []),
		$ = i.useCallback(() => {
			if (null != U) (0, f.uL)(C.Z5c.GUILD_MEMBER_VERIFICATION(U));
		}, [U]),
		J = i.useCallback(() => {
			if (null != U) (0, f.XU)(U);
		}, [U]),
		ee = i.useMemo(() => {
			var e, t;
			return {
				color: s.Button.Colors.BRAND,
				size: s.Button.Sizes.SMALL,
				fullWidth: !0,
				className: D.button,
				themeColor: null !== (t = null == w ? void 0 : null === (e = w.branding) || void 0 === e ? void 0 : e.primaryColor) && void 0 !== t ? t : null
			};
		}, [null == w ? void 0 : null === (t = w.branding) || void 0 === t ? void 0 : t.primaryColor]),
		et = i.useMemo(() => {
			switch (!0) {
				case !k:
					return null;
				case !j && !G && !Z:
					return (0, r.jsx)(s.Button, {
						onClick: z,
						color: s.Button.Colors.PRIMARY,
						size: s.Button.Sizes.SMALL,
						fullWidth: !0,
						children: y.Z.Messages.CLAN_USER_WAITLIST_CTA
					});
				case !j && !G && Z:
					return (0, r.jsxs)(s.Button, {
						innerClassName: D.waitlistedButton,
						onClick: X,
						color: s.Button.Colors.PRIMARY,
						size: s.Button.Sizes.SMALL,
						fullWidth: !0,
						children: [
							y.Z.Messages.CLAN_USER_WAITLISTED,
							(0, r.jsx)(s.CircleInformationIcon, {
								size: 'xs',
								color: 'currentColor'
							})
						]
					});
				case !j && K:
					return (0, r.jsx)(O.Z, {
						onClick: $,
						...ee,
						children: y.Z.Messages.CLAN_USER_APPLICATION_EXISTS_TAG_GUILD_PROFILE_CTA
					});
				case !j:
					return (0, r.jsx)(O.Z, {
						onClick: Q,
						...ee,
						children: y.Z.Messages.CLAN_USER_APPLY_TAG_GUILD_PROFILE_CTA
					});
				case j && !W:
					return (0, r.jsx)(O.Z, {
						onClick: q,
						...ee,
						children: y.Z.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA
					});
				case j && W:
					return (0, r.jsx)(O.Z, {
						onClick: J,
						...ee,
						children: y.Z.Messages.CLAN_USER_GO_TO_CLAN_CTA
					});
				default:
					return null;
			}
		}, [ee, q, Q, $, J, K, W, G, Z, z, X, k, j]),
		en = i.useMemo(
			() => ({
				className: D.container,
				onClick: L
			}),
			[]
		);
	return null == x || null == w || null == U || b
		? (0, r.jsx)('div', {
				...en,
				children: (0, r.jsx)(s.Spinner, {})
			})
		: (0, r.jsxs)('div', {
				...en,
				children: [
					(0, r.jsx)(u.xV, {
						clan: w,
						className: D.cardContainer,
						isMember: j,
						hasPendingJoinRequest: V,
						atMaxMemberCapacity: H
					}),
					null != et &&
						(0, r.jsx)('div', {
							className: D.buttonContainer,
							children: et
						})
				]
			});
});
