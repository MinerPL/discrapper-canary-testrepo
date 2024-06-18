"use strict";
n.d(t, {
  g: function() {
    return a
  },
  mM: function() {
    return u
  },
  tr: function() {
    return l
  }
}), n(442837);
var i = n(430824),
  r = n(914010),
  s = n(369274),
  o = n(558921);

function a(e) {
  let {
    guildStore: t
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = null != t ? t : i.Z, r = n.getGuild(o.y), a = (null == r ? void 0 : r.joinedAt) instanceof Date && Date.now() - r.joinedAt.getTime() <= 36e5;
  return 1 === n.getGuildCount() && a && (0, s.Z)(e)
}

function l(e) {
  return e.isDM() && 1 === e.rawRecipients.length && e.rawRecipients[0].id === o.g && a("app")
}

function u(e) {
  return new Promise((t, n) => {
    if (r.Z.getGuildId() === e) {
      t();
      return
    }
    let i = setTimeout(() => {
        o(), n()
      }, 3e3),
      s = () => {
        r.Z.getGuildId() === e && (o(), t())
      },
      o = () => {
        r.Z.removeChangeListener(s), clearTimeout(i)
      };
    r.Z.addChangeListener(s)
  })
}