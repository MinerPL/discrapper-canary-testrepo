n.d(t, {
	Z: function () {
		return S;
	},
	r: function () {
		return g;
	}
});
var r = n(735250);
n(470079);
var i = n(120356),
	a = n.n(i),
	s = n(442837),
	o = n(692547),
	l = n(215569),
	u = n(481060),
	c = n(600164),
	d = n(528144),
	_ = n(312956),
	E = n(501967),
	f = n(19780),
	h = n(540028),
	p = n(507675),
	I = n(273716),
	m = n(689938),
	T = n(582920);
function g(e) {
	let { title: t, onJumpToChannel: n, onHide: i, idle: a, preventIdleComponent: l } = e,
		c = (0, s.e7)([f.Z], () => f.Z.getChannelId()),
		E =
			null != c
				? (0, r.jsx)(h.Z, {
						voiceChannelId: c,
						idle: a
					})
				: null,
		{ enabled: p } = _.Z.useExperiment({ location: 'PictureInPicturePlayer' });
	return (0, r.jsxs)(l, {
		className: T.headerIdleContainer,
		children: [
			(0, r.jsxs)(u.Clickable, {
				className: T.headerTitle,
				onClick: n,
				children: [
					(0, r.jsx)(u.ArrowSmallLeftIcon, {
						size: 'custom',
						color: 'currentColor',
						'aria-label': m.Z.Messages.OPEN_IN_THEATER,
						className: T.backButton,
						width: 20,
						height: 20
					}),
					(0, r.jsx)(d.Z, {
						className: T.headerText,
						size: d.Z.Sizes.SIZE_16,
						color: o.Z.unsafe_rawColors.WHITE_500.css,
						children: t
					})
				]
			}),
			p && null != i
				? (0, r.jsx)(I.Z, {
						onClick: i,
						label: m.Z.Messages.PICTURE_IN_PICTURE_CLOSE_PIP
					})
				: null,
			E
		]
	});
}
function S(e) {
	let {
		children: t,
		idle: n,
		onJumpToChannel: i,
		onHide: s,
		backgroundKey: o,
		onActive: u,
		onForceIdle: d,
		renderBottomLeftControls: _,
		renderBottomRightControls: f,
		screenMessage: h,
		hideControls: I = !1,
		className: m,
		innerClassName: S,
		...A
	} = e;
	return (0, r.jsxs)('div', {
		onMouseMove: u,
		onMouseDown: u,
		onMouseLeave: d,
		className: a()(T.pictureInPictureVideo, { [T.idle]: n }, m),
		onDoubleClick: i,
		children: [
			(0, r.jsx)(l.W, {
				children: (0, r.jsx)(
					E.B,
					{
						className: S,
						children: t
					},
					o
				)
			}),
			null != h
				? (0, r.jsx)(p.Z, {
						size: 'small',
						...h
					})
				: null,
			!I &&
				(0, r.jsxs)('div', {
					className: a()(T.videoControls, 'theme-dark'),
					children: [
						(0, r.jsx)('div', {
							className: T.topControls,
							children: (0, r.jsx)(g, {
								idle: n,
								onJumpToChannel: i,
								onHide: s,
								...A
							})
						}),
						(0, r.jsxs)('div', {
							className: T.bottomControls,
							children: [
								(0, r.jsx)(c.Z, {
									grow: 0,
									shrink: 1,
									basis: '50%',
									align: c.Z.Align.CENTER,
									className: T.bottomLeftControls,
									children: null == _ ? void 0 : _()
								}),
								(0, r.jsx)(c.Z, {
									grow: 0,
									shrink: 1,
									justify: c.Z.Justify.END,
									basis: '50%',
									align: c.Z.Align.CENTER,
									children: null == f ? void 0 : f()
								})
							]
						})
					]
				})
		]
	});
}
