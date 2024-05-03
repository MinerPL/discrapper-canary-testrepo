"use strict";
n.r(t), n.d(t, {
  handleInaccessiblePage: function() {
    return u
  }
});
var a = n("927723"),
  s = n("703656"),
  l = n("896797"),
  i = n("984933"),
  r = n("944486"),
  o = n("981631");

function u(e, t) {
  if ((0, a.showInaccessibleLinkModal)({
      kind: "channel"
    }), r.default.getChannelId(e) === t) {
    var n;
    (0, s.replaceWith)(o.Routes.CHANNEL(e, null === (n = i.default.getDefaultChannel(e)) || void 0 === n ? void 0 : n.id))
  } else(0, s.replaceWith)(l.default.defaultRoute)
}