"use strict";
n.d(t, {
  U: function() {
    return d
  }
}), n(47120);
var i = n(470079),
  r = n(399606),
  s = n(430824),
  o = n(339085),
  a = n(906411),
  l = n(400106),
  u = n(981631);
let _ = (e, t, n) => {
    let i = null != n ? e.getCustomEmojiById(n) : null;
    if ((null == i ? void 0 : i.type) === a.B.GUILD) return {
      emoji: i,
      joinedEmojiSourceGuildRecord: t.getGuild(null == i ? void 0 : i.guildId)
    };
    return {
      emoji: null,
      joinedEmojiSourceGuildRecord: null
    }
  },
  d = e => {
    let {
      emojiId: t,
      refreshPositionKey: n
    } = e, {
      joinedEmojiSourceGuildRecord: a,
      emoji: d
    } = (0, r.cj)([o.Z, s.Z], () => _(o.Z, s.Z, t)), c = null != a, E = null != a && a.hasFeature(u.oNc.DISCOVERABLE), I = (!c || E) && null != t, [T, h] = i.useState(I), S = null != a ? l.Z.createFromGuildRecord(a) : null, [f, N] = i.useState(S);
    return i.useEffect(() => {
      null == n || n();
      let e = async () => {
        N(null != t ? await l.Z.getGuildFromEmojiId(t) : null), h(!1), null == n || n()
      };
      if (I) {
        e();
        return
      }
      null == n || n()
    }, [t, I]), {
      expressionSourceGuild: f,
      joinedEmojiSourceGuildRecord: a,
      hasJoinedEmojiSourceGuild: c,
      emoji: d,
      isFetching: T
    }
  }