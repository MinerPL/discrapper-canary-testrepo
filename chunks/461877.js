function n(e) {
	return ''.concat('*'.repeat(e.length - 4)).concat(e.slice(-4));
}
function a(e) {
	let [s, t] = e.split('@');
	return ''.concat('*'.repeat(s.length), '@').concat(t);
}
t.d(s, {
	E: function () {
		return a;
	},
	n: function () {
		return n;
	}
}),
	t(47120);
