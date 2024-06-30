n.d(t, {
    Z: function () {
        return l;
    }
});
var s = n(735250);
n(470079);
var a = n(587431), i = n(539290), r = n(689938);
function l(e) {
    let t, {
            resubmittingEnableRequest: n,
            resubmissionError: l,
            createEnableRequest: o,
            requestRejectedNoticeText: c,
            reapplyNoticeText: d,
            isApplicationPending: u
        } = e;
    if (null != l)
        return (0, s.jsx)(a.Z, { children: l.getAnyErrorMessage() });
    let _ = null;
    return u ? _ = r.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUEST_RECEIVED_AND_PENDING : null != c ? _ = c : null != d && (_ = d, t = r.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SUBMIT_APPEAL_CTA), null != _ ? (0, s.jsx)(i.Z, {
        notice: _,
        ctaLabel: t,
        ctaLoading: n,
        onClick: o
    }) : null;
}
