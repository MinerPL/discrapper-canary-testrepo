n.r(e);
var o = n(735250);
n(470079);
var t = n(481060),
    C = n(194359),
    i = n(468026),
    a = n(689938);
e.default = (s) =>
    (0, o.jsx)(i.default, {
        confirmText: a.Z.Messages.CLEAR_INCOMING_REQUESTS_CONFIRMATION_CTA,
        title: a.Z.Messages.CLEAR_INCOMING_REQUESTS_CONFIRMATION_TITLE,
        cancelText: a.Z.Messages.CANCEL,
        onConfirm: () => {
            C.Z.clearPendingRelationships();
        },
        body: a.Z.Messages.CLEAR_INCOMING_REQUESTS_CONFIRMATION_BODY.format({ incomingRequestCount: s.incomingRequestCount }),
        confirmColor: t.ButtonColors.RED,
        ...s
    });
