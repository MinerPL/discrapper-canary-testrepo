n.d(t, {
	Z: function () {
		return _;
	}
});
var i = n(924301);
n(57132);
var a = n(430824),
	s = n(699516),
	r = n(594174),
	l = n(624138),
	o = n(51144),
	c = n(497089),
	u = n(981631),
	d = n(689938);
function _(e) {
	var t, n, _, E, I, m, T, h, N, f, C, p, g, S, A;
	let R = null !== (_ = null === (t = e.other_user) || void 0 === t ? void 0 : t.id) && void 0 !== _ ? _ : u.lds,
		x = o.ZP.getName(r.default.getUser(null === (n = e.other_user) || void 0 === n ? void 0 : n.id));
	switch (e.type) {
		case c.O7.INCOMING_FRIEND_REQUESTS:
			return d.Z.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST.format({ username: '**'.concat(x, '**') });
		case c.O7.FRIEND_REQUESTS_GROUPED:
			let O = o.ZP.getName(
					r.default.getUser(
						null === (I = e.other_users) || void 0 === I ? void 0 : null === (E = I[0]) || void 0 === E ? void 0 : E.id
					)
				),
				M = o.ZP.getName(
					r.default.getUser(
						null === (T = e.other_users) || void 0 === T ? void 0 : null === (m = T[1]) || void 0 === m ? void 0 : m.id
					)
				),
				v = Math.max(
					(null !== (N = null === (h = e.other_users) || void 0 === h ? void 0 : h.length) && void 0 !== N ? N : 0) - 2,
					0
				);
			return d.Z.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUESTS.format({
				user: O,
				user2: M,
				count: v
			});
		case c.O7.MOBILE_NATIVE_UPDATE_AVAILABLE:
			let L =
				null !== (C = null === (f = e.local_id) || void 0 === f ? void 0 : f.split('_').pop()) && void 0 !== C
					? C
					: 'unknown';
			return 'Update to build '.concat(L, ' available!');
		case c.DY.FRIEND_SUGGESTION_CREATED:
			let Z = s.Z.getRelationshipType(R) === u.OGo.PENDING_OUTGOING;
			return null !== (p = e.body) && void 0 !== p ? p : '';
		case c.DY.GUILD_SCHEDULED_EVENT_STARTED:
			let P = e.guild_scheduled_event_id,
				b = null != P ? i.ZP.getGuildScheduledEvent(P) : null,
				D = null == b ? void 0 : b.name,
				j = null === (g = a.Z.getGuild(null == b ? void 0 : b.guild_id)) || void 0 === g ? void 0 : g.name,
				U = (0, i.Z2)(null != b ? b : void 0);
			return (0, l.Ew)(j) || (0, l.Ew)(D) || !U
				? null !== (S = e.body) && void 0 !== S
					? S
					: ''
				: d.Z.Messages.NOTIFICATION_CENTER_GUILD_SCHEDULED_EVENT_ENDED.format({
						event_name: D,
						guild_name: j
					});
		case c.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
			return d.Z.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST_ACCEPTED.format({
				username: '**'.concat(x, '**')
			});
	}
	return null !== (A = e.body) && void 0 !== A ? A : '';
}
