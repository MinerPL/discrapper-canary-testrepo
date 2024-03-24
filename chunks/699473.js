"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("702976");
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("974667"),
  o = n("446674"),
  u = n("405645"),
  d = n("634807"),
  c = n("256572"),
  E = n("42203"),
  f = n("957255"),
  _ = n("780571"),
  T = n("568734"),
  I = n("299039"),
  m = n("383667"),
  N = n("574073"),
  p = n("865343"),
  S = n("39331"),
  A = n("68480"),
  C = n("115859"),
  h = n("596368"),
  g = n("227439"),
  M = n("862451"),
  O = n("611792"),
  R = n("554372"),
  v = n("49111"),
  L = n("5762"),
  P = l.memo(function(e) {
    var t;
    let {
      message: n,
      compact: l = !1,
      className: a,
      onContextMenu: P,
      onClick: D,
      disableInteraction: x = !1,
      hideSimpleEmbedContent: y = !0,
      channel: U,
      isGroupStart: j,
      animateAvatar: b,
      subscribeToComponentDispatch: G,
      renderThreadAccessory: B,
      trackAnnouncementViews: F = !1,
      ...k
    } = e, w = n.isFirstMessageInForumPost(U), H = (0, d.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()), {
      content: V,
      hasSpoilerEmbeds: Y
    } = (0, S.default)(n, {
      hideSimpleEmbedContent: y,
      allowList: w || H,
      allowHeading: w || H,
      allowLinks: !0,
      previewLinkTarget: !0
    }), W = n.type === v.MessageTypes.REPLY ? n.messageReference : void 0, K = (0, o.useStateFromStores)([c.default], () => c.default.getMessageByReference(W)), z = (0, r.useListItem)(n.id), Q = (0, N.default)(n), Z = (0, o.useStateFromStores)([E.default], () => n.hasFlag(v.MessageFlags.HAS_THREAD) && E.default.getChannel(I.default.castMessageIdAsChannelId(n.id))), J = (0, u.useRoleIcon)({
      guildId: U.guild_id,
      roleId: Q.iconRoleId
    }), X = (0, o.useStateFromStores)([f.default], () => f.default.can(v.Permissions.CREATE_INSTANT_INVITE, U)), q = (0, A.default)({
      message: n,
      channel: U,
      enabled: F
    });
    if ((0, m.default)(n, X)) return null;
    let $ = (0, p.getMessageAriaLabelledBy)(n),
      ee = (0, p.getMessageAriaDescribedBy)(n);
    return (0, s.jsx)(_.default, {
      compact: l,
      className: i(a, {
        [L.ephemeral]: (0, T.hasFlag)(n.flags, v.MessageFlags.EPHEMERAL),
        [L.disableInteraction]: x
      }),
      disableInteraction: x,
      childrenRepliedMessage: (0, R.default)(n, U, W, K, l),
      childrenExecutedCommand: (0, O.default)(n, U, l),
      childrenHeader: (0, g.default)({
        ...e,
        guildId: U.guild_id,
        author: Q,
        roleIcon: J
      }),
      childrenAccessories: e.hideAccessories ? void 0 : (0, C.renderSimpleAccessories)(e, Y),
      childrenMessageContent: (0, h.default)(e, V),
      childrenSystemMessage: (0, M.default)(e),
      onContextMenu: P,
      onClick: D,
      hasThread: B && null != Z && n.hasFlag(v.MessageFlags.HAS_THREAD),
      hasReply: n.type === v.MessageTypes.REPLY,
      "aria-labelledby": $,
      "aria-describedby": ee,
      messageRef: q,
      ...z,
      ...k
    })
  })