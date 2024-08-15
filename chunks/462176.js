n.d(t, {
	Z: function () {
		return l;
	}
}),
	n(47120),
	n(653041);
let r = {
		1: 'bold',
		4: 'underline'
	},
	i = {
		30: 'black',
		31: 'red',
		32: 'green',
		33: 'yellow',
		34: 'blue',
		35: 'magenta',
		36: 'cyan',
		37: 'white'
	},
	a = {
		40: 'black',
		41: 'red',
		42: 'green',
		43: 'yellow',
		44: 'blue',
		45: 'magenta',
		46: 'cyan',
		47: 'white'
	},
	s = /\x1B\[(\d+(?:[:;]\d+)*)m/,
	o = new RegExp('(?='.concat(s.source, ')'));
function l() {
	let e = [
		...u('foreground', i, ['38', '39'], !0),
		...u('background', a, ['48', '49'], !0),
		...u('style', r, [], !1),
		{
			className: 'ansi-control-sequence',
			begin: s,
			starts: {
				end: o,
				endsParent: !0
			}
		}
	];
	return (
		(function (e) {
			for (let t = 0; t < e.length; t++) e[t].contains = e.slice(t + 1);
		})(e),
		{
			contains: [
				{
					begin: o,
					contains: e
				}
			]
		}
	);
}
function u(e, t, n, r) {
	let i = ['0', ...n];
	return (
		r && i.push(...Object.keys(t)),
		Object.entries(t).map((t) => {
			var n, r, a, s;
			let [l, u] = t;
			return (
				(n = e),
				(r = u),
				(a = l),
				(s = i),
				{
					className: 'ansi-'.concat(n, '-').concat(r),
					endsParent: !0,
					begin: o,
					'on:begin': (e, t) => {
						let n = e[1].split(';');
						for (let e of (void 0 === t.data.isOn && (t.data.isOn = !1), n))
							e === a ? (t.data.isOn = !0) : s.includes(e) && (t.data.isOn = !1);
						!t.data.isOn && t.ignoreMatch();
					}
				}
			);
		})
	);
}
