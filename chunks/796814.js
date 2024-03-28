"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("470079"),
  l = s("442837"),
  n = s("80932"),
  i = s("110924"),
  r = s("471613"),
  o = s("889564");
let d = [];

function u(e) {
  let {
    revision: t,
    emojis: s
  } = (0, l.useStateFromStoresObject)([r.default], () => ({
    revision: r.default.getEmojiRevision(e),
    emojis: r.default.getEmojis(e)
  })), u = (0, i.default)(t);
  return a.useEffect(() => {
    (0, n.fetchEmoji)(e)
  }, [e]), a.useEffect(() => {
    null != u && u < t && (0, n.fetchEmoji)(e)
  }, [t, u, e]), a.useMemo(() => null == s ? d : s.filter(t => (0, o.isRoleSubscriptionEmoji)(t, e)), [s, e])
}