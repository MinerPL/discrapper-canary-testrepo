n.r(t), n(47120), n(411104);
var r = n(735250),
	i = n(470079),
	a = n(392711),
	s = n(36793),
	l = n(481060),
	u = n(100527),
	c = n(906732),
	o = n(488499),
	h = n(626135),
	d = n(197712),
	A = n(511004),
	E = n(486324),
	g = n(981631),
	p = n(678916),
	C = n(689938),
	m = n(323125);
t.default = (e) => {
	let { file: t, imgURI: n, transitionState: f, allowSkip: w = !1, onCrop: R, onClose: M, uploadType: _ = E.pC.AVATAR, showUpsellHeader: N = !1, analyticsPage: L } = e,
		[v, I] = i.useState({
			width: 0,
			height: 0
		}),
		[D, x] = i.useState({
			top: 0,
			bottom: 0,
			left: 0,
			right: 0
		}),
		[O, y] = i.useState(!1),
		[T, B] = i.useState(1),
		[b, S] = i.useState({
			x: 0,
			y: 0
		}),
		[P, V] = i.useState(null),
		[j, G] = i.useState(!1),
		{ analyticsLocations: k } = (0, c.ZP)(u.Z.IMAGE_CROPPING_MODAL),
		U = i.useRef({
			x: 0,
			y: 0
		}),
		F = i.useRef(null),
		H = i.useRef(null),
		z = 'image/gif' === t.type;
	i.useEffect(() => {
		(0, A.Z)();
	}, []),
		i.useEffect(() => {
			z &&
				N &&
				h.default.track(g.rMx.OPEN_MODAL, {
					type: g.jXE.CROP_GIF_MODAL,
					location: { page: L }
				});
		}, [N, L, z]);
	let Z = () => {
			switch (_) {
				case E.pC.BANNER:
					return {
						height: E.f,
						width: E.L0
					};
				case E.pC.VIDEO_BACKGROUND:
					return p.HE;
				case E.pC.AVATAR:
				case E.pC.AVATAR_DECORATION:
					return {
						height: g.dGM,
						width: g.dGM
					};
				case E.pC.GUILD_BANNER:
					return {
						height: E._T,
						width: E.X_
					};
				case E.pC.SCHEDULED_EVENT_IMAGE:
					return {
						height: E.xT,
						width: E.d6
					};
				case E.pC.HOME_HEADER:
					return {
						height: E.Uo,
						width: E.N8
					};
			}
		},
		Y = i.useCallback(
			(e, t, n) => {
				(U.current = (0, d.U$)(e, t, n)), null != F.current && (F.current.style.transform = 'translate3d('.concat(U.current.x, 'px, ').concat(U.current.y, 'px, 0)'));
			},
			[F]
		),
		J = i.useCallback(() => {
			if (null == F.current || T > 1) return;
			let { width: e, height: t } = F.current.getBoundingClientRect(),
				{ width: n, height: r } = (0, d.Es)(_, e, t),
				i = (0, d.AK)(_, n, r, t);
			V({
				width: n,
				height: r
			}),
				I(i),
				x((0, d.kH)(n, r, i));
		}, [_, T]),
		K = i.useCallback(
			(e) => {
				let { x: t, y: n } = U.current;
				if (!O || (e.clientX === t && e.clientY === n)) return;
				let r = e.clientX - b.x;
				Y(r, e.clientY - b.y, D);
			},
			[D, O, b, Y]
		),
		X = () => {
			y(!1);
		},
		W = () => {
			let e = Z();
			return e.width !== e.height;
		},
		$ = async () => {
			let e;
			if (null == F.current) return;
			G(!0);
			let n = F.current,
				r = Z();
			if (z)
				try {
					let { result: i, cancelFn: a } = await (0, d.$p)(t, n, v, U.current, r);
					(H.current = a), (e = await i), (H.current = null);
				} catch (e) {
					var i;
					throw (null === (i = H.current) || void 0 === i || i.call(H), (H.current = null), Error('Error cropping GIF'));
				}
			else e = (0, s.PT)(n, v, U.current, r);
			await R(e, t), G(!1), M();
		};
	return (
		i.useEffect(
			() => (
				window.addEventListener('mouseup', X),
				window.addEventListener('resize', J),
				() => {
					window.removeEventListener('mouseup', X), window.removeEventListener('resize', J);
				}
			),
			[J]
		),
		i.useEffect(
			() => () => {
				null != H.current && H.current();
			},
			[]
		),
		i.useEffect(() => {
			if (O) return window.addEventListener('mousemove', K), () => window.removeEventListener('mousemove', K);
		}, [K, O]),
		(0, r.jsx)(c.Gt, {
			value: k,
			children: (0, r.jsxs)(l.ModalRoot, {
				onAnimationEnd: J,
				transitionState: f,
				size: l.ModalSize.MEDIUM,
				children: [
					N &&
						(0, r.jsx)(o.Z, {
							type: _,
							analyticsPage: L,
							analyticsSection: g.jXE.CROP_GIF_MODAL,
							isGIF: z,
							banner: n
						}),
					(0, r.jsx)(l.ModalHeader, {
						separator: !1,
						children: (0, r.jsx)(l.FormTitle, {
							className: m.titleCase,
							tag: l.FormTitleTags.H1,
							children: C.Z.Messages.AVATAR_UPLOAD_EDIT_MEDIA
						})
					}),
					(0, r.jsxs)(l.ModalContent, {
						className: m.modalContent,
						children: [
							(0, r.jsxs)('div', {
								className: m.editingContainer,
								children: [
									(0, r.jsx)('img', {
										style: {
											opacity: null == P ? 0 : 1,
											transform: 'translate3d('.concat(U.current.x, 'px, ').concat(U.current.y, 'px, 0px)'),
											...(() => {
												if (null == P) return {};
												let e = P.width / P.height,
													t = W() && e > E.MY ? v.height / P.height : 1;
												return {
													width: P.width * T * t,
													minWidth: P.width * T * t,
													height: P.height * T * t
												};
											})()
										},
										className: j ? m.imageDisabled : m.imageEnabled,
										src: n,
										alt: 'avatar',
										ref: F,
										onMouseDown: (e) => {
											let t = e.clientX - U.current.x;
											S({
												x: t,
												y: e.clientY - U.current.y
											}),
												y(!0);
										},
										draggable: !1
									}),
									(0, r.jsx)('div', {
										className: _ === E.pC.AVATAR ? m.overlayAvatar : m.overlayBanner,
										style: {
											opacity: null == P ? 0 : 1,
											width: v.width,
											height: v.height
										}
									})
								]
							}),
							(0, r.jsxs)('div', {
								className: m.sliderContainer,
								children: [
									(0, r.jsx)(l.ImageIcon, {
										size: 'md',
										color: 'currentColor',
										className: m.icon
									}),
									(0, r.jsx)(l.Slider, {
										initialValue: 1,
										minValue: 1,
										maxValue: 2,
										keyboardStep: 0.025,
										asValueChanges: (e) => {
											if (null == P) return;
											let { width: t, height: n } = P,
												r = (0, d.kH)(t * e, n * e, v),
												{ x: i, y: s } = U.current;
											(!(0, a.inRange)(i, r.right, r.left) || !(0, a.inRange)(s, r.top, r.bottom)) && Y(i, s, r), B(e), x(r);
										},
										disabled: j,
										equidistant: !0,
										hideBubble: !0,
										'aria-label': C.Z.Messages.FORM_LABEL_AVATAR_SIZE
									}),
									(0, r.jsx)(l.ImageIcon, {
										size: 'custom',
										color: 'currentColor',
										className: m.icon,
										width: 48,
										height: 48
									})
								]
							})
						]
					}),
					(0, r.jsxs)(l.ModalFooter, {
						className: m.modalFooter,
						children: [
							w
								? (0, r.jsx)(l.Button, {
										className: m.cancelButton,
										look: l.Button.Looks.LINK,
										color: l.Button.Colors.PRIMARY,
										size: l.ButtonSizes.SMALL,
										onClick: () => {
											w && (R(n, t), M());
										},
										children: C.Z.Messages.AVATAR_UPLOAD_SKIP
									})
								: null,
							(0, r.jsxs)('div', {
								className: m.buttonsRight,
								children: [
									(0, r.jsx)(l.Button, {
										className: m.cancelButton,
										look: l.Button.Looks.LINK,
										color: l.Button.Colors.PRIMARY,
										size: l.ButtonSizes.SMALL,
										onClick: () => {
											if (null != H.current) {
												H.current(), (H.current = null), G(!1);
												return;
											}
											M();
										},
										children: C.Z.Messages.AVATAR_UPLOAD_CANCEL
									}),
									(0, r.jsx)(l.Button, {
										submitting: j,
										size: l.ButtonSizes.SMALL,
										onClick: $,
										children: C.Z.Messages.AVATAR_UPLOAD_APPLY
									})
								]
							})
						]
					})
				]
			})
		})
	);
};
