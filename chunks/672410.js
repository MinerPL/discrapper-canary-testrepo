r.d(t, {
	x: function () {
		return o;
	}
});
var n = r(116698),
	a = r(928541);
function o(e) {
	let t = [];
	function r(e) {
		return t.splice(t.indexOf(e), 1)[0] || Promise.resolve(void 0);
	}
	return {
		$: t,
		add: function (o) {
			if (!(void 0 === e || t.length < e)) return (0, a.$2)(new n.b('Not adding Promise because buffer limit was reached.'));
			let i = o();
			return -1 === t.indexOf(i) && t.push(i), i.then(() => r(i)).then(null, () => r(i).then(null, () => {})), i;
		},
		drain: function (e) {
			return new a.cW((r, n) => {
				let o = t.length;
				if (!o) return r(!0);
				let i = setTimeout(() => {
					e && e > 0 && r(!1);
				}, e);
				t.forEach((e) => {
					(0, a.WD)(e).then(() => {
						!--o && (clearTimeout(i), r(!0));
					}, n);
				});
			});
		}
	};
}
