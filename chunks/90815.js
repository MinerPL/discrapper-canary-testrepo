"use strict";
s.r(t), s.d(t, {
  showNewTerms: function() {
    return n
  }
});
var a = s("735250");
s("470079");
var l = s("952265");

function n(e) {
  let {
    demonetized: t = !1
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  (0, l.openModalLazy)(async () => {
    let {
      default: l
    } = await Promise.all([s.e("99387"), s.e("90220")]).then(s.bind(s, "418225"));
    return s => (0, a.jsx)(l, {
      guildId: e,
      demonetized: t,
      ...s
    })
  }, {
    onCloseRequest: () => {}
  })
}