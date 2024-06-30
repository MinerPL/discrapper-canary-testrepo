n.d(t, {
    M: function () {
        return f;
    }
});
var i = n(735250), a = n(470079), l = n(286379), s = n(481060), r = n(194359), o = n(797614), c = n(378298), u = n(359119), d = n(473092), h = n(177342), p = n(134612), m = n(981631), _ = n(689938);
function f(e) {
    let {
            channelId: t,
            warningId: f,
            senderId: E
        } = e, C = a.useCallback(() => {
            (0, c.T)(t, [f]);
        }, [
            t,
            f
        ]), g = a.useCallback(e => () => {
            r.Z.addRelationship({
                userId: E,
                context: { location: p.zr },
                type: m.OGo.BLOCKED
            }), C(), (0, s.showToast)((0, s.createToast)(_.Z.Messages.STRANGER_DANGER_BLOCK_CONFIRM, s.ToastType.SUCCESS)), (0, d.qc)({
                channelId: t,
                warningId: f,
                senderId: E,
                warningType: u.pj.STRANGER_DANGER,
                cta: e
            });
        }, [
            C,
            t,
            f,
            E
        ]);
    a.useEffect(() => {
        (0, d.MC)(m.rMx.SAFETY_WARNING_VIEWED, {
            channelId: t,
            warningId: f,
            senderId: E,
            warningType: u.pj.STRANGER_DANGER
        }), o.Z.increment({ name: l.V.SAFETY_WARNING_VIEW });
    }, [
        t,
        f,
        E
    ]);
    let I = () => {
            (0, s.openModalLazy)(async () => {
                let {default: e} = await n.e('95226').then(n.bind(n, 816960));
                return n => {
                    let {
                        transitionState: a,
                        onClose: l
                    } = n;
                    return (0, i.jsx)(e, {
                        transitionState: a,
                        onClose: l,
                        channelId: t,
                        warningId: f,
                        senderId: E,
                        handleBlock: () => {
                            x(d.NM.USER_MODAL_BLOCK_CONFIRM, d.NM.USER_MODAL_BLOCK_CANCEL, I);
                        }
                    });
                };
            });
        }, x = (e, a, l) => {
            (0, s.openModalLazy)(async () => {
                let {default: s} = await n.e('68747').then(n.bind(n, 744373));
                return n => (0, i.jsx)(s, {
                    ...n,
                    userId: E,
                    confirmBlock: g(e),
                    onCancel: () => {
                        null == l || l(), (0, d.qc)({
                            channelId: t,
                            warningId: f,
                            senderId: E,
                            warningType: u.pj.STRANGER_DANGER,
                            cta: a
                        });
                    }
                });
            });
        };
    return (0, i.jsx)(h.Q, {
        channelId: t,
        warningId: f,
        senderId: E,
        warningType: u.pj.STRANGER_DANGER,
        header: _.Z.Messages.STRANGER_DANGER_BANNER_HEADER,
        description: _.Z.Messages.STRANGER_DANGER_BANNER_DESCRIPTION,
        onDismiss: C,
        buttons: [
            {
                text: _.Z.Messages.STRANGER_DANGER_BANNER_MORE_TIPS,
                color: s.Button.Colors.BRAND,
                onclick: () => {
                    I(), (0, d.qc)({
                        channelId: t,
                        warningId: f,
                        senderId: E,
                        warningType: u.pj.STRANGER_DANGER,
                        cta: d.NM.OPEN_MORE_TIPS
                    });
                }
            },
            {
                text: _.Z.Messages.STRANGER_DANGER_BANNER_BLOCK,
                color: s.Button.Colors.RED,
                onclick: () => x(d.NM.USER_BANNER_BLOCK_CONFIRM, d.NM.USER_BANNER_BLOCK_CANCEL)
            }
        ]
    });
}
