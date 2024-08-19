n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(481060),
    o = n(230711),
    l = n(138201),
    u = n(592125),
    c = n(155647),
    d = n(185625),
    _ = n(981631),
    E = n(689938),
    f = n(229223);
function h(e) {
    let { title: t, description: n, onButtonClick: a, trackSettingsUpsellsAction: s } = e,
        [o, u] = i.useState(!1);
    return (
        i.useEffect(() => {
            s(d.M4.SETTINGS_UPSELLS_VIEWED);
        }, []),
        (0, r.jsx)(l.Z, {
            title: t,
            description: n,
            buttonText: o ? E.Z.Messages.IAR_UPSELLS_APPLIED_BUTTON : E.Z.Messages.IAR_UPSELLS_APPLY_BUTTON,
            buttonDisabled: o,
            onButtonPress: () => {
                a(), u(!0), s(d.M4.SETTINGS_UPSELLS_APPLY_CLICKED);
            }
        })
    );
}
function p(e) {
    let { settingsUpsells: t, channelId: n, onModalClose: i, reportId: l, reportType: p, reportSubType: m } = e,
        I = (0, a.e7)([u.Z], () => u.Z.getChannel(n)),
        T = (0, c.jc)(t, null == I ? void 0 : I.type),
        g = (0, d.i_)(p, m, l);
    return 0 === T.length
        ? null
        : (0, r.jsxs)('div', {
              className: f.container,
              children: [
                  (0, r.jsx)(s.Heading, {
                      variant: 'heading-sm/semibold',
                      className: f.header,
                      children: E.Z.Messages.IAR_UPSELLS_SECTION_TITLE
                  }),
                  (0, r.jsx)('div', {
                      className: f.upsellsContainer,
                      children: T.map((e, n) => {
                          let { getTitle: i, getDescription: a, onApply: s } = e;
                          return (0, r.jsx)(
                              h,
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
                  (0, r.jsx)('div', {
                      className: f.navLinkContainer,
                      children: (0, r.jsx)(s.Button, {
                          onClick: () => {
                              o.Z.open(_.oAB.PRIVACY_AND_SAFETY), i();
                          },
                          look: s.Button.Looks.LINK,
                          color: s.Button.Colors.PRIMARY,
                          children: E.Z.Messages.IAR_UPSELLS_GO_TO_SAFETY_SETTINGS
                      })
                  })
              ]
          });
}
