t.d(s, {
	Gj: function () {
		return j;
	},
	Pt: function () {
		return v;
	},
	VO: function () {
		return U;
	},
	ji: function () {
		return y;
	},
	q8: function () {
		return G;
	}
}),
	t(639576),
	t(536091),
	t(47120),
	t(653041);
var n = t(470079),
	a = t(442837),
	i = t(704215),
	r = t(493544),
	o = t(634894),
	l = t(211242),
	c = t(770471),
	d = t(924557),
	_ = t(706140),
	E = t(592204),
	u = t(610697),
	I = t(631885),
	T = t(223639),
	S = t(160913),
	N = t(725727),
	C = t(977156),
	m = t(237292),
	A = t(314897),
	O = t(283595),
	g = t(663389),
	h = t(594174),
	p = t(202527),
	R = t(695346),
	x = t(620163),
	M = t(295545),
	f = t(168308),
	D = t(839469),
	P = t(726985),
	L = t(46140),
	b = t(689938);
function Z(e) {
	let s = [
			{
				header: b.Z.Messages.USER_SETTINGS,
				settings: [
					P.s6.ACCOUNT,
					P.s6.GAMES,
					P.s6.PROFILE_CUSTOMIZATION,
					P.s6.PRIVACY_AND_SAFETY,
					P.s6.PRIVACY_FAMILY_CENTER,
					P.s6.AUTHORIZED_APPS,
					P.s6.SESSIONS,
					P.s6.CONNECTIONS,
					P.s6.CLIPS,
					P.s6.FRIEND_REQUESTS
				]
			},
			{
				header: b.Z.Messages.BILLING_SETTINGS,
				divider: !0,
				settings: [P.s6.PREMIUM, P.s6.GUILD_BOOSTING, P.s6.SUBSCRIPTIONS, P.s6.GIFT_INVENTORY, P.s6.BILLING]
			},
			{
				header: b.Z.Messages.APP_SETTINGS,
				divider: !0,
				settings: [
					P.s6.APPEARANCE,
					P.s6.ACCESSIBILITY,
					P.s6.VOICE_AND_VIDEO,
					P.s6.POGGERMODE,
					P.s6.CHAT,
					P.s6.NOTIFICATIONS,
					P.s6.KEYBINDS,
					P.s6.LANGUAGE,
					P.s6.WINDOW_SETTINGS,
					P.s6.LINUX_SETTINGS,
					P.s6.STREAMER_MODE,
					P.s6.SETTINGS_ADVANCED
				]
			},
			{
				divider: !0,
				settings: [
					P.s6.CHANGELOG,
					P.s6.MERCHANDISE,
					P.s6.HYPESQUAD,
					P.s6.EXPERIMENTS,
					P.s6.DEVELOPER_OPTIONS,
					P.s6.HOTSPOT_OPTIONS,
					P.s6.DISMISSIBLE_CONTENT_OPTIONS,
					P.s6.PAYMENT_FLOW_MODALS,
					P.s6.DESIGN_SYSTEMS,
					P.s6.TEXT_PLAYGROUND,
					P.s6.TEXT_COMPONENTS,
					P.s6.INTL_TESTING,
					P.s6.PROFILE_EFFECTS_PREVIEW_TOOL,
					P.s6.QUEST_PREVIEW_TOOL
				]
			},
			{
				divider: !0,
				settings: [P.s6.LOGOUT]
			},
			{
				divider: !0,
				settings: [P.s6.SOCIAL_LINKS, P.s6.CLIENT_DEBUG_INFO]
			}
		],
		t = {
			header: b.Z.Messages.ACTIVITY_SETTINGS,
			divider: !0,
			settings: [P.s6.ACTIVITY_PRIVACY, P.s6.REGISTERED_GAMES, P.s6.OVERLAY]
		};
	return e ? s : s.toSpliced(3, 0, t);
}
function v() {
	var e, s;
	let t = (0, N.YO)().length,
		n = (0, S.U)(),
		r = (0, a.e7)([g.Z], () => g.Z.getProps().impressionSource),
		D = (0, I.gU)(),
		P = (0, f.bC)(),
		b = (0, d.Go)(),
		[Z] = (0, _.cv)(b ? [i.z.CLIPS_SETTINGS_BETA_TAG] : []),
		v = 'useGenerateUserSettingsSections';
	(0, o.j)({
		location: v + ' auto on',
		autoTrackExposure: !0
	}),
		(0, o.j)({
			location: v + ' auto off',
			autoTrackExposure: !1
		});
	let { shouldMergeGameSettings: j } = p.b.useExperiment({ location: 'settings' }),
		B = (0, M.eA)({ location: 'settings' }),
		U = (0, E.Xo)({ location: 'settings' }),
		G =
			null !== (s = null === (e = h.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) &&
			void 0 !== s &&
			s,
		F = (0, m.y0)({ location: 'settings' }),
		y = (0, l.Q)(),
		V = (0, C.Zy)({ location: L.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
		{ enabled: Y } = T.Z.useExperiment({ location: 'UserSettingsInventory' }, { autoTrackExposure: !0 }),
		w = (0, a.e7)([O.Z], () => O.Z.hasLibraryApplication()),
		H = (0, a.e7)([A.default], () => A.default.hasTOTPEnabled()),
		{ canBroadcast: k } = c.Z.useExperiment({ location: 'user_settings_activity_privacy' }, { autoTrackExposure: !0 }),
		W = R.Sb.useSetting(),
		K = (0, u.Z)();
	return (0, x.i)({
		unseenGiftCount: t,
		showPrepaidPaymentPastDueWarning: n,
		impressionSource: r,
		numOfPendingFamilyRequests: D,
		isOverlaySupported: P,
		isClipsBetaTagShowing: Z === i.z.CLIPS_SETTINGS_BETA_TAG,
		shouldMergeGameSettings: j,
		isUserSettingsSearchEnabled: B,
		isKeywordFilteringEnabled: U,
		isStaff: G,
		isInappropriateConversationWarningEnabled: F,
		paymentsBlocked: y,
		isEligibleForQuests: V,
		showGiftNitro: Y,
		isStricterMessageRequestsEnabled: K,
		hasLibraryApplication: w,
		hasTOTPEnabled: H,
		canBroadcastActivity: k,
		developerMode: W
	});
}
function j(e) {
	let { searchResults: s } = (0, D.E)(),
		t = v();
	if (!(0, M.eA)({ location: 'settings' })) return new Set();
	let n = t[e],
		a = Object.fromEntries(
			Object.entries(t).filter((e) => {
				let [s, t] = e;
				return t.section === n.section;
			})
		),
		i = Object.fromEntries(
			Object.entries(a)
				.filter((e) => {
					let [s, { parent: t, section: a }] = e;
					return null != t && a === n.section;
				})
				.map((e) => {
					let [s, { parent: t }] = e;
					return [s, t];
				})
		),
		r = new Set(),
		o = (e) => {
			let s = a[e];
			if (null == s) return;
			r.add(e);
			let t = s.parent;
			null != t && o(t);
		},
		l = (e) => {
			for (let s of (r.add(e),
			Object.entries(i)
				.filter((s) => {
					let [t, n] = s;
					return n === e;
				})
				.map((e) => {
					let [s] = e;
					return s;
				})))
				l(s);
		};
	for (let e of s.filter((e) => e in a))
		if (!r.has(e)) {
			if (null != a[e].element && null == a[e].parent) {
				r.clear();
				break;
			}
			Object.values(i).includes(e) && l(e), o(e);
		}
	return r;
}
function B(e, s) {
	let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
		n = arguments.length > 3 ? arguments[3] : void 0,
		a = [],
		i = F(s),
		o = (function (e, s) {
			let t = new Map();
			return (
				null != s &&
					s.forEach((s) => {
						let n = e[s].parent;
						for (; null != n && null != e[n].parent; ) n = e[n].parent;
						if (null != n) {
							var a;
							let e = null !== (a = t.get(n)) && void 0 !== a ? a : 0;
							t.set(n, e + 1);
						}
					}),
				t
			);
		})(s, new Set(Array.from(null != n ? n : []).filter((e) => i.has(e))));
	return (
		e.forEach((e) => {
			0 !== e.settings.length &&
				(!0 === e.divider && a.push({ section: r.ID.DIVIDER }),
				null != e.header &&
					a.push({
						section: r.ID.HEADER,
						label: e.header
					}),
				e.settings.forEach((e) => {
					a.push({
						...s[e],
						tabPredicate: () => {
							var s, t, a;
							return (
								null == n ||
								((s = e), (t = n), (a = o), (s === P.s6.SEARCH_NO_RESULTS && 0 === t.size) || a.has(s) || t.has(s))
							);
						},
						searchFilterCount: !t || (null == n ? void 0 : n.has(e)) ? void 0 : o.get(e)
					});
				}));
		}),
		a
	);
}
function U() {
	let e = v(),
		{ shouldMergeGameSettings: s } = p.b.useExperiment({ location: 'settings' }),
		t = n.useMemo(() => Z(s), [s]);
	return n.useMemo(() => B(t, e), [t, e]);
}
function G(e) {
	let s = v(),
		t = (function () {
			let { shouldMergeGameSettings: e } = p.b.useExperiment({ location: 'settings' }),
				s = Z(e);
			return n.useMemo(
				() => [
					{
						header: b.Z.Messages.SEARCH_RESULTS_SECTION_LABEL,
						settings: [
							...s
								.map((e) => {
									let { settings: s } = e;
									return s;
								})
								.flat(1),
							P.s6.SEARCH_NO_RESULTS
						]
					}
				],
				[s]
			);
		})(),
		a = (0, M.c3)({ location: 'settings' });
	return n.useMemo(() => B(t, s, a, new Set(e)), [t, s, a, e]);
}
function F(e) {
	return new Map(
		Object.entries(e).filter((e) => {
			let [s, t] = e;
			return t.section !== r.ID.CUSTOM && null != t.searchableTitles && (null == t.predicate || t.predicate());
		})
	);
}
function y(e) {
	return Array.from(F(e).entries()).map((e) => {
		let [s, t] = e;
		return [s, t.searchableTitles];
	});
}
