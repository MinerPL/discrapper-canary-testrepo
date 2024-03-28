"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var s = n("735250");
n("470079");
var a = n("481060"),
  l = n("430824");

function i(e) {
  let {
    onCloseCallback: t,
    analyticsLocations: i,
    ...r
  } = e;
  (0, a.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("11166")]).then(n.bind(n, "971949"));
    return t => (0, s.jsx)(e, {
      ...t,
      ...r,
      analyticsLocations: i,
      guildCount: l.default.getGuildCount(),
      "aria-labelledby": "nitro-guild-cap-upsell"
    })
  }, {
    onCloseCallback: t
  })
}