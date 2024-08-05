i.d(t, {
  Z: function() {
return N;
  }
}), i(47120);
var n = i(735250),
  a = i(470079),
  r = i(120356),
  o = i.n(r),
  s = i(912370),
  l = i(477690),
  c = i(481060),
  d = i(453499),
  u = i(626135),
  h = i(463571),
  _ = i(34674),
  p = i(132871),
  m = i(147890),
  g = i(409425),
  f = i(57716),
  C = i(981631),
  x = i(689938),
  I = i(557499);

function b(e) {
  let {
collectionTitle: t,
title: i,
description: a,
handleClick: r,
imageSrc: s,
ctaLabel: l,
ctaLink: d,
applicationId: u
  } = e, _ = '936929561302675456' === u, p = null == u ? (0, n.jsx)(c.Button, {
className: I.applicationCta,
onClick: r,
children: l
  }) : (0, n.jsx)(h.Z, {
href: C.Z5c.APPLICATION_DIRECTORY_PROFILE(u),
children: (0, n.jsx)(c.Button, {
  className: I.applicationCta,
  onClick: r,
  children: l
})
  });
  return (0, n.jsxs)('div', {
className: I.card,
children: [
  (0, n.jsx)('div', {
    className: I.textContainer,
    children: (0, n.jsxs)('div', {
      className: I.verticallyCenter,
      children: [
        (0, n.jsx)(c.Text, {
          className: I.collectionTitle,
          tag: 'span',
          color: 'header-secondary',
          variant: 'heading-deprecated-12/semibold',
          children: t
        }),
        (0, n.jsxs)(c.Heading, {
          className: I.applicationName,
          variant: 'heading-xxl/medium',
          children: [
            i,
            ' ',
            _ && (0, n.jsx)(g.Z, {})
          ]
        }),
        (0, n.jsx)(c.Text, {
          className: I.applicationDescription,
          variant: 'text-md/normal',
          lineClamp: 3,
          children: a
        }),
        null == d ? p : (0, n.jsx)(c.Anchor, {
          onClick: r,
          href: d,
          className: o()((0, c.getButtonStyle)({
            grow: !1
          }), I.applicationCta),
          children: l
        })
      ]
    })
  }),
  (0, n.jsx)('div', {
    className: I.imageContainer,
    children: (0, n.jsx)('img', {
      alt: i,
      className: I.image,
      src: s
    })
  })
]
  });
}

function N(e) {
  let {
collection: t,
collection: {
  id: i,
  title: r,
  application_directory_collection_items: c
}
  } = e, h = (0, f.Z)({
collection: t
  }), [g, N] = a.useState(), v = (0, p.useApplicationDirectoryHistory)(e => e.guildId);
  return a.useEffect(() => {
let e = null == h ? void 0 : h.current;
if (null == e)
  return;
let t = new ResizeObserver(() => {
  let t = document.body.offsetWidth < parseFloat(l.Z.COLLECTION_GALLERY_MEDIA_BREAKPOINT) ? parseFloat(l.Z.COLLECTION_GALLERY_COLUMN_CARD_HEIGHT) : parseFloat(l.Z.COLLECTION_GALLERY_ROW_CARD_HEIGHT);
  N(e.offsetWidth / t);
});
return t.observe(document.body), () => {
  t.disconnect();
};
  }, [h]), (0, n.jsx)('article', {
ref: h,
className: o()({
  [I.collectionBottomMargin]: c.length <= 1
}),
children: (0, n.jsx)(d.Z, {
  aspectRatio: g,
  themedPagination: !0,
  paginationClassName: I.paginationControls,
  paginationArrowClassName: I.paginationArrow,
  items: c,
  onChangeItem: (e, t, n) => {
    let {
      application: a
    } = e;
    null != a && u.default.track(C.rMx.APP_DIRECTORY_COLLECTION_SCROLLED, {
      collection_id: i,
      offset: n,
      results: [a.id],
      guild_id: v
    });
  },
  renderItem: e => {
    let {
      id: t,
      image_hash: a,
      application: o,
      type: l,
      description: c,
      title: d,
      call_to_action_label: h,
      call_to_action_url: p
    } = e;
    if (null == a)
      return;
    let g = (0, _.$_)({
      itemId: t,
      hash: a
    });
    if (l === s.C.APPLICATION && null != o) {
      var f, I;
      return (0, n.jsx)(b, {
        collectionTitle: r,
        title: o.name,
        description: null !== (I = null === (f = o.directory_entry) || void 0 === f ? void 0 : f.short_description) && void 0 !== I ? I : o.description,
        handleClick: () => {
          u.default.track(C.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
            collection_id: i,
            application_id: o.id,
            guild_id: v,
            shown_mutual_guilds_count: void 0
          }), (0, m.goToApplication)({
            applicationId: o.id
          });
        },
        imageSrc: g,
        ctaLabel: x.Z.Messages.APP_DIRECTORY_GALLERY_COLLECTION_VIEW_APP_CTA,
        applicationId: o.id
      });
    }
    if (l === s.C.LINK && null != d && null != p && null != h)
      return (0, n.jsx)(b, {
        collectionTitle: r,
        title: d,
        description: c,
        handleClick: () => {
          u.default.track(C.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
            collection_id: i,
            link: p,
            guild_id: v,
            shown_mutual_guilds_count: void 0
          });
        },
        imageSrc: g,
        ctaLabel: h,
        ctaLink: p
      });
  }
})
  });
}