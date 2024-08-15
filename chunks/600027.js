n.d(t, {
	T: function () {
		return c;
	}
});
var i = n(159300),
	a = n(430824),
	s = n(496675),
	r = n(996106),
	l = n(561205),
	o = n(981631);
function c() {
	let e = (0, l.Z)();
	if (null == e) throw new r.Z({ errorCode: o.lTL.INVALID_CHANNEL }, 'Invalid channel');
	let t = a.Z.getGuild(e.getGuildId());
	if (null == t) throw new r.Z({ errorCode: o.lTL.INVALID_CHANNEL }, 'Invalid guild '.concat(e.getGuildId()));
	if (!(0, i.b)(s.Z, t, e))
		throw new r.Z({ errorCode: o.lTL.INVALID_PERMISSIONS }, 'No invite permissions for '.concat(e.id));
	return {
		channel: e,
		guild: t
	};
}
