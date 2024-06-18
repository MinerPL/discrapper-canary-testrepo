"use strict";
t.d(s, {
  AL: function() {
    return o
  },
  f3: function() {
    return r
  }
}), t(411104);
var n = t(735250),
  i = t(470079),
  l = t(674180);
let a = i.createContext(void 0);

function r() {
  let e = i.useContext(a);
  if (null == e) throw Error("useCreatorMonetizationSettingsDisabled must be used within a CreatorMonetizationSettingsDisabledContext");
  return e
}

function o(e) {
  let {
    guildId: s,
    children: t
  } = e, {
    shouldRestrictUpdatingCreatorMonetizationSettings: i
  } = (0, l.gX)(s);
  return (0, n.jsx)(a.Provider, {
    value: i,
    children: t
  })
}