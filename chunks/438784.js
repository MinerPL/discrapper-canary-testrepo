n.d(t, {
	I: function () {
		return f;
	},
	b: function () {
		return h;
	}
}),
	n(47120);
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(338545),
	l = n(481060),
	u = n(120503);
function c() {
	return document.hasFocus();
}
let d = {
		config: {
			friction: 50,
			tension: 900,
			mass: 1
		},
		unique: !0,
		initial: { dotPosition: 1 },
		from: { dotPosition: 0 },
		enter: { dotPosition: 1 },
		leave: { dotPosition: 0 }
	},
	_ = {
		config: { duration: 2400 },
		from: { dotCycle: 2.8 },
		reset: !0
	};
function E(e) {
	let t = e % 2;
	return t > 1 ? 1 - (t - 1) : t;
}
let f = i.memo(function (e) {
		let { dotRadius: t, dotPosition: n, fill: a = 'currentColor', spacing: s = 2.5 } = e,
			u = i.useRef(c()),
			d = i.useRef(!0);
		i.useEffect(() => () => void (d.current = !1), []);
		let [f] = (0, l.useSpring)(
				() => ({
					..._,
					to: async (e) => {
						let t = 2.8;
						for (; d.current; ) {
							(u.current = c()),
								u.current
									? ((t += 4),
										await e({
											dotCycle: t,
											immediate: !1
										}))
									: 2.8 !== t
										? ((t = 2.8),
											await e({
												dotCycle: t,
												immediate: !0
											}))
										: await new Promise((e) => setTimeout(e, 1000));
						}
					}
				}),
				'animate-always'
			),
			h = (6 * t + (t / 4) * 2) / 2;
		return (0, r.jsx)(r.Fragment, {
			children: [0, 1, 2].map((e) => {
				let i = 0.25 * e,
					l = t + t * s * e;
				return (0, r.jsx)(
					o.animated.circle,
					{
						cx: n ? n.to([0, 1], [h, l]) : l,
						cy: t,
						r: f.dotCycle
							.to((e) => E(e - i))
							.to([0, 0.4, 0.8, 1], [0.8 * t, 0.8 * t, t, t])
							.to((e) => (u.current ? e : t)),
						fill: a,
						style: {
							opacity: f.dotCycle
								.to((e) => E(e - i))
								.to([0, 0.4, 0.8, 1], [0.3, 0.3, 1, 1])
								.to((e) => (u.current ? e : 1))
						}
					},
					e
				);
			})
		});
	}),
	h = i.memo(
		i.forwardRef(function (e, t) {
			let { dotRadius: n, x: i, y: a, hide: _ = !1, themed: E = !1, className: h } = e;
			return (0, l.useTransition)(
				_,
				{
					...d,
					key: (e) => (e ? 'true' : 'false')
				},
				c() ? 'animate-always' : 'animate-never'
			)((e, l, c) => {
				let { dotPosition: d } = e,
					{ key: _ } = c;
				return l
					? null
					: (0, r.jsx)(
							'svg',
							{
								ref: t,
								x: i,
								y: a,
								width: 6 * n + (n / 2) * 2,
								height: 2 * n,
								className: s()(h, u.dots, E ? u.themed : null),
								children: (0, r.jsx)(o.animated.g, {
									style: { opacity: d.to((e) => Math.min(1, Math.max(e, 0))) },
									children: (0, r.jsx)(f, {
										dotRadius: n,
										dotPosition: d
									})
								})
							},
							_
						);
			});
		})
	);
