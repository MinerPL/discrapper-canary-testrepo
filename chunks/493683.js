n(47120);
var r = n(544891),
	i = n(780384),
	a = n(570140),
	s = n(802098),
	o = n(702321),
	l = n(408987),
	u = n(57132),
	c = n(895886),
	d = n(703656),
	_ = n(359110),
	E = n(131704),
	f = n(592125),
	h = n(306680),
	p = n(626135),
	I = n(73346),
	m = n(26151),
	T = n(287734),
	g = n(981631),
	S = n(689938);
t.Z = {
	async openPrivateChannel(e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
			n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
			i = arguments.length > 3 ? arguments[3] : void 0,
			a = arguments.length > 4 ? arguments[4] : void 0,
			s = this._getRecipients(e),
			o = (e) => {
				t && m.Z.call(e.id, n, !0, e.isDM() ? e.getRecipientId() : null);
			};
		if (1 === s.length) {
			let [e] = s,
				t = this._openCachedDMChannel(e, a);
			if (null != t) return o(t), Promise.resolve(t.id);
		}
		try {
			let e = await r.tn.post({
				url: g.ANM.USER_CHANNELS,
				body: { recipients: s },
				context: { location: i },
				oldFormErrors: !0
			});
			null == a || a();
			let t = this._openPrivateChannel(e.body);
			return o(t), e.body.id;
		} catch (e) {
			var l;
			throw (
				((null == e ? void 0 : null === (l = e.body) || void 0 === l ? void 0 : l.code) === g.evJ.QUARANTINED &&
					(0, c.default)(),
				e)
			);
		}
	},
	async createBroadcastPrivateChannel() {
		try {
			let e = await r.tn.post({ url: g.ANM.BROADCAST_PRIVATE_CHANNEL }),
				t = (0, E.q_)(e.body);
			return m.Z.call(t.id, !1, !1, null), e.body.id;
		} catch (t) {
			var e;
			throw (
				((null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.code) === g.evJ.QUARANTINED &&
					(0, c.default)(),
				t)
			);
		}
	},
	_openCachedDMChannel(e, t) {
		let n = f.Z.getDMFromUserId(e),
			r = null != n ? f.Z.getChannel(n) : null;
		return null == r
			? null
			: (null == t || t(),
				null != (0, u.PP)() ? (0, _.Kh)(r.id, { navigationReplace: !0 }) : T.default.selectPrivateChannel(r.id),
				r);
	},
	async ensurePrivateChannel(e) {
		let t = this._getRecipients(e),
			n = await r.tn.post({
				url: g.ANM.USER_CHANNELS,
				body: { recipients: t },
				oldFormErrors: !0
			}),
			i = (0, E.q_)(n.body);
		return (
			a.Z.dispatch({
				type: 'CHANNEL_CREATE',
				channel: i
			}),
			i.id
		);
	},
	async getOrEnsurePrivateChannel(e) {
		let t = f.Z.getDMFromUserId(e);
		return null != t ? t : await this.ensurePrivateChannel(e);
	},
	async getDMChannel(e) {
		let t = await r.tn.get(g.ANM.DM_CHANNEL(e)),
			n = (0, E.q_)(t.body);
		return (
			a.Z.dispatch({
				type: 'CHANNEL_CREATE',
				channel: n
			}),
			n.id
		);
	},
	_getRecipients: (e) => (null != e ? (Array.isArray(e) ? e : [e]) : []),
	_openPrivateChannel(e) {
		let t = (0, E.q_)(e);
		return (
			a.Z.dispatch({
				type: 'CHANNEL_CREATE',
				channel: t
			}),
			null != (0, u.PP)() ? (0, _.Kh)(t.id, { navigationReplace: !0 }) : T.default.selectPrivateChannel(t.id),
			t
		);
	},
	closePrivateChannel(e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
			n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
		return (
			(0, o.Z)(e) &&
				p.default.track(g.rMx.CHANGE_LOG_DM_REMOVED, {
					last_changelog_id: s.Z.latestChangelogId(),
					unread_count: h.ZP.getUnreadCount(e)
				}),
			a.Z.dispatch({
				type: 'CHANNEL_DELETE',
				channel: {
					id: e,
					guild_id: void 0,
					parent_id: void 0
				},
				silent: n
			}),
			t && !__OVERLAY__ && (0, d.uL)(g.Z5c.FRIENDS),
			r.tn
				.del({
					url: g.ANM.CHANNEL(e),
					query: { silent: n },
					oldFormErrors: !0
				})
				.then(() => {
					i.uv.announce(S.Z.Messages.A11Y_ANNOUNCEMENT_DM_CLOSED);
				})
				.catch(() => {
					i.uv.announce(S.Z.Messages.A11Y_ANNOUNCEMENT_DM_CLOSED_FAILED);
				})
		);
	},
	updatePermissionOverwrite: (e, t) =>
		r.tn.put({
			url: g.ANM.CHANNEL_PERMISSIONS_OVERWRITE(e, t.id),
			body: t,
			oldFormErrors: !0
		}),
	clearPermissionOverwrite: (e, t) =>
		r.tn.del({
			url: g.ANM.CHANNEL_PERMISSIONS_OVERWRITE(e, t),
			oldFormErrors: !0
		}),
	addRecipient(e, t, n, a) {
		return r.tn
			.put({
				url: g.ANM.CHANNEL_RECIPIENT(e, t),
				context: { location: n },
				oldFormErrors: !0
			})
			.then((t) =>
				(i.uv.announce(S.Z.Messages.A11Y_ANNOUNCEMENT_USER_ADDED_TO_GROUP_DM), null == a || a(), 201 === t.status)
					? this._openPrivateChannel(t.body).id
					: e
			)
			.catch(() => (i.uv.announce(S.Z.Messages.A11Y_ANNOUNCEMENT_USER_ADDED_TO_GROUP_DM_FAILED), e));
	},
	addRecipients(e, t, n, r) {
		return this.addRecipient(e, t[0], n, r).then((e) =>
			Promise.all(t.slice(1).map((t) => this.addRecipient(e, t, n))).then(() => e)
		);
	},
	removeRecipient: (e, t) =>
		r.tn.del({
			url: g.ANM.CHANNEL_RECIPIENT(e, t),
			oldFormErrors: !0
		}),
	setDMOwner: (e, t) =>
		r.tn.patch({
			url: g.ANM.CHANNEL(e),
			body: { owner: t },
			oldFormErrors: !0
		}),
	async setName(e, t) {
		let n = f.Z.getChannel(e),
			i = await r.tn.patch({
				url: g.ANM.CHANNEL(e),
				body: { name: t },
				oldFormErrors: !0
			}),
			a = null == n ? void 0 : n.getGuildId();
		return null != a && !(null == n ? void 0 : n.isThread()) && l.Z.checkGuildTemplateDirty(a), i;
	},
	setIcon(e, t) {
		let n = f.Z.getChannel(e);
		r.tn
			.patch({
				url: g.ANM.CHANNEL(e),
				body: { icon: t },
				oldFormErrors: !0
			})
			.then(() => {
				let e = null == n ? void 0 : n.getGuildId();
				null != e && !(null == n ? void 0 : n.isThread()) && l.Z.checkGuildTemplateDirty(e);
			});
	},
	convertToGuild: (e) =>
		r.tn.post({
			url: g.ANM.CHANNEL_CONVERT(e),
			oldFormErrors: !0
		}),
	preload(e, t) {
		a.Z.dispatch({
			type: 'CHANNEL_PRELOAD',
			guildId: e === g.ME ? null : e,
			channelId: t,
			context: g.e3s
		});
	},
	fetchChannelStoreListing(e, t) {
		let n = null != t ? g.ANM.CHANNEL_STORE_LISTING_SKU(e, t) : g.ANM.CHANNEL_STORE_LISTING(e);
		return (0, I.Kb)(n).then((t) => {
			a.Z.dispatch({
				type: 'STORE_LISTING_FETCH_SUCCESS',
				channelId: e,
				storeListing: t.body
			});
		});
	},
	async createTextChannel(e, t, n, i) {
		let a = {
			type: g.d4z.GUILD_TEXT,
			name: t,
			permission_overwrites: []
		};
		null != n && (a.parent_id = n), null != i && (a.topic = i);
		let s = await r.tn.post({
			url: g.ANM.GUILD_CHANNELS(e),
			body: a,
			oldFormErrors: !0
		});
		return l.Z.checkGuildTemplateDirty(e), s;
	}
};
