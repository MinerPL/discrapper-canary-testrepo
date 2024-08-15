r.d(t, {
	$P: function () {
		return c;
	},
	Fi: function () {
		return n;
	},
	Fr: function () {
		return I;
	},
	Sq: function () {
		return _;
	},
	pE: function () {
		return i;
	}
});
let n = '?',
	a = /\(error: (.*)\)/,
	o = /captureMessage|captureException/;
function i(...e) {
	let t = e.sort((e, t) => e[0] - t[0]).map((e) => e[1]);
	return (e, r = 0, i = 0) => {
		let _ = [],
			s = e.split('\n');
		for (let e = r; e < s.length; e++) {
			let r = s[e];
			if (r.length > 1024) continue;
			let n = a.test(r) ? r.replace(a, '$1') : r;
			if (!n.match(/\S*Error: /)) {
				for (let e of t) {
					let t = e(n);
					if (t) {
						_.push(t);
						break;
					}
				}
				if (_.length >= 50 + i) break;
			}
		}
		return (function (e) {
			if (!e.length) return [];
			let t = Array.from(e);
			return (
				/sentryWrapped/.test(E(t).function || '') && t.pop(),
				t.reverse(),
				o.test(E(t).function || '') && (t.pop(), o.test(E(t).function || '') && t.pop()),
				t.slice(0, 50).map((e) => ({
					...e,
					filename: e.filename || E(t).filename,
					function: e.function || n
				}))
			);
		})(_.slice(i));
	};
}
function _(e) {
	return Array.isArray(e) ? i(...e) : e;
}
function E(e) {
	return e[e.length - 1] || {};
}
let s = '<anonymous>';
function c(e) {
	try {
		if (!e || 'function' != typeof e) return s;
		return e.name || s;
	} catch (e) {
		return s;
	}
}
function I(e) {
	let t = e.exception;
	if (t) {
		let e = [];
		try {
			return (
				t.values.forEach((t) => {
					t.stacktrace.frames && e.push(...t.stacktrace.frames);
				}),
				e
			);
		} catch (e) {}
	}
}
