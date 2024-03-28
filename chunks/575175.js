"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("846027"),
  i = n("468026"),
  r = n("503856"),
  o = n("689938");

function u(e, t) {
  if (t && (0, r.isRTCConnectedInHub)()) {
    (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("41281")]).then(n.bind(n, "669732"));
      return t => (0, a.jsx)(e, {
        ...t
      })
    });
    return
  }
  if (t) {
    (0, l.openModal)(e => (0, a.jsx)(i.default, {
      ...e,
      title: o.default.Messages.SUPPRESSED,
      body: o.default.Messages.SUPPRESSED_PERMISSION_BODY
    }));
    return
  }
  if (e) {
    (0, l.openModal)(e => (0, a.jsx)(i.default, {
      ...e,
      title: o.default.Messages.SERVER_MUTED_DIALOG_TITLE,
      body: o.default.Messages.SERVER_MUTED_DIALOG_BODY
    }));
    return
  }
  s.default.toggleSelfMute()
}