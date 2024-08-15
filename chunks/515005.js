var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(392711),
	l = n(468194),
	u = n(481060),
	c = n(239091),
	d = n(2052),
	_ = n(691251),
	E = n(626135),
	f = n(285651),
	h = n(373228),
	p = n(378233),
	m = n(419922),
	I = n(490095),
	T = n(981631),
	g = n(689938),
	S = n(323276);
let A = (0, l.Mg)(S.__invalid_stickerPickerPreviewDimensions),
	N = (0, l.Mg)(S.__invalid_stickerPickerPreviewPadding),
	v = i.memo(function (e) {
		let { isDisplayingIndividualStickers: t = !1, preferAnimation: a = !0, getStickerItemProps: l, getStickerRowProps: v, gutterWidth: O, inspectedStickerPosition: R, isScrolling: C, isUsingKeyboardNavigation: y, onInspect: D, onSelect: L, rowIndex: b, stickerClassName: M, stickerDescriptors: P, stickerPadding: U = N, stickerSize: w = A, ownedStickerPacks: x, enlargeOnInteraction: G = !1, channel: k, currentUser: B, checkSendability: F = !0 } = e,
			{ location: V } = (0, d.O)(),
			H = w + 2 * U,
			Z = i.useMemo(
				() => ({
					gridColumnGap: O,
					gridTemplateColumns: 'repeat(auto-fill, '.concat(H, 'px)'),
					height: H,
					paddingRight: t ? void 0 : H
				}),
				[t, O, H]
			),
			Y = i.useMemo(
				() => ({
					width: w,
					height: w,
					padding: U
				}),
				[U, w]
			);
		return (0, r.jsx)('div', {
			className: S.row,
			style: Z,
			...(null == v ? void 0 : v(b)),
			children: P.map((e) => {
				var d;
				let A = e.visibleRowIndex === (null == R ? void 0 : R.rowIndex) && e.columnIndex === (null == R ? void 0 : R.columnIndex),
					N = e.type === h.al.STICKER && G && A,
					v = (0, o.throttle)(() => {
						(null == C ? void 0 : C.current) !== !0 && (null == y ? void 0 : y.current) !== !0 && !A && (null == D || D(e));
					}, 250),
					{ ref: O, tabIndex: P, onFocus: U, ...H } = null !== (d = null == l ? void 0 : l(e.columnIndex, b)) && void 0 !== d ? d : {};
				switch (e.type) {
					case h.al.CREATE_STICKER:
						return (0, r.jsx)(
							'div',
							{
								...H,
								children: (0, r.jsxs)(u.Clickable, {
									'aria-label': e.name,
									className: s()(S.createSticker, M, { [S.createInspected]: A }),
									innerRef: O,
									tabIndex: P,
									onFocus: null != U ? U : v,
									onMouseMove: v,
									onClick: () => {
										e.type === h.al.CREATE_STICKER &&
											(E.default.track(T.rMx.OPEN_MODAL, {
												type: T.jXE.CREATE_STICKER_MODAL,
												location: V
											}),
											(0, u.openModalLazy)(async () => {
												let { default: t } = await Promise.all([n.e('93626'), n.e('1463')]).then(n.bind(n, 136735));
												return (n) =>
													(0, r.jsx)(t, {
														guildId: e.guild_id,
														...n
													});
											}));
									},
									style: Y,
									children: [
										!G && (0, r.jsx)('div', { className: S.inspectedIndicator }),
										(0, r.jsx)('div', {
											className: S.iconWrapper,
											children: (0, r.jsx)(u.PlusSmallIcon, {
												size: 'md',
												color: 'currentColor',
												className: S.icon
											})
										}),
										(0, r.jsx)(u.Text, {
											color: 'interactive-active',
											variant: 'text-xs/normal',
											children: g.Z.Messages.STICKER_PICKER_CREATE_STICKER
										})
									]
								})
							},
							e.guild_id
						);
					case h.al.STICKER: {
						let o = t && null != x && (0, p.jl)(e.sticker) && !x.has(e.sticker.pack_id);
						return (0, i.createElement)(
							'div',
							{
								...H,
								key: e.sticker.id
							},
							(0, r.jsxs)(u.Clickable, {
								className: s()(S.sticker, M, { [S.stickerInspected]: A }),
								innerRef: O,
								tabIndex: P,
								onFocus: null != U ? U : v,
								onMouseMove: v,
								onClick: (t) => {
									(null == C ? void 0 : C.current) !== !0 && (null == y ? void 0 : y.current) !== !0 && (null == L || L(e, t));
								},
								onContextMenu: (e) => {
									(0, c.jW)(e, async () => {
										let { default: e } = await n.e('39010').then(n.bind(n, 269254));
										return (t) => (0, r.jsx)(e, { ...t });
									});
								},
								style: Y,
								'data-type': _.S.STICKER,
								'data-id': e.sticker.id,
								children: [
									(0, r.jsx)(u.HiddenVisually, { children: (0, m.Co)(e.sticker) }),
									(0, r.jsxs)('div', {
										'aria-hidden': !0,
										children: [
											!G && (0, r.jsx)('div', { className: S.inspectedIndicator }),
											(0, r.jsx)(m.ZP, {
												className: s()(S.stickerNode, {
													[S.stickerNodeDimmed]: G && !A && null != R && -1 !== R.rowIndex && -1 !== R.columnIndex,
													[S.stickerNodeHidden]: N,
													[S.stickerUnsendable]: F && !(0, f.kl)(e.sticker, B, k)
												}),
												disableAnimation: !A && !a,
												enlargeOnInteraction: G,
												isInteracting: A,
												maskAsset: A,
												sticker: e.sticker,
												size: w
											}),
											o ? (0, r.jsx)(I.Z, { size: 20 }) : null
										]
									})
								]
							})
						);
					}
				}
			})
		});
	});
t.Z = v;
