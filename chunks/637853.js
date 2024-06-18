"use strict";
n.d(t, {
  Ee: function() {
    return m
  },
  L6: function() {
    return P
  },
  V7: function() {
    return R
  },
  VF: function() {
    return M
  },
  b$: function() {
    return S
  },
  d9: function() {
    return v
  },
  dF: function() {
    return O
  },
  dX: function() {
    return y
  },
  iF: function() {
    return C
  },
  kl: function() {
    return g
  },
  mn: function() {
    return p
  },
  p3: function() {
    return N
  },
  wC: function() {
    return f
  }
}), n(789020), n(47120), n(724458), n(653041), n(536091);
var i = n(442837),
  r = n(902704),
  s = n(447003),
  o = n(592125),
  a = n(984933),
  l = n(430824),
  u = n(496675),
  _ = n(630388),
  d = n(823379),
  c = n(700785),
  E = n(977258),
  I = n(981631),
  T = n(372897);
let h = new Date(16824888e5);

function S(e) {
  return (0, i.e7)([l.Z, u.Z], () => {
    let t = l.Z.getGuild(e),
      n = !!(null == t ? void 0 : t.hasFeature(I.oNc.COMMUNITY)),
      i = u.Z.can(I.Plq.MANAGE_GUILD, t),
      r = u.Z.can(I.Plq.MANAGE_ROLES, t);
    return n && i && r
  })
}

function f(e) {
  let t = l.Z.getGuild(e),
    n = !!(null == t ? void 0 : t.hasFeature(I.oNc.COMMUNITY)),
    i = u.Z.can(I.Plq.MANAGE_GUILD, t),
    r = u.Z.can(I.Plq.MANAGE_ROLES, t);
  return n && i && r
}

function N(e, t) {
  var n;
  if (null == e || !e.hasFeature(I.oNc.GUILD_ONBOARDING) || null == t || null == t.joinedAt || new Date(t.joinedAt) < h) return !1;
  let i = null !== (n = t.flags) && void 0 !== n ? n : 0;
  return _.yE(i, T.q.STARTED_ONBOARDING) && !_.yE(i, T.q.COMPLETED_ONBOARDING)
}

function A(e, t, n) {
  let i = new Set;
  e.forEach(e => {
    e.options.forEach(e => {
      var t;
      null == e || null === (t = e.channelIds) || void 0 === t || t.forEach(e => {
        i.add(e)
      })
    })
  }), t.forEach(e => i.add(e));
  let r = n.filter(e => !e.isCategory() && !e.isThread() && !(0, s.Z)(e)),
    o = r.filter(e => i.has(e.id) || null != e.parent_id && i.has(e.parent_id));
  return [o, r.filter(e => !i.has(e.id) && !(null != e.parent_id && i.has(e.parent_id)))]
}

function m(e, t, n) {
  return A(t, n, a.ZP.getChannels(e)[a.sH].map(e => {
    let {
      channel: t
    } = e;
    return t
  }))
}

function O(e, t, n) {
  return A(t, n, (0, i.e7)([a.ZP], () => a.ZP.getChannels(e))[a.sH].map(e => {
    let {
      channel: t
    } = e;
    return t
  }))
}

function R(e) {
  return C(o.Z.getChannel(e))
}

function C(e) {
  return !!(null != e && (0, E.s)(e.guild_id, e.id)) && (e.isForumChannel() ? c.Uu(I.Plq.SEND_MESSAGES_IN_THREADS, e) : c.Uu(I.Plq.SEND_MESSAGES, e))
}

function p(e) {
  return (0, i.e7)([o.Z], () => {
    let t = o.Z.getChannel(e);
    return (0, d.lm)(t) && C(t)
  })
}

function g(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
    r = L(e, t, e => e.id, i);
  return n.forEach(t => {
    var n, s;
    if (!t.required) return;
    let o = L(e, null !== (s = null === (n = t.options[0]) || void 0 === n ? void 0 : n.channelIds) && void 0 !== s ? s : [], e => e.id),
      a = t.options.reduce((t, n) => {
        if (null == n.channelIds) return [];
        let s = L(e, n.channelIds, e => e.id, e => i(e) && !r.includes(e));
        return s.length < t.length ? s : t
      }, o);
    r.push(...a)
  }), r
}

function L(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e => e,
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
    r = a.ZP.getChannels(e)[a.sH],
    s = [];
  for (let {
      channel: e
    }
    of r)
    if ((0, E.s)(e.guild_id, e.id) && (t.includes(e.id) && !e.isCategory() || !e.isThread() && null != e.parent_id && t.includes(e.parent_id))) {
      let t = n(e);
      i(t) && s.push(t)
    } return s
}

function v(e, t) {
  var n, i;
  let r = L(e, t),
    s = a.ZP.getChannels(e)[a.sH],
    o = {};
  for (let e of s) o[e.channel.id] = e;
  return [(n = r.map(e => {
    let {
      id: t
    } = e;
    return t
  }), i = o, n.filter(e => {
    var t;
    return C(null === (t = i[e]) || void 0 === t ? void 0 : t.channel)
  })), r]
}

function D(e, t) {
  return e[0].length === t[0].length && e[1].length === t[1].length && (0, r.Z)(e[0], t[0]) && (0, r.Z)(e[1], t[1])
}

function M(e, t) {
  return (0, i.e7)([a.ZP], () => {
    let n = a.ZP.getChannels(e),
      i = [],
      r = [],
      s = {};
    for (let e of n[a.sH])(0, E.s)(e.channel.guild_id, e.channel.id) && (t.has(e.channel.id) && !e.channel.isCategory() || !e.channel.isThread() && null != e.channel.parent_id && t.has(e.channel.parent_id)) && (s[e.channel.id] = e, i.push(e.channel), C(e.channel) && r.push(e.channel.id));
    return [r, i]
  }, [e, t], D)
}

function P(e) {
  return new Set(e.map(e => e.roleIds).flat().filter(d.lm))
}

function y(e) {
  return new Set(e.map(e => e.channelIds).flat().filter(d.lm))
}