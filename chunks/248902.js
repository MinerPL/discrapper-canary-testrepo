s.d(t, {
	Z: function () {
		return d;
	}
});
var n = s(735250);
s(470079);
var l = s(481060),
	i = s(507453),
	r = s(48550),
	o = s(689938),
	a = s(286609);
function d(e) {
	let { mfaChallenge: t, setSlide: s, onClose: d } = e;
	return (0, n.jsxs)(n.Fragment, {
		children: [
			(0, n.jsx)(i.Z.SlideHeader, {
				subtitle: o.Z.Messages.MFA_V2_SELECT_HEADER,
				onClose: d
			}),
			(0, n.jsx)(i.Z.SlideContent, {
				children: t.methods.map((e) =>
					(0, n.jsxs)(
						l.Clickable,
						{
							className: a.listItemContainer,
							onClick: () => {
								s(e.type);
							},
							children: [
								(0, n.jsx)(l.Text, {
									className: a.listItemText,
									variant: 'text-md/semibold',
									children: r.P[e.type]
								}),
								(0, n.jsx)(l.ChevronSmallRightIcon, {
									size: 'custom',
									color: 'currentColor',
									width: 20,
									height: 20,
									className: a.listItemArrow
								})
							]
						},
						e.type
					)
				)
			})
		]
	});
}
