n.r(t), n.d(t, {
    default: function () {
        return E;
    }
});
var i = n(735250);
n(470079);
var a = n(399606), s = n(481060), l = n(923500), r = n(522664), o = n(163268), c = n(774863), d = n(668058), u = n(160877), _ = n(689938);
function E(e) {
    let {
            channelId: t,
            messageId: n,
            transitionState: E,
            onClose: m
        } = e, I = (0, a.e7)([c.Z], () => c.Z.getFpMessageInfo(n)), T = I.attachments.map(e => e.id), h = I.attachments.map(e => e.filename), {
            reportFalsePositive: N,
            isReportFalsePositiveLoading: f
        } = (0, d.$)({
            onSuccess: () => {
                (0, u.s)(m), l.Z.disableFalsePositiveButton(t, n);
            },
            onError: () => {
                (0, s.showToast)((0, s.createToast)(_.Z.Messages.ERROR_GENERIC_TITLE, s.ToastType.FAILURE));
            },
            report: () => {
                (0, r.Eq)(t, n, T, h);
            }
        });
    return !(I.attachments.length > 0) && m(), (0, i.jsx)(u.$, {
        messageId: n,
        channelId: t,
        isReportFalsePositiveLoading: f,
        analyticsContext: o.UU.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
        onConfirmPress: N,
        transitionState: E,
        onClose: m
    });
}
