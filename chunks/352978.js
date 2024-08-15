n.d(t, {
	L: function () {
		return i;
	}
}),
	n(47120);
var i,
	a,
	s = n(735250),
	l = n(470079),
	r = n(120356),
	o = n.n(r),
	c = n(481060),
	u = n(763520),
	d = n(153066),
	h = n(542590);
((a = i || (i = {})).CONTAIN = 'contain'), (a.COVER = 'cover');
let m = l.memo(function (e) {
	let { streamId: t, onResize: n, wrapperClassName: i, videoComponent: a, className: r, fit: m = 'contain', mirror: p = !1, paused: _ = !1, streamPreviewURL: f, videoSpinnerContext: E, userId: C } = e,
		[g, I] = l.useState(!0),
		[x] = l.useState(() => new u.o('VideoStream'));
	l.useEffect(() => {
		!_ && (g ? x.onSpinnerStarted() : null != t && x.trackSpinnerDuration(E, C, t));
	}, [g, _, t, x, E, C]);
	let T = l.useCallback(() => {
		I(!1);
	}, []);
	return (0, s.jsxs)('div', {
		className: o()(h.wrapper, i),
		children: [
			null != t &&
				(0, s.jsx)(a, {
					className: o()(h.video, (0, d.l)(h, 'video', m), { [h.mirror]: p }, r),
					streamId: t,
					onResize: n,
					onReady: T,
					paused: _
				}),
			_
				? null
				: (0, s.jsx)('div', {
						className: o()(h.previewWrapper, { [h.loading]: g }),
						children:
							g &&
							(0, s.jsxs)(l.Fragment, {
								children: [
									null != f
										? (0, s.jsx)('img', {
												src: f,
												alt: '',
												className: h.previewImage
											})
										: (0, s.jsx)('div', {
												className: h.emptyPreviewWrapper,
												children: (0, s.jsx)('div', { className: h.emptyPreview })
											}),
									(0, s.jsx)(c.Spinner, { className: h.spinner })
								]
							})
					})
		]
	});
});
t.Z = m;
