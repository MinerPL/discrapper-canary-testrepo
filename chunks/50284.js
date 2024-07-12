n.d(t, {
  Z: function() {
return _;
  }
});
var i = n(544891),
  a = n(569471),
  s = n(346479),
  r = n(592125),
  l = n(375954),
  o = n(306680),
  c = n(594174),
  d = n(709054),
  u = n(981631);
async function _(e, t) {
  let n = c.default.getCurrentUser();
  if (null == n)
return;
  let _ = l.Z.getMessages(e),
E = _.toArray().filter(e => 0 > d.default.compare(e.id, t)).sort((e, t) => d.default.compare(e.id, t.id)).reverse()[0],
I = null == E ? d.default.atPreviousMillisecond(t) : E.id,
m = 0;
  _.forAll(e => {
d.default.compare(e.id, I) > 0 && (0, o.Ex)(e, n) && m++;
  });
  let T = r.Z.getChannel(e);
  null != T && T.isThread() && (T.isArchivedThread() && await s.Z.unarchiveThread(T, !1), !a.Z.hasJoined(e) && await s.Z.joinThread(T, 'Mark Unread')), i.tn.post({
url: u.ANM.MESSAGE_ACK(e, I),
body: {
  manual: !0,
  mention_count: m
},
oldFormErrors: !0
  });
}