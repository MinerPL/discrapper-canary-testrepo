"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var s = n("37983"),
  a = n("884691"),
  l = n("446674"),
  i = n("933805"),
  r = n("843257"),
  o = n("634807"),
  u = n("846564"),
  d = n("950576"),
  c = n("256572"),
  f = n("27618"),
  h = n("93427"),
  C = n("700097"),
  p = n("95045"),
  m = n("574073"),
  E = n("909917"),
  g = n("380986"),
  S = n("49111"),
  T = n("782340");
let A = a.memo(function(e) {
  var t;
  let {
    baseMessage: n,
    referencedMessage: A,
    channel: _,
    compact: M = !1,
    referencedUsernameProfile: I,
    referencedAvatarProfile: N,
    setPopout: v
  } = e, x = A.state === c.ReferencedMessageState.LOADED ? A.message : void 0, L = (0, m.useNullableMessageAuthor)(x), y = (0, o.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()), R = a.useMemo(() => {
    if (null == x) return null;
    if (x.type === S.MessageTypes.USER_JOIN) return (0, i.astToString)(C.default.getSystemMessageUserJoin(x.id).astFormat({
      username: null != L ? L.nick : x.author.username,
      usernameHook: e => e
    }));
    if (x.type === S.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE) return (0, i.astToString)((0, r.getRoleSubscriptionPurchaseSystemMessageAstFormattedContent)({
      username: null != L ? L.nick : x.author.username,
      guildId: null == _ ? void 0 : _.guild_id,
      roleSubscriptionData: x.roleSubscriptionData
    }));
    if (x.type === S.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, i.astToString)((0, u.getApplicationSubscriptionSystemMessageASTContent)({
      application: null == x ? void 0 : x.application,
      username: null == L ? void 0 : L.nick
    }));
    else if (x.type === S.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED) return (0, i.astToString)((0, d.getPrivateChannelIntegrationAddedSystemMessageASTContent)({
      application: null == x ? void 0 : x.application,
      username: null == L ? void 0 : L.nick
    }));
    else if (x.type === S.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_REMOVED) return (0, i.astToString)((0, d.getPrivateChannelIntegrationRemovedSystemMessageASTContent)({
      application: null == x ? void 0 : x.application,
      username: null == L ? void 0 : L.nick
    }));
    else if (x.type === S.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT) return "" !== x.content ? x.content : T.default.Messages.DEADCHAT_PROMPT_1;
    if (null != x.content && "" !== x.content) {
      let e = x.isFirstMessageInForumPost(_) ? {
        formatInline: !0,
        noStyleAndInteraction: !0,
        allowHeading: !0,
        allowList: !0,
        allowLinks: !0
      } : {
        formatInline: !0,
        allowHeading: y,
        allowList: y,
        allowLinks: !0
      };
      return (0, p.default)(x, e).content
    }
    return null
  }, [x, L, _, y]), O = (0, l.useStateFromStores)([f.default], () => null != x && f.default.isBlocked(x.author.id), [x]), D = (0, g.useContextMenuUser)(null == x ? void 0 : x.author.id, _.id), P = (0, g.useClickReply)(n, x, O), b = (0, g.useClickReferencedMessageAuthorUsername)(x, _, I, v), j = (0, g.useClickReferencedMessageAuthorAvatar)(N, v), k = a.useCallback(() => v({
    referencedUsernameProfile: !1,
    referencedAvatarProfile: !1
  }), [v]), F = (0, m.useNullableMessageAuthor)(n);
  return (0, s.jsx)(h.default, {
    repliedAuthor: L,
    baseMessage: n,
    channel: _,
    baseAuthor: F,
    referencedMessage: A,
    content: R,
    compact: M,
    isReplyAuthorBlocked: O,
    showAvatarPopout: N,
    showUsernamePopout: I,
    renderPopout: E.default,
    onClickAvatar: j,
    onClickUsername: b,
    onClickReply: P,
    onContextMenu: D,
    onPopoutRequestClose: k
  })
});

function _(e, t, n, a, l) {
  let {
    message: i,
    channel: r,
    compact: o
  } = e, {
    referencedUsernameProfile: u,
    referencedAvatarProfile: d
  } = n, c = i.type === S.MessageTypes.REPLY && null != a && (0, s.jsx)(A, {
    baseMessage: i,
    replyReference: a,
    referencedMessage: l,
    channel: r,
    compact: o,
    setPopout: t,
    referencedUsernameProfile: u,
    referencedAvatarProfile: d
  });
  return (0, s.jsx)(s.Fragment, {
    children: c
  })
}