n.d(t, {
	Wq: function () {
		return c;
	},
	Xn: function () {
		return d;
	},
	ZN: function () {
		return u;
	},
	c: function () {
		return a;
	},
	kJ: function () {
		return l;
	}
});
var r = n(652874),
	i = n(731965);
let a = -1,
	s = Object.freeze({
		inspectedExpressionPosition: {
			rowIndex: 0,
			columnIndex: 0
		},
		activeCategoryIndex: 0,
		searchPlaceholder: null
	});
function o() {
	let e = (0, r.Z)((e) => s);
	return {
		useStore: e,
		getState: () => e.getState(),
		setInspectedExpressionPosition: (t, n, r) => {
			(0, i.j)(() =>
				e.setState({
					inspectedExpressionPosition: {
						rowIndex: n,
						columnIndex: t,
						source: r
					}
				})
			);
		},
		setActiveCategoryIndex: (t) => {
			(0, i.j)(() => e.setState({ activeCategoryIndex: t }));
		},
		setSearchPlaceholder: (t) => {
			(0, i.j)(() => e.setState({ searchPlaceholder: t }));
		},
		resetStoreState: () => {
			(0, i.j)(() => e.setState(s));
		}
	};
}
let l = o(),
	u = o(),
	c = o(),
	d = o();
