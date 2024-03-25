"use strict";
n.r(t), n.d(t, {
  useProfileThemedPanelBackground: function() {
    return u
  }
});
var a = n("446674"),
  l = n("77078"),
  s = n("217513"),
  i = n("906889"),
  r = n("697218");

function u(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .8,
    u = arguments.length > 3 ? arguments[3] : void 0,
    o = function(e, t) {
      let n = (0, a.useStateFromStores)([r.default], () => r.default.getUser(e), [e]),
        l = (0, s.default)(e, t),
        {
          profileTheme: u
        } = (0, i.default)(n, l, {
          isPreview: !0
        });
      return u
    }(e, t);
  return (0, l.useToken)(null != u ? u : l.tokens.colors.BACKGROUND_NESTED_FLOATING, o).hex({
    opacity: n
  })
}