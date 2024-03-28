"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("780384"),
  r = n("481060"),
  o = n("332148"),
  u = n("796798"),
  d = n("198620"),
  c = n("624453"),
  f = n("306680"),
  h = n("494404"),
  m = n("257559"),
  p = n("689938");
let E = [];

function C(e) {
  let {
    channel: t,
    onJump: C
  } = e, {
    messages: g,
    loading: S
  } = (0, s.useStateFromStoresObject)([c.default], () => {
    let e = c.default.getPinnedMessages(t.id),
      n = null != e ? e.messages : E;
    return {
      messages: n,
      loading: null == n || null != e && e.loading
    }
  }), _ = (0, s.useStateFromStores)([f.default], () => f.default.hasUnreadPins(t.id));
  return l.useEffect(() => {
    u.AttachmentLinkRefreshExperiment.getCurrentConfig({
      location: "pins"
    }).enabled && g.some(d.messageHasExpiredAttachmentUrl) && o.default.fetchPins(t.id, !0)
  }, []), l.useEffect(() => {
    _ && o.default.ackPins(t.id)
  }, [_, t.id]), (0, a.jsx)(r.Dialog, {
    "aria-label": p.default.Messages.PINNED_MESSAGES,
    children: (0, a.jsx)(h.default, {
      onFetch: function() {
        o.default.ackPins(t.id), o.default.fetchPins(t.id)
      },
      channel: t,
      messages: g,
      loading: S,
      analyticsName: "Channel Pins",
      onCloseMessage: function(e, n) {
        null != e && (n.shiftKey ? o.default.unpinMessage(t, e.id) : m.default.confirmUnpin(t, e))
      },
      onJump: C,
      getProTip: function() {
        return t.isPrivate() ? p.default.Messages.PINNED_MESSAGES_PRO_TIP_BODY_DMS : p.default.Messages.PINNED_MESSAGES_PRO_TIP_BODY_CHANNEL
      },
      renderHeader: () => (0, a.jsx)(h.Header, {
        title: p.default.Messages.PINNED_MESSAGES
      }),
      renderEmptyState: function(e) {
        let l = p.default.Messages.NO_PINS_IN_CHANNEL;
        t.isPrivate() && (l = p.default.Messages.NO_PINS_IN_DM);
        let s = (0, i.isThemeLight)(e) ? n("306059") : n("281485");
        return (0, a.jsx)(h.EmptyStateCenter, {
          msg: l,
          image: s
        }, "emptystate")
      },
      listName: "pins"
    })
  })
}