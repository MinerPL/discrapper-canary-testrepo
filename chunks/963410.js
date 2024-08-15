n.r(t),
	n.d(t, {
		default: function () {
			return Z;
		}
	}),
	n(47120);
var r = n(735250),
	i = n(470079),
	a = n(442837),
	s = n(481060),
	o = n(377171),
	E = n(313201),
	u = n(592125),
	c = n(594174),
	l = n(5192),
	d = n(571826),
	_ = n(630759),
	f = n(539067),
	I = n(210975),
	S = n(301107),
	R = n(65692),
	h = n(785792),
	C = n(190054),
	A = n(760373),
	T = n(981631),
	g = n(689938),
	M = n(958153);
function y(e) {
	let { badgeText: t, badgeColor: n } = e,
		a = i.useRef(t),
		o = i.useRef(n);
	return (0, r.jsx)(s.TextBadge, {
		text: a.current,
		color: o.current
	});
}
function Z(e) {
	let { transitionState: t, userId: n, channelId: Z, onClose: p } = e,
		N = (0, E.Dt)(),
		m = (0, a.e7)([c.default], () => c.default.getUser(n)),
		U = (0, a.e7)([u.Z], () => {
			var e;
			return null === (e = u.Z.getChannel(Z)) || void 0 === e ? void 0 : e.getGuildId();
		}),
		D = l.ZP.useName(U, null, m),
		{ fingerprint: F, userKey: L, loading: b } = (0, R.q)({ userId: n }),
		x = (0, S.W)({
			fingerprintBase64: F,
			chunkSize: A.iQ,
			desiredLength: A.KN
		}),
		V = i.useCallback(() => {
			(0, d.s$)({
				userId: n,
				channelId: Z
			});
		}, [Z, n]),
		v = (0, I.wV)({
			userId: n,
			channelId: Z,
			location: 'WebSecureFramesUserVerificationModal'
		}),
		{ isPersistentCode: O, isCurrentUserPersistent: k, isOtherUserPersistent: K, loading: w } = (0, f.y)({ userId: n }),
		P = i.useCallback(() => {
			null != L && ((0, _.TQ)(n, L, O, Z, T.Sbl.E2EE_USER_VERIFY_MODAL), p());
		}, [L, n, O, Z, p]),
		B = i.useCallback(() => {
			null != L && ((0, _.LO)(n, L, O), p());
		}, [L, n, O, p]),
		[Y, j] = i.useMemo(
			() =>
				v
					? [g.Z.Messages.E2EE_VERIFIED, o.Z.BG_BRAND]
					: O
						? [g.Z.Messages.E2EE_PERSISTENT, o.Z.STATUS_DANGER]
						: [g.Z.Messages.NEW, o.Z.STATUS_DANGER],
			[O, v]
		),
		G = i.useMemo(
			() =>
				(0, _.kK)({
					isCurrentUserPersistent: k,
					isOtherUserPersistent: K,
					otherUserNickname: D
				}),
			[k, K, D]
		);
	return (
		i.useEffect(() => {
			(0, d.Rq)({
				userId: n,
				channelId: Z
			});
		}, [Z, n]),
		(0, r.jsxs)(s.ModalRoot, {
			transitionState: t,
			'aria-labelledby': N,
			children: [
				(0, r.jsx)('div', {
					className: M.shieldIconContainer,
					children: (0, r.jsx)('div', {
						className: M.shieldIcon,
						children: (0, r.jsx)(s.ShieldLockIcon, {
							size: 'custom',
							width: 55,
							height: 55,
							color: s.tokens.colors.HEADER_SECONDARY
						})
					})
				}),
				(0, r.jsxs)(s.ModalContent, {
					className: M.content,
					children: [
						(0, r.jsx)(s.Heading, {
							className: M.title,
							variant: 'heading-lg/bold',
							color: 'header-primary',
							children: g.Z.Messages.E2EE_VERIFICATION_CODE
						}),
						(0, r.jsx)(s.Text, {
							className: M.subtitle,
							variant: 'text-md/normal',
							color: 'header-secondary',
							children: g.Z.Messages.E2EE_USER_VERIFICATION_SUBTITLE.format({ username: D })
						}),
						(0, r.jsxs)('div', {
							className: M.verification,
							children: [
								(0, r.jsxs)('div', {
									className: M.header,
									children: [
										(0, r.jsx)(s.Heading, {
											variant: 'text-sm/bold',
											color: 'header-primary',
											children: g.Z.Messages.E2EE_VOICE_PRIVACY_CODE
										}),
										null != x &&
											(0, r.jsx)(C.H, {
												className: M.copyIcon,
												chunks: x,
												color: s.tokens.colors.INTERACTIVE_NORMAL,
												onCopy: V
											}),
										w || b
											? (0, r.jsx)(s.Spinner, {
													className: M.spinner,
													type: s.SpinnerTypes.SPINNING_CIRCLE
												})
											: (0, r.jsx)(y, {
													badgeText: Y,
													badgeColor: j
												})
									]
								}),
								(0, r.jsx)(h.b, {
									className: M.code,
									chunks: x,
									columns: A.ak
								})
							]
						}),
						(0, r.jsx)(s.Text, {
							className: M.details,
							variant: 'text-sm/normal',
							color: 'text-muted',
							children: G
						}),
						(0, r.jsx)(s.Button, {
							fullWidth: !0,
							className: M.verifiedButton,
							color: s.ButtonColors.BRAND,
							size: s.ButtonSizes.MEDIUM,
							look: s.ButtonLooks.FILLED,
							disabled: null == F || w || b,
							onClick: v ? B : P,
							children: v ? g.Z.Messages.E2EE_CLEAR_VERIFICATION : g.Z.Messages.E2EE_MARK_AS_VERIFIED
						}),
						(0, r.jsx)(s.Button, {
							fullWidth: !0,
							color: s.ButtonColors.PRIMARY,
							size: s.ButtonSizes.MEDIUM,
							look: s.ButtonLooks.FILLED,
							onClick: p,
							children: g.Z.Messages.CANCEL
						})
					]
				})
			]
		})
	);
}
