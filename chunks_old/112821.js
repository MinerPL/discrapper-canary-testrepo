"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("446674"),
  i = n("819855"),
  r = n("77078"),
  u = n("828986"),
  o = n("519841"),
  d = n("787336"),
  c = n("508229"),
  f = n("660478"),
  h = n("590514"),
  m = n("249561"),
  p = n("782340");
let E = [];

function g(e) {
  let {
    channel: t,
    onJump: g
  } = e, {
    messages: S,
    loading: C
  } = (0, s.useStateFromStoresObject)([c.default], () => {
    let e = c.default.getPinnedMessages(t.id),
      n = null != e ? e.messages : E;
    return {
      messages: n,
      loading: null == n || null != e && e.loading
    }
  }), _ = (0, s.useStateFromStores)([f.default], () => f.default.hasUnreadPins(t.id));
  return l.useEffect(() => {
    o.AttachmentLinkRefreshExperiment.getCurrentConfig({
      location: "pins"
    }).enabled && S.some(d.messageHasExpiredAttachmentUrl) && u.default.fetchPins(t.id, !0)
  }, []), l.useEffect(() => {
    _ && u.default.ackPins(t.id)
  }, [_, t.id]), (0, a.jsx)(r.Dialog, {
    "aria-label": p.default.Messages.PINNED_MESSAGES,
    children: (0, a.jsx)(h.default, {
      onFetch: function() {
        u.default.ackPins(t.id), u.default.fetchPins(t.id)
      },
      channel: t,
      messages: S,
      loading: C,
      analyticsName: "Channel Pins",
      onCloseMessage: function(e, n) {
        null != e && (n.shiftKey ? u.default.unpinMessage(t, e.id) : m.default.confirmUnpin(t, e))
      },
      onJump: g,
      getProTip: function() {
        return t.isPrivate() ? p.default.Messages.PINNED_MESSAGES_PRO_TIP_BODY_DMS : p.default.Messages.PINNED_MESSAGES_PRO_TIP_BODY_CHANNEL
      },
      renderHeader: () => (0, a.jsx)(h.Header, {
        title: p.default.Messages.PINNED_MESSAGES
      }),
      renderEmptyState: function(e) {
        let l = p.default.Messages.NO_PINS_IN_CHANNEL;
        t.isPrivate() && (l = p.default.Messages.NO_PINS_IN_DM);
        let s = (0, i.isThemeLight)(e) ? n("615184") : n("992507");
        return (0, a.jsx)(h.EmptyStateCenter, {
          msg: l,
          image: s
        }, "emptystate")
      },
      listName: "pins"
    })
  })
}