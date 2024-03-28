"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
}), s("47120");
var a = s("470079"),
  l = s("881052"),
  n = s("728345");

function i() {
  let [e, t] = a.useState(!1), [s, i] = a.useState(), r = a.useRef();
  return {
    createGuildApplication: async (e, s, a, o) => {
      i(void 0);
      try {
        if (t(!0), null == r.current) {
          let t = await n.default.createApplication({
            name: o,
            guildId: e.id,
            type: a,
            teamId: s
          });
          r.current = t
        }
        return await n.default.getApplicationsForGuild(e.id, {
          type: a,
          includeTeam: !0
        }), !0
      } catch (e) {
        return i(new l.APIError(e)), !1
      } finally {
        t(!1)
      }
    },
    submitting: e,
    error: s
  }
}