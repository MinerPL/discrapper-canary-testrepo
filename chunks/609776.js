t.d(n, {
	Z: function () {
		return Z;
	}
}),
	t(47120);
var a = t(735250),
	l = t(470079),
	s = t(913527),
	i = t.n(s),
	o = t(442837),
	r = t(481060),
	c = t(933557),
	d = t(77810),
	u = t(854698),
	_ = t(40623),
	m = t(440371),
	h = t(810788),
	E = t(699516),
	x = t(594174),
	I = t(626135),
	T = t(570188),
	N = t(427679),
	g = t(930180),
	C = t(582019),
	f = t(157925),
	v = t(981631),
	S = t(765305),
	j = t(190378),
	A = t(689938),
	p = t(151581);
function L(e) {
	let { stageChannelsInGuild: n, channel: t, onSelectChannel: l } = e;
	return null == l
		? null
		: (0, a.jsx)(a.Fragment, {
				children: (0, a.jsx)(r.FormItem, {
					title: A.Z.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL + ' asdf',
					className: p.channelSelectionFormItem,
					required: !0,
					children: (0, a.jsx)(r.SearchableSelect, {
						value: t.id,
						options: n.map((e) => ({
							value: e.id,
							label: (0, c.F6)(e, x.default, E.Z, !0)
						})),
						onChange: (e) => {
							let t = n.find((n) => n.id === e);
							null != t && l(t);
						},
						renderOptionPrefix: () =>
							(0, a.jsx)(r.StageIcon, {
								size: 'custom',
								color: 'currentColor',
								height: 24
							})
					})
				})
			});
}
function Z(e) {
	var n, t, s, E, x, Z, R, M;
	let {
			channel: B,
			guild: D,
			header: b,
			error: k,
			loading: G,
			onSave: P,
			onEventSave: O,
			onClose: U,
			onSelectChannel: F,
			isEvent: V = !1,
			defaultOptions: y,
			isSlideReady: w = !0
		} = e,
		z = l.useMemo(() => N.Z.getStageInstanceByChannel(B.id), [B.id]),
		[H, W] = l.useState(
			null !== (t = null !== (n = null == y ? void 0 : y.topic) && void 0 !== n ? n : null == z ? void 0 : z.topic) &&
				void 0 !== t
				? t
				: ''
		),
		[q, K] = l.useState(null !== (s = null == y ? void 0 : y.description) && void 0 !== s ? s : ''),
		[Y] = l.useState(V),
		[J, X] = l.useState(
			null !== (E = null == y ? void 0 : y.schedule) && void 0 !== E ? E : { startDate: (0, u.ib)() }
		),
		[Q, $] = l.useState(Y && (null == y ? void 0 : y.schedule) != null),
		ee = (0, T.J)(B),
		en = (0, T.U)(B),
		et = null == z && ee && !Y,
		[ea, el] = l.useState(et && en),
		es = (0, o.e7)([h.Z], () => h.Z.hasHotspot(j.v.LIVE_STAGE_NOTIFICATION_BADGE)),
		ei = S.j8.GUILD_ONLY,
		[eo] = l.useState(
			null !==
				(Z =
					null !== (x = null == y ? void 0 : y.privacyLevel) && void 0 !== x
						? x
						: null == z
							? void 0
							: z.privacy_level) && void 0 !== Z
				? Z
				: ei
		),
		[er, ec] = l.useState(null == y ? void 0 : y.recurrenceRule),
		ed = (0, g._d)(B.id),
		[eu, e_] = l.useState(!1),
		em = (0, c.ZP)(B),
		eh = (0, d.q)(D),
		eE = null != F,
		ex = eh.length > 1;
	l.useEffect(() => {
		I.default.track(v.rMx.START_STAGE_OPENED, {
			stage_instance_id: null == z ? void 0 : z.id,
			can_start_public_stage: !1,
			guild_id: B.guild_id
		});
	}, []);
	let eI = (e) => {
		if ((e.preventDefault(), eo === S.j8.PUBLIC && H.length < 20 && !eu)) {
			e_(!0);
			return;
		}
		let n = {
			topic: H,
			privacyLevel: eo,
			sendStartNotification: ea
		};
		if (Y) {
			if (!Q) return;
			null == O ||
				O({
					...n,
					schedule: J,
					description: q,
					entityType: S.WX.STAGE_INSTANCE
				});
			return;
		}
		null == P || P(n);
	};
	let { color: eT, text: eN } =
			((R = z),
			(M = eo),
			Y
				? {
						color: r.Button.Colors.BRAND,
						text: A.Z.Messages.SCHEDULE_EVENT
					}
				: M === S.j8.PUBLIC && (null == R ? void 0 : R.privacy_level) !== S.j8.PUBLIC
					? {
							color: r.Button.Colors.BRAND,
							text: A.Z.Messages.CONTINUE
						}
					: null == R
						? {
								color: r.Button.Colors.GREEN,
								text: A.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
							}
						: {
								color: r.Button.Colors.BRAND,
								text: A.Z.Messages.SAVE_CHANGES
							}),
		eg = l.useRef(null);
	l.useEffect(() => {
		var e;
		w && (null === (e = eg.current) || void 0 === e || e.focus());
	}, [w]);
	let eC = Q && null != J.startDate && J.startDate >= i()();
	return (0, a.jsxs)(a.Fragment, {
		children: [
			(0, a.jsxs)(r.ModalContent, {
				className: p.modalContent,
				children: [
					b,
					(0, a.jsx)('div', {
						className: p.blockedUsersContainer,
						children: null == z && ed > 0 && (0, a.jsx)(C.mv, { channelId: B.id })
					}),
					(0, a.jsxs)('form', {
						onSubmit: eI,
						className: p.form,
						children: [
							(0, a.jsxs)(r.FormItem, {
								title: V
									? A.Z.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL
									: A.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_LABEL,
								className: p.topicFormItem,
								required: !0,
								children: [
									(0, a.jsx)(r.TextInput, {
										className: p.textInput,
										onChange: (e) => W(e),
										placeholder: A.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_PLACEHOLDER,
										maxLength: f.xA,
										value: H,
										autoComplete: 'off',
										inputRef: eg
									}),
									eu &&
										(0, a.jsx)(r.Text, {
											variant: 'text-xs/normal',
											color: 'text-warning',
											className: p.warning,
											children: A.Z.Messages.START_STAGE_PUBLIC_SHORT_TOPIC_WARNING
										}),
									null != k
										? (0, a.jsx)(r.Text, {
												color: 'text-danger',
												variant: 'text-xs/normal',
												className: p.warning,
												children: k.getAnyErrorMessage()
											})
										: null
								]
							}),
							eE && ex
								? (0, a.jsx)(L, {
										stageChannelsInGuild: eh,
										channel: B,
										onSelectChannel: F
									})
								: null,
							Y &&
								(0, a.jsxs)(a.Fragment, {
									children: [
										(0, a.jsx)(m.Z, {
											className: p.formItem,
											onScheduleChange: X,
											onRecurrenceChange: (e) => {
												let n = J.startDate;
												if (null != n) ec((0, u.mF)(e, n));
											},
											schedule: J,
											recurrenceRule: er,
											timeSelected: Q,
											onTimeChange: $
										}),
										null != J.startDate && J.startDate < i()()
											? (0, a.jsx)(r.Text, {
													color: 'text-danger',
													variant: 'text-xs/normal',
													className: p.warning,
													children: A.Z.Messages.GUILD_EVENT_PAST_START_DATE
												})
											: null
									]
								}),
							V &&
								(0, a.jsx)(r.FormItem, {
									title: A.Z.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
									className: p.formItem,
									children: (0, a.jsx)(r.TextArea, {
										placeholder: A.Z.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
										value: q,
										onChange: (e) => K(e),
										maxLength: S.wm
									})
								}),
							et
								? (0, a.jsx)(_.Z, {
										sendStartNotification: ea,
										setSendStartNotification: el,
										showNotificationNewBadge: es
									})
								: null,
							eE && !ex
								? (0, a.jsx)(r.Text, {
										color: 'header-secondary',
										variant: 'text-xs/normal',
										className: p.channelSelection,
										children: A.Z.Messages.START_STAGE_MODAL_SET_TOPIC_HELP_TEXT.format({
											stageName: em,
											stageHook: (e, n) =>
												(0, a.jsx)(
													'span',
													{
														className: p.channelName,
														children: B.name
													},
													n
												)
										})
									})
								: null
						]
					})
				]
			}),
			(0, a.jsxs)(r.ModalFooter, {
				children: [
					(0, a.jsx)(r.Button, {
						color: eT,
						onClick: eI,
						disabled: '' === H || null == eo || (V && !eC),
						submitting: G,
						children: eN
					}),
					(0, a.jsx)(r.Button, {
						color: r.Button.Colors.PRIMARY,
						className: p.cancelButton,
						onClick: U,
						children: A.Z.Messages.CANCEL
					})
				]
			})
		]
	});
}
