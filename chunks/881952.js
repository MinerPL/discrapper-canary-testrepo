n.d(t, {
	Nd: function () {
		return a;
	},
	bk: function () {
		return i;
	},
	d3: function () {
		return s;
	},
	oP: function () {
		return o;
	}
});
var r = n(246364);
function i(e) {
	return e === r.wB.APPROVED || e === r.wB.REJECTED;
}
function a(e) {
	return e === r.wB.SUBMITTED;
}
function s(e) {
	return e.applicationStatus === r.wB.APPROVED && null != e.lastSeen;
}
function o(e) {
	return i(e.applicationStatus) && null == e.lastSeen;
}
