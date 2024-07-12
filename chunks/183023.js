n.d(t, {
  Az: function() {
return K;
  },
  Oe: function() {
return z;
  },
  UA: function() {
return Q;
  },
  n_: function() {
return X;
  },
  vk: function() {
return q;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(990547),
  l = n(442837),
  u = n(507274),
  c = n(481060),
  d = n(749210),
  _ = n(596454),
  E = n(100527),
  f = n(906732),
  h = n(213609),
  p = n(738774),
  m = n(29598),
  I = n(400106),
  T = n(944386),
  g = n(889564),
  S = n(687476),
  A = n(761966),
  N = n(563927),
  v = n(98278),
  O = n(197115),
  R = n(703656),
  C = n(944486),
  y = n(914010),
  D = n(594174),
  L = n(285952),
  b = n(940627),
  M = n(346656),
  P = n(514342),
  U = n(806519),
  w = n(626135),
  x = n(768581),
  G = n(900849),
  k = n(74538),
  B = n(886132),
  F = n(524444),
  V = n(981631),
  H = n(176505),
  Z = n(474936),
  Y = n(689938),
  j = n(830645);
let W = () => ({
page: null != (0, l.e7)([y.Z], () => y.Z.getGuildId()) ? V.ZY5.GUILD_CHANNEL : V.ZY5.DM_CHANNEL,
section: V.jXE.EMOJI_UPSELL_POPOUT
  }),
  K = e => {
let {
  node: t
} = e;
(0, T.u)({
  emojiId: t.emojiId,
  currentGuildId: y.Z.getGuildId()
});
let n = (0, N.Z)(t.name);
return (0, r.jsx)(u.V, {
  children: (0, r.jsx)(F.W_, {
    children: (0, r.jsxs)(L.Z, {
      className: j.emojiSection,
      children: [
        (0, r.jsx)(_.Z, {
          emojiName: t.name,
          className: j.primaryEmoji,
          src: t.src,
          animated: !1,
          size: 'jumbo'
        }),
        (0, r.jsxs)(L.Z, {
          direction: L.Z.Direction.VERTICAL,
          justify: L.Z.Justify.CENTER,
          className: j.truncatingText,
          children: [
            (0, r.jsx)(c.Text, {
              className: j.__invalid_emojiName,
              variant: 'text-md/semibold',
              children: (0, r.jsx)(P.Z, {
                children: n
              })
            }),
            (0, r.jsx)(c.Text, {
              variant: 'text-sm/normal',
              children: Y.Z.Messages.EMOJI_POPOUT_STANDARD_EMOJI_DESCRIPTION
            })
          ]
        })
      ]
    })
  })
});
  },
  z = e => {
let {
  expressionSourceGuild: t,
  hasJoinedExpressionSourceGuild: n,
  isDisplayingJoinGuildButtonInPopout: i
} = e, {
  id: a,
  icon: s,
  name: l
} = t, u = x.ZP.getGuildIconURL({
  id: a,
  icon: s,
  size: 32,
  canAnimate: !0
}), d = (n = null == n || n) || t.isDiscoverable(), _ = () => {
  t.isDiscoverable() ? (0, G.Ub)(a, {}) : n && (0, R.uL)(V.Z5c.CHANNEL(a, C.Z.getChannelId(a)));
}, E = t.isDiscoverable() && null != t.presenceCount, f = () => {
  let e = !i && !n;
  return (0, r.jsxs)(r.Fragment, {
    children: [
      (0, r.jsx)(c.Text, {
        variant: 'text-xs/normal',
        color: 'header-secondary',
        children: Y.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
          membersOnline: t.presenceCount
        })
      }),
      (0, r.jsx)('div', {
        className: j.dotSeparator
      }),
      e ? (0, r.jsx)(c.Clickable, {
        className: j.joinGuildLink,
        onClick: _,
        children: (0, r.jsx)(c.Text, {
          variant: 'text-xs/normal',
          color: 'text-link',
          children: Y.Z.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
        })
      }) : (0, r.jsx)(c.Text, {
        variant: 'text-xs/normal',
        color: 'header-secondary',
        children: Y.Z.Messages.EMOJI_POPOUT_PUBLIC_SERVER
      })
    ]
  });
};
return (0, r.jsxs)(L.Z, {
  align: L.Z.Align.CENTER,
  children: [
    (0, r.jsx)(U.ZP, {
      mask: U.ZP.Masks.SQUIRCLE,
      width: 32,
      height: 32,
      className: j.__invalid_guildIconContainer,
      children: null != u && d ? (0, r.jsxs)(c.Clickable, {
        'aria-label': l,
        onClick: _,
        children: [
          (0, r.jsx)('img', {
            src: u,
            alt: '',
            className: j.guildIcon
          }),
          ' :'
        ]
      }) : (0, r.jsx)(M.Z, {
        size: M.Z.Sizes.SMALL,
        className: j.guildIconNotClickable,
        guild: t
      })
    }),
    (0, r.jsxs)(L.Z, {
      direction: L.Z.Direction.VERTICAL,
      className: o()(j.__invalid_guildInformation, j.truncatingText),
      children: [
        (0, r.jsxs)(L.Z, {
          align: L.Z.Align.CENTER,
          children: [
            (0, r.jsx)(b.Z, {
              guild: t,
              className: j.guildBadge
            }),
            d ? (0, r.jsx)(c.Clickable, {
              onClick: _,
              className: j.truncatingText,
              children: (0, r.jsx)(c.Heading, {
                className: j.guildName,
                variant: 'heading-md/semibold',
                children: (0, r.jsx)(P.Z, {
                  children: l
                })
              })
            }) : (0, r.jsx)(c.Heading, {
              variant: 'heading-md/semibold',
              children: (0, r.jsx)(P.Z, {
                children: l
              })
            })
          ]
        }),
        (0, r.jsx)(L.Z, {
          align: L.Z.Align.CENTER,
          children: E ? f() : (0, r.jsx)(c.Text, {
            variant: 'text-xs/normal',
            color: 'header-secondary',
            children: Y.Z.Messages.EMOJI_POPOUT_PRIVATE_SERVER
          })
        })
      ]
    })
  ]
});
  },
  q = e => {
let {
  node: t,
  closePopout: n,
  refreshPositionKey: i,
  nonce: a
} = e, {
  expressionSourceGuild: o,
  joinedEmojiSourceGuildRecord: s,
  emoji: l,
  isFetching: c
} = (0, m.U)({
  emojiId: t.emojiId,
  refreshPositionKey: i
});
return c ? (0, r.jsx)(F.SE, {}) : (0, r.jsx)(u.V, {
  'aria-label': t.name,
  children: (0, r.jsx)(Q, {
    node: t,
    guildEmoji: null != l ? l : void 0,
    expressionSourceGuild: o,
    joinedEmojiSourceGuildRecord: s,
    closePopout: n,
    onToggleShowMoreEmojis: i,
    demoMode: !1,
    nonce: a
  })
});
  },
  Q = e => {
var t, n, a;
let {
  node: u,
  expressionSourceGuild: m,
  joinedEmojiSourceGuildRecord: N,
  closePopout: R,
  onToggleShowMoreEmojis: C,
  guildEmoji: b,
  demoMode: M = !1,
  nonce: U
} = e, x = (0, l.e7)([D.default], () => D.default.getCurrentUser()), G = (0, l.e7)([y.Z], () => y.Z.getGuildId()), K = k.ZP.isPremium(x), q = null != G && (G === (null == m ? void 0 : m.id) || G === (null == N ? void 0 : N.id)), Q = null != N, $ = null !== (t = null == m ? void 0 : m.isDiscoverable()) && void 0 !== t && t;
M && (K = !0, $ = !0, Q = !1, q = !1);
let J = W(),
  {
    isRoleSubscriptionEmoji: ee,
    isUnusableRoleSubscriptionEmoji: et,
    userIsRoleSubscriber: en
  } = i.useMemo(() => null == b ? {
    isRoleSubscriptionEmoji: !1,
    isUnusableRoleSubscriptionEmoji: !1,
    userIsRoleSubscriber: !1
  } : {
    isRoleSubscriptionEmoji: g.yH(b),
    isUnusableRoleSubscriptionEmoji: g.Fv(b, null != G ? G : void 0),
    userIsRoleSubscriber: S.Z.getUserSubscriptionRoles(b.guildId).size > 0
  }, [
    b,
    G
  ]),
  er = !!et && (0, p.Ol)(null == b ? void 0 : b.guildId),
  {
    analyticsLocations: ei
  } = (0, f.ZP)(E.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
(0, h.Z)({
  type: s.ImpressionTypes.MODAL,
  name: s.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
  properties: {
    location_stack: ei,
    emoji_guild_id: null !== (n = null == b ? void 0 : b.guildId) && void 0 !== n ? n : null,
    emoji_id: null !== (a = null == b ? void 0 : b.id) && void 0 !== a ? a : null
  }
}, {
  disableTrack: !ee
});
let ea = y.Z.getGuildId(),
  eo = (0, B.a)({
    isPremium: K,
    hasJoinedEmojiSourceGuild: Q,
    isRoleSubscriptionEmoji: ee,
    isUnusableRoleSubscriptionEmoji: et,
    userIsRoleSubscriber: en,
    emojiComesFromCurrentGuild: q,
    isDiscoverable: $,
    shouldHideRoleSubscriptionCTA: er,
    onOpenPremiumSettings: () => {
      R(), w.default.track(V.rMx.PREMIUM_PROMOTION_OPENED, {
        location_page: J.page,
        location_section: J.section
      }), (0, v.z)();
    }
  }),
  es = Q && et && !er && (K && ee || !K),
  el = eo.emojiDescription,
  eu = (0, T.u)({
    emojiId: u.emojiId,
    currentGuildId: ea,
    popoutData: eo,
    emojiSourceGuildId: null == m ? void 0 : m.id,
    nonce: U,
    demoMode: M
  }),
  ec = eo.type === B.$.JOIN_GUILD,
  ed = eo.type === B.$.GET_PREMIUM,
  [e_, eE] = i.useState(!1),
  ef = $ || Q && !q || null != m;
return (0, r.jsxs)(F.W_, {
  className: j.popoutContent,
  children: [
    (() => {
      let e = async () => {
        if (M || null == m || Q)
          return;
        R();
        let e = m.id;
        try {
          await d.Z.joinGuild(e), d.Z.transitionToGuildSync(e);
        } catch {}
      }, t = !Q && $;
      return (0, r.jsxs)('div', {
        className: j.emojiSection,
        children: [
          (0, r.jsxs)(L.Z, {
            children: [
              (0, r.jsx)(_.Z, {
                className: j.primaryEmoji,
                emojiId: u.emojiId,
                emojiName: u.name,
                animated: u.animated,
                size: 'jumbo'
              }),
              (0, r.jsxs)(L.Z, {
                direction: L.Z.Direction.VERTICAL,
                justify: L.Z.Justify.CENTER,
                className: j.truncatingText,
                children: [
                  (0, r.jsx)(c.Text, {
                    variant: 'text-md/semibold',
                    children: (0, r.jsx)(P.Z, {
                      children: u.name
                    })
                  }),
                  null != el && (0, r.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    children: el
                  })
                ]
              })
            ]
          }),
          ed ? (0, r.jsx)(O.Z, {
            className: j.ctaButton,
            subscriptionTier: Z.Si.TIER_2,
            size: c.Button.Sizes.SMALL,
            fullWidth: !0,
            buttonText: eo.text,
            onSubscribeModalClose: t => t ? e() : R(),
            postSuccessGuild: t && null != m ? m : void 0,
            premiumModalAnalyticsLocation: J
          }) : ec ? (0, r.jsx)(c.Button, {
            size: c.Button.Sizes.SMALL,
            className: j.ctaButton,
            color: c.ButtonColors.BRAND,
            fullWidth: !0,
            onClick: e,
            children: eo.text
          }) : void 0,
          es && (0, r.jsx)(A.Z, {
            className: j.ctaButton,
            size: c.Button.Sizes.SMALL,
            fullWidth: !0,
            onClick: () => {
              R(), (null == N ? void 0 : N.id) != null && d.Z.transitionToGuildSync(N.id, {
                sourceLocationStack: [E.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL]
              }, H.oC.ROLE_SUBSCRIPTIONS);
            },
            children: en ? Y.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_BUTTON : Y.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_BUTTON
          })
        ]
      });
    })(),
    ef && (() => {
      let e = null != m && !Q && $,
        t = () => {
          if (!!e)
            null == C || C(), !e_ && !M && w.default.track(V.rMx.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, eu), eE(!e_);
        };
      return (0, r.jsxs)('div', {
        className: j.guildSection,
        children: [
          (0, r.jsx)(c.FormTitle, {
            className: j.guildTitle,
            children: Q ? Y.Z.Messages.EMOJI_POPOUT_JOINED_GUILD_EMOJI_DESCRIPTION : Y.Z.Messages.EMOJI_POPOUT_UNJOINED_GUILD_EMOJI_DESCRIPTION
          }),
          (0, r.jsx)(z, {
            expressionSourceGuild: null != m ? m : I.Z.createFromGuildRecord(N),
            hasJoinedExpressionSourceGuild: Q,
            isDisplayingJoinGuildButtonInPopout: ec
          }),
          e && (0, r.jsxs)(r.Fragment, {
            children: [
              (() => {
                let e = Y.Z.Messages.EMOJI_POPOUT_SHOW_MORE_EMOJIS;
                return (0, r.jsx)(c.Clickable, {
                  onClick: t,
                  className: j.showMoreEmojis,
                  children: (0, r.jsxs)(L.Z, {
                    children: [
                      (0, r.jsx)(c.Text, {
                        className: j.__invalid_showMoreEmojisLabel,
                        'aria-label': e,
                        variant: 'text-xs/normal',
                        color: 'none',
                        children: e
                      }),
                      (0, r.jsx)(c.ChevronSmallDownIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: o()(j.showMoreEmojisArrow, {
                          [j.showMoreEmojisArrowCollapsed]: !e_
                        })
                      })
                    ]
                  })
                });
              })(),
              null != u.emojiId && e_ && (0, r.jsx)(X, {
                emojiId: u.emojiId,
                expressionSourceGuild: m,
                popoutData: eo,
                onClose: R,
                hasJoinedEmojiSourceGuild: Q,
                isDisplayingButtonInTopSection: ec || ed
              })
            ]
          })
        ]
      });
    })()
  ]
});
  },
  X = e => {
var t;
let {
  emojiId: n,
  expressionSourceGuild: i,
  hasJoinedEmojiSourceGuild: a,
  popoutData: o,
  onClose: s,
  isDisplayingButtonInTopSection: l
} = e, u = (null !== (t = null == i ? void 0 : i.emojis) && void 0 !== t ? t : []).slice(0, 13).filter(e => e.id !== n).slice(0, 12), {
  type: d,
  description: E
} = o;
return (0, r.jsxs)(L.Z, {
  wrap: L.Z.Wrap.WRAP,
  align: L.Z.Align.CENTER,
  justify: L.Z.Justify.CENTER,
  className: j.otherEmojisContainer,
  children: [
    a ? null : u.map(e => (0, r.jsx)(c.Tooltip, {
      text: e.require_colons ? ':'.concat(e.name, ':') : e.name,
      ...F.b_,
      children: t => (0, r.jsx)(_.Z, {
        className: j.otherEmoji,
        emojiId: e.id,
        animated: e.animated,
        ...t
      })
    }, e.id)),
    !l && (d === B.$.GET_PREMIUM ? (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)(O.Z, {
          subscriptionTier: Z.Si.TIER_2,
          buttonText: o.text,
          className: j.ctaButton,
          fullWidth: !0,
          onClick: () => s()
        }),
        null != E && (0, r.jsx)('div', {
          className: j.ctaDescription,
          children: (0, r.jsx)(c.Text, {
            variant: 'text-sm/medium',
            'aria-label': E,
            children: E
          })
        })
      ]
    }) : d === B.$.JOIN_GUILD ? (0, r.jsx)(c.Button, {
      size: c.Button.Sizes.SMALL,
      className: j.ctaButton,
      color: c.ButtonColors.BRAND,
      fullWidth: !0,
      onClick: () => {
        (0, G.Ub)(i.id, {});
      },
      children: o.text
    }) : null)
  ]
});
  };