a.d(t, {
	Z: function () {
		return f;
	}
}),
	a(47120);
var n = a(735250),
	s = a(470079),
	i = a(338545),
	r = a(481060),
	o = a(230711),
	l = a(318661),
	u = a(63063),
	d = a(51144),
	c = a(544508),
	E = a(801461),
	_ = a(981631),
	m = a(689938),
	g = a(740080);
function f(e) {
	let { userRef: t, usernameSuggestionLoading: a = !1, oneClickFlow: f = !1, ...S } = e,
		{ user: I, editState: T, onClose: N } = S,
		h = (0, l.ZP)(I.id),
		O = (function (e, t, a) {
			switch (e) {
				case E.Wq.EDIT_USERNAME:
					return {
						header: m.Z.Messages.POMELO_EXISTING_FLOW_STEP_2_TITLE,
						subtitle: m.Z.Messages.POMELO_EXISTING_FLOW_STEP_2_SUBTITLE
					};
				case E.Wq.EDIT_DISPLAY_NAME:
					return {
						header: m.Z.Messages.POMELO_EXISTING_FLOW_STEP_1_TITLE,
						subtitle: m.Z.Messages.POMELO_EXISTING_FLOW_STEP_1_SUBTITLE
					};
				case E.Wq.PREVIEW:
					return {
						header: m.Z.Messages.POMELO_EXISTING_FLOW_COMPLETION_TITLE.format({ displayName: t }),
						subtitle: m.Z.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_2.format({
							onClick: () => {
								a(), o.Z.open(_.oAB.ACCOUNT);
							}
						})
					};
				case E.Wq.SUGGESTION:
					return {
						header: m.Z.Messages.POMELO_ACTION_LABEL_OCF,
						subtitle: m.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_OCF.format(),
						link: m.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_2.format({
							helpdeskArticle: u.Z.getArticleURL(_.BhN.POMELO_FAQ)
						})
					};
				default:
					return {
						header: m.Z.Messages.POMELO_EXISTING_FLOW_STEP_2_TITLE,
						subtitle: m.Z.Messages.POMELO_EXISTING_FLOW_STEP_2_SUBTITLE
					};
			}
		})(T, d.ZP.getName(I), N),
		[M, v] = (0, r.useSpring)(() => ({
			opacity: 0,
			y: 10
		}));
	return (
		s.useEffect(() => {
			v({
				y: 0,
				opacity: 1,
				from: {
					y: 10,
					opacity: 0
				}
			});
		}, [v, T]),
		(0, n.jsxs)('div', {
			className: g.displayNameContainer,
			children: [
				(0, n.jsxs)(i.animated.div, {
					style: {
						opacity: M.opacity,
						y: M.y
					},
					children: [
						(0, n.jsx)(r.Heading, {
							className: g.title,
							color: 'header-primary',
							variant: 'heading-xl/extrabold',
							children: O.header
						}),
						(0, n.jsxs)('div', {
							className: g.subtitle,
							children: [
								(0, n.jsx)(r.Heading, {
									color: 'header-secondary',
									variant: 'heading-sm/medium',
									children: O.subtitle
								}),
								null != O.link &&
									(0, n.jsx)(r.Text, {
										className: g.link,
										color: 'header-secondary',
										variant: 'text-sm/medium',
										children: O.link
									})
							]
						})
					]
				}),
				(0, n.jsx)(c.Z, {
					...S,
					displayProfile: h,
					ref: t,
					usernameSuggestionLoading: a,
					oneClickFlow: f
				})
			]
		})
	);
}
