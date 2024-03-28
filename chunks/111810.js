"use strict";
a.r(s), a.d(s, {
  default: function() {
    return r
  }
});
var t = a("470079"),
  l = a("252618"),
  n = a("358085"),
  u = a("689938");

function r() {
  return t.useEffect(() => {
    !n.isPlatformEmbedded && (0, l.flashPageTitle)({
      messages: [u.default.Messages.GO_LIVE_HEY, u.default.Messages.GO_LIVE_LOOK, u.default.Messages.GO_LIVE_LISTEN],
      interval: 600,
      count: 20,
      onlyWhenBlurred: !0
    })
  }, []), null
}