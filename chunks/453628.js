t.d(n, {
	y: function () {
		return a;
	}
});
var i,
	a,
	s = t(735250);
t(470079);
var l = t(120356),
	r = t.n(l),
	o = t(481060),
	d = t(689938),
	c = t(544978);
((i = a || (a = {})).DENY = 'DENY'), (i.PASSTHROUGH = 'PASSTHROUGH'), (i.ALLOW = 'ALLOW');
let u = Object.keys(a);
function I(e) {
	let { value: n = 'PASSTHROUGH', onChange: t, labelledBy: i, disabled: a = !1 } = e,
		l = (0, o.useRadioGroup)({
			orientation: 'horizontal',
			isDisabled: a,
			labelledBy: i
		});
	return (0, s.jsx)('div', {
		className: r()(c.group, { [c.disabled]: a }),
		...l,
		children: u.map((e) =>
			(0, s.jsx)(
				m,
				{
					type: e,
					isSelected: n === e,
					onSelect: (e) => {
						n !== e && !a && t(e);
					}
				},
				e
			)
		)
	});
}
function m(e) {
	let n,
		t,
		i,
		{ type: a, onSelect: l, isSelected: u } = e;
	switch (a) {
		case 'DENY':
			(i = d.Z.Messages.PERMISSION_OVERRIDE_DENY), (n = o.XSmallIcon), (t = c.deny);
			break;
		case 'ALLOW':
			(i = d.Z.Messages.PERMISSION_OVERRIDE_ALLOW), (n = o.CheckmarkLargeIcon), (t = c.allow);
			break;
		default:
			(i = d.Z.Messages.PERMISSION_OVERRIDE_PASSTHROUGH), (n = o.SlashIcon), (t = c.passthrough);
	}
	let I = (0, o.useRadioItem)({
		isSelected: u,
		label: i
	});
	return (0, s.jsx)(o.Clickable, {
		className: r()(c.item, t, { [c.selected]: u }),
		onClick: () => l(a),
		...I,
		children: (0, s.jsx)(n, {
			color: 'currentColor',
			size: 'xs'
		})
	});
}
(I.Types = a), (n.Z = I);
