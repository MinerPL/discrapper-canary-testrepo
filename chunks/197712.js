n.d(t, {
	$p: function () {
		return s;
	},
	AK: function () {
		return h;
	},
	Es: function () {
		return c;
	},
	U$: function () {
		return l;
	},
	kH: function () {
		return o;
	}
}),
	n(315314),
	n(610138),
	n(216116),
	n(78328),
	n(815648),
	n(47120),
	n(411104),
	n(518263),
	n(970173),
	n(520712),
	n(268111),
	n(941497),
	n(32026),
	n(480839),
	n(744285),
	n(492257),
	n(873817);
var r = n(392711),
	i = n(36793),
	a = n(486324);
async function s(e, t, r, s, l) {
	let { x: u, y: c, scaledCropWidth: o, scaledCropHeight: h } = (0, i.eu)(t, r, s, l),
		d = await e.arrayBuffer(),
		A = new Worker(new URL('/assets/' + n.u('86047'), n.b)),
		E = new Promise((e, t) => {
			A.onmessage = (n) => {
				let { data: r } = n;
				if (r.type === a.u.CROP_GIF_COMPLETE) {
					var i;
					e(
						((i = new Blob([r.result])),
						new Promise((e) => {
							let t = new FileReader();
							(t.onload = (t) => {
								var n;
								let r = null === (n = t.target) || void 0 === n ? void 0 : n.result;
								'string' == typeof r ? e(r) : e('');
							}),
								t.readAsDataURL(i);
						}))
					),
						A.terminate();
				} else r.type === a.u.CROP_GIF_ERROR && (t(Error('Error cropping GIF')), A.terminate());
			};
		});
	return (
		A.postMessage({
			type: a.u.CROP_GIF_START,
			gif: new Uint8Array(d),
			x: 0 | u,
			y: 0 | c,
			width: 0 | o,
			height: 0 | h
		}),
		{
			result: E,
			cancelFn: () => A.terminate()
		}
	);
}
function l(e, t, n) {
	return {
		x: (0, r.clamp)(e, n.left, n.right),
		y: (0, r.clamp)(t, n.bottom, n.top)
	};
}
function u(e, t, n, r) {
	let i = n,
		s = r;
	return (n > a.vJ && ((i = a.vJ), (s = r * (a.vJ / n))), n / r < e)
		? {
				width: i,
				height: s
			}
		: {
				width: (t / s) * i,
				height: t
			};
}
function c(e, t, n) {
	switch (e) {
		case a.pC.AVATAR:
		case a.pC.AVATAR_DECORATION:
			return {
				width: t,
				height: n
			};
		case a.pC.BANNER:
			return u(a.MY, a.qj, t, n);
		case a.pC.GUILD_BANNER:
			return u(a.Ij, a.C5, t, n);
		case a.pC.VIDEO_BACKGROUND:
			return u(a.Ff, a.PB, t, n);
		case a.pC.SCHEDULED_EVENT_IMAGE:
			return u(a.ut, a.WV, t, n);
		case a.pC.HOME_HEADER:
			return u(a.sX, a.SW, t, n);
	}
}
function o(e, t, n) {
	let r = {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0
		},
		i = e - n.width,
		a = t - n.height;
	return 0 !== i && ((r.left = -Math.abs(i / 2)), (r.right = i / 2)), 0 !== a && ((r.bottom = -Math.abs(a / 2)), (r.top = a / 2)), r;
}
function h(e, t, n, r) {
	switch (e) {
		case a.pC.AVATAR:
		case a.pC.AVATAR_DECORATION:
			let i = Math.min(t, n);
			return {
				width: i,
				height: i
			};
		case a.pC.BANNER:
			let s = Math.min(t, a.vJ);
			return {
				width: s,
				height: s * (1 / a.MY)
			};
		case a.pC.GUILD_BANNER:
			let l = Math.min(t, a.vJ);
			return {
				width: l,
				height: Math.min((9 / 16) * l, r)
			};
		case a.pC.VIDEO_BACKGROUND:
			let u = Math.min(t, a.vJ);
			return {
				width: u,
				height: (9 / 16) * u
			};
		case a.pC.SCHEDULED_EVENT_IMAGE:
			let c = Math.min(t, a.vJ);
			return {
				width: c,
				height: 0.4 * c
			};
		case a.pC.HOME_HEADER:
			let o = Math.min(t, a.vJ);
			return {
				width: o,
				height: o * (1 / a.sX)
			};
	}
}
