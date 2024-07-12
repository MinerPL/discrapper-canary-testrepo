i.d(e, {
  Z: function() {
return f;
  }
}), i(47120);
var t = i(735250);
i(470079);
var r = i(442837),
  a = i(481060),
  l = i(45114),
  u = i(456269),
  s = i(344185),
  o = i(569471),
  d = i(131704),
  c = i(324067),
  Z = i(306680),
  h = i(981631),
  M = i(689938);

function f(n) {
  let e = function(n) {
let e = (0, u.n2)(n.guild_id, n.id),
  i = (0, r.e7)([
    Z.ZP,
    c.Z,
    s.Z,
    o.Z
  ], () => {
    if (n.isForumPost())
      return Z.ZP.isForumPostUnread(n.id);
    if (n.type !== h.d4z.GUILD_CATEGORY)
      return Z.ZP.hasUnreadOrMentions(n.id);
    {
      let e = c.Z.getCategories(n.getGuildId());
      if (null == e[n.id])
        return !1;
      if (e[n.id].some(n => {
          let {
            channel: e
          } = n;
          return (0, d.Em)(e.type) && Z.ZP.hasUnreadOrMentions(e.id);
        }))
        return !0;
      let i = new Set(e[n.id].map(n => n.channel.id)),
        t = s.Z.getThreadsForGuild(n.guild_id);
      for (let n in t)
        if (i.has(n)) {
          for (let e in t[n])
            if (o.Z.hasJoined(e) && !o.Z.isMuted(e) && Z.ZP.hasUnreadOrMentions(e))
              return !0;
        }
      return !1;
    }
  }, [n]);
return n.isForumLikeChannel() ? e > 0 : i;
  }(n);
  return (0, t.jsx)(a.MenuItem, {
id: 'mark-channel-read',
label: M.Z.Messages.MARK_AS_READ,
action: function() {
  (0, l.U6)(n);
},
disabled: !e
  });
}