n.d(t, {
	f: function () {
		return r;
	}
});
var i = n(996106),
	a = n(186901),
	s = n(981631);
function r(e) {
	if (a.He.IPC !== e && a.He.POST_MESSAGE !== e)
		throw new i.Z({ errorCode: s.lTL.INVALID_COMMAND }, 'Invalid transport.');
}
