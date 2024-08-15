a.r(t),
	a.d(t, {
		default: function () {
			return p;
		}
	}),
	a(47120);
var n = a(735250),
	s = a(470079),
	i = a(512722),
	r = a.n(i),
	o = a(990547),
	l = a(399606),
	u = a(481060),
	d = a(232567),
	c = a(809206),
	E = a(479531),
	_ = a(484459),
	m = a(594174),
	g = a(626135),
	f = a(51144),
	S = a(986197),
	I = a(135200),
	T = a(346585),
	N = a(347649),
	h = a(361117),
	O = a(108793),
	M = a(635774),
	v = a(387955),
	P = a(801461),
	L = a(448624),
	C = a(981631),
	x = a(689938),
	A = a(962830);
function p(e) {
	let t,
		{ source: a, transitionState: i, onClose: p, oneClickFlow: y = !1 } = e,
		[Z, U] = s.useState(y ? L.A.SUGGESTIONS : L.A.INFO),
		[b, G] = s.useState(!1),
		[k, W] = s.useState(null),
		[D, j] = s.useState(y ? P.Wq.SUGGESTION : P.Wq.NONE),
		[B, F] = s.useState(!1),
		[w, H] = s.useState(!1),
		q = s.useRef(null),
		z = (0, l.e7)([I.Z], () => I.Z.isCurrentUsernameInvalid()),
		V = (0, l.e7)([m.default], () => {
			let e = m.default.getCurrentUser();
			return r()(null != e, 'PomeloModal: user cannot be undefined'), e;
		}),
		X = (0, N.CC)(),
		{ usernameSuggestion: Y, usernameSuggestionLoading: K } = (0, h.G)(y ? P.en : void 0);
	s.useEffect(() => {
		D === P.Wq.EDIT_USERNAME && H(!0),
			g.default.track(C.rMx.POMELO_EDIT_STEP_VIEWED, {
				source: a,
				step: D
			});
	}, [D, a]),
		s.useEffect(() => {
			!w &&
				!B &&
				null != Y &&
				Y.length > 0 &&
				$((e) => ({
					...e,
					username: Y
				}));
		}, [Y, w, B]);
	let [Q, $] = s.useState({
			username: (0, T.e$)(V),
			globalName: f.ZP.getName(V)
		}),
		J = (e) => {
			W(null),
				null != e.username && F(!0),
				$((t) => ({
					...t,
					...e
				}));
		},
		ee = s.useMemo(
			() => [
				{
					slideId: L.A.INFO,
					next: L.A.EDIT_SCREEN,
					footerButtons: ['REMIND_ME_LATER', 'GET_STARTED']
				},
				{
					slideId: L.A.EDIT_SCREEN,
					next: L.A.FINISH_LATER,
					back: L.A.INFO,
					footerButtons: [
						D === P.Wq.PREVIEW ? 'GOT_IT' : 'BACK',
						D === P.Wq.PREVIEW ? 'GOT_IT' : D === P.Wq.EDIT_USERNAME ? 'SUBMIT' : 'NEXT'
					]
				},
				{
					slideId: L.A.FINISH_LATER,
					back: L.A.EDIT_SCREEN
				},
				{
					slideId: L.A.SUGGESTIONS,
					footerButtons: [D === P.Wq.PREVIEW ? 'GOT_IT' : 'UPDATE']
				},
				{ slideId: L.A.FINISH_LATER }
			],
			[D]
		),
		et = ee.length,
		ea = s.useCallback(async () => {
			if (Q.globalName.length <= 0) {
				let e = x.Z.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
					minNum: 1,
					maxNum: 32
				});
				W(e),
					g.default.track(C.rMx.POMELO_ERRORS, {
						reason: e,
						display_name_error: !0,
						location: 'modal'
					});
				return;
			}
			if (f.ZP.getGlobalName(V) === Q.globalName) {
				j(P.Wq.EDIT_USERNAME);
				return;
			}
			try {
				W(null), G(!0), await (0, c.S2)({ global_name: Q.globalName }), j(P.Wq.EDIT_USERNAME);
			} catch (t) {
				let e = new E.Z(t).getAnyErrorMessage();
				g.default.track(C.rMx.POMELO_ERRORS, {
					reason: e,
					display_name_error: !0,
					location: 'modal'
				}),
					W(e);
			} finally {
				G(!1);
			}
		}, [V, Q]),
		en = s.useCallback(async () => {
			try {
				W(null),
					G(!0),
					await S.Z.createPomelo({ username: (0, T.R_)(Q.username) }, y),
					await (0, d.In)(V.id),
					j(P.Wq.PREVIEW);
			} catch (a) {
				let e = new E.Z(a),
					t =
						(null == e ? void 0 : e.status) != null && e.status >= 400 && e.status < 500
							? e.getAnyErrorMessage()
							: x.Z.Messages.ERROR_GENERIC_TITLE;
				W(t),
					g.default.track(C.rMx.POMELO_ERRORS, {
						reason: t,
						username_error: !0,
						location: 'modal',
						one_click_flow: y
					});
			} finally {
				G(!1);
			}
		}, [Q, V.id, y]),
		es = z || (0, T.NX)(V),
		ei = s.useCallback(() => {
			j(es ? P.Wq.EDIT_USERNAME : P.Wq.EDIT_DISPLAY_NAME), U(ee[Math.min(et - 1, Z + 1)].slideId);
		}, [Z, ee, et, es]),
		er = s.useCallback(() => {
			W(null),
				Z === L.A.EDIT_SCREEN
					? D === P.Wq.EDIT_USERNAME
						? es
							? (j(P.Wq.NONE), U(ee[Math.max(0, Z - 1)].slideId))
							: j(P.Wq.EDIT_DISPLAY_NAME)
						: D === P.Wq.EDIT_DISPLAY_NAME
							? (j(P.Wq.NONE), U(ee[Math.max(0, Z - 1)].slideId))
							: D === P.Wq.PREVIEW && j(P.Wq.EDIT_USERNAME)
					: U(ee[Math.max(0, Z - 1)].slideId);
		}, [ee, Z, D, es]),
		eo = s.useCallback(() => {
			U(L.A.FINISH_LATER);
		}, []),
		el = s.useCallback(() => {
			y ? (U(L.A.SUGGESTIONS), j(P.Wq.SUGGESTION)) : (U(L.A.INFO), j(P.Wq.NONE));
		}, [y]),
		eu = s.useMemo(() => {
			if (Z === L.A.EDIT_SCREEN && D === P.Wq.EDIT_DISPLAY_NAME) return ea;
			if (Z === L.A.EDIT_SCREEN && D === P.Wq.EDIT_USERNAME) return en;
			if (Z === L.A.SUGGESTIONS && D === P.Wq.SUGGESTION) return en;
			else return ei;
		}, [Z, D, ea, en, ei]),
		ed = s.useMemo(() => {
			var e, t;
			return R(
				null !== (t = null === (e = ee.find((e) => e.slideId === Z)) || void 0 === e ? void 0 : e.footerButtons) &&
					void 0 !== t
					? t
					: [],
				{
					handleNext: eu,
					handleBack: er,
					handleRemindMeLater: eo,
					onClose: p
				},
				b,
				K,
				B
			);
		}, [er, eo, eu, p, ee, Z, b, K, B]),
		ec = s.useMemo(() => (0, T.zV)(V), [V]);
	s.useLayoutEffect(() => {
		(0, _.Z)(V.id, ec);
	}, [V, ec]),
		s.useEffect(() => {
			var e, t;
			switch (D) {
				case P.Wq.EDIT_DISPLAY_NAME:
					null === (e = q.current) || void 0 === e || e.focusDisplayName();
					break;
				case P.Wq.EDIT_USERNAME:
				case P.Wq.SUGGESTION:
					null === (t = q.current) || void 0 === t || t.focusUsername();
			}
		}, [D]);
	return (
		!B &&
			null == k &&
			(D === P.Wq.EDIT_USERNAME
				? (t = x.Z.Messages.POMELO_SUGGESTION_ORIGIN_NOTICE.format({ source: V.username }))
				: D === P.Wq.SUGGESTION && (K || null != Y) && (t = x.Z.Messages.POMELO_SUGGESTIONS_OCF)),
		(0, n.jsxs)(u.ModalRoot, {
			className: A.modalRoot,
			impression: {
				impressionName: o.ImpressionNames.POMELO_LANDING,
				impressionProperties: {
					source: a,
					impression_group: o.ImpressionGroups.POMELO_FLOW,
					one_click_flow: y
				}
			},
			transitionState: i,
			size: u.ModalSize.DYNAMIC,
			children: [
				(0, n.jsx)(u.Button, {
					onClick: () => {
						X && (Z === L.A.SUGGESTIONS || Z === L.A.EDIT_SCREEN) ? U(L.A.FINISH_LATER) : p();
					},
					size: u.Button.Sizes.MIN,
					look: u.Button.Looks.BLANK,
					className: A.closeContainer,
					'aria-label': x.Z.Messages.CLOSE,
					children: (0, n.jsx)(u.XSmallIcon, {
						size: 'custom',
						color: 'currentColor',
						width: 15,
						height: 15,
						className: A.close
					})
				}),
				(0, n.jsx)(u.ModalContent, {
					className: A.contentContainer,
					children: (0, n.jsxs)(u.Slides, {
						activeSlide: Z,
						width: 480,
						children: [
							(0, n.jsx)(u.Slide, {
								id: L.A.INFO,
								children: (0, n.jsx)(v.Z, { user: V })
							}),
							(0, n.jsx)(u.Slide, {
								id: L.A.EDIT_SCREEN,
								children: (0, n.jsx)(O.Z, {
									user: V,
									error: k,
									editState: D,
									userRef: q,
									formValues: Q,
									footerNotice: t,
									onChangeFormValue: J,
									onFocusUsername: () => j(P.Wq.EDIT_USERNAME),
									onFocusDisplayName: () => j(P.Wq.EDIT_DISPLAY_NAME),
									onClose: p
								})
							}),
							(0, n.jsx)(u.Slide, {
								id: L.A.FINISH_LATER,
								children: (0, n.jsx)(M.Z, {
									onClose: p,
									handleStartFlow: el
								})
							}),
							(0, n.jsx)(u.Slide, {
								id: L.A.SUGGESTIONS,
								children: (0, n.jsx)(O.Z, {
									user: V,
									error: k,
									editState: D,
									userRef: q,
									formValues: Q,
									footerNotice: t,
									onChangeFormValue: J,
									onFocusUsername: () => j(P.Wq.SUGGESTION),
									onFocusDisplayName: () => j(P.Wq.EDIT_DISPLAY_NAME),
									onClose: p,
									usernameSuggestionLoading: K,
									oneClickFlow: y
								})
							})
						]
					})
				}),
				ed
			]
		})
	);
}
let R = (e, t, a, s, i) =>
	0 === e.length
		? null
		: (0, n.jsxs)(u.ModalFooter, {
				className: A.footer,
				children: [
					(0, n.jsxs)('div', {
						className: A.inline,
						children: [
							e.includes('REMIND_ME_LATER') &&
								(0, n.jsx)(u.Button, {
									className: A.unfilledButton,
									type: 'button',
									size: u.Button.Sizes.SMALL,
									look: u.Button.Looks.BLANK,
									color: u.Button.Colors.CUSTOM,
									onClick: t.handleRemindMeLater,
									children: x.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_SKIP_CTA
								}),
							e.includes('NEXT') &&
								(0, n.jsx)(u.Button, {
									type: 'button',
									size: u.Button.Sizes.SMALL,
									submitting: a,
									onClick: t.handleNext,
									children: x.Z.Messages.NEXT
								}),
							e.includes('SUBMIT') &&
								(0, n.jsx)(u.Button, {
									type: 'button',
									size: u.Button.Sizes.SMALL,
									submitting: a,
									onClick: t.handleNext,
									children: x.Z.Messages.SUBMIT
								}),
							e.includes('GET_STARTED') &&
								(0, n.jsx)(u.Button, {
									type: 'button',
									size: u.Button.Sizes.SMALL,
									onClick: t.handleNext,
									children: x.Z.Messages.GET_STARTED
								}),
							e.includes('GOT_IT') &&
								(0, n.jsx)(u.Button, {
									type: 'button',
									size: u.Button.Sizes.SMALL,
									onClick: t.onClose,
									children: x.Z.Messages.GOT_IT
								}),
							e.includes('UPDATE') &&
								(0, n.jsx)(u.Button, {
									type: 'button',
									size: u.Button.Sizes.SMALL,
									disabled: s && !i,
									submitting: a,
									onClick: t.handleNext,
									children: x.Z.Messages.UPDATE
								})
						]
					}),
					e.includes('BACK') &&
						(0, n.jsx)(u.Button, {
							className: A.unfilledButton,
							type: 'button',
							size: u.Button.Sizes.SMALL,
							look: u.Button.Looks.BLANK,
							color: u.Button.Colors.CUSTOM,
							onClick: t.handleBack,
							children: x.Z.Messages.BACK
						})
				]
			});
