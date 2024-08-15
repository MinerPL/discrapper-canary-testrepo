n.d(t, {
	A7: function () {
		return A;
	},
	dE: function () {
		return v;
	}
}),
	n(47120);
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(481060),
	l = n(410030),
	u = n(541716),
	c = n(752305),
	d = n(893718),
	_ = n(318766),
	E = n(931651),
	f = n(131704),
	h = n(792125),
	p = n(142550),
	m = n(981631),
	I = n(689938),
	T = n(763072);
let g = (0, f.kt)({
		id: '1',
		type: m.d4z.DM
	}),
	S = i.forwardRef(function (e, t) {
		let { placeholder: n, headerText: i, onEnter: a, showPopout: u, children: c, body: d, hide: _ } = e,
			E = (0, l.ZP)();
		return (0, r.jsx)(o.Popout, {
			align: 'right',
			position: 'bottom',
			shouldShow: u,
			disablePointerEvents: !1,
			renderPopout: () =>
				(0, r.jsx)('div', {
					className: s()([T.reply, (0, h.Q)(E)]),
					ref: t,
					children: (0, r.jsx)(o.FocusLock, {
						containerRef: t,
						children: (0, r.jsxs)('div', {
							children: [
								(0, r.jsx)(o.Text, {
									variant: 'text-xs/bold',
									className: T.replyHeader,
									children: null != i ? i : I.Z.Messages.CHAT
								}),
								d,
								(0, r.jsx)(A, {
									onEnter: (e) => {
										a(e), _();
									},
									placeholder: null != n ? n : I.Z.Messages.CHAT
								})
							]
						})
					})
				}),
			children: () => c
		});
	});
function A(e) {
	let { placeholder: t, onEnter: n, setEditorRef: a, showEmojiButton: o = !1, renderAttachButton: l, autoFocus: _ = !0, onFocus: E, channel: f, className: h } = e,
		[m, I] = i.useState(''),
		[S, A] = i.useState((0, c.JM)('')),
		N = () => {
			I(''), A((0, c.JM)(''));
		},
		v = u.I.ATOMIC_REACTOR_REPLY_INPUT,
		O = i.useRef(null);
	return (0, r.jsx)(d.Z, {
		ref: O,
		placeholder: t,
		editorClassName: h,
		className: s()(T.replyInput, h),
		showRemainingCharsAfterCount: -1,
		allowNewLines: !1,
		maxCharacterCount: p.z,
		channel: null != f ? f : g,
		onChange: (e, t, n) => {
			I(t), A(n);
		},
		type: o
			? {
					...v,
					emojis: { button: !0 }
				}
			: v,
		textValue: m,
		richValue: S,
		onSubmit: (e) => {
			let { value: t } = e;
			return t.length > p.z
				? Promise.resolve({
						shouldClear: !1,
						shouldRefocus: !0
					})
				: (n(t),
					N(),
					Promise.resolve({
						shouldClear: !0,
						shouldRefocus: !1
					}));
		},
		setEditorRef: a,
		focused: _,
		onFocus: E,
		disableThemedBackground: !0,
		emojiPickerCloseOnModalOuterClick: !0,
		disabled: !1,
		autoCompletePosition: (() => {
			if (null == O.current) return 'top';
			let e = O.current.getBoundingClientRect(),
				t = window.innerHeight;
			return e.top < t / 2 ? 'bottom' : 'top';
		})(),
		renderAttachButton: l
	});
}
let N = (e, t) => {
		i.useEffect(() => {
			let n = (t) => {
					'Escape' === t.key && e();
				},
				r = (n) => {
					var r;
					null != n.target && !(null == t ? void 0 : null === (r = t.current) || void 0 === r ? void 0 : r.contains(null == n ? void 0 : n.target)) && e();
				};
			return (
				document.addEventListener('keydown', n),
				document.addEventListener('mousedown', r),
				() => {
					document.removeEventListener('keydown', n), document.removeEventListener('mousedown', r);
				}
			);
		}, [e, t]);
	},
	v = (e) => {
		let { onSelectEmoji: t, onClick: n } = e,
			a = (0, l.ZP)(),
			[s, u] = i.useState(!1),
			c = i.useRef(null);
		return (
			N(() => u(!1), c),
			(0, r.jsx)(o.Popout, {
				align: 'right',
				position: 'top',
				shouldShow: s,
				disablePointerEvents: !1,
				renderPopout: () =>
					(0, r.jsx)('div', {
						className: (0, h.Q)(a),
						ref: c,
						children: (0, r.jsx)(E.$, {
							messageId: m.lds,
							channel: g,
							closePopout: () => {
								u(!1);
							},
							onSelectEmoji: (e, n, r) => {
								null != e && (t(e, n, r), u(!1));
							}
						})
					}),
				children: () =>
					(0, r.jsx)(o.Tooltip, {
						text: I.Z.Messages.ADD_REACTION,
						children: (e) =>
							(0, r.jsx)('div', {
								...e,
								className: T.reaction,
								children: (0, r.jsx)(_.Z, {
									active: !1,
									tabIndex: 0,
									onClick: () => {
										null == n || n(), u(!0);
									}
								})
							})
					})
			})
		);
	};
t.ZP = (e) => {
	let { onInteraction: t, showReact: n = !0, showReply: a = !0, popoutProps: l = {} } = e,
		{ replyHeaderText: u, replyPlaceholder: c, popoutBody: d } = l,
		[_, E] = i.useState(!1),
		f = i.useRef(null);
	return (
		N(() => E(!1), f),
		(0, r.jsx)(r.Fragment, {
			children: (0, r.jsxs)('div', {
				className: T.reactions,
				children: [
					n &&
						(0, r.jsx)(v, {
							onSelectEmoji: (e) => {
								null != e &&
									t({
										interactionType: p.L.ReactSubmit,
										emoji: e,
										reply: null
									});
							},
							onClick: () => {
								t({
									interactionType: p.L.ReactBegin,
									emoji: null,
									reply: null
								}),
									E(!1);
							}
						}),
					a &&
						(0, r.jsx)(S, {
							hide: () => E(!1),
							ref: f,
							headerText: u,
							placeholder: c,
							showPopout: _,
							body: d,
							onEnter: (e) => {
								t({
									interactionType: p.L.ReplySubmit,
									emoji: null,
									reply: e
								});
							},
							children: (0, r.jsx)(o.Tooltip, {
								text: I.Z.Messages.MESSAGE_ACTION_REPLY,
								children: (e) =>
									(0, r.jsx)('button', {
										...e,
										className: s()(T.reaction, T.emojiButton),
										onClick: () => {
											t({
												interactionType: p.L.ReplyBegin,
												emoji: null,
												reply: null
											}),
												E(!0);
										},
										children: (0, r.jsx)(o.ArrowAngleLeftUpIcon, {})
									})
							})
						})
				]
			})
		})
	);
};
