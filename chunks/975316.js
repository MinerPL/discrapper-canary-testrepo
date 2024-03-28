"use strict";
s.r(t), s.d(t, {
  ChannelSettingsIntegrationsNotice: function() {
    return h
  },
  default: function() {
    return c
  }
});
var l = s("735250");
s("470079");
var a = s("442837"),
  n = s("139387"),
  i = s("852860"),
  r = s("490655"),
  o = s("533947"),
  d = s("388610"),
  u = s("430824");

function c(e) {
  let {
    refToScroller: t
  } = e, {
    channel: s
  } = (0, a.useStateFromStores)([d.default], () => d.default.getProps(), []), n = (0, a.useStateFromStores)([u.default], () => null != s ? u.default.getGuild(s.getGuildId()) : null, [s]), {
    section: i,
    sectionId: c,
    webhooks: h,
    editedWebhook: m,
    isFetching: E,
    errors: f
  } = (0, a.useStateFromStores)([o.default], () => o.default.getProps(), []);
  return null == n || null == s ? null : (0, l.jsx)(r.default, {
    guild: n,
    channel: s,
    section: i,
    sectionId: c,
    webhooks: h,
    editedWebhook: m,
    isFetching: E,
    hasChanges: o.default.hasChanges,
    errors: f,
    refToScroller: t
  })
}

function h() {
  let {
    channel: e,
    submitting: t
  } = (0, a.useStateFromStores)([d.default], () => d.default.getProps()), s = (0, a.useStateFromStores)([u.default], () => null != e ? u.default.getGuild(e.getGuildId()) : null, [e]);
  return (0, l.jsx)(i.default, {
    submitting: t,
    onReset: () => {
      n.default.init()
    },
    onSave: () => {
      null != s && null != o.default.editedWebhook && n.default.saveWebhook(s.id, o.default.editedWebhook)
    }
  })
}