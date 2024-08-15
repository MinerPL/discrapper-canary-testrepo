n.d(t, {
	Z: function () {
		return d;
	}
});
var s = n(735250);
n(470079);
var a = n(346163),
	i = n(587431),
	r = n(539290),
	l = n(981631),
	o = n(689938),
	c = n(148362);
function d(e) {
	let t,
		{ guild: n } = e,
		{ resubmittingEnableRequest: d, resubmissionError: u, createEnableRequest: _, resubmittedRequest: I, requestRejectedNoticeText: E, reapplyNoticeText: T } = (0, a.Z)(n),
		m = n.hasFeature(l.oNc.CREATOR_MONETIZABLE_RESTRICTED),
		N = n.hasFeature(l.oNc.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
	if (null != u)
		return (0, s.jsx)(i.Z, {
			className: c.noticeContainer,
			children: u.getAnyErrorMessage()
		});
	let S = null;
	return (
		null != E ? (S = E) : I ? (S = o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUEST_PENDING) : null != T ? ((S = T), (t = o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SUBMIT_APPEAL_CTA)) : N ? (S = o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_READ_ONLY_FOR_PENDING_NEW_OWNER_PENDING_NOTICE) : m && (S = o.Z.Messages.CREATOR_MONETIZATION_SETTINGS_RESTRICTED_NOTICE),
		null != S
			? (0, s.jsx)(r.Z, {
					className: c.noticeContainer,
					notice: S,
					ctaLabel: t,
					ctaLoading: d,
					onClick: _
				})
			: null
	);
}
