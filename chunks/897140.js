a.r(e);
var t = a(735250);
a(470079);
var _ = a(392711),
    o = a.n(_),
    c = a(792986),
    S = a(780384),
    d = a(481060),
    O = a(410030),
    n = a(313201),
    L = a(689938),
    l = a(50113),
    i = a(755524),
    r = a(788572),
    E = a(262529);
let C = [a(4921), a(663416), a(838295)],
    f = [i, r, E],
    M = [() => L.Z.Messages.FOLLOW_SUCCESS_MODAL_HEADER_01, () => L.Z.Messages.FOLLOW_SUCCESS_MODAL_HEADER_02, () => L.Z.Messages.FOLLOW_SUCCESS_MODAL_HEADER_03, () => L.Z.Messages.FOLLOW_SUCCESS_MODAL_HEADER_04, () => L.Z.Messages.FOLLOW_SUCCESS_MODAL_HEADER_05, () => L.Z.Messages.FOLLOW_SUCCESS_MODAL_HEADER_06, () => L.Z.Messages.FOLLOW_SUCCESS_MODAL_HEADER_07, () => L.Z.Messages.FOLLOW_SUCCESS_MODAL_HEADER_08, () => L.Z.Messages.FOLLOW_SUCCESS_MODAL_HEADER_09, () => L.Z.Messages.FOLLOW_SUCCESS_MODAL_HEADER_10];
e.default = (s) => {
    let { transitionState: e, onClose: a } = s,
        _ = (0, O.ZP)(),
        i = (0, n.Dt)(),
        r = (0, S.wj)(_) ? f : C,
        E = (0, c.Z)(() => o().sample(r), [r]),
        g = (0, c.Z)(() => o().sample(M), []);
    return (0, t.jsxs)(d.ModalRoot, {
        transitionState: e,
        className: l.root,
        'aria-labelledby': i,
        children: [
            (0, t.jsx)('img', {
                alt: '',
                src: E,
                className: l.image
            }),
            (0, t.jsxs)(d.ModalContent, {
                className: l.modal,
                children: [
                    (0, t.jsx)(d.Heading, {
                        variant: 'heading-xl/semibold',
                        className: l.followSuccessHeader,
                        id: i,
                        children: g()
                    }),
                    (0, t.jsx)(d.Text, {
                        color: 'text-muted',
                        variant: 'text-md/medium',
                        className: l.body,
                        children: L.Z.Messages.FOLLOW_SUCCESS_MODAL_BODY
                    }),
                    (0, t.jsx)(d.Button, {
                        onClick: a,
                        children: L.Z.Messages.TUTORIAL_CLOSE
                    })
                ]
            })
        ]
    });
};
