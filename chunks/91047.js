"use strict";
l.r(t), l.d(t, {
  openModerateRoleContextMenu: function() {
    return r
  },
  openModerateUserContextMenu: function() {
    return s
  },
  openModerationRaidContextMenu: function() {
    return o
  },
  openUserContextMenu: function() {
    return n
  }
}), l("411104");
var a = l("735250");
l("470079");
var i = l("239091");

function n(e, t, n) {
  n.isGroupDM() ? (0, i.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await Promise.all([l.e("99387"), l.e("79695"), l.e("85559"), l.e("70866"), l.e("60677"), l.e("45839")]).then(l.bind(l, "354589"));
    return l => (0, a.jsx)(e, {
      ...l,
      user: t,
      channel: n
    })
  }) : n.isDM() ? (0, i.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await Promise.all([l.e("99387"), l.e("79695"), l.e("85559"), l.e("70866"), l.e("56826"), l.e("6022")]).then(l.bind(l, "131404"));
    return l => (0, a.jsx)(e, {
      ...l,
      user: t,
      channel: n,
      showMute: !1,
      targetIsUser: !0
    })
  }) : null != n.guild_id ? (0, i.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await Promise.all([l.e("99387"), l.e("79695"), l.e("85559"), l.e("70866"), l.e("12435"), l.e("34924")]).then(l.bind(l, "757387"));
    return l => (0, a.jsx)(e, {
      ...l,
      user: t,
      channel: n,
      guildId: n.guild_id
    })
  }) : (0, i.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await Promise.all([l.e("99387"), l.e("79695"), l.e("85559"), l.e("15421")]).then(l.bind(l, "881351"));
    return l => (0, a.jsx)(e, {
      ...l,
      user: t
    })
  })
}

function s(e, t) {
  let {
    user: n,
    channel: s,
    moderationAlertId: r,
    guildId: o,
    ...u
  } = t;
  if ((null == s ? void 0 : s.isGroupDM()) || (null == s ? void 0 : s.isDM())) throw Error("Cannot moderate user in DM or group DM");
  let d = null != o ? o : null == s ? void 0 : s.getGuildId();
  null != d && (0, i.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await Promise.all([l.e("99387"), l.e("3084"), l.e("12435"), l.e("11118")]).then(l.bind(l, "833737"));
    return t => (0, a.jsx)(e, {
      ...t,
      user: n,
      channelId: null == s ? void 0 : s.id,
      guildId: d,
      moderationAlertId: r,
      ...u
    })
  })
}

function r(e, t) {
  let {
    user: n,
    guildId: s,
    analyticsLocations: r,
    onCloseContextMenu: o
  } = t;
  (0, i.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await Promise.all([l.e("99387"), l.e("45130")]).then(l.bind(l, "246389"));
    return t => (0, a.jsx)(e, {
      ...t,
      user: n,
      guildId: s,
      analyticsLocations: r,
      onCloseContextMenu: o
    })
  })
}

function o(e, t, n) {
  null != n && (0, i.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await l.e("50331").then(l.bind(l, "158195"));
    return t => (0, a.jsx)(e, {
      ...t,
      guildId: n
    })
  })
}