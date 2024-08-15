t.d(n, {
	Ld: function () {
		return S;
	},
	OB: function () {
		return V;
	},
	R_: function () {
		return L;
	},
	aw: function () {
		return _;
	},
	pU: function () {
		return F;
	}
}),
	t(789020),
	t(47120);
var i = t(735250),
	o = t(470079),
	s = t(120356),
	l = t.n(s),
	a = t(481060),
	r = t(162609),
	u = t(370298),
	d = t(95398),
	m = t(167080),
	c = t(163268),
	h = t(25610),
	I = t(947849),
	x = t(124347),
	p = t(976853),
	g = t(592125),
	C = t(626135),
	j = t(630388),
	f = t(956664),
	M = t(406432),
	T = t(169525),
	y = t(65838),
	v = t(217702),
	E = t(981631),
	N = t(689938),
	O = t(670347),
	w = t(458857);
let A = /\.(mp3|m4a|ogg|wav|flac)$/i,
	L = (e) => 'IMAGE' === e || 'VIDEO' === e || 'CLIP' === e,
	S = (e) => 'IMAGE' === e || 'VIDEO' === e;
function V(e, n) {
	return {
		uniqueId: e.id,
		originalItem: e,
		type: _(e, n),
		downloadUrl: e.url,
		height: e.height,
		width: e.width,
		spoiler: e.spoiler,
		contentType: e.content_type
	};
}
function _(e, n) {
	let { filename: t, width: i, height: o } = e;
	if (n && null != i && i > 0 && null != o && o > 0) {
		if ((0, M.CO)(t)) return 'IMAGE';
		if (!(0, M.NU)(t) || null == e.proxy_url) return 'INVALID';
		else {
			var s;
			return (0, j.yE)(null !== (s = e.flags) && void 0 !== s ? s : 0, E.J0y.IS_CLIP) ? 'CLIP' : 'VIDEO';
		}
	}
	if (null != n && A.test(t) && null != e.url) return 'AUDIO';
	if (null != e.url && (0, y.O)(t)) return 'PLAINTEXT_PREVIEW';
	return 'OTHER';
}
function F(e, n) {
	let { contentType: t, width: i, height: o } = e;
	if (n && i > 0 && o > 0) return (0, M.tw)(t) ? 'IMAGE' : (0, M.X2)(t) ? 'VIDEO' : 'INVALID';
	return 'OTHER';
}
let P = (e) => {
	let n,
		t,
		s,
		{
			mimeType: r,
			downloadURL: d,
			onRemoveItem: c,
			showDownload: h,
			showImageAppPicker: I,
			isVisualMediaType: x,
			channelId: p
		} = e;
	h &&
		(n = (0, i.jsx)(a.Tooltip, {
			text: N.Z.Messages.DOWNLOAD,
			children: (e) =>
				(0, i.jsx)(m.Z, {
					...e,
					target: '_blank',
					rel: 'noreferrer noopener',
					className: w.hoverButton,
					iconClassName: O.downloadHoverButtonIcon,
					focusProps: { offset: 2 },
					href: d,
					mimeType: r
				})
		})),
		null != c &&
			(t = (0, i.jsx)(a.Tooltip, {
				text: N.Z.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
				children: (e) =>
					(0, i.jsx)(a.Clickable, {
						...e,
						className: l()(w.hoverButton, O.removeMosaicItemHoverButton),
						focusProps: { offset: 2 },
						onClick: c,
						'aria-label': N.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
						children: (0, i.jsx)(a.TrashIcon, {
							size: 'custom',
							color: 'currentColor',
							width: 20,
							height: 20
						})
					})
			}));
	let [g, C] = o.useState(!1),
		j = o.useCallback(() => C((e) => !e), []);
	return (I &&
		(s = (0, i.jsx)(u.Z, {
			toggleShowMenu: j,
			showMenu: g,
			channelId: p,
			className: l()(w.hoverButton, { [w.selected]: g }),
			imageUrl: d,
			mimeType: r
		})),
	null == t && null == n && null == s)
		? null
		: (0, i.jsxs)('div', {
				className: l()(w.hoverButtonGroup, {
					[w.nonMediaMosaicItem]: !x,
					[w.forceShowHover]: g
				}),
				children: [s, n, t]
			});
};
function k(e) {
	let {
			message: n,
			item: t,
			autoPlayGif: s,
			canRemoveItem: u,
			onRemoveItem: d,
			onClick: m,
			onContextMenu: c,
			onPlay: h,
			renderImageComponent: j,
			renderVideoComponent: M,
			renderAudioComponent: T,
			renderPlaintextFilePreview: y,
			renderGenericFileComponent: w,
			className: A,
			imgContainerClassName: L,
			imgClassName: S,
			focusable: V,
			hiddenSpoilers: _,
			mediaLayoutType: F,
			maxWidth: k,
			maxHeight: H,
			hasFooter: D,
			useFullWidth: b,
			isVisualMediaType: G,
			onVideoControlsShow: B,
			onVideoControlsHide: W,
			isSearchResult: R
		} = e,
		{ width: Z, height: U, spoiler: q, type: X, contentType: z } = t,
		[J, $] = o.useState(!1),
		[K, Q] = o.useState(!1),
		Y = n.getChannelId(),
		ee = g.Z.getChannel(Y),
		en = (0, p.Z)(Y),
		et = r.P.useExperiment({ location: 'MediaMosaicItem' }, { autoTrackExposure: !0 }).imageRecsEnabled,
		ei = o.useMemo(() => (null != z && -1 !== z.indexOf('/') ? z.split('/') : ['unknown', 'unknown']), [z]),
		eo = 'IMAGE' === X && !x.u.test(t.downloadUrl),
		es = !1;
	if (G) {
		(null == Z || null == U) && (es = !0);
		let e = (0, f.Dc)({
			width: null != Z ? Z : 0,
			height: null != U ? U : 0,
			maxWidth: v.mT,
			maxHeight: v.Jj
		});
		!b && (e * (null != Z ? Z : 0) < v.OF || e * (null != U ? U : 0) < v.OF) && (es = !0);
	}
	let el = o.useCallback(() => {
			d(t);
		}, [t, d]),
		ea = o.useCallback(
			(e) => {
				eo &&
					!es &&
					!0 !== R &&
					(e && !K
						? (Q(!0),
							C.default.track(E.rMx.IMAGE_HOVERED, {
								guild_id: null == ee ? void 0 : ee.guild_id,
								channel_id: null == ee ? void 0 : ee.id,
								image_recommendations_shown: et
							}))
						: !e && K && Q(!1));
			},
			[K, ee, et, eo, es, R]
		),
		er = o.useCallback(() => {
			if (F === v.hV.MOSAIC) {
				let e = (!en && ['VIDEO', 'CLIP', 'AUDIO'].includes(X)) || 'OTHER' === X;
				return es
					? null
					: !J &&
							(0, i.jsx)(P, {
								mimeType: ei,
								downloadURL: t.downloadUrl,
								showDownload: e,
								showImageAppPicker: eo && et && !0 !== R,
								onRemoveItem: u ? el : void 0,
								isVisualMediaType: G,
								channelId: Y
							});
			}
			return (
				u &&
				(0, i.jsx)(a.Clickable, {
					className: q ? O.spoilerRemoveMosaicItemButton : O.removeMosaicItemButton,
					focusProps: { offset: { bottom: 4 } },
					onClick: () => d(t),
					'aria-label': N.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
					children: (0, i.jsx)(a.XSmallIcon, {
						size: 'xs',
						color: 'currentColor'
					})
				})
			);
		}, [F, u, q, X, G, J, t, ei, el, d, et, en, Y, eo, es, R]);
	switch (X) {
		case 'IMAGE':
			return (0, i.jsx)(I.h.Consumer, {
				children: (e) =>
					(0, i.jsx)(j, {
						item: t,
						message: n,
						width: Z,
						height: U,
						autoPlay: s && !_,
						onClick: m,
						onContextMenu: c,
						shouldHideMediaOptions: en,
						renderAccessory: e,
						renderAdjacentContent: er,
						containerClassName: A,
						className: L,
						imageClassName: S,
						shouldLink: V,
						hiddenSpoilers: _,
						responsive: !0,
						mediaLayoutType: F,
						maxWidth: k,
						maxHeight: H,
						useFullWidth: b,
						onMouseEnter: () => ea(!0),
						onMouseLeave: () => ea(!1)
					})
			});
		case 'VIDEO':
		case 'CLIP':
			return (0, i.jsx)(M, {
				item: t,
				message: n,
				width: Z,
				height: U,
				onClick: m,
				onContextMenu: c,
				renderAdjacentContent: er,
				naturalWidth: Z,
				naturalHeight: U,
				className: l()(A, { [O.hasFooter]: D }),
				playable: V,
				responsive: !0,
				mediaLayoutType: F,
				maxWidth: k,
				maxHeight: H,
				useFullWidth: b,
				mimeType: ei,
				onControlsShow: B,
				onControlsHide: W,
				downloadable: !en,
				mediaPlayerClassName: D ? O.hasFooter : void 0
			});
		case 'AUDIO':
			return (0, i.jsx)(T, {
				item: t,
				message: n,
				className: A,
				playable: V,
				mimeType: ei,
				renderAdjacentContent: er,
				onVolumeShow: () => $(!0),
				onVolumeHide: () => $(!1),
				onPlay: h
			});
		case 'PLAINTEXT_PREVIEW':
			return (0, i.jsx)(y, {
				item: t,
				message: n,
				className: A,
				onClick: m,
				onContextMenu: c,
				renderAdjacentContent: er
			});
		case 'OTHER':
			return (0, i.jsx)(w, {
				item: t,
				message: n,
				className: A,
				onClick: m,
				onContextMenu: c,
				renderAdjacentContent: er
			});
		case 'INVALID':
			return null;
	}
}
n.ZP = function (e) {
	var n;
	let {
			className: t,
			item: s,
			message: a,
			getObscureReason: r,
			useFullWidth: u,
			mediaLayoutType: m,
			isSingleMosaicItem: I,
			footer: x,
			...p
		} = e,
		{ width: g, height: C, type: j } = s,
		M = r(s, (0, h.V)(a.channel_id, a.author.id)),
		[y, E] = o.useState(null != M),
		N = m === v.hV.MOSAIC,
		w = !N && ((null != g && g < 200) || (null != C && C < 50));
	let A = 'IMAGE' === (n = j) || 'VIDEO' === n,
		S = L(j),
		V = I && null != M && (0, c.bR)(g, C),
		[_, F] = o.useState(!1),
		P = () => {
			F(!0);
		},
		H = () => {
			F(!1);
		},
		D = function () {
			let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
			return (0, i.jsx)(k, {
				...p,
				item: s,
				message: a,
				getObscureReason: r,
				hiddenSpoilers: e,
				className: l()(t, O.mosaicItemContent, {
					[O.obscured]: y && !w,
					[O.hiddenSpoiler]: y && M === T.wk.SPOILER,
					[O.hiddenExplicit]: y && null != M && [T.wk.EXPLICIT_CONTENT, T.wk.POTENTIAL_EXPLICIT_CONTENT].includes(M),
					[O.hiddenMosaicItem]: y && e,
					[O.inline]: y && w
				}),
				focusable: !e,
				mediaLayoutType: m,
				hasFooter: null != x,
				useFullWidth: !!V || u,
				isVisualMediaType: S,
				onVideoControlsShow: P,
				onVideoControlsHide: H
			});
		};
	return (0, i.jsx)(i.Fragment, {
		children: (0, i.jsxs)('div', {
			className: l()(O.mosaicItem, {
				[O.mosaicItemNoJustify]: A,
				[O.mosaicItemFullWidth]: u,
				[O.mosaicItemMediaMosaic]: N,
				[O.hideOverflow]: N && S,
				[O.mosaicItemWithFooter]: null != x
			}),
			children: [
				null != M
					? (0, i.jsx)(d.Z, {
							type: d.Z.Types.ATTACHMENT,
							inline: w,
							reason: M,
							isSingleMosaicItem: I,
							obscured: y,
							containerStyles: (function (e, n, t) {
								if (!n) return;
								let i = e.width;
								if (void 0 !== e.width && void 0 !== e.height) {
									let { width: n } = (0, f.Tj)({
										width: e.width,
										height: e.height,
										maxWidth: 400,
										maxHeight: 300
									});
									i = n;
								}
								return {
									...(t !== v.hV.MOSAIC && { maxWidth: null != i ? i : '400px' }),
									width: '100%',
									height: '100%',
									justifySelf: 'auto'
								};
							})(s, A, m),
							obscurityControlClassName: l()({ [O.obscureVideoSpacing]: 'VIDEO' === j && I && !y && _ }),
							onToggleObscurity: () => E((e) => !e),
							children: (e) => D(e)
						})
					: D(),
				x
			]
		})
	});
};
