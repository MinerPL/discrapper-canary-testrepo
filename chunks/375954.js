n(47120), n(789020), n(653041), n(177593);
var r,
	i,
	a,
	s,
	o = n(392711),
	l = n.n(o),
	u = n(442837),
	c = n(570140),
	d = n(89892),
	_ = n(673750),
	E = n(710845),
	f = n(163268),
	h = n(723352),
	p = n(160404),
	I = n(786761),
	m = n(418476),
	T = n(739566),
	g = n(995774),
	S = n(706454),
	A = n(630388),
	N = n(709054),
	v = n(314897),
	O = n(592125),
	R = n(796974),
	C = n(984933),
	y = n(271383),
	D = n(430824),
	L = n(496675),
	b = n(699516),
	M = n(944486),
	P = n(914010),
	U = n(594174),
	w = n(981631);
let x = new Set(),
	G = new E.Z('MessageStore'),
	k = !1;
function B() {
	d.Z.forEach((e) => {
		d.Z.commit(
			e.mutate({
				ready: !1,
				loadingMore: !1
			})
		);
	}),
		x.clear();
}
function F() {
	d.Z.forEach((e) => {
		let { channelId: t } = e;
		null == O.Z.getChannel(t) && d.Z.clear(t);
	});
}
function V() {
	d.Z.forEach((e) => {
		d.Z.commit(e.reset(e.map((e) => e.set('blocked', b.Z.isBlockedForMessage(e)))));
	});
}
function H(e) {
	let { type: t, channelId: n, messageId: r, userId: i, emoji: a, reactionType: s } = e,
		o = d.Z.get(n);
	if (null == o || !(0, g.sm)(e)) return !1;
	let l = v.default.getId() === i;
	(o = o.update(r, (n) =>
		'MESSAGE_REACTION_ADD' === t ? n.addReaction(a, l, e.colors, s) : n.removeReaction(a, l, s)
	)),
		d.Z.commit(o);
}
function Z(e) {
	let { type: t, messageData: n } = e,
		{ message: r } = n,
		i = (0, _.hc)(n),
		a = r.channelId,
		s = d.Z.getOrCreate(a);
	if (!s.has(i)) return !1;
	(s = s.update(i, (e) => {
		var n;
		return (
			(null === (n = e.embeds) || void 0 === n ? void 0 : n.filter(h.K).length) > 0 && (e = e.set('embeds', [])),
			'MESSAGE_SEND_FAILED_AUTOMOD' === t && (e = e.set('flags', (0, A.pj)(e.flags, w.iLy.EPHEMERAL))),
			e
		);
	})),
		d.Z.commit(s);
}
class Y extends (r = u.ZP.Store) {
	initialize() {
		this.waitFor(U.default, O.Z, R.Z, y.ZP, S.default, M.Z, P.Z, D.Z, b.Z, C.ZP), this.syncWith([p.Z], () => {});
	}
	getMessages(e) {
		if (p.Z.hasViewingRoles()) {
			let t = O.Z.getChannel(e),
				n = null == t ? void 0 : t.getGuildId();
			if (p.Z.isViewingRoles(n) && !L.Z.can(w.Plq.VIEW_CHANNEL, t)) return new d.Z(e);
		}
		return d.Z.getOrCreate(e);
	}
	getMessage(e, t) {
		return d.Z.getOrCreate(e).get(t);
	}
	getLastEditableMessage(e) {
		let t = U.default.getCurrentUser();
		return l()(this.getMessages(e).toArray())
			.reverse()
			.find((e) => (0, m.Z)(e, null == t ? void 0 : t.id));
	}
	getLastCommandMessage(e) {
		let t = U.default.getCurrentUser();
		return this.getMessages(e)
			.toArray()
			.reverse()
			.find((e) => null != e.interaction && e.interaction.user.id === (null == t ? void 0 : t.id));
	}
	getLastMessage(e) {
		return l()(this.getMessages(e).toArray()).reverse().get(0);
	}
	getLastNonCurrentUserMessage(e) {
		let t = U.default.getCurrentUser();
		return l()(this.getMessages(e).toArray())
			.reverse()
			.find((e) => e.author.id !== (null == t ? void 0 : t.id));
	}
	jumpedMessageId(e) {
		let t = d.Z.get(e);
		return null == t ? void 0 : t.jumpTargetId;
	}
	focusedMessageId(e) {
		let t = d.Z.get(e);
		return null == t ? void 0 : t.focusTargetId;
	}
	hasPresent(e) {
		let t = d.Z.get(e);
		return null != t && t.ready && t.hasPresent();
	}
	isReady(e) {
		return d.Z.getOrCreate(e).ready;
	}
	whenReady(e, t) {
		this.addConditionalChangeListener(() => {
			if (this.isReady(e)) return setImmediate(t), !1;
		});
	}
	isLoadingMessages(e) {
		return d.Z.getOrCreate(e).loadingMore;
	}
	hasCurrentUserSentMessage(e) {
		let t = U.default.getCurrentUser();
		return null != this.getMessages(e).findNewest((e) => e.author.id === (null == t ? void 0 : t.id));
	}
	hasCurrentUserSentMessageSinceAppStart() {
		return k;
	}
}
(s = 'MessageStore'),
	(a = 'displayName') in (i = Y)
		? Object.defineProperty(i, a, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (i[a] = s),
	(t.Z = new Y(c.Z, {
		BACKGROUND_SYNC_CHANNEL_MESSAGES: function (e) {
			let { changesByChannelId: t } = e;
			for (let e in t) {
				let n = d.Z.get(e);
				if (null != n) {
					n.cached;
					n.mergeDelta(t[e].new_messages, t[e].modified_messages, t[e].deleted_message_ids);
				}
			}
		},
		CONNECTION_OPEN: B,
		OVERLAY_INITIALIZE: B,
		CACHE_LOADED: function (e) {
			for (let [t, n] of N.default.entries(e.messages)) {
				let e = d.Z.getOrCreate(t).addCachedMessages(n, !0);
				d.Z.commit(e);
			}
		},
		LOAD_MESSAGES: function () {
			return !0;
		},
		LOAD_MESSAGES_SUCCESS: function (e) {
			let {
					channelId: t,
					isBefore: n,
					isAfter: r,
					jump: i,
					hasMoreBefore: a,
					hasMoreAfter: s,
					messages: o,
					isStale: l,
					truncate: u
				} = e,
				c = d.Z.getOrCreate(t);
			(c = c.loadComplete({
				newMessages: o,
				isBefore: n,
				isAfter: r,
				jump: i,
				hasMoreBefore: a,
				hasMoreAfter: s,
				cached: l,
				hasFetched: !0
			})),
				null != u && (n || r) && (!n || !r) && (c = c.truncate(n, r)),
				d.Z.commit(c);
		},
		LOAD_MESSAGES_FAILURE: function (e) {
			let { channelId: t } = e,
				n = d.Z.getOrCreate(t);
			d.Z.commit(
				n.mutate({
					loadingMore: !1,
					error: !0
				})
			);
		},
		LOAD_MESSAGES_SUCCESS_CACHED: function (e) {
			let { channelId: t, jump: n, focus: r, before: i, after: a, limit: s, truncate: o } = e,
				l = d.Z.getOrCreate(t);
			(null == n ? void 0 : n.present)
				? (l = l.jumpToPresent(s))
				: (null == r ? void 0 : r.messageId) != null
					? (l = l.focusOnMessage(r.messageId))
					: (null == n ? void 0 : n.messageId) != null
						? (l = l.jumpToMessage(n.messageId, n.flash, n.offset, n.returnMessageId, n.jumpType))
						: (null != i || null != a) && (l = l.loadFromCache(null != i, s)),
				null != o && (null != i || null != a) && (null == i || null == a) && (l = l.truncate(null != i, null != a)),
				d.Z.commit(l);
		},
		LOCAL_MESSAGES_LOADED: function (e) {
			let t = d.Z.getOrCreate(e.channelId);
			(t.cached || !t.ready) && d.Z.commit(t.addCachedMessages(e.messages, e.stale));
		},
		LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: function (e) {
			let t = e.messageId,
				n = e.channelId,
				r = d.Z.get(n);
			if (null == r || !r.has(t)) return !1;
			(r = r.update(t, (t) => t.set('interactionData', e.interactionData))), d.Z.commit(r);
		},
		TRUNCATE_MESSAGES: function (e) {
			let { channelId: t, truncateBottom: n, truncateTop: r } = e;
			G.log('Truncating messages for '.concat(t, ' bottom:').concat(n, ' top:').concat(r));
			let i = d.Z.getOrCreate(t);
			(i = i.truncate(n, r)), d.Z.commit(i);
		},
		CLEAR_MESSAGES: function (e) {
			let { channelId: t } = e;
			G.log('Clearing messages for '.concat(t)), d.Z.clear(t), x.clear();
		},
		MESSAGE_CREATE: function (e) {
			let { channelId: t, message: n, isPushNotification: r } = e,
				i = d.Z.getOrCreate(t);
			if (r) {
				G.log('Inserting message tapped on from a push notification', n.id, n.channel_id),
					d.Z.commit(i.receivePushNotification(n));
				return;
			}
			if (!i.ready) return !1;
			null != n.nonce && n.state !== w.yb.SENDING && x.has(n.nonce) && ((i = i.remove(n.nonce)), x.delete(n.nonce)),
				(i = i.receiveMessage(n, R.Z.isAtBottom(t))),
				d.Z.commit(i);
		},
		MESSAGE_SEND_FAILED: function (e) {
			let { channelId: t, messageId: n, reason: r } = e,
				i = d.Z.getOrCreate(t);
			if (null == i || !i.has(n)) return !1;
			let a = i.get(n, !0);
			(i =
				(null == a ? void 0 : a.isPoll()) === !0
					? i.remove(n)
					: i.update(
							n,
							(e) => (
								(e = e.set('state', w.yb.SEND_FAILED)).isCommandType()
									? (e = (e = e.set('interactionError', null != r ? r : '')).set(
											'flags',
											(0, A.pj)(e.flags, w.iLy.EPHEMERAL)
										))
									: null != r && (e = e.set('interactionError', null != r ? r : '')),
								e
							)
						)),
				d.Z.commit(i);
		},
		MESSAGE_SEND_FAILED_AUTOMOD: Z,
		MESSAGE_EDIT_FAILED_AUTOMOD: Z,
		MESSAGE_UPDATE: function (e) {
			let t = e.message.id,
				n = e.message.channel_id,
				r = d.Z.getOrCreate(n);
			if (null == r || !r.has(t)) return !1;
			(r = r.update(t, (t) => (0, I.wi)(t, e.message))), d.Z.commit(r);
		},
		MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
			let { messageId: t, channelId: n } = e,
				r = d.Z.get(n);
			if (null == r || !r.has(t)) return !1;
			(r = r.update(t, f.Cm)), d.Z.commit(r);
		},
		MESSAGE_DELETE: function (e) {
			let { id: t, channelId: n } = e,
				r = d.Z.getOrCreate(n);
			if (null == r || !r.has(t)) return !1;
			if (r.revealedMessageId === t) {
				let e = r.getAfter(t);
				r = null != e && e.blocked ? r.mutate({ revealedMessageId: e.id }) : r.mutate({ revealedMessageId: null });
			}
			(r = r.remove(t)), d.Z.commit(r), x.delete(t);
		},
		MESSAGE_DELETE_BULK: function (e) {
			let { ids: t, channelId: n } = e,
				r = d.Z.getOrCreate(n);
			if (null == r) return !1;
			let i = r.removeMany(t);
			if (r === i) return !1;
			if (null != i.revealedMessageId && l().some(t, (e) => i.revealedMessageId === e)) {
				let e = i.getAfter(i.revealedMessageId);
				i = null != e && e.blocked ? i.mutate({ revealedMessageId: e.id }) : i.mutate({ revealedMessageId: null });
			}
			d.Z.commit(i),
				t.forEach((e) => {
					x.delete(e);
				});
		},
		MESSAGE_REVEAL: function (e) {
			let { channelId: t, messageId: n } = e,
				r = d.Z.getOrCreate(t);
			d.Z.commit(r.mutate({ revealedMessageId: n }));
		},
		THREAD_CREATE_LOCAL: function (e) {
			let { channelId: t } = e,
				n = d.Z.getOrCreate(t);
			(n = n.loadComplete({
				newMessages: [],
				hasMoreAfter: !1,
				hasMoreBefore: !1
			})),
				d.Z.commit(n);
		},
		CHANNEL_DELETE: F,
		THREAD_DELETE: F,
		GUILD_DELETE: F,
		RELATIONSHIP_ADD: V,
		RELATIONSHIP_REMOVE: V,
		GUILD_MEMBERS_CHUNK_BATCH: function (e) {},
		THREAD_MEMBER_LIST_UPDATE: function (e) {},
		MESSAGE_REACTION_ADD: H,
		MESSAGE_REACTION_ADD_MANY: function (e) {
			let { channelId: t, messageId: n, reactions: r } = e,
				i = d.Z.get(t);
			if (null == i) return !1;
			(i = i.update(n, (e) => {
				var t;
				return e.addReactionBatch(r, null === (t = U.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
			})),
				d.Z.commit(i);
		},
		MESSAGE_REACTION_REMOVE: H,
		MESSAGE_REACTION_REMOVE_ALL: function (e) {
			let { channelId: t, messageId: n } = e,
				r = d.Z.get(t);
			if (null == r) return !1;
			(r = r.update(n, (e) => e.set('reactions', []))), d.Z.commit(r);
		},
		MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
			let { channelId: t, messageId: n, emoji: r } = e,
				i = d.Z.get(t);
			if (null == i) return !1;
			(i = i.update(n, (e) => e.removeReactionsForEmoji(r))), d.Z.commit(i);
		},
		LOGOUT: function () {
			d.Z.forEach((e) => {
				d.Z.clear(e.channelId);
			}),
				x.clear();
		},
		UPLOAD_START: function (e) {
			let { message: t } = e;
			null != t.nonce && x.add(t.nonce);
		},
		UPLOAD_FAIL: function (e) {
			let { channelId: t, messageRecord: n } = e,
				r = null == n ? void 0 : n.nonce;
			if (null != r && x.has(r)) {
				let e = d.Z.getOrCreate(t),
					n = e.get(r);
				if (null == n) return;
				(e = (e = e.remove(r)).merge([n])), x.delete(r), d.Z.commit(e);
			}
		},
		LOCAL_MESSAGE_CREATE: function (e) {
			let { message: t } = e,
				n = U.default.getCurrentUser();
			null != t && null != t.author && null != n && t.author.id === n.id && (k = !0);
		}
	}));
