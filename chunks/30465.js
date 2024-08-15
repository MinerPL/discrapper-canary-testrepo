n.d(t, {
	KR: function () {
		return l;
	},
	p8: function () {
		return o;
	},
	sJ: function () {
		return u;
	}
});
var r = n(470079),
	i = n(652874),
	a = n(731965);
let s = Object.freeze({
		id: null,
		activeDescendant: null
	}),
	o = (0, i.Z)(() => s);
function l(e, t, n) {
	(0, r.useEffect)(() => {
		(0, a.j)(() => {
			t
				? o.setState({
						id: e,
						activeDescendant: n
					})
				: o.setState({
						id: null,
						activeDescendant: null
					});
		});
	}, [e, t, n]);
}
function u() {
	(0, a.j)(() => o.setState(() => s));
}
