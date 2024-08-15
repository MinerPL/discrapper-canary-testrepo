n.d(t, {
	Z: function () {
		return M;
	},
	u: function () {
		return Z;
	}
}),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	l = n.n(s),
	r = n(392711),
	o = n(338545),
	c = n(481060),
	u = n(596454),
	d = n(727637),
	h = n(313201),
	m = n(543241),
	p = n(318766),
	_ = n(907040),
	f = n(633302),
	E = n(806966),
	C = n(176354),
	g = n(823379),
	I = n(354459),
	x = n(185923),
	T = n(420212),
	N = n(894967);
let v = x.Hz.CHAT,
	S = [f.ZP.getByName('thumbsup'), f.ZP.getByName('eyes'), f.ZP.getByName('laughing'), f.ZP.getByName('watermelon'), f.ZP.getByName('fork_and_knife'), f.ZP.getByName('yum')].filter(g.lm);
function Z(e) {
	let { emoji: t, isDisabled: n = !1, onClick: s, className: r } = e,
		h = a.useRef(null),
		m = (0, d.Z)(h);
	return (0, i.jsx)('span', {
		ref: h,
		children: (0, i.jsx)(c.Button, {
			onClick: s,
			look: c.Button.Looks.BLANK,
			size: c.Button.Sizes.NONE,
			focusProps: { enabled: !n },
			children: (0, i.jsx)(c.Spring, {
				config: p.u,
				from: { value: 0 },
				to: { value: m ? 1 : 0 },
				children: (e) => {
					let { value: a } = e;
					return (0, i.jsx)(o.animated.div, {
						style: {
							transform: a.to([0, 1], [1, 1.14]).to((e) => 'scale('.concat(e, ')'))
						},
						children: (0, i.jsx)(u.Z, {
							className: l()(N.emoji, r, { [N.emojiItemDisabled]: n }),
							emojiId: t.id,
							emojiName: null == t ? void 0 : t.surrogates,
							animated: t.animated
						})
					});
				}
			})
		})
	});
}
function A(e) {
	let { otherAccessories: t, isEmojiPickerExpanded: n, onSetExpanded: a, onFocus: s } = e;
	return (0, i.jsxs)(i.Fragment, {
		children: [
			t,
			(0, i.jsx)(c.Clickable, {
				className: N.dropDownContainer,
				onClick: () => {
					a(!n), s();
				},
				children: (0, i.jsx)(c.ChevronSmallDownIcon, {
					size: 'md',
					color: 'currentColor',
					className: l()(N.dropDown, { [N.dropDownOpen]: n })
				})
			})
		]
	});
}
function M(e) {
	let { channel: t, title: n, closePopout: s, onFocus: o, onSelectEmoji: u, onSelectDisabledEmoji: d, onExpandedToggle: p, emojiSearchProps: f, recentlyUsedEmojis: g, analyticsOverride: M } = e,
		b = (0, h.Dt)(),
		[R, j] = a.useState(!1),
		L = (0, m.wC)(t.guild_id),
		P = (0, r.uniqBy)([...L, ...S], 'name')
			.filter(
				(e) =>
					!C.ZP.isEmojiFilteredOrLocked({
						emoji: e,
						channel: t,
						intention: v
					})
			)
			.slice(0, I.e5);
	null != g && g.length > 0 && P.splice(P.length - 1, 1, g[0]);
	let O = (e) => {
			j(e), null == p || p(e);
		},
		y = (e, t) => {
			if (null == e && t) {
				s();
				return;
			}
			null != e && u(e);
			O(!t), t && E.kJ.setSearchPlaceholder(null);
		};
	return (0, i.jsxs)(c.Dialog, {
		'aria-labelledby': b,
		children: [
			(0, i.jsx)(c.HeadingLevel, {
				forceLevel: 2,
				children: (0, i.jsx)(c.HiddenVisually, {
					children: (0, i.jsx)(c.H, {
						id: b,
						children: n
					})
				})
			}),
			(0, i.jsxs)('div', {
				className: N.container,
				children: [
					(0, i.jsx)(_.Z, {
						analyticsOverride: M,
						channel: t,
						className: l()(N.animatedPicker, { [N.animatedPickerTall]: R }),
						headerClassName: l()(N.emojiPickerHeader, { [N.emojiPickerHeaderExpanded]: R }),
						closePopout: s,
						onSelectEmoji: R ? y : () => {},
						shouldHidePickerActions: !R,
						wrapper: 'div',
						pickerIntention: v,
						searchProps: {
							...f,
							accessory: (0, i.jsx)(A, {
								otherAccessories: null == f ? void 0 : f.accessory,
								isEmojiPickerExpanded: R,
								onSetExpanded: O,
								onFocus: o
							}),
							onKeyDown: (e) => {
								null != e && e.key !== T.vn.TAB && (e.key !== T.vn.ENTER || e.shiftKey ? O(!0) : O(!R));
							}
						}
					}),
					(0, i.jsx)('div', {
						className: N.slotsContainer,
						children: (0, i.jsx)('div', {
							className: l()(N.slots, N.slotsWide),
							children: P.map((e) => {
								let n = C.ZP.isEmojiDisabled({
									emoji: e,
									channel: t,
									intention: x.Hz.CHAT
								});
								return (0, i.jsx)(
									'div',
									{
										className: N.slot,
										children: (0, i.jsx)(c.TooltipContainer, {
											text: e.name,
											position: 'top',
											'aria-label': e.name,
											tooltipClassName: N.tooltipContainer,
											color: c.Tooltip.Colors.BRAND,
											children: (0, i.jsx)(Z, {
												emoji: e,
												isDisabled: n,
												onClick: () => {
													n ? null == d || d(e) : y(e, !0);
												}
											})
										})
									},
									e.name
								);
							})
						})
					})
				]
			})
		]
	});
}
