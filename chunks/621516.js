"use strict";
a.r(t);
var s = a("735250"),
  n = a("470079"),
  l = a("120356"),
  r = a.n(l),
  i = a("718017"),
  o = a("442837"),
  u = a("780384"),
  d = a("481060"),
  c = a("410030"),
  m = a("607070"),
  h = a("961675"),
  f = a("883429"),
  g = a("432771"),
  x = a("406074"),
  C = a("434404"),
  _ = a("430824"),
  p = a("976644"),
  T = a("682864"),
  S = a("974029"),
  E = a("465670"),
  N = a("41542"),
  M = a("441957"),
  A = a("810090"),
  v = a("63063"),
  I = a("595433"),
  j = a("981631"),
  O = a("689938"),
  R = a("27914"),
  b = a("906739"),
  L = a("965358"),
  F = a("420196"),
  P = a("433075");

function y(e) {
  let {
    handleHide: t
  } = e;
  return (0, s.jsx)(d.Clickable, {
    onClick: t,
    className: R.closeButton,
    "aria-label": O.default.Messages.DISMISS,
    children: (0, s.jsx)(E.default, {
      className: R.closeIcon
    })
  })
}

function D(e) {
  let {
    username: t,
    title: a,
    videoSrc: n,
    messageCount: l,
    reaction: i,
    reactionCount: o,
    classname: u
  } = e;
  return (0, s.jsxs)("div", {
    className: r()(R.videoPreview, u),
    children: [(0, s.jsx)("div", {
      className: R.authorRow,
      children: (0, s.jsxs)("div", {
        className: R.rowGroup,
        children: [(0, s.jsx)(d.Text, {
          tag: "span",
          className: R.author,
          variant: "text-sm/semibold",
          children: t
        }), (0, s.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: R.postCreationTimestamp,
          children: O.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TIMESTAMP
        })]
      })
    }), (0, s.jsx)(d.Heading, {
      variant: "heading-md/extrabold",
      className: R.title,
      color: "header-primary",
      "aria-hidden": !0,
      children: a
    }), (0, s.jsx)(T.default, {
      size: 10
    }), (0, s.jsx)(A.default, {
      className: R.video,
      src: n,
      autoPlay: !0,
      loop: !0,
      muted: !0
    }), (0, s.jsx)(T.default, {
      size: 10
    }), (0, s.jsx)("div", {
      className: R.footer,
      children: (0, s.jsxs)("div", {
        className: R.forumPostControls,
        children: [(0, s.jsxs)("div", {
          className: R.messageCountBox,
          children: [(0, s.jsx)("span", {
            className: R.messageCountIcon,
            children: (0, s.jsx)(S.default, {
              width: 16,
              height: 16
            })
          }), (0, s.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "interactive-normal",
            children: l
          })]
        }), (0, s.jsxs)("div", {
          className: R.reactionBox,
          children: [(0, s.jsx)("span", {
            role: "img",
            "aria-label": "",
            children: i
          }), (0, s.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "interactive-normal",
            children: o
          })]
        })]
      })
    })]
  })
}
t.default = e => {
  var t, a;
  let {
    channel: l
  } = e, S = (0, c.default)(), E = (0, u.isThemeDark)(S), A = (0, o.useStateFromStores)([_.default], () => _.default.getGuild(l.guild_id)), w = (0, o.useStateFromStores)([m.default], () => m.default.useReducedMotion), U = (0, o.useStateFromStores)([h.default], () => h.default.hasHidden(l.id)), k = (0, x.useSubscriptionListingsForChannel)({
    guildId: l.guild_id,
    channelId: l.id
  }), {
    transitions: H,
    setVisible: B
  } = (0, I.useShowAnimation)(w), G = n.useCallback(() => {
    B(!1), f.default.hideAdminOnboarding(l.id, !0)
  }, [l, B]);
  n.useEffect(() => {
    !(0, g.isOnboardingDismissed)(l.id) && B(!U)
  }, [l, B, U]);
  let V = n.useMemo(() => [O.default.Messages.MEDIA_POST_ADMIN_EDUCATION_FAN_ART_TAG, O.default.Messages.MEDIA_POST_ADMIN_EDUCATION_DESK_SETUP_TAG, O.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PETS_TAG, O.default.Messages.MEDIA_POST_ADMIN_EDUCATION_HOUSEPLANTS_TAG], []),
    z = n.useMemo(() => [O.default.Messages.MEDIA_POST_ADMIN_EDUCATION_BEHIND_THE_SCENES_TAG, O.default.Messages.MEDIA_POST_ADMIN_EDUCATION_EXCLUSIVE_ART_TAG, O.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PRERELEASES_TAG, O.default.Messages.MEDIA_POST_ADMIN_EDUCATION_TUTORIALS_TAG], []),
    W = () => {
      C.default.open(l.guild_id, j.GuildSettingsSections.ROLE_SUBSCRIPTIONS)
    },
    K = null !== (t = null == A ? void 0 : A.hasFeature(j.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) && void 0 !== t && t ? O.default.Messages.MEDIA_POST_ADMIN_EDUCATION_HAS_TIERS_CTA : O.default.Messages.MEDIA_POST_ADMIN_EDUCATION_NO_TIERS_CTA,
    Y = null !== (a = (null == A ? void 0 : A.hasFeature(j.GuildFeatures.CREATOR_MONETIZABLE)) || (null == A ? void 0 : A.hasFeature(j.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))) && void 0 !== a && a,
    X = Y ? O.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_MONETIZING_TITLE : O.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_NON_MONETIZING_TITLE,
    q = Y ? O.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_MONETIZING_SUBTITLE : O.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_NON_MONETIZING_SUBTITLE;
  return (0, s.jsx)(s.Fragment, {
    children: H((e, t) => t ? (0, s.jsxs)(i.animated.div, {
      style: e,
      className: R.container,
      children: [(0, s.jsxs)("div", {
        className: r()(R.__invalid_wrapper, R.headerRow),
        children: [(0, s.jsxs)(d.Text, {
          variant: "text-xs/normal",
          className: R.visibilityInfo,
          children: [(0, s.jsx)(N.default, {
            width: 12,
            height: 12,
            className: R.icon
          }), O.default.Messages.FORUM_CHANNEL_ONBOARDING_VISIBILITY]
        }), (0, s.jsx)(y, {
          handleHide: G
        })]
      }), (0, s.jsxs)("div", {
        className: R.contentContainer,
        children: [(0, s.jsxs)("div", {
          className: r()(R.contentRow, Y && R.contentRowOne),
          children: [(0, s.jsx)("div", {
            className: r()(R.contentMediaContainer),
            children: (0, s.jsxs)("div", {
              className: R.contentVideoContainer,
              children: [(0, s.jsx)(D, {
                username: O.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_ONE,
                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                title: O.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_ONE,
                messageCount: "34",
                reaction: "⚡️",
                reactionCount: "724",
                classname: R.backgroundVideo
              }), (0, s.jsx)(D, {
                username: O.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_TWO,
                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                title: O.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_TWO,
                messageCount: "34",
                reactionCount: "84",
                reaction: "\uD83D\uDC9E",
                classname: r()(R.backgroundVideo, R.secondaryVideo)
              }), (0, s.jsx)(D, {
                username: O.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_THREE,
                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                title: O.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_THREE,
                messageCount: "7,103",
                reaction: "⚡️",
                reactionCount: "724",
                classname: R.highlightVideo
              })]
            })
          }), (0, s.jsxs)("article", {
            className: R.contentTextContainer,
            children: [(0, s.jsx)(d.Heading, {
              variant: "heading-lg/semibold",
              color: "header-primary",
              children: X
            }), (0, s.jsx)(T.default, {
              size: 8
            }), (0, s.jsx)(d.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: q
            }), (0, s.jsx)(T.default, {
              size: 16
            }), (0, s.jsxs)(d.Clickable, {
              onClick: () => open(v.default.getCreatorSupportArticleURL(j.HelpdeskArticles.MEDIA_CHANNEL)),
              className: R.helpCenterLink,
              children: [(0, s.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-link",
                className: R.__invalid_helpCenterLinkText,
                children: O.default.Messages.MEDIA_POST_ADMIN_EDUCATION_HELP_CENTER
              }), (0, s.jsx)(M.default, {
                width: 16,
                height: 16,
                className: R.helpCenterLinkIcon
              })]
            }), (0, s.jsx)(T.default, {
              size: 16
            }), (0, s.jsx)("div", {
              className: R.mediaChannelTagsContainer,
              children: V.map(e => (0, s.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-normal",
                className: R.mediaChannelTag,
                children: e
              }, e))
            })]
          })]
        }), Y && (0, s.jsxs)("div", {
          className: r()(R.contentRow, R.contentRowTwo),
          children: [(0, s.jsx)("div", {
            className: r()(R.contentMediaContainer),
            children: (0, s.jsxs)("div", {
              className: R.contentImageContainer,
              children: [(0, s.jsx)("img", {
                src: E ? F : P,
                alt: "",
                className: r()(R.previewEmbedImage, R.secondaryImage)
              }), (0, s.jsx)("img", {
                src: E ? b : L,
                alt: "",
                className: R.previewEmbedImage
              })]
            })
          }), (0, s.jsxs)("article", {
            className: R.contentTextContainer,
            children: [(0, s.jsxs)(d.Text, {
              variant: "text-xxs/bold",
              className: R.serverSubPill,
              children: [O.default.Messages.MEDIA_POST_ADMIN_EDUCATION_SERVER_SUB_PILL, " ", (0, s.jsx)("span", {
                role: "img",
                "aria-label": "",
                children: "\uD83D\uDD25"
              })]
            }), (0, s.jsx)(T.default, {
              size: 10
            }), (0, s.jsx)(d.Heading, {
              variant: "heading-lg/semibold",
              color: "header-primary",
              children: O.default.Messages.MEDIA_POST_ADMIN_EDUCATION_SHARE_TITLE
            }), (0, s.jsx)(T.default, {
              size: 8
            }), (0, s.jsx)(d.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: O.default.Messages.MEDIA_POST_ADMIN_EDUCATION_SHARE_SUBTITLE
            }), (0, s.jsx)(T.default, {
              size: 16
            }), (0, s.jsx)("div", {
              className: R.mediaChannelTagsContainer,
              children: z.map(e => (0, s.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-normal",
                className: R.mediaChannelTag,
                children: e
              }, e))
            }), (0, s.jsx)(T.default, {
              size: 16
            }), 0 === k.length && (0, s.jsx)(p.default, {
              size: d.Button.Sizes.MEDIUM,
              pauseAnimation: w,
              onClick: W,
              className: R.addChannelButton,
              color: d.Button.Colors.CUSTOM,
              children: K
            })]
          })]
        })]
      })]
    }) : null)
  })
}