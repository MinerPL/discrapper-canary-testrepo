"use strict";
t.r(n), t.d(n, {
  default: function() {
    return v
  }
}), t("47120");
var a = t("735250");
t("470079");
var l = t("442837"),
  u = t("481060"),
  r = t("45114"),
  d = t("456269"),
  i = t("344185"),
  s = t("569471"),
  o = t("131704"),
  f = t("324067"),
  c = t("306680"),
  h = t("981631"),
  M = t("689938");

function v(e) {
  let n = function(e) {
    let n = (0, d.useUnreadThreadsCountForParent)(e.guild_id, e.id),
      t = (0, l.useStateFromStores)([c.default, f.default, i.default, s.default], () => {
        if (e.isForumPost()) return c.default.isForumPostUnread(e.id);
        if (e.type !== h.ChannelTypes.GUILD_CATEGORY) return c.default.hasUnread(e.id);
        {
          let n = f.default.getCategories(e.getGuildId());
          if (null == n[e.id]) return !1;
          if (n[e.id].some(e => {
              let {
                channel: n
              } = e;
              return (0, o.isReadableType)(n.type) && c.default.hasUnread(n.id)
            })) return !0;
          let t = new Set(n[e.id].map(e => e.channel.id)),
            a = i.default.getThreadsForGuild(e.guild_id);
          for (let e in a)
            if (t.has(e)) {
              for (let n in a[e])
                if (s.default.hasJoined(n) && !s.default.isMuted(n) && c.default.hasUnread(n)) return !0
            } return !1
        }
      }, [e]);
    return e.isForumLikeChannel() ? n > 0 : t
  }(e);
  return (0, a.jsx)(u.MenuItem, {
    id: "mark-channel-read",
    label: M.default.Messages.MARK_AS_READ,
    action: function() {
      (0, r.ackChannel)(e)
    },
    disabled: !n
  })
}