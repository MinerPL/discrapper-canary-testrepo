n.d(t, {
	Z: function () {
		return s;
	}
});
var r = n(701488),
	i = n(981631);
function a(e) {
	return e.type === i.IIU.STREAMING && null != e.url && r.Fr.test(e.url);
}
function s(e) {
	return null != e && (Array.isArray(e) ? e.some(a) : a(e));
}
