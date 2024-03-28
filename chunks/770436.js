"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("735250");
s("470079");
var l = s("239091"),
  n = s("592125"),
  i = s("430824"),
  r = s("594174"),
  o = s("909410"),
  d = s("981631"),
  u = s("689938");

function c(e) {
  let {
    guildId: t,
    log: c,
    onHeaderClick: E,
    className: _,
    expanded: I,
    onContentClick: T
  } = e;
  return null == t ? null : (0, a.jsx)(o.default, {
    guildId: t,
    log: c,
    className: _,
    expanded: I,
    onContentClick: T,
    onHeaderClick: () => {
      null == E || E(c)
    },
    onUserContextMenu: e => {
      let {
        user: n
      } = c;
      null != n && null != t && (0, l.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([s.e("99387"), s.e("50929")]).then(s.bind(s, "595011"));
        return s => (0, a.jsx)(e, {
          ...s,
          guildId: t,
          user: n
        })
      })
    },
    onChannelContextMenu: e => {
      let n = i.default.getGuild(t);
      null != c.options.channel && null != n && (0, l.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await s.e("51529").then(s.bind(s, "228620"));
        return t => (0, a.jsx)(e, {
          ...t,
          channel: c.options.channel
        })
      })
    },
    onTargetContextMenu: e => {
      switch (c.targetType) {
        case d.AuditLogTargetTypes.CHANNEL:
        case d.AuditLogTargetTypes.CHANNEL_OVERWRITE:
          let o = n.default.getChannel(c.targetId),
            E = i.default.getGuild(t);
          if (null != o && null != E) return (0, l.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await s.e("51529").then(s.bind(s, "228620"));
            return t => (0, a.jsx)(e, {
              ...t,
              channel: o
            })
          });
          return (0, l.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await s.e("65889").then(s.bind(s, "731646"));
            return t => (0, a.jsx)(e, {
              ...t,
              id: c.targetId,
              label: u.default.Messages.COPY_ID_UNKNOWN
            })
          });
        case d.AuditLogTargetTypes.USER:
          let _ = r.default.getUser(c.targetId);
          if (null != _ && null != t) return (0, l.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await Promise.all([s.e("99387"), s.e("50929")]).then(s.bind(s, "595011"));
            return s => (0, a.jsx)(e, {
              ...s,
              guildId: t,
              user: _
            })
          })
      }
      return null
    }
  })
}