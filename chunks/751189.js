"use strict";
var i = n(544891),
  r = n(570140),
  s = n(626135),
  o = n(741847),
  a = n(981631);
t.Z = {
  resolveGuildTemplate: function e(t) {
    return r.Z.isDispatching() ? Promise.resolve().then(() => e(t)) : (r.Z.dispatch({
      type: "GUILD_TEMPLATE_RESOLVE",
      code: t
    }), i.tn.get({
      url: a.ANM.UNRESOLVED_GUILD_TEMPLATE(t),
      oldFormErrors: !0
    }).then(e => {
      let n = e.body;
      return s.default.track(a.rMx.GUILD_TEMPLATE_RESOLVED, {
        resolved: !0,
        guild_template_code: t,
        guild_template_name: n.name,
        guild_template_description: n.description,
        guild_template_guild_id: n.source_guild_id
      }), r.Z.dispatch({
        type: "GUILD_TEMPLATE_RESOLVE_SUCCESS",
        guildTemplate: n,
        code: t
      }), {
        guildTemplate: (0, o.Z)(n),
        code: t
      }
    }, () => (s.default.track(a.rMx.GUILD_TEMPLATE_RESOLVED, {
      resolved: !1,
      guild_template_code: t
    }), r.Z.dispatch({
      type: "GUILD_TEMPLATE_RESOLVE_FAILURE",
      code: t
    }), {
      guildTemplate: null,
      code: t
    })))
  },
  loadTemplatesForGuild: e => i.tn.get({
    url: a.ANM.GUILD_TEMPLATES(e),
    oldFormErrors: !0
  }).then(e => (r.Z.dispatch({
    type: "GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS",
    guildTemplates: e.body
  }), e)),
  createGuildTemplate: (e, t, n) => i.tn.post({
    url: a.ANM.GUILD_TEMPLATES(e),
    body: {
      name: t,
      description: n
    },
    oldFormErrors: !0
  }).then(e => {
    r.Z.dispatch({
      type: "GUILD_TEMPLATE_CREATE_SUCCESS",
      guildTemplate: e.body,
      code: e.body.code
    })
  }),
  syncGuildTemplate: (e, t) => i.tn.put({
    url: a.ANM.GUILD_TEMPLATE(e, t),
    oldFormErrors: !0
  }).then(e => {
    r.Z.dispatch({
      type: "GUILD_TEMPLATE_SYNC_SUCCESS",
      guildTemplate: e.body,
      code: t
    })
  }),
  updateGuildTemplate: (e, t, n, s) => i.tn.patch({
    url: a.ANM.GUILD_TEMPLATE(e, t),
    body: {
      name: n,
      description: s
    },
    oldFormErrors: !0
  }).then(e => {
    r.Z.dispatch({
      type: "GUILD_TEMPLATE_SYNC_SUCCESS",
      guildTemplate: e.body,
      code: t
    })
  }),
  deleteGuildTemplate: (e, t) => i.tn.del({
    url: a.ANM.GUILD_TEMPLATE(e, t),
    oldFormErrors: !0
  }).then(() => {
    r.Z.dispatch({
      type: "GUILD_TEMPLATE_DELETE_SUCCESS",
      guildId: e,
      code: t
    })
  })
}