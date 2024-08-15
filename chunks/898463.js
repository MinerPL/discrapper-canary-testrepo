n.d(t, {
	Z: function () {
		return y;
	},
	r: function () {
		return C;
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
	o = n(442837),
	l = n(481060),
	u = n(166459),
	c = n(95152),
	d = n(476326),
	_ = n(543651),
	E = n(377171),
	f = n(95398),
	h = n(70097),
	p = n(592125),
	m = n(956664),
	I = n(709054),
	T = n(273031),
	g = n(859235),
	S = n(689938),
	A = n(702284);
let N = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'video/quicktime', 'video/mp4'];
function v(e) {
	let { alt: t, spoiler: n, renderContent: a, size: s } = e,
		[o, l] = i.useState(!1);
	return (0, r.jsx)(f.a.Provider, {
		value: !n,
		children: (0, r.jsx)(f.Z, {
			containerStyles:
				s === g.q.CLIP
					? {
							borderBottomLeftRadius: 0,
							borderBottomRightRadius: 0,
							boxShadow: 'none'
						}
					: void 0,
			type: f.Z.Types.ATTACHMENT,
			onReveal: () => l(!0),
			className: A.spoilerContainer,
			children: (e) =>
				(0, r.jsxs)('div', {
					className: A.spoilerWrapper,
					children: [
						a(e),
						(0, r.jsxs)('div', {
							className: A.tags,
							children: [
								null != t && '' !== t
									? (0, r.jsx)('span', {
											className: A.altTag,
											children: S.Z.Messages.IMAGE_ALT
										})
									: null,
								o && n
									? (0, r.jsx)('span', {
											className: A.altTag,
											children: S.Z.Messages.SPOILER
										})
									: null
							]
						})
					]
				})
		})
	});
}
function O(e) {
	let { file: t, alt: n, spoiler: a, size: o = g.q.MEDIUM, onMouseEnter: u } = e,
		[c, d] = i.useState(),
		[_, E] = i.useState({
			width: 0,
			height: 0
		}),
		f = o === g.q.SMALL;
	i.useEffect(() => {
		if (null == t || !1 === N.includes(t.type)) return;
		let e = URL.createObjectURL(t);
		d(e);
		let n = new Image();
		return (
			(n.onload = () => {
				let { width: e, height: t } = (0, m.zp)(n.width, n.height);
				E({
					width: e,
					height: t
				});
			}),
			(n.src = e),
			() => {
				d(void 0),
					E({
						width: 0,
						height: 0
					}),
					URL.revokeObjectURL(e);
			}
		);
	}, [t]);
	let h = i.useCallback(
			function (e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				return null == c
					? (0, r.jsx)(r.Fragment, {})
					: (0, r.jsx)('img', {
							src: c,
							className: s()(A.media, {
								[A.spoiler]: e,
								[A.imageSmall]: f
							}),
							'aria-hidden': !0,
							alt: null != n ? n : '',
							style: t ? _ : {}
						});
			},
			[c, f, n, _]
		),
		p = i.useCallback(() => {
			if (null != c)
				(0, l.openModal)((e) =>
					(0, r.jsx)(l.ModalRoot, {
						className: A.__invalid_modal,
						...e,
						size: l.ModalSize.DYNAMIC,
						'aria-label': S.Z.Messages.IMAGE,
						children: h(!1, !0)
					})
				);
		}, [c, h]);
	return (0, r.jsx)('div', {
		onMouseEnter: u,
		className: s()(A.mediaContainer, { [A.imageSmall]: f }),
		children: (0, r.jsx)(l.Clickable, {
			onClick: p,
			className: A.clickableMedia,
			children: (0, r.jsx)(v, {
				size: o,
				alt: n,
				spoiler: a,
				renderContent: h
			})
		})
	});
}
function R(e) {
	let { file: t, alt: n, spoiler: a, size: o = g.q.MEDIUM, onMouseEnter: l, onVideoLoadError: u } = e,
		[c, d] = i.useState(),
		_ = i.useRef(null);
	return (
		i.useEffect(() => {
			if (null == t) return;
			let e = URL.createObjectURL(t);
			return (
				d(e),
				() => {
					d(void 0), URL.revokeObjectURL(e);
				}
			);
		}, [t]),
		(0, r.jsx)('div', {
			onMouseEnter: l,
			className: A.mediaContainer,
			children: (0, r.jsx)(v, {
				size: o,
				alt: n,
				spoiler: a,
				renderContent: (e) =>
					(0, r.jsx)(h.Z, {
						ref: _,
						src: c,
						className: s()(A.media, {
							[A.spoiler]: e,
							[A.sizeClip]: o === g.q.CLIP
						}),
						onError: u,
						preload: 'none',
						'aria-hidden': !0
					})
			})
		})
	);
}
function C(e) {
	var t;
	let { upload: n, size: a = g.q.MEDIUM, onMouseEnter: o } = e,
		[l, u] = i.useState(!1),
		c = a === g.q.SMALL;
	return n.isImage && n.item.platform === d.ow.WEB
		? (0, r.jsx)(O, {
				file: n.item.file,
				alt: n.description,
				spoiler: n.spoiler,
				size: a,
				onMouseEnter: o
			})
		: !l && n.isVideo && n.item.platform === d.ow.WEB
			? (0, r.jsx)(R, {
					file: n.item.file,
					size: a,
					alt: n.description,
					spoiler: n.spoiler,
					onMouseEnter: o,
					onVideoLoadError: () => u(!0)
				})
			: (0, r.jsx)('div', {
					onMouseEnter: o,
					className: s()(A.icon, A.__invalid_imageContainer, {
						[A[null !== (t = n.classification) && void 0 !== t ? t : '']]: !0,
						[A.imageSmall]: c
					}),
					children: (0, r.jsx)('div', {
						className: A.tags,
						children: n.spoiler
							? (0, r.jsx)('span', {
									className: A.altTag,
									children: S.Z.Messages.SPOILER
								})
							: null
					})
				});
}
function y(e) {
	let { channelId: t, draftType: n, upload: a, keyboardModeEnabled: d, label: f, size: h = g.q.MEDIUM, canEdit: m = !0, hideFileName: N = !1, clip: v } = e,
		O = null != v,
		R = (h = O ? g.q.CLIP : h) === g.q.SMALL,
		y = (0, o.e7)([p.Z], () => {
			var e;
			return null === (e = p.Z.getChannel(t)) || void 0 === e ? void 0 : e.guild_id;
		}),
		D = (e) => {
			e.stopPropagation(),
				(0, l.openModal)((e) =>
					(0, r.jsx)(c.default, {
						...e,
						draftType: n,
						upload: a,
						channelId: t,
						onSubmit: (e) => {
							let { name: r, description: i, spoiler: s } = e;
							u.Z.update(t, a.id, n, {
								filename: r,
								description: i,
								spoiler: s
							});
						}
					})
				);
		};
	return (0, r.jsxs)(g.Z, {
		actions: (0, r.jsxs)(i.Fragment, {
			children: [
				m
					? (0, r.jsx)(T.Z, {
							className: s()({ [A.action]: R }),
							tooltip: O ? S.Z.Messages.CLIPS_ATTACHMENT_UTILITIES_SPOILER : S.Z.Messages.ATTACHMENT_UTILITIES_SPOILER,
							onClick: () => u.Z.update(t, a.id, n, { spoiler: !a.spoiler }),
							children: a.spoiler
								? (0, r.jsx)(l.EyeSlashIcon, {
										size: 'md',
										color: 'currentColor',
										className: s()({ [A.actionBarIcon]: R })
									})
								: (0, r.jsx)(l.EyeIcon, {
										size: 'xs',
										color: 'currentColor',
										className: s()({ [A.actionBarIcon]: R })
									})
						})
					: null,
				m && !O
					? (0, r.jsx)(T.Z, {
							className: s()({ [A.action]: R }),
							tooltip: S.Z.Messages.ATTACHMENT_UTILITIES_MODIFY,
							onClick: D,
							children: (0, r.jsx)(l.PencilIcon, {
								size: 'xs',
								color: 'currentColor',
								className: s()({ [A.actionBarIcon]: R })
							})
						})
					: null,
				(0, r.jsx)(T.Z, {
					className: s()({ [A.action]: R }),
					tooltip: O ? S.Z.Messages.CLIPS_ATTACHMENT_UTILITIES_REMOVE : S.Z.Messages.ATTACHMENT_UTILITIES_REMOVE,
					onClick: () => u.Z.remove(t, a.id, n),
					dangerous: !0,
					children: (0, r.jsx)(l.TrashIcon, {
						size: 'md',
						color: 'currentColor',
						className: s()({ [A.actionBarIcon]: R })
					})
				})
			]
		}),
		draftType: n,
		id: a.id,
		channelId: t,
		handleEditModal: D,
		keyboardModeEnabled: d,
		size: h,
		className: s()({ [A.attachmentItemSmall]: R }),
		children: [
			(0, r.jsx)(C, {
				upload: a,
				size: h
			}),
			!N &&
				!O &&
				(0, r.jsx)('div', {
					className: A.filenameContainer,
					children: (0, r.jsx)(l.Text, {
						className: A.filename,
						variant: 'text-sm/normal',
						children: null != f ? f : a.filename
					})
				}),
			O &&
				(0, r.jsxs)(r.Fragment, {
					children: [
						(0, r.jsx)(_.Z, {
							className: A.clipsFooter,
							createdAt: I.default.extractTimestamp(v.id),
							participantIds: v.users,
							applicationId: v.applicationId,
							title: v.name,
							guildId: y
						}),
						(0, r.jsx)(l.TextBadge, {
							color: E.Z.BG_BRAND,
							className: A.clipsBadge,
							text: S.Z.Messages.CLIP_TAG
						})
					]
				})
		]
	});
}
