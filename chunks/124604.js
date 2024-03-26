"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("658636"),
  i = n("469147"),
  r = n("181221"),
  o = n("393421"),
  c = n("930794"),
  d = n("238055"),
  u = e => {
    let {
      onClose: t,
      invite: n,
      forceGuildScrollHeight: u = !0,
      isNUXFlow: _
    } = e, [E, N] = s.useState([d.HubEmailConnectionSteps.VERIFY_EMAIL]), [I, m] = s.useState(""), [f, C] = s.useState(""), [T, S] = s.useState(void 0), [g, h] = s.useState([]), A = e => {
      let t = E.concat(e);
      N(t.slice(-4))
    }, p = E[E.length - 1];
    switch (p) {
      case d.HubEmailConnectionSteps.VERIFY_EMAIL:
        return (0, a.jsx)(l.default, {
          setGuildsInfo: h,
          setStep: A,
          email: I,
          setEmail: m,
          setGuildId: S,
          invite: n,
          onClose: t,
          isNUXFlow: _
        });
      case d.HubEmailConnectionSteps.SELECT_SCHOOL:
        return (0, a.jsx)(i.default, {
          guildsInfo: g,
          setStep: A,
          email: I,
          setGuildId: S,
          forceGuildScrollHeight: u
        });
      case d.HubEmailConnectionSteps.SUBMIT_SCHOOL:
        return (0, a.jsx)(r.default, {
          onBack: () => {
            if (E.length > 1) {
              let e = E.slice(0, -1);
              N(e.slice(-4))
            }
          },
          setStep: A,
          email: I,
          school: f,
          setSchool: C
        });
      case d.HubEmailConnectionSteps.VERIFY_PIN:
        return (0, a.jsx)(o.default, {
          email: I,
          onClose: t,
          guildId: T
        });
      case d.HubEmailConnectionSteps.EMAIL_WAITLIST:
        return (0, a.jsx)(c.default, {
          setStep: A,
          school: f
        });
      default:
        return null
    }
  }