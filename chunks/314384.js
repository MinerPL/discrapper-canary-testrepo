n.d(t, {
	NW: function () {
		return a;
	},
	tf: function () {
		return i;
	},
	zH: function () {
		return s;
	}
});
var r = n(470079),
	i = function (e) {
		return (0, r.useEffect)(e, []);
	},
	a = function () {
		var e = (0, r.useState)(0)[1],
			t = (0, r.useRef)(!1);
		return (
			i(function () {
				return function () {
					t.current = !0;
				};
			}),
			function () {
				!t.current && e({});
			}
		);
	};
function s(e) {
	var t = (0, r.useRef)(void 0);
	return (
		(0, r.useEffect)(function () {
			t.current = e;
		}),
		t.current
	);
}
