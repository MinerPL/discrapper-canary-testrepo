n(47120), n(773603);
var r = n(735250),
	i = n(470079),
	a = n(481060),
	s = n(600164),
	o = n(155647),
	l = n(299443),
	u = n(185625),
	c = n(273389),
	d = n(596891),
	_ = n(15667),
	E = n(76264),
	f = n(822686),
	h = n(356110),
	p = n(730719),
	I = n(996701),
	m = n(320596),
	T = n(273514),
	g = n(995712),
	S = n(234937),
	A = n(473121),
	N = n(449413),
	v = n(266080),
	O = n(316617),
	R = n(15682),
	C = n(749534),
	y = n(521332),
	D = n(905434),
	L = n(196627),
	b = n(739319),
	M = n(842401),
	P = n(375790),
	U = n(981631),
	w = n(689938),
	x = n(955145);
function G(e, t) {
	let { elements: n } = e;
	return n.find((e) => {
		let { type: n } = e;
		return n === t;
	});
}
function k(e, t) {
	let { elements: n } = e;
	return n.filter((e) => {
		let { type: n } = e;
		return n === t;
	});
}
t.Z = (e) => {
	let { node: t, reportType: n, reportSubType: B, history: F, onSelectChild: V, onModalClose: H, onSubmit: Z, multiSelect: Y, reportId: j, textInput: W } = e,
		K = G(t, 'checkbox'),
		z = G(t, 'text_line_resource'),
		q = k(t, 'external_link'),
		Q = k(t, 'free_text'),
		X = k(t, 'dropdown'),
		[$, J] = i.useState(!1),
		[ee, et] = i.useState(!1),
		[en, er] = i.useState(''),
		[ei, ea] = i.useState(() => ({})),
		[es, eo] = i.useState(() => ({})),
		[el, eu] = i.useState((0, u.VP)(Q, X, K, W, Y)),
		ec = function (e, t) {
			let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
				r = { ...es };
			(r[e] = {
				value: t,
				isValid: n
			}),
				eo(r),
				eu((0, u.VP)(Q, X, K, r, ei));
		},
		ed = i.useMemo(
			() => (e) => {
				V({
					nodeRef: t.id,
					destination: e,
					textInput: null != Q || null != X ? es : void 0,
					multiSelect:
						null != K
							? {
									name: K.name,
									state: ei
								}
							: void 0
				});
			},
			[t, V, K, ei, es, Q, X]
		);
	i.useEffect(() => {
		null != Y && ea(Y), null != W && eo(W);
	}, [Y, W]);
	let e_ = (e) => {
			if (e === U.evJ.INVALID_FORM_BODY) er(w.Z.Messages.IN_APP_REPORTING_SUBMIT_VALIDATION_ERROR);
			else er(w.Z.Messages.MOBILE_REPORTS_SUBMIT_FAILED);
		},
		eE = () =>
			Z({
				nodeRef: t.id,
				destination: ['', e.successNodeId]
			})
				.then(() => {
					er(''), ed(['', e.successNodeId]);
				})
				.catch((e) => {
					var t;
					e_(null === (t = e.body) || void 0 === t ? void 0 : t.code);
				})
				.finally(() => {
					J(!1);
				});
	i.useEffect(() => {
		t.is_auto_submit &&
			!ee &&
			(et(!0),
			Z({
				nodeRef: t.id,
				destination: ['', t.id]
			}));
	}, [t.is_auto_submit, ee, Z, t.id]);
	let ef = (0, o.fW)(B),
		eh = (0, l.A)({
			location: 'web_iar_node_view',
			settingsUpsells: null != ef ? ef : [],
			channelId: 'message' === n.name ? n.record.channel_id : void 0
		});
	return (0, r.jsxs)('div', {
		className: x.container,
		children: [
			(0, r.jsxs)(a.ModalHeader, {
				separator: !1,
				direction: s.Z.Direction.VERTICAL,
				className: x.header,
				children: [(0, r.jsx)(L.Z, { element: G(t, 'success') }), (0, r.jsx)(A.Z, { node: t }), (0, r.jsx)(N.Z, { node: t })]
			}),
			(0, r.jsxs)(a.ModalContent, {
				className: x.body,
				children: [
					null != z ? (0, r.jsx)(b.Z, { element: z }) : null,
					null != G(t, 'breadcrumbs') && (0, r.jsx)(_.Z, { history: F }),
					null != G(t, 'message_preview') && ('message' === n.name || 'first_dm' === n.name) && (0, r.jsx)(O.Z, { message: n.record }),
					null != G(t, 'user_preview') && 'user' === n.name ? (0, r.jsx)(M.Z, { user: n.record }) : null,
					(function (e) {
						let { elements: t } = e;
						return t.some((e) => {
							let { type: t } = e;
							return P.O.includes(t);
						});
					})(t) &&
						(0, r.jsxs)(C.Z, {
							children: [
								(null != G(t, 'block_users') || null != G(t, 'mute_users')) &&
									('message' === n.name || 'first_dm' === n.name || 'user' === n.name) &&
									(0, r.jsx)(d.Z, {
										userId: 'user' === n.name ? n.record.id : n.record.author.id,
										reportId: j,
										showBlock: null != G(t, 'block_users'),
										showMute: null != G(t, 'mute_users')
									}),
								null != G(t, 'delete_message') &&
									'message' === n.name &&
									(0, r.jsx)(f.Z, {
										message: n.record,
										reportId: j
									}),
								null != G(t, 'leave_guild') &&
									'guild' === n.name &&
									(0, r.jsx)(v.Z, {
										guildId: n.record.id,
										reportId: j
									})
							]
						}),
					null != G(t, 'settings_upsells') &&
						'message' === n.name &&
						null != ef &&
						eh &&
						(0, r.jsx)(y.Z, {
							settingsUpsells: ef,
							channelId: n.record.channel_id
						}),
					null != G(t, 'channel_preview') && 'stage_channel' === n.name && (0, r.jsx)(D.Z, { stageInstance: n.record }),
					null != G(t, 'guild_scheduled_event_preview') && 'guild_scheduled_event' === n.name && (0, r.jsx)(S.Z, { event: n.record }),
					null != G(t, 'guild_directory_entry_preview') && 'guild_directory_entry' === n.name && (0, r.jsx)(T.Z, { entry: n.record }),
					null != G(t, 'guild_discovery_preview') && 'guild_discovery' === n.name && (0, r.jsx)(g.Z, { entry: n.record }),
					null != K &&
						(0, r.jsx)(R.Z, {
							element: K,
							onChange: (e, t) => {
								let n = { ...ei };
								e in ei ? delete n[e] : (n[e] = t), ea(n), eu((0, u.VP)(Q, X, K, es, n));
							},
							state: ei
						}),
					('user_urf' === n.name || 'message_urf' === n.name) &&
						null != X &&
						X.length > 0 &&
						(0, r.jsx)(h.Z, {
							elements: X,
							onChange: ec,
							state: es
						}),
					('user_urf' === n.name || 'message_urf' === n.name) &&
						null != Q &&
						Q.length > 0 &&
						(0, r.jsx)(m.Z, {
							elements: Q,
							onChange: ec,
							state: es
						}),
					(0, r.jsx)(E.Z, {
						node: t,
						onSelectChild: ed
					}),
					null != q && q.length > 0 ? (0, r.jsx)(I.Z, { elements: q }) : null,
					(0, r.jsx)(p.Z, {
						errorMessage: en,
						onClose: () => {
							er('');
						}
					})
				]
			}),
			(0, r.jsx)(c.Z, {
				button: t.button,
				submitting: $,
				disableNext: el,
				onClick: (e) => {
					switch (e.type) {
						case 'done':
						case 'cancel':
							H();
							break;
						case 'next':
							ed(['', e.target]);
							break;
						case 'submit':
							J(!0), eE();
					}
				},
				onBackClicked: e.onNavigateBack,
				canNavigateBack: F.length > 0
			}),
			(0, r.jsx)(a.ModalCloseButton, {
				className: x.closeButton,
				onClick: H
			})
		]
	});
};
