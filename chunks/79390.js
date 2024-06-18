"use strict";
n.d(t, {
  D$: function() {
    return p
  },
  N4: function() {
    return D
  },
  UI: function() {
    return R
  },
  Uu: function() {
    return A
  },
  _N: function() {
    return C
  },
  cS: function() {
    return g
  },
  cZ: function() {
    return M
  },
  e1: function() {
    return P
  },
  eQ: function() {
    return O
  },
  fw: function() {
    return m
  },
  uY: function() {
    return L
  },
  x9: function() {
    return v
  }
}), n(757143), n(47120), n(724458);
var i = n(392711),
  r = n.n(i),
  s = n(772848),
  o = n(263568),
  a = n(468194),
  l = n(442837),
  u = n(566006),
  _ = n(592125),
  d = n(542578),
  c = n(375954),
  E = n(496675),
  I = n(699516),
  T = n(70956),
  h = n(5192),
  S = n(489887),
  f = n(981631),
  N = n(689938);

function A() {
  return {
    text: void 0,
    image: void 0,
    localCreationAnswerId: function() {
      return (0, s.Z)()
    }()
  }
}

function m(e) {
  return e.replace(/\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i, "")
}

function O(e) {
  for (let t of e.reactions)
    if (null == t.me_vote) return !0;
  return !1
}

function R(e) {
  return (0, l.e7)([E.Z], () => !!(null != e && f.TPd.POLLS.has(e.type)) && (!!e.isPrivate() || E.Z.can(f.Plq.SEND_MESSAGES, e) && E.Z.can(f.Plq.SEND_POLLS, e)))
}

function C() {
  return !1
}

function p(e, t, n) {
  return 0 === e.length && null == t.find(e => g(e, n))
}

function g(e, t) {
  if (t === o.C.IMAGE_ONLY_ANSWERS) return null != e.image;
  {
    var n;
    let t = null === (n = e.text) || void 0 === n ? void 0 : n.trim();
    return null != t && t.length > 0
  }
}

function L(e, t) {
  var n;
  let i = null === (n = e.text) || void 0 === n ? void 0 : n.trim();
  return t === o.C.DEFAULT && null != e.image && (null == i || 0 === i.length)
}

function v(e) {
  var t, n;
  if (null == e) return;
  let i = null == e ? void 0 : null === (t = e.answers) || void 0 === t ? void 0 : t.map((e, t) => {
    var n, i;
    let r = null === (n = e.poll_media) || void 0 === n ? void 0 : n.emoji,
      s = {
        ...e.poll_media,
        emoji: null != r ? {
          id: r.id,
          name: null !== (i = r.name) && void 0 !== i ? i : ""
        } : void 0
      };
    return {
      ...e,
      answer_id: t + 1,
      poll_media: s
    }
  });
  let r = (null == e ? void 0 : e.duration) != null ? (n = e.duration, new Date(Date.now() + n * T.Z.Millis.HOUR).toISOString()) : "0";
  return {
    ...e,
    expiry: r,
    answers: i
  }
}

function D(e) {
  let t = function(e, t) {
    var n, i, r, s;
    let o = null !== (s = null === (r = e.embeds[0]) || void 0 === r ? void 0 : null === (i = r.fields) || void 0 === i ? void 0 : null === (n = i.find(e => "poll_question_text" === e.rawName)) || void 0 === n ? void 0 : n.rawValue) && void 0 !== s ? s : "";
    return null != t ? (0, a.aF)(o, t) : o
  }(e, S.Dv);
  return N.Z.Messages.POLL_RESULT_REPLY_TEXT.format({
    title: t
  })
}

function M(e) {
  return e.reduce((e, t) => {
    var n, i;
    return e + (null !== (i = null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) && void 0 !== i ? i : 0)
  }, 0)
}

function P(e, t, n) {
  var i, s;
  let o = c.Z.getMessage(t, e);
  if (null == o) return "";
  let a = o.getReaction({
      id: n,
      name: "",
      animated: !1
    }),
    l = null !== (s = null == a ? void 0 : null === (i = a.count_details) || void 0 === i ? void 0 : i.vote) && void 0 !== s ? s : 0,
    E = function(e, t) {
      let n = e.getChannelId(),
        i = d.Z.getReactions(n, e.id, {
          id: t,
          name: "",
          animated: !1
        }, S.$J, u.O.VOTE),
        s = _.Z.getChannel(n),
        o = null == s || s.isPrivate() ? null : s.getGuildId();
      return r()(i).reject(e => I.Z.isBlocked(e.id)).take(S.$J).map(e => h.ZP.getName(o, null == s ? void 0 : s.id, e)).value()
    }(o, n);
  return 0 === E.length ? "" : function(e, t) {
    let n = Math.max(0, t - e.length);
    if (1 === e.length) return n > 0 ? N.Z.Messages.POLL_VOTES_TOOLTIP_1_N.format({
      a: e[0],
      n: n.toLocaleString()
    }) : e[0];
    if (2 === e.length) return n > 0 ? N.Z.Messages.POLL_VOTES_TOOLTIP_2_N.format({
      a: e[0],
      b: e[1],
      n: n.toLocaleString()
    }) : N.Z.Messages.POLL_VOTES_TOOLTIP_2.format({
      a: e[0],
      b: e[1]
    });
    if (3 !== e.length) return N.Z.Messages.POLL_VOTES_TOOLTIP_N.format({
      n: n.toLocaleString()
    });
    else return n > 0 ? N.Z.Messages.POLL_VOTES_TOOLTIP_3_N.format({
      a: e[0],
      b: e[1],
      c: e[2],
      n: n.toLocaleString()
    }) : N.Z.Messages.POLL_VOTES_TOOLTIP_3.format({
      a: e[0],
      b: e[1],
      c: e[2]
    })
  }(E, l)
}