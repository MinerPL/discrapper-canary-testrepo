"use strict";
n.r(t);
var l = n("481060"),
  u = n("40851"),
  a = n("334877"),
  s = n("981631");
let d = "guild-event-modal";
t.default = () => {
  let e = (0, u.useAppContext)() === s.AppContext.POPOUT ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT;
  return {
    modalKey: d,
    contextKey: e,
    onCloseRequest: () => {
      a.useGuildEventModalStore.getState().canCloseModal && (0, l.closeModal)(d, e)
    }
  }
}