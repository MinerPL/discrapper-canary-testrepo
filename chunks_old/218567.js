"use strict";
s.r(t), s.d(t, {
  useCreatorMonetizationSettingsDisabled: function() {
    return r
  },
  CreatorMonetizationSettingsDisabledContextProvider: function() {
    return o
  }
}), s("70102");
var a = s("37983"),
  l = s("884691"),
  n = s("465869");
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