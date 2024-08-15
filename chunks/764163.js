n.d(t, {
	DI: function () {
		return f;
	},
	x3: function () {
		return R;
	}
}),
	n(47120);
var s = n(735250),
	a = n(470079),
	i = n(512722),
	r = n.n(i),
	l = n(442837),
	o = n(481060),
	c = n(596454),
	d = n(600164),
	u = n(313201),
	_ = n(318766),
	I = n(907040),
	E = n(339085),
	T = n(633302),
	m = n(777036),
	N = n(984933),
	S = n(691886),
	h = n(185923),
	g = n(689938),
	C = n(268831);
function x(e) {
	let { guildId: t, emojiData: n, 'aria-labelledby': i, onSelectEmoji: r } = e,
		d = (0, l.e7)([E.ZP], () => (null != n.id ? E.ZP.getCustomEmojiById(n.id) : void 0)),
		u = (0, l.e7)([N.ZP], () => N.ZP.getDefaultChannel(t)),
		m = a.useCallback(
			(e) => {
				let { closePopout: t } = e;
				return (0, s.jsx)(I.Z, {
					pickerIntention: h.Hz.GUILD_ROLE_BENEFIT_EMOJI,
					channel: u,
					closePopout: t,
					onNavigateAway: t,
					onSelectEmoji: (e, n) => {
						null != e &&
							r(
								null != e.id
									? {
											id: e.id,
											name: void 0
										}
									: {
											id: void 0,
											name: e.optionallyDiverseSequence
										}
							),
							n && t();
					}
				});
			},
			[r, u]
		),
		S = a.useMemo(
			() =>
				null == d && null == n.name
					? null
					: function () {
							return (0, s.jsx)(c.Z, {
								className: C.emoji,
								emojiId: n.id,
								emojiName: n.name,
								animated: null == d ? void 0 : d.animated
							});
						},
			[n, d]
		),
		x = '';
	return (
		null != d ? (x = ':'.concat(d.name, ':')) : null != n.name && (x = T.ZP.convertSurrogateToName(n.name)),
		(0, s.jsx)(o.Popout, {
			animation: o.Popout.Animation.NONE,
			position: 'top',
			renderPopout: m,
			children: (e, t) => {
				let { isShown: n } = t;
				return (0, s.jsxs)('div', {
					className: C.emojiInputContainer,
					...e,
					children: [
						(0, s.jsx)(_.Z, {
							className: C.emojiButton,
							active: n,
							tabIndex: 0,
							renderButtonContents: S
						}),
						(0, s.jsx)(o.TextInput, {
							inputClassName: C.emojiText,
							placeholder: g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_EMOJI_PLACEHOLDER,
							value: x,
							'aria-labelledby': i,
							readOnly: !0
						})
					]
				});
			}
		})
	);
}
function p(e) {
	var t;
	let {
			guildId: n,
			initialData: i,
			benefitTypeInput: r,
			descriptionPlaceholder: l,
			canSubmit: c,
			onSave: _,
			onDelete: I,
			transitionState: E,
			onClose: T
		} = e,
		m = (0, u.Dt)(),
		N = (0, u.Dt)(),
		S = (0, u.Dt)(),
		[h, p] = a.useState(null !== (t = null == i ? void 0 : i.description) && void 0 !== t ? t : ''),
		[R, f] = a.useState(() => ({
			id: null == i ? void 0 : i.emoji_id,
			name: null == i ? void 0 : i.emoji_name
		})),
		L = c && '' !== h && (null != R.id || null != R.name);
	return (0, s.jsx)('form', {
		onSubmit: function (e) {
			e.preventDefault(),
				L &&
					(_({
						description: h,
						emojiId: R.id,
						emojiName: R.name
					}),
					T());
		},
		children: (0, s.jsxs)(o.ModalRoot, {
			transitionState: E,
			'aria-labelledby': m,
			children: [
				(0, s.jsxs)(o.ModalHeader, {
					children: [
						(0, s.jsx)(o.Heading, {
							id: m,
							variant: 'heading-md/semibold',
							children: g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_MODAL_TITLE
						}),
						(0, s.jsx)(o.ModalCloseButton, {
							className: C.closeButton,
							onClick: T
						})
					]
				}),
				(0, s.jsxs)(o.ModalContent, {
					className: C.modalContent,
					children: [
						r,
						(0, s.jsx)(o.Spacer, { size: 24 }),
						(0, s.jsx)(o.FormSection, {
							title: g.Z.Messages.DESCRIPTION,
							titleId: N,
							children: (0, s.jsx)(o.TextArea, {
								placeholder: l,
								value: h,
								rows: 1,
								autosize: !0,
								onChange: p,
								'aria-labelledby': N
							})
						}),
						(0, s.jsx)(o.Spacer, { size: 24 }),
						(0, s.jsx)(o.FormSection, {
							title: g.Z.Messages.EMOJI,
							titleId: S,
							children: (0, s.jsx)(x, {
								guildId: n,
								emojiData: R,
								onSelectEmoji: f,
								'aria-labelledby': S
							})
						})
					]
				}),
				(0, s.jsxs)(o.ModalFooter, {
					justify: d.Z.Justify.BETWEEN,
					children: [
						(0, s.jsxs)('div', {
							className: C.primaryButtons,
							children: [
								(0, s.jsx)(o.Button, {
									type: 'submit',
									disabled: !L,
									children: null == i ? g.Z.Messages.ADD : g.Z.Messages.SAVE
								}),
								null != I &&
									(0, s.jsx)(o.Button, {
										look: o.Button.Looks.BLANK,
										size: o.Button.Sizes.ICON,
										className: C.deleteButton,
										onClick: () => {
											I(), T();
										},
										children: (0, s.jsx)(o.TrashIcon, {
											size: 'md',
											color: 'currentColor',
											'aria-label': g.Z.Messages.DELETE
										})
									})
							]
						}),
						(0, s.jsx)(o.Button, {
							look: o.Button.Looks.LINK,
							color: o.Button.Colors.PRIMARY,
							className: C.cancelButton,
							onClick: T,
							children: g.Z.Messages.CANCEL
						})
					]
				})
			]
		})
	});
}
function R(e) {
	let { guildId: t, omitChannelIds: n, initialData: i, onSave: l, onDelete: c, transitionState: d, onClose: _ } = e,
		[I, E] = a.useState(null == i ? void 0 : i.ref_id),
		T = (0, u.Dt)(),
		N = (0, s.jsxs)(s.Fragment, {
			children: [
				(0, s.jsx)(m.Z, {
					messageType: m.Q.WARNING,
					children: g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_CHANNEL_MODAL_WARNING
				}),
				(0, s.jsx)(o.Spacer, { size: 24 }),
				(0, s.jsx)(o.FormSection, {
					title: g.Z.Messages.CHANNEL,
					titleId: T,
					children: (0, s.jsx)(S.Z, {
						guildId: t,
						value: I,
						initialChannelId: null == i ? void 0 : i.ref_id,
						omitChannelIds: n,
						onChange: function (e) {
							E(e);
						},
						'aria-labelledby': T
					})
				})
			]
		});
	return (0, s.jsx)(p, {
		guildId: t,
		initialData: i,
		benefitTypeInput: N,
		descriptionPlaceholder: g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_CHANNEL_DESCRIPTION_PLACEHOLDER,
		canSubmit: null != I,
		onSave: function (e) {
			r()(null != I, 'Cannot submit null channel'),
				l({
					...e,
					channelId: I
				});
		},
		transitionState: d,
		onClose: _,
		onDelete: c
	});
}
function f(e) {
	var t;
	let { initialData: n, onSave: i, transitionState: l, onClose: c, onDelete: d, guildId: _ } = e,
		[I, E] = a.useState(null !== (t = null == n ? void 0 : n.name) && void 0 !== t ? t : ''),
		T = (0, u.Dt)(),
		m = (0, s.jsx)(o.FormSection, {
			title: g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_NAME_TITLE,
			titleId: T,
			children: (0, s.jsx)(o.TextArea, {
				placeholder: g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_NAME_TITLE,
				value: I,
				rows: 1,
				onChange: function (e) {
					E(e);
				},
				'aria-labelledby': T
			})
		});
	return (0, s.jsx)(p, {
		guildId: _,
		initialData: n,
		benefitTypeInput: m,
		descriptionPlaceholder: g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_DESCRIPTION_PLACEHOLDER,
		canSubmit: '' !== I,
		onSave: function (e) {
			r()('' !== I, 'Cannot submit empty name'),
				i({
					...e,
					name: I
				});
		},
		transitionState: l,
		onClose: c,
		onDelete: d
	});
}
