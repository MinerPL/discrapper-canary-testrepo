"use strict";
t.r(s), t("47120");
var a = t("735250"),
  l = t("470079"),
  n = t("994640"),
  i = t("247007"),
  o = t("999464"),
  r = t("503406"),
  d = t("463115"),
  c = t("888592");
s.default = e => {
  let {
    onClose: s,
    invite: t,
    forceGuildScrollHeight: u = !0,
    isNUXFlow: N
  } = e, [m, _] = l.useState([c.HubEmailConnectionSteps.VERIFY_EMAIL]), [E, I] = l.useState(""), [C, x] = l.useState(""), [f, h] = l.useState(void 0), [T, g] = l.useState([]), S = e => {
    _(m.concat(e).slice(-4))
  };
  switch (m[m.length - 1]) {
    case c.HubEmailConnectionSteps.VERIFY_EMAIL:
      return (0, a.jsx)(n.default, {
        setGuildsInfo: g,
        setStep: S,
        email: E,
        setEmail: I,
        setGuildId: h,
        invite: t,
        onClose: s,
        isNUXFlow: N
      });
    case c.HubEmailConnectionSteps.SELECT_SCHOOL:
      return (0, a.jsx)(i.default, {
        guildsInfo: T,
        setStep: S,
        email: E,
        setGuildId: h,
        forceGuildScrollHeight: u
      });
    case c.HubEmailConnectionSteps.SUBMIT_SCHOOL:
      return (0, a.jsx)(o.default, {
        onBack: () => {
          m.length > 1 && _(m.slice(0, -1).slice(-4))
        },
        setStep: S,
        email: E,
        school: C,
        setSchool: x
      });
    case c.HubEmailConnectionSteps.VERIFY_PIN:
      return (0, a.jsx)(r.default, {
        email: E,
        onClose: s,
        guildId: f
      });
    case c.HubEmailConnectionSteps.EMAIL_WAITLIST:
      return (0, a.jsx)(d.default, {
        setStep: S,
        school: C
      });
    default:
      return null
  }
}