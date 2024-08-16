var i = t(481060),
    c = t(40851),
    r = t(334877),
    l = t(981631);
let u = 'guild-event-modal';
n.Z = () => {
    let e = (0, c.bp)() === l.IlC.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
    return {
        modalKey: u,
        contextKey: e,
        onCloseRequest: () => {
            r.l.getState().canCloseModal && (0, i.closeModal)(u, e);
        }
    };
};
