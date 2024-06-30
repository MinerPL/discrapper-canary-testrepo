t.r(n), t.d(n, {
    default: function () {
        return E;
    }
});
var i = t(735250);
t(470079);
var a = t(481060), r = t(522664), l = t(651530), o = t(163268), s = t(668058), u = t(112554), c = t(160877), d = t(689938);
function E(e) {
    let {
            channelId: n,
            messageId: t,
            mediaItemUrl: E,
            embedId: f,
            transitionState: M,
            onClose: I
        } = e, g = (0, l.yh)(), m = (0, u.K)(n, t, E), _ = (0, u.b)(n, t, f), {
            reportFalsePositive: Z,
            isReportFalsePositiveLoading: S
        } = (0, s.$)({
            onSuccess: () => (0, c.s)(I),
            onError: () => {
                (0, a.showToast)((0, a.createToast)(d.Z.Messages.ERROR_GENERIC_TITLE, a.ToastType.FAILURE));
            },
            report: () => {
                (0, r.Uj)(n, t, m.map(e => e.id), _.map(e => e.id));
            }
        });
    return !(g && (m.length > 0 || _.length > 0)) && I(), (0, i.jsx)(c.$, {
        messageId: t,
        channelId: n,
        isReportFalsePositiveLoading: S,
        analyticsContext: o.UU.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
        onConfirmPress: Z,
        attachmentPreview: 1 === m.length && 0 === _.length ? m[0] : void 0,
        embedPreview: 1 === _.length && 0 === m.length ? _[0] : void 0,
        transitionState: M,
        onClose: I
    });
}
