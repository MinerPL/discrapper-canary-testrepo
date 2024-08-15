n(47120);
var a = n(735250),
	s = n(470079),
	r = n(120356),
	l = n.n(r),
	i = n(338545),
	o = n(481060),
	c = n(787014),
	d = n(454585),
	u = n(456269),
	m = n(470623),
	h = n(981631),
	_ = n(689938),
	g = n(421076),
	x = n(910212);
t.Z = s.memo(function (e) {
	let { channel: t, onChange: r } = e,
		f = (0, m.AF)(),
		{ guidelinesOpen: C } = (0, m.xH)((e) => {
			let { guidelinesOpen: t } = e;
			return { guidelinesOpen: t };
		}),
		p = (0, u.r_)(t),
		[T, I] = s.useState(!1),
		E = s.useCallback(
			(e) => {
				if (null == e) return;
				let t = e.clientHeight >= 220;
				t !== T && I(t);
			},
			[T]
		);
	s.useLayoutEffect(() => {
		setTimeout(r, 350);
	}, [C, r]);
	let [N, b] = s.useState(!C),
		v = (0, o.useSpring)({
			opacity: C ? 1 : 0,
			maxHeight: C ? 500 : 0,
			config: { duration: 300 },
			onRest: () => b(!C)
		});
	return null != t.topic && t.topic.length > 0
		? (0, a.jsx)(i.animated.div, {
				style: v,
				className: N ? g.hiddenVisually : void 0,
				children: (0, a.jsxs)('div', {
					className: g.container,
					children: [
						(0, a.jsxs)('div', {
							className: g.headerContainer,
							children: [
								(0, a.jsxs)(o.Heading, {
									variant: 'heading-lg/semibold',
									className: g.guidelinesHeader,
									children: [
										(0, a.jsx)(o.BookCheckIcon, {
											size: 'custom',
											color: 'currentColor',
											width: 20,
											height: 20
										}),
										_.Z.Messages.FORUM_POST_GUIDELINES_TITLE,
										p &&
											(0, a.jsx)(o.Clickable, {
												onClick: () => {
													c.ZP.open(t.id, void 0, h.ZfP.TOPIC);
												},
												tag: 'span',
												className: g.clickable,
												children: (0, a.jsx)(o.PencilIcon, {
													size: 'xs',
													color: 'currentColor'
												})
											})
									]
								}),
								(0, a.jsx)(o.Clickable, {
									'aria-label': _.Z.Messages.CLOSE,
									className: g.clickable,
									onClick: () => {
										f.getState().setGuidelinesOpen(!1);
									},
									children: (0, a.jsx)(o.XSmallIcon, {
										size: 'xs',
										color: 'currentColor'
									})
								})
							]
						}),
						(0, a.jsxs)('div', {
							className: g.descriptionContainer,
							children: [
								(0, a.jsx)(o.Text, {
									selectable: !0,
									variant: 'text-sm/normal',
									color: 'header-secondary',
									style: { maxHeight: 220 },
									className: l()(g.guidelines, x.markup),
									children: (0, a.jsx)('div', {
										ref: E,
										children: d.Z.parseForumPostGuidelines(t.topic, !0, {
											channelId: t.id,
											allowHeading: !0,
											allowList: !0
										})
									})
								}),
								T &&
									(0, a.jsxs)('div', {
										className: g.showMore,
										children: [
											(0, a.jsx)('div', { className: g.gradient }),
											(0, a.jsx)('div', {
												className: g.linkContainer,
												children: (0, a.jsx)(o.Clickable, {
													className: g.showMoreLink,
													onClick: () => {
														(0, o.openModalLazy)(async () => {
															let { default: e } = await n.e('78712').then(n.bind(n, 223164));
															return (n) =>
																(0, a.jsx)(e, {
																	...n,
																	channel: t
																});
														});
													},
													children: (0, a.jsxs)(o.Text, {
														variant: 'text-sm/semibold',
														color: 'text-brand',
														className: g.showMoreText,
														children: [
															_.Z.Messages.FORUM_CHANNEL_TOPIC_VIEW_ALL,
															(0, a.jsx)(o.MaximizeIcon, {
																size: 'xs',
																color: 'currentColor',
																className: g.showMoreIcon
															})
														]
													})
												})
											})
										]
									})
							]
						})
					]
				})
			})
		: null;
});
