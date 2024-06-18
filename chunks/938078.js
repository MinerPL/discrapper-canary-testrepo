"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(933557),
  r = n(592125),
  s = n(699516),
  o = n(594174),
  a = n(727785),
  l = n(981631);

function u(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Z,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.default,
    u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.Z,
    _ = t.getChannel(e);
  if (null == _) return null;
  let d = (0, i.F6)(_, n, u);
  switch (_.type) {
    case l.d4z.DM: {
      let e = n.getUser(_.getRecipientId());
      if (null == e) return null;
      return {
        type: a.h8.USER,
        record: e,
        score: 0,
        comparator: d
      }
    }
    case l.d4z.GROUP_DM:
      return {
        type: a.h8.GROUP_DM, record: _, score: 0, comparator: d
      };
    case l.d4z.GUILD_VOICE:
    case l.d4z.GUILD_STAGE_VOICE:
      return {
        type: a.h8.VOICE_CHANNEL, record: _, score: 0, comparator: d
      };
    default:
      return {
        type: a.h8.TEXT_CHANNEL, record: _, score: 0, comparator: d
      }
  }
}