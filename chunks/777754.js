"use strict";
let n = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i,
  i = /^((https:\/\/)?(discord\.gg\/)|(discord\.com\/)(invite\/)?)?[A-Za-z0-9]{8,8}$/,
  r = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
  s = /^(.*)#[0-9]{1,5}$/,
  o = ["@", "#", ":", "```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage"],
  a = ["discordtag", "everyone", "here", "discord nitro", "discord"];
t.Z = {
  isEmail: function(e) {
    return n.test(e)
  },
  isInvite: function(e) {
    return i.test(e)
  },
  isPhoneNumber: function(e) {
    return r.test(e)
  },
  isUserTagLike: function(e) {
    let t = s.exec(e);
    if (null != t && t.length > 1) {
      let e = t[1],
        n = o.some(t => e.includes(t)),
        i = a.includes(e);
      return !n && !i
    }
    return !1
  }
}