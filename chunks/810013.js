t.d(n, {
	Z: function () {
		return m;
	}
});
var l = t(735250);
t(470079);
var s = t(442837),
	a = t(481060),
	r = t(314897),
	i = t(938475),
	o = t(499596),
	c = t(537135),
	u = t(689938),
	d = t(458623);
function m(e) {
	let { channel: n } = e,
		t = (0, s.e7)([r.default], () => r.default.getId()),
		m = (0, s.e7)([i.ZP], () => i.ZP.getVoiceStatesForChannel(n), [n]);
	return (0, l.jsx)(a.FormItem, {
		title: u.Z.Messages.GO_LIVE_MODAL_CURRENT_CHANNEL_FORM_TITLE,
		className: d.modalContent,
		titleClassName: d.formItemTitle,
		children: (0, l.jsx)(c.Z, {
			children: (0, l.jsx)(o.Z, {
				channel: n,
				users: m
					.filter((e) => {
						let { user: n } = e;
						return n.id !== t;
					})
					.map((e) => {
						let { user: n } = e;
						return n;
					})
			})
		})
	});
}
