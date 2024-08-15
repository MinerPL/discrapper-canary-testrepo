n.d(t, {
	Re: function () {
		return a;
	},
	Zq: function () {
		return s;
	},
	kK: function () {
		return i;
	}
});
var r = n(49691);
function i(e) {
	var t = (0, r.Z)(e).Element;
	return e instanceof t || e instanceof Element;
}
function a(e) {
	var t = (0, r.Z)(e).HTMLElement;
	return e instanceof t || e instanceof HTMLElement;
}
function s(e) {
	if ('undefined' == typeof ShadowRoot) return !1;
	var t = (0, r.Z)(e).ShadowRoot;
	return e instanceof t || e instanceof ShadowRoot;
}
