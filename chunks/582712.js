a.r(t), a.d(t, {
  default: function() {
return g;
  }
}), a(47120);
var n = a(735250),
  s = a(470079),
  l = a(286379),
  i = a(442837),
  r = a(481060),
  o = a(565138),
  u = a(797614),
  _ = a(769654),
  d = a(695346),
  S = a(430824),
  T = a(88658),
  c = a(401416),
  N = a(920133),
  E = a(689938),
  I = a(30343),
  f = a(444812);

function g(e) {
  let {
transitionState: t,
guildId: g,
onClose: m
  } = e, M = (0, i.e7)([S.Z], () => S.Z.getGuild(g));
  return (s.useEffect(() => {
(0, c.Y)(g), (0, N.L)(N.Q.MODAL_VIEWED, g), u.Z.increment({
  name: l.V.DM_SETTINGS_UPSELL_VIEW
});
  }, [g]), null == M) ? null : (0, n.jsx)(r.ModalRoot, {
transitionState: t,
className: I.modal,
children: (0, n.jsxs)('form', {
  onSubmit: e => {
    e.preventDefault();
    let t = new Set((0, T.YK)());
    t.add(g), d.h2.updateSetting(Array.from(t)).then(() => (0, r.showToast)((0, r.createToast)(E.Z.Messages.DM_SETTINGS_UPSELL_SUCCESS_TOAST, r.ToastType.SUCCESS))), m(), (0, N.L)(N.Q.MODAL_DISABLED_DMS, g);
  },
  children: [
    (0, n.jsx)('img', {
      alt: '',
      className: I.headerImage,
      src: f
    }),
    (0, n.jsxs)(r.ModalHeader, {
      separator: !1,
      className: I.header,
      children: [
        (0, n.jsx)(r.Heading, {
          variant: 'heading-lg/bold',
          className: I.title,
          children: E.Z.Messages.DM_SETTINGS_UPSELL_TITLE
        }),
        (0, n.jsx)(r.Text, {
          variant: 'text-md/normal',
          color: 'header-secondary',
          className: I.body,
          children: E.Z.Messages.DM_SETTINGS_UPSELL_BODY.format({
            guild_name: M.name
          })
        })
      ]
    }),
    (0, n.jsxs)(r.ModalContent, {
      children: [
        (0, n.jsx)(r.Text, {
          variant: 'eyebrow',
          color: 'header-secondary',
          className: I.subtitle,
          children: E.Z.Messages.DM_SETTINGS_UPSELL_SUBTITLE
        }),
        (0, n.jsx)('div', {
          className: I.guildContainer,
          children: (0, n.jsxs)('div', {
            className: I.guildInfo,
            children: [
              (0, n.jsx)(o.Z, {
                guild: M,
                size: o.Z.Sizes.SMALL
              }),
              (0, n.jsx)(r.Text, {
                className: I.guildName,
                variant: 'text-md/semibold',
                children: M.name
              })
            ]
          })
        }),
        (0, n.jsxs)('div', {
          className: I.content,
          children: [
            (0, n.jsx)(r.Button, {
              className: I.button,
              type: 'submit',
              color: r.Button.Colors.BRAND,
              size: r.Button.Sizes.MEDIUM,
              children: E.Z.Messages.DM_SETTINGS_UPSELL_YES_BUTTON
            }),
            (0, n.jsx)(r.Button, {
              className: I.button,
              color: r.Button.Colors.PRIMARY,
              onClick: () => {
                m(), (0, N.L)(N.Q.MODAL_DISMISSED, g);
              },
              children: E.Z.Messages.DM_SETTINGS_UPSELL_NO_BUTTON
            }),
            (0, n.jsx)(r.Text, {
              variant: 'text-xs/normal',
              color: 'header-secondary',
              className: I.footer,
              children: E.Z.Messages.DM_SETTINGS_UPSELL_FOOTER.format({
                onClick: () => {
                  m(), (0, _.X)(g), (0, r.openModalLazy)(async () => {
                    let {
                      default: e
                    } = await Promise.all([
                      a.e('96427'),
                      a.e('77298'),
                      a.e('23357'),
                      a.e('23755'),
                      a.e('89350'),
                      a.e('81039'),
                      a.e('39709'),
                      a.e('52249'),
                      a.e('29549'),
                      a.e('54803'),
                      a.e('15685'),
                      a.e('47006'),
                      a.e('32776'),
                      a.e('94915'),
                      a.e('33053'),
                      a.e('6380'),
                      a.e('8016'),
                      a.e('18543'),
                      a.e('31605'),
                      a.e('37581'),
                      a.e('76540'),
                      a.e('72181'),
                      a.e('30671'),
                      a.e('68136'),
                      a.e('65840'),
                      a.e('77172'),
                      a.e('95393'),
                      a.e('18101'),
                      a.e('7701'),
                      a.e('87624'),
                      a.e('86975'),
                      a.e('90508'),
                      a.e('46097'),
                      a.e('22646'),
                      a.e('8739'),
                      a.e('58059'),
                      a.e('22173'),
                      a.e('5528'),
                      a.e('18146'),
                      a.e('43331'),
                      a.e('30243'),
                      a.e('30419'),
                      a.e('18824'),
                      a.e('37229'),
                      a.e('99008'),
                      a.e('52619'),
                      a.e('59743'),
                      a.e('26138'),
                      a.e('22290'),
                      a.e('62867'),
                      a.e('79960'),
                      a.e('54535'),
                      a.e('89452'),
                      a.e('5562'),
                      a.e('54807'),
                      a.e('66809')
                    ]).then(a.bind(a, 241420));
                    return t => (0, n.jsx)(e, {
                      ...t,
                      guild: M
                    });
                  }), (0, N.L)(N.Q.MODAL_GUILD_SETTINGS_CLICKED, g);
                }
              })
            })
          ]
        })
      ]
    })
  ]
})
  });
}