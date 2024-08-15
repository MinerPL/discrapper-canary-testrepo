n.d(t, {
	Z: function () {
		return m;
	}
}),
	n(47120);
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(481060),
	l = n(166459),
	u = n(53281),
	c = n(476326),
	d = n(703558),
	_ = n(117530),
	E = n(859235),
	f = n(898463),
	h = n(981631),
	p = n(277263),
	I = n(451328);
function m(e) {
	let { channelId: t, option: n, keyboardModeEnabled: a } = e,
		m = i.useRef(null),
		[T, g] = i.useState(!1),
		S = _.Z.getUpload(t, n.name, d.d.SlashCommand),
		A = i.useRef(null),
		N = i.useCallback(() => {
			g(!0);
		}, []),
		v = i.useCallback(() => {
			g(!1);
		}, []),
		O = i.useCallback(
			(e) => {
				var r;
				g(!1);
				let i = {
					id: n.name,
					file: null === (r = e.dataTransfer) || void 0 === r ? void 0 : r.files[0],
					platform: c.ow.WEB
				};
				l.Z.setFile({
					channelId: t,
					id: n.name,
					file: i,
					draftType: d.d.SlashCommand
				});
			},
			[t, n]
		);
	return (i.useEffect(() => {
		let e = A.current;
		return (
			null == S &&
				(null == e || e.addEventListener('dragover', N, !1),
				null == e || e.addEventListener('dragleave', v, !1),
				null == e || e.addEventListener('drop', O, !1)),
			() => {
				null == e || e.removeEventListener('dragover', N, !1),
					null == e || e.removeEventListener('dragleave', v, !1),
					null == e || e.removeEventListener('drop', O, !1);
			}
		);
	}, [S, N, v, O]),
	null != S)
		? (0, r.jsx)(f.Z, {
				channelId: t,
				upload: S,
				keyboardModeEnabled: a,
				draftType: d.d.SlashCommand,
				label: (0, r.jsxs)(i.Fragment, {
					children: [
						(0, r.jsxs)(o.Text, {
							tag: 'span',
							variant: 'text-md/normal',
							children: [n.name, ': ']
						}),
						(0, r.jsx)(o.Text, {
							tag: 'span',
							variant: 'text-md/normal',
							color: 'text-brand',
							children: S.filename
						})
					]
				}),
				canEdit: !1
			})
		: (0, r.jsxs)(E.Z, {
				id: n.name,
				channelId: t,
				keyboardModeEnabled: a,
				onKeyDown: (e) => {
					if (e.which === h.yXg.ENTER) {
						var t;
						e.preventDefault(), null === (t = m.current) || void 0 === t || t.activateUploadDialogue();
					}
				},
				className: s()(p.emptyOption, { [p.emptyOptionActive]: T }),
				draftType: d.d.SlashCommand,
				ref: A,
				children: [
					(0, r.jsx)('span', {
						className: s()(p.optionName, { [p.optionNameActive]: T }),
						children: n.name
					}),
					(0, r.jsx)(o.Clickable, {
						className: p.clickContainer,
						onClick: () => {
							var e;
							return null === (e = m.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
						},
						children: (0, r.jsxs)('div', {
							className: p.commandOptionContainer,
							children: [
								(0, r.jsx)('img', {
									src: I,
									className: p.optionIcon,
									alt: ''
								}),
								(0, r.jsx)(o.Text, {
									className: p.optionHelp,
									variant: 'text-sm/normal',
									children: 'Drag and drop or click to upload file'
								}),
								(0, r.jsx)(u.Z, {
									ref: m,
									onChange: (e) => {
										var r, i;
										if (
											null != t &&
											(null === (i = e.currentTarget) || void 0 === i
												? void 0
												: null === (r = i.files) || void 0 === r
													? void 0
													: r[0]) != null
										) {
											let r = {
												id: n.name,
												file: e.currentTarget.files[0],
												platform: c.ow.WEB
											};
											l.Z.setFile({
												channelId: t,
												id: n.name,
												file: r,
												draftType: d.d.SlashCommand
											}),
												(e.currentTarget.value = '');
										}
									},
									multiple: !1,
									tabIndex: -1,
									'aria-hidden': !0,
									className: p.fileInput
								})
							]
						})
					})
				]
			});
}
