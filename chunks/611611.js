n.r(a),
	n.d(a, {
		default: function () {
			return P;
		}
	}),
	n(47120);
var t = n(735250),
	r = n(470079),
	l = n(120356),
	s = n.n(l),
	o = n(525769),
	i = n(263568),
	c = n(481060),
	u = n(213609),
	d = n(313201),
	_ = n(542383),
	m = n(79390),
	E = n(728076),
	A = n(2466),
	f = n(485168),
	C = n(309081),
	L = n(185306),
	h = n(240521),
	R = n(489887),
	I = n(20281),
	x = n(689938),
	p = n(724506);
let O = (0, d.hQ)(),
	g = (0, d.hQ)();
function T(e) {
	let { question: a, onChange: n, error: l, inputRef: o } = e,
		[i, u] = r.useState(!1);
	return (0, t.jsxs)(t.Fragment, {
		children: [
			(0, t.jsx)(c.FormTitle, {
				tag: c.FormTitleTags.LABEL,
				htmlFor: g,
				children: x.Z.Messages.CREATE_POLL_QUESTION_INPUT_LABEL
			}),
			(0, t.jsx)(c.TextArea, {
				inputRef: o,
				id: g,
				placeholder: x.Z.Messages.CREATE_POLL_QUESTION_PLACEHOLDER,
				value: a,
				className: s()(p.questionInput, { [p.hasError]: null != l }),
				onChange: n,
				maxLength: R.Az,
				error: l,
				onFocus: () => u(!0),
				onBlur: () => u(!1),
				showCharacterCount: i,
				showCharacterCountFullPadding: !0,
				showRemainingCharacterCount: i,
				rows: 1,
				autosize: !0,
				autoFocus: !0
			})
		]
	});
}
function N(e) {
	let { selectedDuration: a, onSelect: n } = e,
		r = (0, A.Z)(),
		l = r[a];
	return (0, t.jsxs)('div', {
		className: p.duration,
		children: [
			(0, t.jsx)(c.Text, {
				variant: 'text-md/medium',
				color: 'header-secondary',
				tag: 'label',
				'aria-hidden': !0,
				children: x.Z.Messages.CREATE_POLL_DURATION_LABEL
			}),
			(0, t.jsx)(c.Select, {
				'aria-label': x.Z.Messages.CREATE_POLL_DURATION_SELECTION_ARIA_LABEL.format({ duration: l }),
				className: p.durationSelect,
				options: Object.entries(r).map((e) => {
					let [a, n] = e;
					return {
						label: n,
						value: parseInt(a)
					};
				}),
				isSelected: (e) => e === a,
				select: n,
				serialize: (e) => ''.concat(e),
				renderOptionLabel: (e) =>
					(0, t.jsx)(c.Text, {
						variant: 'text-sm/normal',
						children: e.label
					}),
				popoutPosition: 'top'
			})
		]
	});
}
function P(e) {
	let { channel: a, transitionState: n, onClose: l } = e,
		d = (0, m._N)();
	(0, u.Z)({
		type: I.n.MODAL,
		name: o.z.POLL_EDITOR_VIEWED
	});
	let A = r.useRef(null),
		g = r.useRef([]),
		v = r.useRef([]),
		j = r.useRef(null),
		D = r.useRef([]),
		M = r.useCallback((e) => {
			var a, n, t, r;
			let { indexToRemove: l, numberOfAnswers: s } = e;
			s === R.gY + 1
				? null === (n = j.current) || void 0 === n || null === (a = n.ref) || void 0 === a || a.focus()
				: null === (r = D.current[l === s - 1 ? l - 1 : l + 1]) ||
					void 0 === r ||
					null === (t = r.ref) ||
					void 0 === t ||
					t.focus();
		}, []),
		{
			answers: w,
			question: S,
			selectedLayoutType: b,
			setSelectedLayoutType: k,
			allowMultiSelect: Z,
			setAllowMultiSelect: y,
			duration: B,
			setDuration: U,
			handleQuestionChange: W,
			handleAnswerTextChange: H,
			handleEmojiSelect: Y,
			canAddMoreAnswers: F,
			handleRemoveAnswerImage: G,
			canRemoveMoreAnswers: z,
			handleAddAnswer: K,
			handleRemoveAnswer: V,
			createPollError: J,
			handleSubmitPoll: q,
			fieldErrors: Q,
			submitting: X,
			shouldFocusOnInvalidField: $,
			setShouldFocusOnInvalidField: ee
		} = (0, E.Z)(a, l, M),
		{ trackPollCreationCancelled: ea } = (0, f.l)(w, Z, b),
		en = r.useRef(w.length),
		et = b === i.C.DEFAULT,
		er = r.useCallback(() => {
			ea(), l();
		}, [l, ea]),
		el = r.useCallback(() => {
			if ((0, m.D$)(S, w, b)) er();
			else {
				(0, h.Z)({
					title: x.Z.Messages.CREATE_POLL_MODAL_WARNING_MODAL_TITLE,
					body: x.Z.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BODY,
					cta: x.Z.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
					closeLabel: x.Z.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
					onConfirm: () => {
						er();
					}
				});
				return;
			}
		}, [er, w, S, b]);
	r.useEffect(() => {
		(0, c.updateModal)(
			R.$z,
			(e) =>
				(0, t.jsx)(P, {
					...e,
					channel: a
				}),
			el
		);
	}, [el, a]),
		r.useEffect(() => {
			if (w.length > en.current) {
				var e;
				null === (e = v.current[w.length - 1]) || void 0 === e || e.focus();
			}
			en.current = w.length;
		}, [w.length]),
		r.useEffect(() => {
			if ($) {
				var e, a;
				if ((null == Q ? void 0 : Q.question) != null) null === (e = A.current) || void 0 === e || e.focus();
				else {
					let e = w.findIndex((e) => Q['answer-'.concat(e.localCreationAnswerId)]);
					-1 !== e && (null === (a = v.current[e]) || void 0 === a || a.focus());
				}
				ee(!1);
			}
		}, [Q, w, $, ee, v, g]);
	let es = (0, _.Z)({
		disabled: X,
		onSubmit: q
	});
	return (0, t.jsxs)(c.ModalRoot, {
		size: c.ModalSize.MEDIUM,
		className: p.container,
		transitionState: n,
		'aria-labelledby': O,
		children: [
			(0, t.jsxs)(c.ModalHeader, {
				className: p.header,
				separator: !1,
				children: [
					(0, t.jsx)(c.Heading, {
						color: 'interactive-normal',
						variant: 'text-lg/semibold',
						className: p.headerText,
						id: O,
						children: x.Z.Messages.CREATE_POLL_HEADING
					}),
					(0, t.jsx)(c.ModalCloseButton, { onClick: el })
				]
			}),
			(0, t.jsxs)(c.ModalContent, {
				className: p.content,
				onKeyDown: es,
				children: [
					null != J &&
						(0, t.jsx)(c.FormErrorBlock, {
							className: p.apiErrorBlock,
							children: J.getAnyErrorMessage()
						}),
					(0, t.jsx)(T, {
						question: S,
						onChange: W,
						error: null == Q ? void 0 : Q.question,
						inputRef: A
					}),
					d &&
						(0, t.jsx)(L.Z, {
							selectedLayoutType: b,
							onSelectedLayoutType: k
						}),
					(0, t.jsx)(c.Spacer, { size: 26 }),
					(0, t.jsxs)('fieldset', {
						className: s()(p.answerInputsContainer, et ? p.defaultContainer : p.imageOnlyContainer),
						children: [
							(0, t.jsx)(c.FormTitle, {
								tag: c.FormTitleTags.LEGEND,
								children: x.Z.Messages.CREATE_POLL_ANSWERS_FIELDSET_LABEL
							}),
							w.map((e, n) =>
								(0, t.jsx)(
									C.Z,
									{
										answer: e,
										channelId: a.id,
										index: n,
										isLastAnswer: n === w.length - 1,
										onEmojiSelect: Y,
										onEmojiRemove: G,
										layout: b,
										onAnswerTextChange: H,
										onRemoveAnswer: V,
										addAnswer: K,
										submitPoll: q,
										answerTextInputRefs: v,
										error: null == Q ? void 0 : Q['answer-'.concat(e.localCreationAnswerId)],
										canRemoveAnswer: z,
										ref: (e) => (g.current[n] = e),
										inputRef: (e) => (v.current[n] = e),
										deleteButtonRef: (e) => (D.current[n] = e)
									},
									e.localCreationAnswerId
								)
							),
							F &&
								(0, t.jsxs)(c.Clickable, {
									className: s()(et ? p.addAnswerButtonDefault : p.addAnswerButtonImageOnly, {
										[p.canRemoveMoreAnswers]: z
									}),
									onClick: F ? K : void 0,
									'aria-label': x.Z.Messages.CREATE_POLL_ADD_ANSWER_BUTTON,
									ref: j,
									children: [
										(0, t.jsx)(c.PlusSmallIcon, {
											size: 'md',
											color: 'currentColor',
											className: et ? p.addAnswerIconDefault : p.addAnswerIconImageOnly
										}),
										et &&
											(0, t.jsx)(c.Text, {
												variant: 'text-md/normal',
												color: 'text-muted',
												className: p.addAnswerButtonLabel,
												children: x.Z.Messages.CREATE_POLL_ADD_ANSWER_BUTTON
											})
									]
								})
						]
					}),
					(0, t.jsx)(c.Spacer, { size: 18 }),
					(0, t.jsx)(N, {
						selectedDuration: B,
						onSelect: U
					})
				]
			}),
			(0, t.jsxs)(c.ModalFooter, {
				className: p.footer,
				children: [
					(0, t.jsx)(c.Checkbox, {
						className: p.checkbox,
						type: c.Checkbox.Types.INVERTED,
						size: 24,
						value: Z,
						checkboxColor: (0, c.useToken)(c.tokens.colors.INTERACTIVE_NORMAL).hex(),
						onChange: (e, a) => y(a),
						children: (0, t.jsx)(c.Text, {
							variant: 'text-md/medium',
							color: 'interactive-active',
							children: x.Z.Messages.CREATE_POLL_MULTIPLE_ANSWERS
						})
					}),
					(0, t.jsx)(c.Button, {
						look: c.ButtonLooks.FILLED,
						size: c.Button.Sizes.MEDIUM,
						className: p.postButton,
						onClick: q,
						submitting: X,
						children: (0, t.jsx)(c.Text, {
							variant: 'text-md/semibold',
							className: p.postButtonText,
							children: x.Z.Messages.CREATE_POLL_POST
						})
					})
				]
			})
		]
	});
}
