"use strict";
i.r(t);
var a = i("735250");
i("470079");
var n = i("481060"),
  l = i("570140");
t.default = {
  open(e) {
    l.default.dispatch({
      type: "SAFETY_HUB_APPEAL_OPEN",
      classificationId: e
    }), (0, n.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([i.e("99387"), i.e("65652")]).then(i.bind(i, "208265"));
      return i => (0, a.jsx)(t, {
        classificationId: e,
        ...i
      })
    })
  },
  close() {
    l.default.dispatch({
      type: "SAFETY_HUB_APPEAL_CLOSE"
    })
  }
}