"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("702976");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
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
  C = n("68480"),
  A = n("115859"),
  h = n("596368"),
  g = n("227439"),
  M = n("862451"),
  O = n("611792"),
  R = n("554372"),
  L = n("49111"),
  v = n("5762"),
  P = a.memo(function(e) {
    var t;
    let {
      message: n,
      compact: a = !1,
      className: l,
      onContextMenu: P,
      onClick: D,
      disableInteraction: x = !1,
      hideSimpleEmbedContent: y = !0,
      channel: U,
      isGroupStart: j,
      animateAvatar: b,
      subscribeToComponentDispatch: G,
      renderThreadAccessory: B,
      trackAnnouncementViews: k = !1,
      ...F
    } = e, w = n.isFirstMessageInForumPost(U), H = (0, d.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()), {
      content: V,
      hasSpoilerEmbeds: Y
    } = (0, S.default)(n, {
      hideSimpleEmbedContent: y,
      allowList: w || H,
      allowHeading: w || H,
      allowLinks: !0,
      previewLinkTarget: !0
    }), K = n.type === L.MessageTypes.REPLY ? n.messageReference : void 0, W = (0, o.useStateFromStores)([c.default], () => c.default.getMessageByReference(K)), z = (0, r.useListItem)(n.id), Q = (0, N.default)(n), Z = (0, o.useStateFromStores)([E.default], () => n.hasFlag(L.MessageFlags.HAS_THREAD) && E.default.getChannel(I.default.castMessageIdAsChannelId(n.id))), J = (0, u.useRoleIcon)({
      guildId: U.guild_id,
      roleId: Q.iconRoleId
    }), q = (0, o.useStateFromStores)([f.default], () => f.default.can(L.Permissions.CREATE_INSTANT_INVITE, U)), X = (0, C.default)({
      message: n,
      channel: U,
      enabled: k
    });
    if ((0, m.default)(n, q)) return null;
    let $ = (0, p.getMessageAriaLabelledBy)(n),
      ee = (0, p.getMessageAriaDescribedBy)(n);
    return (0, s.jsx)(_.default, {
      compact: a,
      className: i(l, {
        [v.ephemeral]: (0, T.hasFlag)(n.flags, L.MessageFlags.EPHEMERAL),
        [v.disableInteraction]: x
      }),
      disableInteraction: x,
      childrenRepliedMessage: (0, R.default)(n, U, K, W, a),
      childrenExecutedCommand: (0, O.default)(n, U, a),
      childrenHeader: (0, g.default)({
        ...e,
        guildId: U.guild_id,
        author: Q,
        roleIcon: J
      }),
      childrenAccessories: e.hideAccessories ? void 0 : (0, A.renderSimpleAccessories)(e, Y),
      childrenMessageContent: (0, h.default)(e, V),
      childrenSystemMessage: (0, M.default)(e),
      onContextMenu: P,
      onClick: D,
      hasThread: B && null != Z && n.hasFlag(L.MessageFlags.HAS_THREAD),
      hasReply: n.type === L.MessageTypes.REPLY,
      "aria-labelledby": $,
      "aria-describedby": ee,
      messageRef: X,
      ...z,
      ...F
    })
  })