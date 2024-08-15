t.r(a),
	t.d(a, {
		default: function () {
			return c;
		}
	});
var s = t(735250);
t(470079);
var n = t(481060),
	r = t(239091),
	o = t(13245),
	u = t(145597),
	i = t(689938);
function c(e) {
	let { onSelect: a } = e;
	return (0, s.jsx)(n.Menu, {
		navId: 'overlay',
		onClose: r.Zy,
		'aria-label': i.Z.Messages.OVERLAY_ACTIONS_MENU_LABEL,
		onSelect: a,
		children: (0, s.jsx)(n.MenuItem, {
			id: 'reset',
			label: i.Z.Messages.OVERLAY_RESET_DEFAULT_LAYOUT,
			action: (e) => {
				e.stopPropagation(), o.Z.resetDefaultLayout(u.qU);
			}
		})
	});
}
