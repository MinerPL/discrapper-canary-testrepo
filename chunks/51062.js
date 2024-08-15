n.d(t, {
	Z: function () {
		return T;
	}
}),
	n(47120);
var r = n(470079),
	i = n(718922),
	a = n(442837),
	s = n(456007),
	o = n(998698),
	l = n(541716),
	u = n(797610),
	c = n(271383),
	d = n(496675),
	_ = n(246946),
	E = n(594174),
	f = n(106824),
	h = n(691841),
	p = n(981631),
	I = n(377668),
	m = n(185923);
function T(e, t, n) {
	var T, g, S, A, N, v, O;
	let { channel: R, type: C } = e,
		[y, D] = r.useState(() => (0, f.P)()),
		L = (0, i.Z)(),
		b = (0, a.e7)([c.ZP], () => {
			if (null != e.guild) {
				var t;
				return null != c.ZP.getMember(null === (t = e.guild) || void 0 === t ? void 0 : t.id, I.fL);
			}
			return !1;
		}),
		M = (0, u.Ib)(e.guild, e.channel) && !b && !(0, u.g0)(e.guild),
		P = (0, a.e7)([c.ZP, E.default], () => {
			var e, t;
			let n = E.default.getCurrentUser();
			return (
				null !==
					(t =
						null != R.guild_id && null != n
							? null === (e = c.ZP.getMember(R.guild_id, n.id)) || void 0 === e
								? void 0
								: e.isPending
							: null) &&
				void 0 !== t &&
				t
			);
		}),
		{ canMentionEveryone: U, hidePersonalInformation: w } = (0, a.cj)(
			[d.Z, _.Z],
			() => ({
				canMentionEveryone: R.isPrivate() || P || C === l.I.RULES_INPUT || d.Z.can(p.Plq.MENTION_EVERYONE, R),
				hidePersonalInformation: _.Z.hidePersonalInformation
			}),
			[R, C, P]
		),
		{ activeCommand: x, activeCommandOption: G } = (0, a.cj)([o.Z], () => ({
			activeCommand: o.Z.getActiveCommand(R.id),
			activeCommandOption: o.Z.getActiveOption(R.id)
		})),
		k = (0, h.Z)({
			navId: 'channel-autocomplete',
			scrollerRef: n,
			state: y,
			onFocus: (e) => V.setSelectedIndex(e)
		}),
		B = null === (T = e.editorRef.current) || void 0 === T ? void 0 : T.getCurrentWord(),
		F = {
			...e,
			navigator: k,
			activeCommand: x,
			activeCommandOption: G,
			canMentionUsers:
				null !== (N = null === (g = C.users) || void 0 === g ? void 0 : g.allowMentioning) && void 0 !== N && N,
			canMentionEveryone: U,
			canMentionClyde: M,
			hidePersonalInformation: w,
			hideMentionDescription: C === l.I.RULES_INPUT,
			emojiIntention: C === l.I.RULES_INPUT ? m.Hz.COMMUNITY_CONTENT : m.Hz.CHAT,
			currentWord: null !== (v = null == B ? void 0 : B.word) && void 0 !== v ? v : '',
			currentWordIsAtStart: (null == B ? void 0 : B.isAtStart) === !0,
			optionText:
				null != G
					? (0, s.KF)(
							{
								[G.name]:
									null !==
										(O =
											null === (S = e.editorRef.current) || void 0 === S ? void 0 : S.getCurrentCommandOptionValue()) &&
									void 0 !== O
										? O
										: []
							},
							G.name
						)
					: ''
		},
		[V] = r.useState(() => new f.Z(F));
	return (
		r.useEffect(() => {
			V.updateProps(F);
		}),
		r.useImperativeHandle(t, () => V, [V]),
		r.useEffect(() => {
			let e = (e) => D(e);
			return (
				V.on('change', e),
				V.on('update', L),
				() => {
					V.off('change', e), V.off('update', L);
				}
			);
		}, [L, V]),
		r.useEffect(() => {
			var e;
			let t = null === (e = y.query) || void 0 === e ? void 0 : e.typeInfo.stores;
			if (null != t) {
				let e = () => V.queryResults();
				for (let n of t) n.addChangeListener(e);
				return () => {
					for (let n of t) n.removeChangeListener(e);
				};
			}
		}, [V, null === (A = y.query) || void 0 === A ? void 0 : A.typeInfo]),
		[y, V, k]
	);
}
