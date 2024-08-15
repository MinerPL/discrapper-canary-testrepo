l.d(n, {
	Z: function () {
		return S;
	}
}),
	l(47120);
var s = l(735250),
	a = l(470079),
	t = l(913527),
	i = l.n(t),
	r = l(481060),
	o = l(516129),
	d = l(813197),
	c = l(930180),
	u = l(582019),
	E = l(924301),
	_ = l(236373),
	I = l(854698),
	x = l(405613),
	m = l(440371),
	N = l(765305),
	T = l(486324),
	h = l(689938),
	g = l(339727);
function v(e) {
	let { editBroadcastInfoData: n } = e,
		{
			broadcastInfo: l,
			broadcastToDirectoryChannels: a,
			setBroadcastToDirectoryChannels: t,
			canEveryoneRoleViewEvent: i
		} = n;
	return l.can_broadcast
		? (0, s.jsxs)(r.FormItem, {
				title: h.Z.Messages.CREATE_EVENT_PRIVACY_LABEL,
				className: g.formItem,
				children: [
					(0, s.jsx)(r.Tooltip, {
						text: (0, s.jsx)(r.Text, {
							className: g.broadcastInfoTooltip,
							variant: 'text-sm/normal',
							children: h.Z.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING
						}),
						'aria-label': h.Z.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING,
						shouldShow: !i,
						children: (e) =>
							(0, s.jsx)('div', {
								...e,
								children: (0, s.jsx)(r.Checkbox, {
									type: r.Checkbox.Types.INVERTED,
									disabled: !i,
									value: a,
									onChange: (e, n) => t(n),
									children: (0, s.jsx)(r.Text, {
										variant: 'text-md/normal',
										color: 'interactive-active',
										children: h.Z.Messages.HUB_EVENTS_SHARE_TITLE
									})
								})
							})
					}),
					(0, s.jsx)(r.Text, {
						className: g.broadcastInfoDescription,
						variant: 'text-xs/normal',
						color: 'header-secondary',
						children: h.Z.Messages.HUB_EVENTS_SHARE_DESCRIPTION
					})
				]
			})
		: null;
}
function S(e) {
	let {
			guildEvent: n,
			guildEventId: t,
			guildId: S,
			editBroadcastInfoData: C,
			error: L,
			validationErrorMessage: A,
			onChange: Z,
			canSetFocus: f = !1
		} = e,
		{
			entityType: j,
			channelId: M,
			description: D,
			name: R,
			image: p,
			scheduledEndTime: V,
			scheduledStartTime: G,
			recurrenceRule: O
		} = n,
		U = (0, c._d)(M),
		y = null != n && (0, E.xt)(n),
		b = a.useMemo(() => {
			let e = (0, I.v1)(n);
			return null != e ? e : { startDate: i()(G) };
		}, [n, G]),
		[B, P] = a.useState(() => (0, I.zi)(i()(G), O)),
		k = a.useRef(null);
	a.useEffect(() => {
		if (f) {
			var e;
			null === (e = k.current) || void 0 === e || e.focus();
		}
	}, [f]);
	let z = (e) => {
			Z({ image: e });
		},
		H = (e, n) => {
			if (null == e || void 0 === n) {
				z(null);
				return;
			}
			(0, r.openModalLazy)(async () => {
				let { default: a } = await Promise.all([l.e('48017'), l.e('29625')]).then(l.bind(l, 850085));
				return (l) =>
					(0, s.jsx)(a, {
						imgURI: e,
						file: n,
						onCrop: z,
						uploadType: T.pC.SCHEDULED_EVENT_IMAGE,
						allowSkip: !0,
						...l
					});
			});
		};
	return (0, s.jsxs)(s.Fragment, {
		children: [
			(0, s.jsx)('div', {
				className: g.blockedUsersContainer,
				children: null != M && !y && U > 0 && (0, s.jsx)(u.mv, { channelId: M })
			}),
			(0, s.jsxs)('div', {
				className: g.form,
				children: [
					(0, s.jsxs)(r.FormItem, {
						title: h.Z.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL,
						className: g.topicFormItem,
						required: !0,
						children: [
							(0, s.jsx)(r.TextInput, {
								className: g.textInput,
								onChange: (e) => {
									Z({ name: e });
								},
								placeholder: h.Z.Messages.GUILD_EVENT_CREATE_TOPIC_PLACEHOLDER,
								maxLength: N.p,
								value: R,
								autoComplete: 'off',
								inputRef: k
							}),
							null != L
								? (0, s.jsx)(r.Text, {
										color: 'text-danger',
										variant: 'text-xs/normal',
										className: g.warning,
										children: L.getAnyErrorMessage()
									})
								: null
						]
					}),
					(0, s.jsx)(m.Z, {
						className: g.formItem,
						onScheduleChange: (e) => {
							let { startDate: n, endDate: l } = e,
								s = {
									scheduledStartTime: null == n ? void 0 : n.toISOString(),
									scheduledEndTime: null == l ? void 0 : l.toISOString()
								};
							null != n &&
								null != V &&
								(null == l ? void 0 : l.isBefore(n)) &&
								(s.scheduledEndTime = n.add(1, 'hour').toISOString()),
								null != n && null != B && (s.recurrenceRule = (0, I.mF)(B, n)),
								Z(s);
						},
						onRecurrenceChange: (e) => {
							let n = b.startDate;
							if (null != n) Z({ recurrenceRule: (0, I.mF)(e, n) }), P(e);
						},
						schedule: b,
						recurrenceRule: O,
						showEndDate: j === N.WX.EXTERNAL,
						requireEndDate: j === N.WX.EXTERNAL,
						disableStartDateTime: y,
						guildId: S
					}),
					null != A
						? (0, s.jsx)(r.Text, {
								color: 'text-danger',
								variant: 'text-xs/normal',
								className: g.warning,
								children: A
							})
						: null,
					(0, s.jsx)(r.FormItem, {
						title: h.Z.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
						className: g.formItem,
						children: (0, s.jsx)(r.TextArea, {
							className: g.__invalid_descriptionInput,
							placeholder: h.Z.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
							value: D,
							onChange: (e) => {
								Z({ description: e });
							},
							maxLength: N.wm,
							autosize: !0
						})
					}),
					(0, s.jsxs)(r.FormItem, {
						title: h.Z.Messages.GUILD_EVENT_IMAGE,
						className: g.formItem,
						children: [
							(0, s.jsx)(r.Text, {
								variant: 'text-xs/normal',
								color: 'header-secondary',
								className: g.addImageHint,
								children: h.Z.Messages.GUILD_EVENT_ADD_IMAGE_SUGGESTION
							}),
							null != p
								? (0, s.jsxs)(s.Fragment, {
										children: [
											(0, s.jsx)(o.Z, {
												className: g.imagePreview,
												iconWrapperClassName: g.imagePreviewInner,
												image: p,
												makeURL: (e) => {
													if (null == e) return null;
													if (null != S) {
														var l;
														return null !== (l = (0, x.Z)((0, _.Gb)(n, S, t))) && void 0 !== l ? l : null;
													}
												},
												onChange: H,
												hint: h.Z.Messages.GUILD_EVENT_CHANGE_IMAGE,
												showRemoveButton: !1,
												enabled: !0
											}),
											(0, s.jsx)(r.Button, {
												size: r.Button.Sizes.SMALL,
												onClick: () => z(null),
												children: h.Z.Messages.GUILD_EVENT_REMOVE_IMAGE
											})
										]
									})
								: (0, s.jsxs)(r.Button, {
										size: r.Button.Sizes.SMALL,
										children: [h.Z.Messages.GUILD_EVENT_ADD_IMAGE, (0, s.jsx)(d.ZP, { onChange: H })]
									})
						]
					}),
					(0, s.jsx)(v, { editBroadcastInfoData: C })
				]
			})
		]
	});
}
