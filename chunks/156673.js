t.r(n),
	t.d(n, {
		default: function () {
			return d;
		}
	});
var r = t(735250);
t(470079);
var u = t(481060),
	i = t(239091),
	l = t(637853),
	s = t(434404),
	a = t(837949),
	o = t(981631),
	c = t(689938);
function d(e) {
	let { guild: n, onSelect: t } = e,
		d = (0, a.Z)(n.id),
		f = (0, l.wC)(n.id);
	return (0, r.jsx)(u.Menu, {
		onSelect: t,
		navId: 'guild-browse-channels-context-menu',
		'aria-label': c.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
		onClose: i.Zy,
		children: (0, r.jsxs)(u.MenuGroup, {
			children: [
				f &&
					(0, r.jsx)(u.MenuItem, {
						id: 'go-to-settings',
						label: c.Z.Messages.EDIT_ONBOARDING,
						action: () => {
							s.Z.open(n.id, o.pNK.ONBOARDING);
						}
					}),
				d
			]
		})
	});
}
