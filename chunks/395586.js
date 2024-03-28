"use strict";
s.r(t), s.d(t, {
  CreatorMonetizationSettingsDisabledContextProvider: function() {
    return o
  },
  useCreatorMonetizationSettingsDisabled: function() {
    return r
  }
}), s("411104");
var a = s("735250"),
  l = s("470079"),
  n = s("674180");
let i = l.createContext(void 0);

function r() {
  let e = l.useContext(i);
  if (null == e) throw Error("useCreatorMonetizationSettingsDisabled must be used within a CreatorMonetizationSettingsDisabledContext");
  return e
}

function o(e) {
  let {
    guildId: t,
    children: s
  } = e, {
    shouldRestrictUpdatingCreatorMonetizationSettings: l
  } = (0, n.useShouldRestrictUpdatingCreatorMonetizationSettings)(t);
  return (0, a.jsx)(i.Provider, {
    value: l,
    children: s
  })
}