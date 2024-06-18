"use strict";
n.d(t, {
  Az: function() {
    return z
  },
  Oe: function() {
    return q
  },
  UA: function() {
    return Q
  },
  n_: function() {
    return J
  },
  vk: function() {
    return X
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(990547),
  l = n(442837),
  u = n(507274),
  _ = n(481060),
  d = n(749210),
  c = n(596454),
  E = n(100527),
  I = n(906732),
  T = n(213609),
  h = n(738774),
  S = n(29598),
  f = n(400106),
  N = n(944386),
  A = n(889564),
  m = n(687476),
  O = n(761966),
  R = n(563927),
  C = n(98278),
  p = n(197115),
  g = n(703656),
  L = n(944486),
  v = n(914010),
  D = n(594174),
  M = n(285952),
  P = n(940627),
  y = n(346656),
  U = n(514342),
  b = n(605403),
  G = n(806519),
  w = n(626135),
  k = n(768581),
  B = n(900849),
  x = n(74538),
  V = n(886132),
  Z = n(524444),
  H = n(981631),
  F = n(176505),
  Y = n(474936),
  j = n(689938),
  W = n(630714);
let K = () => ({
    page: null != (0, l.e7)([v.Z], () => v.Z.getGuildId()) ? H.ZY5.GUILD_CHANNEL : H.ZY5.DM_CHANNEL,
    section: H.jXE.EMOJI_UPSELL_POPOUT
  }),
  z = e => {
    let {
      node: t
    } = e;
    (0, N.u)({
      emojiId: t.emojiId,
      currentGuildId: v.Z.getGuildId()
    });
    let n = (0, R.Z)(t.name);
    return (0, i.jsx)(u.V, {
      children: (0, i.jsx)(Z.W_, {
        children: (0, i.jsxs)(M.Z, {
          className: W.emojiSection,
          children: [(0, i.jsx)(c.Z, {
            emojiName: t.name,
            className: W.primaryEmoji,
            src: t.src,
            animated: !1,
            size: "jumbo"
          }), (0, i.jsxs)(M.Z, {
            direction: M.Z.Direction.VERTICAL,
            justify: M.Z.Justify.CENTER,
            className: W.truncatingText,
            children: [(0, i.jsx)(_.Text, {
              className: W.__invalid_emojiName,
              variant: "text-md/semibold",
              children: (0, i.jsx)(U.Z, {
                children: n
              })
            }), (0, i.jsx)(_.Text, {
              variant: "text-sm/normal",
              children: j.Z.Messages.EMOJI_POPOUT_STANDARD_EMOJI_DESCRIPTION
            })]
          })]
        })
      })
    })
  },
  q = e => {
    let {
      expressionSourceGuild: t,
      hasJoinedExpressionSourceGuild: n,
      isDisplayingJoinGuildButtonInPopout: r
    } = e, {
      id: s,
      icon: a,
      name: l
    } = t, u = k.ZP.getGuildIconURL({
      id: s,
      icon: a,
      size: 32,
      canAnimate: !0
    }), d = (n = null == n || n) || t.isDiscoverable(), c = () => {
      t.isDiscoverable() ? (0, B.Ub)(s, {}) : n && (0, g.uL)(H.Z5c.CHANNEL(s, L.Z.getChannelId(s)))
    }, E = t.isDiscoverable() && null != t.presenceCount, I = () => {
      let e = !r && !n;
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(_.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: j.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
            membersOnline: t.presenceCount
          })
        }), (0, i.jsx)("div", {
          className: W.dotSeparator
        }), e ? (0, i.jsx)(_.Clickable, {
          className: W.joinGuildLink,
          onClick: c,
          children: (0, i.jsx)(_.Text, {
            variant: "text-xs/normal",
            color: "text-link",
            children: j.Z.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
          })
        }) : (0, i.jsx)(_.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: j.Z.Messages.EMOJI_POPOUT_PUBLIC_SERVER
        })]
      })
    };
    return (0, i.jsxs)(M.Z, {
      align: M.Z.Align.CENTER,
      children: [(0, i.jsx)(G.ZP, {
        mask: G.ZP.Masks.SQUIRCLE,
        width: 32,
        height: 32,
        className: W.__invalid_guildIconContainer,
        children: null != u && d ? (0, i.jsxs)(_.Clickable, {
          "aria-label": l,
          onClick: c,
          children: [(0, i.jsx)("img", {
            src: u,
            alt: "",
            className: W.guildIcon
          }), " :"]
        }) : (0, i.jsx)(y.Z, {
          size: y.Z.Sizes.SMALL,
          className: W.guildIconNotClickable,
          guild: t
        })
      }), (0, i.jsxs)(M.Z, {
        direction: M.Z.Direction.VERTICAL,
        className: o()(W.__invalid_guildInformation, W.truncatingText),
        children: [(0, i.jsxs)(M.Z, {
          align: M.Z.Align.CENTER,
          children: [(0, i.jsx)(P.Z, {
            guild: t,
            className: W.guildBadge
          }), d ? (0, i.jsx)(_.Clickable, {
            onClick: c,
            className: W.truncatingText,
            children: (0, i.jsx)(_.Heading, {
              className: W.guildName,
              variant: "heading-md/semibold",
              children: (0, i.jsx)(U.Z, {
                children: l
              })
            })
          }) : (0, i.jsx)(_.Heading, {
            variant: "heading-md/semibold",
            children: (0, i.jsx)(U.Z, {
              children: l
            })
          })]
        }), (0, i.jsx)(M.Z, {
          align: M.Z.Align.CENTER,
          children: E ? I() : (0, i.jsx)(_.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            children: j.Z.Messages.EMOJI_POPOUT_PRIVATE_SERVER
          })
        })]
      })]
    })
  },
  X = e => {
    let {
      node: t,
      closePopout: n,
      refreshPositionKey: r,
      nonce: s
    } = e, {
      expressionSourceGuild: o,
      joinedEmojiSourceGuildRecord: a,
      emoji: l,
      isFetching: _
    } = (0, S.U)({
      emojiId: t.emojiId,
      refreshPositionKey: r
    });
    return _ ? (0, i.jsx)(Z.SE, {}) : (0, i.jsx)(u.V, {
      "aria-label": t.name,
      children: (0, i.jsx)(Q, {
        node: t,
        guildEmoji: null != l ? l : void 0,
        expressionSourceGuild: o,
        joinedEmojiSourceGuildRecord: a,
        closePopout: n,
        onToggleShowMoreEmojis: r,
        demoMode: !1,
        nonce: s
      })
    })
  },
  Q = e => {
    var t, n, s;
    let {
      node: u,
      expressionSourceGuild: S,
      joinedEmojiSourceGuildRecord: R,
      closePopout: g,
      onToggleShowMoreEmojis: L,
      guildEmoji: P,
      demoMode: y = !1,
      nonce: G
    } = e, k = (0, l.e7)([D.default], () => D.default.getCurrentUser()), B = (0, l.e7)([v.Z], () => v.Z.getGuildId()), z = x.ZP.isPremium(k), X = null != B && (B === (null == S ? void 0 : S.id) || B === (null == R ? void 0 : R.id)), Q = null != R, $ = null !== (t = null == S ? void 0 : S.isDiscoverable()) && void 0 !== t && t;
    y && (z = !0, $ = !0, Q = !1, X = !1);
    let ee = K(),
      {
        isRoleSubscriptionEmoji: et,
        isUnusableRoleSubscriptionEmoji: en,
        userIsRoleSubscriber: ei
      } = r.useMemo(() => null == P ? {
        isRoleSubscriptionEmoji: !1,
        isUnusableRoleSubscriptionEmoji: !1,
        userIsRoleSubscriber: !1
      } : {
        isRoleSubscriptionEmoji: A.yH(P),
        isUnusableRoleSubscriptionEmoji: A.Fv(P, null != B ? B : void 0),
        userIsRoleSubscriber: m.Z.getUserSubscriptionRoles(P.guildId).size > 0
      }, [P, B]),
      er = !!en && (0, h.Ol)(null == P ? void 0 : P.guildId),
      {
        analyticsLocations: es
      } = (0, I.ZP)(E.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
    (0, T.Z)({
      type: a.ImpressionTypes.MODAL,
      name: a.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
      properties: {
        location_stack: es,
        emoji_guild_id: null !== (n = null == P ? void 0 : P.guildId) && void 0 !== n ? n : null,
        emoji_id: null !== (s = null == P ? void 0 : P.id) && void 0 !== s ? s : null
      }
    }, {
      disableTrack: !et
    });
    let eo = v.Z.getGuildId(),
      ea = (0, V.a)({
        isPremium: z,
        hasJoinedEmojiSourceGuild: Q,
        isRoleSubscriptionEmoji: et,
        isUnusableRoleSubscriptionEmoji: en,
        userIsRoleSubscriber: ei,
        emojiComesFromCurrentGuild: X,
        isDiscoverable: $,
        shouldHideRoleSubscriptionCTA: er,
        onOpenPremiumSettings: () => {
          g(), w.default.track(H.rMx.PREMIUM_PROMOTION_OPENED, {
            location_page: ee.page,
            location_section: ee.section
          }), (0, C.z)()
        }
      }),
      el = Q && en && !er && (z && et || !z),
      eu = ea.emojiDescription,
      e_ = (0, N.u)({
        emojiId: u.emojiId,
        currentGuildId: eo,
        popoutData: ea,
        emojiSourceGuildId: null == S ? void 0 : S.id,
        nonce: G,
        demoMode: y
      }),
      ed = ea.type === V.$.JOIN_GUILD,
      ec = ea.type === V.$.GET_PREMIUM,
      [eE, eI] = r.useState(!1),
      eT = $ || Q && !X || null != S;
    return (0, i.jsxs)(Z.W_, {
      className: W.popoutContent,
      children: [(() => {
        let e = async () => {
          if (y || null == S || Q) return;
          g();
          let e = S.id;
          try {
            await d.Z.joinGuild(e), d.Z.transitionToGuildSync(e)
          } catch {}
        }, t = !Q && $;
        return (0, i.jsxs)("div", {
          className: W.emojiSection,
          children: [(0, i.jsxs)(M.Z, {
            children: [(0, i.jsx)(c.Z, {
              className: W.primaryEmoji,
              emojiId: u.emojiId,
              emojiName: u.name,
              animated: u.animated,
              size: "jumbo"
            }), (0, i.jsxs)(M.Z, {
              direction: M.Z.Direction.VERTICAL,
              justify: M.Z.Justify.CENTER,
              className: W.truncatingText,
              children: [(0, i.jsx)(_.Text, {
                variant: "text-md/semibold",
                children: (0, i.jsx)(U.Z, {
                  children: u.name
                })
              }), null != eu && (0, i.jsx)(_.Text, {
                variant: "text-sm/normal",
                children: eu
              })]
            })]
          }), ec ? (0, i.jsx)(p.Z, {
            className: W.ctaButton,
            subscriptionTier: Y.Si.TIER_2,
            size: _.Button.Sizes.SMALL,
            fullWidth: !0,
            buttonText: ea.text,
            onSubscribeModalClose: t => t ? e() : g(),
            postSuccessGuild: t && null != S ? S : void 0,
            premiumModalAnalyticsLocation: ee
          }) : ed ? (0, i.jsx)(_.Button, {
            size: _.Button.Sizes.SMALL,
            className: W.ctaButton,
            color: _.ButtonColors.BRAND,
            fullWidth: !0,
            onClick: e,
            children: ea.text
          }) : void 0, el && (0, i.jsx)(O.Z, {
            className: W.ctaButton,
            size: _.Button.Sizes.SMALL,
            fullWidth: !0,
            onClick: () => {
              g(), (null == R ? void 0 : R.id) != null && d.Z.transitionToGuildSync(R.id, void 0, F.oC.ROLE_SUBSCRIPTIONS, [E.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL])
            },
            children: ei ? j.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_BUTTON : j.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_BUTTON
          })]
        })
      })(), eT && (() => {
        let e = null != S && !Q && $,
          t = () => {
            if (!!e) null == L || L(), !eE && !y && w.default.track(H.rMx.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, e_), eI(!eE)
          };
        return (0, i.jsxs)("div", {
          className: W.guildSection,
          children: [(0, i.jsx)(_.FormTitle, {
            className: W.guildTitle,
            children: Q ? j.Z.Messages.EMOJI_POPOUT_JOINED_GUILD_EMOJI_DESCRIPTION : j.Z.Messages.EMOJI_POPOUT_UNJOINED_GUILD_EMOJI_DESCRIPTION
          }), (0, i.jsx)(q, {
            expressionSourceGuild: null != S ? S : f.Z.createFromGuildRecord(R),
            hasJoinedExpressionSourceGuild: Q,
            isDisplayingJoinGuildButtonInPopout: ed
          }), e && (0, i.jsxs)(i.Fragment, {
            children: [(() => {
              let e = j.Z.Messages.EMOJI_POPOUT_SHOW_MORE_EMOJIS;
              return (0, i.jsx)(_.Clickable, {
                onClick: t,
                className: W.showMoreEmojis,
                children: (0, i.jsxs)(M.Z, {
                  children: [(0, i.jsx)(_.Text, {
                    className: W.__invalid_showMoreEmojisLabel,
                    "aria-label": e,
                    variant: "text-xs/normal",
                    color: "none",
                    children: e
                  }), (0, i.jsx)(b.Z, {
                    className: o()(W.showMoreEmojisArrow, {
                      [W.showMoreEmojisArrowCollapsed]: !eE
                    })
                  })]
                })
              })
            })(), null != u.emojiId && eE && (0, i.jsx)(J, {
              emojiId: u.emojiId,
              expressionSourceGuild: S,
              popoutData: ea,
              onClose: g,
              hasJoinedEmojiSourceGuild: Q,
              isDisplayingButtonInTopSection: ed || ec
            })]
          })]
        })
      })()]
    })
  },
  J = e => {
    var t;
    let {
      emojiId: n,
      expressionSourceGuild: r,
      hasJoinedEmojiSourceGuild: s,
      popoutData: o,
      onClose: a,
      isDisplayingButtonInTopSection: l
    } = e, u = (null !== (t = null == r ? void 0 : r.emojis) && void 0 !== t ? t : []).slice(0, 13).filter(e => e.id !== n).slice(0, 12), {
      type: d,
      description: E
    } = o;
    return (0, i.jsxs)(M.Z, {
      wrap: M.Z.Wrap.WRAP,
      align: M.Z.Align.CENTER,
      justify: M.Z.Justify.CENTER,
      className: W.otherEmojisContainer,
      children: [s ? null : u.map(e => (0, i.jsx)(_.Tooltip, {
        text: e.require_colons ? ":".concat(e.name, ":") : e.name,
        ...Z.b_,
        children: t => (0, i.jsx)(c.Z, {
          className: W.otherEmoji,
          emojiId: e.id,
          animated: e.animated,
          ...t
        })
      }, e.id)), !l && (d === V.$.GET_PREMIUM ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(p.Z, {
          subscriptionTier: Y.Si.TIER_2,
          buttonText: o.text,
          className: W.ctaButton,
          fullWidth: !0,
          onClick: () => a()
        }), null != E && (0, i.jsx)("div", {
          className: W.ctaDescription,
          children: (0, i.jsx)(_.Text, {
            variant: "text-sm/medium",
            "aria-label": E,
            children: E
          })
        })]
      }) : d === V.$.JOIN_GUILD ? (0, i.jsx)(_.Button, {
        size: _.Button.Sizes.SMALL,
        className: W.ctaButton,
        color: _.ButtonColors.BRAND,
        fullWidth: !0,
        onClick: () => {
          (0, B.Ub)(r.id, {})
        },
        children: o.text
      }) : null)]
    })
  }