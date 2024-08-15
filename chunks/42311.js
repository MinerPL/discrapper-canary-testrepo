n.d(t, {
	Z: function () {
		return c;
	}
});
var i = n(735250);
n(470079);
var a = n(120356),
	s = n.n(a),
	l = n(481060),
	r = n(626786),
	o = n(55043);
function c(e) {
	let {
		className: t,
		roleColor: n,
		roleName: a,
		hasRemoveIcon: c = !1,
		onClick: u,
		disabled: d = !1,
		verified: h = !1
	} = e;
	return (0, i.jsx)(l.Button, {
		className: s()(t, o.button),
		look: l.Button.Looks.BLANK,
		size: l.Button.Sizes.NONE,
		onClick: u,
		disabled: d,
		children: (0, i.jsx)(r.Z, {
			className: o.role,
			roleColor: n,
			roleName: a,
			verified: h,
			children:
				c &&
				(0, i.jsx)(l.XSmallIcon, {
					size: 'custom',
					color: 'currentColor',
					height: 6,
					width: 6,
					className: o.removeRole,
					colorClass: o.removeRoleIcon
				})
		})
	});
}
