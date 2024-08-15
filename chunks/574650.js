n(653041), n(47120);
var i = n(735250);
n(470079);
var a = n(120356),
	s = n.n(a),
	r = n(266067),
	l = n(442837),
	o = n(481060),
	c = n(430824),
	u = n(914010),
	d = n(693546),
	_ = n(305325),
	E = n(246364),
	I = n(937111),
	m = n(981631),
	T = n(176505),
	h = n(689938),
	N = n(975870),
	f = n(389397);
t.Z = () => {
	var e, t;
	let a = (0, l.e7)([u.Z], () => u.Z.getGuildId(), []),
		C = (0, l.e7)([c.Z], () => c.Z.getGuild(a), [a]),
		p = (0, l.e7)([I.Z], () => (null != a ? I.Z.getRequest(a) : null), [a]),
		g = (0, r.TH)(),
		S = (null === (e = (0, r.LX)(g.pathname, m.Z5c.CHANNEL(null == C ? void 0 : C.id, T.oC.GUILD_ONBOARDING))) || void 0 === e ? void 0 : e.isExact) === !0;
	if (null == C || !C.hasVerificationGate() || S) return null;
	let A = null !== (t = null == p ? void 0 : p.applicationStatus) && void 0 !== t ? t : E.wB.STARTED,
		R = null,
		x = null,
		O = null,
		M = [N.notice, f.notice];
	switch (A) {
		case E.wB.SUBMITTED:
			(R = h.Z.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE),
				(x = h.Z.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION),
				(O = () => {
					(0, o.openModal)((e) =>
						(0, i.jsx)(o.ConfirmModal, {
							header: h.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
							confirmText: h.Z.Messages.CONFIRM,
							cancelText: h.Z.Messages.CANCEL,
							onConfirm: () => d.Z.removeGuildJoinRequest(C.id),
							confirmButtonColor: o.Button.Colors.BRAND,
							...e,
							children: (0, i.jsx)(o.Text, {
								variant: 'text-md/normal',
								children: h.Z.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION_SUBTITLE
							})
						})
					);
				});
			break;
		case E.wB.REJECTED:
			(R = h.Z.Messages.MEMBER_VERIFICATION_REJECTED_TITLE),
				(x = h.Z.Messages.MEMBER_VERIFICATION_LEARN_MORE),
				(O = () => {
					(0, o.openModalLazy)(async () => {
						let { default: e } = await n.e('3378').then(n.bind(n, 76075));
						return (t) =>
							(0, i.jsx)(e, {
								guildId: C.id,
								...t
							});
					});
				}),
				M.push(N.error);
			break;
		default:
			(R = h.Z.Messages.MEMBER_VERIFICATION_NOTICE_TEXT),
				(x = h.Z.Messages.MEMBER_VERIFICATION_NOTICE_CTA),
				(O = () => {
					(0, _.hk)(C.id);
				});
	}
	return (0, i.jsxs)('div', {
		className: s()(...M),
		children: [
			(0, i.jsx)(o.Text, {
				className: N.header,
				variant: 'text-sm/normal',
				children: R
			}),
			(0, i.jsx)(o.Button, {
				className: N.button,
				look: o.Button.Looks.OUTLINED,
				color: o.Button.Colors.WHITE,
				size: o.Button.Sizes.NONE,
				onClick: O,
				children: x
			})
		]
	});
};
