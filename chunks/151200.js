l.d(n, {
	Z: function () {
		return E;
	}
});
var t = l(735250);
l(470079);
var r = l(120356),
	i = l.n(r),
	a = l(481060),
	u = l(256139),
	s = l(328731),
	o = l(435439),
	c = l(206295),
	d = l(297781),
	m = l(43205),
	f = l(231338),
	p = l(917056);
function E(e) {
	let {
			entry: n,
			channel: l,
			title: r,
			subtitle: E,
			thumbnailUrl: v,
			onClickTitle: C,
			onClickSubtitle: h,
			onClickThumbnail: x,
			providerIconProps: _,
			style: N = {}
		} = e,
		{ primaryColor: T, secondaryColor: I } = (0, c.Z)(v);
	return (
		null != v && (N.background = 'linear-gradient(45deg, '.concat(T, ', ').concat(I, ')')),
		(0, t.jsx)(a.ThemeContextProvider, {
			theme: f.BR.DARK,
			children: (0, t.jsxs)('div', {
				'data-disable-adaptive-theme': !0,
				className: p.container,
				style: N,
				children: [
					(0, t.jsx)(a.Clickable, {
						onClick: x,
						className: i()(p.thumbnailContainer, null != x && p.clickable),
						children: (0, t.jsx)(m.f, {
							src: v,
							constrain: 'width',
							size: 64
						})
					}),
					(0, t.jsxs)('div', {
						className: p.infoContainer,
						children: [
							(0, t.jsx)(s.Z, {
								channel: l,
								entry: n,
								className: p.users
							}),
							(0, t.jsx)(a.Spacer, { size: 2 }),
							(0, t.jsx)(u.Z, {
								onClick: C,
								children: (0, t.jsx)(a.Heading, {
									variant: 'heading-md/medium',
									lineClamp: 1,
									className: i()(p.textPrimary, p.truncatedText),
									scaleFontToUserSetting: !0,
									children: r
								})
							}),
							null != E
								? (0, t.jsxs)(t.Fragment, {
										children: [
											(0, t.jsx)(a.Spacer, { size: 2 }),
											(0, t.jsx)(u.Z, {
												onClick: h,
												children: (0, t.jsx)(a.Text, {
													variant: 'text-sm/normal',
													className: i()(p.textSecondary, p.truncatedText),
													lineClamp: 1,
													scaleFontToUserSetting: !0,
													children: E
												})
											})
										]
									})
								: null,
							(0, t.jsx)(d.PZ, {
								className: p.badges,
								entry: n,
								location: d.Gt.EMBED
							})
						]
					}),
					(0, t.jsx)('div', {
						className: p.headerIcons,
						children: null != _ ? (0, t.jsx)(o.Z, { ..._ }) : null
					})
				]
			})
		})
	);
}
