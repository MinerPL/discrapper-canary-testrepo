l.d(t, {
	Z: function () {
		return E;
	}
}),
	l(47120);
var n = l(735250),
	a = l(470079),
	o = l(120356),
	s = l.n(o),
	i = l(399606),
	r = l(481060),
	C = l(823596),
	c = l(201070),
	d = l(893966),
	u = l(527379),
	m = l(689938),
	_ = l(181791);
function E(e) {
	let { guildId: t, onPageChange: l } = e,
		[o, E] = a.useTransition(),
		h = (0, i.e7)([d.Z], () => d.Z.getEstimatedMemberSearchCountByGuildId(t), [t]),
		M = (0, i.cj)([d.Z], () => d.Z.getPaginationStateByGuildId(t), [t]),
		x = (0, c.$j)(t),
		b = a.useMemo(
			() =>
				C.LU.map((e) => ({
					value: e,
					label: Number(e).toLocaleString()
				})),
			[]
		),
		T = new Intl.NumberFormat(m.Z.getLocale()).format(h),
		L = m.Z.Messages.MEMBER_SAFETY_TABLE_PAGINATION_LABEL.format({ count: x ? '...' : T }),
		g = h > M.pageSize || x,
		I = h > C.LU['0'];
	return (0, n.jsxs)('div', {
		className: s()(_.paginationContainer),
		children: [
			(0, n.jsx)('div', {
				className: s()(_.pageSizeSelection),
				children: I
					? (0, n.jsxs)(n.Fragment, {
							children: [
								(0, n.jsx)(r.Text, {
									variant: 'text-md/normal',
									color: 'text-muted',
									children: m.Z.Messages.MEMBER_SAFETY_TABLE_PAGINATION_PRE_LABEL
								}),
								(0, n.jsx)(r.Select, {
									'aria-label': L,
									className: _.pageSizeInput,
									options: b,
									isSelected: (e) => e === M.pageSize,
									select: (e) => {
										E(() => {
											(0, u._o)(t, {
												...M,
												pageSize: e
											});
										});
									},
									serialize: (e) => ''.concat(e),
									popoutPosition: 'top',
									popoutWidth: 72
								}),
								(0, n.jsx)(r.Tooltip, {
									text: m.Z.Messages.LOADING,
									shouldShow: x,
									children: (e) =>
										(0, n.jsx)(r.Text, {
											variant: 'text-md/normal',
											color: 'text-muted',
											className: s()(_.pageLabel),
											...e,
											children: L
										})
								})
							]
						})
					: (0, n.jsx)(r.Text, {
							variant: 'text-md/normal',
							color: 'text-muted',
							children: m.Z.Messages.MEMBER_SAFETY_TABLE_PAGINATION_NO_PAGE_NUMBERS_LABEL.format({ count: h })
						})
			}),
			(0, n.jsx)('div', {
				className: s()(_.pagination),
				children:
					g &&
					(0, n.jsx)(r.Paginator, {
						className: s()(_.paginationInput),
						totalCount: h,
						pageSize: M.pageSize,
						disablePaginationGap: !0,
						hideMaxPage: !0,
						currentPage: M.currentPage,
						onPageChange: (e) => {
							null == l || l(e),
								requestIdleCallback(() => {
									E(() => {
										(0, u._o)(t, {
											...M,
											currentPage: e
										});
									});
								});
						},
						maxVisiblePages: C.hW
					})
			})
		]
	});
}
