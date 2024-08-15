n.d(t, {
	_: function () {
		return A;
	}
});
var a = n(735250),
	s = n(470079),
	r = n(120356),
	l = n.n(r),
	i = n(512722),
	o = n.n(i),
	c = n(399606),
	d = n(481060),
	u = n(166459),
	m = n(607070),
	h = n(541716),
	_ = n(273031),
	g = n(859235),
	x = n(313201),
	f = n(70097),
	C = n(374794),
	p = n(470623),
	T = n(983200),
	I = n(127654),
	E = n(124252),
	N = n(689938),
	b = n(931162);
let v = [
		{
			name: 'Media Post Thumbnail',
			extensions: ['jpg', 'jpeg', 'png', 'gif', 'webp']
		}
	],
	S = (0, x.hQ)();
function M(e) {
	let { mediaAttachments: t, containerWidth: n, containerHeight: s } = e,
		r = (0, T.tu)({
			numAttachments: t.length,
			containerWidth: n,
			containerHeight: s
		});
	return (0, a.jsx)(a.Fragment, {
		children: t.map((e, t) => {
			var n;
			return (0, a.jsx)(
				'div',
				{
					style: r[t],
					children:
						!0 === e.isVideo
							? (0, a.jsx)(f.Z, {
									src: e.src,
									className: b.thumbnail,
									'aria-hidden': !0
								})
							: (0, a.jsx)('img', {
									src: e.src,
									className: b.thumbnail,
									'aria-hidden': !0,
									alt: null !== (n = null == e ? void 0 : e.alt) && void 0 !== n ? n : ''
								})
				},
				e.src
			);
		})
	});
}
let A = (e) => {
	var t;
	let { parentChannel: r } = e,
		{ textAreaState: i } = (0, p.xH)((e) => {
			let { textAreaState: t } = e;
			return { textAreaState: t };
		}),
		x = (0, c.e7)([m.Z], () => m.Z.keyboardModeEnabled),
		f = (0, E.Z)(r, null === (t = i.textValue) || void 0 === t ? void 0 : t.trim()),
		T = s.useMemo(() => f.find((e) => e.isThumbnail), [f]),
		A = null != f && f.length > 0,
		j = s.useMemo(() => {
			let e = (null == f ? void 0 : f.length) > 1 ? 1.15 : 1;
			return {
				width: 153 * e,
				height: 86 * e
			};
		}, [f]),
		R = s.useCallback(
			(e) => {
				null != T && u.Z.remove(r.id, T.id, h.I.CREATE_FORUM_POST.drafts.type),
					(0, I.d)(e.currentTarget.files, r, h.I.CREATE_FORUM_POST.drafts.type, {
						requireConfirm: !0,
						isThumbnail: !0
					}),
					(e.currentTarget.value = null);
			},
			[r, T]
		),
		O = (e) => {
			if ((e.stopPropagation(), (null == T ? void 0 : T.upload) != null))
				(0, d.openModalLazy)(async () => {
					let e = T.upload;
					o()(null != e, 'upload should not be null');
					let { default: t } = await Promise.resolve().then(n.bind(n, 95152));
					return (n) =>
						(0, a.jsx)(t, {
							...n,
							upload: e,
							channelId: r.id,
							draftType: h.I.CREATE_FORUM_POST.drafts.type,
							onSubmit: (t) => {
								let { name: n, description: a, spoiler: s } = t;
								u.Z.update(r.id, e.id, h.I.CREATE_FORUM_POST.drafts.type, {
									filename: n,
									description: a,
									spoiler: s
								});
							},
							disableSpoiler: !0
						});
				});
		},
		Z = (0, a.jsx)(C.Z, {
			color: d.ButtonColors.CUSTOM,
			className: l()(b.uploadFileInputContainer),
			innerClassName: b.uploadThumbnailContainer,
			onChange: R,
			multiple: !1,
			'aria-hidden': !0,
			filters: v,
			'aria-describedby': S,
			'aria-label': A
				? N.Z.Messages.MEDIA_CHANNEL_CHANGE_THUMBNAIL_LABEL
				: N.Z.Messages.MEDIA_CHANNEL_UPLOAD_THUMBNAIL_LABEL,
			children: A
				? (0, a.jsxs)(a.Fragment, {
						children: [
							(0, a.jsx)(M, {
								mediaAttachments: f,
								containerWidth: j.width,
								containerHeight: j.height
							}),
							(0, a.jsxs)('div', {
								className: l()(b.changeThumbnailLabelContainer, {
									[b.changeThumbnailLabelOverflow]: (null == f ? void 0 : f.length) > 2
								}),
								children: [
									(0, a.jsx)(d.Text, {
										variant: 'text-xs/medium',
										color: 'header-secondary',
										children: N.Z.Messages.MEDIA_CHANNEL_CHANGE_THUMBNAIL_LABEL
									}),
									null == T &&
										(0, a.jsx)(d.PencilIcon, {
											size: 'xs',
											color: 'currentColor',
											className: b.editIcon
										})
								]
							})
						]
					})
				: (0, a.jsxs)(a.Fragment, {
						children: [
							(0, a.jsx)(d.ImagePlusIcon, {
								size: 'custom',
								width: 39,
								height: 39,
								color: 'currentColor',
								className: b.uploadIcon
							}),
							(0, a.jsx)(d.Text, {
								variant: 'text-xs/normal',
								color: 'text-muted',
								children: N.Z.Messages.MEDIA_CHANNEL_UPLOAD_THUMBNAIL_LABEL
							})
						]
					})
		});
	return (0, a.jsx)('div', {
		className: b.thumbnailContainer,
		style: j,
		children:
			null != T
				? (0, a.jsx)(g.Z, {
						actions: (0, a.jsxs)(a.Fragment, {
							children: [
								(0, a.jsx)(_.Z, {
									className: b.action,
									tooltip: N.Z.Messages.ATTACHMENT_UTILITIES_MODIFY,
									onClick: O,
									children: (0, a.jsx)(d.PencilIcon, {
										size: 'xs',
										color: 'currentColor'
									})
								}),
								(0, a.jsx)(_.Z, {
									className: b.action,
									tooltip: N.Z.Messages.ATTACHMENT_UTILITIES_REMOVE,
									onClick: () => u.Z.remove(r.id, T.id, h.I.CREATE_FORUM_POST.drafts.type),
									dangerous: !0,
									children: (0, a.jsx)(d.TrashIcon, {
										size: 'md',
										color: 'currentColor'
									})
								})
							]
						}),
						draftType: h.I.CREATE_FORUM_POST.drafts.type,
						id: T.id,
						channelId: r.id,
						handleEditModal: O,
						keyboardModeEnabled: x,
						size: g.q.SMALL,
						className: b.attachmentListItem,
						children: Z
					})
				: (0, a.jsx)(a.Fragment, { children: Z })
	});
};
