n.d(t, {
  Q: function() {
return l;
  },
  Z: function() {
return r;
  }
});
var i = n(735250);
n(470079);
var a = n(275344),
  s = n(938353);

function r(e) {
  let {
channelMessageProps: {
  message: t,
  channel: n,
  compact: r = !1
},
hasSpoilerEmbeds: l,
handleContextMenu: o,
isInteracting: c,
isAutomodBlockedMessage: u,
isMessageSnapshot: d,
renderThreadAccessory: _,
renderComponentAccessory: E,
renderSuppressEmbeds: I,
forceAddReactions: m,
className: T
  } = e;
  return u ? null : (0, i.jsx)(a.Z, {
message: t,
children: (0, i.jsx)(s.ZP, {
  className: T,
  isInteracting: c,
  message: t,
  channel: n,
  compact: r,
  hasSpoilerEmbeds: l,
  isMessageSnapshot: d,
  onMediaItemContextMenu: o,
  renderThreadAccessory: _,
  renderComponentAccessory: E,
  renderSuppressEmbeds: I,
  forceAddReactions: m
})
  });
}

function l(e, t) {
  let {
message: n,
channel: a,
compact: r = !1,
renderThreadAccessory: l,
disableReactionCreates: o,
disableReactionUpdates: c,
isSearchResult: u
  } = e;
  return (0, i.jsx)(s.$p, {
message: n,
channel: a,
compact: r,
hasSpoilerEmbeds: t,
renderThreadAccessory: l,
disableReactionCreates: o,
disableReactionUpdates: c,
isSearchResult: u
  });
}