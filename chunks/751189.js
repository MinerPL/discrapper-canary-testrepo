var r = n(544891),
    i = n(570140),
    a = n(626135),
    s = n(741847),
    o = n(981631);
t.Z = {
    resolveGuildTemplate: function e(t) {
        return i.Z.isDispatching()
            ? Promise.resolve().then(() => e(t))
            : (i.Z.dispatch({
                  type: 'GUILD_TEMPLATE_RESOLVE',
                  code: t
              }),
              r.tn
                  .get({
                      url: o.ANM.UNRESOLVED_GUILD_TEMPLATE(t),
                      oldFormErrors: !0
                  })
                  .then(
                      (e) => {
                          let n = e.body;
                          return (
                              a.default.track(o.rMx.GUILD_TEMPLATE_RESOLVED, {
                                  resolved: !0,
                                  guild_template_code: t,
                                  guild_template_name: n.name,
                                  guild_template_description: n.description,
                                  guild_template_guild_id: n.source_guild_id
                              }),
                              i.Z.dispatch({
                                  type: 'GUILD_TEMPLATE_RESOLVE_SUCCESS',
                                  guildTemplate: n,
                                  code: t
                              }),
                              {
                                  guildTemplate: (0, s.Z)(n),
                                  code: t
                              }
                          );
                      },
                      () => (
                          a.default.track(o.rMx.GUILD_TEMPLATE_RESOLVED, {
                              resolved: !1,
                              guild_template_code: t
                          }),
                          i.Z.dispatch({
                              type: 'GUILD_TEMPLATE_RESOLVE_FAILURE',
                              code: t
                          }),
                          {
                              guildTemplate: null,
                              code: t
                          }
                      )
                  ));
    },
    loadTemplatesForGuild: (e) =>
        r.tn
            .get({
                url: o.ANM.GUILD_TEMPLATES(e),
                oldFormErrors: !0
            })
            .then(
                (e) => (
                    i.Z.dispatch({
                        type: 'GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS',
                        guildTemplates: e.body
                    }),
                    e
                )
            ),
    createGuildTemplate: (e, t, n) =>
        r.tn
            .post({
                url: o.ANM.GUILD_TEMPLATES(e),
                body: {
                    name: t,
                    description: n
                },
                oldFormErrors: !0
            })
            .then((e) => {
                i.Z.dispatch({
                    type: 'GUILD_TEMPLATE_CREATE_SUCCESS',
                    guildTemplate: e.body,
                    code: e.body.code
                });
            }),
    syncGuildTemplate: (e, t) =>
        r.tn
            .put({
                url: o.ANM.GUILD_TEMPLATE(e, t),
                oldFormErrors: !0
            })
            .then((e) => {
                i.Z.dispatch({
                    type: 'GUILD_TEMPLATE_SYNC_SUCCESS',
                    guildTemplate: e.body,
                    code: t
                });
            }),
    updateGuildTemplate: (e, t, n, a) =>
        r.tn
            .patch({
                url: o.ANM.GUILD_TEMPLATE(e, t),
                body: {
                    name: n,
                    description: a
                },
                oldFormErrors: !0
            })
            .then((e) => {
                i.Z.dispatch({
                    type: 'GUILD_TEMPLATE_SYNC_SUCCESS',
                    guildTemplate: e.body,
                    code: t
                });
            }),
    deleteGuildTemplate: (e, t) =>
        r.tn
            .del({
                url: o.ANM.GUILD_TEMPLATE(e, t),
                oldFormErrors: !0
            })
            .then(() => {
                i.Z.dispatch({
                    type: 'GUILD_TEMPLATE_DELETE_SUCCESS',
                    guildId: e,
                    code: t
                });
            })
};
