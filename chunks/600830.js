t.r(e),
	t.d(e, {
		default: function () {
			return h;
		}
	});
var u = t(735250);
t(470079);
var i = t(442837),
	s = t(481060),
	c = t(239091),
	o = t(522474),
	r = t(788983),
	l = t(695346),
	a = t(393431),
	d = t(981631),
	p = t(689938);
function h(n) {
	let { channel: e, onSelect: t } = n,
		h = (0, a.Z)(),
		_ = l.Fg.useSetting(),
		Z = (function (n) {
			let e = (0, i.e7)([o.Z], () => o.Z.getWindow(d.KJ3.CHANNEL_CALL_POPOUT));
			return null == n || null != e
				? null
				: (0, u.jsx)(s.MenuItem, {
						id: 'popout-call',
						label: p.Z.Messages.POPOUT_PLAYER,
						icon: s.WindowLaunchIcon,
						action: () => r.hP(n)
					});
		})(null != e ? e : void 0);
	return (0, u.jsxs)(s.Menu, {
		navId: 'rtc-channel',
		'aria-label': p.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
		onClose: c.Zy,
		onSelect: t,
		children: [
			h,
			(0, u.jsxs)(s.MenuGroup, {
				children: [
					Z,
					(0, u.jsx)(s.MenuCheckboxItem, {
						id: 'show-voice-states',
						checked: _,
						action: () => l.Fg.updateSetting(!_),
						label: p.Z.Messages.VOICE_PANEL_SHOW_VOICE_USERS
					})
				]
			})
		]
	});
}
