t.d(n, {
	U4: function () {
		return i;
	},
	cG: function () {
		return W;
	},
	kA: function () {
		return F;
	},
	qR: function () {
		return Y;
	}
}),
	t(47120),
	t(411104);
var i,
	a,
	l = t(735250),
	o = t(470079),
	r = t(120356),
	s = t.n(r),
	c = t(442837),
	d = t(481060),
	u = t(110924),
	m = t(607070),
	p = t(317381),
	_ = t(361213),
	C = t(542094),
	f = t(778569),
	h = t(182906),
	A = t(367907),
	E = t(220082),
	N = t(70097),
	v = t(768581),
	x = t(792125),
	I = t(541099),
	g = t(783097),
	P = t(695676),
	L = t(176412),
	b = t(226026),
	R = t(753972),
	S = t(981631),
	T = t(217702),
	M = t(231338),
	y = t(689938),
	j = t(450139),
	O = t(413097);
function Z(e) {
	var n;
	let {
			application: t,
			look: i = 'large_banner',
			isPartner: a,
			onClick: o,
			bannerImageStyle: r,
			enableVideoBanner: s = !0,
			children: c,
			sectionName: d,
			resultsPosition: m,
			tracksImpression: p = !0,
			disabled: _ = !1
		} = e,
		C = null !== (n = (0, u.Z)(_)) && void 0 !== n ? n : _;
	return (0, l.jsx)(H, {
		application: t,
		onClick: o,
		sectionName: d,
		resultsPosition: m,
		disabled: _,
		tracksImpression: p,
		look: i,
		children:
			'icon' === i
				? (0, l.jsx)(U, {
						application: t,
						children: c
					})
				: (0, l.jsx)(k, {
						application: t,
						look: i,
						isPartner: a,
						bannerImageStyle: r,
						enableVideoBanner: s,
						disableBannerFadeIn: C !== _,
						children: c
					})
	});
}
function H(e) {
	let {
			application: n,
			onClick: t,
			children: i,
			sectionName: a,
			resultsPosition: r,
			tracksImpression: c,
			disabled: u,
			containerStyle: m,
			look: p
		} = e,
		{ name: _, description: C } = o.useMemo(() => (0, g.sl)(n, { fakeAppIconURL: O }), [n]),
		{ trackItemImpressionRef: f } = (0, b.Z)({
			applicationId: n.id,
			sectionName: a,
			sectionPosition: r
		}),
		h = o.useMemo(() => {
			let e = u ? j.containerDisabled : j.container;
			return s()(
				e,
				{
					[j.containerBorderRadius]: 'row' !== p,
					[j.rowContainer]: 'row' === p,
					[j.iconCard]: 'icon' === p
				},
				m
			);
		}, [m, u, p]);
	return u
		? (0, l.jsx)('div', {
				ref: c ? f : void 0,
				className: h,
				children: i
			})
		: (0, l.jsx)(d.Clickable, {
				innerRef: c ? f : void 0,
				className: h,
				onClick: t,
				'aria-label': y.Z.Messages.APP_LAUNCHER_APP_CARD_ARIA_LABEL.format({
					applicationName: _,
					applicationDescription: C
				}),
				children: (0, l.jsx)(d.FocusBlock, { children: i })
			});
}
function U(e) {
	let { application: n, children: t } = e,
		{ name: i, iconURL: a } = o.useMemo(() => (0, g.sl)(n, { fakeAppIconURL: O }), [n]);
	return (0, l.jsx)(d.Tooltip, {
		tooltipContentClassName: j.tooltipContent,
		text: i,
		children: (e) => {
			let { ...n } = e;
			return (0, l.jsxs)('div', {
				className: j.iconContainer,
				...n,
				children: [
					(0, l.jsx)(R.Z, {
						src: a,
						className: j.iconCard,
						'aria-hidden': !0,
						rendersPlaceholder: !0
					}),
					t
				]
			});
		}
	});
}
function k(e) {
	let {
			application: n,
			look: t,
			isPartner: i,
			bannerImageStyle: a,
			enableVideoBanner: r,
			disableBannerFadeIn: c,
			children: u
		} = e,
		{ iconURL: m, name: p, description: _ } = o.useMemo(() => (0, g.sl)(n, { fakeAppIconURL: O }), [n]),
		C = o.useMemo(() => (null == _ ? null : (0, L.ae)(_)), [_]),
		f = (0, E.ZP)(m, ''),
		[h, A] = o.useState(!1),
		N = o.useCallback(() => {
			!0 === r && A(!0);
		}, [r]),
		v = o.useCallback(() => A(!1), []);
	return (0, l.jsxs)(l.Fragment, {
		children: [
			(0, l.jsxs)('div', {
				onMouseEnter: N,
				onFocus: N,
				onMouseLeave: v,
				onBlur: v,
				className: s()(j.bannerImageContainer, {
					[j.mediumBanner]: 'medium_banner' === t,
					[j.largeBanner]: 'large_banner' === t
				}),
				children: [
					(0, l.jsx)('span', {
						className: a,
						children: (0, l.jsx)(B, {
							application: n,
							fallbackColor: f,
							showVideo: h,
							disableFadeIn: c
						})
					}),
					i &&
						(0, l.jsx)('div', {
							className: j.partnerLabelWrapper,
							children: (0, l.jsx)(d.Text, {
								className: (0, x.Q)(M.BR.DARK),
								variant: 'text-sm/medium',
								color: 'text-normal',
								children: y.Z.Messages.APP_DIRECTORY_PARTNER
							})
						}),
					'large_banner' === t || 'medium_banner' === t
						? (0, l.jsx)('div', {
								className: j.bannerImageChildContainer,
								children: u
							})
						: null
				]
			}),
			(0, l.jsxs)('div', {
				className: s()(j.appDetailsContainer, { [j.appDetailsRowContainer]: 'row' === t }),
				children: [
					(0, l.jsx)(R.Z, {
						src: m,
						className: s()(j.icon, { [j.rowIcon]: 'row' === t }),
						'aria-hidden': !0,
						rendersPlaceholder: !0
					}),
					(0, l.jsxs)('div', {
						className: j.appDetails,
						children: [
							(0, l.jsx)(d.Heading, {
								variant: 'heading-md/semibold',
								color: 'header-primary',
								lineClamp: 1,
								children: p
							}),
							(0, l.jsx)(d.Text, {
								variant: 'text-sm/normal',
								color: 'text-secondary',
								lineClamp: 1,
								children: C
							})
						]
					}),
					'row' === t ? (0, l.jsx)('div', { className: j.rowDivider }) : null
				]
			})
		]
	});
}
function B(e) {
	let { application: n, fallbackColor: t, showVideo: i, disableFadeIn: a } = e;
	if ((0, g.BQ)(n)) {
		if ((0, g.ye)({ application: n }))
			return (0, l.jsx)(D, {
				application: n,
				showVideo: i,
				disableFadeIn: a
			});
		if (null != n.bot)
			return (0, l.jsx)(w, {
				bot: n.bot,
				fallbackColor: t,
				disableFadeIn: a
			});
	}
	return (0, l.jsx)(V, {
		fallbackColor: t,
		disableFadeIn: a
	});
}
function D(e) {
	let { application: n, showVideo: t, disableFadeIn: i } = e,
		a = (0, f.Z)({
			applicationId: n.id,
			size: 600,
			names: ['embedded_cover']
		}),
		r = o.useMemo(() => {
			let e = (0, g.yJ)(n);
			return null != e && null != e.activity_preview_video_asset_id
				? (0, _.Z)(n.id, e.activity_preview_video_asset_id)
				: null;
		}, [n]),
		[c, d] = o.useState(t);
	o.useEffect(() => {
		t && d(!0);
	}, [t]);
	let u = s()(j.bannerImage, { [j.disableFadeIn]: i });
	return (0, l.jsxs)(l.Fragment, {
		children: [
			null != r && c
				? (0, l.jsx)('div', {
						className: j.activityVideoContainer,
						children: (0, l.jsx)('div', {
							className: s()(j.activityVideo, { [j.videoFadeOut]: !t }),
							onAnimationEnd: () => (t ? null : d(!1)),
							children: (0, l.jsx)(N.Z, {
								src: r,
								mediaLayoutType: T.hV.MOSAIC,
								loop: !0,
								autoPlay: !0,
								muted: !0
							})
						})
					})
				: null,
			(0, l.jsx)(h.Z, {
				imageBackground: a,
				applicationName: n.name,
				imageClassName: u,
				imageNotFoundClassName: u
			})
		]
	});
}
function w(e) {
	let { bot: n, fallbackColor: t, disableFadeIn: i } = e,
		a = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
		o = (0, v.aN)({
			id: n.id,
			banner: n.banner,
			canAnimate: !a,
			size: 600
		});
	return null == o
		? (0, l.jsx)(V, {
				fallbackColor: t,
				disableFadeIn: i
			})
		: (0, l.jsx)('img', {
				src: o,
				alt: '',
				className: s()(j.bannerImage, { [j.disableFadeIn]: i })
			});
}
function V(e) {
	let { fallbackColor: n, disableFadeIn: t } = e;
	return (0, l.jsx)('div', {
		className: s()(j.bannerImage, { [j.disableFadeIn]: t }),
		style: { backgroundColor: n }
	});
}
function W(e) {
	let { application: n, sectionName: t, resultsPosition: i, query: a, installOnDemand: l, location: r } = e,
		{ pushHistory: s } = (0, P.hH)();
	return o.useCallback(
		(e) => {
			e.stopPropagation(),
				(0, A.yw)(S.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
					application_id: n.id,
					section_name: t,
					search_results_position: i,
					source: I.Z.entrypoint(),
					location: r,
					query: a
				}),
				s({
					type: P.gc.APPLICATION,
					application: n,
					installOnDemand: l,
					sectionName: t
				});
		},
		[n, l, r, s, a, i, t]
	);
}
function F(e) {
	let n = W(e);
	return (0, l.jsx)(Z, {
		...e,
		onClick: n
	});
}
function Y(e) {
	let { channel: n, application: t, location: i, sectionName: a, isOneClickCTA: r, ...s } = e;
	if (!(0, g.BQ)(t)) throw Error('PerformActivityActionAppCard was passed the Built-in App, which is not supported.');
	let u = o.useId(),
		[m, _] = (0, c.Wu)([p.ZP], () => [p.ZP.isLaunchingActivity(), p.ZP.getLaunchState(t.id, n.id)]),
		f = null != _ && _.isLaunching && _.componentId === u,
		{
			onActivityItemSelected: h,
			activityAction: A,
			buttonColor: E,
			buttonText: N
		} = (0, L.P7)({
			channel: n,
			application: t,
			location: i,
			sectionName: a,
			launchingComponentId: u
		});
	if (A === C.JS.START)
		return r
			? (0, l.jsx)(Z, {
					...s,
					sectionName: a,
					application: t,
					onClick: h,
					disabled: m,
					enableVideoBanner: !f,
					children: f
						? (0, l.jsx)(d.Spinner, {
								type: d.Spinner.Type.PULSING_ELLIPSIS,
								className: j.spinner
							})
						: null
				})
			: (0, l.jsx)(F, {
					...s,
					sectionName: a,
					application: t,
					location: i
				});
	return (0, l.jsx)(Z, {
		...s,
		sectionName: a,
		application: t,
		onClick: (e) => {
			e.stopPropagation();
		},
		bannerImageStyle: j.darkenBannerImage,
		enableVideoBanner: !1,
		disabled: !0,
		children: (0, l.jsx)('div', {
			className: j.voiceLauncherAppCardContainer,
			children: (0, l.jsx)(d.Button, {
				className: j.voiceLauncherAppCardButton,
				type: 'submit',
				size: d.Button.Sizes.LARGE,
				color: E,
				disabled: m,
				onClick: h,
				'aria-label': y.Z.Messages.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED_BUTTON_ARIA_LABEL.format({
					buttonText: N,
					applicationName: t.name
				}),
				submitting: f,
				children: N
			})
		})
	});
}
((a = i || (i = {})).ICON = 'icon'),
	(a.ROW = 'row'),
	(a.NO_BANNER = 'no_banner'),
	(a.MEDIUM_BANNER = 'medium_banner'),
	(a.LARGE_BANNER = 'large_banner');
