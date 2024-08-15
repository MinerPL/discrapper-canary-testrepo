n(47120), n(653041);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	l = n.n(s),
	r = n(442837),
	o = n(846519),
	c = n(586902),
	u = n(317381),
	d = n(812206),
	h = n(835473),
	m = n(362721),
	p = n(574176),
	_ = n(106301),
	f = n(512384),
	E = n(470956),
	C = n(597998),
	g = n(199902),
	I = n(314897),
	x = n(271383),
	T = n(131951),
	N = n(496675),
	v = n(158776),
	S = n(885110),
	Z = n(797258),
	A = n(606304),
	M = n(979651),
	b = n(51144),
	R = n(649739),
	j = n(262317),
	L = n(981631),
	P = n(524484),
	O = n(313842);
let y = a.memo((e) => {
	var t;
	let { mute: n, deaf: a, user: s, channel: l, sessionId: o, nick: C } = e,
		N = s.id,
		O = (0, r.e7)([I.default], () => I.default.getId() === N, [N]),
		[y, D, k] = (0, r.Wu)([T.Z], () => (O ? [!T.Z.isSupported() || T.Z.isSelfMute() || T.Z.isSelfMutedTemporarily(), T.Z.isSelfDeaf(), !1] : [!T.Z.isSupported() || T.Z.isLocalMute(N), !1, T.Z.isLocalVideoDisabled(N)]), [O, N]),
		U = (0, r.e7)([A.Z], () => A.Z.isPrioritySpeaker(N)),
		w = (0, c.Z)({
			userId: N,
			checkSoundSharing: !0
		}),
		B = (0, r.e7)([x.ZP], () => x.ZP.isGuestOrLurker(l.guild_id, N)),
		H = (0, r.e7)(
			[u.ZP],
			() =>
				u.ZP.getEmbeddedActivitiesForChannel(l.id).find((e) => {
					let { userIds: t } = e;
					return t.has(N);
				}),
			[N, l.id]
		),
		G = (0, h.Z)(null != H ? [H.applicationId] : []),
		V = (0, R.Hr)('voice_users_eligibility_check', !1),
		F = (0, r.e7)([v.Z, S.Z], () => (O ? S.Z.getActivities() : v.Z.getActivities(N, l.guild_id))).find((e) => null != e.application_id && e.type === L.IIU.PLAYING),
		W = (0, r.e7)([d.Z], () => ((null == F ? void 0 : F.application_id) != null ? d.Z.getApplication(null == F ? void 0 : F.application_id) : void 0));
	null != W && R.ZP.trackExposure({ location: 'voice_users' });
	let [z, Y] = (0, r.Wu)([g.Z], () => [g.Z.getStreamForUser(N, l.getGuildId()), g.Z.getActiveStreamForUser(N, l.getGuildId())], [l, N]),
		K = (0, r.e7)([Z.Z], () => Z.Z.getSessionById(o)),
		q = b.ZP.useName(s),
		X = (0, r.e7)([M.Z], () => M.Z.getVoicePlatformForChannel(l.id, N), [l.id, N]),
		{ enableHangStatus: Q } = p.n.useExperiment({
			guildId: l.guild_id,
			location: 'VoiceUsers'
		}),
		J = (0, m.Z)(l, !0, s),
		$ = (0, r.e7)([_.Z], () => (O ? _.Z.getHangStatusActivity() : null), [O]),
		ee = (0, r.e7)([v.Z], () => v.Z.findActivity(N, (e) => e.type === L.IIU.HANG_STATUS), [N]),
		et = (0, E.Eu)(l.id, N);
	return (0, i.jsx)(f.Z, {
		shakeLocation: P.oZ.VOICE_USER,
		isShaking: w,
		children: (0, i.jsx)(j.ZP, {
			...e,
			nick: null != C ? C : q,
			canDrag: e.canDrag && !B,
			otherClientSessionType: null == K ? void 0 : null === (t = K.clientInfo) || void 0 === t ? void 0 : t.os,
			voicePlatform: X,
			localMute: y && !O,
			localVideoDisabled: k,
			mute: n || y,
			deaf: a || D,
			speaking: w,
			disconnected: et,
			priority: U,
			embeddedApplication: G[0],
			isStreaming: null != z && z.channelId === l.id,
			isWatching: null != Y && Y.state !== L.jm8.ENDED,
			isGuest: B,
			showHangStatus: J && Q && (I.default.getId() === s.id || null != ee),
			hangStatusActivity: O ? $ : ee,
			isSelf: I.default.getId() === s.id,
			application: Q || V ? W : void 0
		})
	});
});
y.displayName = 'ConnectedVoiceUser';
let D = [];
t.Z = function (e) {
	let { allowPreviews: t = !0, allowDragging: n = !0, channel: s, voiceStates: c, collapsed: u, collapsedMax: d = 6, tabIndex: m, location: p, numAudience: _, withGuildIcon: f = !1, className: g, children: x } = e,
		[T, S] = a.useState(null),
		[Z, A] = a.useState(!1),
		M = a.useRef(null),
		b = (0, E.Es)(s.id, null != c ? c : D),
		R = a.useRef(
			new o.sW(50, () => {
				S(M.current), (M.current = null);
			})
		),
		P = a.useRef(
			new o.sW(175, () => {
				S(null);
			})
		),
		k = a.useCallback(
			(e) => {
				t && (A(!0), P.current.cancel(), (M.current = e), R.current.delay());
			},
			[t]
		),
		U = a.useCallback(
			(e) => {
				t && (R.current.cancel(), T === e && (A(!1), P.current.delay()));
			},
			[t, T]
		),
		w = (0, r.Wu)([v.Z], () => {
			if (u) return [];
			let e = new Set();
			return (
				null == b ||
					b.forEach((t) => {
						let { user: n } = t;
						v.Z.getActivities(n.id, s.guild_id).forEach((t) => {
							null != t.application_id && e.add(t.application_id);
						});
					}),
				Array.from(e)
			);
		});
	(0, h.Z)(w);
	let B = (() => {
		if (null == b || 0 === b.length) return null;
		let e = (u && b.length > d + 1 ? b.slice(0, d) : b).map((e) => {
			var t;
			let { user: a, nick: l, voiceState: r } = e;
			return (0, i.jsx)(
				y,
				{
					user: a,
					nick: l,
					isSelfOnOtherClient: I.default.getId() === a.id && r.sessionId !== I.default.getSessionId(),
					mute: r.isVoiceMuted(),
					deaf: r.isVoiceDeafened(),
					video: r.selfVideo,
					serverMute: r.mute,
					serverDeaf: r.deaf,
					sessionId: null !== (t = r.sessionId) && void 0 !== t ? t : '',
					channel: s,
					collapsed: u,
					canDrag: n && N.Z.can(L.Plq.MOVE_MEMBERS, s),
					showPreview: k,
					hidePreview: U,
					previewIsOpen: Z,
					shouldShowPreview: T === a.id,
					tabIndex: m,
					location: p
				},
				a.id
			);
		});
		return (
			null != _ && _ > 0
				? e.push(
						(0, i.jsx)(j.ul, {
							collapsed: u,
							numAudience: _
						})
					)
				: u && b.length > d + 1 && e.push((0, i.jsx)(j.XX, { numUsers: b.length - d })),
			e
		);
	})();
	return null == B && null == x
		? null
		: (0, i.jsxs)(C.e, {
				className: l()(g, O.list, {
					[O.collapsed]: u,
					[O.withGuildIcon]: f
				}),
				collapsed: u,
				children: [B, x]
			});
};
