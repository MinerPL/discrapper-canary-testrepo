t.d(n, {
	Z: function () {
		return g;
	}
}),
	t(653041);
var a = t(735250);
t(470079);
var l = t(442837),
	s = t(481060),
	i = t(594174),
	o = t(311888),
	r = t(63063),
	c = t(5192),
	d = t(431328),
	u = t(501655),
	_ = t(659972),
	m = t(981631),
	h = t(765305),
	E = t(689938),
	x = t(264252);
function I(e) {
	let { icon: n } = e;
	return (0, a.jsx)('div', {
		className: x.iconContainer,
		children: (0, a.jsx)(n, {
			color: 'currentColor',
			size: 'md'
		})
	});
}
function T(e) {
	let { icon: n, text: t } = e;
	return (0, a.jsxs)('div', {
		className: x.listItemContainer,
		children: [
			(0, a.jsx)('div', {
				className: x.listItemIconContainer,
				children: n
			}),
			(0, a.jsx)(s.Text, {
				className: x.listItemText,
				variant: 'text-md/normal',
				color: 'header-secondary',
				children: t
			})
		]
	});
}
function N(e) {
	var n;
	let { guild: t, channel: s, stageData: o } = e,
		r = (0, l.e7)([i.default], () => i.default.getCurrentUser(), []),
		m = {
			id: '1337',
			guild_id: t.id,
			channel_id: s.id,
			topic: o.topic,
			description: o.description,
			privacy_level: null !== (n = o.privacyLevel) && void 0 !== n ? n : h.j8.PUBLIC
		},
		E = (0, d.w8)(s.id, u.pV.SPEAKER),
		I = (0, d.Rk)(s.id, u.pV.AUDIENCE),
		T = E.slice(0, 5);
	return (
		null ==
			T.find((e) => {
				var n;
				return (null === (n = e.user) || void 0 === n ? void 0 : n.id) === (null == r ? void 0 : r.id);
			}) &&
			T.push({
				user: r,
				userNick: c.ZP.getName(t.id, s.id, r)
			}),
		(0, a.jsx)('div', {
			className: x.previewCardContainer,
			children: (0, a.jsx)('div', {
				className: x.previewCard,
				children: (0, a.jsx)(_.Z, {
					guild: t,
					stageInstance: m,
					showGuildPopout: !1,
					setShowGuildPopout: () => {},
					source: _.k.UNSPECIFIED,
					speakers: T,
					speakerCount: E.length,
					audienceCount: Math.max(1337, I),
					channelName: s.name
				})
			})
		})
	);
}
function g(e) {
	let { guild: n, channel: t, stageData: l, headerId: i, loading: c, onNext: d, onCancel: u, onBack: _ } = e;
	return null == n || null == t || null == l
		? null
		: (0, a.jsxs)(a.Fragment, {
				children: [
					(0, a.jsx)(N, {
						guild: n,
						channel: t,
						stageData: l
					}),
					(0, a.jsxs)(s.ModalContent, {
						className: x.container,
						children: [
							(0, a.jsxs)('div', {
								className: x.header,
								children: [
									(0, a.jsx)(s.Heading, {
										id: i,
										className: x.__invalid_title,
										variant: 'heading-xl/semibold',
										children: E.Z.Messages.START_STAGE_PUBLIC_PREVIEW_TITLE
									}),
									(0, a.jsx)(s.Text, {
										className: x.subtitle,
										color: 'header-secondary',
										variant: 'text-sm/normal',
										children: E.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SUBTITLE
									})
								]
							}),
							(0, a.jsxs)('div', {
								className: x.__invalid_list,
								children: [
									(0, a.jsx)(T, {
										icon: (0, a.jsx)(I, { icon: s.CompassIcon }),
										text: E.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_ONE
									}),
									(0, a.jsx)(T, {
										icon: (0, a.jsx)(I, { icon: s.FriendsIcon }),
										text: E.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_TWO
									}),
									(0, a.jsx)(T, {
										icon: (0, a.jsx)(I, { icon: s.PencilIcon }),
										text: E.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_THREE
									}),
									(0, a.jsx)(T, {
										icon: (0, a.jsx)(o.Z, {
											className: x.badgeIconBackground,
											foreground: x.badgeIconForeground,
											width: 40,
											height: 40
										}),
										text: E.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_FOUR.format({ articleURL: r.Z.getArticleURL(m.BhN.STAGE_CHANNEL_GUIDELINES) })
									})
								]
							})
						]
					}),
					(0, a.jsxs)(s.ModalFooter, {
						children: [
							(0, a.jsx)(s.Button, {
								color: s.Button.Colors.GREEN,
								onClick: d,
								submitting: c,
								children: E.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
							}),
							(0, a.jsx)(s.Button, {
								color: s.Button.Colors.PRIMARY,
								className: x.cancelButton,
								onClick: u,
								children: E.Z.Messages.CANCEL
							}),
							(0, a.jsx)(s.Button, {
								look: s.Button.Looks.LINK,
								color: s.Button.Colors.LINK,
								className: x.backButton,
								onClick: _,
								size: s.Button.Sizes.MIN,
								children: E.Z.Messages.BACK
							})
						]
					})
				]
			});
}
