"use strict";
n.r(t), n.d(t, {
  UIKitGuildDiscoveryDisqualified: function() {
    return o
  },
  UIKitGuildDiscoveryGracePeriodFinalWarning: function() {
    return c
  },
  UIKitGuildDiscoveryGracePeriodInitialWarning: function() {
    return d
  },
  UIKitGuildDiscoveryRequalified: function() {
    return u
  }
});
var s = n("735250");
n("470079");
var a = n("759231"),
  l = n("702346"),
  i = n("689938"),
  r = n("111788");

function o(e) {
  let {
    message: t,
    compact: a,
    onClick: o
  } = e;
  return (0, s.jsx)(l.default, {
    icon: n("508933"),
    timestamp: t.timestamp,
    compact: a,
    contentClassName: r.messageContent,
    children: i.default.Messages.SYSTEM_MESSAGE_GUILD_DISCOVERY_DISQUALIFIED.format({
      onClick: o
    })
  })
}

function u(e) {
  let {
    message: t,
    compact: a
  } = e;
  return (0, s.jsx)(l.default, {
    icon: n("324606"),
    timestamp: t.timestamp,
    compact: a,
    contentClassName: r.messageContent,
    children: i.default.Messages.SYSTEM_MESSAGE_GUILD_DISCOVERY_REQUALIFIED
  })
}

function d(e) {
  let {
    message: t,
    compact: n
  } = e;
  return (0, s.jsx)(l.default, {
    iconNode: (0, s.jsx)(a.default, {
      className: r.alertIcon
    }),
    timestamp: t.timestamp,
    compact: n,
    contentClassName: r.messageContent,
    children: i.default.Messages.SYSTEM_MESSAGE_GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING
  })
}

function c(e) {
  let {
    message: t,
    compact: n
  } = e;
  return (0, s.jsx)(l.default, {
    iconNode: (0, s.jsx)(a.default, {
      className: r.alertIcon
    }),
    timestamp: t.timestamp,
    compact: n,
    contentClassName: r.messageContent,
    children: i.default.Messages.SYSTEM_MESSAGE_GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING
  })
}