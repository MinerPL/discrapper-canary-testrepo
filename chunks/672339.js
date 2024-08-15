n.d(t, {
	FU: function () {
		return g;
	},
	eH: function () {
		return S;
	},
	wG: function () {
		return T;
	}
}),
	n(66153),
	n(970173),
	n(520712),
	n(268111),
	n(941497),
	n(32026),
	n(480839),
	n(744285),
	n(492257),
	n(873817);
var r = n(512722),
	i = n.n(r),
	a = n(46973),
	s = n(594174),
	o = n(768581),
	l = n(932724),
	u = n(716161),
	c = n(634041),
	d = n(647177),
	_ = n(63985),
	E = n(638457),
	f = n(678916),
	h = n(981631);
async function p(e) {
	let t = await fetch(e),
		n = await t.blob();
	return new Uint8ClampedArray(await n.arrayBuffer());
}
function I(e, t, n, r, i) {
	(0, u.RI)({
		[e]: {
			graph: n,
			target: t,
			image: r,
			blob: i
		}
	});
}
async function m(e, t, n) {
	var r, s;
	let l,
		c = !1;
	if (null == n) return I(e, t, a.zZ.NONE);
	if (n === f.f7) return I(e, t, a.zZ.BACKGROUND_BLUR);
	if ('string' == typeof n || 'number' == typeof n) {
		let e = (0, _.Z)()[n];
		(c = null !== (r = e.isVideo) && void 0 !== r && r), (l = e.source);
	} else {
		let e = n.asset;
		(c = (0, o.xR)(e) || (0, o.ay)(e)),
			(l = (0, o.rI)({
				userId: n.user_id,
				assetId: n.id,
				assetHash: e,
				size: f.HE.width
			}));
	}
	if (null != l)
		try {
			let n = c
					? void 0
					: await ((s = l),
						new Promise((e, t) => {
							let n = new Image();
							(n.crossOrigin = 'anonymous'),
								(n.onload = () => {
									let t = document.createElement('canvas');
									(t.width = f.HE.width), (t.height = f.HE.height);
									let r = t.getContext('2d');
									i()(null != r, 'Canvas context is missing');
									let a = n.height / n.width,
										s = f.HE.height,
										o = f.HE.height / a,
										l = (t.width - o) / 2,
										u = (t.height - s) / 2;
									r.drawImage(n, l, u, o, s);
									let c = r.getImageData(0, 0, t.width, t.height);
									e({
										data: c.data,
										width: c.width,
										height: c.height,
										pixelFormat: 'rgba'
									});
								}),
								(n.onerror = (e) => t(e)),
								(n.src = s);
						})),
				r = c ? await p(l) : void 0;
			I(e, t, a.zZ.BACKGROUND_REPLACEMENT, n, r);
		} catch (e) {
			(0, u.Nm)();
		}
}
async function T(e, t) {
	let { track: n = !0, location: r } = t;
	await m(a.TO.CAMERA_BACKGROUND_LIVE, { type: a.W$.INPUT_DEVICE }, e), n && (0, d.Bh)(e, r, 'Enabled');
}
async function g(e, t, n) {
	let { track: r = !0, location: i } = n;
	(0, u.GS)(),
		await m(
			a.TO.CAMERA_BACKGROUND_PREVIEW,
			{
				type: a.W$.STREAM,
				streamId: t
			},
			e
		),
		r && (0, d.Bh)(e, i, 'Preview');
}
function S() {
	let e = s.default.getCurrentUser();
	if (null == e) return;
	let t = (0, l.P)(e);
	(0, E.Z)() && !c.Z.hasBeenApplied && null != t && T(t, { track: !1 }).catch(h.dG4);
}
