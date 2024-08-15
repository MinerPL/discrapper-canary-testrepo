n.r(t), n.d(t, {
  default: function() {
return j;
  }
});
var a = n(735250);
n(470079);
var r = n(512722),
  i = n.n(r),
  o = n(468194),
  s = n(442837),
  l = n(477690),
  c = n(481060),
  d = n(809086),
  u = n(430824),
  m = n(240864),
  f = n(598952),
  x = n(596211),
  _ = n(689938),
  g = n(733648);
let h = (0, o.Mg)(l.Z.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH);

function v(e) {
  let {
guildProductListing: t,
guildId: n,
onClose: r
  } = e, i = (0, s.e7)([u.Z], () => {
var e;
return null === (e = u.Z.getGuild(n)) || void 0 === e ? void 0 : e.name;
  });
  return (0, a.jsxs)(c.ModalHeader, {
className: g.header,
children: [
  (0, a.jsx)(d.Z, {
    className: g.headerImage,
    listing: t,
    imageSize: h,
    alt: ''
  }),
  (0, a.jsx)(c.Spacer, {
    size: 16,
    horizontal: !0
  }),
  (0, a.jsxs)('div', {
    className: g.headerTextColumn,
    children: [
      (0, a.jsx)(c.Heading, {
        variant: 'text-md/semibold',
        color: 'header-primary',
        children: t.name
      }),
      (0, a.jsx)(c.Spacer, {
        size: 8
      }),
      (0, a.jsx)(c.Text, {
        variant: 'text-sm/normal',
        color: 'text-muted',
        className: g.__invalid_description,
        children: i
      }),
      (0, a.jsx)(c.Text, {
        variant: 'text-sm/normal',
        color: 'text-muted',
        className: g.__invalid_description,
        children: _.Z.Messages.GUILD_PRODUCT_DOWNLOADS_COUNT.format({
          count: t.attachments_count
        })
      })
    ]
  }),
  (0, a.jsx)(c.ModalCloseButton, {
    className: g.closeButton,
    onClick: r
  })
]
  });
}

function b(e) {
  let {
attachment: t,
guildId: n,
productId: r
  } = e;
  return (0, a.jsxs)('li', {
className: g.attachmentRow,
children: [
  (0, a.jsx)(f.Z, {
    attachment: t
  }),
  (0, a.jsx)(x.Z, {
    className: g.attachmentDownloadButton,
    guildId: n,
    productId: r,
    attachmentId: t.id,
    children: (0, a.jsx)(c.DownloadIcon, {
      size: 'md',
      color: 'currentColor'
    })
  })
]
  });
}

function j(e) {
  var t;
  let {
guildId: n,
productId: r,
onClose: o,
transitionState: l
  } = e, d = (0, s.e7)([m.Z], () => m.Z.getGuildProduct(r));
  i()(null != d, 'guildProductListing cannot be null');
  let u = null !== (t = d.attachments) && void 0 !== t ? t : [];
  return (0, a.jsxs)(c.ModalRoot, {
className: g.modal,
size: c.ModalSize.MEDIUM,
transitionState: l,
'aria-label': _.Z.Messages.GUILD_PRODUCT_DOWNLOAD_MODAL_ARIA_LABEL,
children: [
  (0, a.jsx)(v, {
    guildId: n,
    guildProductListing: d,
    onClose: o
  }),
  (0, a.jsx)(c.ModalContent, {
    children: (0, a.jsx)('ul', {
      className: g.__invalid_attachmentsList,
      children: u.map(e => (0, a.jsx)(b, {
        guildId: n,
        productId: d.id,
        attachment: e
      }, e.id))
    })
  })
]
  });
}