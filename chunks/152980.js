t.d(A, {
	s: function () {
		return f;
	}
}),
	t(47120);
var a = t(735250),
	n = t(470079),
	r = t(120356),
	s = t.n(r),
	o = t(481060),
	l = t(205822),
	i = t(476326),
	d = t(377171),
	c = t(313201),
	u = t(374794),
	C = t(587123),
	g = t(863663),
	T = t(731994),
	p = t(629481),
	h = t(689938),
	m = t(14394);
let I = (0, c.hQ)();
function U(e) {
	var A;
	let { upload: t, progress: r = 0, onDeleteAttachment: l } = e,
		i = n.useCallback(() => {
			null == l || l(t.id);
		}, [l, t.id]),
		c = r >= 1,
		u = r < 0,
		C = c || u,
		T = null !== (A = t.filename) && void 0 !== A ? A : t.id,
		p = (0, g.kg)(r);
	return (0, a.jsx)(o.TooltipContainer, {
		text: p,
		children: (0, a.jsxs)('div', {
			className: s()(m.attachedFileCard, {
				[m.attachedFileCardError]: u,
				[m.attachedFileCardUploading]: !C
			}),
			children: [
				(0, a.jsx)(o.ImageFileIcon, {
					size: 'xs',
					color: d.Z.INTERACTIVE_MUTED
				}),
				(0, a.jsx)(o.Spacer, {
					size: 10,
					horizontal: !0
				}),
				(0, a.jsx)(o.Text, {
					variant: 'text-sm/normal',
					children: T
				}),
				!C &&
					(0, a.jsx)(o.Spinner, {
						className: m.attachedFileCardSpinner,
						type: o.Spinner.Type.SPINNING_CIRCLE
					}),
				C &&
					null != l &&
					(0, a.jsx)(o.Button, {
						'aria-label': h.Z.Messages.GUILD_PRODUCT_DELETE_ATTACHMENT.format({ attachment: T }),
						className: m.deleteButton,
						innerClassName: m.deleteButtonInner,
						look: o.Button.Looks.BLANK,
						size: o.Button.Sizes.NONE,
						onClick: i,
						children: (0, a.jsx)(o.XSmallIcon, {
							size: 'xxs',
							color: 'currentColor',
							className: m.__invalid_deleteIcon
						})
					})
			]
		})
	});
}
function f(e) {
	let { onFileAdded: A } = e,
		{ uploads: t, canAttachFiles: r, canAttachArchives: s, addAttachment: d, deleteAttachment: c, fileUploadProgresses: g } = (0, C.P)(),
		f = n.useRef(!1);
	function v(e) {
		try {
			for (let A of e)
				d({
					platform: i.ow.WEB,
					file: A
				});
			f.current = !0;
		} catch {}
	}
	return (
		n.useEffect(() => {
			f.current && (A(), (f.current = !1));
		}, [A]),
		(0, a.jsxs)('div', {
			className: m.container,
			children: [
				(0, a.jsx)(l.Z, {
					className: m.uploadArea,
					title: h.Z.Messages.GUILD_PRODUCT_UPLOAD_AREA_TITLE,
					description: h.Z.Messages.GUILD_PRODUCT_UPLOAD_AREA_INSTRUCTIONS,
					icons: T.J6,
					onDrop: v
				}),
				(0, a.jsxs)(u.Z, {
					className: m.addFileButtonLook,
					innerClassName: m.addFileButton,
					color: o.Button.Colors.CUSTOM,
					disabled: !r,
					'aria-label': h.Z.Messages.GUILD_PRODUCT_UPLOAD_FILE_BUTTON,
					'aria-describedby': I,
					multiple: !0,
					onChange: function (e) {
						null != e.currentTarget.files && v(e.currentTarget.files);
					},
					children: [
						(0, a.jsx)(o.ImageFileUpIcon, {
							size: 'xs',
							color: 'currentColor',
							className: m.addFileButtonIcon,
							'aria-hidden': !0
						}),
						(0, a.jsx)(o.Text, {
							variant: 'text-sm/medium',
							color: 'always-white',
							children: h.Z.Messages.GUILD_PRODUCT_UPLOAD_FILE_BUTTON
						})
					]
				}),
				(0, a.jsx)(o.Spacer, { size: 12 }),
				(0, a.jsx)(o.Text, {
					id: I,
					color: 'text-muted',
					variant: 'text-xs/normal',
					children: s ? h.Z.Messages.GUILD_PRODUCT_UPLOAD_ATTACHMENT_INSTRUCTIONS_ARCHIVES_ALLOWED.format({ fileUploadLimit: p.TR }) : h.Z.Messages.GUILD_PRODUCT_UPLOAD_ATTACHMENT_INSTRUCTIONS.format({ fileUploadLimit: p.TR })
				}),
				t.length > 0 &&
					(0, a.jsxs)(a.Fragment, {
						children: [
							(0, a.jsx)('div', { className: m.separator }),
							(0, a.jsx)('ul', {
								className: m.attachedFilesContainer,
								'aria-label': h.Z.Messages.GUILD_PRODUCT_ATTACHED_FILES_SECTION_LABEL,
								children: t.map((e) =>
									(0, a.jsx)(
										'li',
										{
											children: (0, a.jsx)(U, {
												upload: e,
												onDeleteAttachment: c,
												progress: g[e.id]
											})
										},
										e.id
									)
								)
							})
						]
					})
			]
		})
	);
}
