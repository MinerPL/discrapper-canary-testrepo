t(733860);
var l = t(735250),
	i = t(470079),
	a = t(780384),
	r = t(481060),
	s = t(197344),
	o = t(526167),
	u = t(73117),
	c = t(787462),
	d = t(70097),
	p = t(981631),
	m = t(988868),
	h = t(554355),
	f = t(991989),
	x = t(635507),
	g = t(470794),
	N = t(886777);
function _(e) {
	let {
			movDark: n = u,
			movLight: t = c,
			mp4Dark: i = m,
			mp4Light: a = x,
			pngDark: r = h,
			pngLight: s = g,
			webmDark: d = f,
			webmLight: _ = N
		} = e,
		Z = (0, o.vu)(),
		v = [
			(0, l.jsx)(
				'source',
				{
					src: i,
					type: 'video/mp4'
				},
				'mp4'
			),
			(0, l.jsx)(
				'img',
				{
					alt: '',
					src: r
				},
				'png'
			)
		],
		E = [
			(0, l.jsx)(
				'source',
				{
					src: a,
					type: 'video/mp4'
				},
				'mp4'
			),
			(0, l.jsx)(
				'img',
				{
					alt: '',
					src: s
				},
				'png'
			)
		];
	return (
		(Z > 52 || -1 === Z) &&
			(v.unshift(
				(0, l.jsx)(
					'source',
					{
						src: d,
						type: 'video/webm'
					},
					'webm'
				)
			),
			E.unshift(
				(0, l.jsx)(
					'source',
					{
						src: _,
						type: 'video/webm'
					},
					'webm'
				)
			)),
		(0, o.rO)() &&
			(v.unshift(
				(0, l.jsx)(
					'source',
					{
						src: n,
						type: 'video/mp4'
					},
					'hevc'
				)
			),
			E.unshift(
				(0, l.jsx)(
					'source',
					{
						src: t,
						type: 'video/mp4'
					},
					'hevc'
				)
			)),
		{
			[p.BRd.DARK]: v,
			[p.BRd.LIGHT]: E
		}
	);
}
let Z = s.Z.getAppSpinnerSources(),
	v = null != Z ? _(Z) : null,
	E = _({});
n.Z = (e) => {
	var n;
	let { loop: t = !0, autoPlay: s = !0, setRef: o, className: u, onReady: c } = e,
		{ theme: m } = (0, r.useThemeContext)(),
		{ reducedMotion: h } = i.useContext(r.AccessibilityPreferencesContext),
		f = E;
	null != v && (f = v);
	let x = null !== (n = f[(0, a.wj)(m) ? p.BRd.DARK : p.BRd.LIGHT]) && void 0 !== n ? n : f[p.BRd.DARK];
	return (0, l.jsx)(
		d.Z,
		{
			ref: o,
			onLoadedData: c,
			className: u,
			loop: !h.enabled && t,
			autoPlay: !h.enabled && s,
			playsInline: !0,
			'data-testid': 'app-spinner',
			children: x
		},
		m
	);
};
