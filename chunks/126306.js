n.d(t, {
	l: function () {
		return f;
	}
}),
	n(47120);
var r,
	i,
	a = n(735250),
	s = n(470079),
	o = n(120356),
	l = n.n(o),
	u = n(846519),
	c = n(186325),
	d = n(207153);
((i = r || (r = {}))[(i.TRANSLATE = 1)] = 'TRANSLATE'), (i[(i.SCALE = 2)] = 'SCALE'), (i[(i.FADE = 3)] = 'FADE');
let _ = Object.freeze({
		1: d.translate,
		2: d.scale,
		3: d.fade
	}),
	E = Object.freeze({
		top: d.animatorTop,
		bottom: d.animatorBottom,
		left: d.animatorLeft,
		right: d.animatorRight,
		center: d.animatorCenter,
		window_center: d.animatorCenter
	});
function f(e) {
	let { position: t, type: n, children: r } = e,
		{ reducedMotion: i } = s.useContext(c.S),
		o = i.enabled ? 3 : n,
		[f, h] = s.useState(null != t),
		[p] = s.useState(() => new u.V7()),
		[I, m] = s.useState(!0),
		T = s.useRef(null);
	return (
		s.useLayoutEffect(() => {
			var e;
			null === (e = T.current) ||
				void 0 === e ||
				e.addEventListener('transitionend', () => {
					m(!1);
				}),
				setTimeout(() => {
					m(!1);
				}, 200);
		}, []),
		s.useEffect(() => () => p.stop(), [p]),
		s.useEffect(() => {
			null != t && p.start(10, () => h(!0));
		}, [t, p]),
		(0, a.jsx)('div', {
			'data-popout-animating': I,
			className: l()(null != t ? E[t] : null, {
				[_[o]]: null != t,
				[d.didRender]: f
			}),
			children: r
		})
	);
}
f.Types = r;
