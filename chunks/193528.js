t.d(s, {
	Z: function () {
		return N;
	}
}),
	t(47120);
var n = t(735250),
	a = t(470079),
	i = t(120356),
	r = t.n(i),
	o = t(772848),
	l = t(866442),
	c = t(692547),
	d = t(481060),
	_ = t(699682),
	E = t(44315),
	u = t(654904),
	I = t(981631),
	T = t(689938),
	S = t(562476);
function N(e) {
	let { onChange: s, onClose: t, color: i, suggestedColors: N, disabled: C, label: m, colorPickerMiddle: A, colorPickerFooter: O, showEyeDropper: g } = e,
		h = a.useRef(null),
		p = (0, d.useToken)(c.Z.colors.BACKGROUND_PRIMARY).hex(),
		R = c.Z.colors.BACKGROUND_ACCENT.css,
		x = (0, u.DP)(i),
		M = (0, l.Rf)(i),
		f = M === p ? R : M,
		D = (0, E.Lq)(x ? I.Ilk.WHITE_500 : I.Ilk.PRIMARY_530),
		P = (0, _.Z)(A),
		L = (0, _.Z)(O),
		[b, Z] = a.useState((0, o.Z)());
	return (
		a.useEffect(() => {
			(P !== A || L !== O) && Z((0, o.Z)());
		}, [O, A, L, P]),
		(0, n.jsx)(d.Popout, {
			positionKey: b,
			renderPopout: (e) =>
				(0, n.jsx)(d.CustomColorPicker, {
					...e,
					value: i,
					onChange: s,
					suggestedColors: N,
					middle: A,
					footer: O,
					showEyeDropper: g
				}),
			onRequestClose: t,
			children: (e) => {
				let { onClick: s, ...t } = e;
				return (0, n.jsxs)('div', {
					ref: h,
					className: r()(S.colorSwatch, { [S.disabled]: C }),
					children: [
						(0, n.jsx)(d.Clickable, {
							...t,
							tabIndex: C ? -1 : 0,
							onClick: C ? I.dG4 : s,
							style: {
								backgroundColor: M,
								borderColor: f
							},
							className: S.swatch,
							'aria-label': T.Z.Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR,
							focusProps: { ringTarget: h },
							children: (0, n.jsx)(d.PencilIcon, {
								size: 'custom',
								className: S.editPencilIcon,
								width: 14,
								height: 14,
								color: D
							})
						}),
						m
					]
				});
			}
		})
	);
}
