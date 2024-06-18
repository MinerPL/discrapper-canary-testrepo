"use strict";
t.d(s, {
  Z: function() {
    return C
  }
});
var n = t(735250);
t(470079);
var i = t(120356),
  l = t.n(i),
  a = t(481060),
  r = t(596454),
  o = t(782568),
  c = t(377171),
  d = t(601964),
  u = t(346656),
  E = t(526717),
  _ = t(594278),
  I = t(549631),
  T = t(689938),
  N = t(697931);

function m(e) {
  let {
    subscribers: s
  } = e;
  return (0, n.jsxs)("div", {
    className: N.guildSubscriberCount,
    children: [(0, n.jsx)("div", {
      className: N.subscriberCountValue,
      children: (0, n.jsx)(a.Text, {
        variant: "text-md/normal",
        color: "always-white",
        children: s
      })
    }), (0, n.jsxs)("div", {
      className: N.subscriberCountText,
      children: [(0, n.jsx)(I.Z, {
        color: c.Z.WHITE
      }), (0, n.jsx)(a.Text, {
        variant: "text-md/normal",
        color: "always-white",
        children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SUBSCRIBERS_LABEL
      })]
    })]
  })
}

function S(e) {
  let {
    guildName: s,
    guildIcon: t,
    guildAvatarUrl: i,
    subscriberCount: l
  } = e, r = new d.ZP({
    name: s,
    icon: t
  });
  return (0, n.jsxs)("div", {
    className: N.guildCardHeader,
    children: [(0, n.jsx)(u.Z, {
      className: N.guildCardHeaderAvatar,
      iconSrc: i,
      guild: r,
      size: u.Z.Sizes.LARGE
    }), (0, n.jsxs)("div", {
      className: N.guildCardHeaderTitle,
      children: [(0, n.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: s
      }), null != l && (0, n.jsx)(m, {
        subscribers: l
      })]
    })]
  })
}

function h(e) {
  let {
    quote: s,
    quoteAttribution: t,
    quoteAttributionTitle: i
  } = e;
  return (0, n.jsxs)("div", {
    className: N.guildCardQuote,
    children: [(0, n.jsx)(a.Text, {
      variant: "text-lg/normal",
      color: "interactive-active",
      children: s
    }), (0, n.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "interactive-active",
      children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_QUOTE_ATTRIBUTION.format({
        attributionName: t,
        attributionTitle: null != i ? i : T.Z.Messages.GUILD_OWNER
      })
    })]
  })
}

function g(e) {
  let {
    emojisToShow: s,
    notShownEmojiCount: t,
    storePageUrl: i
  } = e, c = null != s && s.length > 0, d = () => {
    null != i && (0, o.Z)(i)
  };
  return (0, n.jsx)("div", {
    className: N.guildPremiumEmojis,
    children: c ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(a.Text, {
        variant: "text-xs/semibold",
        color: "header-primary",
        className: N.premiumEmojisTitle,
        children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_CARD_PREMIUM_EMOJI_TITLE
      }), (0, n.jsxs)("div", {
        className: N.premiumEmojisRow,
        children: [(0, n.jsxs)("div", {
          className: l()(N.emojisContainer, null != t && N.fullEmojisContainer),
          children: [s.map(e => (0, n.jsx)(r.Z, {
            className: N.emoji,
            emojiId: e.id,
            emojiName: e.name,
            animated: e.animated
          }, e.id)), null != t && (0, n.jsx)("div", {
            className: N.extraEmojiCount,
            children: (0, n.jsxs)(a.Text, {
              variant: "text-md/semibold",
              color: "text-normal",
              children: ["+", t]
            })
          })]
        }), (0, n.jsx)("div", {
          children: (0, n.jsx)(a.Button, {
            className: N.viewServerButton,
            innerClassName: N.viewServerButtonText,
            color: a.Button.Colors.CUSTOM,
            disabled: null == i,
            onClick: d,
            children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_VIEW_SERVER_CTA
          })
        })]
      })]
    }) : (0, n.jsx)(a.Button, {
      className: l()(N.viewServerButton, N.roundedEdges),
      innerClassName: N.viewServerButtonText,
      color: a.Button.Colors.CUSTOM,
      disabled: null == i,
      onClick: d,
      children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_VIEW_SERVER_CTA
    })
  })
}

function x(e) {
  let {
    highlightedCreatorGuild: s
  } = e, {
    guild_id: t,
    quote: i,
    quote_attribution: l,
    quote_attribution_title: r
  } = s, o = (0, E.Z)(t, 4, 60), {
    isLoading: c,
    hasAllImperativeDetails: d
  } = o;
  if (c) return (0, n.jsx)("div", {
    className: N.guildCard,
    children: (0, n.jsx)(a.Spinner, {})
  });
  if (!d) return null;
  let {
    guildIcon: u,
    guildName: _,
    guildAvatarUrl: I,
    subscriberCount: T,
    emojisToShow: m,
    notShownEmojiCount: x,
    storePageUrl: C
  } = o.details;
  return (0, n.jsxs)("div", {
    className: N.guildCard,
    children: [(0, n.jsx)(S, {
      guildIcon: u,
      guildName: _,
      guildAvatarUrl: I,
      subscriberCount: T
    }), (0, n.jsx)(h, {
      quote: i,
      quoteAttribution: l,
      quoteAttributionTitle: r
    }), (0, n.jsx)(g, {
      emojisToShow: m,
      notShownEmojiCount: x,
      storePageUrl: C
    })]
  })
}

function C(e) {
  let {
    highlightedCreators: s
  } = e;
  return (0, n.jsxs)("div", {
    children: [(0, n.jsx)(a.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      children: T.Z.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_GUILD_SECTION_TITLE
    }), (0, n.jsx)(a.Spacer, {
      size: 24
    }), (0, n.jsx)(_.Z, {
      carouselClassName: N.creatorGuildCarousel,
      items: s,
      renderItem: e => (0, n.jsx)(x, {
        highlightedCreatorGuild: e
      }),
      intervalBetweenAutomaticItemRotations: 7e3
    })]
  })
}