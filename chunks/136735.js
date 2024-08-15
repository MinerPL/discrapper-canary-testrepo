s.r(l),
	s.d(l, {
		default: function () {
			return B;
		}
	}),
	s(47120);
var t = s(735250),
	n = s(470079),
	i = s(120356),
	a = s.n(i),
	o = s(772848),
	r = s(36793),
	u = s(442837),
	d = s(780384),
	c = s(481060),
	I = s(600164),
	m = s(339085),
	_ = s(349709),
	E = s(763610),
	f = s(210887),
	g = s(430824),
	L = s(594174),
	T = s(626135),
	v = s(424218),
	D = s(63063),
	x = s(956664),
	p = s(268350),
	C = s(373228),
	R = s(378233),
	S = s(419922),
	j = s(611480),
	h = s(981631),
	P = s(689938),
	N = s(279374),
	U = s(434227),
	Z = s(600126);
let O = new Set(['application/json', 'image/png', 'image/apng', 'image/gif']),
	M = [
		{
			name: 'Sticker file',
			extensions: ['json', 'png', 'apng', 'gif']
		}
	];
function A(e, l) {
	T.default.track(h.rMx.STICKER_UPLOAD_COMPLETED, {
		successful: e,
		error: null != l ? l : ''
	});
}
let K = (e) => {
		let { stickerPreview: l } = e;
		return (0, t.jsxs)('div', {
			className: N.preview,
			children: [
				(0, t.jsx)('div', {
					className: N.previewDark,
					children:
						null != l
							? l
							: (0, t.jsx)('img', {
									src: U,
									alt: P.Z.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_DARK
								})
				}),
				(0, t.jsx)('div', {
					className: N.previewLight,
					children:
						null != l
							? l
							: (0, t.jsx)('img', {
									src: Z,
									alt: P.Z.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_LIGHT
								})
				})
			]
		});
	},
	k = (e) => {
		let { sticker: l, previewData: s, onStickerError: n } = e;
		if (null != l)
			return (0, t.jsx)(S.ZP, {
				size: 160,
				sticker: l
			});
		if (null == s) return null;
		let { id: i, formatType: a, content: o } = s;
		return (0, t.jsx)(
			S.ZP,
			{
				assetData: o,
				fileUri: o,
				size: 160,
				sticker: {
					name: i,
					description: '',
					id: i,
					pack_id: '',
					format_type: a
				},
				onError: n
			},
			i
		);
	};
async function b(e) {
	let l = await (0, x.fD)(e),
		s = new Image();
	(s.src = l), await s.decode();
	let t = (0, r.Ae)(s, 320, 320);
	return (0, x.Bo)(t, e.name, e.type);
}
function B(e) {
	var l, s, i, r, S, U, Z, B;
	let { transitionState: G, onClose: y, guildId: w, sticker: F } = e,
		z = (0, u.e7)([f.Z], () => f.Z.theme),
		H = (0, u.e7)([m.ZP], () => ((null == F ? void 0 : F.tags) != null ? m.ZP.getCustomEmojiById(F.tags) : null)),
		V =
			null !== (s = null === (l = L.default.getCurrentUser()) || void 0 === l ? void 0 : l.isStaff()) &&
			void 0 !== s &&
			s
				? j.OC
				: j.Ht,
		[W, q] = n.useState(null),
		[Y, J] = n.useState(null !== (i = null == F ? void 0 : F.name) && void 0 !== i ? i : ''),
		[X, Q] = n.useState({
			file: null,
			filename: null !== (r = (0, R._V)(F)) && void 0 !== r ? r : ''
		}),
		[$, ee] = n.useState(null == H ? void 0 : H.id),
		[el, es] = n.useState(null !== (S = null == H ? void 0 : H.name) && void 0 !== S ? S : null == F ? void 0 : F.tags),
		[et, en] = n.useState(null !== (U = null == F ? void 0 : F.description) && void 0 !== U ? U : ''),
		[ei, ea] = n.useState(!1),
		[eo, er] = n.useState(null),
		eu = (0, u.e7)([g.Z], () => g.Z.getGuild(w)),
		ed =
			(null == eu ? void 0 : eu.hasFeature(h.oNc.PARTNERED)) || (null == eu ? void 0 : eu.hasFeature(h.oNc.VERIFIED)),
		ec = null != F,
		eI = ec || (null == X ? void 0 : X.file) != null,
		em = 0 === et.length || (et.length >= 2 && et.length <= 100),
		e_ =
			!ei &&
			(null == eo ? void 0 : eo.isBlocking) !== !0 &&
			Y.length >= 2 &&
			(null != $ || null != el || ((null == F ? void 0 : F.tags) != null && (null == F ? void 0 : F.tags) !== '')) &&
			eI &&
			em,
		eE = async (e) => {
			var l;
			if (null == e) return;
			let s = null === (l = e.type) || void 0 === l ? void 0 : l.split(';')[0];
			if (!O.has(s)) {
				er({
					message: P.Z.Messages.GUILD_STICKER_UNKNOWN_MIME_TYPE,
					isBlocking: !0
				});
				return;
			}
			let t = e;
			if ('image/png' === s && e.size > V && !(await (0, x.c0)(e))) {
				let l = (t = await b(e)).size > V;
				T.default.track(h.rMx.STICKER_FILE_RESIZED, {
					original_file_size_bytes: e.size,
					resized_file_size_bytes: t.size,
					resized_file_too_big: l
				});
			}
			if (t.size > V) {
				er({
					message: P.Z.Messages.GUILD_STICKER_FILE_TOO_BIG.format({ maxSize: (0, v.IC)(V, { useKibibytes: !0 }) }),
					isBlocking: null == X.file
				}),
					T.default.track(h.rMx.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
						size: t.size,
						filetype: s
					});
				return;
			}
			let n = (0, R.Zv)(t.type);
			if (n === C.u3.LOTTIE) {
				if (!ed) {
					er({
						message: P.Z.Messages.GUILD_STICKER_UNSUPPORTED_MIME_TYPE.format({
							articleURL: D.Z.getArticleURL(h.BhN.STICKERS_UPLOAD)
						}),
						isBlocking: !0
					});
					return;
				}
				let e = new FileReader();
				e.addEventListener('load', () => {
					q({
						id: (0, o.Z)(),
						formatType: n,
						content: e.result
					}),
						er(null);
				}),
					e.readAsText(t);
			} else {
				let e = await (0, x.fD)(t);
				q({
					id: (0, o.Z)(),
					formatType: n,
					content: e
				}),
					er(null);
			}
			Q({
				file: t,
				filename: t.name
			});
		},
		ef = async (e) => {
			var l, s, t, n, i, a;
			e.preventDefault();
			let o =
				null !== (s = null !== (l = null != $ ? $ : el) && void 0 !== l ? l : null == F ? void 0 : F.tags) &&
				void 0 !== s
					? s
					: '';
			try {
				if ((ea(!0), ec))
					await (0, p.Jf)(w, null !== (t = null == F ? void 0 : F.id) && void 0 !== t ? t : '', {
						name: Y,
						tags: o,
						description: et
					});
				else {
					let e = new FormData();
					e.append('name', Y),
						e.append('tags', o),
						e.append('description', et),
						(null == X ? void 0 : X.file) != null && e.append('file', X.file),
						(a = null !== (i = null === (n = X.file) || void 0 === n ? void 0 : n.type) && void 0 !== i ? i : ''),
						T.default.track(h.rMx.STICKER_UPLOAD_STARTED, { filetype: a }),
						await (0, p.lY)(w, e),
						A(!0);
				}
				y();
			} catch (e) {
				er({
					message: e.body.message,
					isBlocking: !1
				}),
					A(!1, e.body.message);
			} finally {
				ea(!1);
			}
		},
		eg = k({
			sticker: F,
			previewData: W,
			onStickerError: n.useCallback(() => {
				er({
					message: P.Z.Messages.GUILD_STICKER_INVALID_STICKER,
					isBlocking: !0
				});
			}, [])
		}),
		eL = ed ? P.Z.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION : P.Z.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_NO_LOTTIE;
	return (0, t.jsxs)(c.ModalRoot, {
		transitionState: G,
		'aria-labelledby': 'STICKER_UPLOAD_MODAL',
		className: N.modal,
		children: [
			(0, t.jsx)(c.ModalCloseButton, {
				onClick: y,
				className: N.modalClose
			}),
			(0, t.jsxs)('form', {
				onSubmit: ef,
				className: N.form,
				children: [
					(0, t.jsxs)(c.ModalContent, {
						className: N.modalContent,
						children: [
							(0, t.jsxs)(c.ModalHeader, {
								direction: I.Z.Direction.VERTICAL,
								separator: !1,
								className: N.modalHeader,
								children: [
									(0, t.jsx)(c.Heading, {
										variant: 'heading-xl/semibold',
										className: N.modalHeaderTitle,
										children: P.Z.Messages.GUILD_STICKER_UPLOAD_TITLE
									}),
									(0, t.jsx)(c.Text, {
										variant: 'text-md/normal',
										children: eL.format({ fileSize: (0, v.IC)(j.Ht, { useKibibytes: !0 }) })
									})
								]
							}),
							(0, t.jsx)(c.FormSection, {
								title: P.Z.Messages.GUILD_STICKER_UPLOAD_PREVIEW_TITLE,
								className: N.formItem,
								children: (0, t.jsx)(K, { stickerPreview: eg })
							}),
							(0, t.jsxs)(c.FormSection, {
								className: a()(N.formItem, N.formItemRow),
								children: [
									(0, t.jsx)(c.FormItem, {
										title: ec
											? P.Z.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE_BLOCKED
											: P.Z.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE,
										required: !0,
										className: N.formItemRowChild,
										children: ec
											? (0, t.jsx)(c.TextInput, {
													disabled: !0,
													value: null !== (Z = null == X ? void 0 : X.filename) && void 0 !== Z ? Z : ''
												})
											: (0, t.jsx)(E.Z, {
													buttonText: P.Z.Messages.GUILD_STICKER_UPLOAD_FILE_BUTTON,
													filters: M,
													filename: null !== (B = null == X ? void 0 : X.filename) && void 0 !== B ? B : '',
													placeholder: P.Z.Messages.GUILD_STICKER_UPLOAD_FILE_PLACEHOLDER,
													onFileSelect: eE
												})
									}),
									(0, t.jsx)(_.Z, {
										className: N.formItemRowChild,
										guildId: w,
										emojiId: $,
										emojiName: el,
										setEmojiId: ee,
										setEmojiName: es,
										shouldUpdateBothEmojiFields: !0
									})
								]
							}),
							(0, t.jsx)(c.FormItem, {
								title: P.Z.Messages.GUILD_STICKER_UPLOAD_NAME_TITLE,
								required: !0,
								className: N.formItem,
								children: (0, t.jsx)(c.TextInput, {
									value: Y,
									onChange: J,
									placeholder: P.Z.Messages.GUILD_STICKER_UPLOAD_NAME_PLACEHOLDER,
									maxLength: 30
								})
							}),
							(0, t.jsxs)('div', {
								className: N.formItem,
								children: [
									(0, t.jsxs)(c.FormTitle, {
										children: [
											P.Z.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TITLE,
											(0, t.jsx)(c.Tooltip, {
												text: P.Z.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TOOLTIP,
												children: (e) =>
													(0, t.jsx)(c.CircleInformationIcon, {
														size: 'xs',
														color: 'currentColor',
														className: N.infoIcon,
														...e
													})
											})
										]
									}),
									(0, t.jsx)(c.TextArea, {
										value: et,
										onChange: en,
										placeholder: P.Z.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_PLACEHOLDER,
										maxLength: 100
									})
								]
							}),
							null != eo &&
								(0, t.jsx)(c.Text, {
									className: N.formItem,
									variant: 'text-sm/normal',
									color: 'text-danger',
									children: eo.message
								})
						]
					}),
					(0, t.jsxs)(c.ModalFooter, {
						className: N.modalFooter,
						children: [
							(0, t.jsx)(c.Button, {
								type: 'submit',
								disabled: !e_,
								children: ec ? P.Z.Messages.GUILD_STICKERS_UPDATE : P.Z.Messages.UPLOAD
							}),
							(0, t.jsx)(c.Button, {
								look: c.Button.Looks.LINK,
								color: (0, d.ap)(z) ? c.Button.Colors.PRIMARY : c.Button.Colors.WHITE,
								onClick: y,
								children: P.Z.Messages.NEVERMIND
							})
						]
					})
				]
			})
		]
	});
}
