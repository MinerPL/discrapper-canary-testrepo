n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(230711),
    l = n(367907),
    u = n(138201),
    c = n(187819),
    d = n(592125),
    f = n(155647),
    _ = n(185625),
    h = n(981631),
    p = n(388032),
    m = n(460676);
function g(e) {
    let { title: t, description: n, onButtonClick: a, trackSettingsUpsellsAction: s } = e,
        [o, l] = i.useState(!1);
    return (
        i.useEffect(() => {
            s(_.M4.SETTINGS_UPSELLS_VIEWED);
        }, []),
        (0, r.jsx)(u.Z, {
            title: t,
            description: n,
            buttonText: o ? p.intl.string(p.t['h+WsPT']) : p.intl.string(p.t.A8t4NT),
            buttonDisabled: o,
            onButtonPress: () => {
                a(), l(!0), s(_.M4.SETTINGS_UPSELLS_APPLY_CLICKED);
            }
        })
    );
}
function E(e) {
    let { settingsUpsells: t, channelId: n, onModalClose: i, reportId: u, reportType: E, reportSubType: v } = e,
        I = (0, a.e7)([d.Z], () => d.Z.getChannel(n)),
        S = (0, f.jc)(t, null == I ? void 0 : I.type),
        T = (0, _.i_)(E, v, u),
        b = (0, c._p)({ location: 'settings-upsells-element' });
    return 0 === S.length
        ? null
        : (0, r.jsxs)('div', {
              className: m.container,
              children: [
                  (0, r.jsx)(s.Heading, {
                      variant: 'text-sm/semibold',
                      className: m.header,
                      children: p.intl.string(p.t['1yxTIC'])
                  }),
                  (0, r.jsx)('div', {
                      className: m.upsellsContainer,
                      children: S.map((e, n) => {
                          let { getTitle: i, getDescription: a, onApply: s } = e;
                          return (0, r.jsx)(
                              g,
                              {
                                  title: i(),
                                  description: a(),
                                  onButtonClick: s,
                                  trackSettingsUpsellsAction: T(t[n])
                              },
                              n
                          );
                      })
                  }),
                  (0, r.jsx)(s.Button, {
                      className: m.navLinkButton,
                      onClick: () => {
                          b ? o.Z.open(h.oAB.CONTENT_AND_SOCIAL) : o.Z.open(h.oAB.PRIVACY_AND_SAFETY),
                              i(),
                              l.ZP.trackWithMetadata(h.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: u,
                                  report_type: E.name,
                                  report_subtype: v,
                                  action: _.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED
                              });
                      },
                      look: s.Button.Looks.LINK,
                      color: s.Button.Colors.LINK,
                      size: s.Button.Sizes.NONE,
                      children: p.intl.string(p.t.olebGx)
                  })
              ]
          });
}
