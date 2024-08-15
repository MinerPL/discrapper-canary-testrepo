t.d(n, {
	Z: function () {
		return u;
	}
});
var i = t(735250);
t(470079);
var a = t(442837),
	l = t(481060),
	r = t(196051),
	s = t(441729),
	o = t(689938);
function u(e, n) {
	let t = (0, a.e7)([s.Z], () => s.Z.isSpeakingMessage(n.id, e.id), [n, e]);
	return '' === e.content
		? null
		: (0, i.jsx)(l.MenuItem, {
				id: 'tts',
				label: t ? o.Z.Messages.STOP_SPEAKING_MESSAGE : o.Z.Messages.SPEAK_MESSAGE,
				icon: l.ChatSpeakIcon,
				action: () => (t ? (0, r.NB)() : (0, r.LA)(n, e))
			});
}
