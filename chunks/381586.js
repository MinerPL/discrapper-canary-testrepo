"use strict";
n.r(t), n.d(t, {
  useIsDismissibleContentTypeDismissed: function() {
    return r
  }
});
var a = n("442837"),
  l = n("581883"),
  s = n("915486"),
  i = n("57207");

function r(e) {
  let t = (0, i.useNewUserDismissibleContent)([e]),
    n = (0, a.useStateFromStores)([l.default], () => {
      var e;
      return null === (e = l.default.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
    });
  return 0 === t.length || null != n && (0, s.hasBit)(n, e)
}