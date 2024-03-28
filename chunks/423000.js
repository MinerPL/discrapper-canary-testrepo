"use strict";
n.r(t), n.d(t, {
  handleInaccessiblePage: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("703656"),
  i = n("896797"),
  r = n("984933"),
  o = n("944486"),
  u = n("981631");

function d(e, t) {
  if ((0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("22706")]).then(n.bind(n, "438725"));
      return t => (0, a.jsx)(e, {
        ...t
      })
    }), o.default.getChannelId(e) === t) {
    var d;
    (0, l.replaceWith)(u.Routes.CHANNEL(e, null === (d = r.default.getDefaultChannel(e)) || void 0 === d ? void 0 : d.id))
  } else(0, l.replaceWith)(i.default.defaultRoute)
}