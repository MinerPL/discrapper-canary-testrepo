"use strict";
n.r(t), n.d(t, {
  useProfileThemedPanelBackground: function() {
    return o
  }
});
var a = n("442837"),
  l = n("481060"),
  s = n("318661"),
  i = n("721987"),
  r = n("594174");

function o(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .8,
    o = arguments.length > 3 ? arguments[3] : void 0,
    u = (0, a.useStateFromStores)([r.default], () => r.default.getUser(e), [e]),
    d = (0, s.default)(e, t),
    {
      theme: c
    } = (0, i.default)({
      user: u,
      displayProfile: d,
      isPreview: !0
    });
  return (0, l.useToken)(null != o ? o : l.tokens.colors.BACKGROUND_NESTED_FLOATING, c).hex({
    opacity: n
  })
}