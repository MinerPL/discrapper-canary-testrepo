"use strict";
A.r(t), A.d(t, {
  GuildProductAttachmentManagerContextProvider: function() {
    return i
  },
  useGuildProductAttachmentManagerContext: function() {
    return r
  }
}), A("411104");
var a = A("735250"),
  l = A("470079"),
  s = A("828762");
let n = l.createContext(void 0);

function r() {
  let e = l.useContext(n);
  if (null == e) throw Error("No GuildProductAttachmentManagerContextProvider found");
  return e
}

function i(e) {
  let {
    children: t,
    guildId: A,
    ...l
  } = e, r = (0, s.default)(A, l);
  return (0, a.jsx)(n.Provider, {
    value: r,
    children: t
  })
}