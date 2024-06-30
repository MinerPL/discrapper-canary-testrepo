n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250);
n(470079);
var a = n(481060), l = n(607187), s = n(112560), r = n(981631), o = n(689938), c = n(299993), u = n(800350);
function d(e) {
    let {
        channel: t,
        guild: d,
        width: h,
        inPopout: p
    } = e;
    return (0, i.jsx)(l.Z, {
        className: c.root,
        children: (0, i.jsx)(s.Z, {
            artURL: u,
            size: (0, s.L)(h),
            header: o.Z.Messages.STREAM_SINGLE_PERSON_BODY,
            onCTAClick: () => (0, a.openModalLazy)(async () => {
                let {default: e} = await Promise.all([
                    n.e('7654'),
                    n.e('17520')
                ]).then(n.bind(n, 560114));
                return n => (0, i.jsx)(e, {
                    ...n,
                    guild: d,
                    channel: t,
                    source: r.t4x.CHANNEL_CALL
                });
            }, { contextKey: p ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT }),
            callToAction: o.Z.Messages.INSTANT_INVITE
        })
    });
}
