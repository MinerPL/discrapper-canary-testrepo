n.d(t, {
	Z: function () {
		return p;
	}
}),
	n(627341);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	r = n.n(s),
	l = n(278074),
	o = n(263568),
	c = n(481060),
	u = n(203143),
	d = n(365206),
	_ = n(294608),
	E = n(65145),
	I = n(920557),
	m = n(865266);
function T(e) {
	let { media: t } = e;
	return (0, i.jsx)(c.Heading, {
		variant: 'text-md/medium',
		className: m.question,
		scaleFontToUserSetting: !0,
		children: t.text
	});
}
function h(e) {
	let {
		children: t,
		onClick: n,
		variant: a = 'text-sm/medium',
		color: s = 'interactive-active',
		className: l,
		buttonRef: o
	} = e;
	return (0, i.jsx)(c.Button, {
		onClick: n,
		className: r()(m.__invalid_textButton, l),
		look: c.Button.Looks.BLANK,
		size: c.Button.Sizes.NONE,
		buttonRef: o,
		children: (0, i.jsx)(c.Text, {
			variant: a,
			color: s,
			scaleFontToUserSetting: !0,
			children: t
		})
	});
}
function N(e) {
	let { buttonLabel: t, secondaryLabel: n, handleClick: a, isInteractive: s, className: l } = e;
	return (0, i.jsxs)('div', {
		className: r()(m.detailsText, l),
		children: [
			s
				? (0, i.jsx)(h, {
						onClick: a,
						variant: 'text-sm/normal',
						color: 'none',
						className: r()(m.detailsTextButton, m.interactive),
						children: t
					})
				: (0, i.jsx)(c.Text, {
						variant: 'text-sm/normal',
						color: 'text-muted',
						scaleFontToUserSetting: !0,
						children: t
					}),
			null != n &&
				(0, i.jsx)(c.Text, {
					variant: 'text-sm/normal',
					color: 'text-muted',
					scaleFontToUserSetting: !0,
					children: n
				})
		]
	});
}
function f(e) {
	let { action: t, channelId: n, messageId: s, isInteractive: l, className: o } = e,
		{ actionButtonRef: d, manageFocusOnAction: _ } = (0, E.dv)(),
		I = a.useCallback(async () => {
			if ((null == t ? void 0 : t.type) != null)
				await u.Z.handlePollActionTapped({
					channelId: n,
					messageId: s,
					type: t.type
				}),
					_(t.type);
		}, [null == t ? void 0 : t.type, n, s, _]);
	return null == t
		? null
		: 'button' === t.presentation || 'secondaryButton' === t.presentation
			? (0, i.jsx)(
					c.Button,
					{
						buttonRef: d,
						onClick: I,
						disabled: !t.enabled,
						color: 'secondaryButton' === t.presentation ? c.Button.Colors.CUSTOM : c.Button.Colors.BRAND,
						size: c.Button.Sizes.SMALL,
						className: r()(
							o,
							m.buttonPresentation,
							'secondaryButton' === t.presentation && m.secondaryButtonPresentation
						),
						children: (0, i.jsx)(c.Text, {
							variant: 'text-sm/medium',
							color: 'none',
							scaleFontToUserSetting: !0,
							children: t.label
						})
					},
					t.presentation
				)
			: 'textButton' === t.presentation
				? (0, i.jsx)(h, {
						buttonRef: d,
						onClick: I,
						className: o,
						children: t.label
					})
				: (0, i.jsx)(N, {
						buttonLabel: t.label,
						secondaryLabel: t.secondaryLabel,
						handleClick: I,
						isInteractive: l,
						className: o
					});
}
function C(e) {
	let { message: t, poll: n, className: a } = e,
		s = (0, _.$B)(n.containerStyle),
		u = (function (e, t) {
			let n = {
				answers: t.answers,
				answersInteraction: t.answersInteraction,
				answerTapAccessibilityLabel: t.answerTapAccessibilityLabel,
				isExpired: t.isExpired,
				canTapAnswers: t.canTapAnswers,
				hasSelectedAnyAnswer: t.hasSelectedAnswer,
				myAvatarUrl: t.myAvatarUrl,
				canShowVoteCounts: t.canShowVoteCounts
			};
			return (0, l.EQ)(t.layoutType)
				.with(o.C.DEFAULT, () => (0, i.jsx)(I.K, { ...n }))
				.with(o.C.IMAGE_ONLY_ANSWERS, () => (0, i.jsx)(d.Z, { ...n }))
				.otherwise(() => null);
		})(0, n);
	return null == u
		? null
		: (0, i.jsx)('div', {
				className: r()(m.container, s, a),
				children: (0, i.jsxs)(c.HeadingLevel, {
					children: [
						(0, i.jsxs)('div', {
							className: m.header,
							children: [
								(0, i.jsx)(T, { media: n.question }),
								null != n.promptLabel &&
									(0, i.jsx)(c.Text, {
										variant: 'text-sm/normal',
										color: 'text-muted',
										className: m.prompt,
										scaleFontToUserSetting: !0,
										children: n.promptLabel
									})
							]
						}),
						u,
						(0, i.jsxs)('div', {
							className: m.bottomBar,
							children: [
								(0, i.jsx)(f, {
									channelId: t.getChannelId(),
									messageId: t.id,
									action: n.secondaryAction,
									className: m.secondaryAction,
									isInteractive: n.isInteractive
								}),
								(0, i.jsx)(f, {
									channelId: t.getChannelId(),
									messageId: t.id,
									action: n.tertiaryAction,
									className: m.tertiaryAction
								}),
								(0, i.jsx)(f, {
									channelId: t.getChannelId(),
									messageId: t.id,
									action: n.primaryAction
								})
							]
						})
					]
				})
			});
}
function p(e) {
	let { message: t, poll: n, className: a } = e;
	return (0, i.jsx)(_.XL, {
		message: t,
		poll: n,
		children: (0, i.jsx)(E.Pk, {
			children: (0, i.jsx)(C, {
				message: t,
				poll: n,
				className: a
			})
		})
	});
}
