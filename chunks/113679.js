n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120);
var s = n(735250),
    a = n(470079),
    i = n(399606),
    r = n(481060),
    l = n(279542),
    o = n(496675),
    c = n(140031),
    d = n(981631),
    u = n(689938),
    _ = n(416486);
function I(e) {
    let { guild: t } = e,
        n = a.useId(),
        I = (0, i.e7)([o.Z], () => null != t && o.Z.can(d.Plq.MANAGE_GUILD, t), [t]),
        E = t.hasFeature(d.oNc.COMMUNITY),
        [T, m] = a.useState(t.hasFeature(d.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        N = a.useCallback(
            async (e) => {
                m(e), await (0, l.fp)(t, e);
            },
            [t]
        );
    return E
        ? null
        : (0, s.jsxs)('div', {
              className: _.bannerContainer,
              children: [
                  (0, s.jsx)(c.Z, {
                      width: 64,
                      height: 64
                  }),
                  (0, s.jsxs)('div', {
                      className: _.headingContainer,
                      children: [
                          (0, s.jsx)(r.Heading, {
                              variant: 'heading-lg/semibold',
                              children: u.Z.Messages.GUILD_SETTINGS_SAFETY_ENABLE_MODERATION_EXPERIENCE
                          }),
                          (0, s.jsx)(r.Text, {
                              variant: 'text-sm/medium',
                              children: u.Z.Messages.GUILD_SETTINGS_SAFETY_ENABLE_MODERATION_EXPERIENCE_DESCRIPTION
                          })
                      ]
                  }),
                  (0, s.jsx)('div', {
                      className: _.buttonContainer,
                      children: (0, s.jsx)(r.Switch, {
                          id: n,
                          checked: T,
                          onChange: N,
                          disabled: !I
                      })
                  })
              ]
          });
}
