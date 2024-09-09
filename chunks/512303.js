t.d(n, {
    Z: function () {
        return M;
    }
});
var a = t(735250);
t(470079);
var i = t(373793),
    l = t(481060),
    r = t(700582),
    s = t(592180),
    o = t(565138),
    u = t(430824),
    d = t(594174),
    c = t(689938),
    E = t(919062);
function M(e) {
    var n, t, M;
    if (!(0, s.a)(e)) return null;
    let I = null === (n = e.interactionMetadata) || void 0 === n ? void 0 : n.authorizing_integration_owners[i.Y.USER_INSTALL],
        m = null === (t = e.interactionMetadata) || void 0 === t ? void 0 : t.authorizing_integration_owners[i.Y.GUILD_INSTALL],
        g = d.default.getUser(I),
        _ = u.Z.getGuild(m),
        f = d.default.getUser(null === (M = e.interactionMetadata) || void 0 === M ? void 0 : M.user.id),
        Z = null;
    return (
        null != _
            ? (Z = (0, a.jsx)(l.MenuItem, {
                  className: E.interactionInfoMenuItem,
                  disabled: !0,
                  iconLeft: () =>
                      (0, a.jsx)(o.Z, {
                          guild: _,
                          size: o.Z.Sizes.MINI
                      }),
                  id: 'integration-owner',
                  label: _.name,
                  subtext: c.Z.Messages.INTERACTION_RESPONSE_CONTEXT_INSTALLED_BY.format({ application: e.author.username })
              }))
            : null != g &&
              (Z = (0, a.jsx)(l.MenuItem, {
                  className: E.interactionInfoMenuItem,
                  disabled: !0,
                  iconLeft: () =>
                      (0, a.jsx)(r.Z, {
                          user: g,
                          size: l.AvatarSizes.SIZE_20
                      }),
                  id: 'integration-owner',
                  label: g.username,
                  subtext: c.Z.Messages.INTERACTION_RESPONSE_CONTEXT_INSTALLED_BY.format({ application: e.author.username })
              })),
        (0, a.jsxs)(l.MenuItem, {
            id: 'view-interaction-info',
            label: c.Z.Messages.VIEW_INTERACTION_INFO,
            children: [
                Z,
                null != f
                    ? (0, a.jsx)(l.MenuItem, {
                          className: E.interactionInfoMenuItem,
                          disabled: !0,
                          iconLeft: () =>
                              (0, a.jsx)(r.Z, {
                                  user: f,
                                  size: l.AvatarSizes.SIZE_20
                              }),
                          id: 'interaction-user',
                          label: f.username,
                          subtext: c.Z.Messages.INTERACTION_RESPONSE_CONTEXT_TRIGGERED_BY
                      })
                    : null
            ]
        })
    );
}
