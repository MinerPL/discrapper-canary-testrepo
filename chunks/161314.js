n.d(t, {
  Z: function() {
return R;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(990547),
  o = n(831209),
  c = n(442837),
  d = n(481060),
  u = n(367907),
  _ = n(213609),
  E = n(267101),
  I = n(336197),
  m = n(661824),
  T = n(430824),
  h = n(346656),
  N = n(626135),
  f = n(76535),
  p = n(866104),
  C = n(886176),
  g = n(981631),
  S = n(689938),
  A = n(638948);

function R(e) {
  var t;
  let {
guildId: n
  } = e, s = (0, c.e7)([T.Z], () => T.Z.getGuild(n)), {
loading: R,
subscriptionsSettings: x
  } = (0, f.H)(n), {
listingsLoaded: O
  } = (0, E.eD)(n), M = (0, E.ue)(n, {
publishedOnly: !0
  }), v = a.useCallback(async () => {
N.default.track(g.rMx.GUILD_SHOP_EMBED_CLICKED, {
  ...(0, u.hH)(n)
}), await (0, I.Z)(g.Z5c.SERVER_SHOP(n));
  }, [n]);
  (0, _.Z)({
type: l.ImpressionTypes.VIEW,
name: l.ImpressionNames.GUILD_SHOP_EMBED
  }, {
disableTrack: null == s
  });
  let L = M.length > 0 ? new Date(Math.min(...M.map(e => Date.parse(e.published_at)))) : void 0;
  return R || !O ? (0, i.jsx)('div', {
className: r()(A.guildShopEmbed, A.spinnerContainer),
children: (0, i.jsx)(d.Spinner, {})
  }) : null == s || null == x ? null : (0, i.jsxs)('div', {
className: A.guildShopEmbed,
children: [
  (0, i.jsx)(p.Z, {
    coverImageAsset: null !== (t = x.cover_image_asset) && void 0 !== t ? t : null
  }),
  (0, i.jsx)(d.Spacer, {
    size: 16
  }),
  (0, i.jsxs)('div', {
    className: A.serverShopLabel,
    children: [
      (0, i.jsx)(C.Z, {
        height: '16px',
        width: '16px',
        color: o.Z.INTERACTIVE_NORMAL
      }),
      (0, i.jsx)(d.Heading, {
        variant: 'heading-sm/semibold',
        color: 'interactive-normal',
        className: A.serverShopLabelText,
        children: S.Z.Messages.GUILD_SHOP_CHANNEL_LABEL
      })
    ]
  }),
  (0, i.jsx)(d.Spacer, {
    size: 16
  }),
  (0, i.jsx)(d.Heading, {
    variant: 'heading-md/semibold',
    color: 'text-normal',
    children: S.Z.Messages.GUILD_STORE_HERO_TITLE.format({
      guildName: s.name
    })
  }),
  (0, i.jsx)(d.Spacer, {
    size: 4
  }),
  (0, i.jsx)(d.Text, {
    variant: 'text-sm/normal',
    color: 'text-muted',
    lineClamp: 2,
    children: x.description
  }),
  (0, i.jsx)(d.Spacer, {
    size: 16
  }),
  (0, i.jsx)(m.Z, {}),
  (0, i.jsx)(d.Spacer, {
    size: 16
  }),
  (0, i.jsxs)('div', {
    className: A.guildShopEmbedFooter,
    children: [
      (0, i.jsx)(h.Z, {
        guild: s
      }),
      (0, i.jsxs)('ul', {
        className: A.guildShopSummary,
        children: [
          (0, i.jsx)('li', {
            children: (0, i.jsx)(d.Text, {
              variant: 'text-sm/normal',
              color: 'text-muted',
              children: S.Z.Messages.GUILD_SHOP_EMBED_LISTINGS_AVAILABLE.format({
                listingCount: M.length
              })
            })
          }),
          null != L && (0, i.jsx)('li', {
            children: (0, i.jsx)(d.Text, {
              variant: 'text-sm/normal',
              color: 'text-muted',
              children: S.Z.Messages.GUILD_SHOP_EMBED_SHOP_AGE.format({
                createdYear: L.getFullYear()
              })
            })
          })
        ]
      }),
      (0, i.jsx)(d.Button, {
        className: A.guildShopEmbedCta,
        onClick: v,
        children: (0, i.jsxs)('div', {
          className: A.guildShopEmbedCtaContent,
          children: [
            (0, i.jsx)(C.Z, {
              height: '18px',
              width: '18px'
            }),
            (0, i.jsx)(d.Text, {
              variant: 'text-sm/medium',
              color: 'always-white',
              children: S.Z.Messages.GUILD_SHOP_EMBED_CTA
            })
          ]
        })
      })
    ]
  })
]
  });
}