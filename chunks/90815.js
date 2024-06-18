"use strict";
t.d(s, {
  q: function() {
    return l
  }
});
var n = t(735250);
t(470079);
var i = t(952265);

function l(e) {
  let {
    demonetized: s = !1
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  (0, i.ZD)(async () => {
    let {
      default: i
    } = await Promise.all([t.e("99387"), t.e("90220")]).then(t.bind(t, 418225));
    return t => (0, n.jsx)(i, {
      guildId: e,
      demonetized: s,
      ...t
    })
  }, {
    onCloseRequest: () => {}
  })
}