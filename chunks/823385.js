let r;
n(653041), n(47120), n(733860), n(724458);
var i,
	a = n(392711),
	s = n.n(a),
	o = n(442837),
	l = n(433517),
	u = n(570140),
	c = n(212819),
	d = n(938078),
	_ = n(220444),
	E = n(601070),
	f = n(210887),
	h = n(314897),
	p = n(592125),
	m = n(703558),
	I = n(984933),
	T = n(271383),
	g = n(430824),
	S = n(496675),
	A = n(306680),
	N = n(944486),
	v = n(914010),
	O = n(9156),
	R = n(483360),
	C = n(823379),
	y = n(981631),
	D = n(689938);
function L(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
let b = 'seenQSTutorial',
	M = [c.h8.USER, c.h8.GROUP_DM, c.h8.TEXT_CHANNEL, c.h8.GUILD, c.h8.APPLICATION, c.h8.LINK, c.h8.IN_APP_NAVIGATION],
	P = 0,
	U = !1,
	w = !1,
	x = null,
	G = [],
	k = null,
	B = 0,
	F = [],
	V = [];
function H() {
	(w = g.Z.getGuildCount() >= 3 || s().size(p.Z.getMutablePrivateChannels()) >= 20), (F = []);
}
function Z(e) {
	let t = (0, d.Z)(e);
	return null == t || (null != x && x !== t.type) ? null : t;
}
function Y(e) {
	var t;
	let { query: n, queryMode: i } = e,
		a = null !== (t = v.Z.getGuildId()) && void 0 !== t ? t : void 0,
		s = new Set(['user:'.concat(h.default.getId())]);
	null != a && s.add('guild:'.concat(a)),
		(r =
			null != r
				? r
				: new c.ZP(j, M, null != i ? 100 : 5, {
						frecencyBoosters: !0,
						blacklist: s
					})),
		(k = null),
		(B = n.length),
		(x = i),
		r.search(n);
}
function j(e, t) {
	if (
		!(function (e, t) {
			if (e.length !== t.length) return !1;
			for (let n = 0; n < e.length; n++) {
				let r = e[n],
					i = t[n];
				if (r.record.id !== i.record.id) return !1;
			}
			return !0;
		})(
			(e =
				'' === (t = t.trim()).trim()
					? (function () {
							var e, t;
							let n = null !== (e = v.Z.getGuildId()) && void 0 !== e ? e : void 0,
								r = null !== (t = N.Z.getChannelId()) && void 0 !== t ? t : void 0;
							switch (x) {
								case c.h8.USER: {
									let e = h.default.getId();
									return R.ZP.getRecentlyTalked(r, 100).filter((t) => {
										let { record: n } = t;
										return n.id !== e;
									});
								}
								case c.h8.APPLICATION:
									return R.ZP.queryApplications({
										query: '',
										limit: 100,
										fuzzy: !0
									});
								case c.h8.GUILD:
									return R.ZP.queryGuilds({
										query: '',
										limit: 100,
										fuzzy: !0
									});
								case c.h8.TEXT_CHANNEL:
									return R.ZP.queryChannels({
										query: '',
										guildId: v.Z.getGuildId(),
										limit: 100,
										fuzzy: !0
									});
								case c.h8.VOICE_CHANNEL:
									return R.ZP.queryChannels({
										query: '',
										guildId: v.Z.getGuildId(),
										limit: 100,
										fuzzy: !0,
										filter: () => !0,
										type: I.Zb
									});
							}
							let i = [],
								a = [];
							for (let e = 1; e < V.length; e += 1) {
								let t = Z(V[e]);
								if (null != t) ((t.type !== c.h8.TEXT_CHANNEL && t.type !== c.h8.VOICE_CHANNEL) || S.Z.can(y.Plq.VIEW_CHANNEL, t.record)) && a.push(t);
							}
							a.length > 0 && i.push((0, c.o6)(D.Z.Messages.QUICKSWITCHER_LAST_CHANNEL), ...a);
							let o = (function (e) {
								let t = [];
								return (
									m.Z.getRecentlyEditedDrafts(m.d.ChannelMessage).forEach((n) => {
										let { channelId: r } = n;
										if (e(r)) return;
										let i = Z(r);
										null != i && t.push(i);
									}),
									t
								);
							})((e) => e === r || V.includes(e));
							o.length > 0 && i.push((0, c.o6)(D.Z.Messages.QUICKSWITCHER_DRAFTS), ...o);
							let l = A.ZP.getMentionChannelIds()
								.filter((e) => e !== r && !V.includes(e))
								.map((e) => Z(e))
								.filter(C.lm)
								.reverse();
							if ((l.length > 0 && (i.push((0, c.o6)(D.Z.Messages.QUICKSWITCHER_MENTIONS)), (i = i.concat(l))), null != n)) {
								let e = I.ZP.getSelectableChannelIds(n)
									.filter((e) => {
										let t = p.Z.getChannel(e);
										return !(null == t || e === r || V.includes(e) || O.ZP.isChannelMuted(t.guild_id, e) || (null != t.parent_id && O.ZP.isChannelMuted(t.guild_id, t.parent_id))) && (0, _.d)(t);
									})
									.map((e) => Z(e))
									.filter((e) => e);
								Object.values(E.Z.getActiveJoinedUnreadThreadsForGuild(n)).forEach((t) => {
									for (let n in t) {
										let t = Z(n);
										null != t && e.push(t);
									}
								}),
									e.length > 0 && (i.push((0, c.o6)(D.Z.Messages.QUICKSWITCHER_UNREAD_CHANNELS)), (i = i.concat(e)));
							}
							return s()(i)
								.uniqBy((e) => e.record.id)
								.value();
						})()
					: e),
			F
		)
	)
		(F = e),
			!(function (e, t) {
				switch (x) {
					case c.h8.USER: {
						let t = g.Z.getGuild(v.Z.getGuildId());
						e.unshift((0, c.o6)(null != t ? D.Z.Messages.QUICKSWITCHER_QUERYMODE_USERS_IN_GUILD.format({ name: t.name }) : D.Z.Messages.QUICKSWITCHER_QUERYMODE_USERS)), (G = e);
						break;
					}
					case c.h8.TEXT_CHANNEL:
						e.unshift((0, c.o6)(D.Z.Messages.QUICKSWITCHER_QUERYMODE_TEXT_CHANNELS)), (G = e);
						break;
					case c.h8.VOICE_CHANNEL:
						e.unshift((0, c.o6)(D.Z.Messages.QUICKSWITCHER_QUERYMODE_VOICE_CHANNELS)), (G = e);
						break;
					case c.h8.GUILD:
						e.unshift((0, c.o6)(D.Z.Messages.QUICKSWITCHER_QUERYMODE_GUILDS)), (G = e);
						break;
					case c.h8.APPLICATION:
						e.unshift((0, c.o6)(D.Z.Messages.QUICKSWITCHER_QUERYMODE_APPLICATIONS)), (G = e);
						break;
					default:
						G = e;
				}
				if (t !== k) (k = t), (B = Math.max(t.length, B)), (P = (0, c.gJ)(c.a8.DOWN, -1, G));
				else {
					let e = G[P];
					null != e && e.type === c.h8.HEADER && (P = (0, c.gJ)(c.a8.DOWN, P, G));
				}
				z.emitChange();
			})(e, t);
}
function W() {
	(k = null), (B = 0), (F = []), null != r && (r.destroy(), (r = null));
}
class K extends (i = o.ZP.PersistedStore) {
	initialize(e) {
		var t;
		this.waitFor(T.ZP, g.Z, p.Z), this.syncWith([f.Z], () => !0), (U = l.K.get(b) || !1), (V = null !== (t = null == e ? void 0 : e.channelHistory) && void 0 !== t ? t : []);
	}
	getState() {
		return { channelHistory: V };
	}
	isOpen() {
		return null != r;
	}
	getResultTotals(e) {
		return null == r ? 0 : null == e ? r.results.reduce((e, t) => (t.type !== c.h8.HEADER ? e + 1 : e), 0) : r.results.reduce((t, n) => (n.type === e ? t + 1 : t), 0);
	}
	channelNoticePredicate(e, t) {
		let n = Date.now() - t >= y.Hqc;
		return w && n;
	}
	getFrequentGuilds() {
		return null != r ? r.queryGuilds('', 100) : null;
	}
	getFrequentGuildsLength() {
		return null != r ? r.queryGuilds('', 100).length : 0;
	}
	getChannelHistory() {
		return V;
	}
	getProps() {
		return {
			theme: f.Z.theme,
			query: null != r ? r.query : '',
			queryMode: x,
			results: G,
			selectedIndex: P,
			seenTutorial: U,
			maxQueryLength: B
		};
	}
}
L(K, 'displayName', 'QuickSwitcherStore'), L(K, 'persistKey', 'QuickSwitcherStore');
let z = new K(u.Z, {
	CONNECTION_OPEN: H,
	CONNECTION_OPEN_SUPPLEMENTAL: H,
	QUICKSWITCHER_SHOW: Y,
	SHOW_ACTION_SHEET_QUICK_SWITCHER: Y,
	QUICKSWITCHER_HIDE: W,
	OVERLAY_SET_INPUT_LOCKED: W,
	HIDE_ACTION_SHEET_QUICK_SWITCHER: W,
	QUICKSWITCHER_SEARCH: function (e) {
		var t, n;
		let { query: i, queryMode: a } = e;
		if (null == r) return !1;
		let s = null !== (t = v.Z.getGuildId()) && void 0 !== t ? t : null;
		if (x !== a) {
			r.setResultTypes(null != a ? [a] : M), r.setLimit(null != a ? 100 : 5);
			let e = null !== (n = v.Z.getGuildId()) && void 0 !== n ? n : void 0;
			a === c.h8.USER && null != e
				? r.setOptions(
						{
							userFilters: {
								guild: e,
								friends: !0
							}
						},
						!0
					)
				: a === c.h8.VOICE_CHANNEL
					? r.setOptions({ voiceChannelGuildFilter: null }, !0)
					: r.setOptions(
							{
								userFilters: null,
								voiceChannelGuildFilter: void 0
							},
							!0
						);
		}
		(x = a), r.search(i, x === c.h8.USER ? s : void 0);
	},
	QUICKSWITCHER_SELECT: function (e) {
		P = e.selectedIndex;
	},
	QUICKSWITCHER_SWITCH_TO: function () {
		if (U) return !1;
		(U = !0), l.K.set(b, !0);
	},
	CHANNEL_SELECT: function (e) {
		let { channelId: t } = e;
		if (null == t) return !1;
		(V = V.filter((e) => e !== t)).unshift(t), V.length > 4 && (V.length = 4);
	}
});
t.Z = z;
