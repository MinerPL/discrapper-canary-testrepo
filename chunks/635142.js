n.d(t, {
	Z: function () {
		return a;
	}
});
var s = n(689938);
function a(e) {
	return e > 0 && e % 7 == 0
		? s.Z.Messages.DURATION_WEEKS.format({ weeks: e / 7 })
		: s.Z.Messages.DURATION_DAYS.format({ days: e });
}
