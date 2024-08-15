n.d(t, {
	Cx: function () {
		return y;
	},
	j0: function () {
		return v;
	},
	j9: function () {
		return x;
	},
	nP: function () {
		return f;
	}
}),
	n(47120);
var l = n(735250);
n(470079);
var r = n(374470),
	i = n(481060),
	a = n(794295),
	o = n(163268),
	s = n(768494),
	d = n(751586),
	u = n(254109),
	m = n(406432),
	h = n(52824),
	c = n(626135),
	p = n(591759),
	b = n(981631),
	g = n(500119);
function f(e, t) {
	let { width: n, height: r } = e,
		i = (0, h.q)(e);
	return {
		component: (0, l.jsx)(d.y, {
			width: n,
			height: r,
			original: e.url,
			renderLinkComponent: (e) => (0, l.jsx)(a.Z, { ...e }),
			renderForwardComponent: t,
			src: i
		}),
		width: n,
		height: r,
		src: i
	};
}
function v(e, t) {
	let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
		r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
		i = (function (e, t) {
			var n, r;
			let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
				s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
			if (!(0, m.tw)(e.contentType)) return null;
			let u = null !== (n = e.width) && void 0 !== n ? n : 0,
				c = null !== (r = e.height) && void 0 !== r ? r : 0,
				p = (0, h.q)({
					proxyURL: e.proxyUrl,
					url: e.url
				});
			return {
				component: (0, l.jsx)(d.y, {
					width: u,
					height: c,
					original: e.url,
					renderLinkComponent: (e) => (0, l.jsx)(a.Z, { ...e }),
					renderForwardComponent: t,
					src: p,
					shouldHideMediaOptions: i,
					obscure: (0, o.KP)(
						{
							type: o.lJ.GenericMedia,
							media: e
						},
						s
					)
				}),
				width: u,
				height: c,
				src: p
			};
		})(e, t, n, r);
	if (null != i) return i;
	let s = (function (e, t) {
		var n, r;
		let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
			s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
		if (!(0, m.X2)(e.contentType)) return null;
		let u = null !== (n = e.width) && void 0 !== n ? n : 0,
			c = null !== (r = e.height) && void 0 !== r ? r : 0,
			b = (0, h.q)({
				proxyURL: e.proxyUrl,
				url: e.url
			}),
			g = p.Z.toURLSafe(e.proxyUrl);
		return null == g
			? null
			: (g.searchParams.append('format', 'jpeg'),
				{
					component: (0, l.jsx)(d.K, {
						width: u,
						height: c,
						poster: g.toString(),
						naturalWidth: u,
						naturalHeight: c,
						renderLinkComponent: (e) => (0, l.jsx)(a.Z, { ...e }),
						renderForwardComponent: t,
						src: b,
						shouldHideMediaOptions: i,
						obscure: (0, o.KP)(
							{
								type: o.lJ.GenericMedia,
								media: e
							},
							s
						)
					}),
					width: u,
					height: c,
					src: b
				});
	})(e, t, n, r);
	return null != s ? s : null;
}
function x(e, t) {
	let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
		l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
	return v((0, s.VY)(e), t, n, l);
}
function y(e, t) {
	let a = {};
	for (let [o, s] of e.entries())
		a[s.src] = (a) =>
			(function (e, t, a, o) {
				e.preventDefault(),
					(0, r.k)(e.currentTarget) && e.currentTarget.blur(),
					null != o &&
						(c.default.track(
							b.rMx.OPEN_MODAL,
							{
								type: b.jXE.MEDIA_VIEWER,
								...o
							},
							{ throttlePercent: 0.01 }
						),
						(0, u.fS)(o.guild_id, o.channel_id, o.channel_type, t.length)),
					(0, i.openModalLazy)(
						async () => {
							let { default: e } = await n.e('99857').then(n.bind(n, 895023));
							return (n) => {
								let { ...r } = n;
								return (0, l.jsx)(e, {
									...r,
									onIndexChange: null != o ? u.f0 : void 0,
									className: g.zoomedCarouselModalRoot,
									items: t,
									modalCarouselClassName: g.modalCarouselWrapper,
									startingIndex: a
								});
							};
						},
						{ onCloseCallback: null != o ? u.VO : void 0 }
					);
			})(a, e, o, t);
	return a;
}
