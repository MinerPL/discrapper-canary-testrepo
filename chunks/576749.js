var l = t(481060),
  i = t(40851),
  u = t(334877),
  s = t(981631);
let r = 'guild-event-modal';
n.Z = () => {
  let e = (0, i.bp)() === s.IlC.POPOUT ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT;
  return {
modalKey: r,
contextKey: e,
onCloseRequest: () => {
  u.l.getState().canCloseModal && (0, l.closeModal)(r, e);
}
  };
};