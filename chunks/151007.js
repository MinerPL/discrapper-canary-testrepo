t.d(n, {
	Z: function () {
		return r;
	}
});
var i = t(665906),
	a = t(901461),
	l = t(981631);
function r(e, n, t) {
	return (
		!n.isSystemDM() &&
		!(0, a.Z)(e) &&
		(t || n.isPrivate()) &&
		(0, i.RG)(n) &&
		n.type !== l.d4z.GUILD_VOICE &&
		n.type !== l.d4z.GUILD_STAGE_VOICE
	);
}
