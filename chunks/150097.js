"use strict";
n.r(t), n.d(t, {
  makeTextChatNotification: function() {
    return P
  },
  shouldNotify: function() {
    return D
  },
  shouldNotifyBase: function() {
    return y
  },
  shouldNotifyForForumThreadCreation: function() {
    return j
  },
  shouldNotifyForSelectedChannel: function() {
    return b
  }
}), n("789020"), n("411104");
var l = n("933557"),
  a = n("710845"),
  s = n("41776"),
  i = n("355298"),
  r = n("957730"),
  o = n("572804"),
  u = n("901461");
n("734934");
var d = n("569471"),
  c = n("723170"),
  f = n("695346"),
  h = n("131704"),
  C = n("433355"),
  p = n("592125"),
  m = n("430824"),
  g = n("19780"),
  E = n("699516"),
  S = n("944486"),
  _ = n("914010"),
  I = n("885110"),
  N = n("9156"),
  T = n("594174"),
  A = n("630388"),
  L = n("5192"),
  v = n("352736"),
  x = n("51144"),
  R = n("981631"),
  M = n("124368"),
  O = n("689938");

function y(e, t, n) {
  let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
  if (t.hasFlag(R.UserFlags.SPAMMER) || n.isManaged()) return !1;
  let i = n.getGuildId();
  return !(null != i && s.default.isLurking(i) || t.id === e.id || E.default.isBlocked(t.id) || !l && I.default.getStatus() === R.StatusTypes.DND || f.FocusMode.getSetting() || !a && N.default.allowNoMessages(n)) && !0
}

function D(e, t) {
  var n;
  let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if (null != e.flags && (0, A.hasFlag)(e.flags, R.MessageFlags.SUPPRESS_NOTIFICATIONS)) return !1;
  let s = p.default.getChannel(t);
  e.type === R.MessageTypes.THREAD_STARTER_MESSAGE && (s = p.default.getChannel(null == s ? void 0 : s.parent_id));
  let r = T.default.getCurrentUser(),
    u = T.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
  if (null == s || null == r || null == u || s.type === R.ChannelTypes.GROUP_DM && e.type === R.MessageTypes.RECIPIENT_REMOVE || !y(r, u, s, a) || i.default.isMessageRequest(t)) return !1;
  if (!l) {
    let e = S.default.getChannelId(_.default.getGuildId());
    if (e === s.id || C.default.getCurrentSidebarChannelId(e) === s.id) return !1
  }
  if (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === r.id) return !1;
  if (h.THREAD_CHANNEL_TYPES.has(s.type)) {
    if (d.default.isMuted(s.id)) return !1;
    let t = (0, c.computeThreadNotificationSetting)(s);
    return t !== M.ThreadMemberFlags.NO_MESSAGES && (t === M.ThreadMemberFlags.ALL_MESSAGES || (0, o.isRawMessageMentioned)({
      rawMessage: e,
      userId: r.id,
      suppressEveryone: !1,
      suppressRoles: !1
    }))
  } {
    let t = !h.GUILD_VOCAL_CHANNEL_TYPES.has(s.type) || g.default.getChannelId() === s.id;
    if (N.default.allowAllMessages(s) && t) return !0;
    let n = N.default.isSuppressEveryoneEnabled(s.getGuildId()),
      l = N.default.isSuppressRolesEnabled(s.getGuildId());
    return (0, o.isRawMessageMentioned)({
      rawMessage: e,
      userId: r.id,
      suppressEveryone: n,
      suppressRoles: l
    })
  }
}

function b(e, t) {
  var n;
  if (S.default.getChannelId(_.default.getGuildId()) !== t) return !1;
  let l = p.default.getChannel(t);
  e.type === R.MessageTypes.THREAD_STARTER_MESSAGE && (l = p.default.getChannel(null == l ? void 0 : l.parent_id));
  let a = T.default.getCurrentUser(),
    s = T.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
  return !(null == l || null == a || null == s || l.isManaged() || s.hasFlag(R.UserFlags.SPAMMER) || E.default.isBlocked(s.id) || s.id === a.id || I.default.getStatus() === R.StatusTypes.DND || f.FocusMode.getSetting() || N.default.allowNoMessages(l)) && !0
}

function j(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    a = T.default.getCurrentUser(),
    s = T.default.getUser(e.ownerId);
  return !(null == t || null == a || null == s || !y(a, s, t, l, !0) || N.default.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)) && (!!n || S.default.getChannelId(_.default.getGuildId()) !== t.id) && N.default.getNewForumThreadsCreated(t)
}
let G = (e, t, n) => "".concat(e, " (").concat((0, l.computeChannelName)(t, T.default, E.default, !0)).concat(null != n ? ", ".concat((0, l.computeChannelName)(n, T.default, E.default)) : "", ")");

function U(e, t, n, l) {
  switch (e.type) {
    case R.ChannelTypes.GUILD_ANNOUNCEMENT:
    case R.ChannelTypes.GUILD_TEXT:
      return t;
    case R.ChannelTypes.GROUP_DM:
      return n;
    case R.ChannelTypes.DM:
    default:
      return l
  }
}

function P(e, t, n) {
  var s;
  let i;
  let o = L.default.getName(e.getGuildId(), e.id, n),
    d = o;
  switch (e.type) {
    case R.ChannelTypes.GUILD_ANNOUNCEMENT:
    case R.ChannelTypes.GUILD_TEXT:
    case R.ChannelTypes.GUILD_VOICE:
    case R.ChannelTypes.ANNOUNCEMENT_THREAD:
    case R.ChannelTypes.PUBLIC_THREAD:
    case R.ChannelTypes.PRIVATE_THREAD:
      let c = p.default.getChannel(e.parent_id);
      t.type === R.MessageTypes.THREAD_STARTER_MESSAGE && null != c ? d = G(d, c, p.default.getChannel(c.parent_id)) : (0, u.default)(t) ? null != m.default.getGuild(e.getGuildId()) && (d = G(d, e, c)) : d = G(d, e, c);
      break;
    case R.ChannelTypes.GROUP_DM:
      !(e.isManaged() && n.bot && d === (0, l.computeChannelName)(e, T.default, E.default)) && (d = "".concat(d, " (").concat((0, l.computeChannelName)(e, T.default, E.default, !0), ")"))
  }
  let f = t.content;
  if ((0, u.default)(t) && null == (f = v.default.stringify(t, e))) throw new a.default("NotificationTextUtils").warn("SystemMessageUtils.stringify(...) could not convert", t), Error("failed to stringify system message");
  let h = null !== (s = t.sticker_items) && void 0 !== s ? s : t.stickers;
  return 0 === (i = null != t.activity && null != t.application ? t.activity.type === R.ActivityActionTypes.JOIN ? U(e, O.default.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_JOIN, O.default.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_JOIN, O.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN).format({
    user: o,
    game: t.application.name
  }) : t.activity.type === R.ActivityActionTypes.JOIN_REQUEST ? U(e, O.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST, O.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST, O.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST).format({
    user: o,
    game: t.application.name
  }) : "" : null != t.activity && t.activity.type === R.ActivityActionTypes.LISTEN ? U(e, O.default.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_LISTEN, O.default.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_LISTEN, O.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_LISTEN).format({
    user: o
  }) : null != h && h.length > 0 ? O.default.Messages.STICKER_NOTIFICATION_BODY.format({
    stickerName: h[0].name
  }) : t.type === R.MessageTypes.PREMIUM_REFERRAL ? O.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_BODY_SHORT.format({
    username: x.default.getName(n)
  }) : null != t.poll ? O.default.Messages.POLL_SENT_NOTIFICATION.format({
    question: t.poll.question.text
  }) : r.default.unparse(f, e.id, !0)).length && (i = function(e) {
    var t;
    if (void 0 !== e.embeds && e.embeds.length > 0) {
      let t = e.embeds[0];
      if (null != t.description) return null != t.title ? "".concat(t.title, " ").concat(t.description) : t.description;
      if (null != t.title) return t.title;
      if (null != t.fields) {
        let e = t.fields[0];
        return "".concat(e.name, " ").concat(e.value)
      }
    }
    if ((0, A.hasFlag)(null !== (t = e.flags) && void 0 !== t ? t : 0, R.MessageFlags.IS_VOICE_MESSAGE)) return O.default.Messages.VOICE_MESSAGES_SENT_NOTIFICATION;
    if (void 0 !== e.attachments && e.attachments.length > 0) {
      let t = e.attachments[0].filename;
      return O.default.Messages.NOTIFICATION_BODY_ATTACHMENT.format({
        filename: t
      })
    }
    return ""
  }(t)), {
    icon: n.getAvatarURL(e.guild_id, 128),
    title: d,
    body: i
  }
}