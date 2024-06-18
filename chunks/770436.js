"use strict";
t.d(s, {
  Z: function() {
    return u
  }
});
var n = t(735250);
t(470079);
var i = t(239091),
  l = t(592125),
  a = t(430824),
  r = t(594174),
  o = t(909410),
  c = t(981631),
  d = t(689938);

function u(e) {
  let {
    guildId: s,
    log: u,
    onHeaderClick: E,
    className: _,
    expanded: I,
    onContentClick: T
  } = e;
  return null == s ? null : (0, n.jsx)(o.Z, {
    guildId: s,
    log: u,
    className: _,
    expanded: I,
    onContentClick: T,
    onHeaderClick: () => {
      null == E || E(u)
    },
    onUserContextMenu: e => {
      let {
        user: l
      } = u;
      null != l && null != s && (0, i.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([t.e("99387"), t.e("50929")]).then(t.bind(t, 595011));
        return t => (0, n.jsx)(e, {
          ...t,
          guildId: s,
          user: l
        })
      })
    },
    onChannelContextMenu: e => {
      let l = a.Z.getGuild(s);
      null != u.options.channel && null != l && (0, i.jW)(e, async () => {
        let {
          default: e
        } = await t.e("51529").then(t.bind(t, 228620));
        return s => (0, n.jsx)(e, {
          ...s,
          channel: u.options.channel
        })
      })
    },
    onTargetContextMenu: e => {
      switch (u.targetType) {
        case c.KFR.CHANNEL:
        case c.KFR.CHANNEL_OVERWRITE:
          let o = l.Z.getChannel(u.targetId),
            E = a.Z.getGuild(s);
          if (null != o && null != E) return (0, i.jW)(e, async () => {
            let {
              default: e
            } = await t.e("51529").then(t.bind(t, 228620));
            return s => (0, n.jsx)(e, {
              ...s,
              channel: o
            })
          });
          return (0, i.jW)(e, async () => {
            let {
              default: e
            } = await t.e("5396").then(t.bind(t, 731646));
            return s => (0, n.jsx)(e, {
              ...s,
              id: u.targetId,
              label: d.Z.Messages.COPY_ID_UNKNOWN
            })
          });
        case c.KFR.USER:
          let _ = r.default.getUser(u.targetId);
          if (null != _ && null != s) return (0, i.jW)(e, async () => {
            let {
              default: e
            } = await Promise.all([t.e("99387"), t.e("50929")]).then(t.bind(t, 595011));
            return t => (0, n.jsx)(e, {
              ...t,
              guildId: s,
              user: _
            })
          })
      }
      return null
    }
  })
}