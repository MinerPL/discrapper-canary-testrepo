"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("884691"),
  l = n("841098"),
  a = n("845579"),
  i = n("641126"),
  r = n("849197"),
  o = n("905206"),
  u = n("973799");

function d(e, t) {
  var n;
  let d = (0, r.useInteractivePollMessage)(e),
    c = (0, i.useChannelPollInteractions)(d.getChannelId()),
    E = c[d.id],
    f = (0, u.default)(null === (n = d.poll) || void 0 === n ? void 0 : n.expiry),
    _ = a.AnimateEmoji.useSetting(),
    T = (0, l.default)(),
    I = null != t ? t : T;
  return s.useMemo(() => (0, o.default)(d, E, {
    animateEmoji: _,
    theme: I,
    formattedExpirationLabel: f
  }), [_, d, E, f, I])
}