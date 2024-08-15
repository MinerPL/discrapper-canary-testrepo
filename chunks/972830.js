n.d(t, {
	h: function () {
		return o;
	}
}),
	n(177593),
	n(653041);
var r = n(570140),
	i = n(38618);
let a = [];
function s(e) {
	setImmediate(() => e());
}
function o(e) {
	i.Z.isConnectedOrOverlay() ? s(e) : a.push(e);
}
r.Z.subscribe('CONNECTION_OPEN', () => {
	a.forEach((e) => s(e)), (a = []);
}),
	r.Z.subscribe('CONNECTION_RESUMED', () => {
		a.forEach((e) => s(e)), (a = []);
	});
