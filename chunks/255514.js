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
	m = n(996701),
	I = n(320596),
	T = n(273514),
	g = n(995712),
	S = n(234937),
	A = n(473121),
	N = n(449413),
	v = n(266080),
	O = n(316617),
	R = n(15682),
	C = n(521332),
	y = n(905434),
	D = n(196627),
	L = n(739319),
	b = n(842401),
	M = n(375790),
	P = n(981631),
	U = n(689938),
	w = n(955145);
function x(e, t) {
	let { elements: n } = e;
	return n.find((e) => {
		let { type: n } = e;
		return n === t;
	});
}
function G(e, t) {
	let { elements: n } = e;
	return n.filter((e) => {
		let { type: n } = e;
		return n === t;
	});
}
t.Z = (e) => {
	let { node: t, reportType: n, reportSubType: k, history: B, onSelectChild: F, onModalClose: V, onSubmit: H, multiSelect: Z, reportId: Y, textInput: j } = e,
		W = x(t, 'checkbox'),
		K = x(t, 'text_line_resource'),
		z = G(t, 'external_link'),
		q = G(t, 'free_text'),
		Q = G(t, 'dropdown'),
		[X, $] = i.useState(!1),
		[J, ee] = i.useState(!1),
		[et, en] = i.useState(''),
		[er, ei] = i.useState(() => ({})),
		[ea, es] = i.useState(() => ({})),
		[eo, el] = i.useState((0, u.VP)(q, Q, W, j, Z)),
		eu = function (e, t) {
			let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
				r = { ...ea };
			(r[e] = {
				value: t,
				isValid: n
			}),
				es(r),
				el((0, u.VP)(q, Q, W, r, er));
		},
		ec = i.useMemo(
			() => (e) => {
				F({
					nodeRef: t.id,
					destination: e,
					textInput: null != q || null != Q ? ea : void 0,
					multiSelect:
						null != W
							? {
									name: W.name,
									state: er
								}
							: void 0
				});
			},
			[t, F, W, er, ea, q, Q]
		);
	i.useEffect(() => {
		null != Z && ei(Z), null != j && es(j);
	}, [Z, j]);
	let ed = (e) => {
			if (e === P.evJ.INVALID_FORM_BODY) en(U.Z.Messages.IN_APP_REPORTING_SUBMIT_VALIDATION_ERROR);
			else en(U.Z.Messages.MOBILE_REPORTS_SUBMIT_FAILED);
		},
		e_ = () =>
			H({
				nodeRef: t.id,
				destination: ['', e.successNodeId]
			})
				.then(() => {
					en(''), ec(['', e.successNodeId]);
				})
				.catch((e) => {
					var t;
					ed(null === (t = e.body) || void 0 === t ? void 0 : t.code);
				})
				.finally(() => {
					$(!1);
				});
	i.useEffect(() => {
		t.is_auto_submit &&
			!J &&
			(ee(!0),
			H({
				nodeRef: t.id,
				destination: ['', t.id]
			}));
	}, [t.is_auto_submit, J, H, t.id]);
	let eE = (0, o.fW)(k),
		ef = (0, l.A)({
			location: 'web_iar_node_view',
			settingsUpsells: null != eE ? eE : [],
			channelId: 'message' === n.name ? n.record.channel_id : void 0
		});
	return (0, r.jsxs)('div', {
		className: w.container,
		children: [
			(0, r.jsxs)(a.ModalHeader, {
				separator: !1,
				direction: s.Z.Direction.VERTICAL,
				className: w.header,
				children: [(0, r.jsx)(D.Z, { element: x(t, 'success') }), (0, r.jsx)(A.Z, { node: t }), (0, r.jsx)(N.Z, { node: t })]
			}),
			(0, r.jsxs)(a.ModalContent, {
				className: w.body,
				children: [
					null != K ? (0, r.jsx)(L.Z, { element: K }) : null,
					null != x(t, 'breadcrumbs') && (0, r.jsx)(_.Z, { history: B }),
					null != x(t, 'message_preview') && ('message' === n.name || 'first_dm' === n.name) && (0, r.jsx)(O.Z, { message: n.record }),
					null != x(t, 'user_preview') && 'user' === n.name ? (0, r.jsx)(b.Z, { user: n.record }) : null,
					(function (e) {
						let { elements: t } = e;
						return t.some((e) => {
							let { type: t } = e;
							return M.O.includes(t);
						});
					})(t) &&
						(0, r.jsx)(a.Heading, {
							className: w.remediationElementsHeader,
							variant: 'heading-sm/semibold',
							children: U.Z.Messages.MOBILE_REPORTS_BLOCK_ELEMENT_HEADER
						}),
					(null != x(t, 'block_users') || null != x(t, 'mute_users')) &&
						('message' === n.name || 'first_dm' === n.name || 'user' === n.name) &&
						(0, r.jsx)(d.Z, {
							userId: 'user' === n.name ? n.record.id : n.record.author.id,
							reportId: Y,
							reportName: n.name,
							showBlock: null != x(t, 'block_users'),
							showMute: null != x(t, 'mute_users')
						}),
					null != x(t, 'delete_message') &&
						'message' === n.name &&
						(0, r.jsx)(f.Z, {
							message: n.record,
							reportId: Y
						}),
					null != x(t, 'leave_guild') &&
						'guild' === n.name &&
						(0, r.jsx)(v.Z, {
							guildId: n.record.id,
							reportId: Y
						}),
					null != x(t, 'settings_upsells') &&
						'message' === n.name &&
						null != eE &&
						ef &&
						(0, r.jsx)(C.Z, {
							settingsUpsells: eE,
							channelId: n.record.channel_id
						}),
					null != x(t, 'channel_preview') && 'stage_channel' === n.name && (0, r.jsx)(y.Z, { stageInstance: n.record }),
					null != x(t, 'guild_scheduled_event_preview') && 'guild_scheduled_event' === n.name && (0, r.jsx)(S.Z, { event: n.record }),
					null != x(t, 'guild_directory_entry_preview') && 'guild_directory_entry' === n.name && (0, r.jsx)(T.Z, { entry: n.record }),
					null != x(t, 'guild_discovery_preview') && 'guild_discovery' === n.name && (0, r.jsx)(g.Z, { entry: n.record }),
					null != W &&
						(0, r.jsx)(R.Z, {
							element: W,
							onChange: (e, t) => {
								let n = { ...er };
								e in er ? delete n[e] : (n[e] = t), ei(n), el((0, u.VP)(q, Q, W, ea, n));
							},
							state: er
						}),
					('user_urf' === n.name || 'message_urf' === n.name) &&
						null != Q &&
						Q.length > 0 &&
						(0, r.jsx)(h.Z, {
							elements: Q,
							onChange: eu,
							state: ea
						}),
					('user_urf' === n.name || 'message_urf' === n.name) &&
						null != q &&
						q.length > 0 &&
						(0, r.jsx)(I.Z, {
							elements: q,
							onChange: eu,
							state: ea
						}),
					(0, r.jsx)(E.Z, {
						node: t,
						onSelectChild: ec
					}),
					null != z && z.length > 0 ? (0, r.jsx)(m.Z, { elements: z }) : null,
					(0, r.jsx)(p.Z, {
						errorMessage: et,
						onClose: () => {
							en('');
						}
					})
				]
			}),
			(0, r.jsx)(c.Z, {
				button: t.button,
				submitting: X,
				disableNext: eo,
				onClick: (e) => {
					switch (e.type) {
						case 'done':
						case 'cancel':
							V();
							break;
						case 'next':
							ec(['', e.target]);
							break;
						case 'submit':
							$(!0), e_();
					}
				},
				onBackClicked: e.onNavigateBack,
				canNavigateBack: B.length > 0
			}),
			(0, r.jsx)(a.ModalCloseButton, {
				className: w.closeButton,
				onClick: V
			})
		]
	});
};
