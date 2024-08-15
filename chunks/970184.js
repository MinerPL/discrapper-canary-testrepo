n.d(t, {
	CJ: function () {
		return b;
	},
	Ee: function () {
		return y;
	},
	Il: function () {
		return Z;
	}
}),
	n(47120),
	n(789020);
var l = n(735250),
	u = n(470079),
	i = n(512722),
	r = n.n(i),
	a = n(442837),
	o = n(570140),
	d = n(911969),
	s = n(71619),
	c = n(282397),
	E = n(622449),
	T = n(188597),
	_ = n(41776),
	I = n(665906),
	S = n(592125),
	C = n(271383),
	f = n(607744),
	p = n(594174),
	N = n(280501),
	m = n(892902),
	g = n(359232);
let O = (e) => {
		switch (e.type) {
			case d.re.BUTTON:
				return e.style !== d.ZJ.LINK;
			case d.re.STRING_SELECT:
			case d.re.USER_SELECT:
			case d.re.ROLE_SELECT:
			case d.re.MENTIONABLE_SELECT:
			case d.re.CHANNEL_SELECT:
				return !0;
			case d.re.ACTION_ROW:
			case d.re.INPUT_TEXT:
				return !1;
		}
	},
	M = function (e, t) {
		let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
			l = N.gH.NORMAL;
		return null != e && e.state !== E.F.FAILED && (e.data.interactionType === d.B8.MESSAGE_COMPONENT && e.data.componentId === t.id ? (l = N.gH.LOADING) : O(t) && (l = N.gH.DISABLED)), n && (l = N.gH.DISABLED), l;
	},
	A = (e) => {
		let t = S.Z.getChannel(e),
			n = (0, a.e7)([f.Z], () => (null == t ? void 0 : t.guild_id) == null || f.Z.canChatInGuild(t.guild_id), [t]),
			l = (0, a.e7)([_.Z], () => (null == t ? void 0 : t.guild_id) != null && _.Z.isLurking(t.guild_id), [t]),
			u = (0, a.e7)([C.ZP, p.default], () => {
				var e, n;
				let l = p.default.getCurrentUser();
				return null !== (n = (null == t ? void 0 : t.guild_id) != null && null != l ? (null === (e = C.ZP.getMember(null == t ? void 0 : t.guild_id, l.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== n && n;
			}),
			[, i] = (0, s.AB)(null == t ? void 0 : t.guild_id),
			r = (0, I.tc)(t);
		return !!(!n || l || u || (null == t ? void 0 : t.isLockedThread()) || ((null == t ? void 0 : t.isArchivedThread()) && !r)) || !!i || !1;
	};
function R(e, t) {
	let n = u.useContext(L),
		[l, i] = u.useState(null),
		r = u.useCallback(
			(t) => {
				let n = (0, g.Z)(e, t);
				return i(n), null == n;
			},
			[e]
		);
	return (
		u.useEffect(() => {
			var e;
			let l = () => r(t);
			return (
				null === (e = n.validators) || void 0 === e || e.add(l),
				() => {
					var e;
					null === (e = n.validators) || void 0 === e || e.delete(l);
				}
			);
		}, [n.validators, r, t]),
		{
			error: l,
			validate: r
		}
	);
}
function h(e, t, n) {
	var l;
	let i = (0, a.e7)([m.Z], () => m.Z.getInteractionComponentState(e.id, t.id)),
		r = (0, a.e7)([c.ZP], () => c.ZP.getInteraction(e), [e]),
		o = A(e.channel_id),
		{ error: d, validate: s } = R(t, i),
		E = null !== (l = e.applicationId) && void 0 !== l ? l : e.author.id;
	return {
		state: i,
		executeStateUpdate: u.useCallback(
			(n) => {
				if (!s(n)) return !1;
				let l = S.Z.getChannel(e.channel_id);
				return (
					null != l &&
						null != t.customId &&
						(0, T.tM)({
							componentType: t.type,
							messageId: e.id,
							messageFlags: e.flags,
							customId: t.customId,
							componentId: t.id,
							applicationId: E,
							channelId: l.id,
							guildId: l.guild_id,
							localState: n
						}),
					!0
				);
			},
			[e.channel_id, e.flags, e.id, t.customId, t.type, t.id, E, s]
		),
		isDisabled: o,
		visualState: M(r, t),
		error: d
	};
}
function v(e, t, n) {
	let l = (0, a.e7)([m.Z], () => m.Z.getInteractionComponentState(e.customId, t.id)),
		{ error: i, validate: r } = R(t, l),
		d = u.useCallback(
			(n) =>
				null == n ||
				(o.Z.dispatch({
					type: 'SET_INTERACTION_COMPONENT_STATE',
					rootContainerId: e.customId,
					componentId: t.id,
					state: n
				}),
				!!r(n) || !1),
			[e.customId, t.id, r]
		);
	return (
		u.useEffect(() => {
			d(n);
		}, []),
		{
			state: l,
			executeStateUpdate: d,
			isDisabled: !1,
			visualState: N.gH.NORMAL,
			error: i
		}
	);
}
let L = u.createContext(null);
function Z(e) {
	let { children: t, message: n, modal: i, validators: a } = e,
		o = u.useMemo(
			() =>
				null != n
					? {
							useComponentState: h.bind(null, n),
							channelId: n.channel_id,
							message: n,
							validators: a
						}
					: (r()(null != i, 'modal is present if message is not'),
						{
							useComponentState: v.bind(null, i),
							channelId: i.channelId,
							modal: i,
							validators: a
						}),
			[n, i, a]
		);
	return (0, l.jsx)(L.Provider, {
		value: o,
		children: t
	});
}
function y(e, t) {
	return u.useContext(L).useComponentState(e, t);
}
function b() {
	return u.useContext(L);
}
