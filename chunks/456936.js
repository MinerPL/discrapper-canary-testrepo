"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var s = n("872717"),
  l = n("755624"),
  a = n("263024"),
  i = n("42203"),
  r = n("377253"),
  o = n("660478"),
  u = n("697218"),
  d = n("299039"),
  c = n("49111");
async function E(e, t) {
  let n = u.default.getCurrentUser();
  if (null == n) return;
  let E = r.default.getMessages(e),
    f = E.toArray().filter(e => 0 > d.default.compare(e.id, t)).sort((e, t) => d.default.compare(e.id, t.id)).reverse()[0],
    _ = null == f ? d.default.atPreviousMillisecond(t) : f.id,
    T = 0;
  E.forAll(e => {
    d.default.compare(e.id, _) > 0 && (0, o.shouldBadgeMessage)(e, n) && T++
  });
  let I = i.default.getChannel(e);
  null != I && I.isThread() && (I.isArchivedThread() && await a.default.unarchiveThread(I, !1), !l.default.hasJoined(e) && await a.default.joinThread(I, "Mark Unread")), s.HTTP.post({
    url: c.Endpoints.MESSAGE_ACK(e, _),
    body: {
      manual: !0,
      mention_count: T
    },
    oldFormErrors: !0
  })
}