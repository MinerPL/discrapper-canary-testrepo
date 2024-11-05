n.d(t, {
    g: function () {
        return r;
    }
}),
    n(47120);
var i = n(192379);
function r(e) {
    let [t, n] = i.useState(),
        r = i.useCallback(
            (t) => {
                n(t), e();
            },
            [e]
        );
    return {
        onSelectApplication: r,
        onCloseAppDetails: i.useCallback(() => {
            n(void 0), e();
        }, [e]),
        selectedAppId: t
    };
}
