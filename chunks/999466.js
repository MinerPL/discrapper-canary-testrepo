t.r(n),
	t.d(n, {
		default: function () {
			return I;
		}
	});
var s = t(735250);
t(470079);
var a = t(442837),
	u = t(481060),
	l = t(239091),
	c = t(547972),
	i = t(435064),
	r = t(621781),
	o = t(39604),
	S = t(332325),
	d = t(689938);
function I(e) {
	let { onSelect: n } = e,
		{ clipsLength: t } = (0, a.cj)([i.Z], () => i.Z.getSettings()),
		I = (0, r.Z)();
	return (0, s.jsxs)(u.Menu, {
		navId: 'clips-context',
		'aria-label': d.Z.Messages.CLIPS_SETTINGS,
		onClose: l.Zy,
		onSelect: n,
		children: [
			(0, s.jsx)(u.MenuGroup, {
				children: (0, s.jsx)(u.MenuItem, {
					id: 'clips-duration',
					label: d.Z.Messages.CLIPS_SETTINGS_LENGTH,
					children: I.map((e) => {
						let { value: n, label: a } = e;
						return (0, s.jsx)(
							u.MenuRadioItem,
							{
								id: 'clips-duration-'.concat(n),
								group: 'clips-duration',
								label: a,
								action: () => (0, o.eU)(n),
								checked: n === t
							},
							n
						);
					})
				})
			}),
			(0, s.jsx)(u.MenuGroup, {
				children: (0, s.jsx)(u.MenuItem, {
					id: 'clips-settings',
					label: d.Z.Messages.CLIPS_SETTINGS,
					action: () => (0, c.Z)(S.Z.CLIPS)
				})
			})
		]
	});
}
