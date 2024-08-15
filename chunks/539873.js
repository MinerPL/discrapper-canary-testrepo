n.d(t, {
  Z: function() {
return v;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(442837),
  l = n(481060),
  u = n(570140),
  c = n(100527),
  d = n(313201),
  _ = n(98278),
  E = n(311476),
  f = n(587446),
  h = n(996073),
  p = n(327943),
  m = n(997945),
  I = n(401460),
  T = n(441319),
  g = n(981631),
  S = n(526761),
  A = n(689938),
  N = n(435880);

function v(e) {
  let {
className: t,
disabled: a,
isEditor: v,
renderCTAButtons: O
  } = e, [R, C] = (0, o.Wu)([p.Z], () => [
p.Z.getCurrentDesktopIcon(),
p.Z.isUpsellPreview
  ]), {
enabled: y
  } = E.Z.getCurrentConfig({
location: 'UserSettingsAppearanceInAppIcon'
  }, {
autoTrackExposure: C,
disable: !C
  }), D = i.useRef(null);
  (0, h.Z)(D, S.h1.CUSTOM_APP_ICONS);
  let L = (0, d.Dt)(),
b = (0, l.useRadioGroup)({
  orientation: 'horizontal',
  labelledBy: L
}),
M = e => {
  if (y && !v && e !== m.aH.DEFAULT) {
    (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e('69052').then(n.bind(n, 184250));
      return t => (0, r.jsx)(e, {
        analyticsSource: c.Z.APP_ICON_SELECTOR,
        analyticsLocation: {
          section: g.jXE.SETTINGS_APPEARANCE_APP_ICON_PICKER,
          object: g.qAy.BUTTON_ICON
        },
        ...t
      });
    });
    return;
  }
  u.Z.dispatch({
    type: 'APP_ICON_UPDATED',
    id: e
  });
};
  return (0, r.jsx)('div', {
ref: D,
children: (0, r.jsx)('div', {
  ...b,
  className: N.__invalid_container,
  children: (0, r.jsxs)('div', {
    className: t,
    children: [
      (0, r.jsxs)('div', {
        className: N.header,
        children: [
          (0, r.jsxs)('div', {
            className: N.headings,
            children: [
              !v && (0, r.jsxs)('div', {
                className: N.title,
                children: [
                  (0, r.jsx)(l.Heading, {
                    variant: 'text-md/medium',
                    children: A.Z.Messages.APP_ICON_SETTINGS_TITLE
                  }),
                  !y && (0, r.jsx)(f.Z, {
                    className: N.premiumIcon
                  })
                ]
              }),
              y ? v ? null : (0, r.jsxs)('div', {
                className: N.description,
                children: [
                  (0, r.jsx)(l.NitroWheelIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: N.nitroWheel
                  }),
                  (0, r.jsx)(l.Heading, {
                    variant: 'text-sm/normal',
                    children: A.Z.Messages.PREMIUM_UPSELL_MAKE_DISCORD_YOURS.format({
                      onClick: () => {
                        (0, _.$)();
                      }
                    })
                  })
                ]
              }) : (0, r.jsx)(l.Heading, {
                variant: 'text-sm/normal',
                children: A.Z.Messages.APP_ICON_SETTINGS_DESCRIPTION
              })
            ]
          }),
          null == O ? void 0 : O()
        ]
      }),
      (0, r.jsx)('div', {
        className: s()(N.presets, {
          [N.presetsJustified]: y && v
        }),
        children: T.UZ.filter(e => {
          let {
            isHidden: t
          } = e;
          return !t;
        }).map((e, t) => (0, r.jsx)(I.Z, {
          icon: e,
          isSelected: R === e.id,
          onSelect: e => M(e),
          disabled: a,
          tabIndex: 0 !== t || a ? void 0 : 0,
          locked: y && !v && e.id !== m.aH.DEFAULT
        }, e.id))
      })
    ]
  })
})
  });
}