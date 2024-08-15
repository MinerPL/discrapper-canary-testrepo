n.d(t, {
  Z: function() {
return r;
  }
}), n(47120);
var s = n(470079),
  a = n(881052),
  i = n(728345);

function r() {
  let [e, t] = s.useState(!1), [n, r] = s.useState(), l = s.useRef();
  return {
createGuildApplication: async (e, n, s, o) => {
  r(void 0);
  try {
    if (t(!0), null == l.current) {
      let t = await i.Z.createApplication({
        name: o,
        guildId: e.id,
        type: s,
        teamId: n
      });
      l.current = t;
    }
    return await i.Z.getApplicationsForGuild(e.id, {
      type: s,
      includeTeam: !0
    }), !0;
  } catch (e) {
    return r(new a.Hx(e)), !1;
  } finally {
    t(!1);
  }
},
submitting: e,
error: n
  };
}