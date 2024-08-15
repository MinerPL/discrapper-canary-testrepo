n.d(t, {
  i: function() {
return d;
  }
}), n(47120);
var r = n(470079),
  i = n(399606),
  a = n(430824),
  s = n(339085),
  o = n(906411),
  l = n(231053),
  u = n(981631);
let c = (e, t, n) => {
let r = null != n ? e.getCustomEmojiById(n) : null;
if ((null == r ? void 0 : r.type) === o.B.GUILD)
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
  joinedEmojiSourceGuildRecord: o,
  emoji: d
} = (0, i.cj)([
  s.ZP,
  a.Z
], () => c(s.ZP, a.Z, t)), _ = null != o, E = null != o && o.hasFeature(u.oNc.DISCOVERABLE), f = (!_ || E) && null != t, [h, p] = r.useState(f), [m, I] = r.useState(null), T = null != o ? l.JO.createFromGuildRecord(o) : null, [g, S] = r.useState(T), [A, N] = r.useState(null);
return r.useEffect(() => {
  null == n || n();
  let e = async () => {
    let e = null != t ? await (0, l.Fi)(t) : null;
    if (null != e)
      switch (I(e.type), e.type) {
        case l.w6.APPLICATION:
          N(e.application);
          break;
        case l.w6.GUILD:
          S(e.guild);
      }
    p(!1), null == n || n();
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
  expressionSourceGuild: g,
  expressionSourceApplication: A,
  sourceType: m,
  joinedEmojiSourceGuildRecord: o,
  hasJoinedEmojiSourceGuild: _,
  emoji: d,
  isFetching: h
};
  };