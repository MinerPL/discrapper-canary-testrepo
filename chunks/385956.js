n.d(t, {
	T: function () {
		return r;
	},
	v: function () {
		return l;
	}
});
var i = n(442837),
	a = n(355298),
	s = n(333984);
function l(e) {
	return (0, i.e7)([a.Z], () => a.Z.isMessageRequest(e), [e]);
}
function r(e) {
	return (0, i.e7)([a.Z, s.Z], () => null != e && (a.Z.isMessageRequest(e) || s.Z.isSpam(e)));
}
