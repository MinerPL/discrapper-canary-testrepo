n.d(t, {
	Z: function () {
		return d;
	}
});
var r = n(727429),
	i = n(703656),
	a = n(769654),
	s = n(592125),
	o = n(754688),
	l = n(849027),
	u = n(927723),
	c = n(981631);
async function d(e, t) {
	let n = (0, o.Qj)(e);
	if (null != n && !(await (0, l.Z)(n))) {
		(0, u.k)({ kind: 'channel' });
		return;
	}
	if (null == n) {
		(0, i.uL)(e, t);
		return;
	}
	let d = (function (e) {
		if (null == e.channelId) return e;
		let t = s.Z.getChannel(e.channelId);
		if (null == t) return e;
		let n = (0, r.e)(t);
		return {
			...e,
			guildId: null != n ? n : c.ME
		};
	})(n);
	if (null == d.channelId) {
		(0, a.X)(d.guildId);
		return;
	}
	null != d.threadId
		? (0, i.uL)(c.Z5c.CHANNEL_THREAD_VIEW(d.guildId, d.channelId, d.threadId, d.messageId), t)
		: (0, i.uL)(c.Z5c.CHANNEL(d.guildId, d.channelId, d.messageId), t);
}
