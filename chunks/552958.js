t.d(n, {
	Z: function () {
		return r;
	}
}),
	t(47120);
var i = t(470079),
	a = t(974180),
	l = t(557177);
function r() {
	let [e, n] = i.useState(),
		t = i.useRef(-1);
	return {
		playSound: i.useCallback((e) => {
			n(e),
				l.GN(
					a.Ay,
					a.yk,
					() => {
						clearTimeout(t.current),
							(t.current = setTimeout(() => {
								n(void 0);
							}, 500));
					},
					e
				);
		}, []),
		isPlaying: null != e,
		soundpackPlaying: e
	};
}
