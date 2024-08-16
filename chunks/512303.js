t.d(n, {
    Z: function () {
        return M;
    }
});
var i = t(735250);
t(470079);
var a = t(373793),
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
    let I = null === (n = e.interactionMetadata) || void 0 === n ? void 0 : n.authorizing_integration_owners[a.Y.USER_INSTALL],
        m = null === (t = e.interactionMetadata) || void 0 === t ? void 0 : t.authorizing_integration_owners[a.Y.GUILD_INSTALL],
        _ = d.default.getUser(I),
        g = u.Z.getGuild(m),
        f = d.default.getUser(null === (M = e.interactionMetadata) || void 0 === M ? void 0 : M.user.id),
        Z = null;
    return (
        null != g
            ? (Z = (0, i.jsx)(l.MenuItem, {
                  className: E.interactionInfoMenuItem,
                  disabled: !0,
                  icon: () =>
                      (0, i.jsx)(o.Z, {
                          guild: g,
                          size: o.Z.Sizes.MINI
                      }),
                  id: 'integration-owner',
                  label: g.name,
                  showIconFirst: !0,
                  subtext: c.Z.Messages.INTERACTION_RESPONSE_CONTEXT_INSTALLED_BY.format({ application: e.author.username })
              }))
            : null != _ &&
              (Z = (0, i.jsx)(l.MenuItem, {
                  className: E.interactionInfoMenuItem,
                  disabled: !0,
                  icon: () =>
                      (0, i.jsx)(r.Z, {
                          user: _,
                          size: l.AvatarSizes.SIZE_20
                      }),
                  id: 'integration-owner',
                  label: _.username,
                  showIconFirst: !0,
                  subtext: c.Z.Messages.INTERACTION_RESPONSE_CONTEXT_INSTALLED_BY.format({ application: e.author.username })
              })),
        (0, i.jsxs)(l.MenuItem, {
            id: 'view-interaction-info',
            label: c.Z.Messages.VIEW_INTERACTION_INFO,
            children: [
                Z,
                null != f
                    ? (0, i.jsx)(l.MenuItem, {
                          className: E.interactionInfoMenuItem,
                          disabled: !0,
                          icon: () =>
                              (0, i.jsx)(r.Z, {
                                  user: f,
                                  size: l.AvatarSizes.SIZE_20
                              }),
                          id: 'interaction-user',
                          label: f.username,
                          showIconFirst: !0,
                          subtext: c.Z.Messages.INTERACTION_RESPONSE_CONTEXT_TRIGGERED_BY
                      })
                    : null
            ]
        })
    );
}
