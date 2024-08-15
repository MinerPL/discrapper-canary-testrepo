n.d(t, {
	As: function () {
		return i;
	},
	ZP: function () {
		return Q;
	},
	hC: function () {
		return w;
	},
	jd: function () {
		return a;
	}
}),
	n(653041),
	n(47120);
var i,
	a,
	s,
	r,
	l = n(470079),
	o = n(836560),
	c = n(512722),
	u = n.n(c),
	d = n(392711),
	_ = n.n(d),
	E = n(570140),
	I = n(904245),
	m = n(45114),
	T = n(607070),
	h = n(853856),
	N = n(181945),
	f = n(220444),
	C = n(601070),
	p = n(344185),
	g = n(569471),
	S = n(723170),
	A = n(675478),
	R = n(581883),
	x = n(131704),
	O = n(592125),
	M = n(984933),
	v = n(731290),
	L = n(430824),
	Z = n(375954),
	P = n(496675),
	b = n(306680),
	D = n(771845),
	j = n(9156),
	U = n(70956),
	y = n(823379),
	B = n(709054),
	k = n(981631),
	G = n(124368);
function F(e, t, n) {
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
((s = i || (i = {}))[(s.Favorite = 0)] = 'Favorite'), (s[(s.PrivateChannel = 1)] = 'PrivateChannel'), (s[(s.Mentioned = 2)] = 'Mentioned'), (s[(s.AllMessagesNotifications = 3)] = 'AllMessagesNotifications'), (s[(s.GuildChannel = 4)] = 'GuildChannel'), (s[(s.OldChannel = 5)] = 'OldChannel'), (s[(s.NoNotifications = 6)] = 'NoNotifications'), (s[(s.ReallyOldChannel = 7)] = 'ReallyOldChannel'), ((r = a || (a = {})).Loading = 'loading'), (r.Loaded = 'loaded'), (r.Done = 'done');
let w = 25;
class V extends o.EventEmitter {
	loadMore() {
		let { loadState: e, channels: t } = this.state;
		if ('loaded' !== e) return;
		let n = !1,
			i = t.map((e) => {
				if (e.isFullyLoaded || e.deleted || n) return e;
				if (e.collapsed)
					return e.hasLoadedAnything
						? e
						: {
								...e,
								hasLoadedAnything: !0
							};
				return (e = this.populateInitialStateFromStore(e)).isFullyLoaded ? e : (u()('nsfw' !== e.type, 'this channel should already be loaded'), 'messages' === e.type && this.loadChannelMessages(e) && (n = !0), e);
			});
		(!n || i.some((e, n) => e !== t[n])) &&
			this.setState({
				channels: i,
				loadState: n ? this.state.loadState : 'done'
			});
	}
	populateInitialStateFromStore(e) {
		if ('messages' === e.type) return H(e, !1);
		if ('nsfw' === e.type)
			return {
				...e,
				isFullyLoaded: !0,
				hasLoadedAnything: !0
			};
		if ('forum' === e.type) {
			let t = p.Z.hasLoaded(e.guildId);
			return {
				...e,
				isFullyLoaded: t,
				hasLoadedAnything: t
			};
		} else (0, y.vE)(e);
	}
	clearScrollToChannelIndex() {
		this.setState({ scrollToChannelIndex: null });
	}
	loadChannelMessages(e) {
		I.Z.clearChannel(e.channelId);
		let t = I.Z.fetchMessages({
			channelId: e.channelId,
			limit: k.AQB,
			jump: {
				messageId: e.oldestReadMessageId,
				flash: !0
			}
		});
		return (
			null != t &&
			!1 !== t &&
			(this.setState({ loadState: 'loading' }),
			t.then(
				(t) => {
					this.setState({
						loadState: 'loaded',
						channels: this.updateChannel(e.channelId, (e) => {
							u()('messages' === e.type, 'channel cannot change type');
							let n = H(e, !0);
							return (
								(0 === n.messages.length || n.messages.length === e.messages.length) &&
									(n = {
										...n,
										hasLoadedAnything: !0,
										isFullyLoaded: !0,
										hasError: !t
									}),
								n
							);
						})
					});
				},
				() => {
					this.setState({
						loadState: 'loaded',
						channels: this.updateChannel(e.channelId, (e) => {
							var t;
							return (
								u()('messages' === e.type, 'channel cannot change type'),
								{
									...H(e, !0),
									isFullyLoaded: !0,
									hasError: !0,
									hasLoadedAnything: !0,
									newestUnreadMessageId: null === (t = e.messages[e.messages.length - 1]) || void 0 === t ? void 0 : t.id
								}
							);
						})
					});
				}
			),
			!0)
		);
	}
	updateChannel(e, t) {
		return this.state.channels.map((n) => (n.channelId === e ? t(n) : n));
	}
	setState(e) {
		for (let t in e)
			if (e[t] !== this.state[t]) {
				(this.state = {
					...this.state,
					...e
				}),
					this.emit('change', this.state);
				return;
			}
	}
	constructor(e, t) {
		super(),
			F(this, 'state', void 0),
			F(this, 'scrollerRef', void 0),
			F(this, 'maybeLoadMore', void 0),
			F(this, 'reloadMessages', void 0),
			F(this, 'getNumUnreadChannels', void 0),
			F(this, 'markChannelRead', void 0),
			F(this, 'markGuildRead', void 0),
			F(this, 'deleteChannel', void 0),
			F(this, 'markAllRead', void 0),
			F(this, 'toggle', void 0),
			F(this, 'handleUserGuildSettingsStoreChange', void 0),
			F(this, 'handleJoinedThreadsStoreChange', void 0),
			F(this, 'handleActiveThreadsStoreChange', void 0),
			(this.state = e),
			(this.scrollerRef = t),
			(this.maybeLoadMore = () => {
				var e;
				let t = null === (e = this.scrollerRef.current) || void 0 === e ? void 0 : e.getScrollerState();
				if (null != t) t.scrollHeight - t.scrollTop - t.offsetHeight < 2000 && this.loadMore();
			}),
			(this.reloadMessages = () => {
				this.setState({ channels: this.state.channels.map((e) => ('messages' === e.type && e.hasLoadedAnything ? H(e, !1, !0) : e)) });
			}),
			(this.getNumUnreadChannels = () => this.state.channels.length),
			(this.markChannelRead = (e) => {
				let { channelId: t, newestUnreadMessageId: n } = e;
				if ((E.Z.wait(() => m.In(t, !0, void 0, n, { section: k.jXE.INBOX })), 1 === this.state.channels.length)) {
					this.deleteChannel(t);
					return;
				}
				this.setState({
					channels: this.updateChannel(t, (e) => ({
						...e,
						deleted: !0
					}))
				}),
					T.Z.useReducedMotion && this.deleteChannel(t),
					this.maybeLoadMore();
			}),
			(this.markGuildRead = (e) => {
				E.Z.wait(() => (0, N.Z)([e], k.jXE.INBOX)), this.setState({ channels: this.state.channels.filter((t) => t.guildId !== e) }), this.maybeLoadMore();
			}),
			(this.deleteChannel = (e) => {
				this.setState({
					scrollToChannelIndex: _().findIndex(this.state.channels, (t) => t.channelId === e),
					channels: this.state.channels.filter((t) => t.channelId !== e)
				}),
					this.maybeLoadMore();
			}),
			(this.markAllRead = () => {
				m.y5(
					this.state.channels.map((e) => ({
						channelId: e.channelId,
						messageId: e.newestUnreadMessageId
					}))
				),
					this.setState({ channels: [] });
			}),
			(this.toggle = (e) => {
				let { channelId: t, guildId: n } = e,
					{ channels: i, collapsedChannels: a, loadState: s } = this.state,
					r = _().findIndex(i, (e) => e.channelId === t),
					l = i[r],
					o = !l.collapsed;
				(a[t] = o),
					(0, A.BU)(
						n,
						t,
						(e) => {
							e.collapsedInInbox = o;
						},
						A.fy.FREQUENT_USER_ACTION
					),
					this.setState({
						scrollToChannelIndex: r,
						collapsedChannels: a,
						loadState: 'done' !== s || o || l.isFullyLoaded ? s : 'loaded',
						channels: this.updateChannel(t, (e) => ({
							...e,
							collapsed: o
						}))
					}),
					l.collapsed ? !l.isFullyLoaded && this.loadMore() : this.maybeLoadMore();
			}),
			(this.handleUserGuildSettingsStoreChange = () => {
				let e = this.state.channels.filter((e) => !j.ZP.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
				e.length !== this.state.channels.length && this.setState({ channels: e });
			}),
			(this.handleJoinedThreadsStoreChange = () => {
				let e = this.state.channels.filter((e) => !g.Z.isMuted(e.channelId));
				e.length !== this.state.channels.length && this.setState({ channels: e });
			}),
			(this.handleActiveThreadsStoreChange = () => {
				let e = this.state.channels.map((e) => {
					if ('forum' !== e.type) return e;
					{
						let t = p.Z.hasLoaded(e.guildId);
						return {
							...e,
							isFullyLoaded: t,
							hasLoadedAnything: t
						};
					}
				});
				this.setState({ channels: e });
			});
	}
}
function H(e, t) {
	var n;
	let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
		a = Z.Z.getMessages(e.channelId),
		s = a.toArray().filter((t) => B.default.compare(t.id, e.oldestReadMessageId) > 0 && 0 >= B.default.compare(t.id, e.newestUnreadMessageId));
	if (s.length === e.messages.length && s.every((t, n) => e.messages[n] === t) && i) return e;
	let r = null != a.getAfter(e.oldestReadMessageId) || (null === (n = s[0]) || void 0 === n ? void 0 : n.id) === e.oldestUnreadMessageId,
		l = s[s.length - 1],
		o = B.default.compare(null == l ? void 0 : l.id, e.newestUnreadMessageId) >= 0 || s.length >= w;
	return {
		...e,
		messages: s,
		hasLoadedAnything: e.hasLoadedAnything || r || t,
		hasLoadedFirst: e.hasLoadedFirst || r || t,
		isFullyLoaded: e.isFullyLoaded || (r && o) || (t && !a.hasMoreAfter)
	};
}
function Y() {
	let e = (function () {
			var e, t;
			let n = {},
				i = null !== (t = null === (e = R.Z.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : {};
			for (let e in i)
				for (let t in i[e].channels) {
					let a = O.Z.getChannel(t);
					(!(t in n) || (null == a ? void 0 : a.guild_id) === e) && (n[t] = i[e].channels[t].collapsedInInbox);
				}
			return n;
		})(),
		t = (function (e) {
			let t = [];
			return (
				O.Z.getSortedPrivateChannels().forEach((n) => W(e, t, null, n.id)),
				D.ZP.getFlattenedGuildIds().forEach((n) => {
					if (null == n) return;
					let i = M.ZP.getSelectableChannelIds(n),
						a = C.Z.getActiveJoinedUnreadThreadsForGuild(n);
					i.forEach((i) => {
						var s;
						W(e, t, n, i);
						let r = null !== (s = a[i]) && void 0 !== s ? s : {};
						for (let i in r) W(e, t, n, i);
					});
				}),
				_().sortBy(t, (e) => e.sortOrder)
			);
		})(e),
		n = _()
			.uniq(t.map((e) => e.guildId))
			.filter(y.lm);
	return (
		E.Z.dispatch({
			type: 'INBOX_OPEN',
			guildIds: n
		}),
		{
			collapsedChannels: e,
			loadState: 'loaded',
			channels: t,
			scrollToChannelIndex: null
		}
	);
}
function W(e, t, n, i) {
	if (null == i) return;
	let a = O.Z.getChannel(i);
	if (null == a || (!x.Ec.has(a.type) && j.ZP.isGuildOrCategoryOrChannelMuted(n, a.id))) return;
	if (a.isPrivate()) {
		if (0 === b.ZP.getMentionCount(i)) return;
	} else if (!(0, f.d)(a) && 0 === b.ZP.getMentionCount(i)) return;
	if (!a.isPrivate() && !P.Z.can(k.Plq.READ_MESSAGE_HISTORY, a)) return;
	let s = b.ZP.ackMessageId(i);
	if (null == s) {
		let e = L.Z.getGuild(a.guild_id);
		if (null == e || null == e.joinedAt) return;
		s = B.default.fromTimestamp(e.joinedAt.getTime());
	}
	let r = b.ZP.getOldestUnreadMessageId(i),
		l = b.ZP.lastMessageId(i),
		o = b.ZP.getMentionCount(i),
		c = o > 0 || a.isPrivate();
	if (null == l || B.default.compare(s, l) >= 0) return;
	let u = {
		guildId: n,
		channelId: i,
		oldestReadMessageId: s,
		oldestUnreadMessageId: r,
		newestUnreadMessageId: l,
		collapsed: !0 === e[i],
		hasLoadedAnything: !1,
		hasLoadedFirst: !1,
		isFullyLoaded: !1,
		hasError: !1,
		hasMentionsOrUnreads: c,
		mentionCount: o,
		sortOrder: (function (e, t, n) {
			let i = O.Z.getChannel(t);
			if (h.Z.isFavorite(t)) return 0;
			if (i.isPrivate()) return 1;
			if (b.ZP.getMentionCount(t) > 0) return 2;
			if (null != n) {
				let e = B.default.extractTimestamp(n);
				if (Date.now() - e > z) return 7;
				if (Date.now() - e > K) return 5;
			}
			if (i.isThread()) {
				let e = (0, S.J)(i);
				return e === G.iN.ALL_MESSAGES ? 3 : e === G.iN.NO_MESSAGES ? 6 : 4;
			}
			{
				let n = j.ZP.getChannelMessageNotifications(e, t),
					i = n === k.bL.NULL ? j.ZP.getMessageNotifications(e) : n;
				return i === k.bL.ALL_MESSAGES ? 3 : i === k.bL.NO_MESSAGES ? 6 : 4;
			}
		})(n, i, l)
	};
	a.isNSFW() && !v.Z.didAgree(a.guild_id)
		? t.push({
				...u,
				type: 'nsfw'
			})
		: a.isForumLikeChannel()
			? t.push({
					...u,
					type: 'forum'
				})
			: t.push({
					...u,
					type: 'messages',
					messages: []
				});
}
let K = 2 * U.Z.Millis.DAY,
	z = 10 * U.Z.Millis.DAY;
function Q(e) {
	let [t, n] = l.useState(() => new V(Y(), e)),
		[i, a] = l.useState(!1),
		s = l.useRef(Date.now()),
		[r, o] = l.useState(() => Y());
	return (
		l.useEffect(() => {
			let e = (e) => o(e);
			return (
				t.on('change', e),
				o(t.state),
				() => {
					t.off('change', e);
				}
			);
		}, [t]),
		l.useEffect(() => {
			if (null == r || r.channels.length > 0 || i) return;
			let t = Date.now(),
				l = Y();
			0 === l.channels.length || t - s.current < 10 * U.Z.Millis.SECOND ? a(!0) : ((s.current = Date.now()), n(new V(l, e)));
		}, [r, i, e]),
		l.useLayoutEffect(t.maybeLoadMore, [null == r ? void 0 : r.channels, null == r ? void 0 : r.loadState]),
		l.useEffect(() => (Z.Z.addChangeListener(t.reloadMessages), () => Z.Z.removeChangeListener(t.reloadMessages)), [t.reloadMessages]),
		l.useEffect(() => (j.ZP.addChangeListener(t.handleUserGuildSettingsStoreChange), () => j.ZP.removeChangeListener(t.handleUserGuildSettingsStoreChange)), [t]),
		l.useEffect(() => (g.Z.addChangeListener(t.handleJoinedThreadsStoreChange), () => g.Z.removeChangeListener(t.handleJoinedThreadsStoreChange)), [t]),
		l.useEffect(() => (p.Z.addChangeListener(t.handleActiveThreadsStoreChange), () => p.Z.removeChangeListener(t.handleActiveThreadsStoreChange)), [t]),
		[r, t]
	);
}
