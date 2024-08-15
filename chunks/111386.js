n(47120);
var i = n(735250),
	a = n(470079),
	s = n(704215),
	l = n(481060),
	r = n(243778),
	o = n(689938),
	c = n(576306),
	u = n(442937);
let d = () =>
	(0, i.jsxs)('div', {
		className: c.coachtipInner,
		children: [
			(0, i.jsx)('img', {
				src: u,
				alt: o.Z.Messages.CONTENT_INVENTORY_COACHTIP_IMAGE_ALT,
				className: c.coachtipAsset
			}),
			(0, i.jsxs)('div', {
				className: c.coachtipTextContainer,
				children: [
					(0, i.jsx)(l.Heading, {
						variant: 'heading-lg/semibold',
						children: o.Z.Messages.CONTENT_INVENTORY_COACHTIP_HEADER
					}),
					(0, i.jsx)(l.Text, {
						variant: 'text-md/normal',
						color: 'text-secondary',
						children: o.Z.Messages.CONTENT_INVENTORY_COACHTIP_TEXT
					})
				]
			})
		]
	});
t.Z = (e) => {
	let { children: t } = e,
		[n] = (0, r.US)([s.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
		[o, u] = a.useState(!1);
	return (a.useEffect(() => {
		setTimeout(() => {
			u(!0);
		}, 300);
	}),
	n !== s.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP)
		? (0, i.jsx)(i.Fragment, { children: t })
		: (0, i.jsx)(l.Tooltip, {
				text: (0, i.jsx)(d, {}),
				tooltipClassName: c.coachtip,
				tooltipContentClassName: c.coachtipContent,
				position: 'left',
				allowOverflow: !0,
				forceOpen: o,
				shouldShow: o,
				hideOnClick: !1,
				'aria-label': 'test',
				children: (e) =>
					(0, i.jsx)('div', {
						...e,
						children: t
					})
			});
};
