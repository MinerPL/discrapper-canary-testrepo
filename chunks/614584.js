"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("25209"),
  r = n("35125"),
  o = n("628238"),
  u = n("499401"),
  d = n("693912"),
  c = n("869765"),
  f = n("699516"),
  h = n("512665"),
  m = n("352736"),
  p = n("937889"),
  E = n("739566"),
  C = n("507418"),
  g = n("348238"),
  S = n("981631"),
  _ = n("689938");
let T = l.memo(function(e) {
  var t;
  let {
    baseMessage: n,
    referencedMessage: T,
    channel: I,
    compact: A = !1,
    referencedUsernameProfile: v,
    referencedAvatarProfile: N,
    setPopout: x
  } = e, M = T.state === c.ReferencedMessageState.LOADED ? T.message : void 0, R = (0, E.useNullableMessageAuthor)(M), L = (0, o.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()), y = l.useMemo(() => {
    if (null == M) return null;
    if (M.type === S.MessageTypes.USER_JOIN) return (0, i.astToString)(m.default.getSystemMessageUserJoin(M.id).astFormat({
      username: null != R ? R.nick : M.author.username,
      usernameHook: e => e
    }));
    if (M.type === S.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE) return (0, i.astToString)((0, r.getRoleSubscriptionPurchaseSystemMessageAstFormattedContent)({
      username: null != R ? R.nick : M.author.username,
      guildId: null == I ? void 0 : I.guild_id,
      roleSubscriptionData: M.roleSubscriptionData
    }));
    if (M.type === S.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, i.astToString)((0, u.getApplicationSubscriptionSystemMessageASTContent)({
      application: null == M ? void 0 : M.application,
      username: null == R ? void 0 : R.nick
    }));
    else if (M.type === S.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED) return (0, i.astToString)((0, d.getPrivateChannelIntegrationAddedSystemMessageASTContent)({
      application: null == M ? void 0 : M.application,
      username: null == R ? void 0 : R.nick
    }));
    else if (M.type === S.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_REMOVED) return (0, i.astToString)((0, d.getPrivateChannelIntegrationRemovedSystemMessageASTContent)({
      application: null == M ? void 0 : M.application,
      username: null == R ? void 0 : R.nick
    }));
    else if (M.type === S.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT) return "" !== M.content ? M.content : _.default.Messages.DEADCHAT_PROMPT_1;
    if (null != M.content && "" !== M.content) {
      let e = M.isFirstMessageInForumPost(I) ? {
        formatInline: !0,
        noStyleAndInteraction: !0,
        allowHeading: !0,
        allowList: !0,
        allowLinks: !0
      } : {
        formatInline: !0,
        allowHeading: L,
        allowList: L,
        allowLinks: !0
      };
      return (0, p.default)(M, e).content
    }
    return null
  }, [M, R, I, L]), O = (0, s.useStateFromStores)([f.default], () => null != M && f.default.isBlocked(M.author.id), [M]), j = (0, g.useContextMenuUser)(null == M ? void 0 : M.author.id, I.id), P = (0, g.useClickReply)(n, M, O), D = (0, g.useClickReferencedMessageAuthorUsername)(M, I, v, x), b = (0, g.useClickReferencedMessageAuthorAvatar)(N, x), U = l.useCallback(() => x({
    referencedUsernameProfile: !1,
    referencedAvatarProfile: !1
  }), [x]), F = (0, E.useNullableMessageAuthor)(n);
  return (0, a.jsx)(h.default, {
    repliedAuthor: R,
    baseMessage: n,
    channel: I,
    baseAuthor: F,
    referencedMessage: T,
    content: y,
    compact: A,
    isReplyAuthorBlocked: O,
    showAvatarPopout: N,
    showUsernamePopout: v,
    renderPopout: C.default,
    onClickAvatar: b,
    onClickUsername: D,
    onClickReply: P,
    onContextMenu: j,
    onPopoutRequestClose: U
  })
});

function I(e, t, n, l, s) {
  let {
    message: i,
    channel: r,
    compact: o
  } = e, {
    referencedUsernameProfile: u,
    referencedAvatarProfile: d
  } = n, c = i.type === S.MessageTypes.REPLY && null != l && (0, a.jsx)(T, {
    baseMessage: i,
    replyReference: l,
    referencedMessage: s,
    channel: r,
    compact: o,
    setPopout: t,
    referencedUsernameProfile: u,
    referencedAvatarProfile: d
  });
  return (0, a.jsx)(a.Fragment, {
    children: c
  })
}