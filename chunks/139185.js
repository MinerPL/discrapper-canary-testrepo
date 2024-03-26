"use strict";
n.r(t), n.d(t, {
  default: function() {
    return V
  }
}), n("808653"), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("446674"),
  o = n("77078"),
  u = n("851387"),
  d = n("716241"),
  c = n("101263"),
  E = n("243375"),
  f = n("459698"),
  _ = n("933629"),
  T = n("626301"),
  I = n("716849"),
  m = n("552917"),
  N = n("635956"),
  p = n("305961"),
  S = n("697218"),
  C = n("145131"),
  A = n("98292"),
  h = n("256170"),
  g = n("599110"),
  M = n("719923"),
  O = n("256860"),
  R = n("364685"),
  L = n("24373"),
  v = n("41170"),
  P = n("730723"),
  D = n("49111"),
  x = n("646718"),
  y = n("782340"),
  U = n("144897"),
  j = n("325417");
let b = (e, t) => t ? y.default.Messages.STICKER_POPOUT_PACK_INFO_PREMIUM.format({
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

function k(e) {
  let {
    sticker: t,
    description: n
  } = e;
  return (0, s.jsxs)(C.default, {
    children: [(0, s.jsx)(v.default, {
      sticker: t,
      size: 48,
      isInteracting: !0
    }), (0, s.jsxs)(C.default, {
      direction: C.default.Direction.VERTICAL,
      justify: C.default.Justify.CENTER,
      className: j.truncatingText,
      children: [(0, s.jsx)(o.Text, {
        className: j.emojiName,
        variant: "text-md/semibold",
        children: (0, s.jsx)(A.default, {
          children: t.name
        })
      }), null != n && (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: n
      })]
    })]
  })
}
let F = e => {
    let {
      closePopout: t,
      sticker: n,
      channel: l,
      refreshPositionKey: i
    } = e, [u, c, E] = (0, r.useStateFromStoresArray)([R.default], () => [R.default.getStickerPack(n.pack_id), !R.default.hasLoadedStickerPacks, R.default.isPremiumPack(n.pack_id)], [n]), f = G({
      sticker: n,
      stickerPack: u
    });
    (0, O.useFetchStickerPack)(n.pack_id);
    let T = (0, O.useFilteredStickerPackCategories)(l);
    return ((0, I.useMaybeFetchPremiumLikelihood)(m.default), a.useEffect(() => {
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
        children: b(u, E)
      }), (0, s.jsx)("ul", {
        className: U.stickersList,
        children: f.map(e => (0, s.jsx)(v.default, {
          isInteracting: !0,
          size: 80,
          sticker: e
        }, e.id))
      }), E && (0, s.jsx)("div", {
        className: U.packActions,
        children: (0, s.jsx)(o.Button, {
          color: o.Button.Colors.PRIMARY,
          size: o.Button.Sizes.SMALL,
          onClick: () => {
            E && (0, P.navigateToOwnedStickerPack)({
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
        refreshPositionKey: I
      } = e,
      [m, A] = a.useState(null),
      [O, R] = a.useState(!1),
      L = S.default.getCurrentUser(),
      P = M.default.canUseCustomStickersEverywhere(L),
      b = (0, r.useStateFromStores)([p.default], () => p.default.getGuild(n.guild_id)),
      G = null != b,
      [F, w] = a.useState(!1),
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
      let e = async () => {
        let e = null == b || b.hasFeature(D.GuildFeatures.DISCOVERABLE);
        if (e) {
          let e = await (0, E.default)(n.id);
          A(e)
        }
        R(!0)
      };
      e()
    }, [n.id, G]);
    let W = n.guild_id === l.getGuildId(),
      z = null != m,
      Q = !1,
      Z = "Custom Sticker Popout";
    P ? t = G ? W ? y.default.Messages.STICKER_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION : y.default.Messages.STICKER_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION : z ? y.default.Messages.STICKER_POPOUT_PREMIUM_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : y.default.Messages.STICKER_POPOUT_PREMIUM_UNJOINED_PRIVATE_GUILD_DESCRIPTION : G ? (W ? t = y.default.Messages.STICKER_POPOUT_CURRENT_GUILD_DESCRIPTION : t = y.default.Messages.STICKER_POPOUT_JOINED_GUILD_DESCRIPTION, Q = !0, Z = "Custom Sticker Popout (Upsell)") : z ? (t = y.default.Messages.STICKER_POPOUT_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION, Q = !0, Z = "Custom Sticker Popout (Upsell)") : (t = y.default.Messages.STICKER_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
      openPremiumSettings: () => {
        B(l), T()
      }
    }), Z = "Custom Sticker Popout (Soft Upsell)");
    let J = !Q && !G && z && P;
    return (a.useEffect(() => {
      I()
    }, [O, m]), a.useEffect(() => {
      g.default.track(D.AnalyticEvents.OPEN_POPOUT, {
        type: Z,
        ...K
      })
    }, []), O) ? (0, s.jsxs)(_.MessagePopoutContent, {
      className: j.popoutContent,
      children: [(() => {
        let e = async () => {
          if (null == m || G) return;
          T();
          let e = m.id;
          try {
            await u.default.joinGuild(e), u.default.transitionToGuildSync(e)
          } catch {}
        };
        return (0, s.jsxs)("div", {
          className: j.emojiSection,
          children: [(0, s.jsx)(k, {
            description: t,
            sticker: n
          }), Q && (0, s.jsx)(N.default, {
            className: j.ctaButton,
            subscriptionTier: x.PremiumSubscriptionSKUs.TIER_2,
            size: o.Button.Sizes.SMALL,
            fullWidth: !0,
            buttonText: y.default.Messages.EMOJI_POPOUT_PREMIUM_CTA,
            onSubscribeModalClose: t => t ? e() : T(),
            postSuccessGuild: G || null == m ? void 0 : m,
            premiumModalAnalyticsLocation: Y
          }), J && (0, s.jsx)(o.Button, {
            size: o.Button.Sizes.SMALL,
            className: j.ctaButton,
            fullWidth: !0,
            onClick: e,
            children: y.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
          })]
        })
      })(), (null != b || null != m) && (() => {
        var e;
        if (!z && !G) return;
        let t = (null !== (e = null == m ? void 0 : m.stickers) && void 0 !== e ? e : []).slice(0, 13).filter(e => e.id !== n.id).slice(0, 12),
          a = null != m ? c.default.createFromDiscoverableGuild(m) : c.default.createFromGuildRecord(b);
        return (0, s.jsxs)("div", {
          className: j.guildSection,
          children: [(0, s.jsx)(o.FormTitle, {
            className: j.guildTitle,
            children: G ? y.default.Messages.STICKER_POPOUT_JOINED_GUILD_EMOJI_DESCRIPTION : y.default.Messages.STICKER_POPOUT_UNJOINED_GUILD_EMOJI_DESCRIPTION
          }), (0, s.jsx)(f.GuildDetails, {
            expressionSourceGuild: a,
            hasJoinedExpressionSourceGuild: G,
            isDisplayingJoinGuildButtonInPopout: J
          }), !G && (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(o.Clickable, {
              onClick: () => {
                I(), w(!F)
              },
              className: j.showMoreEmojis,
              children: (0, s.jsxs)(C.default, {
                children: [(0, s.jsx)(o.Text, {
                  className: j.showMoreEmojisLabel,
                  variant: "text-xs/normal",
                  color: "none",
                  children: y.default.Messages.STICKER_POPOUT_SHOW_MORE_STICKERS
                }), (0, s.jsx)(h.default, {
                  className: i(j.showMoreEmojisArrow, {
                    [j.showMoreEmojisArrowCollapsed]: !F
                  })
                })]
              })
            }), F && (0, s.jsx)(C.default, {
              wrap: C.default.Wrap.WRAP,
              align: C.default.Align.START,
              justify: C.default.Justify.START,
              className: j.otherEmojisContainer,
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
                    className: i(j.otherEmoji, {
                      [U.nonInteractingSticker]: null != H && H !== e.id
                    }),
                    onMouseEnter: () => {
                      null == n || n(), V(e.id)
                    },
                    onMouseLeave: () => {
                      null == a || a(), V(null)
                    },
                    ...l,
                    children: (0, s.jsx)(v.default, {
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
    children: (0, s.jsx)(k, {
      sticker: a,
      description: y.default.Messages.STICKER_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
        openPremiumSettings: () => {
          n(), B(t)
        }
      })
    })
  })
}
var V = e => {
  let {
    renderableSticker: t,
    channel: n,
    closePopout: a,
    refreshPositionKey: l
  } = e, [i, r] = (0, O.useStickerForRenderableSticker)(t, !0);
  if (null != i && (0, L.isStandardSticker)(i)) return (0, s.jsx)(F, {
    sticker: i,
    closePopout: a,
    channel: n,
    refreshPositionKey: l
  });
  if (null != i && (0, L.isGuildSticker)(i)) return (0, s.jsx)(w, {
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