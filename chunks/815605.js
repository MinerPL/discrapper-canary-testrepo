n.d(t, {
	Vz: function () {
		return c;
	},
	Zn: function () {
		return d;
	},
	aB: function () {
		return u;
	}
}),
	n(757143);
var i = n(392711),
	s = n(772848),
	o = n(134432),
	a = n(963838),
	l = n(302221),
	r = n(347904);
let c = 7.5,
	u = (0, i.memoize)(
		(e, t, n, i) =>
			new Promise((e) => {
				let s = new Image();
				(s.src = t),
					(s.crossOrigin = 'Anonymous'),
					(s.onload = () => {
						let t = 32 * (0, o.x_)(),
							a = JSON.stringify(n);
						if ((null != i && (a = (0, r.s4)(a, (0, l.oo)(i))), (s.width === t && s.height === t) || (0 === s.width && 0 === s.height))) e(JSON.parse(a));
						else {
							let t = (128 / s.width) * s.height;
							e(JSON.parse((a = (a = a.replace(/"w":128,"h":128/, '"w":128,"h":'.concat(t))).replace(/"a":{"a":0,"k":\[64,64/, '"a":{"a":0,"k":[64,'.concat(t / 2)))));
						}
					});
			})
	);
function d(e, t, n, i) {
	let { emojiSize: o, key: l, messageId: r } = null != i ? i : {},
		c = (0, a._r)(e, null != o ? 2 * o : void 0);
	return {
		channelId: n,
		messageId: r,
		emoji: e,
		animationId: (0, s.Z)(),
		url: c,
		key: l,
		color: t
	};
}
