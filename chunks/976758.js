t.d(s, {
	Z: function () {
		return T;
	}
});
var n = t(735250);
t(470079);
var a = t(442837),
	i = t(481060),
	r = t(846027),
	o = t(600164),
	l = t(313201),
	c = t(131951),
	d = t(36703),
	_ = t(689938),
	E = t(224499);
let u = (0, l.hQ)(),
	I = (0, l.hQ)();
function T() {
	let { inputVolume: e, outputVolume: s } = (0, a.cj)([c.Z], () => ({
		inputVolume: c.Z.getInputVolume(),
		outputVolume: c.Z.getOutputVolume()
	}));
	return (0, n.jsxs)(o.Z, {
		className: 'volume',
		children: [
			(0, n.jsxs)(o.Z.Child, {
				basis: '50%',
				children: [
					(0, n.jsx)(i.FormTitle, {
						id: u,
						tag: i.FormTitleTags.H5,
						className: E.marginBottom4,
						children: _.Z.Messages.FORM_LABEL_INPUT_VOLUME
					}),
					(0, n.jsx)(i.Slider, {
						initialValue: (0, d.P)(e),
						asValueChanges: (e) => r.Z.setInputVolume((0, d.A)(e)),
						'aria-labelledby': u
					})
				]
			}),
			(0, n.jsxs)(o.Z.Child, {
				basis: '50%',
				children: [
					(0, n.jsx)(i.FormTitle, {
						id: I,
						tag: i.FormTitleTags.H5,
						className: E.marginBottom4,
						children: _.Z.Messages.FORM_LABEL_OUTPUT_VOLUME
					}),
					(0, n.jsx)(i.Slider, {
						initialValue: (0, d.P)(s),
						maxValue: 200,
						onValueRender: (e) => ''.concat(e.toFixed(0), '%'),
						asValueChanges: (e) => r.Z.setOutputVolume((0, d.A)(e)),
						'aria-labelledby': I
					})
				]
			})
		]
	});
}
