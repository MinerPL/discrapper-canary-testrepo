r.d(t, {
	N: function () {
		return o;
	}
});
var n = r(370336),
	a = r(263449);
function o(e, t = {}, r = (0, a.nZ)()) {
	let { message: o, name: i, email: _, url: E, source: s, associatedEventId: c, tags: I } = e,
		u = {
			contexts: {
				feedback: (0, n.Jr)({
					contact_email: _,
					name: i,
					message: o,
					url: E,
					source: s,
					associated_event_id: c
				})
			},
			type: 'feedback',
			level: 'info',
			tags: I
		},
		l = (r && r.getClient()) || (0, a.s3)();
	return l && l.emit('beforeSendFeedback', u, t), r.captureEvent(u, t);
}
