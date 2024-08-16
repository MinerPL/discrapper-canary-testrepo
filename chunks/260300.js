var i = n(544891),
    a = n(570140),
    s = n(981631);
t.Z = {
    show(e, t) {
        a.Z.wait(() =>
            a.Z.dispatch({
                type: 'TUTORIAL_INDICATOR_SHOW',
                tutorialId: e,
                renderData: t
            })
        );
    },
    hide(e) {
        a.Z.wait(() =>
            a.Z.dispatch({
                type: 'TUTORIAL_INDICATOR_HIDE',
                tutorialId: e
            })
        );
    },
    dismiss(e) {
        a.Z.wait(() =>
            a.Z.dispatch({
                type: 'TUTORIAL_INDICATOR_DISMISS',
                tutorialId: e
            })
        ),
            i.tn.put({
                url: s.ANM.TUTORIAL_INDICATOR(e),
                oldFormErrors: !0
            });
    },
    suppressAll() {
        a.Z.dispatch({ type: 'TUTORIAL_INDICATOR_SUPPRESS_ALL' }),
            i.tn.post({
                url: s.ANM.TUTORIAL_INDICATORS_SUPPRESS,
                oldFormErrors: !0
            });
    }
};
