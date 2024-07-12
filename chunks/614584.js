n.d(t, {
  Z: function() {
return N;
  }
});
var i = n(735250),
  a = n(470079),
  l = n(442837),
  s = n(25209),
  r = n(39154),
  o = n(35125),
  c = n(905405),
  d = n(628238),
  u = n(499401),
  h = n(693912),
  p = n(869765),
  m = n(699516),
  _ = n(352736),
  f = n(937889),
  E = n(739566),
  C = n(267128),
  g = n(507418),
  I = n(348238),
  x = n(981631),
  T = n(689938);
let v = a.memo(function(e) {
  var t;
  let {
baseMessage: n,
referencedMessage: v,
channel: N,
compact: S = !1,
referencedUsernameProfile: Z,
referencedAvatarProfile: A,
setPopout: M
  } = e, b = v.state === p.Y.LOADED ? v.message : void 0, R = (0, E.Uj)(b), j = (0, c.p)(), L = (0, d.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()), P = a.useMemo(() => {
if (null == b)
  return null;
let e = (0, r.Z)(b);
if (e.type === x.uaV.USER_JOIN) {
  let t = _.Z.getWelcomeMessageKind(N.guild_id);
  return (0, s.Rp)(_.Z.getSystemMessageUserJoin(e.id, t).astFormat({
    username: null != R ? R.nick : e.author.username,
    usernameHook: e => e
  }));
}
if (e.type === x.uaV.ROLE_SUBSCRIPTION_PURCHASE)
  return (0, s.Rp)((0, o.PA)({
    username: null != R ? R.nick : e.author.username,
    guildId: null == N ? void 0 : N.guild_id,
    roleSubscriptionData: e.roleSubscriptionData
  }));
if (e.type === x.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
  return (0, s.Rp)((0, u.Y)({
    application: null == e ? void 0 : e.application,
    username: null == R ? void 0 : R.nick
  }));
else if (e.type === x.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED)
  return (0, s.Rp)((0, h.B2)({
    application: null == e ? void 0 : e.application,
    username: null == R ? void 0 : R.nick
  }));
else if (e.type === x.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED)
  return (0, s.Rp)((0, h.hj)({
    application: null == e ? void 0 : e.application,
    username: null == R ? void 0 : R.nick
  }));
else if (e.type === x.uaV.GUILD_DEADCHAT_REVIVE_PROMPT)
  return '' !== e.content ? e.content : T.Z.Messages.DEADCHAT_PROMPT_1;
if (null != e.content && '' !== e.content) {
  let t = {
      formatInline: !0,
      allowLinks: !0,
      shouldFilterKeywords: j
    },
    n = e.isFirstMessageInForumPost(N) ? {
      ...t,
      noStyleAndInteraction: !0,
      allowHeading: !0,
      allowList: !0
    } : {
      ...t,
      formatInline: !0,
      allowHeading: L,
      allowList: L
    };
  return (0, f.ZP)(e, n).content;
}
return null;
  }, [
b,
R,
N,
L,
j
  ]), O = (0, l.e7)([m.Z], () => null != b && m.Z.isBlockedForMessage(b), [b]), y = (0, I.wq)(null == b ? void 0 : b.author.id, N.id), D = (0, I.$3)(n, b, O), k = (0, I.Wl)(b, N, Z, M), U = (0, I.rY)(A, M), w = a.useCallback(() => M({
referencedUsernameProfile: !1,
referencedAvatarProfile: !1
  }), [M]), B = (0, E.Uj)(n);
  return (0, i.jsx)(C.Z, {
repliedAuthor: R,
baseMessage: n,
channel: N,
baseAuthor: B,
referencedMessage: v,
content: P,
compact: S,
isReplyAuthorBlocked: O,
showAvatarPopout: A,
showUsernamePopout: Z,
renderPopout: g.Z,
onClickAvatar: U,
onClickUsername: k,
onClickReply: D,
onContextMenu: y,
onPopoutRequestClose: w
  });
});

function N(e, t, n, a, l) {
  let {
message: s,
channel: r,
compact: o
  } = e, {
referencedUsernameProfile: c,
referencedAvatarProfile: d
  } = n, u = s.type === x.uaV.REPLY && null != a && (0, i.jsx)(v, {
baseMessage: s,
replyReference: a,
referencedMessage: l,
channel: r,
compact: o,
setPopout: t,
referencedUsernameProfile: c,
referencedAvatarProfile: d
  });
  return (0, i.jsx)(i.Fragment, {
children: u
  });
}