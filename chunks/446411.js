n.d(t, {
	BC: function () {
		return R;
	},
	ZP: function () {
		return W;
	}
}),
	n(47120),
	n(653041);
var l,
	r = n(735250),
	i = n(470079),
	a = n(120356),
	o = n.n(a),
	s = n(481060),
	d = n(370298),
	u = n(95398),
	m = n(947849),
	h = n(624195),
	c = n(44824),
	p = n(124347),
	b = n(283756),
	g = n(169525),
	f = n(780088),
	v = n(785992),
	x = n(400266),
	y = n(592125),
	I = n(52824),
	w = n(626135),
	_ = n(585483),
	C = n(55935),
	S = n(408433),
	E = n(956664),
	j = n(468846),
	M = n(401419),
	T = n(249458),
	N = n(981631),
	A = n(217702),
	F = n(689938),
	k = n(592733),
	L = n(458857),
	H = n(910212),
	V = n(736514);
function B(e, t, n) {
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
function R(e) {
	let {
			className: t,
			iframeWrapperClassName: n,
			maxWidth: l,
			maxHeight: a,
			thumbnail: s,
			video: d,
			provider: u,
			allowFullScreen: m = !0,
			responsive: h = !1,
			renderImageComponent: c,
			renderVideoComponent: p,
			renderLinkComponent: g,
			renderForwardComponent: f = N.VqG,
			playable: v = !0,
			autoPlay: x = !1,
			autoMute: y,
			volume: w,
			onPlay: C,
			onPause: S,
			onEnded: M,
			onControlsHide: T,
			onControlsShow: A,
			onVolumeChange: F,
			onMute: L,
			href: H,
			messageId: V,
			channelId: B,
			placeholder: R,
			placeholderVersion: P
		} = e,
		[W, O] = i.useState(x),
		D = null != d && null == d.proxyURL,
		G = i.useCallback(() => O(!1), [O]),
		Z = (e) => {
			e.preventDefault(),
				e.stopPropagation(),
				null == C || C(!1),
				O(!0),
				D &&
					(_.S.dispatch(N.CkL.VIDEO_EMBED_PLAYBACK_STARTED), _.S.subscribeOnce(N.CkL.VIDEO_EMBED_PLAYBACK_STARTED, G));
		};
	i.useEffect(
		() => () => {
			D && _.S.unsubscribe(N.CkL.VIDEO_EMBED_PLAYBACK_STARTED, G);
		},
		[D, G]
	);
	let { width: U, height: q } = s;
	null != d && ((U = d.width), (q = d.height));
	let z = (0, E.Tj)({
		width: U,
		height: q,
		maxWidth: l,
		maxHeight: a
	});
	(U = Math.max(z.width, 150)), (q = Math.max(z.height, 144));
	let K = (0, I.q)(s);
	if (null != d && null != d.proxyURL)
		return (0, r.jsx)('div', {
			className: o()(k.embedVideo, t),
			children: p({
				poster: K,
				src: d.proxyURL,
				placeholder: R,
				placeholderVersion: P,
				width: U,
				height: q,
				responsive: h,
				autoPlay: x,
				onEnded: M,
				naturalWidth: d.width,
				naturalHeight: d.height,
				onVolumeChange: F,
				playable: v,
				autoMute: y,
				volume: w,
				onPlay: C,
				onPause: S,
				onMute: L,
				onControlsHide: T,
				onControlsShow: A,
				renderForwardComponent: f
			})
		});
	if (W && null != d) {
		let e;
		let i = !0 === y || ('function' == typeof y && y()),
			s = {
				width: U,
				height: q
			},
			c = {
				width: U,
				height: q
			};
		if (h) {
			let t = 0 !== U ? q / U : 1;
			(s = {
				maxWidth: l,
				maxHeight: a,
				width: void 0,
				height: void 0
			}),
				(c = {
					paddingBottom: ''.concat(100 * t, '%'),
					maxWidth: U
				}),
				(e = {
					position: 'absolute',
					top: 0,
					left: 0,
					maxWidth: U,
					maxHeight: q
				});
		}
		return (0, r.jsx)('div', {
			className: t,
			style: s,
			children: (0, r.jsx)('div', {
				className: o()(k.embedVideo, n),
				style: c,
				children: (0, r.jsx)(j.ZP, {
					provider: u,
					src: d.url,
					style: e,
					width: U,
					height: q,
					allowFullScreen: m,
					autoMute: i
				})
			})
		});
	}
	return (0, r.jsxs)('div', {
		className: o()(k.embedVideo, t),
		style: h
			? { maxWidth: U }
			: {
					width: U,
					height: q
				},
		children: [
			c({
				src: K,
				width: U,
				height: q,
				maxWidth: U,
				maxHeight: q,
				responsive: h,
				containerClassName: k.embedVideoImageComponent,
				imageClassName: k.embedVideoImageComponentInner,
				placeholder: R,
				placeholderVersion: P,
				onClick: v && null != d ? Z : null,
				renderForwardComponent: f
			}),
			(0, r.jsx)('div', {
				className: k.embedVideoActions,
				children: (0, r.jsx)('div', {
					className: k.centerContent,
					children: v
						? (0, r.jsx)(b.Z, {
								onPlay: null != d ? Z : null,
								externalURL: H,
								renderLinkComponent: g,
								messageId: V,
								channelId: B
							})
						: null
				})
			})
		]
	});
}
function P(e) {
	let {
		className: t,
		href: n,
		autoPlay: l,
		maxWidth: i,
		maxHeight: a,
		thumbnail: s,
		video: d,
		renderImageComponent: u,
		renderForwardComponent: m,
		responsive: h,
		alt: p,
		disableAltTextDisplay: b = !1,
		playable: g = !0,
		hiddenSpoilers: f,
		placeholder: v,
		placeholderVersion: x
	} = e;
	return (0, r.jsx)(c.Z, {
		className: o()(k.embedVideo, t),
		original: n,
		poster: (0, I.q)(s),
		src: (0, I.q)(d),
		alt: p,
		width: s.width,
		height: s.height,
		naturalHeight: d.height,
		naturalWidth: d.width,
		maxWidth: i,
		maxHeight: a,
		responsive: h,
		autoPlay: l,
		playable: g,
		renderImageComponent: u,
		renderForwardComponent: m,
		hiddenSpoilers: f,
		disableAltTextDisplay: b,
		placeholder: v,
		placeholderVersion: x
	});
}
class W extends (l = i.PureComponent) {
	renderProvider() {
		let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
			{
				embed: { provider: t },
				renderLinkComponent: n,
				messageId: l,
				channelId: i
			} = this.props;
		return null == t
			? null
			: (0, r.jsx)('div', {
					className: o()(k.embedProvider, k.embedMargin),
					children:
						null != t.url
							? n({
									className: k.embedLink,
									href: t.url,
									tabIndex: e ? 0 : -1,
									children: t.name,
									target: '_blank',
									rel: 'noreferrer noopener',
									messageId: l,
									channelId: i
								})
							: (0, r.jsx)('span', { children: t.name })
				});
	}
	renderAuthor() {
		let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
			{
				embed: { author: t },
				renderLinkComponent: n,
				messageId: l,
				channelId: i
			} = this.props;
		return null == t
			? null
			: (0, r.jsxs)('div', {
					className: o()(k.embedAuthor, k.embedMargin),
					children: [
						null != t.iconProxyURL
							? (0, r.jsx)('img', {
									alt: '',
									className: k.embedAuthorIcon,
									src: t.iconProxyURL
								})
							: null,
						null != t.url
							? n({
									className: k.embedAuthorNameLink,
									href: t.url,
									tabIndex: e ? 0 : -1,
									children: t.name,
									target: '_blank',
									rel: 'noreferrer noopener',
									messageId: l,
									channelId: i
								})
							: (0, r.jsx)('span', {
									className: k.embedAuthorName,
									children: t.name
								})
					]
				});
	}
	renderTitle() {
		let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
			{ embed: t, renderLinkComponent: n, renderTitle: l, messageId: i, channelId: a } = this.props,
			{ rawTitle: s, url: d } = t;
		return null == s
			? null
			: (0, r.jsx)('div', {
					className: o()(k.embedTitle, k.embedMargin),
					children:
						null != d
							? n({
									className: k.embedTitleLink,
									href: d,
									tabIndex: e ? 0 : -1,
									children: l(t, s),
									target: '_blank',
									rel: 'noreferrer noopener',
									messageId: i,
									channelId: a
								})
							: l(t, s)
				});
	}
	renderDescription() {
		let { embed: e, renderDescription: t } = this.props,
			{ rawDescription: n } = e;
		return null == n
			? null
			: (0, r.jsx)('div', {
					className: o()(k.embedDescription, k.embedMargin),
					children: t(e, n, !1)
				});
	}
	renderThumbnail() {
		let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
			{
				embed: { thumbnail: t },
				maxThumbnailWidth: n,
				maxThumbnailHeight: l,
				renderImageComponent: i,
				renderForwardComponent: a,
				autoPlayGif: o
			} = this.props;
		return null == t
			? null
			: (0, r.jsx)(T.G.Consumer, {
					children: (r) => {
						let { disableAnimations: s } = r;
						return i({
							containerClassName: k.embedThumbnail,
							src: (0, I.q)(t),
							original: t.url,
							width: t.width,
							height: t.height,
							maxWidth: n,
							maxHeight: l,
							shouldLink: e,
							autoPlay: o && !s,
							renderForwardComponent: a
						});
					}
				});
	}
	renderFields() {
		let { embed: e } = this.props,
			{ fields: t } = e;
		if (null == t || 0 === t.length) return null;
		let n = [],
			l = null;
		return (
			t.forEach((t) => {
				let { rawName: r, rawValue: i, inline: a } = t;
				!a && null != l && (n.push(l), (l = null)),
					null == l && (l = []),
					l.push([this.props.renderTitle(e, r), this.props.renderDescription(e, i, !0)]),
					(3 === l.length || !a) && (n.push(l), (l = null));
			}),
			null != l && n.push(l),
			(0, r.jsx)('div', {
				className: k.embedFields,
				children: n.map((e, t) => {
					let { length: n } = e;
					return e.map((e, l) => {
						let [i, a] = e;
						return (0, r.jsxs)(
							'div',
							{
								className: k.embedField,
								style: {
									gridColumn: (function (e, t) {
										let n = 12 / t,
											l = e * n;
										return ''.concat(l + 1, ' / ').concat(l + n + 1);
									})(l, n)
								},
								children: [
									(0, r.jsx)('div', {
										className: k.embedFieldName,
										children: i
									}),
									(0, r.jsx)('div', {
										className: k.embedFieldValue,
										children: a
									})
								]
							},
							''.concat(t, '-').concat(l)
						);
					});
				})
			})
		);
	}
	renderImages() {
		let { hiddenSpoiler: e = !1, isVisible: t = !0 } =
				arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
			{ embed: n } = this.props,
			{ maxMediaHeight: l } = this.state;
		if (null == n.images) return null;
		let [i, a, o, s] = n.images.map((l) =>
			this.renderImage({
				hiddenSpoiler: e,
				isVisible: t,
				image: l,
				isGalleryImage: !0,
				allImages: n.images
			})
		);
		return null == i && null == a && null == o && null == s
			? null
			: (0, r.jsxs)('div', {
					className: k.embedGalleryImagesWrapper,
					style: { height: l },
					children: [
						(0, r.jsxs)('div', {
							className: k.embedGallerySide,
							children: [i, null != s && o]
						}),
						(0, r.jsxs)('div', {
							className: k.embedGallerySide,
							children: [a, null == s && null != o && o, null != s && s]
						})
					]
				});
	}
	renderImageHoverButtons(e) {
		let { mimeType: t, downloadURL: n, isVisualMediaType: l, channelId: i } = e;
		return (0, r.jsx)('div', {
			className: o()(L.hoverButtonGroup, {
				[L.nonMediaMosaicItem]: !l,
				[L.forceShowHover]: this.state.showImageAppMenu
			}),
			children: (0, r.jsx)(d.Z, {
				toggleShowMenu: () => {
					this.setState({ showImageAppMenu: !this.state.showImageAppMenu });
				},
				showMenu: this.state.showImageAppMenu,
				channelId: i,
				className: o()(L.hoverButton, { [L.selected]: this.state.showImageAppMenu }),
				imageUrl: n,
				mimeType: t
			})
		});
	}
	handleImageHover(e, t, n) {
		if (n) {
			if (e && !this.state.isImageHovered) {
				this.setState({ isImageHovered: !0 });
				let e = y.Z.getChannel(this.props.channelId);
				w.default.track(N.rMx.IMAGE_HOVERED, {
					guild_id: null == e ? void 0 : e.guild_id,
					channel_id: null == e ? void 0 : e.id,
					image_recommendations_shown: this.props.showImageRecs
				});
			} else !e && this.state.isImageHovered && this.setState({ isImageHovered: !1 });
		}
	}
	renderImage() {
		var e;
		let {
				hiddenSpoiler: t = !1,
				isVisible: n = !0,
				image: l,
				isGalleryImage: i = !1,
				alt: a = F.Z.Messages.IMAGE,
				allImages: s = null
			} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
			{ renderImageComponent: d, className: u, autoPlayGif: h, renderForwardComponent: c } = this.props,
			{ maxMediaWidth: b, maxMediaHeight: g } = this.state;
		if (null == l) return null;
		let v = (0, I.q)(l),
			x = null == s ? {} : (0, f.Cx)(s.map((e) => (0, f.nP)(e, c))),
			y = p.Z.isAnimated({
				src: (0, I.q)(l),
				original: l.url,
				animated: !1
			}),
			w = {
				containerClassName: o()(u, {
					[k.embedMedia]: !i,
					[k.embedImage]: !i,
					[k.galleryImage]: i
				}),
				imageContainerClassName: i ? k.galleryImageContainer : void 0,
				imageClassName: i ? k.embedGalleryImageElement : void 0,
				src: (0, I.q)(l),
				alt: a,
				responsive: !0,
				limitResponsiveWidth: !i,
				width: l.width,
				height: l.height,
				maxWidth: b,
				maxHeight: g,
				original: l.url,
				shouldLink: n,
				disableAltTextDisplay: !0,
				hiddenSpoilers: t,
				placeholder: l.placeholder,
				placeholderVersion: l.placeholderVersion,
				renderForwardComponent: c
			};
		v in x && (w.onClick = x[v]);
		let _ = null === (e = l.url.split('.').pop()) || void 0 === e ? void 0 : e.split('?')[0],
			C = null != l && !p.u.test(null == l ? void 0 : l.url),
			S =
				!0 !== this.props.isSearchResult &&
				n &&
				null != this.props.channelId &&
				void 0 !== this.props.channelId &&
				C &&
				!(function (e) {
					return null != e && (e.width <= A.OF || e.height <= A.OF);
				})(l) &&
				null != _;
		return (0, r.jsx)(m.h.Consumer, {
			children: (e) =>
				(0, r.jsx)(
					T.G.Consumer,
					{
						children: (n) => {
							let { disableAnimations: r } = n;
							return d({
								...w,
								autoPlay: h && !r && !t,
								renderAccessory: y ? e : null,
								onMouseEnter: () => this.handleImageHover(!0, l, S),
								onMouseLeave: () => this.handleImageHover(!1, l, S),
								renderAdjacentContent: () => {
									var e;
									return !0 === this.props.showImageRecs && S
										? this.renderImageHoverButtons({
												mimeType: ['image', _],
												downloadURL: null !== (e = l.proxyURL) && void 0 !== e ? e : l.url,
												isVisualMediaType: null != l,
												channelId: this.props.channelId
											})
										: null;
								}
							});
						}
					},
					l.url
				)
		});
	}
	renderVideo() {
		let {
				gifv: e = !1,
				isVisible: t = !0,
				hiddenSpoiler: n = !1
			} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
			{
				embed: { url: l, thumbnail: i, video: a, provider: o },
				renderVideoComponent: s,
				renderImageComponent: d,
				renderLinkComponent: u,
				renderForwardComponent: m,
				allowFullScreen: h,
				autoPlayGif: c,
				messageId: p,
				channelId: b,
				obscureReason: g
			} = this.props,
			{ maxMediaWidth: f, maxMediaHeight: v } = this.state;
		if (null == l || null == i) return null;
		if (e)
			return null == a
				? null
				: (0, r.jsx)(T.G.Consumer, {
						children: (e) => {
							let { disableAnimations: o } = e;
							return (0, r.jsx)(P, {
								className: k.embedMedia,
								href: l,
								thumbnail: i,
								video: a,
								maxWidth: f,
								maxHeight: v,
								responsive: !0,
								autoPlay: !n && c && !o && t,
								renderImageComponent: d,
								renderForwardComponent: m,
								playable: t,
								hiddenSpoilers: n,
								disableAltTextDisplay: null != g,
								placeholder: a.placeholder,
								placeholderVersion: a.placeholderVersion
							});
						}
					});
		return (0, r.jsx)(R, {
			className: k.embedMedia,
			href: l,
			allowFullScreen: h,
			thumbnail: i,
			video: a,
			provider: null == o ? void 0 : o.name,
			maxWidth: f,
			maxHeight: v,
			responsive: !0,
			renderImageComponent: d,
			renderVideoComponent: s,
			renderLinkComponent: u,
			renderForwardComponent: m,
			onControlsShow: () => {
				this.setState({ videoControlsShown: !0 });
			},
			onControlsHide: () => {
				this.setState({ videoControlsShown: !1 });
			},
			playable: t && !n,
			messageId: p,
			channelId: b,
			placeholder: null == a ? void 0 : a.placeholder,
			placeholderVersion: null == a ? void 0 : a.placeholderVersion
		});
	}
	renderFooter() {
		let { footer: e, timestamp: t } = this.props.embed;
		if (null != e) {
			let n = null != e.iconProxyURL && '' !== e.iconProxyURL ? e.iconProxyURL : e.iconURL;
			return (0, r.jsxs)('div', {
				className: o()(k.embedFooter, k.embedMargin),
				children: [
					null != n
						? (0, r.jsx)('img', {
								alt: '',
								className: k.embedFooterIcon,
								src: n
							})
						: null,
					(0, r.jsxs)('span', {
						className: k.embedFooterText,
						children: [
							e.text,
							null != e.text && null != t
								? (0, r.jsx)('span', {
										className: k.embedFooterSeparator,
										children: '\u2022'
									})
								: null,
							null != t ? (0, C.Y4)(t) : null
						]
					})
				]
			});
		}
		if (null != t)
			return (0, r.jsx)('div', {
				className: o()(k.embedFooter, k.embedMargin),
				children: (0, r.jsx)('span', {
					className: k.embedFooterText,
					children: (0, C.Y4)(t)
				})
			});
	}
	renderMedia() {
		let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
			{ embed: t } = this.props,
			{ isVisible: n } = this.state;
		switch (t.type) {
			case N.hBH.GIFV:
				return this.renderVideo({
					gifv: !0,
					hiddenSpoiler: e,
					isVisible: n
				});
			case N.hBH.VIDEO:
			default:
				if (null != t.video)
					return this.renderVideo({
						gifv: !1,
						hiddenSpoiler: e,
						isVisible: n
					});
				if (null != t.images)
					return this.renderImages({
						hiddenSpoiler: e,
						isVisible: n
					});
				return this.renderImage({
					hiddenSpoiler: e,
					isVisible: n,
					image: t.image,
					alt: t.rawTitle
				});
		}
	}
	renderAll() {
		let e, t;
		let { embed: n, hideMedia: l } = this.props,
			{ isVisible: r } = this.state,
			i = this.renderProvider(r),
			a = this.renderAuthor(r),
			o = this.renderTitle(r);
		switch (n.type) {
			case N.hBH.IMAGE:
			case N.hBH.VIDEO:
			case N.hBH.GIFV:
				break;
			default:
				e = this.renderDescription();
		}
		let s = this.renderFields();
		!l && (t = this.renderMedia(!r));
		let d = this.renderFooter(),
			u = null == t;
		return (
			n.type === N.hBH.RICH && (u = null == n.video),
			{
				provider: i,
				author: a,
				title: o,
				description: e,
				thumbnail: !l && u ? this.renderThumbnail(r) : null,
				fields: s,
				media: t,
				footer: d
			}
		);
	}
	getMaxWidth(e) {
		let {
				embed: { image: t, images: n, video: l, type: r, thumbnail: i }
			} = this.props,
			{ maxMediaWidth: a, maxMediaHeight: o } = this.state,
			s = null != t ? t : l;
		if (null == s) return;
		let { width: d } = (0, E.Tj)({
			width: s.width,
			height: s.height,
			maxWidth: a,
			maxHeight: o
		});
		if (!e && (r === N.hBH.VIDEO || d >= 300)) return d + 32;
		if (r === N.hBH.RICH && void 0 !== n) return 520;
		if (r === N.hBH.GIFV) {
			var u, m, h, c;
			let { width: e } = (0, E.Tj)({
				width: Math.max(
					null !== (u = null == i ? void 0 : i.width) && void 0 !== u ? u : 0,
					null !== (m = null == l ? void 0 : l.width) && void 0 !== m ? m : 0
				),
				height: Math.max(
					null !== (h = null == i ? void 0 : i.height) && void 0 !== h ? h : 0,
					null !== (c = null == l ? void 0 : l.height) && void 0 !== c ? c : 0
				),
				maxWidth: a,
				maxHeight: o
			});
			return e;
		}
	}
	isInline() {
		let { hideMedia: e, embed: t } = this.props;
		return !e && (0, S.dY)(t);
	}
	renderSuppressButton(e) {
		return (0, r.jsx)(s.Clickable, {
			focusProps: { offset: { bottom: 4 } },
			className: k.embedSuppressButton,
			onClick: e,
			'aria-label': F.Z.Messages.SUPPRESS_ALL_EMBEDS,
			children: (0, r.jsx)(s.XSmallIcon, {
				size: 'xs',
				color: 'currentColor'
			})
		});
	}
	usesJustifiedAutoStyle() {
		let { embed: e } = this.props;
		return (
			e.type === N.hBH.IMAGE ||
			e.type === N.hBH.VIDEO ||
			e.type === N.hBH.GIFV ||
			((e.type === N.hBH.RICH || e.type === N.hBH.ARTICLE) && (null != e.video || null != e.image))
		);
	}
	getEmbedColor(e) {
		let { color: t } = this.props.embed;
		return (null != t && '#ffffff' === t.toLowerCase()) || e ? void 0 : t;
	}
	getSpoilerStyles(e) {
		let {
				embed: { image: t, images: n, video: l, type: r }
			} = this.props,
			{ maxMediaWidth: i, maxMediaHeight: a } = this.state;
		if (!this.usesJustifiedAutoStyle()) return;
		let o = e ? void 0 : this.getMaxWidth(!1);
		if (void 0 === o && void 0 === n && r !== N.hBH.RICH) {
			let e = null != t ? t : l;
			if (void 0 !== e) {
				let { width: t } = (0, E.Tj)({
					width: e.width,
					height: e.height,
					maxWidth: i,
					maxHeight: a
				});
				o = t;
			}
		}
		return {
			maxWidth: void 0 === o ? 'max-content' : o,
			justifySelf: 'auto'
		};
	}
	render() {
		var e;
		let { embed: t, obscureReason: n, className: l } = this.props;
		return null != t.provider && M.j.includes(t.provider.name)
			? (0, r.jsx)(M.Z, {
					embed: t,
					className: l
				})
			: (0, v.Z)(t)
				? (0, r.jsx)(x.Z, {
						embed: t,
						className: l
					})
				: (null === (e = t.provider) || void 0 === e ? void 0 : e.name) === 'Amazon Music' && t.type === N.hBH.RICH
					? (0, r.jsx)(h.Z, {
							embed: t,
							className: l
						})
					: this.isInline()
						? null != n
							? (0, r.jsx)(u.Z, {
									type: u.Z.Types.ATTACHMENT,
									reason: n,
									onReveal: this.onReveal,
									onToggleObscurity: this.onToggleObscurity,
									isSingleMosaicItem: !0,
									containerStyles: this.getSpoilerStyles(!0),
									obscurityControlClassName: o()({
										[k.obscureVideoSpacing]: this.state.isVisible && this.state.videoControlsShown
									}),
									children: this.renderInlineMediaEmbed
								})
							: this.renderInlineMediaEmbed()
						: null != n
							? (0, r.jsx)(u.Z, {
									type: u.Z.Types.EMBED,
									onReveal: this.onReveal,
									onToggleObscurity: this.onToggleObscurity,
									reason: n,
									isSingleMosaicItem: !0,
									containerStyles: this.getSpoilerStyles(!1),
									children: this.renderEmbedContent
								})
							: this.renderEmbedContent();
	}
	constructor(...e) {
		var t;
		super(...e),
			(t = this),
			B(this, 'state', {
				isVisible: null == this.props.obscureReason,
				videoControlsShown: !1,
				isImageHovered: !1,
				showImageAppMenu: !1,
				...(0, S.vP)(this.props.embed)
			}),
			B(this, 'onReveal', () => {
				this.setState({ isVisible: !0 });
			}),
			B(this, 'onToggleObscurity', () => {
				this.setState({ isVisible: !this.state.isVisible });
			}),
			B(this, 'renderInlineMediaEmbed', function () {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					{ obscureReason: n, className: l } = t.props,
					i = t.getMaxWidth(!0);
				return (0, r.jsx)('div', {
					'aria-hidden': e,
					className: o()(k.inlineMediaEmbed, l, {
						[k.spoilerAttachment]: n === g.wk.SPOILER,
						[k.hiddenExplicitAttachment]:
							null != n && [g.wk.EXPLICIT_CONTENT, g.wk.POTENTIAL_EXPLICIT_CONTENT].includes(n),
						[k.isHidden]: e,
						[k.justifyAuto]: t.usesJustifiedAutoStyle(),
						[V.embedFlexGrow]: null != i
					}),
					style: { maxWidth: i },
					children: t.renderMedia(e)
				});
			}),
			B(this, 'renderEmbedContent', function () {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					{ className: n, onSuppressEmbed: l, obscureReason: i } = t.props,
					{
						provider: a,
						author: s,
						title: d,
						description: u,
						fields: m,
						thumbnail: h,
						media: c,
						footer: p
					} = t.renderAll();
				return (0, r.jsx)('article', {
					className: o()(n, V.embedFlexGrow, k.embedFull, H.markup, {
						[k.isHidden]: e,
						[k.spoilerEmbed]: i === g.wk.SPOILER,
						[k.hiddenExplicitEmbed]: null != i && [g.wk.EXPLICIT_CONTENT, g.wk.POTENTIAL_EXPLICIT_CONTENT].includes(i),
						[k.justifyAuto]: t.usesJustifiedAutoStyle()
					}),
					'aria-hidden': e,
					style: {
						borderColor: t.getEmbedColor(e),
						maxWidth: t.getMaxWidth(!1)
					},
					children: (0, r.jsx)('div', {
						className: k.gridContainer,
						children: (0, r.jsxs)('div', {
							className: o()({
								[k.grid]: !0,
								[k.hasThumbnail]: null != h
							}),
							children: [null != l ? t.renderSuppressButton(l) : null, a, s, d, u, m, c, h, p]
						})
					})
				});
			});
	}
}
B(W, 'defaultProps', {
	hideMedia: !1,
	allowFullScreen: !0,
	maxThumbnailWidth: 80,
	maxThumbnailHeight: 80
});
