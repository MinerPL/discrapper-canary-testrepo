s.d(t, {
    Z: function () {
        return _;
    }
}), s(47120);
var n = s(735250);
s(470079);
var a = s(442837), i = s(481060), r = s(607070), o = s(122890), l = s(285952), c = s(300395), d = s(796116);
function _(e) {
    let {
            purchaseState: t,
            currentStep: s,
            onClose: _
        } = e, [E, u] = (0, o.z)({
            purchaseState: t,
            currentStep: s,
            initialScene: c.fe.Scenes.ENTRY,
            purchaseScene: c.fe.Scenes.STARS,
            errorScene: c.fe.Scenes.ERROR,
            successScene: c.fe.Scenes.SUCCESS
        }), T = (0, a.e7)([r.Z], () => r.Z.useReducedMotion);
    return (0, n.jsxs)(i.ModalHeader, {
        align: l.Z.Align.START,
        className: d.header,
        separator: !1,
        children: [
            (0, n.jsx)(c.fe, {
                className: d.animation,
                nextScene: E,
                onScenePlay: e => u(c.fe.getNextScene(e)),
                pauseWhileUnfocused: !1,
                pause: T
            }),
            (0, n.jsx)('div', { className: d.headerTitle }),
            (0, n.jsx)(i.ModalCloseButton, {
                onClick: _,
                className: d.closeButton
            })
        ]
    });
}
