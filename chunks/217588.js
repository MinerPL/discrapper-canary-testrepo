n(724458), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(442837),
  o = n(481060),
  c = n(749210),
  d = n(367907),
  u = n(400106),
  _ = n(697568),
  E = n(183023),
  I = n(524444),
  m = n(98278),
  T = n(197115),
  h = n(430824),
  N = n(594174),
  f = n(285952),
  p = n(514342),
  C = n(626135),
  g = n(74538),
  S = n(453070),
  A = n(926491),
  R = n(378233),
  x = n(419922),
  O = n(688179),
  M = n(981631),
  v = n(474936),
  L = n(689938),
  Z = n(379157),
  P = n(830645);
let b = (e, t) => t ? L.Z.Messages.STICKER_POPOUT_PACK_INFO_PREMIUM.format({
stickerPackName: e.name
  }) : L.Z.Messages.STICKER_POPOUT_PACK_INFO_UNAVAILABLE.format({
stickerPackName: e.name
  }),
  D = e => {
let {
  sticker: t,
  stickerPack: n
} = e;
return a.useMemo(() => null == n ? [] : n.stickers.slice(0, 4).reduce((e, n) => 3 !== e.length && n.id !== t.id ? e.concat(n) : e, []), [
  t,
  n
]);
  };

function j(e) {
  C.default.track(M.rMx.PREMIUM_PROMOTION_OPENED, {
location_page: null != e.guild_id ? M.ZY5.GUILD_CHANNEL : M.ZY5.DM_CHANNEL,
location_section: M.jXE.STICKER_POPOUT
  }), (0, m.z)();
}

function U(e) {
  let {
sticker: t,
description: n
  } = e;
  return (0, i.jsxs)(f.Z, {
children: [
  (0, i.jsx)(x.ZP, {
    sticker: t,
    size: 48,
    isInteracting: !0
  }),
  (0, i.jsxs)(f.Z, {
    direction: f.Z.Direction.VERTICAL,
    justify: f.Z.Justify.CENTER,
    className: P.truncatingText,
    children: [
      (0, i.jsx)(o.Text, {
        className: P.__invalid_emojiName,
        variant: 'text-md/semibold',
        children: (0, i.jsx)(p.Z, {
          children: t.name
        })
      }),
      null != n && (0, i.jsx)(o.Text, {
        variant: 'text-sm/normal',
        children: n
      })
    ]
  })
]
  });
}
let y = e => {
let {
  closePopout: t,
  sticker: n,
  channel: s,
  refreshPositionKey: r
} = e, [c, u, _] = (0, l.Wu)([A.Z], () => [
  A.Z.getStickerPack(n.pack_id),
  !A.Z.hasLoadedStickerPacks,
  A.Z.isPremiumPack(n.pack_id)
], [n]), E = D({
  sticker: n,
  stickerPack: c
});
(0, S.Pq)(n.pack_id);
let m = (0, S.Sd)(s);
return (a.useEffect(() => {
  r();
}, [u]), a.useEffect(() => {
  C.default.track(M.rMx.OPEN_POPOUT, {
    type: M.jXE.STICKER_POPOUT,
    guild_id: s.getGuildId(),
    sticker_pack_id: n.pack_id,
    ...(0, d.v_)(s)
  });
}, [n.pack_id]), u || null == c) ? (0, i.jsx)(I.SE, {
  className: Z.popoutLoader
}) : (0, i.jsxs)(I.W_, {
  className: Z.popoutContent,
  children: [
    (0, i.jsx)(o.Heading, {
      variant: 'heading-md/semibold',
      children: n.name
    }),
    (0, i.jsx)(o.Text, {
      variant: 'text-sm/normal',
      children: b(c, _)
    }),
    (0, i.jsx)('ul', {
      className: Z.stickersList,
      children: E.map(e => (0, i.jsx)(x.ZP, {
        isInteracting: !0,
        size: 80,
        sticker: e
      }, e.id))
    }),
    _ && (0, i.jsx)('div', {
      className: Z.packActions,
      children: (0, i.jsx)(o.Button, {
        color: o.Button.Colors.PRIMARY,
        size: o.Button.Sizes.SMALL,
        onClick: () => {
          _ && (0, O.m)({
            stickerPack: c,
            stickerPickerCategories: m
          }), t();
        },
        children: L.Z.Messages.STICKER_VIEW_MORE_STICKERS
      }, 'view-sticker-pack')
    })
  ]
});
  },
  B = e => {
let t, {
    sticker: n,
    channel: s,
    closePopout: m,
    refreshPositionKey: p
  } = e,
  [S, A] = a.useState(null),
  [R, O] = a.useState(!1),
  b = N.default.getCurrentUser(),
  D = g.ZP.canUseCustomStickersEverywhere(b),
  y = (0, l.e7)([h.Z], () => h.Z.getGuild(n.guild_id)),
  B = null != y,
  [k, G] = a.useState(!1),
  [F, w] = a.useState(null),
  V = a.useMemo(() => ({
    page: null != s.guild_id ? M.ZY5.GUILD_CHANNEL : M.ZY5.DM_CHANNEL,
    section: M.jXE.STICKER_POPOUT
  }), [s.guild_id]),
  {
    current: H
  } = a.useRef({
    guild_id: s.getGuildId(),
    ...(0, d.v_)(s)
  });
a.useEffect(() => {
  (async () => {
    (null == y || y.hasFeature(M.oNc.DISCOVERABLE)) && A(await (0, _.Z)(n.id)), O(!0);
  })();
}, [
  n.id,
  B
]);
let Y = n.guild_id === s.getGuildId(),
  W = null != S,
  z = !1,
  K = 'Custom Sticker Popout';
D ? t = B ? Y ? L.Z.Messages.STICKER_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION : L.Z.Messages.STICKER_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION : W ? L.Z.Messages.STICKER_POPOUT_PREMIUM_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : L.Z.Messages.STICKER_POPOUT_PREMIUM_UNJOINED_PRIVATE_GUILD_DESCRIPTION : B ? (Y ? t = L.Z.Messages.STICKER_POPOUT_CURRENT_GUILD_DESCRIPTION : t = L.Z.Messages.STICKER_POPOUT_JOINED_GUILD_DESCRIPTION, z = !0, K = 'Custom Sticker Popout (Upsell)') : W ? (t = L.Z.Messages.STICKER_POPOUT_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION, z = !0, K = 'Custom Sticker Popout (Upsell)') : (t = L.Z.Messages.STICKER_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
  openPremiumSettings: () => {
    j(s), m();
  }
}), K = 'Custom Sticker Popout (Soft Upsell)');
let Q = !z && !B && W && D;
return (a.useEffect(() => {
  p();
}, [
  R,
  S
]), a.useEffect(() => {
  C.default.track(M.rMx.OPEN_POPOUT, {
    type: K,
    ...H
  });
}, []), R) ? (0, i.jsxs)(I.W_, {
  className: P.popoutContent,
  children: [
    (() => {
      let e = async () => {
        if (null == S || B)
          return;
        m();
        let e = S.id;
        try {
          await c.Z.joinGuild(e), c.Z.transitionToGuildSync(e);
        } catch {}
      };
      return (0, i.jsxs)('div', {
        className: P.emojiSection,
        children: [
          (0, i.jsx)(U, {
            description: t,
            sticker: n
          }),
          z && (0, i.jsx)(T.Z, {
            className: P.ctaButton,
            subscriptionTier: v.Si.TIER_2,
            size: o.Button.Sizes.SMALL,
            fullWidth: !0,
            buttonText: L.Z.Messages.EMOJI_POPOUT_PREMIUM_CTA,
            onSubscribeModalClose: t => t ? e() : m(),
            postSuccessGuild: B || null == S ? void 0 : S,
            premiumModalAnalyticsLocation: V
          }),
          Q && (0, i.jsx)(o.Button, {
            size: o.Button.Sizes.SMALL,
            className: P.ctaButton,
            fullWidth: !0,
            onClick: e,
            children: L.Z.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
          })
        ]
      });
    })(),
    (null != y || null != S) && (() => {
      var e;
      if (!W && !B)
        return;
      let t = (null !== (e = null == S ? void 0 : S.stickers) && void 0 !== e ? e : []).slice(0, 13).filter(e => e.id !== n.id).slice(0, 12),
        a = null != S ? u.Z.createFromDiscoverableGuild(S) : u.Z.createFromGuildRecord(y);
      return (0, i.jsxs)('div', {
        className: P.guildSection,
        children: [
          (0, i.jsx)(o.FormTitle, {
            className: P.guildTitle,
            children: B ? L.Z.Messages.STICKER_POPOUT_JOINED_GUILD_EMOJI_DESCRIPTION : L.Z.Messages.STICKER_POPOUT_UNJOINED_GUILD_EMOJI_DESCRIPTION
          }),
          (0, i.jsx)(E.Oe, {
            expressionSourceGuild: a,
            hasJoinedExpressionSourceGuild: B,
            isDisplayingJoinGuildButtonInPopout: Q
          }),
          !B && (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(o.Clickable, {
                onClick: () => {
                  p(), G(!k);
                },
                className: P.showMoreEmojis,
                children: (0, i.jsxs)(f.Z, {
                  children: [
                    (0, i.jsx)(o.Text, {
                      className: P.__invalid_showMoreEmojisLabel,
                      variant: 'text-xs/normal',
                      color: 'none',
                      children: L.Z.Messages.STICKER_POPOUT_SHOW_MORE_STICKERS
                    }),
                    (0, i.jsx)(o.ChevronSmallDownIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: r()(P.showMoreEmojisArrow, {
                        [P.showMoreEmojisArrowCollapsed]: !k
                      })
                    })
                  ]
                })
              }),
              k && (0, i.jsx)(f.Z, {
                wrap: f.Z.Wrap.WRAP,
                align: f.Z.Align.START,
                justify: f.Z.Justify.START,
                className: P.otherEmojisContainer,
                children: t.map(e => (0, i.jsx)(o.Tooltip, {
                  text: e.name,
                  ...I.b_,
                  children: t => {
                    let {
                      onMouseEnter: n,
                      onMouseLeave: a,
                      ...s
                    } = t;
                    return (0, i.jsx)('div', {
                      className: r()(P.otherEmoji, {
                        [Z.nonInteractingSticker]: null != F && F !== e.id
                      }),
                      onMouseEnter: () => {
                        null == n || n(), w(e.id);
                      },
                      onMouseLeave: () => {
                        null == a || a(), w(null);
                      },
                      ...s,
                      children: (0, i.jsx)(x.ZP, {
                        size: 32,
                        enlargeOnInteraction: !0,
                        enlargeWithName: !1,
                        enlargeScaleFactor: 2,
                        isInteracting: F === e.id,
                        sticker: e
                      })
                    }, e.id);
                  }
                }, e.id))
              })
            ]
          })
        ]
      });
    })()
  ]
}) : (0, i.jsx)(I.SE, {
  className: Z.popoutLoader
});
  };

function k(e) {
  let {
channel: t,
closePopout: n,
sticker: a
  } = e;
  return (0, i.jsx)(I.W_, {
className: Z.popoutContent,
children: (0, i.jsx)(U, {
  sticker: a,
  description: L.Z.Messages.STICKER_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
    openPremiumSettings: () => {
      n(), j(t);
    }
  })
})
  });
}
t.Z = e => {
  let {
renderableSticker: t,
channel: n,
closePopout: a,
refreshPositionKey: s
  } = e, [r, l] = (0, S.XW)(t, !0);
  if (null != r && (0, R.jl)(r))
return (0, i.jsx)(y, {
  sticker: r,
  closePopout: a,
  channel: n,
  refreshPositionKey: s
});
  if (null != r && (0, R.J8)(r))
return (0, i.jsx)(B, {
  sticker: r,
  channel: n,
  closePopout: a,
  refreshPositionKey: s
});
  if (!l)
return (0, i.jsx)(I.SE, {});
  else if (l && null == r)
return (0, i.jsx)(k, {
  channel: n,
  closePopout: a,
  sticker: t
});
  return a(), null;
};