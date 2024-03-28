"use strict";
s.r(t), s("47120");
var a = s("470079"),
  n = s("399606"),
  l = s("230711"),
  i = s("663389"),
  r = s("981631"),
  o = s("526761");
let d = new Set(Object.values(o.ProfileCustomizationSubsection)),
  u = e => null != e && d.has(e);
t.default = () => {
  let e = (0, n.useStateFromStores)([i.default], () => {
      let e = i.default.getSubsection();
      return u(e) ? e : o.ProfileCustomizationSubsection.USER_PROFILE
    }),
    t = a.useCallback(t => {
      e !== t && l.default.setSection(r.UserSettingsSections.PROFILE_CUSTOMIZATION, t)
    }, [e]);
  return {
    subsection: e,
    setSubsection: t
  }
}