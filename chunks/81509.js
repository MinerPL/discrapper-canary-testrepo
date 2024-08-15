n.d(t, {
  Z: function() {
return x;
  }
});
var s = n(735250);
n(470079);
var a = n(120356),
  i = n.n(a),
  r = n(481060),
  l = n(596454),
  o = n(782568),
  c = n(377171),
  d = n(565138),
  u = n(601964),
  _ = n(526717),
  I = n(594278),
  E = n(549631),
  T = n(689938),
  m = n(529330);

function N(e) {
  let {
subscribers: t
  } = e;
  return (0, s.jsxs)('div', {
className: m.guildSubscriberCount,
children: [
  (0, s.jsx)('div', {
    className: m.subscriberCountValue,
    children: (0, s.jsx)(r.Text, {
      variant: 'text-md/normal',
      color: 'always-white',
      children: t
    })
  }),
  (0, s.jsxs)('div', {
    className: m.subscriberCountText,
    children: [
      (0, s.jsx)(E.Z, {
        color: c.Z.WHITE
      }),
      (0, s.jsx)(r.Text, {
        variant: 'text-md/normal',
        color: 'always-white',
        children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SUBSCRIBERS_LABEL
      })
    ]
  })
]
  });
}

function S(e) {
  let {
guildName: t,
guildIcon: n,
guildAvatarUrl: a,
subscriberCount: i
  } = e, l = new u.ZP({
name: t,
icon: n
  });
  return (0, s.jsxs)('div', {
className: m.guildCardHeader,
children: [
  (0, s.jsx)(d.Z, {
    className: m.guildCardHeaderAvatar,
    iconSrc: a,
    guild: l,
    size: d.Z.Sizes.LARGE
  }),
  (0, s.jsxs)('div', {
    className: m.guildCardHeaderTitle,
    children: [
      (0, s.jsx)(r.Heading, {
        variant: 'heading-lg/semibold',
        color: 'header-primary',
        children: t
      }),
      null != i && (0, s.jsx)(N, {
        subscribers: i
      })
    ]
  })
]
  });
}

function h(e) {
  let {
quote: t,
quoteAttribution: n,
quoteAttributionTitle: a
  } = e;
  return (0, s.jsxs)('div', {
className: m.guildCardQuote,
children: [
  (0, s.jsx)(r.Text, {
    variant: 'text-lg/normal',
    color: 'interactive-active',
    children: t
  }),
  (0, s.jsx)(r.Text, {
    variant: 'text-md/normal',
    color: 'interactive-active',
    children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_QUOTE_ATTRIBUTION.format({
      attributionName: n,
      attributionTitle: null != a ? a : T.Z.Messages.GUILD_OWNER
    })
  })
]
  });
}

function g(e) {
  let {
emojisToShow: t,
notShownEmojiCount: n,
storePageUrl: a
  } = e, c = null != t && t.length > 0, d = () => {
null != a && (0, o.Z)(a);
  };
  return (0, s.jsx)('div', {
className: m.guildPremiumEmojis,
children: c ? (0, s.jsxs)(s.Fragment, {
  children: [
    (0, s.jsx)(r.Text, {
      variant: 'text-xs/semibold',
      color: 'header-primary',
      className: m.premiumEmojisTitle,
      children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_CARD_PREMIUM_EMOJI_TITLE
    }),
    (0, s.jsxs)('div', {
      className: m.premiumEmojisRow,
      children: [
        (0, s.jsxs)('div', {
          className: i()(m.emojisContainer, null != n && m.fullEmojisContainer),
          children: [
            t.map(e => (0, s.jsx)(l.Z, {
              className: m.emoji,
              emojiId: e.id,
              emojiName: e.name,
              animated: e.animated
            }, e.id)),
            null != n && (0, s.jsx)('div', {
              className: m.extraEmojiCount,
              children: (0, s.jsxs)(r.Text, {
                variant: 'text-md/semibold',
                color: 'text-normal',
                children: [
                  '+',
                  n
                ]
              })
            })
          ]
        }),
        (0, s.jsx)('div', {
          children: (0, s.jsx)(r.Button, {
            className: m.viewServerButton,
            innerClassName: m.viewServerButtonText,
            color: r.Button.Colors.CUSTOM,
            disabled: null == a,
            onClick: d,
            children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_VIEW_SERVER_CTA
          })
        })
      ]
    })
  ]
}) : (0, s.jsx)(r.Button, {
  className: i()(m.viewServerButton, m.roundedEdges),
  innerClassName: m.viewServerButtonText,
  color: r.Button.Colors.CUSTOM,
  disabled: null == a,
  onClick: d,
  children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_VIEW_SERVER_CTA
})
  });
}

function C(e) {
  let {
highlightedCreatorGuild: t
  } = e, {
guild_id: n,
quote: a,
quote_attribution: i,
quote_attribution_title: l
  } = t, o = (0, _.Z)(n, 4, 60), {
isLoading: c,
hasAllImperativeDetails: d
  } = o;
  if (c)
return (0, s.jsx)('div', {
  className: m.guildCard,
  children: (0, s.jsx)(r.Spinner, {})
});
  if (!d)
return null;
  let {
guildIcon: u,
guildName: I,
guildAvatarUrl: E,
subscriberCount: T,
emojisToShow: N,
notShownEmojiCount: C,
storePageUrl: x
  } = o.details;
  return (0, s.jsxs)('div', {
className: m.guildCard,
children: [
  (0, s.jsx)(S, {
    guildIcon: u,
    guildName: I,
    guildAvatarUrl: E,
    subscriberCount: T
  }),
  (0, s.jsx)(h, {
    quote: a,
    quoteAttribution: i,
    quoteAttributionTitle: l
  }),
  (0, s.jsx)(g, {
    emojisToShow: N,
    notShownEmojiCount: C,
    storePageUrl: x
  })
]
  });
}

function x(e) {
  let {
highlightedCreators: t
  } = e;
  return (0, s.jsxs)('div', {
children: [
  (0, s.jsx)(r.Heading, {
    variant: 'heading-lg/semibold',
    color: 'header-primary',
    children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_GUILD_SECTION_TITLE
  }),
  (0, s.jsx)(r.Spacer, {
    size: 24
  }),
  (0, s.jsx)(I.Z, {
    carouselClassName: m.creatorGuildCarousel,
    items: t,
    renderItem: e => (0, s.jsx)(C, {
      highlightedCreatorGuild: e
    }),
    intervalBetweenAutomaticItemRotations: 7000
  })
]
  });
}