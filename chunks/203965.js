"use strict";
n.r(t), n.d(t, {
  useMessageRemindersLoader: function() {
    return u
  }
}), n("47120");
var s = n("470079"),
  a = n("442837"),
  l = n("904245"),
  i = n("592125"),
  r = n("375954"),
  o = n("822893");

function u(e) {
  let t = (0, a.useStateFromStoresArray)([i.default, r.default], () => e.filter(e => null != i.default.getChannel(e.channelId)).map(e => r.default.getMessage(e.channelId, e.messageId)).filter(e => null != e)),
    n = e.filter(e => null == r.default.getMessage(e.channelId, e.messageId)),
    [u, d] = s.useState(0 === n.length);
  return s.useEffect(() => {
    (0, o.fetchAndUpdateSavedMessages)()
  }, []), s.useEffect(() => {
    !u && (n.forEach(e => {
      try {
        l.default.fetchMessages({
          channelId: e.channelId,
          limit: 1,
          jump: {
            messageId: e.messageId,
            flash: !1,
            offset: 1
          }
        })
      } catch {}
    }), d(!0))
  }, [n, u]), t
}