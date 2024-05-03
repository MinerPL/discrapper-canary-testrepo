"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  },
  renderSimpleAccessories: function() {
    return r
  }
});
var s = n("735250");
n("470079");
var a = n("275344"),
  l = n("938353");

function i(e) {
  let {
    channelMessageProps: {
      message: t,
      channel: n,
      compact: i = !1
    },
    hasSpoilerEmbeds: r,
    handleContextMenu: o,
    isInteracting: u,
    isAutomodBlockedMessage: d,
    renderThreadAccessory: c,
    renderComponentAccessory: f,
    renderSuppressEmbeds: E,
    forceAddReactions: _,
    className: m
  } = e;
  return d ? null : (0, s.jsx)(a.default, {
    message: t,
    children: (0, s.jsx)(l.default, {
      className: m,
      isInteracting: u,
      message: t,
      channel: n,
      compact: i,
      hasSpoilerEmbeds: r,
      onMediaItemContextMenu: o,
      renderThreadAccessory: c,
      renderComponentAccessory: f,
      renderSuppressEmbeds: E,
      forceAddReactions: _
    })
  })
}

function r(e, t) {
  let {
    message: n,
    channel: a,
    compact: i = !1,
    renderThreadAccessory: r,
    disableReactionCreates: o,
    disableReactionUpdates: u
  } = e;
  return (0, s.jsx)(l.SimpleMessageAccessories, {
    message: n,
    channel: a,
    compact: i,
    hasSpoilerEmbeds: t,
    renderThreadAccessory: r,
    disableReactionCreates: o,
    disableReactionUpdates: u
  })
}