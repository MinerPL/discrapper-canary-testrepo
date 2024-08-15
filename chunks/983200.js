n.d(t, {
	$x: function () {
		return l;
	},
	GV: function () {
		return i;
	},
	S$: function () {
		return _;
	},
	Vn: function () {
		return o;
	},
	tu: function () {
		return m;
	}
});
var a = n(470079),
	s = n(31775),
	r = n.n(s);
let l = 0,
	i = 4,
	o = 4,
	c = 'absolute',
	d = (e, t, n, a) => {
		if (0 === n) return [];
		if (1 === n)
			return [
				{
					width: e,
					height: t,
					top: 0,
					left: 0,
					position: c
				}
			];
		if (2 === n) {
			let n = Math.ceil((e - a) / 2);
			return [
				{
					top: 0,
					left: 0,
					position: c,
					width: n,
					height: t
				},
				{
					top: 0,
					left: n + a,
					position: c,
					width: n,
					height: t
				}
			];
		}
		if (3 === n) {
			let n = Math.ceil((e - a) / 2),
				s = Math.ceil((t - a) / 2);
			return [
				{
					top: 0,
					left: 0,
					position: c,
					width: n,
					height: t
				},
				{
					top: 0,
					left: n + a,
					position: c,
					width: n,
					height: s
				},
				{
					top: s + a,
					left: n + a,
					position: c,
					width: n,
					height: s
				}
			];
		} else {
			let n = Math.ceil((e - a) / 2),
				s = Math.ceil((t - a) / 2);
			return [
				{
					top: 0,
					left: 0,
					position: c,
					width: n,
					height: s
				},
				{
					top: s + a,
					left: 0,
					position: c,
					width: n,
					height: s
				},
				{
					top: 0,
					left: n + a,
					position: c,
					width: n,
					height: s
				},
				{
					top: s + a,
					left: n + a,
					position: c,
					width: n,
					height: s
				}
			];
		}
	},
	u = new (r())({ max: 100 });
function m(e) {
	let { numAttachments: t, containerWidth: n, containerHeight: s } = e;
	return a.useMemo(
		() =>
			(function (e) {
				var t, n, a;
				let { numAttachments: s, containerWidth: r, containerHeight: l } = e;
				let i = ((t = s), (n = r), (a = l), ''.concat(t, '-').concat(n, '-').concat(a)),
					o = u.get(i);
				if (null != o) return o;
				{
					let e = d(r, l, s, 4);
					return u.set(i, e), e;
				}
			})({
				numAttachments: t,
				containerWidth: n,
				containerHeight: s
			}),
		[t, n, s]
	);
}
function h(e) {
	return e.map((t, n) => ({
		minWidth: 2 * e[n].width,
		minHeight: 2 * e[n].height,
		maxWidth: 2 * e[n].width,
		maxHeight: 2 * e[n].height
	}));
}
function _(e) {
	let { imageContainerStyles: t, containerWidth: n, containerHeight: s } = e,
		r = a.useRef(h(t)),
		l = a.useRef(n),
		i = a.useRef(s),
		o = n > l.current + 100,
		c = s > i.current + 100;
	return (o || c) && (r.current = h(t)), r.current;
}
