let l, i, r, a, u, o;
n(724458), n(789020), n(47120);
var s,
	d,
	c,
	_,
	N = n(392711),
	E = n.n(N),
	T = n(913527),
	S = n.n(T),
	C = n(442837),
	h = n(544891),
	f = n(570140),
	I = n(131704),
	A = n(601964),
	m = n(758449),
	p = n(598077),
	L = n(592125),
	v = n(981631);
let Z = v.QZA.CLOSED,
	g = {},
	M = {},
	y = !1,
	O = !1,
	G = null,
	H = ['name', 'type', 'topic_', 'bitrate_', 'userLimit_', 'nsfw_', 'flags_', 'rateLimitPerUser_', 'defaultThreadRateLimitPerUser', 'defaultAutoArchiveDuration', 'template', 'defaultReactionEmoji', 'rtcRegion', 'videoQualityMode', 'threadMetadata', 'banner', 'availableTags', 'defaultSortOrder', 'defaultForumLayout', 'iconEmoji', 'themeColor'];
function U(e) {
	let t = L.Z.getChannel(e.channelId);
	if (null == t) return b();
	(Z = v.QZA.OPEN),
		(a = r = t),
		(G = 'location' in e && null != e.location ? e.location : null),
		(i = 'subsection' in e ? e.subsection : null),
		null != a && (a = a.set('nsfw', a.isNSFW())),
		(u = L.Z.getChannel(a.parent_id)),
		(o = a.getGuildId()),
		(g = {}),
		j({
			type: 'CHANNEL_SETTINGS_SET_SECTION',
			section: null != l ? l : v.CoT.OVERVIEW,
			subsection: i
		});
}
function j(e) {
	(l = e.section),
		(i = e.subsection),
		null != a &&
			l === v.CoT.INSTANT_INVITES &&
			((y = !0),
			h.tn
				.get({
					url: v.ANM.INSTANT_INVITES(a.id),
					oldFormErrors: !0
				})
				.then(
					(e) => {
						(y = !1),
							f.Z.dispatch({
								type: 'CHANNEL_SETTINGS_LOADED_INVITES',
								invites: e.body
							});
					},
					() => (y = !1)
				));
}
function b() {
	(O = !1), (Z = v.QZA.CLOSED), (l = null), (a = r = null), (u = null), (M = {});
}
let P = E().debounce(() => {
	if (null == a || null == r) return !1;
	let e = a.toJS(),
		t = r.toJS();
	H.every((n) => e[n] === t[n]) && a !== r && ((a = r), R.emitChange());
}, 500);
function D(e) {
	return new m.Z({
		code: e.code,
		temporary: e.temporary,
		revoked: e.revoked,
		inviter: null != e.inviter ? new p.Z(e.inviter) : null,
		channel: (0, I.jD)(e.channel),
		guild: null != e.guild ? new A.ZP(e.guild) : null,
		uses: e.uses,
		maxUses: e.max_uses,
		maxAge: e.max_age,
		createdAt: S()(e.created_at),
		type: e.type
	});
}
class w extends (s = C.ZP.Store) {
	initialize() {
		this.waitFor(L.Z);
	}
	hasChanges() {
		return a !== r;
	}
	isOpen() {
		return O;
	}
	getSection() {
		return l;
	}
	getInvites() {
		return {
			invites: M,
			loading: y
		};
	}
	showNotice() {
		return this.hasChanges();
	}
	getChannel() {
		return a;
	}
	getFormState() {
		return Z;
	}
	getCategory() {
		return u;
	}
	getProps() {
		return {
			submitting: Z === v.QZA.SUBMITTING,
			errors: g,
			channel: a,
			section: l,
			subsection: i,
			invites: M,
			selectedOverwriteId: o,
			hasChanges: this.hasChanges(),
			analyticsLocation: G
		};
	}
}
(_ = 'ChannelSettingsStore'),
	(c = 'displayName') in (d = w)
		? Object.defineProperty(d, c, {
				value: _,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (d[c] = _);
let R = new w(f.Z, {
	CHANNEL_SETTINGS_INIT: U,
	CHANNEL_SETTINGS_OPEN: function (e) {
		(O = !0), U(e);
	},
	CHANNEL_SETTINGS_SUBMIT: function () {
		(Z = v.QZA.SUBMITTING), (g = {});
	},
	CHANNEL_SETTINGS_SUBMIT_SUCCESS: function () {
		(r = a), (Z = v.QZA.OPEN);
	},
	CHANNEL_SETTINGS_SUBMIT_FAILURE: function (e) {
		var t;
		(Z = v.QZA.OPEN),
			(g = Object.keys(null !== (t = e.errors) && void 0 !== t ? t : {}).reduce((t, n) => {
				let l = e.errors[n];
				return (0, N.isArray)(l) ? (t[n] = l.join('\n')) : (t[n] = l), t;
			}, {}));
	},
	CHANNEL_SETTINGS_CLOSE: b,
	CHANNEL_SETTINGS_OVERWRITE_SELECT: function (e) {
		let { overwriteId: t } = e;
		o = t;
	},
	CHANNEL_SETTINGS_UPDATE: function (e) {
		let { name: t, channelType: n, topic: l, bitrate: i, userLimit: r, nsfw: u, flags: o, rateLimitPerUser: s, defaultThreadRateLimitPerUser: d, autoArchiveDuration: c, locked: _, invitable: N, defaultAutoArchiveDuration: E, template: T, defaultReactionEmoji: S, rtcRegion: C, videoQualityMode: h, availableTags: f, defaultSortOrder: I, defaultForumLayout: A, iconEmoji: m, themeColor: p } = e;
		if (null == a) return !1;
		null != t && (a = a.set('name', t)),
			null != l && (a = a.set('topic', l)),
			null != i && (a = a.set('bitrate', i)),
			null != r && (a = a.set('userLimit', r)),
			null != u && (a = a.set('nsfw', u)),
			null != o && (a = a.set('flags', o)),
			null != s && (a = a.set('rateLimitPerUser', s)),
			null != d && (a = a.set('defaultThreadRateLimitPerUser', d)),
			null != c &&
				(a = a.set('threadMetadata', {
					...a.threadMetadata,
					autoArchiveDuration: c
				})),
			null != _ &&
				(a = a.set('threadMetadata', {
					...a.threadMetadata,
					locked: _
				})),
			null != N &&
				(a = a.set('threadMetadata', {
					...a.threadMetadata,
					invitable: N
				})),
			null != E && (a = a.set('defaultAutoArchiveDuration', E)),
			null != T && (a = a.set('template', T)),
			null != n && (a = a.set('type', n)),
			void 0 !== C && (a = a.set('rtcRegion', C)),
			null != h && (a = a.set('videoQualityMode', h)),
			void 0 !== S && (a = a.set('defaultReactionEmoji', S)),
			null != f && (a = a.set('availableTags', f)),
			null != I && (a = a.set('defaultSortOrder', I)),
			null != A && (a = a.set('defaultForumLayout', A)),
			void 0 !== m && (a = a.set('iconEmoji', m)),
			null != p && (a = a.set('themeColor', p)),
			P();
	},
	CHANNEL_SETTINGS_SET_SECTION: j,
	CHANNEL_SETTINGS_LOADED_INVITES: function (e) {
		(M = {}),
			e.invites.forEach((e) => {
				M[e.code] = D(e);
			});
	},
	CHANNEL_UPDATES: function (e) {
		let { channels: t } = e;
		if (null == a) return !1;
		let n = !1;
		for (let e of t)
			(function (e) {
				if (null == r || r.id !== e) return !1;
				if (r === a) {
					let t = L.Z.getChannel(e);
					if (null == t) return !1;
					(a = r = t), (u = L.Z.getChannel(a.parent_id));
				} else {
					let t = L.Z.getChannel(e);
					if (null == t) return !1;
					(r = t), null != a && ((a = a.set('permissionOverwrites', r.permissionOverwrites)), (u = L.Z.getChannel(a.parent_id)));
				}
				return !0;
			})(e.id) &&
				null != a &&
				(null != o && null == a.permissionOverwrites[o] && (o = a.getGuildId()), (n = !0));
		return n;
	},
	CHANNEL_DELETE: function (e) {
		let {
			channel: { id: t }
		} = e;
		if (null == a || a.id !== t) return !1;
		Z = v.QZA.CLOSED;
	},
	INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
		(M = { ...M }), delete M[e.code];
	},
	INSTANT_INVITE_CREATE_SUCCESS: function (e) {
		M = {
			...M,
			[e.invite.code]: D(e.invite)
		};
	}
});
t.Z = 12633 == n.j ? R : null;
