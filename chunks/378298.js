n.d(t, {
	Ms: function () {
		return o;
	},
	Ot: function () {
		return u;
	},
	T: function () {
		return s;
	},
	Uj: function () {
		return c;
	},
	wS: function () {
		return l;
	}
});
var r = n(544891),
	i = n(570140),
	a = n(981631);
function s(e, t) {
	return (
		i.Z.dispatch({
			type: 'DISMISS_CHANNEL_SAFETY_WARNINGS',
			channelId: e,
			warningIds: t
		}),
		r.tn.post({
			url: a.ANM.CHANNEL_SAFETY_WARNINGS_ACK(e),
			body: { warning_ids: t },
			oldFormErrors: !0
		})
	);
}
function o(e, t, n) {
	i.Z.dispatch({
		type: 'CHANNEL_SAFETY_WARNING_FEEDBACK',
		channelId: e,
		warningId: t,
		feedbackType: n
	});
}
function l(e) {
	i.Z.dispatch({
		type: 'CLEAR_CHANNEL_SAFETY_WARNINGS',
		channelId: e
	});
}
function u(e) {
	i.Z.dispatch({
		type: 'ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP',
		channelId: e
	});
}
function c(e) {
	return r.tn.post({ url: a.ANM.SAFETY_WARNING_FALSE_POSITIVE(e) });
}
