a(47120);
var t = a(735250),
  n = a(470079),
  l = a(120356),
  i = a.n(l),
  r = a(658722),
  o = a.n(r),
  c = a(481060),
  d = a(231239),
  N = a(881052),
  u = a(565138),
  _ = a(601964),
  m = a(806519),
  E = a(768581),
  I = a(888592),
  x = a(689938),
  h = a(8162),
  C = a(216019);

function T(e) {
  var s;
  let {
guildInfo: a,
onClick: n,
submitting: l
  } = e, i = null !== (s = E.ZP.getGuildIconURL({
id: a.id,
icon: a.icon,
size: 40
  })) && void 0 !== s ? s : void 0;
  return (0, t.jsxs)(c.Clickable, {
className: h.clickableGuildInfoRow,
onClick: n,
children: [
  (0, t.jsx)(m.ZP, {
    mask: m.ZP.Masks.AVATAR_DEFAULT,
    width: 40,
    height: 40,
    children: (0, t.jsx)(u.Z, {
      className: h.guildIcon,
      iconSrc: i,
      guild: new _.ZP(a),
      size: u.Z.Sizes.MEDIUM
    })
  }),
  (0, t.jsx)(c.Text, {
    className: h.guildName,
    variant: 'text-md/semibold',
    children: a.name
  }),
  l ? (0, t.jsx)(c.Spinner, {
    type: c.Spinner.Type.PULSING_ELLIPSIS
  }) : (0, t.jsx)('img', {
    className: h.__invalid_arrow,
    alt: '',
    src: C
  })
]
  });
}
s.Z = e => {
  let {
setStep: s,
email: a,
guildsInfo: l,
setGuildId: r,
forceGuildScrollHeight: u
  } = e, [_, m] = n.useState(null), [E, C] = n.useState(void 0), [g, O] = n.useState(null), v = e => async () => {
m(null), r(e), O(e);
try {
  await d.Z.sendVerificationEmail(a, !0, e), s(I.tF.VERIFY_PIN);
} catch (e) {
  m(new N.Hx(e));
} finally {
  O(null);
}
  }, L = () => s(I.tF.SUBMIT_SCHOOL), S = l;
  return null != E && '' !== E && (S = l.filter(e => o()(E.toLowerCase(), e.name.toLowerCase()))), (0, t.jsxs)('div', {
className: h.container,
children: [
  (0, t.jsx)(c.Heading, {
    className: i()(h.centerText, h.header),
    variant: 'heading-xl/semibold',
    children: x.Z.Messages.HUB_EMAIL_CONNECTION_GUILD_SELECT_HEADER
  }),
  (0, t.jsx)('div', {
    className: h.description,
    children: (0, t.jsx)(c.Text, {
      className: h.centerText,
      variant: 'text-sm/normal',
      color: 'header-secondary',
      children: x.Z.Messages.HUB_EMAIL_CONNECTION_GUILD_SELECT_SUBHEADER.format({
        onJoinWaitlist: L
      })
    })
  }),
  (0, t.jsxs)('div', {
    className: i()(h.guildList, {
      [h.forcedHeight]: u
    }),
    children: [
      (0, t.jsxs)('div', {
        className: h.searchContainer,
        children: [
          (0, t.jsx)(c.SearchBox, {
            placeholder: x.Z.Messages.SEARCH,
            className: h.searchBox,
            inputClassName: h.searchBoxInput,
            searchIconClassName: h.searchBoxIcon,
            closeIconClassName: h.searchBoxIcon,
            onChange: e => {
              C(e);
            },
            label: x.Z.Messages.SEARCH,
            searchTerm: E,
            onClear: () => {
              C(void 0);
            }
          }),
          (0, t.jsx)(c.Text, {
            color: 'text-danger',
            variant: 'text-xs/normal',
            children: null == _ ? void 0 : _.getAnyErrorMessage()
          })
        ]
      }),
      S.length > 0 ? (0, t.jsx)(c.ScrollerThin, {
        className: h.scroller,
        children: S.map(e => void 0 === e ? null : (0, t.jsx)(T, {
          guildInfo: e,
          onClick: v(e.id),
          submitting: g === e.id
        }, e.id))
      }) : (0, t.jsx)('div', {
        className: h.noResultsContainer,
        children: (0, t.jsxs)('div', {
          className: h.noResultsContent,
          children: [
            (0, t.jsx)('div', {
              className: h.noResultsImage
            }),
            (0, t.jsx)(c.Heading, {
              className: i()(h.centerText, h.header),
              variant: 'heading-xl/semibold',
              children: x.Z.Messages.HUB_EMAIL_CONNECTION_GUILD_SELECT_NO_RESULTS_HEADER
            }),
            (0, t.jsx)(c.Text, {
              className: h.centerText,
              variant: 'text-md/normal',
              children: x.Z.Messages.HUB_EMAIL_CONNECTION_GUILD_SELECT_NO_RESULTS_SUBHEADER.format({
                onJoinWaitlist: L
              })
            })
          ]
        })
      })
    ]
  })
]
  });
};