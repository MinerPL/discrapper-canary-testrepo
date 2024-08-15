n.d(t, {
	$: function () {
		return u;
	}
});
var i = n(442837),
	a = n(355298),
	s = n(88101),
	l = n(375954),
	r = n(699516),
	o = n(594174),
	c = n(981631);
function u(e) {
	let t = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot),
		n = t ? e.getRecipientId() : null,
		u = (0, s.P)(e.id, 'dm_convo_starter');
	return (0, i.e7)(
		[l.Z, a.Z, r.Z, o.default],
		() => {
			if (null != u || !t || a.Z.isMessageRequest(e.id) || (null != n && r.Z.getRelationshipType(n) === c.OGo.BLOCKED)) return !1;
			if (null != n) {
				let e = o.default.getUser(n);
				if (null != e && e.hasFlag(c.xW$.PROVISIONAL_ACCOUNT)) return !1;
			}
			let i = l.Z.getMessages(e.id);
			return i.ready && !i.hasMoreBefore && !i.hasMoreAfter && i.length < 25 && !l.Z.hasCurrentUserSentMessage(e.id);
		},
		[u, t, e.id, n]
	);
}
