n.r(t),
    n.d(t, {
        default: function () {
            return E;
        }
    });
var i = n(735250);
n(470079);
var a = n(399606),
    s = n(481060),
    r = n(923500),
    l = n(522664),
    o = n(163268),
    c = n(774863),
    u = n(668058),
    d = n(160877),
    _ = n(689938);
function E(e) {
    let { channelId: t, messageId: n, transitionState: E, onClose: I } = e,
        m = (0, a.e7)([c.Z], () => c.Z.getFpMessageInfo(n)),
        T = m.attachments.map((e) => e.id),
        h = m.attachments.map((e) => e.filename),
        { reportFalsePositive: N, isReportFalsePositiveLoading: f } = (0, u.$)({
            onSuccess: () => {
                (0, d.s)(I), r.Z.disableFalsePositiveButton(t, n);
            },
            onError: () => {
                (0, s.showToast)((0, s.createToast)(_.Z.Messages.ERROR_GENERIC_TITLE, s.ToastType.FAILURE));
            },
            report: () => {
                (0, l.Eq)(t, n, T, h);
            }
        });
    return (
        !(m.attachments.length > 0) && I(),
        (0, i.jsx)(d.$, {
            messageId: n,
            channelId: t,
            isReportFalsePositiveLoading: f,
            analyticsContext: o.UU.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
            onConfirmPress: N,
            transitionState: E,
            onClose: I
        })
    );
}
