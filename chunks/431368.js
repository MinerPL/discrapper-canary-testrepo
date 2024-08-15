n.d(t, {
	Z: function () {
		return d;
	}
}),
	n(47120);
var i = n(735250);
n(470079);
var a = n(442837),
	s = n(481060),
	l = n(740492),
	r = n(984014),
	o = n(295510),
	c = n(394059),
	u = n(689938);
function d(e, t) {
	let [n, d, h] = (0, r.Z)(e, t),
		m = (0, a.e7)([l.ZP], () => l.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
	return n
		? (0, i.jsx)(s.MenuCheckboxItem, {
				id: 'self-stream-hide',
				label: u.Z.Messages.SHOW_SELF_STREAM,
				checked: !d,
				action: () => {
					if (m || d) return h(!d);
					(0, s.openModal)((e) =>
						(0, i.jsx)(o.Z, {
							...e,
							type: c.K.STREAM,
							onConfirm: () => h(!d)
						})
					);
				}
			})
		: null;
}
