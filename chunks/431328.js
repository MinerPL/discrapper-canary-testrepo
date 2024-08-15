n.d(t, {
	Fd: function () {
		return u;
	},
	Io: function () {
		return c;
	},
	Rk: function () {
		return l;
	},
	w8: function () {
		return o;
	}
}),
	n(47120);
var r = n(442837),
	i = n(136015),
	a = n(565799),
	s = n(501655);
function o(e, t) {
	let [n] = (0, r.e7)([a.Z], () => [a.Z.getMutableParticipants(e, t), a.Z.getParticipantsVersion(e)], [e, t], i.Q);
	return n;
}
function l(e, t) {
	return (0, r.e7)([a.Z], () => a.Z.getParticipantCount(e, t), [e, t]);
}
function u(e) {
	let [t] = (0, r.e7)([a.Z], () => [a.Z.getMutableRequestToSpeakParticipants(e), a.Z.getRequestToSpeakParticipantsVersion(e)], [e], i.Q);
	return t;
}
function c(e) {
	return (0, r.e7)([a.Z], () => a.Z.getMutableParticipants(e, s.pV.SPEAKER).filter((e) => e.type === s.Ui.VOICE).length, [e]);
}
