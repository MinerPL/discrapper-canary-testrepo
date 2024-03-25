"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
  }
});
var a = s("37983");
s("884691");
var l = s("414456"),
  n = s.n(l),
  i = s("77078"),
  r = s("430568"),
  o = s("545158"),
  d = s("20606"),
  u = s("813006"),
  c = s("476263"),
  E = s("191814"),
  _ = s("111462"),
  I = s("120856"),
  T = s("915675"),
  S = s("782340"),
  f = s("100629");

function m(e) {
  let {
    subscribers: t
  } = e;
  return (0, a.jsxs)("div", {
    className: f.guildSubscriberCount,
    children: [(0, a.jsx)("div", {
      className: f.subscriberCountValue,
      children: (0, a.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "always-white",
        children: t
      })
    }), (0, a.jsxs)("div", {
      className: f.subscriberCountText,
      children: [(0, a.jsx)(T.default, {
        color: d.default.WHITE
      }), (0, a.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "always-white",
        children: S.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SUBSCRIBERS_LABEL
      })]
    })]
  })
}

function N(e) {
  let {
    guildName: t,
    guildIcon: s,
    guildAvatarUrl: l,
    subscriberCount: n
  } = e, r = new u.default({
    name: t,
    icon: s
  });
  return (0, a.jsxs)("div", {
    className: f.guildCardHeader,
    children: [(0, a.jsx)(c.default, {
      className: f.guildCardHeaderAvatar,
      iconSrc: l,
      guild: r,
      size: c.default.Sizes.LARGE
    }), (0, a.jsxs)("div", {
      className: f.guildCardHeaderTitle,
      children: [(0, a.jsx)(i.Heading, {
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: t
      }), null != n && (0, a.jsx)(m, {
        subscribers: n
      })]
    })]
  })
}

function g(e) {
  let {
    quote: t,
    quoteAttribution: s,
    quoteAttributionTitle: l
  } = e;
  return (0, a.jsxs)("div", {
    className: f.guildCardQuote,
    children: [(0, a.jsx)(i.Text, {
      variant: "text-lg/normal",
      color: "interactive-active",
      children: t
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "interactive-active",
      children: S.default.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_QUOTE_ATTRIBUTION.format({
        attributionName: s,
        attributionTitle: null != l ? l : S.default.Messages.GUILD_OWNER
      })
    })]
  })
}

function h(e) {
  let {
    emojisToShow: t,
    notShownEmojiCount: s,
    storePageUrl: l
  } = e, d = null != t && t.length > 0, u = () => {
    null != l && (0, o.default)(l)
  };
  return (0, a.jsx)("div", {
    className: f.guildPremiumEmojis,
    children: d ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(i.Text, {
        variant: "text-xs/semibold",
        color: "header-primary",
        className: f.premiumEmojisTitle,
        children: S.default.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_CARD_PREMIUM_EMOJI_TITLE
      }), (0, a.jsxs)("div", {
        className: f.premiumEmojisRow,
        children: [(0, a.jsxs)("div", {
          className: n(f.emojisContainer, null != s && f.fullEmojisContainer),
          children: [t.map(e => (0, a.jsx)(r.default, {
            className: f.emoji,
            emojiId: e.id,
            emojiName: e.name,
            animated: e.animated
          }, e.id)), null != s && (0, a.jsx)("div", {
            className: f.extraEmojiCount,
            children: (0, a.jsxs)(i.Text, {
              variant: "text-md/semibold",
              color: "text-normal",
              children: ["+", s]
            })
          })]
        }), (0, a.jsx)("div", {
          children: (0, a.jsx)(i.Button, {
            className: f.viewServerButton,
            innerClassName: f.viewServerButtonText,
            color: i.Button.Colors.CUSTOM,
            disabled: null == l,
            onClick: u,
            children: S.default.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_VIEW_SERVER_CTA
          })
        })]
      })]
    }) : (0, a.jsx)(i.Button, {
      className: n(f.viewServerButton, f.roundedEdges),
      innerClassName: f.viewServerButtonText,
      color: i.Button.Colors.CUSTOM,
      disabled: null == l,
      onClick: u,
      children: S.default.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_VIEW_SERVER_CTA
    })
  })
}

function C(e) {
  let {
    highlightedCreatorGuild: t
  } = e, {
    guild_id: s,
    quote: l,
    quote_attribution: n,
    quote_attribution_title: r
  } = t, o = (0, _.default)(s, 4, 60), {
    isLoading: d,
    hasAllImperativeDetails: u
  } = o;
  if (d) return (0, a.jsx)("div", {
    className: f.guildCard,
    children: (0, a.jsx)(i.Spinner, {})
  });
  if (!u) return null;
  let {
    guildIcon: c,
    guildName: E,
    guildAvatarUrl: I,
    subscriberCount: T,
    emojisToShow: S,
    notShownEmojiCount: m,
    storePageUrl: C
  } = o.details;
  return (0, a.jsxs)("div", {
    className: f.guildCard,
    children: [(0, a.jsx)(N, {
      guildIcon: c,
      guildName: E,
      guildAvatarUrl: I,
      subscriberCount: T
    }), (0, a.jsx)(g, {
      quote: l,
      quoteAttribution: n,
      quoteAttributionTitle: r
    }), (0, a.jsx)(h, {
      emojisToShow: S,
      notShownEmojiCount: m,
      storePageUrl: C
    })]
  })
}

function R(e) {
  let {
    highlightedCreators: t
  } = e;
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(i.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      children: S.default.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_GUILD_SECTION_TITLE
    }), (0, a.jsx)(E.default, {
      size: 24
    }), (0, a.jsx)(I.default, {
      carouselClassName: f.creatorGuildCarousel,
      items: t,
      renderItem: e => (0, a.jsx)(C, {
        highlightedCreatorGuild: e
      }),
      intervalBetweenAutomaticItemRotations: 7e3
    })]
  })
}