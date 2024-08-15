n.d(t, {
	Z: function () {
		return o;
	}
});
var i = n(735250);
n(470079);
var a = n(442837),
	s = n(481060),
	l = n(846027),
	r = n(131951);
function o() {
	let e = (0, a.e7)([r.Z], () => Object.values(r.Z.getInputDevices())),
		t = (0, a.e7)([r.Z], () => r.Z.getInputDeviceId());
	return e.map((e) => {
		let { id: n, disabled: a, name: r } = e;
		return (0, i.jsx)(
			s.MenuRadioItem,
			{
				id: 'input-'.concat(n),
				group: 'input-devices',
				disabled: a,
				label: r,
				checked: n === t,
				action: () => l.Z.setInputDevice(n)
			},
			'input-'.concat(n)
		);
	});
}
