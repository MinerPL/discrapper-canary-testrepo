"use strict";
n.r(t), n.d(t, {
  shouldNotifyBase: function() {
    return y
  },
  shouldNotify: function() {
    return D
  },
  shouldNotifyForSelectedChannel: function() {
    return b
  },
  shouldNotifyForForumThreadCreation: function() {
    return j
  },
  makeTextChatNotification: function() {
    return P
  }
}), n("702976"), n("70102");
var l = n("679653"),
  a = n("605250"),
  s = n("267567"),
  i = n("288518"),
  r = n("884351"),
  o = n("406297"),
  u = n("913491"),
  d = n("755624"),
  c = n("414833"),
  f = n("845579"),
  h = n("233069"),
  C = n("982108"),
  p = n("42203"),
  m = n("305961"),
  E = n("945956"),
  g = n("27618"),
  I = n("18494"),
  S = n("162771"),
  _ = n("101125"),
  N = n("282109"),
  T = n("697218"),
  A = n("568734"),
  L = n("387111"),
  v = n("700097"),
  x = n("158998"),
  R = n("49111"),
  M = n("648564"),
  O = n("782340");

function y(e, t, n) {
  let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
  if (t.hasFlag(R.UserFlags.SPAMMER) || n.isManaged()) return !1;
  let i = n.getGuildId();
  return !(null != i && s.default.isLurking(i) || t.id === e.id || g.default.isBlocked(t.id) || !l && _.default.getStatus() === R.StatusTypes.DND || f.QuietMode.getSetting() || !a && N.default.allowNoMessages(n)) && !0
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
    let e = I.default.getChannelId(S.default.getGuildId());
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
    let t = !h.GUILD_VOCAL_CHANNEL_TYPES.has(s.type) || E.default.getChannelId() === s.id;
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
  let l = I.default.getChannelId(S.default.getGuildId());
  if (l !== t) return !1;
  let a = p.default.getChannel(t);
  e.type === R.MessageTypes.THREAD_STARTER_MESSAGE && (a = p.default.getChannel(null == a ? void 0 : a.parent_id));
  let s = T.default.getCurrentUser(),
    i = T.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
  return !(null == a || null == s || null == i || a.isManaged() || i.hasFlag(R.UserFlags.SPAMMER) || g.default.isBlocked(i.id) || i.id === s.id || _.default.getStatus() === R.StatusTypes.DND || f.QuietMode.getSetting() || N.default.allowNoMessages(a)) && !0
}

function j(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    a = T.default.getCurrentUser(),
    s = T.default.getUser(e.ownerId);
  if (null == t || null == a || null == s || !y(a, s, t, l, !0) || N.default.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)) return !1;
  if (!n) {
    let e = I.default.getChannelId(S.default.getGuildId());
    if (e === t.id) return !1
  }
  return N.default.getNewForumThreadsCreated(t)
}
let G = (e, t, n) => "".concat(e, " (").concat((0, l.computeChannelName)(t, T.default, g.default, !0)).concat(null != n ? ", ".concat((0, l.computeChannelName)(n, T.default, g.default)) : "", ")");

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
      if (t.type === R.MessageTypes.THREAD_STARTER_MESSAGE && null != c) d = G(d, c, p.default.getChannel(c.parent_id));
      else if ((0, u.default)(t)) {
        let t = m.default.getGuild(e.getGuildId());
        null != t && (d = G(d, e, c))
      } else d = G(d, e, c);
      break;
    case R.ChannelTypes.GROUP_DM:
      let f = e.isManaged() && n.bot && d === (0, l.computeChannelName)(e, T.default, g.default);
      !f && (d = "".concat(d, " (").concat((0, l.computeChannelName)(e, T.default, g.default, !0), ")"))
  }
  let h = t.content;
  if ((0, u.default)(t) && null == (h = v.default.stringify(t, e))) throw new(0, a.default)("NotificationTextUtils").warn("SystemMessageUtils.stringify(...) could not convert", t), Error("failed to stringify system message");
  let C = null !== (s = t.sticker_items) && void 0 !== s ? s : t.stickers;
  if (null != t.activity && null != t.application) i = t.activity.type === R.ActivityActionTypes.JOIN ? U(e, O.default.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_JOIN, O.default.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_JOIN, O.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN).format({
    user: o,
    game: t.application.name
  }) : t.activity.type === R.ActivityActionTypes.JOIN_REQUEST ? U(e, O.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST, O.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST, O.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST).format({
    user: o,
    game: t.application.name
  }) : "";
  else if (null != t.activity && t.activity.type === R.ActivityActionTypes.LISTEN) {
    let t = U(e, O.default.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_LISTEN, O.default.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_LISTEN, O.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_LISTEN);
    i = t.format({
      user: o
    })
  } else i = null != C && C.length > 0 ? O.default.Messages.STICKER_NOTIFICATION_BODY.format({
    stickerName: C[0].name
  }) : t.type === R.MessageTypes.PREMIUM_REFERRAL ? O.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_BODY_SHORT.format({
    username: x.default.getName(n)
  }) : null != t.poll ? O.default.Messages.POLL_SENT_NOTIFICATION.format({
    question: t.poll.question.text
  }) : r.default.unparse(h, e.id, !0);
  0 === i.length && (i = function(e) {
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
  }(t));
  let E = n.getAvatarURL(e.guild_id, 128);
  return {
    icon: E,
    title: d,
    body: i
  }
}