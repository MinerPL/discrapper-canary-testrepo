n.d(t, {
	c: function () {
		return l;
	},
	v: function () {
		return u;
	}
});
var r = n(735250);
n(470079);
var i = n(481060),
	a = n(493683),
	s = n(475413),
	o = n(689938);
function l(e) {
	let { userId: t, onClose: n, ...l } = e;
	return (0, r.jsx)(s.tG, {
		action: 'SEND_MESSAGE',
		icon: i.ChatIcon,
		text: o.Z.Messages.USER_PROFILE_MESSAGE,
		onClick: () => {
			a.Z.openPrivateChannel(t), null == n || n();
		},
		...l
	});
}
function u(e) {
	let { userId: t, onClose: n, ...l } = e;
	return (0, r.jsx)(s.ef, {
		action: 'SEND_MESSAGE',
		icon: i.ChatIcon,
		tooltipText: o.Z.Messages.USER_PROFILE_MESSAGE,
		onClick: () => {
			a.Z.openPrivateChannel(t), null == n || n();
		},
		...l
	});
}
