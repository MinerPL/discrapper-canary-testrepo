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
  s = n.n(a),
  o = n(990547),
  l = n(442837),
  u = n(507274),
  c = n(481060),
  d = n(749210),
  _ = n(596454),
  E = n(100527),
  f = n(906732),
  h = n(213609),
  p = n(738774),
  m = n(785896),
  I = n(231053),
  T = n(944386),
  g = n(565138),
  S = n(372769),
  A = n(889564),
  N = n(687476),
  v = n(761966),
  O = n(563927),
  R = n(98278),
  C = n(197115),
  y = n(703656),
  D = n(944486),
  L = n(914010),
  b = n(594174),
  M = n(285952),
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
page: null != (0, l.e7)([L.Z], () => L.Z.getGuildId()) ? V.ZY5.GUILD_CHANNEL : V.ZY5.DM_CHANNEL,
section: V.jXE.EMOJI_UPSELL_POPOUT
  }),
  K = e => {
let {
  node: t
} = e;
(0, T.u)({
  emojiId: t.emojiId,
  currentGuildId: L.Z.getGuildId()
});
let n = (0, O.Z)(t.name);
return (0, r.jsx)(u.V, {
  children: (0, r.jsx)(F.W_, {
    children: (0, r.jsxs)(M.Z, {
      className: j.emojiSection,
      children: [
        (0, r.jsx)(_.Z, {
          emojiName: t.name,
          className: j.primaryEmoji,
          src: t.src,
          animated: !1,
          size: 'jumbo'
        }),
        (0, r.jsxs)(M.Z, {
          direction: M.Z.Direction.VERTICAL,
          justify: M.Z.Justify.CENTER,
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
  icon: o,
  name: l
} = t, u = x.ZP.getGuildIconURL({
  id: a,
  icon: o,
  size: 32,
  canAnimate: !0
}), d = (n = null == n || n) || t.isDiscoverable(), _ = () => {
  t.isDiscoverable() ? (0, G.Ub)(a, {}) : n && (0, y.uL)(V.Z5c.CHANNEL(a, D.Z.getChannelId(a)));
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
return (0, r.jsxs)(M.Z, {
  align: M.Z.Align.CENTER,
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
      }) : (0, r.jsx)(g.Z, {
        size: g.Z.Sizes.SMALL,
        className: j.guildIconNotClickable,
        guild: t
      })
    }),
    (0, r.jsxs)(M.Z, {
      direction: M.Z.Direction.VERTICAL,
      className: s()(j.__invalid_guildInformation, j.truncatingText),
      children: [
        (0, r.jsxs)(M.Z, {
          align: M.Z.Align.CENTER,
          children: [
            (0, r.jsx)(S.Z, {
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
        (0, r.jsx)(M.Z, {
          align: M.Z.Align.CENTER,
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
  expressionSourceGuild: s,
  expressionSourceApplication: o,
  sourceType: l,
  joinedEmojiSourceGuildRecord: c,
  emoji: d,
  isFetching: _
} = (0, m.i)({
  emojiId: t.emojiId,
  refreshPositionKey: i
});
return _ ? (0, r.jsx)(F.SE, {}) : (0, r.jsx)(u.V, {
  'aria-label': t.name,
  children: (0, r.jsx)(Q, {
    node: t,
    sourceType: l,
    expressionSourceApplication: o,
    guildEmoji: null != d ? d : void 0,
    expressionSourceGuild: s,
    joinedEmojiSourceGuildRecord: c,
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
  sourceType: m,
  expressionSourceApplication: g,
  expressionSourceGuild: S,
  joinedEmojiSourceGuildRecord: O,
  closePopout: y,
  onToggleShowMoreEmojis: D,
  guildEmoji: U,
  demoMode: x = !1,
  nonce: G
} = e, K = (0, l.e7)([b.default], () => b.default.getCurrentUser()), q = (0, l.e7)([L.Z], () => L.Z.getGuildId()), Q = k.ZP.isPremium(K), $ = null != q && (q === (null == S ? void 0 : S.id) || q === (null == O ? void 0 : O.id)), J = null != O, ee = null !== (t = null == S ? void 0 : S.isDiscoverable()) && void 0 !== t && t;
x && (Q = !0, ee = !0, J = !1, $ = !1);
let et = W(),
  {
    isRoleSubscriptionEmoji: en,
    isUnusableRoleSubscriptionEmoji: er,
    userIsRoleSubscriber: ei
  } = i.useMemo(() => null == U ? {
    isRoleSubscriptionEmoji: !1,
    isUnusableRoleSubscriptionEmoji: !1,
    userIsRoleSubscriber: !1
  } : {
    isRoleSubscriptionEmoji: A.yH(U),
    isUnusableRoleSubscriptionEmoji: A.Fv(U, null != q ? q : void 0),
    userIsRoleSubscriber: N.Z.getUserSubscriptionRoles(U.guildId).size > 0
  }, [
    U,
    q
  ]),
  ea = !!er && (0, p.Ol)(null == U ? void 0 : U.guildId),
  {
    analyticsLocations: es
  } = (0, f.ZP)(E.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
(0, h.Z)({
  type: o.ImpressionTypes.MODAL,
  name: o.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
  properties: {
    location_stack: es,
    emoji_guild_id: null !== (n = null == U ? void 0 : U.guildId) && void 0 !== n ? n : null,
    emoji_id: null !== (a = null == U ? void 0 : U.id) && void 0 !== a ? a : null
  }
}, {
  disableTrack: !en
});
let eo = L.Z.getGuildId(),
  el = (0, B.a)({
    sourceType: m,
    expressionSourceApplication: g,
    isPremium: Q,
    hasJoinedEmojiSourceGuild: J,
    isRoleSubscriptionEmoji: en,
    isUnusableRoleSubscriptionEmoji: er,
    userIsRoleSubscriber: ei,
    emojiComesFromCurrentGuild: $,
    isDiscoverable: ee,
    shouldHideRoleSubscriptionCTA: ea,
    onOpenPremiumSettings: () => {
      y(), w.default.track(V.rMx.PREMIUM_PROMOTION_OPENED, {
        location_page: et.page,
        location_section: et.section
      }), (0, R.z)();
    }
  }),
  eu = J && er && !ea && (Q && en || !Q),
  ec = el.emojiDescription,
  ed = (0, T.u)({
    emojiId: u.emojiId,
    currentGuildId: eo,
    popoutData: el,
    emojiSourceGuildId: null == S ? void 0 : S.id,
    nonce: G,
    demoMode: x
  }),
  e_ = el.type === B.$.JOIN_GUILD,
  eE = el.type === B.$.GET_PREMIUM,
  [ef, eh] = i.useState(!1),
  ep = ee || J && !$ || null != S;
return (0, r.jsxs)(F.W_, {
  className: j.popoutContent,
  children: [
    (() => {
      let e = async () => {
        if (x || null == S || J)
          return;
        y();
        let e = S.id;
        try {
          await d.Z.joinGuild(e), d.Z.transitionToGuildSync(e);
        } catch {}
      }, t = !J && ee;
      return (0, r.jsxs)('div', {
        className: j.emojiSection,
        children: [
          (0, r.jsxs)(M.Z, {
            children: [
              (0, r.jsx)(_.Z, {
                className: j.primaryEmoji,
                emojiId: u.emojiId,
                emojiName: u.name,
                animated: u.animated,
                size: 'jumbo'
              }),
              (0, r.jsxs)(M.Z, {
                direction: M.Z.Direction.VERTICAL,
                justify: M.Z.Justify.CENTER,
                className: j.truncatingText,
                children: [
                  (0, r.jsx)(c.Text, {
                    variant: 'text-md/semibold',
                    children: (0, r.jsx)(P.Z, {
                      children: u.name
                    })
                  }),
                  null != ec && (0, r.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    children: ec
                  })
                ]
              })
            ]
          }),
          eE ? (0, r.jsx)(C.Z, {
            className: j.ctaButton,
            subscriptionTier: Z.Si.TIER_2,
            size: c.Button.Sizes.SMALL,
            fullWidth: !0,
            buttonText: el.text,
            onSubscribeModalClose: t => t ? e() : y(),
            postSuccessGuild: t && null != S ? S : void 0,
            premiumModalAnalyticsLocation: et
          }) : e_ ? (0, r.jsx)(c.Button, {
            size: c.Button.Sizes.SMALL,
            className: j.ctaButton,
            color: c.ButtonColors.BRAND,
            fullWidth: !0,
            onClick: e,
            children: el.text
          }) : void 0,
          eu && (0, r.jsx)(v.Z, {
            className: j.ctaButton,
            size: c.Button.Sizes.SMALL,
            fullWidth: !0,
            onClick: () => {
              y(), (null == O ? void 0 : O.id) != null && d.Z.transitionToGuildSync(O.id, {
                sourceLocationStack: [E.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL]
              }, H.oC.ROLE_SUBSCRIPTIONS);
            },
            children: ei ? Y.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_BUTTON : Y.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_BUTTON
          })
        ]
      });
    })(),
    ep && (() => {
      let e = null != S && !J && ee,
        t = () => {
          if (!!e)
            null == D || D(), !ef && !x && w.default.track(V.rMx.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, ed), eh(!ef);
        };
      return (0, r.jsxs)('div', {
        className: j.guildSection,
        children: [
          (0, r.jsx)(c.FormTitle, {
            className: j.guildTitle,
            children: J ? Y.Z.Messages.EMOJI_POPOUT_JOINED_GUILD_EMOJI_DESCRIPTION : Y.Z.Messages.EMOJI_POPOUT_UNJOINED_GUILD_EMOJI_DESCRIPTION
          }),
          (0, r.jsx)(z, {
            expressionSourceGuild: null != S ? S : I.JO.createFromGuildRecord(O),
            hasJoinedExpressionSourceGuild: J,
            isDisplayingJoinGuildButtonInPopout: e_
          }),
          e && (0, r.jsxs)(r.Fragment, {
            children: [
              (() => {
                let e = Y.Z.Messages.EMOJI_POPOUT_SHOW_MORE_EMOJIS;
                return (0, r.jsx)(c.Clickable, {
                  onClick: t,
                  className: j.showMoreEmojis,
                  children: (0, r.jsxs)(M.Z, {
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
                        className: s()(j.showMoreEmojisArrow, {
                          [j.showMoreEmojisArrowCollapsed]: !ef
                        })
                      })
                    ]
                  })
                });
              })(),
              null != u.emojiId && ef && (0, r.jsx)(X, {
                emojiId: u.emojiId,
                expressionSourceGuild: S,
                popoutData: el,
                onClose: y,
                hasJoinedEmojiSourceGuild: J,
                isDisplayingButtonInTopSection: e_ || eE
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
  popoutData: s,
  onClose: o,
  isDisplayingButtonInTopSection: l
} = e, u = (null !== (t = null == i ? void 0 : i.emojis) && void 0 !== t ? t : []).slice(0, 13).filter(e => e.id !== n).slice(0, 12), {
  type: d,
  description: E
} = s;
return (0, r.jsxs)(M.Z, {
  wrap: M.Z.Wrap.WRAP,
  align: M.Z.Align.CENTER,
  justify: M.Z.Justify.CENTER,
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
        (0, r.jsx)(C.Z, {
          subscriptionTier: Z.Si.TIER_2,
          buttonText: s.text,
          className: j.ctaButton,
          fullWidth: !0,
          onClick: () => o()
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
      children: s.text
    }) : null)
  ]
});
  };