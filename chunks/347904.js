n.d(t, {
	s4: function () {
		return a;
	},
	vJ: function () {
		return l;
	}
}),
	n(757143);
var i,
	s = n(392711),
	o = n(302221);
(i || (i = {})).OUT_OF_BURSTS = 'out of burst reactions modal';
let a = (e, t) => {
		let n = (0, o.WY)([t.r, t.g, t.b], 2);
		return (e = (e = e.replace(
			/(\[1,0,0,)/g,
			'['
				.concat(n[0][0] / 255, ',')
				.concat(n[0][1] / 255, ',')
				.concat(n[0][2] / 255, ',')
		)).replace(
			/\[0,0,1,/g,
			'['
				.concat(n[1][0] / 255, ',')
				.concat(n[1][1] / 255, ',')
				.concat(n[1][2] / 255, ',')
		));
	},
	l = (0, s.memoize)((e) => {
		let t = 0;
		for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n);
		return Math.abs(t);
	});
