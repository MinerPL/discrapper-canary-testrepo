"use strict";
n.d(t, {
  Hl: function() {
    return a
  },
  Sz: function() {
    return l
  },
  ZP: function() {
    return o
  }
});
var i = n(592125),
  r = n(271383),
  s = n(430824);

function o(e) {
  let {
    message: t,
    userId: n,
    suppressEveryone: i = !1,
    suppressRoles: r = !1
  } = e;
  return l({
    userId: n,
    channelId: t.channel_id,
    mentionEveryone: t.mentionEveryone,
    mentionUsers: t.mentions,
    mentionRoles: t.mentionRoles,
    suppressEveryone: i,
    suppressRoles: r
  })
}

function a(e) {
  var t, n, i, r;
  let {
    rawMessage: s,
    userId: o,
    suppressEveryone: a = !1,
    suppressRoles: u = !1
  } = e;
  return l({
    userId: o,
    channelId: s.channel_id,
    mentionEveryone: null !== (n = s.mention_everyone) && void 0 !== n && n,
    mentionUsers: null !== (i = null === (t = s.mentions) || void 0 === t ? void 0 : t.map(e => e.id)) && void 0 !== i ? i : [],
    mentionRoles: null !== (r = s.mention_roles) && void 0 !== r ? r : [],
    suppressEveryone: a,
    suppressRoles: u
  })
}

function l(e) {
  let {
    userId: t,
    channelId: n,
    mentionEveryone: o,
    mentionUsers: a,
    mentionRoles: l,
    suppressEveryone: u = !1,
    suppressRoles: _ = !1
  } = e;
  if (o && !u || a.includes(t)) return !0;
  if (_ || null == l || 0 === l.length) return !1;
  let d = i.Z.getChannel(n);
  if (null == d) return !1;
  let c = d.getGuildId();
  if (null == c || null == s.Z.getGuild(c)) return !1;
  let E = r.ZP.getMember(c, t);
  return null != E && l.some(e => E.roles.includes(e))
}