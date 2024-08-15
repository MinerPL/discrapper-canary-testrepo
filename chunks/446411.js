n.d(t, {
	BC: function () {
		return W;
	},
	ZP: function () {
		return G;
	}
}),
	n(47120),
	n(653041);
var l,
	r = n(735250),
	i = n(470079),
	a = n(120356),
	o = n.n(a),
	s = n(892814),
	d = n(481060),
	u = n(399654),
	m = n(370298),
	h = n(95398),
	c = n(947849),
	p = n(624195),
	b = n(44824),
	g = n(124347),
	f = n(283756),
	v = n(169525),
	x = n(780088),
	I = n(785992),
	y = n(400266),
	w = n(592125),
	_ = n(52824),
	C = n(626135),
	E = n(585483),
	S = n(55935),
	j = n(408433),
	M = n(956664),
	T = n(468846),
	N = n(401419),
	A = n(249458),
	F = n(981631),
	k = n(217702),
	L = n(689938),
	H = n(592733),
	V = n(458857),
	B = n(910212),
	R = n(736514);
function P(e, t, n) {
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
function W(e) {
	let { className: t, iframeWrapperClassName: n, maxWidth: l, maxHeight: a, thumbnail: s, video: d, provider: u, allowFullScreen: m = !0, responsive: h = !1, renderImageComponent: c, renderVideoComponent: p, renderLinkComponent: b, renderForwardComponent: g = F.VqG, playable: v = !0, autoPlay: x = !1, autoMute: I, volume: y, onPlay: w, onPause: C, onEnded: S, onControlsHide: j, onControlsShow: N, onVolumeChange: A, onMute: k, href: L, messageId: V, channelId: B, placeholder: R, placeholderVersion: P } = e,
		[W, O] = i.useState(x),
		G = null != d && null == d.proxyURL,
		D = i.useCallback(() => O(!1), [O]),
		Z = (e) => {
			e.preventDefault(), e.stopPropagation(), null == w || w(!1), O(!0), G && (E.S.dispatch(F.CkL.VIDEO_EMBED_PLAYBACK_STARTED), E.S.subscribeOnce(F.CkL.VIDEO_EMBED_PLAYBACK_STARTED, D));
		};
	i.useEffect(
		() => () => {
			G && E.S.unsubscribe(F.CkL.VIDEO_EMBED_PLAYBACK_STARTED, D);
		},
		[G, D]
	);
	let { width: U, height: q } = s;
	null != d && ((U = d.width), (q = d.height));
	let z = (0, M.Tj)({
		width: U,
		height: q,
		maxWidth: l,
		maxHeight: a
	});
	(U = Math.max(z.width, 150)), (q = Math.max(z.height, 144));
	let K = (0, _.q)(s);
	if (null != d && null != d.proxyURL)
		return (0, r.jsx)('div', {
			className: o()(H.embedVideo, t),
			children: p({
				poster: K,
				src: d.proxyURL,
				placeholder: R,
				placeholderVersion: P,
				width: U,
				height: q,
				responsive: h,
				autoPlay: x,
				onEnded: S,
				naturalWidth: d.width,
				naturalHeight: d.height,
				onVolumeChange: A,
				playable: v,
				autoMute: I,
				volume: y,
				onPlay: w,
				onPause: C,
				onMute: k,
				onControlsHide: j,
				onControlsShow: N,
				renderForwardComponent: g
			})
		});
	if (W && null != d) {
		let e;
		let i = !0 === I || ('function' == typeof I && I()),
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
				className: o()(H.embedVideo, n),
				style: c,
				children: (0, r.jsx)(T.ZP, {
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
		className: o()(H.embedVideo, t),
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
				containerClassName: H.embedVideoImageComponent,
				imageClassName: H.embedVideoImageComponentInner,
				placeholder: R,
				placeholderVersion: P,
				onClick: v && null != d ? Z : null,
				renderForwardComponent: g
			}),
			(0, r.jsx)('div', {
				className: H.embedVideoActions,
				children: (0, r.jsx)('div', {
					className: H.centerContent,
					children: v
						? (0, r.jsx)(f.Z, {
								onPlay: null != d ? Z : null,
								externalURL: L,
								renderLinkComponent: b,
								messageId: V,
								channelId: B
							})
						: null
				})
			})
		]
	});
}
function O(e) {
	let { className: t, href: n, autoPlay: l, maxWidth: i, maxHeight: a, thumbnail: s, video: d, renderImageComponent: u, renderForwardComponent: m, responsive: h, alt: c, disableAltTextDisplay: p = !1, playable: g = !0, hiddenSpoilers: f, placeholder: v, placeholderVersion: x } = e;
	return (0, r.jsx)(b.Z, {
		className: o()(H.embedVideo, t),
		original: n,
		poster: (0, _.q)(s),
		src: (0, _.q)(d),
		alt: c,
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
		disableAltTextDisplay: p,
		placeholder: v,
		placeholderVersion: x
	});
}
class G extends (l = i.PureComponent) {
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
					className: o()(H.embedProvider, H.embedMargin),
					children:
						null != t.url
							? n({
									className: H.embedLink,
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
					className: o()(H.embedAuthor, H.embedMargin),
					children: [
						null != t.iconProxyURL
							? (0, r.jsx)('img', {
									alt: '',
									className: H.embedAuthorIcon,
									src: t.iconProxyURL
								})
							: null,
						null != t.url
							? n({
									className: H.embedAuthorNameLink,
									href: t.url,
									tabIndex: e ? 0 : -1,
									children: t.name,
									target: '_blank',
									rel: 'noreferrer noopener',
									messageId: l,
									channelId: i
								})
							: (0, r.jsx)('span', {
									className: H.embedAuthorName,
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
					className: o()(H.embedTitle, H.embedMargin),
					children:
						null != d
							? n({
									className: H.embedTitleLink,
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
					className: o()(H.embedDescription, H.embedMargin),
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
			: (0, r.jsx)(A.G.Consumer, {
					children: (r) => {
						let { disableAnimations: s } = r;
						return i({
							containerClassName: H.embedThumbnail,
							src: (0, _.q)(t),
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
				!a && null != l && (n.push(l), (l = null)), null == l && (l = []), l.push([this.props.renderTitle(e, r), this.props.renderDescription(e, i, !0)]), (3 === l.length || !a) && (n.push(l), (l = null));
			}),
			null != l && n.push(l),
			(0, r.jsx)('div', {
				className: H.embedFields,
				children: n.map((e, t) => {
					let { length: n } = e;
					return e.map((e, l) => {
						let [i, a] = e;
						return (0, r.jsxs)(
							'div',
							{
								className: H.embedField,
								style: {
									gridColumn: (function (e, t) {
										let n = 12 / t,
											l = e * n;
										return ''.concat(l + 1, ' / ').concat(l + n + 1);
									})(l, n)
								},
								children: [
									(0, r.jsx)('div', {
										className: H.embedFieldName,
										children: i
									}),
									(0, r.jsx)('div', {
										className: H.embedFieldValue,
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
		let { hiddenSpoiler: e = !1, isVisible: t = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
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
					className: H.embedGalleryImagesWrapper,
					style: { height: l },
					children: [
						(0, r.jsxs)('div', {
							className: H.embedGallerySide,
							children: [i, null != s && o]
						}),
						(0, r.jsxs)('div', {
							className: H.embedGallerySide,
							children: [a, null == s && null != o && o, null != s && s]
						})
					]
				});
	}
	renderImageHoverButtons(e) {
		let { mimeType: t, downloadURL: n, isVisualMediaType: l, channelId: i } = e;
		return (0, r.jsx)('div', {
			className: o()(V.hoverButtonGroup, {
				[V.nonMediaMosaicItem]: !l,
				[V.forceShowHover]: this.state.showImageAppMenu
			}),
			children: (0, r.jsx)(m.Z, {
				toggleShowMenu: () => {
					this.setState({ showImageAppMenu: !this.state.showImageAppMenu });
				},
				showMenu: this.state.showImageAppMenu,
				channelId: i,
				className: o()(V.hoverButton, { [V.selected]: this.state.showImageAppMenu }),
				imageUrl: n,
				mimeType: t
			})
		});
	}
	handleImageHover(e, t, n) {
		if (n) {
			if (e && !this.state.isImageHovered) {
				var l;
				this.setState({ isImageHovered: !0 });
				let e = w.Z.getChannel(this.props.channelId);
				(0, u.a)({
					channelId: null !== (l = null == e ? void 0 : e.id) && void 0 !== l ? l : '',
					location: s.I.CONTEXTUAL_IMAGE,
					withCommands: !0
				}),
					C.default.track(F.rMx.IMAGE_HOVERED, {
						guild_id: null == e ? void 0 : e.guild_id,
						channel_id: null == e ? void 0 : e.id,
						image_recommendations_shown: this.props.showImageRecs
					});
			} else !e && this.state.isImageHovered && this.setState({ isImageHovered: !1 });
		}
	}
	renderImage() {
		var e, t;
		let { hiddenSpoiler: n = !1, isVisible: l = !0, image: i, isGalleryImage: a = !1, alt: s = L.Z.Messages.IMAGE, allImages: d = null } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
			{ renderImageComponent: u, className: m, autoPlayGif: h, renderForwardComponent: p } = this.props,
			{ maxMediaWidth: b, maxMediaHeight: f } = this.state;
		if (null == i) return null;
		let v = (0, _.q)(i),
			I = null == d ? {} : (0, x.Cx)(d.map((e) => (0, x.nP)(e, p))),
			y = g.Z.isAnimated({
				src: (0, _.q)(i),
				original: i.url,
				animated: !1
			}),
			w = {
				containerClassName: o()(m, {
					[H.embedMedia]: !a,
					[H.embedImage]: !a,
					[H.galleryImage]: a
				}),
				imageContainerClassName: a ? H.galleryImageContainer : void 0,
				imageClassName: a ? H.embedGalleryImageElement : void 0,
				src: (0, _.q)(i),
				alt: s,
				responsive: !0,
				limitResponsiveWidth: !a,
				width: i.width,
				height: i.height,
				maxWidth: b,
				maxHeight: f,
				original: i.url,
				shouldLink: l,
				disableAltTextDisplay: !0,
				hiddenSpoilers: n,
				placeholder: i.placeholder,
				placeholderVersion: i.placeholderVersion,
				renderForwardComponent: p
			};
		v in I && (w.onClick = I[v]);
		let C = null !== (t = null === (e = i.url.split('.').pop()) || void 0 === e ? void 0 : e.split('?')[0]) && void 0 !== t ? t : '';
		'jpg' === C && (C = 'jpeg');
		let E = null != i && !g.u.test(null == i ? void 0 : i.url),
			S =
				!0 !== this.props.isSearchResult &&
				l &&
				null != this.props.channelId &&
				void 0 !== this.props.channelId &&
				E &&
				!(function (e) {
					return null != e && (e.width <= k.OF || e.height <= k.OF);
				})(i) &&
				null != C;
		return (0, r.jsx)(c.h.Consumer, {
			children: (e) =>
				(0, r.jsx)(
					A.G.Consumer,
					{
						children: (t) => {
							let { disableAnimations: l } = t;
							return u({
								...w,
								autoPlay: h && !l && !n,
								renderAccessory: y ? e : null,
								onMouseEnter: () => this.handleImageHover(!0, i, S),
								onMouseLeave: () => this.handleImageHover(!1, i, S),
								renderAdjacentContent: () => {
									var e;
									return !0 === this.props.showImageRecs && S
										? this.renderImageHoverButtons({
												mimeType: ['image', C],
												downloadURL: null !== (e = i.proxyURL) && void 0 !== e ? e : i.url,
												isVisualMediaType: null != i,
												channelId: this.props.channelId
											})
										: null;
								}
							});
						}
					},
					i.url
				)
		});
	}
	renderVideo() {
		let { gifv: e = !1, isVisible: t = !0, hiddenSpoiler: n = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
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
				: (0, r.jsx)(A.G.Consumer, {
						children: (e) => {
							let { disableAnimations: o } = e;
							return (0, r.jsx)(O, {
								className: H.embedMedia,
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
		return (0, r.jsx)(W, {
			className: H.embedMedia,
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
				className: o()(H.embedFooter, H.embedMargin),
				children: [
					null != n
						? (0, r.jsx)('img', {
								alt: '',
								className: H.embedFooterIcon,
								src: n
							})
						: null,
					(0, r.jsxs)('span', {
						className: H.embedFooterText,
						children: [
							e.text,
							null != e.text && null != t
								? (0, r.jsx)('span', {
										className: H.embedFooterSeparator,
										children: '\u2022'
									})
								: null,
							null != t ? (0, S.Y4)(t) : null
						]
					})
				]
			});
		}
		if (null != t)
			return (0, r.jsx)('div', {
				className: o()(H.embedFooter, H.embedMargin),
				children: (0, r.jsx)('span', {
					className: H.embedFooterText,
					children: (0, S.Y4)(t)
				})
			});
	}
	renderMedia() {
		let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
			{ embed: t } = this.props,
			{ isVisible: n } = this.state;
		switch (t.type) {
			case F.hBH.GIFV:
				return this.renderVideo({
					gifv: !0,
					hiddenSpoiler: e,
					isVisible: n
				});
			case F.hBH.VIDEO:
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
			case F.hBH.IMAGE:
			case F.hBH.VIDEO:
			case F.hBH.GIFV:
				break;
			default:
				e = this.renderDescription();
		}
		let s = this.renderFields();
		!l && (t = this.renderMedia(!r));
		let d = this.renderFooter(),
			u = null == t;
		return (
			n.type === F.hBH.RICH && (u = null == n.video),
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
		let { width: d } = (0, M.Tj)({
			width: s.width,
			height: s.height,
			maxWidth: a,
			maxHeight: o
		});
		if (!e && (r === F.hBH.VIDEO || d >= 300)) return d + 32;
		if (r === F.hBH.RICH && void 0 !== n) return 520;
		if (r === F.hBH.GIFV) {
			var u, m, h, c;
			let { width: e } = (0, M.Tj)({
				width: Math.max(null !== (u = null == i ? void 0 : i.width) && void 0 !== u ? u : 0, null !== (m = null == l ? void 0 : l.width) && void 0 !== m ? m : 0),
				height: Math.max(null !== (h = null == i ? void 0 : i.height) && void 0 !== h ? h : 0, null !== (c = null == l ? void 0 : l.height) && void 0 !== c ? c : 0),
				maxWidth: a,
				maxHeight: o
			});
			return e;
		}
	}
	isInline() {
		let { hideMedia: e, embed: t } = this.props;
		return !e && (0, j.dY)(t);
	}
	renderSuppressButton(e) {
		return (0, r.jsx)(d.Clickable, {
			focusProps: { offset: { bottom: 4 } },
			className: H.embedSuppressButton,
			onClick: e,
			'aria-label': L.Z.Messages.SUPPRESS_ALL_EMBEDS,
			children: (0, r.jsx)(d.XSmallIcon, {
				size: 'xs',
				color: 'currentColor'
			})
		});
	}
	usesJustifiedAutoStyle() {
		let { embed: e } = this.props;
		return e.type === F.hBH.IMAGE || e.type === F.hBH.VIDEO || e.type === F.hBH.GIFV || ((e.type === F.hBH.RICH || e.type === F.hBH.ARTICLE) && (null != e.video || null != e.image));
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
		if (void 0 === o && void 0 === n && r !== F.hBH.RICH) {
			let e = null != t ? t : l;
			if (void 0 !== e) {
				let { width: t } = (0, M.Tj)({
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
		return null != t.provider && N.j.includes(t.provider.name)
			? (0, r.jsx)(N.Z, {
					embed: t,
					className: l
				})
			: (0, I.Z)(t)
				? (0, r.jsx)(y.Z, {
						embed: t,
						className: l
					})
				: (null === (e = t.provider) || void 0 === e ? void 0 : e.name) === 'Amazon Music' && t.type === F.hBH.RICH
					? (0, r.jsx)(p.Z, {
							embed: t,
							className: l
						})
					: this.isInline()
						? null != n
							? (0, r.jsx)(h.Z, {
									type: h.Z.Types.ATTACHMENT,
									reason: n,
									onReveal: this.onReveal,
									onToggleObscurity: this.onToggleObscurity,
									isSingleMosaicItem: !0,
									containerStyles: this.getSpoilerStyles(!0),
									obscurityControlClassName: o()({ [H.obscureVideoSpacing]: this.state.isVisible && this.state.videoControlsShown }),
									children: this.renderInlineMediaEmbed
								})
							: this.renderInlineMediaEmbed()
						: null != n
							? (0, r.jsx)(h.Z, {
									type: h.Z.Types.EMBED,
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
			P(this, 'state', {
				isVisible: null == this.props.obscureReason,
				videoControlsShown: !1,
				isImageHovered: !1,
				showImageAppMenu: !1,
				...(0, j.vP)(this.props.embed)
			}),
			P(this, 'onReveal', () => {
				this.setState({ isVisible: !0 });
			}),
			P(this, 'onToggleObscurity', () => {
				this.setState({ isVisible: !this.state.isVisible });
			}),
			P(this, 'renderInlineMediaEmbed', function () {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					{ obscureReason: n, className: l } = t.props,
					i = t.getMaxWidth(!0);
				return (0, r.jsx)('div', {
					'aria-hidden': e,
					className: o()(H.inlineMediaEmbed, l, {
						[H.spoilerAttachment]: n === v.wk.SPOILER,
						[H.hiddenExplicitAttachment]: null != n && [v.wk.EXPLICIT_CONTENT, v.wk.POTENTIAL_EXPLICIT_CONTENT].includes(n),
						[H.isHidden]: e,
						[H.justifyAuto]: t.usesJustifiedAutoStyle(),
						[R.embedFlexGrow]: null != i
					}),
					style: { maxWidth: i },
					children: t.renderMedia(e)
				});
			}),
			P(this, 'renderEmbedContent', function () {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					{ className: n, onSuppressEmbed: l, obscureReason: i } = t.props,
					{ provider: a, author: s, title: d, description: u, fields: m, thumbnail: h, media: c, footer: p } = t.renderAll();
				return (0, r.jsx)('article', {
					className: o()(n, R.embedFlexGrow, H.embedFull, B.markup, {
						[H.isHidden]: e,
						[H.spoilerEmbed]: i === v.wk.SPOILER,
						[H.hiddenExplicitEmbed]: null != i && [v.wk.EXPLICIT_CONTENT, v.wk.POTENTIAL_EXPLICIT_CONTENT].includes(i),
						[H.justifyAuto]: t.usesJustifiedAutoStyle()
					}),
					'aria-hidden': e,
					style: {
						borderColor: t.getEmbedColor(e),
						maxWidth: t.getMaxWidth(!1)
					},
					children: (0, r.jsx)('div', {
						className: H.gridContainer,
						children: (0, r.jsxs)('div', {
							className: o()({
								[H.grid]: !0,
								[H.hasThumbnail]: null != h
							}),
							children: [null != l ? t.renderSuppressButton(l) : null, a, s, d, u, m, c, h, p]
						})
					})
				});
			});
	}
}
P(G, 'defaultProps', {
	hideMedia: !1,
	allowFullScreen: !0,
	maxThumbnailWidth: 80,
	maxThumbnailHeight: 80
});
