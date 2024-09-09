n.d(t, {
    h: function () {
        return o;
    }
});
var i = n(735250);
n(470079);
var a = n(481060),
    s = n(671533),
    r = n(981631),
    l = n(451179);
function o(e) {
    let { buttonText: t, onGoBack: n, onDismiss: o, showCloseButton: c } = e;
    return (0, i.jsxs)(a.Notice, {
        className: l.backNotice,
        children: [
            c &&
                (0, i.jsx)(a.NoticeCloseButton, {
                    onClick: o,
                    noticeType: r.kVF.BACK_TO_PREVIOUS_SCREEN
                }),
            (0, i.jsxs)(a.Button, {
                className: l.backButton,
                innerClassName: l.backButtonInner,
                look: a.Button.Looks.OUTLINED,
                color: a.Button.Colors.WHITE,
                size: a.Button.Sizes.NONE,
                onClick: n,
                children: [
                    (0, i.jsx)(s.Z, {
                        width: 16,
                        height: 16,
                        direction: s.Z.Directions.LEFT,
                        className: l.__invalid_backArrow
                    }),
                    t
                ]
            })
        ]
    });
}
