n.d(t, {
	$E: function () {
		return o;
	},
	Ky: function () {
		return a;
	},
	RF: function () {
		return s;
	}
}),
	n(47120);
let r = {};
function i(e, t) {
	return ''.concat(e, ':').concat(t);
}
function a(e, t) {
	return r[i(e, t)];
}
function s(e, t, n) {
	let a = i(e, t);
	r[a] = {
		...r[a],
		...n
	};
}
function o(e) {
	for (let t in r) {
		let [n, i] = (function (e) {
			let [t, n] = e.split(':');
			return [t, n];
		})(t);
		e(n, i, r[t]);
	}
	r = {};
}
