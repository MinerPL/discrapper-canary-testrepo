a.r(t), a.d(t, {
  default: function() {
return N;
  }
});
var n = a(735250);
a(470079);
var r = a(512722),
  s = a.n(r),
  i = a(990547),
  o = a(442837),
  l = a(481060),
  c = a(100527),
  d = a(213609),
  u = a(240657),
  m = a(809086),
  x = a(430824),
  _ = a(240864),
  h = a(942833),
  f = a(409110),
  j = a(226060),
  p = a(689938),
  g = a(765692);

function N(e) {
  var t, a;
  let {
transitionState: r,
guildProductListingId: N,
analyticsLocation: v,
guildId: I,
onClose: D
  } = e, b = (0, o.e7)([_.Z], () => _.Z.getGuildProduct(N));
  s()(null != b, 'guildProductListing cannot be null'), (0, d.Z)({
type: i.ImpressionTypes.MODAL,
name: i.ImpressionNames.GUILD_PRODUCT_LISTING_INFO_MODAL,
properties: {
  guild_product_listing_id: N,
  has_entitlement: !0 === b.has_entitlement,
  location: v
}
  });
  let C = null !== (t = (0, h.C)(b)) && void 0 !== t ? t : '',
O = (0, h.k)(b),
Z = (0, o.e7)([x.Z], () => x.Z.getGuild(I));
  return (0, n.jsxs)(l.ModalRoot, {
className: g.modal,
size: l.ModalSize.MEDIUM,
transitionState: r,
'aria-label': b.name,
children: [
  (0, n.jsxs)(l.ModalHeader, {
    separator: !1,
    children: [
      (0, n.jsx)(m.e, {
        height: 267,
        listing: b,
        className: g.headerImage,
        alt: ''
      }),
      (0, n.jsx)(l.ModalCloseButton, {
        className: g.closeButton,
        onClick: D,
        withCircleBackground: !0
      })
    ]
  }),
  (0, n.jsx)(l.ModalContent, {
    children: (0, n.jsxs)('div', {
      className: g.body,
      children: [
        (0, n.jsx)(l.Heading, {
          variant: 'heading-xl/medium',
          color: 'header-primary',
          children: b.name
        }),
        (0, n.jsx)(l.Spacer, {
          size: 4
        }),
        (0, n.jsx)(l.Text, {
          variant: 'text-sm/normal',
          color: 'header-secondary',
          children: p.Z.Messages.GUILD_PRODUCT_INFO_MODAL_PRODUCT_OFFER.format({
            productType: C,
            personName: null !== (a = null == Z ? void 0 : Z.name) && void 0 !== a ? a : ''
          })
        }),
        (0, n.jsx)(l.Spacer, {
          size: 16
        }),
        (0, n.jsx)(f.Z, {
          listing: b
        }),
        (0, n.jsx)(l.Spacer, {
          size: 16
        }),
        (0, n.jsx)('div', {
          className: g.seperator
        }),
        (0, n.jsx)(l.Spacer, {
          size: 16
        }),
        (0, n.jsx)(l.Heading, {
          variant: 'heading-lg/medium',
          color: 'header-primary',
          children: p.Z.Messages.GUILD_PRODUCT_INFO_MODAL_DETAIL_HEADER
        }),
        (0, n.jsx)(l.Spacer, {
          size: 12
        }),
        (0, n.jsx)(u.Z, {
          className: g.description,
          variant: 'text-md/normal',
          color: 'text-muted',
          text: b.description
        })
      ]
    })
  }),
  (0, n.jsxs)(l.ModalFooter, {
    className: g.footer,
    children: [
      (0, n.jsx)(j.Z, {
        guildId: I,
        guildProductListingId: N,
        sourceAnalyticsLocations: c.Z.GUILD_PRODUCT_INFO_MODAL
      }),
      (0, n.jsx)(l.Text, {
        tag: 'div',
        variant: 'heading-xl/semibold',
        color: 'header-primary',
        children: O
      })
    ]
  })
]
  });
}