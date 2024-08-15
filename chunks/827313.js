n.d(t, {
	Z: function () {
		return c;
	}
});
var r = n(735250);
n(470079);
var i = n(481060),
	a = n(702557),
	s = n(475413),
	o = n(228168),
	l = n(689938),
	u = n(53892);
function c(e) {
	let { userId: t, isHovering: n, onOpenProfile: c } = e,
		{ note: d } = (0, a.Z)(t),
		_ = null != d && '' !== d;
	return (0, r.jsx)(s.y, {
		action: 'PRESS_ADD_NOTE',
		icon: _ ? i.PaperIcon : i.PaperPlusIcon,
		tooltipText: _ ? d : l.Z.Messages.ADD_NOTE,
		tooltipClassName: _ ? u.tooltip : void 0,
		isHovering: n,
		onClick: () => (null == c ? void 0 : c({ subsection: o.Tb.NOTE }))
	});
}
