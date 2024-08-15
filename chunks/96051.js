var i = n(570140),
	a = n(317770),
	s = n(117984);
function r(e) {
	let {
		channel: { id: t }
	} = e;
	(0, s.oC)(t);
}
class l extends a.Z {
	_initialize() {
		i.Z.subscribe('CHANNEL_DELETE', r);
	}
	_terminate() {
		i.Z.unsubscribe('CHANNEL_DELETE', r);
	}
}
t.Z = new l();
