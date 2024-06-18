"use strict";
t.d(s, {
  Z: function() {
    return a
  }
}), t(47120);
var n = t(470079),
  i = t(881052),
  l = t(728345);

function a() {
  let [e, s] = n.useState(!1), [t, a] = n.useState(), r = n.useRef();
  return {
    createGuildApplication: async (e, t, n, o) => {
      a(void 0);
      try {
        if (s(!0), null == r.current) {
          let s = await l.Z.createApplication({
            name: o,
            guildId: e.id,
            type: n,
            teamId: t
          });
          r.current = s
        }
        return await l.Z.getApplicationsForGuild(e.id, {
          type: n,
          includeTeam: !0
        }), !0
      } catch (e) {
        return a(new i.Hx(e)), !1
      } finally {
        s(!1)
      }
    },
    submitting: e,
    error: t
  }
}