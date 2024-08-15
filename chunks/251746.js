t.d(n, {
	Z: function () {
		return h;
	}
});
var i = t(735250),
	a = t(470079),
	r = t(392711),
	d = t.n(r),
	s = t(442837),
	o = t(481060),
	u = t(66999),
	l = t(665906),
	c = t(979651),
	Z = t(557135),
	f = t(689938);
function h(e) {
	let n = (0, l.Y)(e),
		t = (0, s.e7)([c.Z], () => c.Z.isInChannel(e.id)),
		r = (0, s.e7)([c.Z], () => !d().isEmpty(c.Z.getVoiceStatesForChannel(e.id))),
		{ needSubscriptionToAccess: h } = (0, u.Z)(e.id),
		v = a.useCallback(() => {
			Z.Z.handleVoiceConnect({
				channel: e,
				connected: t,
				needSubscriptionToAccess: h,
				locked: !1
			});
		}, [e, t, h]);
	return t || !n
		? null
		: (0, i.jsx)(o.MenuItem, {
				id: 'join-thread-voice',
				label: r ? f.Z.Messages.JOIN_CALL : f.Z.Messages.START_CALL,
				action: v
			});
}
