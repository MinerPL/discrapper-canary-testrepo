var i = n(735250);
n(470079);
var a = n(481060),
	s = n(554300),
	r = n(731455),
	l = n(689938),
	o = n(575501);
t.Z = (e) => {
	let { handleCategorySelect: t, shouldDisplaySelectedCategory: n, currentCategoryId: c } = e;
	return (0, i.jsx)(
		s.Z,
		{
			avatar: (0, i.jsx)(a.HubIcon, {
				size: 'md',
				color: 'currentColor'
			}),
			name: l.Z.Messages.HUB_SCHOOL_HUBS,
			focusProps: {
				offset: {
					right: 4,
					top: 1,
					bottom: 1
				}
			},
			onClick: () => {
				t(r.U);
			},
			wrapContent: !0,
			selected: n && r.U === c,
			className: o.categoryItem,
			selectedClassName: o.selectedCategoryItem,
			innerClassName: o.itemInner
		},
		r.U
	);
};
