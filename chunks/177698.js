var i = n(735250);
n(470079);
var a = n(481060),
	s = n(813615),
	r = n(812206),
	l = n(69580),
	o = n(358085),
	c = n(998502),
	d = n(996106),
	u = n(703912),
	_ = n(981631);
t.Z = (0, u.Z)(
	(e) => {
		var t;
		let {
				clientId: n,
				authorizations: o,
				scopes: c,
				parsedPermissions: u,
				responseType: E,
				redirectUri: h,
				codeChallenge: m,
				codeChallengeMethod: I,
				state: g,
				guildId: p,
				channelId: T,
				prompt: S,
				disableGuildSelect: f,
				disclosures: C,
				integrationType: N
			} = e,
			A = 'OAuth2Authorize_'.concat(n, '_').concat(p, '_').concat(T),
			v = null != N ? (null == o ? void 0 : o.get(N)) : void 0,
			Z = null !== (t = null == v ? void 0 : v.application) && void 0 !== t ? t : r.Z.getApplication(n);
		return new Promise((e, t) => {
			let r = (n) => {
				let { location: i } = n;
				null != location ? e(i) : t(new d.Z({ errorCode: _.lTL.OAUTH2_ERROR }, 'User cancelled authorization'));
			};
			(0, a.openModal)(
				(e) =>
					(0, i.jsx)(l.OAuth2AuthorizeModal, {
						...e,
						authorizations: o,
						clientId: n,
						scopes: null != c ? c : [],
						disclosures: null != C ? C : [],
						callback: r,
						responseType: E,
						redirectUri: h,
						codeChallenge: m,
						codeChallengeMethod: I,
						state: g,
						permissions: u,
						guildId: p,
						channelId: T,
						prompt: S,
						disableGuildSelect: 'boolean' == typeof f ? f : 'true' === f,
						integrationType: N
					}),
				{
					modalKey: A,
					onCloseRequest: () => {
						(0, a.closeModal)(A), t(new d.Z({ errorCode: _.lTL.OAUTH2_ERROR }, 'User cancelled authorization'));
					}
				},
				null != Z && (0, s.Z)(Z, T) ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT
			);
		});
	},
	function (e, t) {
		if (o.isPlatformEmbedded) {
			let n = (0, s.Z)(e, t) ? _.KJ3.CHANNEL_CALL_POPOUT : null;
			(0, o.isWindows)() ? c.ZP.minimize(n) : c.ZP.restore(n), c.ZP.focus(n);
		}
	}
);
