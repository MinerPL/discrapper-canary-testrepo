n.d(r, {
	Mf: function () {
		return a;
	},
	Y6: function () {
		return i;
	},
	pF: function () {
		return c;
	}
});
var t = n(652874),
	l = n(731965);
let o = Object.freeze({
		inspectedStickerPosition: {
			rowIndex: -1,
			columnIndex: -1
		}
	}),
	s = (0, t.Z)((e) => o),
	i = s,
	a = (e, r, n) => {
		(0, l.j)(() =>
			s.setState({
				inspectedStickerPosition: {
					rowIndex: r,
					columnIndex: e,
					source: n
				}
			})
		);
	},
	c = () => {
		a(-1, -1);
	};
