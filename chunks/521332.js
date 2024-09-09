n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(481060),
    o = n(230711),
    l = n(367907),
    u = n(138201),
    c = n(592125),
    d = n(155647),
    _ = n(185625),
    E = n(981631),
    f = n(689938),
    h = n(229223);
function p(e) {
    let { title: t, description: n, onButtonClick: a, trackSettingsUpsellsAction: s } = e,
        [o, l] = i.useState(!1);
    return (
        i.useEffect(() => {
            s(_.M4.SETTINGS_UPSELLS_VIEWED);
        }, []),
        (0, r.jsx)(u.Z, {
            title: t,
            description: n,
            buttonText: o ? f.Z.Messages.IAR_UPSELLS_APPLIED_BUTTON : f.Z.Messages.IAR_UPSELLS_APPLY_BUTTON,
            buttonDisabled: o,
            onButtonPress: () => {
                a(), l(!0), s(_.M4.SETTINGS_UPSELLS_APPLY_CLICKED);
            }
        })
    );
}
function I(e) {
    let { settingsUpsells: t, channelId: n, onModalClose: i, reportId: u, reportType: I, reportSubType: m } = e,
        T = (0, a.e7)([c.Z], () => c.Z.getChannel(n)),
        S = (0, d.jc)(t, null == T ? void 0 : T.type),
        g = (0, _.i_)(I, m, u);
    return 0 === S.length
        ? null
        : (0, r.jsxs)('div', {
              className: h.container,
              children: [
                  (0, r.jsx)(s.Heading, {
                      variant: 'text-sm/semibold',
                      className: h.header,
                      children: f.Z.Messages.IAR_UPSELLS_SECTION_TITLE
                  }),
                  (0, r.jsx)('div', {
                      className: h.upsellsContainer,
                      children: S.map((e, n) => {
                          let { getTitle: i, getDescription: a, onApply: s } = e;
                          return (0, r.jsx)(
                              p,
                              {
                                  title: i(),
                                  description: a(),
                                  onButtonClick: s,
                                  trackSettingsUpsellsAction: g(t[n])
                              },
                              n
                          );
                      })
                  }),
                  (0, r.jsx)(s.Button, {
                      className: h.navLinkButton,
                      onClick: () => {
                          o.Z.open(E.oAB.PRIVACY_AND_SAFETY),
                              i(),
                              l.ZP.trackWithMetadata(E.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
                                  report_id: u,
                                  report_type: I.name,
                                  report_subtype: m,
                                  action: _.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED
                              });
                      },
                      look: s.Button.Looks.LINK,
                      color: s.Button.Colors.LINK,
                      size: s.Button.Sizes.NONE,
                      children: f.Z.Messages.IAR_UPSELLS_GO_TO_SAFETY_SETTINGS
                  })
              ]
          });
}
