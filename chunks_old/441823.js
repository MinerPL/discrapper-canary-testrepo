"use strict";
n.r(t), n.d(t, {
  openUserContextMenu: function() {
    return s
  },
  openModerateUserContextMenu: function() {
    return r
  },
  openModerateRoleContextMenu: function() {
    return i
  },
  openModerationRaidContextMenu: function() {
    return o
  }
}), n("70102");
var a = n("37983");
n("884691");
var l = n("272030");

function s(e, t, s) {
  s.isGroupDM() ? (0, l.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await n.el("166452").then(n.bind(n, "166452"));
    return n => (0, a.jsx)(e, {
      ...n,
      user: t,
      channel: s
    })
  }) : s.isDM() ? (0, l.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await n.el("130074").then(n.bind(n, "130074"));
    return n => (0, a.jsx)(e, {
      ...n,
      user: t,
      channel: s,
      showMute: !1,
      targetIsUser: !0
    })
  }) : null != s.guild_id ? (0, l.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await n.el("834247").then(n.bind(n, "834247"));
    return n => (0, a.jsx)(e, {
      ...n,
      user: t,
      channel: s,
      guildId: s.guild_id
    })
  }) : (0, l.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await n.el("406784").then(n.bind(n, "406784"));
    return n => (0, a.jsx)(e, {
      ...n,
      user: t
    })
  })
}

function r(e, t) {
  let {
    user: s,
    channel: r,
    moderationAlertId: i,
    guildId: o,
    ...u
  } = t;
  if ((null == r ? void 0 : r.isGroupDM()) || (null == r ? void 0 : r.isDM())) throw Error("Cannot moderate user in DM or group DM");
  let d = null != o ? o : null == r ? void 0 : r.getGuildId();
  null != d && (0, l.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await n.el("467940").then(n.bind(n, "467940"));
    return t => (0, a.jsx)(e, {
      ...t,
      user: s,
      channelId: null == r ? void 0 : r.id,
      guildId: d,
      moderationAlertId: i,
      ...u
    })
  })
}

function i(e, t) {
  let {
    user: s,
    guildId: r,
    analyticsLocations: i,
    onCloseContextMenu: o
  } = t;
  (0, l.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await n.el("522651").then(n.bind(n, "522651"));
    return t => (0, a.jsx)(e, {
      ...t,
      user: s,
      guildId: r,
      analyticsLocations: i,
      onCloseContextMenu: o
    })
  })
}

function o(e, t, s) {
  null != s && (0, l.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await n.el("701587").then(n.bind(n, "701587"));
    return t => (0, a.jsx)(e, {
      ...t,
      guildId: s
    })
  })
}