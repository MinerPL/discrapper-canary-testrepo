l.d(t, {
	N2: function () {
		return M;
	},
	Ol: function () {
		return n;
	},
	ZP: function () {
		return T;
	}
}),
	l(47120);
var n,
	a,
	o = l(735250),
	s = l(470079),
	i = l(120356),
	r = l.n(i),
	C = l(913527),
	c = l.n(C),
	d = l(608787),
	u = l(481060),
	m = l(553826),
	_ = l(981631),
	E = l(689938),
	h = l(324246);
let M = 'MMM Do, YYYY',
	x = c()('2015-05-15').local(),
	b = (0, d.Un)({
		createPromise: () => Promise.resolve().then(l.bind(l, 547800)),
		webpackId: 547800
	});
((a = n || (n = {}))[(a.ALL = 0)] = 'ALL'),
	(a[(a['1_HOUR'] = 1)] = '1_HOUR'),
	(a[(a['24_HOURS'] = 2)] = '24_HOURS'),
	(a[(a['7_DAYS'] = 3)] = '7_DAYS'),
	(a[(a['2_WEEKS'] = 4)] = '2_WEEKS'),
	(a[(a['4_WEEKS'] = 5)] = '4_WEEKS'),
	(a[(a['3_MONTHS'] = 6)] = '3_MONTHS'),
	(a[(a.CUSTOM = 7)] = 'CUSTOM');
function T(e) {
	let {
			startDateLabel: t,
			endDateLabel: l,
			afterDate: n,
			beforeDate: a,
			selectedOption: i,
			isCustomDateRange: C,
			menuName: d,
			onClose: M,
			onSelectDateOption: T,
			onToggleCustomDateRange: L,
			onSelectStartDate: g,
			onSelectEndDate: I
		} = e,
		p = [
			{
				id: 0,
				option: null,
				label: E.Z.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_ALL
			},
			{
				id: 1,
				option: {
					input: 1,
					unit: 'h'
				},
				label: E.Z.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_1_HOUR
			},
			{
				id: 2,
				option: {
					input: 24,
					unit: 'h'
				},
				label: E.Z.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_24_HOURS
			},
			{
				id: 3,
				option: {
					input: 7,
					unit: 'd'
				},
				label: E.Z.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_7_DAYS
			},
			{
				id: 4,
				option: {
					input: 2,
					unit: 'w'
				},
				label: E.Z.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_2_WEEKS
			},
			{
				id: 5,
				option: {
					input: 4,
					unit: 'w'
				},
				label: E.Z.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_4_WEEKS
			},
			{
				id: 6,
				option: {
					input: 3,
					unit: 'M'
				},
				label: E.Z.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_3_MONTHS
			}
		],
		[H, f] = s.useState(!1),
		N = (function () {
			if (7 !== i) return null;
			if (null != t && null != l) return ''.concat(t, ' - ').concat(l);
			if (null != t) return E.Z.Messages.MEMBER_SAFETY_DATE_OPTION_AFTER_ONLY.format({ date: t });
			if (null != l) return E.Z.Messages.MEMBER_SAFETY_DATE_OPTION_BEFORE_ONLY.format({ date: l });
			return null;
		})(),
		R = s.useCallback(() => {
			f(!0), L();
		}, [L]),
		A = s.useCallback(
			(e) => {
				g(e);
			},
			[g]
		),
		S = s.useCallback(
			(e) => {
				I(e);
			},
			[I]
		),
		Z = s.useCallback(() => {
			null == a && null == n && T(0, null), f(!1);
		}, [n, a, T]);
	return (0, o.jsx)(u.Menu, {
		navId: 'member-safety-guild-member-'.concat(d, '-menu'),
		onClose: M,
		'aria-label': E.Z.Messages.MEMBER_SAFETY_TABLE_FLAGS_POPOUT_TITLE,
		onSelect: _.dG4,
		children: (0, o.jsx)(u.MenuGroup, {
			children: H
				? (0, o.jsxs)(o.Fragment, {
						children: [
							(0, o.jsx)(u.MenuItem, {
								id: 'back',
								action: Z,
								render: (e) =>
									(0, o.jsxs)('span', {
										...e,
										className: h.nagivateBackContainer,
										children: [
											(0, o.jsx)(u.ChevronSmallLeftIcon, {
												size: 'custom',
												color: 'currentColor',
												width: 16,
												height: 16
											}),
											(0, o.jsx)(u.Text, {
												variant: 'eyebrow',
												color: 'header-primary',
												children: E.Z.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_CUSTOM
											})
										]
									})
							}),
							(0, o.jsx)(u.MenuItem, {
								id: 'after-date-menu-item',
								label: E.Z.Messages.MEMBER_SAFETY_DATE_OPTION_AFTER,
								subtext: t,
								subMenuClassName: h.calendarContainer,
								children: (0, o.jsx)(u.MenuItem, {
									id: 'after-date-picker',
									render: (e) =>
										(0, o.jsx)(b, {
											...e,
											calendarClassName: h.calendar,
											value: C && null != n ? c()(n) : void 0,
											onSelect: A,
											maxDate: c()().local(),
											minDate: x
										})
								})
							}),
							(0, o.jsx)(u.MenuItem, {
								id: 'before-date-menu-item',
								label: E.Z.Messages.MEMBER_SAFETY_DATE_OPTION_BEFORE,
								subtext: l,
								subMenuClassName: h.calendarContainer,
								children: (0, o.jsx)(u.MenuItem, {
									id: 'before-date-picker',
									render: (e) =>
										(0, o.jsx)(b, {
											...e,
											calendarClassName: h.calendar,
											value: C && null != a ? c()(a) : void 0,
											onSelect: S,
											maxDate: c()().local(),
											minDate: C && null != n ? c()(n) : x
										})
								})
							})
						]
					})
				: (0, o.jsxs)(o.Fragment, {
						children: [
							p.map((e) => {
								let { id: t, option: l, label: n } = e;
								return (0, o.jsx)(
									u.MenuRadioItem,
									{
										group: 'member-safety-guild-member-'.concat(d, '-menu'),
										id: 'guild-member-'.concat(d, '-option-').concat(t),
										label: n,
										action: () => T(t, l),
										checked: t === i
									},
									'option-'.concat(t)
								);
							}),
							(0, o.jsx)(u.MenuSeparator, {}),
							(0, o.jsx)(u.MenuItem, {
								id: 'guild-member-'.concat(d, '-custom-option}'),
								action: R,
								render: (e) =>
									(0, o.jsxs)('div', {
										className: r()(h.otherDatesContainer, { [h.focused]: e.isFocused }),
										children: [
											(0, o.jsxs)('div', {
												className: h.leftContainer,
												children: [
													(0, o.jsx)(u.Text, {
														className: r()(h.otherDateLabel, { [h.focused]: e.isFocused }),
														variant: 'text-sm/medium',
														children: E.Z.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_CUSTOM
													}),
													null != N &&
														(0, o.jsx)(u.Text, {
															className: r()(h.otherDateLabel, { [h.focused]: e.isFocused }),
															color: 'text-muted',
															variant: 'text-xxs/medium',
															children: N
														})
												]
											}),
											7 === i
												? (0, o.jsx)(m.Z, {
														foreground: h.radioSelection,
														width: 18,
														height: 18
													})
												: (0, o.jsx)(u.ChevronSmallRightIcon, {
														size: 'custom',
														color: 'currentColor',
														width: 16,
														height: 16,
														className: r()(h.otherDateLabel, { [h.focused]: e.isFocused })
													})
										]
									})
							})
						]
					})
		})
	});
}
