n.d(t, {
  U: function() {
return d;
  }
}), n(47120);
var r = n(470079),
  i = n(399606),
  a = n(430824),
  o = n(339085),
  s = n(906411),
  l = n(400106),
  u = n(981631);
let c = (e, t, n) => {
let r = null != n ? e.getCustomEmojiById(n) : null;
if ((null == r ? void 0 : r.type) === s.B.GUILD)
  return {
    emoji: r,
    joinedEmojiSourceGuildRecord: t.getGuild(null == r ? void 0 : r.guildId)
  };
return {
  emoji: null,
  joinedEmojiSourceGuildRecord: null
};
  },
  d = e => {
let {
  emojiId: t,
  refreshPositionKey: n
} = e, {
  joinedEmojiSourceGuildRecord: s,
  emoji: d
} = (0, i.cj)([
  o.Z,
  a.Z
], () => c(o.Z, a.Z, t)), _ = null != s, E = null != s && s.hasFeature(u.oNc.DISCOVERABLE), f = (!_ || E) && null != t, [h, p] = r.useState(f), m = null != s ? l.Z.createFromGuildRecord(s) : null, [I, T] = r.useState(m);
return r.useEffect(() => {
  null == n || n();
  let e = async () => {
    T(null != t ? await l.Z.getGuildFromEmojiId(t) : null), p(!1), null == n || n();
  };
  if (f) {
    e();
    return;
  }
  null == n || n();
}, [
  t,
  f
]), {
  expressionSourceGuild: I,
  joinedEmojiSourceGuildRecord: s,
  hasJoinedEmojiSourceGuild: _,
  emoji: d,
  isFetching: h
};
  };