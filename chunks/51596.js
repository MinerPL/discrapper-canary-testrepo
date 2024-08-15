n.d(t, {
	$Z: function () {
		return x;
	},
	Cp: function () {
		return Z;
	},
	F_: function () {
		return b;
	},
	Se: function () {
		return R;
	},
	tF: function () {
		return M;
	},
	yC: function () {
		return y;
	}
}),
	n(757143),
	n(47120);
var l = n(570140),
	a = n(493683),
	s = n(475179),
	i = n(925549),
	r = n(287734),
	o = n(212819),
	c = n(336197),
	u = n(359110),
	d = n(769654),
	h = n(131704),
	_ = n(592125),
	f = n(283595),
	E = n(944486),
	g = n(914010),
	m = n(626135),
	S = n(777754),
	I = n(823385),
	A = n(981631),
	p = n(176505);
let C = () => Promise.resolve();
C = n(346329).playApplication;
let N = Object.freeze({
		[o.xQ.USER]: o.h8.USER,
		[o.xQ.TEXT_CHANNEL]: o.h8.TEXT_CHANNEL,
		[o.xQ.VOICE_CHANNEL]: o.h8.VOICE_CHANNEL,
		[o.xQ.GUILD]: o.h8.GUILD,
		[o.xQ.APPLICATION]: o.h8.APPLICATION
	}),
	L = new RegExp(
		'^'
			.concat(o.xQ.USER, '|')
			.concat(o.xQ.TEXT_CHANNEL, '|')
			.concat(o.xQ.VOICE_CHANNEL, '|\\')
			.concat(o.xQ.GUILD, '|\\')
			.concat(o.xQ.APPLICATION)
	);
function b(e) {
	var t, n;
	let l;
	let [a, s] = ((l = null !== (n = N[(t = e).charAt(0)]) && void 0 !== n ? n : null), [t.replace(L, ''), l]);
	return {
		query: a,
		queryMode: s
	};
}
function v(e, t) {
	let { results: n, queryMode: l, query: a, maxQueryLength: s } = I.Z.getProps(),
		i = g.Z.getGuildId(),
		r = E.Z.getChannelId(i),
		c = n[(0, o.gJ)(o.a8.DOWN, -1, n)],
		u = S.Z.isEmail(a),
		d = S.Z.isPhoneNumber(a),
		f = S.Z.isUserTagLike(a),
		A = null != r && (0, p.AB)(r),
		C = (e) => (null == e ? null : e.type === o.h8.IN_APP_NAVIGATION ? e.type + '_' + e.record.type : e.type),
		N = {
			current_channel_id: A ? void 0 : r,
			current_channel_static_route: A ? r : void 0,
			current_guild_id: i,
			query_mode: null != l ? l : 'GENERAL',
			query_length: a.length,
			max_query_length: s,
			is_email_like: u,
			is_phone_like: d,
			is_username_like: f,
			query: u || d || f ? null : a,
			top_result_type: C(c),
			top_result_score: null != c ? c.score : null,
			num_results_total: I.Z.getResultTotals(),
			num_results_users: I.Z.getResultTotals(o.h8.USER),
			num_results_text_channels: I.Z.getResultTotals(o.h8.TEXT_CHANNEL),
			num_results_voice_channels: I.Z.getResultTotals(o.h8.VOICE_CHANNEL),
			num_results_guilds: I.Z.getResultTotals(o.h8.GUILD),
			num_results_group_dms: I.Z.getResultTotals(o.h8.GROUP_DM)
		};
	if (null != r) {
		let e = _.Z.getChannel(r);
		N.current_channel_type = null != e ? e.type : null;
	}
	if (null != t) {
		let { type: e, score: l, record: a } = t;
		switch (((N.selected_type = C(t)), (N.selected_score = l), (N.selected_index = n.indexOf(t)), e)) {
			case o.h8.GUILD:
				N.selected_guild_id = a.id;
				break;
			case o.h8.TEXT_CHANNEL:
			case o.h8.VOICE_CHANNEL:
				a instanceof h.Sf && (N.selected_guild_id = null != a.guild_id ? a.guild_id : null),
					(N.selected_channel_id = a.id);
				break;
			case o.h8.GROUP_DM:
				N.selected_channel_id = a.id;
				break;
			case o.h8.USER:
				N.selected_user_id = a.id;
		}
	}
	m.default.track(e, N);
}
function T() {
	l.Z.dispatch({ type: 'QUICKSWITCHER_HIDE' });
}
function x() {
	let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'KEYBIND',
		t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
	!(function (e) {
		let t;
		if (I.Z.isOpen()) return;
		let n = g.Z.getGuildId(),
			l = E.Z.getChannelId(n);
		if (null != l) {
			let e = _.Z.getChannel(l);
			t = null != e ? e.type : null;
		}
		m.default.track(A.rMx.QUICKSWITCHER_OPENED, {
			source: e,
			current_guild_id: n,
			current_channel_id: l,
			current_channel_type: t
		});
	})(e),
		l.Z.dispatch({
			type: 'QUICKSWITCHER_SHOW',
			...b(t)
		});
}
function Z() {
	v(A.rMx.QUICKSWITCHER_CLOSED), T();
}
function y(e) {
	l.Z.dispatch({
		type: 'QUICKSWITCHER_SEARCH',
		...b(e)
	});
}
function M(e) {
	l.Z.dispatch({
		type: 'QUICKSWITCHER_SELECT',
		selectedIndex: e
	});
}
function R(e) {
	let t,
		n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
	T(), v(A.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
	let { type: h, record: E } = e,
		g = { page: A.ZY5.QUICK_SWITCHER };
	switch (h) {
		case o.h8.GUILD:
			(0, d.X)(E.id, { navigationReplace: !0 });
			break;
		case o.h8.TEXT_CHANNEL:
			null != (t = _.Z.getChannel(E.id)) &&
				(0, u.Kh)(t.id, {
					state: { analyticsSource: g },
					navigationReplace: !0
				});
			break;
		case o.h8.VOICE_CHANNEL:
			null != (t = _.Z.getChannel(E.id)) &&
				(n ? s.Z.updateChatOpen(E.id, !0) : r.default.selectVoiceChannel(E.id),
				(0, u.Kh)(t.id, {
					state: { analyticsSource: g },
					navigationReplace: !0
				}));
			break;
		case o.h8.USER:
			a.Z.openPrivateChannel([E.id], !1, !1, 'Quickswitcher'), i.Z.channelListScrollTo(A.ME, _.Z.getDMFromUserId(E.id));
			break;
		case o.h8.GROUP_DM:
			(0, u.Kh)(E.id, { navigationReplace: !0 }), i.Z.channelListScrollTo(A.ME, E.id);
			break;
		case o.h8.APPLICATION:
			let m = f.Z.getActiveLibraryApplication(E.id);
			C(E.id, m, {
				analyticsParams: {
					source: A.Sbl.QUICK_SWITCHER,
					location: A.Sbl.QUICK_SWITCHER
				}
			});
			break;
		case o.h8.LINK:
			(0, c.Z)(E.path, { navigationReplace: !0 });
			break;
		case o.h8.IN_APP_NAVIGATION:
			(0, c.Z)(E.path, { navigationReplace: !0 });
	}
	l.Z.dispatch({
		type: 'QUICKSWITCHER_SWITCH_TO',
		result: e
	});
}
