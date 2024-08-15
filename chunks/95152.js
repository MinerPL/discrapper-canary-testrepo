n.r(t),
	n.d(t, {
		default: function () {
			return v;
		}
	}),
	n(47120),
	n(315314),
	n(610138),
	n(216116),
	n(78328),
	n(815648);
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(481060),
	l = n(166459),
	u = n(476326),
	c = n(752305),
	d = n(849522),
	_ = n(703558),
	E = n(626135),
	f = n(358085),
	h = n(998502),
	p = n(981631),
	I = n(689938),
	m = n(981429),
	T = n(224499);
function g(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
function S(e) {
	var t, n, a, o;
	let { file: l } = e,
		[u, c] = i.useState(),
		[d, _] = i.useState(!1),
		[E, f] = i.useState({}),
		h = i.useRef(null);
	i.useEffect(() => {
		if ((null != h.current && _(!1), null == l)) return;
		let e = URL.createObjectURL(l);
		return (
			c(e),
			() => {
				c(void 0), URL.revokeObjectURL(e);
			}
		);
	}, [l]),
		i.useLayoutEffect(() => {
			let e = h.current;
			null != e &&
				(e.onload = () => {
					let t = Math.max(0.66, Math.min(e.naturalWidth / e.naturalHeight, 4));
					1 === t
						? f({
								width: 104,
								height: 104
							})
						: t > 1
							? f({
									width: 104 * t,
									height: void 0
								})
							: f({
									width: void 0,
									height: 104 / t
								}),
						_(!0);
				});
		}, []);
	let p = Math.max(
		16,
		(120 - (null !== (n = null === (t = h.current) || void 0 === t ? void 0 : t.width) && void 0 !== n ? n : 0)) / 2
	);
	return (0, r.jsx)('img', {
		ref: h,
		src: u,
		className: s()(m.icon, { [m.image]: !d }),
		'aria-hidden': !0,
		alt: '',
		style: {
			width: null !== (a = E.width) && void 0 !== a ? a : 'initial',
			height: null !== (o = E.height) && void 0 !== o ? o : 104,
			marginLeft: p,
			marginRight: p,
			marginTop: null != E.height ? 104 - E.height - 33 : -33
		}
	});
}
class A extends i.Component {
	render() {
		var e;
		if (this.props.upload.item.platform !== u.ow.WEB) return null;
		if (this.props.upload.isImage) return (0, r.jsx)(S, { file: this.props.upload.item.file });
		return (0, r.jsx)('div', {
			className: s()(m.icon, { [m[null !== (e = this.props.upload.classification) && void 0 !== e ? e : '']]: !0 })
		});
	}
}
class N extends i.Component {
	componentDidMount() {
		var e;
		(null === (e = this.props.upload) || void 0 === e ? void 0 : e.showLargeMessageDialog) &&
			this.props.upload.item.platform === u.ow.WEB &&
			E.default.track(p.rMx.OPEN_MODAL, {
				type: 'Upload Large Message',
				message_content_length: this.props.upload.item.file.size
			}),
			f.isPlatformEmbedded && h.ZP.focus();
	}
	shouldComponentUpdate(e) {
		return null != e.upload;
	}
	componentDidUpdate(e) {
		var t, n, r, i;
		(null === (t = e.upload) || void 0 === t ? void 0 : t.filename) !==
			(null === (n = this.props.upload) || void 0 === n ? void 0 : n.filename) &&
			this.setState({
				filename:
					null !== (i = null === (r = this.props.upload) || void 0 === r ? void 0 : r.filename) && void 0 !== i ? i : ''
			});
	}
	render() {
		let { upload: e, transitionState: t, messageMaxLength: n, disableSpoiler: a } = this.props,
			{ hasSpoiler: l } = this.state;
		return (0, r.jsxs)(o.ModalRoot, {
			'aria-label': I.Z.Messages.ATTACH_FILES,
			size: o.ModalSize.DYNAMIC,
			transitionState: t,
			className: s()(m.uploadModal),
			children: [
				(0, r.jsxs)('div', {
					className: m.inner,
					children: [
						(0, r.jsxs)('div', {
							className: s()(m.file, { [m.expandable]: e.isImage }),
							children: [
								(0, r.jsx)(A, { upload: e }),
								(0, r.jsxs)('div', {
									className: m.description,
									children: [
										(0, r.jsx)('div', {
											className: m.filename,
											children: e.showLargeMessageDialog
												? I.Z.Messages.LARGE_MESSAGE_UPLOAD_TITLE_MAX_LENGTH.format({ maxLength: n })
												: e.filename
										}),
										e.showLargeMessageDialog
											? (0, r.jsx)('div', {
													className: m.subtitle,
													children: I.Z.Messages.LARGE_MESSAGE_UPLOAD_SUBTITLE
												})
											: null
									]
								})
							]
						}),
						(0, r.jsx)('div', {
							className: m.comment,
							children: (0, r.jsxs)(i.Fragment, {
								children: [
									(0, r.jsx)('div', {
										className: m.label,
										children: (0, r.jsx)('span', { children: I.Z.Messages.UPLOAD_AREA_FILENAME })
									}),
									(0, r.jsx)(o.TextInput, {
										className: s()(m.channelTextAreaUpload, T.marginTop8),
										value: this.state.filename,
										onChange: (e) => this.setState({ filename: e }),
										onKeyDown: (e) => {
											if (e.which === p.yXg.ENTER) return this.handleSubmit();
										}
									}),
									e.isImage
										? (0, r.jsxs)(i.Fragment, {
												children: [
													(0, r.jsx)('div', {
														className: m.label,
														children: (0, r.jsx)('span', {
															children: I.Z.Messages.ATTACHMENT_MODAL_IMAGE_DESCRIPTION_LABEL
														})
													}),
													(0, r.jsx)(o.TextInput, {
														className: s()(m.channelTextAreaUpload, T.marginTop8),
														placeholder: I.Z.Messages.ATTACHMENT_MODAL_IMAGE_DESCRIPTION_PLACEHOLDER,
														value: this.state.description,
														onChange: (e) => this.setState({ description: e }),
														onKeyDown: (e) => {
															if (e.which === p.yXg.ENTER) return this.handleSubmit();
														}
													})
												]
											})
										: null,
									!0 !== a &&
										(0, r.jsx)(o.Checkbox, {
											className: T.marginBottom20,
											value: l,
											onChange: (e, t) => this.setState({ hasSpoiler: t }),
											children: (0, r.jsx)(o.Text, {
												variant: 'text-sm/normal',
												children: I.Z.Messages.SPOILER_MARK_SELECTED
											})
										})
								]
							})
						})
					]
				}),
				(0, r.jsx)('div', {
					className: m.footer,
					children: (0, r.jsxs)('div', {
						className: s()(m.hasSpoilers, m.footerRightAlign),
						children: [
							(0, r.jsx)(o.Button, {
								type: 'button',
								look: o.Button.Looks.LINK,
								color: o.Button.Colors.PRIMARY,
								onClick: this.cancel,
								children: (0, r.jsx)('span', { children: I.Z.Messages.CANCEL })
							}),
							(0, r.jsx)(o.Button, {
								type: 'submit',
								onClick: this.handleSubmit,
								children: (0, r.jsx)('span', { children: I.Z.Messages.ATTACHMENT_MODAL_SAVE })
							})
						]
					})
				})
			]
		});
	}
	constructor(e) {
		var t, n, r, i, a, s;
		super(e),
			g(this, 'cancelAll', () => {
				l.Z.clearAll(this.props.channelId, this.props.draftType), this.props.onClose();
			}),
			g(this, 'cancel', () => {
				this.props.onClose();
			}),
			g(this, 'handleTextChange', (e, t, n) => {
				this.setState({
					textValue: t,
					richValue: n
				});
			}),
			g(this, 'handleSubmit', () => {
				let { upload: e, onClose: t, onSubmit: n } = this.props,
					{ filename: r, description: i, hasSpoiler: a } = this.state;
				n({
					upload: e,
					name: r,
					description: i,
					spoiler: a
				}),
					t();
			});
		let o = e.ignoreDraft ? '' : _.Z.getDraft(this.props.channelId, e.draftType);
		this.state = {
			...(0, c.eK)(o),
			textFocused: !0,
			hasSpoiler: null !== (i = null === (t = e.upload) || void 0 === t ? void 0 : t.spoiler) && void 0 !== i && i,
			filename: null !== (a = null === (n = e.upload) || void 0 === n ? void 0 : n.filename) && void 0 !== a ? a : '',
			contentWarningProps: null,
			description:
				null !== (s = null === (r = e.upload) || void 0 === r ? void 0 : r.description) && void 0 !== s ? s : ''
		};
	}
}
function v(e) {
	let t = (0, d.Z)();
	return e.upload.item.platform !== u.ow.WEB
		? null
		: (0, r.jsx)(N, {
				...e,
				file: e.upload.item.file,
				messageMaxLength: t
			});
}
