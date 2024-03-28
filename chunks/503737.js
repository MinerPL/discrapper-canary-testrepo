"use strict";
n.r(t);
var l = n("735250");
n("470079");
var a = n("481060"),
  s = n("570140"),
  i = n("468026"),
  r = n("317770"),
  o = n("689938");
let u = "ActivityInviteManager",
  d = () => {
    s.default.dispatch({
      type: "ACTIVITY_INVITE_MODAL_CLOSE"
    })
  };
class c extends r.default {
  _initialize() {
    s.default.subscribe("ACTIVITY_INVITE_MODAL_OPEN", this.handleModalOpen), s.default.subscribe("ACTIVITY_INVITE_MODAL_CLOSE", this.handleModalClose)
  }
  _terminate() {
    s.default.unsubscribe("ACTIVITY_INVITE_MODAL_OPEN", this.handleModalOpen), s.default.unsubscribe("ACTIVITY_INVITE_MODAL_CLOSE", this.handleModalClose)
  }
  handleModalOpen(e) {
    let {
      activity: t,
      isPrivate: s
    } = e;
    s ? (0, a.openModal)(e => (0, l.jsx)(i.default, {
      title: o.default.Messages.ACTIVITY_INVITE_MODAL_HEADER.format({
        name: t.name
      }),
      body: o.default.Messages.ACTIVITY_INVITE_PRIVATE,
      confirmText: o.default.Messages.OKAY,
      ...e
    }), {
      onCloseCallback: d,
      modalKey: u
    }) : (0, a.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("79921")]).then(n.bind(n, "699099"));
      return t => (0, l.jsx)(e, {
        ...t
      })
    }, {
      onCloseCallback: d,
      modalKey: u
    })
  }
  handleModalClose(e) {
    (0, a.closeModal)(u)
  }
}
t.default = new c