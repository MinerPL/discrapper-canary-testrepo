"use strict";
s.r(t), s.d(t, {
  default: function() {
    return w
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  r = s.n(l),
  i = s("907002"),
  o = s("446674"),
  u = s("819855"),
  d = s("77078"),
  c = s("841098"),
  m = s("206230"),
  h = s("526812"),
  f = s("404607"),
  g = s("258039"),
  x = s("291444"),
  C = s("592407"),
  T = s("305961"),
  _ = s("181114"),
  S = s("191814"),
  p = s("109264"),
  E = s("945330"),
  N = s("68238"),
  M = s("758710"),
  A = s("58608"),
  v = s("701909"),
  I = s("753582"),
  j = s("49111"),
  R = s("782340"),
  O = s("528639"),
  F = s("112545"),
  L = s("600310"),
  b = s("129185"),
  P = s("338283");

function y(e) {
  let {
    handleHide: t
  } = e;
  return (0, a.jsx)(d.Clickable, {
    onClick: t,
    className: O.closeButton,
    "aria-label": R.default.Messages.DISMISS,
    children: (0, a.jsx)(E.default, {
      className: O.closeIcon
    })
  })
}

function D(e) {
  let {
    username: t,
    title: s,
    videoSrc: n,
    messageCount: l,
    reaction: i,
    reactionCount: o,
    classname: u
  } = e;
  return (0, a.jsxs)("div", {
    className: r(O.videoPreview, u),
    children: [(0, a.jsx)("div", {
      className: O.authorRow,
      children: (0, a.jsxs)("div", {
        className: O.rowGroup,
        children: [(0, a.jsx)(d.Text, {
          tag: "span",
          className: O.author,
          variant: "text-sm/semibold",
          children: t
        }), (0, a.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: O.postCreationTimestamp,
          children: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TIMESTAMP
        })]
      })
    }), (0, a.jsx)(d.Heading, {
      variant: "heading-md/extrabold",
      className: O.title,
      color: "header-primary",
      "aria-hidden": !0,
      children: s
    }), (0, a.jsx)(S.default, {
      size: 10
    }), (0, a.jsx)(A.default, {
      className: O.video,
      src: n,
      autoPlay: !0,
      loop: !0,
      muted: !0
    }), (0, a.jsx)(S.default, {
      size: 10
    }), (0, a.jsx)("div", {
      className: O.footer,
      children: (0, a.jsxs)("div", {
        className: O.forumPostControls,
        children: [(0, a.jsxs)("div", {
          className: O.messageCountBox,
          children: [(0, a.jsx)("span", {
            className: O.messageCountIcon,
            children: (0, a.jsx)(p.default, {
              width: 16,
              height: 16
            })
          }), (0, a.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "interactive-normal",
            children: l
          })]
        }), (0, a.jsxs)("div", {
          className: O.reactionBox,
          children: [(0, a.jsx)("span", {
            role: "img",
            "aria-label": "",
            children: i
          }), (0, a.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "interactive-normal",
            children: o
          })]
        })]
      })
    })]
  })
}
var w = e => {
  var t, s;
  let {
    channel: l
  } = e, p = (0, c.default)(), E = (0, u.isThemeDark)(p), A = (0, o.useStateFromStores)([T.default], () => T.default.getGuild(l.guild_id)), w = (0, o.useStateFromStores)([m.default], () => m.default.useReducedMotion), U = (0, o.useStateFromStores)([h.default], () => h.default.hasHidden(l.id)), k = (0, x.useSubscriptionListingsForChannel)({
    guildId: l.guild_id,
    channelId: l.id
  }), {
    transitions: H,
    setVisible: B
  } = (0, I.useShowAnimation)(w), G = n.useCallback(() => {
    B(!1), f.default.hideAdminOnboarding(l.id, !0)
  }, [l, B]);
  n.useEffect(() => {
    let e = (0, g.isOnboardingDismissed)(l.id);
    !e && B(!U)
  }, [l, B, U]);
  let V = n.useMemo(() => [R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_FAN_ART_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_DESK_SETUP_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PETS_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_HOUSEPLANTS_TAG], []),
    z = n.useMemo(() => [R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_BEHIND_THE_SCENES_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_EXCLUSIVE_ART_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PRERELEASES_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_TUTORIALS_TAG], []),
    W = () => {
      C.default.open(l.guild_id, j.GuildSettingsSections.ROLE_SUBSCRIPTIONS)
    },
    K = null !== (t = null == A ? void 0 : A.hasFeature(j.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) && void 0 !== t && t,
    Y = K ? R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_HAS_TIERS_CTA : R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_NO_TIERS_CTA,
    X = null !== (s = (null == A ? void 0 : A.hasFeature(j.GuildFeatures.CREATOR_MONETIZABLE)) || (null == A ? void 0 : A.hasFeature(j.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))) && void 0 !== s && s,
    Z = X ? R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_MONETIZING_TITLE : R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_NON_MONETIZING_TITLE,
    q = X ? R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_MONETIZING_SUBTITLE : R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_NON_MONETIZING_SUBTITLE;
  return (0, a.jsx)(a.Fragment, {
    children: H((e, t) => t ? (0, a.jsxs)(i.animated.div, {
      style: e,
      className: O.container,
      children: [(0, a.jsxs)("div", {
        className: r(O.wrapper, O.headerRow),
        children: [(0, a.jsxs)(d.Text, {
          variant: "text-xs/normal",
          className: O.visibilityInfo,
          children: [(0, a.jsx)(N.default, {
            width: 12,
            height: 12,
            className: O.icon
          }), R.default.Messages.FORUM_CHANNEL_ONBOARDING_VISIBILITY]
        }), (0, a.jsx)(y, {
          handleHide: G
        })]
      }), (0, a.jsxs)("div", {
        className: O.contentContainer,
        children: [(0, a.jsxs)("div", {
          className: r(O.contentRow, X && O.contentRowOne),
          children: [(0, a.jsx)("div", {
            className: r(O.contentMediaContainer),
            children: (0, a.jsxs)("div", {
              className: O.contentVideoContainer,
              children: [(0, a.jsx)(D, {
                username: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_ONE,
                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                title: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_ONE,
                messageCount: "34",
                reaction: "⚡️",
                reactionCount: "724",
                classname: O.backgroundVideo
              }), (0, a.jsx)(D, {
                username: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_TWO,
                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                title: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_TWO,
                messageCount: "34",
                reactionCount: "84",
                reaction: "\uD83D\uDC9E",
                classname: r(O.backgroundVideo, O.secondaryVideo)
              }), (0, a.jsx)(D, {
                username: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_THREE,
                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                title: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_THREE,
                messageCount: "7,103",
                reaction: "⚡️",
                reactionCount: "724",
                classname: O.highlightVideo
              })]
            })
          }), (0, a.jsxs)("article", {
            className: O.contentTextContainer,
            children: [(0, a.jsx)(d.Heading, {
              variant: "heading-lg/semibold",
              color: "header-primary",
              children: Z
            }), (0, a.jsx)(S.default, {
              size: 8
            }), (0, a.jsx)(d.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: q
            }), (0, a.jsx)(S.default, {
              size: 16
            }), (0, a.jsxs)(d.Clickable, {
              onClick: () => open(v.default.getCreatorSupportArticleURL(j.HelpdeskArticles.MEDIA_CHANNEL)),
              className: O.helpCenterLink,
              children: [(0, a.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-link",
                className: O.helpCenterLinkText,
                children: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_HELP_CENTER
              }), (0, a.jsx)(M.default, {
                width: 16,
                height: 16,
                className: O.helpCenterLinkIcon
              })]
            }), (0, a.jsx)(S.default, {
              size: 16
            }), (0, a.jsx)("div", {
              className: O.mediaChannelTagsContainer,
              children: V.map(e => (0, a.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-normal",
                className: O.mediaChannelTag,
                children: e
              }, e))
            })]
          })]
        }), X && (0, a.jsxs)("div", {
          className: r(O.contentRow, O.contentRowTwo),
          children: [(0, a.jsx)("div", {
            className: r(O.contentMediaContainer),
            children: (0, a.jsxs)("div", {
              className: O.contentImageContainer,
              children: [(0, a.jsx)("img", {
                src: E ? b : P,
                alt: "",
                className: r(O.previewEmbedImage, O.secondaryImage)
              }), (0, a.jsx)("img", {
                src: E ? F : L,
                alt: "",
                className: O.previewEmbedImage
              })]
            })
          }), (0, a.jsxs)("article", {
            className: O.contentTextContainer,
            children: [(0, a.jsxs)(d.Text, {
              variant: "text-xxs/bold",
              className: O.serverSubPill,
              children: [R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_SERVER_SUB_PILL, " ", (0, a.jsx)("span", {
                role: "img",
                "aria-label": "",
                children: "\uD83D\uDD25"
              })]
            }), (0, a.jsx)(S.default, {
              size: 10
            }), (0, a.jsx)(d.Heading, {
              variant: "heading-lg/semibold",
              color: "header-primary",
              children: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_SHARE_TITLE
            }), (0, a.jsx)(S.default, {
              size: 8
            }), (0, a.jsx)(d.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_SHARE_SUBTITLE
            }), (0, a.jsx)(S.default, {
              size: 16
            }), (0, a.jsx)("div", {
              className: O.mediaChannelTagsContainer,
              children: z.map(e => (0, a.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-normal",
                className: O.mediaChannelTag,
                children: e
              }, e))
            }), (0, a.jsx)(S.default, {
              size: 16
            }), 0 === k.length && (0, a.jsx)(_.default, {
              size: d.Button.Sizes.MEDIUM,
              pauseAnimation: w,
              onClick: W,
              className: O.addChannelButton,
              color: d.Button.Colors.CUSTOM,
              children: Y
            })]
          })]
        })]
      })]
    }) : null)
  })
}