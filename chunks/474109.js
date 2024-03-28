"use strict";
n.r(t), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("442837"),
  i = n("664915"),
  r = n("888369"),
  o = n("358652"),
  u = n("771845"),
  d = n("613060"),
  c = n("451478"),
  f = n("816779"),
  h = n("251625"),
  C = n("981631"),
  p = n("689938");
let m = "app-download-item",
  g = "add-server-item";

function E() {
  return !1
}

function S(e) {
  var t;
  let n = r.default.getMutableGuildStates();
  return e === C.ViewHistoryKeys.SERVER_DISCOVERY_BADGE && !d.default.hasViewed(C.ViewHistoryKeys.SERVER_DISCOVERY_BADGE) || e !== m && e !== g && (null === (t = n[null != e ? e : "null"]) || void 0 === t ? void 0 : t.mentionCount) > 0
}
let _ = (0, h.cachedFunction)((e, t, n) => ["null", ...t, ...e, g, C.ViewHistoryKeys.E3_SERVER_DISCOVERY_BADGE, m]);
t.default = a.forwardRef(function(e, t) {
  let n = (0, s.useStateFromStoresArray)([u.default, o.default, r.default], () => _(u.default.getGuildFolders(), o.default.getUnreadPrivateChannelIds(), r.default.getStoreChangeSentinel())),
    a = (0, s.useStateFromStores)([c.default], () => c.default.isFocused()),
    d = (0, s.useStateFromStores)([i.default], () => i.default.getExpandedFolders());
  return (0, l.jsx)(f.default, {
    ...e,
    ref: t,
    items: n,
    isUnread: E,
    textUnread: p.default.Messages.NEW,
    textMention: p.default.Messages.NEW,
    isMentioned: S,
    animate: a,
    expandedFolders: d
  })
})