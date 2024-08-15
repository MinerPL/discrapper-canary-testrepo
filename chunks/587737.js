n.d(t, {
	Z: function () {
		return l;
	}
});
var i = n(735250);
n(470079);
var a = n(739566),
	s = n(834129),
	r = n(689938);
function l(e) {
	let { message: t, channel: l, targetUser: o, actorUsernameHook: c, targetUsernameHook: u, compact: d } = e,
		_ = (0, a.ZP)(t),
		E = (0, a.Sw)(o, l),
		I = c(_),
		m = u(null != E ? E : void 0),
		T = r.Z.Messages.SYSTEM_MESSAGE_THREAD_MEMBER_ADD.format({
			actorName: _.nick,
			actorHook: I,
			targetName: null == E ? void 0 : E.nick,
			targetHook: m
		});
	return (0, i.jsx)(s.Z, {
		icon: n(570111),
		timestamp: t.timestamp,
		compact: d,
		children: T
	});
}
