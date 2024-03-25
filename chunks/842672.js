"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("77078"),
  u = n("244201"),
  i = n("558286"),
  a = n("49111");
let r = "guild-event-modal";
var d = () => {
  let e = (0, u.useAppContext)(),
    t = e === a.AppContext.POPOUT ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT;
  return {
    modalKey: r,
    contextKey: t,
    onCloseRequest: () => {
      i.useGuildEventModalStore.getState().canCloseModal && (0, l.closeModal)(r, t)
    }
  }
}