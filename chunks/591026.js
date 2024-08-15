n.d(t, {
	Z: function () {
		return E;
	}
}),
	n(47120);
var s = n(735250),
	a = n(470079),
	i = n(481060),
	r = n(467319),
	l = n(456677),
	o = n(55889),
	c = n(300453),
	d = n(620436),
	u = n(273504),
	_ = n(689938),
	I = n(856293);
function E(e) {
	var t, n;
	let { rule: E, onChangeRule: T } = e,
		[m, N] = a.useState(null === (t = E.triggerMetadata) || void 0 === t ? void 0 : t.mentionTotalLimit),
		S = (0, r.a)(E.guildId, !1);
	return (0, s.jsx)(s.Fragment, {
		children: (0, s.jsxs)('div', {
			className: I.cardContentsContainer,
			children: [
				(0, s.jsxs)(c.Z, {
					step: 1,
					header: _.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_TRIGGER_HEADER,
					children: [
						(0, s.jsxs)('div', {
							className: I.mentionLimitContainer,
							children: [
								(0, s.jsx)('div', {
									className: I.mentionLimitIconContainer,
									children: (0, s.jsx)(i.AtIcon, {
										size: 'md',
										color: 'currentColor',
										className: I.mentionLimitIcon
									})
								}),
								(0, s.jsxs)('div', {
									className: I.mentionLimitTextContainer,
									children: [
										(0, s.jsx)(i.Heading, {
											variant: 'heading-sm/semibold',
											children: _.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_TRIGGER_DESCRIPTION
										}),
										(0, s.jsx)(i.Text, {
											color: 'interactive-normal',
											variant: 'text-xs/medium',
											className: I.descriptionHint,
											children: _.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_TRIGGER_DESCRIPTION_HINT
										})
									]
								}),
								(0, s.jsx)('div', {
									className: I.stepperContainer,
									children: (0, s.jsx)(i.NumberInputStepper, {
										value: m,
										onChange: (e) => {
											N(e),
												T({
													...E,
													triggerMetadata: {
														...E.triggerMetadata,
														mentionTotalLimit: e
													}
												});
										},
										minValue: u.Vg,
										maxValue: u.Lg,
										className: I.stepper
									})
								})
							]
						}),
						S
							? (0, s.jsxs)('div', {
									className: I.mentionLimitContainer,
									children: [
										(0, s.jsx)('div', {
											className: I.mentionLimitIconContainer,
											children: (0, s.jsx)(i.ShieldAtIcon, {
												size: 'md',
												color: 'currentColor',
												className: I.mentionLimitIcon
											})
										}),
										(0, s.jsxs)('div', {
											className: I.mentionLimitTextContainer,
											children: [
												(0, s.jsx)(i.Heading, {
													variant: 'heading-sm/semibold',
													children: _.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_RAID_DESCRIPTION
												}),
												(0, s.jsx)(i.Text, {
													color: 'interactive-normal',
													variant: 'text-xs/medium',
													className: I.descriptionHint,
													children: _.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_RAID_DESCRIPTION_HINT
												})
											]
										}),
										(0, s.jsx)('div', {
											children: (0, s.jsx)(i.Checkbox, {
												type: i.Checkbox.Types.INVERTED,
												value: null === (n = E.triggerMetadata) || void 0 === n ? void 0 : n.mentionRaidProtectionEnabled,
												onChange: (e, t) => {
													T({
														...E,
														triggerMetadata: {
															...E.triggerMetadata,
															mentionRaidProtectionEnabled: t
														}
													});
												},
												className: I.__invalid_actionCheckbox
											})
										})
									]
								})
							: null
					]
				}),
				(0, s.jsx)(d.Z, { type: d.Z.Type.ARROW_DOWN }),
				(0, s.jsx)(c.Z, {
					step: 2,
					header: _.Z.Messages.GUILD_AUTOMOD_ACTIONS_HEADER,
					children: (0, s.jsx)(l.Z, {
						rule: E,
						onChangeRule: T
					})
				}),
				(0, s.jsx)(d.Z, { type: d.Z.Type.CROSS }),
				(0, s.jsx)(c.Z, {
					step: 3,
					header: _.Z.Messages.GUILD_AUTOMOD_EXEMPTION_HEADER,
					children: (0, s.jsx)(o.Z, {
						rule: E,
						onChangeRule: T
					})
				})
			]
		})
	});
}
