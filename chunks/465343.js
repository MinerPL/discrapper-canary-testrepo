"use strict";
n.d(t, {
  K: function() {
    return f
  },
  i: function() {
    return S
  }
}), n(47120);
var i = n(933557),
  r = n(797610),
  s = n(339085),
  o = n(633302),
  a = n(601070),
  l = n(592125),
  u = n(984933),
  _ = n(271383),
  d = n(430824),
  c = n(594174),
  E = n(483360),
  I = n(709054),
  T = n(752305),
  h = n(377668);

function S(e, t, n, c) {
  let {
    allowUsers: T = !0,
    allowRoles: S = !0
  } = null != c ? c : {};
  switch (e[0]) {
    case "@":
      return function(e, t, n, i, s) {
        let [o, a] = e.slice(1).split("#", 2), u = null != t ? d.Z.getGuild(t) : null, c = (0, r.M9)(u);
        if (s && null == a && null != u) {
          for (let e of Object.values(d.Z.getRoles(u.id)))
            if (o === e.name) return {
              type: "roleMention",
              roleId: e.id,
              children: [{
                text: ""
              }]
            }
        }
        if (i) {
          let e = null != n ? l.Z.getChannel(n) : null;
          if (null != e) {
            if (e.isPrivate()) {
              for (let t of e.recipients)
                if (N(o, a, t)) return {
                  type: "userMention",
                  userId: t,
                  children: [{
                    text: ""
                  }]
                }
            } else {
              for (let {
                  userId: e
                }
                of _.ZP.getMembers(t))
                if (N(o, a, e)) return {
                  type: "userMention",
                  userId: e,
                  children: [{
                    text: ""
                  }]
                };
              if (c && N(o, a, h.fL)) return {
                type: "userMention",
                userId: h.fL,
                children: [{
                  text: ""
                }]
              }
            }
          }
        }
        return null
      }(e, t, n, T, S);
    case ":":
      return function(e, t) {
        let n = o.ZP.EMOJI_NAME_RE.exec(e);
        if (null == n) return null;
        let i = n[1],
          r = s.Z.getDisambiguatedEmojiContext(t).getCustomEmoji();
        if (null != r && i in r) {
          let e = r[i];
          return {
            type: "customEmoji",
            emoji: {
              emojiId: e.id,
              name: "require_colons" in e && e.require_colons ? ":".concat(e.name, ":") : e.name,
              animated: !0 === e.animated,
              jumboable: !1
            },
            children: [{
              text: ""
            }]
          }
        }
        return null
      }(e, t);
    case "#":
      return function(e, t) {
        let n;
        if (null == t) return null;
        n = e.length > 3 && '"' === e[1] && '"' === e[e.length - 1] ? (0, i.mA)(e.slice(2, e.length - 1)) : e.slice(1);
        let r = u.ZP.getTextChannelNameDisambiguations(t);
        for (let e of I.default.keys(r))
          if (r[e].name === n) return {
            type: "channelMention",
            channelId: e,
            children: [{
              text: ""
            }]
          };
        for (let e of E.k1) {
          if (e !== u.sH) {
            for (let {
                channel: i
              }
              of u.ZP.getChannels(t)[e])
              if (i.name === n) return {
                type: "channelMention",
                channelId: i.id,
                children: [{
                  text: ""
                }]
              }
          }
        }
        let s = a.Z.getActiveJoinedThreadsForGuild(t);
        for (let e of I.default.keys(s))
          for (let t of I.default.keys(s[e])) {
            let {
              channel: i
            } = s[e][t];
            if (i.name === n) return {
              type: "channelMention",
              channelId: i.id,
              children: [{
                text: ""
              }]
            }
          }
        return null
      }(e, t)
  }
  return null
}

function f(e, t, n, i) {
  let r = S(e, t, n, i);
  return null == r ? null : (0, T.VI)(r)
}

function N(e, t, n) {
  let i = c.default.getUser(n);
  return null != i && (n === h.fL && "clyde" === e.toLowerCase() || i.username === e && i.discriminator === (null != t ? t : "0"))
}