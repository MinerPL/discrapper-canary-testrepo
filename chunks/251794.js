"use strict";
n.r(t), n.d(t, {
  openDisableCommunication: function() {
    return a
  },
  openEnableCommunication: function() {
    return d
  }
});
var l = n("735250");
n("470079");
var i = n("481060");

function a(e, t, a) {
  (0, i.openModalLazy)(async () => {
    let {
      default: i
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("72920")]).then(n.bind(n, "109730"));
    return n => (0, l.jsx)(i, {
      guildId: e,
      userId: t,
      anaylticsLocations: a,
      ...n
    })
  })
}

function d(e, t, a) {
  (0, i.openModalLazy)(async () => {
    let {
      default: i
    } = await Promise.all([n.e("99387"), n.e("76233")]).then(n.bind(n, "171494"));
    return n => (0, l.jsx)(i, {
      guildId: e,
      userId: t,
      anaylticsLocations: a,
      ...n
    })
  })
}