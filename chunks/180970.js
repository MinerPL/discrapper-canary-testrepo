n.r(t),
    n.d(t, {
        default: function () {
            return u;
        }
    });
var a = n(735250),
    s = n(470079),
    o = n(77866),
    l = n(481060),
    r = n(332664),
    i = n(987562),
    c = n(689938);
function u(e) {
    let { onClose: t, transitionState: u } = e,
        d = (0, o.Z)(i.CE),
        b = s.useCallback((e) => {
            let { rating: t, problem: s } = e;
            if (null != t)
                null != s &&
                    (0, l.openModalLazy)(async () => {
                        let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                        return (t) =>
                            (0, a.jsx)(e, {
                                body: c.Z.Messages.CALL_FEEDBACK_CONFIRMATION,
                                ...t
                            });
                    });
        }, []);
    return (0, a.jsx)(r.Z, {
        modalType: 'block_user',
        header: 'header goes here',
        body: 'body goes here',
        problemTitle: 'section header goes here',
        problems: d,
        feedbackProblems: [i.F5.OTHER],
        onSubmit: b,
        onClose: t,
        transitionState: u,
        otherKey: i.F5.OTHER
    });
}
