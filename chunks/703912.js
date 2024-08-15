n.d(t, {
	Z: function () {
		return v;
	}
}),
	n(789020),
	n(47120);
var i = n(664751),
	a = n(373793),
	s = n(243814),
	r = n(149765),
	l = n(544891),
	o = n(45792),
	c = n(433517),
	d = n(570140),
	u = n(979200),
	_ = n(489863),
	E = n(166148),
	h = n(307643),
	m = n(973616),
	I = n(594174),
	g = n(630388),
	p = n(700785),
	T = n(996106),
	S = n(186901),
	f = n(981631);
let C = 'CachedTokens';
async function N(e, t, n) {
	var i;
	let s;
	let l,
		o,
		c,
		d,
		{
			client_id: S,
			response_type: C = 'code',
			redirect_uri: N,
			code_challenge: A,
			code_challenge_method: v,
			state: Z,
			nonce: L,
			scope: O,
			permissions: R,
			guild_id: x,
			channel_id: b,
			prompt: P,
			disable_guild_select: M,
			integration_type: D
		} = e;
	if (null == S) throw new T.Z({ errorCode: f.lTL.OAUTH2_ERROR }, 'No Client ID provided');
	if (null != N)
		throw new T.Z(
			{ errorCode: f.lTL.OAUTH2_ERROR },
			'Redirect URI cannot be used in the RPC OAuth2 Authorization flow'
		);
	let y = [];
	if (
		('string' == typeof O ? (y = O.split(' ').filter((e) => e.length > 0)) : Array.isArray(O) && (y = O),
		null == I.default.getCurrentUser())
	)
		throw new T.Z({ errorCode: f.lTL.OAUTH2_ERROR }, 'Client is not logged in');
	let j = m.Z.createFromServer(await (0, h.UM)(S)),
		U =
			null != j &&
			(0, g.yE)(j.flags, f.udG.EMBEDDED) &&
			(null === (i = j.integrationTypesConfig) || void 0 === i ? void 0 : i[a.Y.USER_INSTALL]) != null;
	l = null == D ? (U ? a.Y.USER_INSTALL : a.Y.GUILD_INSTALL) : Number(D);
	try {
		o = await (0, _.Ww)({
			clientId: S,
			scopes: y,
			responseType: C,
			redirectUri: N,
			codeChallenge: A,
			codeChallengeMethod: v,
			state: Z,
			integrationType: l
		});
	} catch (t) {
		let { body: e } = t;
		throw new T.Z(
			{ errorCode: f.lTL.OAUTH2_ERROR },
			'OAuth2 Authorization Error: '.concat(e.message || 'Unknown Error')
		);
	}
	try {
		({ disclosures: c, allAcked: d } = await (0, u.de)(o.application.id));
	} catch (t) {
		let { body: e } = t;
		throw new T.Z(
			{ errorCode: f.lTL.OAUTH2_ERROR },
			'OAuth2 Authorization Error: '.concat(e.message || 'Unknown Error')
		);
	}
	if (P === E.s.NONE && null != o && o.authorized && d)
		try {
			return (
				await (0, _.Iq)({
					authorize: !0,
					clientId: S,
					scopes: y,
					responseType: C,
					redirectUri: N,
					codeChallenge: A,
					codeChallengeMethod: v,
					state: Z,
					nonce: L,
					integrationType: l
				})
			).location;
		} catch (t) {
			let { body: e } = t;
			throw new T.Z({ errorCode: f.lTL.OAUTH2_ERROR }, 'OAuth2 Authorize Error: '.concat(e.message || 'Unknown Error'));
		}
	null == n || n(o.application, b);
	let G = p.Hn;
	try {
		G = r.vB(null != R ? R : 0);
	} catch (e) {}
	return (
		null != o.integration_type &&
			Object.values(a.Y).includes(o.integration_type) &&
			(s = new Map()).set(o.integration_type, o),
		t({
			clientId: S,
			authorizations: s,
			scopes: y,
			parsedPermissions: G,
			responseType: C,
			redirectUri: N,
			codeChallenge: A,
			codeChallengeMethod: v,
			state: Z,
			guildId: x,
			channelId: b,
			prompt: P,
			disableGuildSelect: M,
			disclosures: c,
			integrationType: l
		})
	);
}
function A(e, t) {
	if (e.authorization.accessToken) throw new T.Z({ errorCode: f.lTL.INVALID_COMMAND }, 'Already authenticated');
	if (e.authorization.authing) throw new T.Z({ errorCode: f.lTL.INVALID_COMMAND }, 'Already authenticating');
	return (
		(e.authorization.authing = !0),
		l.tn
			.get({
				url: f.ANM.OAUTH2_CURRENT_AUTH,
				headers: { Authorization: 'Bearer '.concat(t) },
				oldFormErrors: !0
			})
			.then(
				(n) => {
					e.authorization.authing = !1;
					let { application: i, user: a, scopes: s, expires: r } = n.body;
					if (e.application.id !== i.id)
						throw new T.Z({ errorCode: f.lTL.INVALID_CLIENTID }, "Application does not match the connection's");
					let l = I.default.getCurrentUser();
					if (null == l || !a || l.id !== a.id)
						throw new T.Z({ errorCode: f.lTL.INVALID_TOKEN }, 'Token does not match current user');
					return (
						(e.authorization.scopes = [...e.authorization.scopes, ...s, S.wE]),
						(e.authorization.accessToken = t),
						(e.authorization.expires = new Date(r)),
						d.Z.dispatch({
							type: 'RPC_APP_AUTHENTICATED',
							socketId: e.id,
							application: e.application
						}),
						{
							...n.body,
							access_token: t
						}
					);
				},
				() => {
					throw new T.Z({ errorCode: f.lTL.INVALID_TOKEN }, 'Invalid access token: '.concat(t));
				}
			)
			.catch((t) => {
				throw ((e.authorization.authing = !1), t);
			})
	);
}
function v(e, t) {
	return {
		[f.Etm.AUTHENTICATE]: (0, o.S)(f.Etm.AUTHENTICATE, {
			handler(n) {
				let {
					socket: a,
					args: { access_token: r }
				} = n;
				if (null == r && a.transport === S.He.IPC) {
					let n = a.application.id;
					if (null == n) throw new T.Z({ errorCode: f.lTL.INVALID_COMMAND }, 'No application.');
					let l = s.x.IDENTIFY,
						o = () =>
							N(
								{
									client_id: n,
									scope: l,
									response_type: 'token'
								},
								e,
								t
							).then((e) => {
								if (null == e) throw new T.Z({ errorCode: f.lTL.UNKNOWN_ERROR }, 'Unknown error occurred');
								let t = e.split(/#|\?/),
									s = i.parse(t[t.length - 1]);
								if (null != s.error) {
									var r;
									throw new T.Z(
										{ errorCode: f.lTL.OAUTH2_ERROR },
										'OAuth2 Error: '
											.concat(s.error, ': ')
											.concat(null !== (r = s.error_description) && void 0 !== r ? r : 'unknown error')
									);
								}
								return (
									!(function (e, t, n, i) {
										var a;
										let s = null !== (a = c.K.get(C)) && void 0 !== a ? a : {};
										(s[e] = {
											accessToken: t,
											scope: n,
											expires: Date.now() + i
										}),
											c.K.set(C, s);
									})(n, s.access_token, s.scope, s.expires_in),
									A(a, s.access_token)
								);
							});
					return null !=
						(r = (function (e, t) {
							let n = c.K.get(C);
							if (null != n && null != n[e]) {
								let i = n[e];
								if (!(i.scope !== t || i.expires <= Date.now())) return i.accessToken;
								delete n[e], c.K.set(C, n);
							}
						})(n, l))
						? A(a, r).catch(
								() => (
									!(function (e) {
										var t;
										let n = null !== (t = c.K.get(C)) && void 0 !== t ? t : {};
										delete n[e], c.K.set(C, n);
									})(n),
									o()
								)
							)
						: o();
				}
				if (null == r) throw new T.Z({ errorCode: f.lTL.INVALID_TOKEN }, 'No access token provided');
				return A(a, r);
			}
		}),
		[f.Etm.AUTHORIZE]: {
			handler(n) {
				let { socket: a, args: s } = n,
					r = s.client_id;
				if (!r) throw new T.Z({ errorCode: f.lTL.INVALID_CLIENTID }, 'No client id provided');
				if (null != a.authorization.accessToken)
					throw new T.Z({ errorCode: f.lTL.INVALID_COMMAND }, 'Already authenticated');
				if (a.authorization.authing) throw new T.Z({ errorCode: f.lTL.INVALID_COMMAND }, 'Already authing');
				return (
					(a.authorization.authing = !0),
					l.tn
						.get({
							url: f.ANM.APPLICATION_RPC(r),
							oldFormErrors: !0
						})
						.then(
							(n) => {
								let i = n.body;
								if (a.application.id !== i.id)
									throw new T.Z({ errorCode: f.lTL.INVALID_CLIENTID }, "Application does not match the connection's");
								let r = s.scopes || s.scope;
								return (
									delete s.scopes,
									N(
										{
											...s,
											scope: r
										},
										e,
										t
									)
								);
							},
							() => {
								throw new T.Z({ errorCode: f.lTL.INVALID_CLIENTID }, 'Invalid client id: '.concat(r));
							}
						)
						.then((e) => {
							if (((a.authorization.authing = !1), null == e))
								throw new T.Z({ errorCode: f.lTL.UNKNOWN_ERROR }, 'Unknown error occurred');
							let t = i.parse(e.split('?')[1].split('#')[0]);
							if (null != t.error) {
								var n;
								throw new T.Z(
									{ errorCode: f.lTL.OAUTH2_ERROR },
									'OAuth2 Error: '
										.concat(t.error, ': ')
										.concat(null !== (n = t.error_description) && void 0 !== n ? n : 'unknown error')
								);
							}
							return { code: t.code };
						})
						.catch((e) => {
							throw ((a.authorization.authing = !1), e);
						})
				);
			}
		}
	};
}
