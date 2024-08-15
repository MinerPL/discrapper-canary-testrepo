n.d(t, {
	Y: function () {
		return f;
	}
}),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(286379),
	l = n(442837),
	r = n(481060),
	o = n(797614),
	c = n(699516),
	u = n(378298),
	d = n(359119),
	h = n(473092),
	m = n(177342),
	p = n(134612),
	_ = n(689938);
function f(e) {
	let { channelId: t, warningId: f, senderId: E } = e,
		g = a.useCallback(() => {
			(0, u.T)(t, [f]);
		}, [t, f]),
		C = (0, l.e7)([c.Z], () => c.Z.isBlocked(E)),
		I = a.useMemo(
			() => ({
				channelId: t,
				warningId: f,
				senderId: E,
				warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2
			}),
			[t, f, E]
		);
	a.useEffect(() => {
		(0, h.KQ)({
			...I,
			viewName: h.pb.SAFETY_WARNING_BANNER
		}),
			o.Z.increment({ name: s.V.SAFETY_WARNING_VIEW });
	}, [I]);
	let x = a.useCallback(
			(e) => {
				(0, h.qc)({
					...I,
					cta: e
				});
			},
			[I]
		),
		T = a.useCallback(() => {
			(0, r.openModalLazy)(
				async () => {
					let { default: e } = await Promise.all([n.e('37229'), n.e('89650')]).then(n.bind(n, 611446));
					return (n) => {
						let { transitionState: a, onClose: s } = n;
						return (0, i.jsx)(e, {
							otherUserId: E,
							channelId: t,
							warningId: f,
							warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
							transitionState: a,
							onClose: s
						});
					};
				},
				{ modalKey: p.X_ }
			),
				x(h.NM.USER_BANNER_OPEN_SAFETY_TOOLS);
		}, [t, E, f, x]),
		N = a.useCallback(() => {
			g(), x(h.NM.USER_BANNER_BLOCK_CONFIRM);
		}, [g, x]),
		v = a.useCallback(() => {
			g(), x(h.NM.USER_BANNER_BLOCK_AND_REPORT_CONFIRM);
		}, [g, x]),
		S = a.useCallback(() => {
			(0, r.openModalLazy)(async () => {
				let { default: e } = await n.e('19538').then(n.bind(n, 699783));
				return (n) => {
					let { transitionState: a, onClose: s } = n;
					return (0, i.jsx)(e, {
						transitionState: a,
						onBlock: N,
						onBlockAndReport: v,
						onCancel: () => {
							null == s || s(), x(h.NM.USER_BANNER_BLOCK_CANCEL);
						},
						onClose: s,
						userId: E,
						channelId: t
					});
				};
			});
		}, [N, v, E, t, x]);
	return (0, i.jsx)(m.Q, {
		channelId: t,
		warningId: f,
		senderId: E,
		warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
		header: _.Z.Messages.INAPPROPRIATE_CONVERSATION_BANNER_HEADER,
		description: _.Z.Messages.INAPPROPRIATE_CONVERSATION_BANNER_DESCRIPTION,
		onDismiss: g,
		buttons: [
			{
				text: _.Z.Messages.INAPPROPRIATE_CONVERSATION_BANNER_OPEN_SAFETY_TOOLS_BUTTON,
				color: r.Button.Colors.BRAND,
				onclick: T
			},
			...(C
				? []
				: [
						{
							text: _.Z.Messages.INAPPROPRIATE_CONVERSATION_BANNER_BLOCK_BUTTON,
							color: r.Button.Colors.PRIMARY,
							onclick: S
						}
					])
		]
	});
}
