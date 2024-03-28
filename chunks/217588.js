"use strict";
n.r(t), n("724458"), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("442837"),
  o = n("481060"),
  u = n("749210"),
  d = n("367907"),
  c = n("400106"),
  f = n("697568"),
  E = n("183023"),
  _ = n("524444"),
  T = n("98278"),
  m = n("857185"),
  I = n("911200"),
  p = n("197115"),
  h = n("430824"),
  N = n("594174"),
  S = n("285952"),
  C = n("514342"),
  A = n("605403"),
  g = n("626135"),
  M = n("74538"),
  R = n("453070"),
  O = n("926491"),
  v = n("378233"),
  L = n("419922"),
  x = n("688179"),
  D = n("981631"),
  P = n("474936"),
  y = n("689938"),
  U = n("715777"),
  b = n("163237");
let j = (e, t) => t ? y.default.Messages.STICKER_POPOUT_PACK_INFO_PREMIUM.format({
    stickerPackName: e.name
  }) : y.default.Messages.STICKER_POPOUT_PACK_INFO_UNAVAILABLE.format({
    stickerPackName: e.name
  }),
  G = e => {
    let {
      sticker: t,
      stickerPack: n
    } = e;
    return a.useMemo(() => null == n ? [] : n.stickers.slice(0, 4).reduce((e, n) => 3 !== e.length && n.id !== t.id ? e.concat(n) : e, []), [t, n])
  };

function B(e) {
  g.default.track(D.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
    location_page: null != e.guild_id ? D.AnalyticsPages.GUILD_CHANNEL : D.AnalyticsPages.DM_CHANNEL,
    location_section: D.AnalyticsSections.STICKER_POPOUT
  }), (0, T.navigateToPremiumMarketingPage)()
}

function F(e) {
  let {
    sticker: t,
    description: n
  } = e;
  return (0, s.jsxs)(S.default, {
    children: [(0, s.jsx)(L.default, {
      sticker: t,
      size: 48,
      isInteracting: !0
    }), (0, s.jsxs)(S.default, {
      direction: S.default.Direction.VERTICAL,
      justify: S.default.Justify.CENTER,
      className: b.truncatingText,
      children: [(0, s.jsx)(o.Text, {
        className: b.__invalid_emojiName,
        variant: "text-md/semibold",
        children: (0, s.jsx)(C.default, {
          children: t.name
        })
      }), null != n && (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: n
      })]
    })]
  })
}
let k = e => {
    let {
      closePopout: t,
      sticker: n,
      channel: l,
      refreshPositionKey: i
    } = e, [u, c, f] = (0, r.useStateFromStoresArray)([O.default], () => [O.default.getStickerPack(n.pack_id), !O.default.hasLoadedStickerPacks, O.default.isPremiumPack(n.pack_id)], [n]), E = G({
      sticker: n,
      stickerPack: u
    });
    (0, R.useFetchStickerPack)(n.pack_id);
    let T = (0, R.useFilteredStickerPackCategories)(l);
    return ((0, m.useMaybeFetchPremiumLikelihood)(I.default), a.useEffect(() => {
      i()
    }, [c]), a.useEffect(() => {
      g.default.track(D.AnalyticEvents.OPEN_POPOUT, {
        type: D.AnalyticsSections.STICKER_POPOUT,
        guild_id: l.getGuildId(),
        sticker_pack_id: n.pack_id,
        ...(0, d.collectChannelAnalyticsMetadata)(l)
      })
    }, [n.pack_id]), c || null == u) ? (0, s.jsx)(_.PopoutLoadingAnimation, {
      className: U.popoutLoader
    }) : (0, s.jsxs)(_.MessagePopoutContent, {
      className: U.popoutContent,
      children: [(0, s.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        children: n.name
      }), (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: j(u, f)
      }), (0, s.jsx)("ul", {
        className: U.stickersList,
        children: E.map(e => (0, s.jsx)(L.default, {
          isInteracting: !0,
          size: 80,
          sticker: e
        }, e.id))
      }), f && (0, s.jsx)("div", {
        className: U.packActions,
        children: (0, s.jsx)(o.Button, {
          color: o.Button.Colors.PRIMARY,
          size: o.Button.Sizes.SMALL,
          onClick: () => {
            f && (0, x.navigateToOwnedStickerPack)({
              stickerPack: u,
              stickerPickerCategories: T
            }), t()
          },
          children: y.default.Messages.STICKER_VIEW_MORE_STICKERS
        }, "view-sticker-pack")
      })]
    })
  },
  w = e => {
    let t, {
        sticker: n,
        channel: l,
        closePopout: T,
        refreshPositionKey: m
      } = e,
      [I, C] = a.useState(null),
      [R, O] = a.useState(!1),
      v = N.default.getCurrentUser(),
      x = M.default.canUseCustomStickersEverywhere(v),
      j = (0, r.useStateFromStores)([h.default], () => h.default.getGuild(n.guild_id)),
      G = null != j,
      [k, w] = a.useState(!1),
      [H, V] = a.useState(null),
      Y = a.useMemo(() => ({
        page: null != l.guild_id ? D.AnalyticsPages.GUILD_CHANNEL : D.AnalyticsPages.DM_CHANNEL,
        section: D.AnalyticsSections.STICKER_POPOUT
      }), [l.guild_id]),
      {
        current: K
      } = a.useRef({
        guild_id: l.getGuildId(),
        ...(0, d.collectChannelAnalyticsMetadata)(l)
      });
    a.useEffect(() => {
      (async () => {
        (null == j || j.hasFeature(D.GuildFeatures.DISCOVERABLE)) && C(await (0, f.default)(n.id)), O(!0)
      })()
    }, [n.id, G]);
    let W = n.guild_id === l.getGuildId(),
      z = null != I,
      Q = !1,
      q = "Custom Sticker Popout";
    x ? t = G ? W ? y.default.Messages.STICKER_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION : y.default.Messages.STICKER_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION : z ? y.default.Messages.STICKER_POPOUT_PREMIUM_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : y.default.Messages.STICKER_POPOUT_PREMIUM_UNJOINED_PRIVATE_GUILD_DESCRIPTION : G ? (W ? t = y.default.Messages.STICKER_POPOUT_CURRENT_GUILD_DESCRIPTION : t = y.default.Messages.STICKER_POPOUT_JOINED_GUILD_DESCRIPTION, Q = !0, q = "Custom Sticker Popout (Upsell)") : z ? (t = y.default.Messages.STICKER_POPOUT_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION, Q = !0, q = "Custom Sticker Popout (Upsell)") : (t = y.default.Messages.STICKER_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
      openPremiumSettings: () => {
        B(l), T()
      }
    }), q = "Custom Sticker Popout (Soft Upsell)");
    let J = !Q && !G && z && x;
    return (a.useEffect(() => {
      m()
    }, [R, I]), a.useEffect(() => {
      g.default.track(D.AnalyticEvents.OPEN_POPOUT, {
        type: q,
        ...K
      })
    }, []), R) ? (0, s.jsxs)(_.MessagePopoutContent, {
      className: b.popoutContent,
      children: [(() => {
        let e = async () => {
          if (null == I || G) return;
          T();
          let e = I.id;
          try {
            await u.default.joinGuild(e), u.default.transitionToGuildSync(e)
          } catch {}
        };
        return (0, s.jsxs)("div", {
          className: b.emojiSection,
          children: [(0, s.jsx)(F, {
            description: t,
            sticker: n
          }), Q && (0, s.jsx)(p.default, {
            className: b.ctaButton,
            subscriptionTier: P.PremiumSubscriptionSKUs.TIER_2,
            size: o.Button.Sizes.SMALL,
            fullWidth: !0,
            buttonText: y.default.Messages.EMOJI_POPOUT_PREMIUM_CTA,
            onSubscribeModalClose: t => t ? e() : T(),
            postSuccessGuild: G || null == I ? void 0 : I,
            premiumModalAnalyticsLocation: Y
          }), J && (0, s.jsx)(o.Button, {
            size: o.Button.Sizes.SMALL,
            className: b.ctaButton,
            fullWidth: !0,
            onClick: e,
            children: y.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
          })]
        })
      })(), (null != j || null != I) && (() => {
        var e;
        if (!z && !G) return;
        let t = (null !== (e = null == I ? void 0 : I.stickers) && void 0 !== e ? e : []).slice(0, 13).filter(e => e.id !== n.id).slice(0, 12),
          a = null != I ? c.default.createFromDiscoverableGuild(I) : c.default.createFromGuildRecord(j);
        return (0, s.jsxs)("div", {
          className: b.guildSection,
          children: [(0, s.jsx)(o.FormTitle, {
            className: b.guildTitle,
            children: G ? y.default.Messages.STICKER_POPOUT_JOINED_GUILD_EMOJI_DESCRIPTION : y.default.Messages.STICKER_POPOUT_UNJOINED_GUILD_EMOJI_DESCRIPTION
          }), (0, s.jsx)(E.GuildDetails, {
            expressionSourceGuild: a,
            hasJoinedExpressionSourceGuild: G,
            isDisplayingJoinGuildButtonInPopout: J
          }), !G && (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(o.Clickable, {
              onClick: () => {
                m(), w(!k)
              },
              className: b.showMoreEmojis,
              children: (0, s.jsxs)(S.default, {
                children: [(0, s.jsx)(o.Text, {
                  className: b.__invalid_showMoreEmojisLabel,
                  variant: "text-xs/normal",
                  color: "none",
                  children: y.default.Messages.STICKER_POPOUT_SHOW_MORE_STICKERS
                }), (0, s.jsx)(A.default, {
                  className: i()(b.showMoreEmojisArrow, {
                    [b.showMoreEmojisArrowCollapsed]: !k
                  })
                })]
              })
            }), k && (0, s.jsx)(S.default, {
              wrap: S.default.Wrap.WRAP,
              align: S.default.Align.START,
              justify: S.default.Justify.START,
              className: b.otherEmojisContainer,
              children: t.map(e => (0, s.jsx)(o.Tooltip, {
                text: e.name,
                ..._.EXPRESSION_TOOLTIP_PROPS,
                children: t => {
                  let {
                    onMouseEnter: n,
                    onMouseLeave: a,
                    ...l
                  } = t;
                  return (0, s.jsx)("div", {
                    className: i()(b.otherEmoji, {
                      [U.nonInteractingSticker]: null != H && H !== e.id
                    }),
                    onMouseEnter: () => {
                      null == n || n(), V(e.id)
                    },
                    onMouseLeave: () => {
                      null == a || a(), V(null)
                    },
                    ...l,
                    children: (0, s.jsx)(L.default, {
                      size: 32,
                      enlargeOnInteraction: !0,
                      enlargeWithName: !1,
                      enlargeScaleFactor: 2,
                      isInteracting: H === e.id,
                      sticker: e
                    })
                  }, e.id)
                }
              }, e.id))
            })]
          })]
        })
      })()]
    }) : (0, s.jsx)(_.PopoutLoadingAnimation, {
      className: U.popoutLoader
    })
  };

function H(e) {
  let {
    channel: t,
    closePopout: n,
    sticker: a
  } = e;
  return (0, s.jsx)(_.MessagePopoutContent, {
    className: U.popoutContent,
    children: (0, s.jsx)(F, {
      sticker: a,
      description: y.default.Messages.STICKER_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
        openPremiumSettings: () => {
          n(), B(t)
        }
      })
    })
  })
}
t.default = e => {
  let {
    renderableSticker: t,
    channel: n,
    closePopout: a,
    refreshPositionKey: l
  } = e, [i, r] = (0, R.useStickerForRenderableSticker)(t, !0);
  if (null != i && (0, v.isStandardSticker)(i)) return (0, s.jsx)(k, {
    sticker: i,
    closePopout: a,
    channel: n,
    refreshPositionKey: l
  });
  if (null != i && (0, v.isGuildSticker)(i)) return (0, s.jsx)(w, {
    sticker: i,
    channel: n,
    closePopout: a,
    refreshPositionKey: l
  });
  if (!r) return (0, s.jsx)(_.PopoutLoadingAnimation, {});
  else if (r && null == i) return (0, s.jsx)(H, {
    channel: n,
    closePopout: a,
    sticker: t
  });
  return a(), null
}