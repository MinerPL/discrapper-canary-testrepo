n(47120);
var i,
	a,
	s,
	l = n(445346),
	r = n(570140),
	o = n(430198),
	c = n(314897),
	u = n(592125),
	d = n(709054),
	h = n(522579);
let m = new Set();
class p extends l.y {
	shouldDisplayPrompt(e) {
		return m.has(e);
	}
}
(s = 'MediaPostSharePromptStore'),
	(a = 'displayName') in (i = p)
		? Object.defineProperty(i, a, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (i[a] = s),
	(t.Z = new p(r.Z, {
		CONNECTION_OPEN: function () {
			m = new Set();
		},
		MESSAGE_CREATE: function (e) {
			var t;
			if (e.isPushNotification) return;
			let n = e.message;
			if (c.default.getId() !== (null === (t = n.author) || void 0 === t ? void 0 : t.id) || !(0, h.z9)(n.id, n.channel_id)) return;
			let i = u.Z.getChannel(n.channel_id);
			if (null != i && null != i.parent_id) o.Z.isChannelGated(i.guild_id, i.parent_id) && m.add(d.default.castMessageIdAsChannelId(e.message.id));
		},
		DISMISS_MEDIA_POST_SHARE_PROMPT: function (e) {
			let { threadId: t } = e;
			m.delete(t);
		},
		LOGOUT: function (e) {
			m.clear();
		}
	}));
