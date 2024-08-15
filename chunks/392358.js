n.d(t, {
	Z: function () {
		return o;
	}
}),
	n(47120);
var r = n(470079),
	i = n(40851),
	a = n(981631);
let s = ['Shift', 'Alt', 'Meta', 'Control'];
function o(e, t) {
	let [n, o] = r.useState(0),
		l = (0, i.Aq)();
	r.useEffect(() => {
		let e = () => o((e) => e + 1),
			t = () => o((e) => Math.max(0, e - 1));
		return (
			l.subscribe(a.CkL.POPOUT_SHOW, e),
			l.subscribe(a.CkL.POPOUT_HIDE, t),
			() => {
				l.unsubscribe(a.CkL.POPOUT_SHOW, e), l.unsubscribe(a.CkL.POPOUT_HIDE, t);
			}
		);
	}, [l]);
	let [u, c] = r.useState(!1);
	return (
		r.useLayoutEffect(() => {
			let r = (e) => {
					if ((!t || n > 0) && u) {
						c(!1);
						return;
					}
					if (
						!(
							(!u && n > 0) ||
							(e instanceof KeyboardEvent &&
								(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || s.indexOf(e.key) >= 0))
						)
					)
						c((e) => !e);
				},
				i = u ? 'keyup' : 'mousemove';
			return t && e.addEventListener(i, r), () => (null == e ? void 0 : e.removeEventListener(i, r));
		}, [e, u, n, t]),
		t && 0 === n && u
	);
}
