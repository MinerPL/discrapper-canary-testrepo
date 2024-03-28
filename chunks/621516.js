"use strict";
a.r(t);
var s = a("735250"),
  n = a("470079"),
  l = a("803997"),
  r = a.n(l),
  i = a("718017"),
  o = a("442837"),
  d = a("780384"),
  u = a("481060"),
  c = a("410030"),
  m = a("607070"),
  h = a("961675"),
  f = a("883429"),
  g = a("432771"),
  x = a("406074"),
  C = a("434404"),
  _ = a("430824"),
  S = a("976644"),
  T = a("682864"),
  p = a("974029"),
  E = a("465670"),
  N = a("41542"),
  M = a("441957"),
  v = a("810090"),
  A = a("63063"),
  I = a("595433"),
  j = a("981631"),
  R = a("689938"),
  O = a("846301"),
  b = a("906739"),
  F = a("965358"),
  L = a("420196"),
  P = a("433075");

function y(e) {
  let {
    handleHide: t
  } = e;
  return (0, s.jsx)(u.Clickable, {
    onClick: t,
    className: O.closeButton,
    "aria-label": R.default.Messages.DISMISS,
    children: (0, s.jsx)(E.default, {
      className: O.closeIcon
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
    classname: d
  } = e;
  return (0, s.jsxs)("div", {
    className: r()(O.videoPreview, d),
    children: [(0, s.jsx)("div", {
      className: O.authorRow,
      children: (0, s.jsxs)("div", {
        className: O.rowGroup,
        children: [(0, s.jsx)(u.Text, {
          tag: "span",
          className: O.author,
          variant: "text-sm/semibold",
          children: t
        }), (0, s.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: O.postCreationTimestamp,
          children: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TIMESTAMP
        })]
      })
    }), (0, s.jsx)(u.Heading, {
      variant: "heading-md/extrabold",
      className: O.title,
      color: "header-primary",
      "aria-hidden": !0,
      children: a
    }), (0, s.jsx)(T.default, {
      size: 10
    }), (0, s.jsx)(v.default, {
      className: O.video,
      src: n,
      autoPlay: !0,
      loop: !0,
      muted: !0
    }), (0, s.jsx)(T.default, {
      size: 10
    }), (0, s.jsx)("div", {
      className: O.footer,
      children: (0, s.jsxs)("div", {
        className: O.forumPostControls,
        children: [(0, s.jsxs)("div", {
          className: O.messageCountBox,
          children: [(0, s.jsx)("span", {
            className: O.messageCountIcon,
            children: (0, s.jsx)(p.default, {
              width: 16,
              height: 16
            })
          }), (0, s.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "interactive-normal",
            children: l
          })]
        }), (0, s.jsxs)("div", {
          className: O.reactionBox,
          children: [(0, s.jsx)("span", {
            role: "img",
            "aria-label": "",
            children: i
          }), (0, s.jsx)(u.Text, {
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
  } = e, p = (0, c.default)(), E = (0, d.isThemeDark)(p), v = (0, o.useStateFromStores)([_.default], () => _.default.getGuild(l.guild_id)), U = (0, o.useStateFromStores)([m.default], () => m.default.useReducedMotion), w = (0, o.useStateFromStores)([h.default], () => h.default.hasHidden(l.id)), k = (0, x.useSubscriptionListingsForChannel)({
    guildId: l.guild_id,
    channelId: l.id
  }), {
    transitions: H,
    setVisible: B
  } = (0, I.useShowAnimation)(U), G = n.useCallback(() => {
    B(!1), f.default.hideAdminOnboarding(l.id, !0)
  }, [l, B]);
  n.useEffect(() => {
    !(0, g.isOnboardingDismissed)(l.id) && B(!w)
  }, [l, B, w]);
  let V = n.useMemo(() => [R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_FAN_ART_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_DESK_SETUP_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PETS_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_HOUSEPLANTS_TAG], []),
    W = n.useMemo(() => [R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_BEHIND_THE_SCENES_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_EXCLUSIVE_ART_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PRERELEASES_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_TUTORIALS_TAG], []),
    z = () => {
      C.default.open(l.guild_id, j.GuildSettingsSections.ROLE_SUBSCRIPTIONS)
    },
    K = null !== (t = null == v ? void 0 : v.hasFeature(j.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) && void 0 !== t && t ? R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_HAS_TIERS_CTA : R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_NO_TIERS_CTA,
    Y = null !== (a = (null == v ? void 0 : v.hasFeature(j.GuildFeatures.CREATOR_MONETIZABLE)) || (null == v ? void 0 : v.hasFeature(j.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))) && void 0 !== a && a,
    X = Y ? R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_MONETIZING_TITLE : R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_NON_MONETIZING_TITLE,
    Z = Y ? R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_MONETIZING_SUBTITLE : R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_NON_MONETIZING_SUBTITLE;
  return (0, s.jsx)(s.Fragment, {
    children: H((e, t) => t ? (0, s.jsxs)(i.animated.div, {
      style: e,
      className: O.container,
      children: [(0, s.jsxs)("div", {
        className: r()(O.__invalid_wrapper, O.headerRow),
        children: [(0, s.jsxs)(u.Text, {
          variant: "text-xs/normal",
          className: O.visibilityInfo,
          children: [(0, s.jsx)(N.default, {
            width: 12,
            height: 12,
            className: O.icon
          }), R.default.Messages.FORUM_CHANNEL_ONBOARDING_VISIBILITY]
        }), (0, s.jsx)(y, {
          handleHide: G
        })]
      }), (0, s.jsxs)("div", {
        className: O.contentContainer,
        children: [(0, s.jsxs)("div", {
          className: r()(O.contentRow, Y && O.contentRowOne),
          children: [(0, s.jsx)("div", {
            className: r()(O.contentMediaContainer),
            children: (0, s.jsxs)("div", {
              className: O.contentVideoContainer,
              children: [(0, s.jsx)(D, {
                username: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_ONE,
                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                title: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_ONE,
                messageCount: "34",
                reaction: "⚡️",
                reactionCount: "724",
                classname: O.backgroundVideo
              }), (0, s.jsx)(D, {
                username: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_TWO,
                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                title: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_TWO,
                messageCount: "34",
                reactionCount: "84",
                reaction: "\uD83D\uDC9E",
                classname: r()(O.backgroundVideo, O.secondaryVideo)
              }), (0, s.jsx)(D, {
                username: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_THREE,
                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                title: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_THREE,
                messageCount: "7,103",
                reaction: "⚡️",
                reactionCount: "724",
                classname: O.highlightVideo
              })]
            })
          }), (0, s.jsxs)("article", {
            className: O.contentTextContainer,
            children: [(0, s.jsx)(u.Heading, {
              variant: "heading-lg/semibold",
              color: "header-primary",
              children: X
            }), (0, s.jsx)(T.default, {
              size: 8
            }), (0, s.jsx)(u.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: Z
            }), (0, s.jsx)(T.default, {
              size: 16
            }), (0, s.jsxs)(u.Clickable, {
              onClick: () => open(A.default.getCreatorSupportArticleURL(j.HelpdeskArticles.MEDIA_CHANNEL)),
              className: O.helpCenterLink,
              children: [(0, s.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: "text-link",
                className: O.__invalid_helpCenterLinkText,
                children: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_HELP_CENTER
              }), (0, s.jsx)(M.default, {
                width: 16,
                height: 16,
                className: O.helpCenterLinkIcon
              })]
            }), (0, s.jsx)(T.default, {
              size: 16
            }), (0, s.jsx)("div", {
              className: O.mediaChannelTagsContainer,
              children: V.map(e => (0, s.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: "text-normal",
                className: O.mediaChannelTag,
                children: e
              }, e))
            })]
          })]
        }), Y && (0, s.jsxs)("div", {
          className: r()(O.contentRow, O.contentRowTwo),
          children: [(0, s.jsx)("div", {
            className: r()(O.contentMediaContainer),
            children: (0, s.jsxs)("div", {
              className: O.contentImageContainer,
              children: [(0, s.jsx)("img", {
                src: E ? L : P,
                alt: "",
                className: r()(O.previewEmbedImage, O.secondaryImage)
              }), (0, s.jsx)("img", {
                src: E ? b : F,
                alt: "",
                className: O.previewEmbedImage
              })]
            })
          }), (0, s.jsxs)("article", {
            className: O.contentTextContainer,
            children: [(0, s.jsxs)(u.Text, {
              variant: "text-xxs/bold",
              className: O.serverSubPill,
              children: [R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_SERVER_SUB_PILL, " ", (0, s.jsx)("span", {
                role: "img",
                "aria-label": "",
                children: "\uD83D\uDD25"
              })]
            }), (0, s.jsx)(T.default, {
              size: 10
            }), (0, s.jsx)(u.Heading, {
              variant: "heading-lg/semibold",
              color: "header-primary",
              children: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_SHARE_TITLE
            }), (0, s.jsx)(T.default, {
              size: 8
            }), (0, s.jsx)(u.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_SHARE_SUBTITLE
            }), (0, s.jsx)(T.default, {
              size: 16
            }), (0, s.jsx)("div", {
              className: O.mediaChannelTagsContainer,
              children: W.map(e => (0, s.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: "text-normal",
                className: O.mediaChannelTag,
                children: e
              }, e))
            }), (0, s.jsx)(T.default, {
              size: 16
            }), 0 === k.length && (0, s.jsx)(S.default, {
              size: u.Button.Sizes.MEDIUM,
              pauseAnimation: U,
              onClick: z,
              className: O.addChannelButton,
              color: u.Button.Colors.CUSTOM,
              children: K
            })]
          })]
        })]
      })]
    }) : null)
  })
}