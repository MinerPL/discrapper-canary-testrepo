i.d(n, {
	Z: function () {
		return Z;
	}
});
var t = i(735250);
i(470079);
var l = i(442837),
	s = i(481060),
	a = i(889161),
	u = i(471253),
	o = i(924301),
	r = i(482241),
	d = i(765305),
	c = i(689938);
function Z(e, n, i) {
	let { canManageGuildEvent: Z } = (0, a.XJ)(null != i ? i : n),
		E = (0, l.e7)([o.ZP], () => o.ZP.isActive(e)),
		M = (0, l.e7)([o.ZP], () => o.ZP.getGuildScheduledEvent(e), [e]),
		_ = Z(M);
	if (null == e || !_ || !E || (null == M ? void 0 : M.entity_type) === d.WX.EXTERNAL) return null;
	let N = () => {
		if (null == i ? void 0 : i.isGuildStageVoice()) {
			(0, u.NZ)(i);
			return;
		}
		null != e && r.Z.endEvent(e, n.id), (0, s.closeAllModals)();
	};
	return (0, t.jsx)(s.MenuItem, {
		id: c.Z.Messages.END_EVENT,
		label: c.Z.Messages.END_EVENT,
		action: function () {
			(0, s.openModal)((e) =>
				(0, t.jsx)(s.ConfirmModal, {
					...e,
					header: c.Z.Messages.END_EVENT,
					confirmText: c.Z.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
					cancelText: c.Z.Messages.CANCEL,
					onConfirm: N,
					children: (0, t.jsx)(s.Text, {
						variant: 'text-md/normal',
						children: c.Z.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
					})
				})
			);
		},
		color: 'danger'
	});
}
