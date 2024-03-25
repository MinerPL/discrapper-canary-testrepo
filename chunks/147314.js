"use strict";
s.r(t), s.d(t, {
  showNewTerms: function() {
    return n
  }
});
var a = s("37983");
s("884691");
var l = s("551042");

function n(e) {
  let {
    demonetized: t = !1
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  (0, l.openModalLazy)(async () => {
    let {
      default: l
    } = await s.el("476141").then(s.bind(s, "476141"));
    return s => (0, a.jsx)(l, {
      guildId: e,
      demonetized: t,
      ...s
    })
  }, {
    onCloseRequest: () => {}
  })
}