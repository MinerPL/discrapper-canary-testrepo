n.r(t),
	n.d(t, {
		default: function () {
			return b;
		}
	}),
	n(47120);
var r = n(729594),
	i = n(873546),
	a = n(570140),
	s = n(447543),
	o = n(230711),
	l = n(581364),
	u = n(132871),
	c = n(960904),
	d = n(830121),
	_ = n(15274),
	E = n(924301),
	f = n(543842),
	h = n(754688),
	p = n(336197),
	m = n(977156),
	I = n(540709),
	T = n(881706),
	g = n(701190),
	S = n(944486),
	A = n(914010),
	N = n(771845),
	v = n(626135),
	O = n(591759);
n(782568);
var R = n(981631),
	C = n(46140);
async function y(e, t) {
	await a.Z.dispatch({
		type: 'INVITE_MODAL_OPEN',
		invite: e,
		code: t,
		context: R.IlC.APP
	});
}
async function D(e) {
	var t;
	let n = g.Z.getInvite(e.code);
	if (null == n) {
		let { invite: t } = await s.Z.resolveInvite(e.code, 'Markdown Link');
		n = t;
	}
	if (null == n) return;
	if (n.state === R.r2o.EXPIRED || n.state === R.r2o.BANNED || n.state === R.r2o.ERROR) {
		await y(n, e.code);
		return;
	}
	let r = N.ZP.getFlattenedGuildIds(),
		i = null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id;
	null != i && r.includes(i) ? s.Z.transitionToInviteSync(n) : await y(n, e.code);
}
let L = {
	skipExtensionCheck: void 0,
	analyticsLocations: []
};
function b(e) {
	let { skipExtensionCheck: t, analyticsLocations: a } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L,
		s = (0, d.zO)(e);
	if (null != s && (s.type === c.g.INVITE || s.type === c.g.EMBEDDED_ACTIVITY_INVITE)) return (e) => (null == e || e.preventDefault(), D(s), !0);
	if (null != s && s.type === c.g.APP_DIRECTORY_PROFILE)
		return (e) => {
			var t;
			null == e || e.preventDefault();
			let { code: r } = s,
				a = null !== (t = A.Z.getGuildId()) && void 0 !== t ? t : void 0;
			return (
				v.default.track(R.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
					application_id: r,
					device_platform: i.tq ? 'mobile_web' : 'desktop_web',
					guild_id: a,
					channel_id: S.Z.getChannelId()
				}),
				n
					.e('56630')
					.then(n.bind(n, 147890))
					.then((e) => {
						let { goToAppDirectory: t } = e,
							{ ApplicationDirectoryViews: i } = n(132871);
						t({
							view: i.APPLICATION,
							applicationId: r,
							guildId: a,
							entrypoint: { name: u.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL }
						});
					}),
				!0
			);
		};
	if (null != s && s.type === c.g.GUILD_PRODUCT)
		return (e) => {
			null == e || e.preventDefault();
			let [t, r] = s.code.split('-');
			return (
				n
					.e('84239')
					.then(n.bind(n, 838433))
					.then((e) => {
						let { openGuildProductLink: n } = e;
						n(t, r);
					}),
				!0
			);
		};
	if (null != s && s.type === c.g.QUESTS_EMBED && (0, m.cB)({ location: C.dr.EMBED_MOBILE }))
		return (e) => (
			null == e || e.preventDefault(),
			Promise.resolve()
				.then(n.bind(n, 341907))
				.then((e) => {
					let { navigateToQuestHome: t } = e;
					t(C.dr.CODED_LINK, s.code);
				}),
			!0
		);
	let { path: g, hostname: N = '', host: y, query: b, hash: M } = r.parse(e),
		P = O.Z.isDiscordHostname(N) || O.Z.isDiscordLocalhost(y, N);
	if (P && (null == g ? void 0 : g.startsWith('/application-directory'))) {
		let e;
		let t = g.split('/'),
			[, , r, a] = t;
		5 === t.length && (e = t[4]);
		let s = null != r && (0, l.BH)(r) ? r : void 0;
		return (t) => {
			var o;
			null == t || t.preventDefault();
			let { ApplicationDirectoryProfileSections: l } = n(272242),
				{ ApplicationDirectoryViews: c } = n(132871),
				d = null !== (o = A.Z.getGuildId()) && void 0 !== o ? o : void 0,
				_ = c.HOME;
			return (
				'search' === r && (_ = c.SEARCH),
				null != s &&
					((_ = c.APPLICATION),
					v.default.track(R.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
						application_id: s,
						device_platform: i.tq ? 'mobile_web' : 'desktop_web',
						guild_id: d,
						channel_id: S.Z.getChannelId()
					})),
				n
					.e('56630')
					.then(n.bind(n, 147890))
					.then((t) => {
						let { goToAppDirectory: n } = t;
						n({
							view: _,
							applicationId: s,
							guildId: d,
							applicationSection: (0, f.Z)(l, a),
							entrypoint: { name: u.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL },
							skuId: e
						});
					}),
				!0
			);
		};
	}
	if (null != g && P && O.Z.isAppRoute(g)) {
		let e = {};
		return null != b && (e.search = b), null != M && (e.hash = M), (t) => (null == t || t.preventDefault(), (0, p.Z)(g, Object.keys(e).length > 0 ? e : null), !0);
	}
	if (null != g && P) {
		let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: r } = n(69580),
			i = t(e);
		if (null != i) return (e) => (null == e || e.preventDefault(), r(i), !0);
	}
	let U = (0, h.Ao)(g);
	if (null != g && P && null != U)
		return (e) => {
			null == e || e.preventDefault();
			let t = A.Z.getGuildId();
			null != U.guildId && '' !== U.guildId && U.guildId !== t && (0, p.Z)(R.Z5c.CHANNEL(U.guildId));
			let n = E.ZP.getGuildScheduledEvent(U.guildEventId);
			return null != n && (0, _.bO)({ eventId: n.id }), !0;
		};
	if (P && (null == g ? void 0 : g.startsWith('/settings/'))) {
		let { default: e } = n(357269),
			t = e(g);
		if (null != t)
			return (e) => (
				null == e || e.preventDefault(),
				o.Z.open(t.section, t.subsection, {
					openWithoutBackstack: !1,
					impressionSource: t.source,
					analyticsLocations: a
				}),
				!0
			);
	}
	if (!t && null != (0, T.v)(e)) return (t) => (null == t || t.preventDefault(), I.Z.show(e), !0);
}
