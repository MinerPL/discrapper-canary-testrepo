n.r(t),
	n.d(t, {
		default: function () {
			return E;
		}
	});
var a = n(735250);
n(470079);
var i = n(828214),
	l = n(481060),
	u = n(239091),
	s = n(299206),
	o = n(519110),
	r = n(695346),
	c = n(572004),
	I = n(691251),
	d = n(689938);
function E(e) {
	let { target: t, onSelect: n } = e,
		E = t.getAttribute('data-type'),
		M = t.getAttribute('data-id'),
		S = t.getAttribute('data-name'),
		g = t.getAttribute('data-surrogates'),
		b = 'true' === t.getAttribute('data-animated'),
		f = r.Sb.useSetting(),
		O = (0, o.Z)({
			type: E,
			id: M,
			name: S,
			isInExpressionPicker: !0
		}),
		Z =
			null != g
				? (0, a.jsx)(i.sN, {
						id: 'copy',
						label: d.Z.Messages.COPY_EMOJI,
						action: () => (0, c.JG)(g)
					})
				: null,
		C = (0, s.Z)({
			id: M,
			shiftId:
				E === I.S.EMOJI
					? '<'
							.concat(b ? 'a' : '', ':')
							.concat(null == S ? void 0 : S.split('~')[0], ':')
							.concat(M, '>')
					: void 0,
			label: E === I.S.STICKER ? d.Z.Messages.COPY_ID_STICKER : d.Z.Messages.COPY_ID_EMOJI
		});
	return (0, a.jsx)(l.Menu, {
		navId: 'expression-picker',
		onClose: u.Zy,
		'aria-label': d.Z.Messages.EXPRESSION_PICKER_ACTIONS_MENU_LABEL,
		onSelect: n,
		className: 'context-menu',
		children: (0, a.jsxs)(l.MenuGroup, {
			children: [O, c.wS && f ? (null != Z ? Z : C) : null]
		})
	});
}
