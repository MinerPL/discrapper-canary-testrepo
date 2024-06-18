"use strict";
var s = n(735250),
  l = n(470079),
  a = n(120356),
  i = n.n(a),
  r = n(920906),
  o = n(442837),
  c = n(780384),
  d = n(481060),
  u = n(410030),
  h = n(607070),
  m = n(961675),
  g = n(883429),
  x = n(432771),
  _ = n(406074),
  f = n(434404),
  E = n(430824),
  N = n(974029),
  T = n(465670),
  C = n(41542),
  p = n(441957),
  v = n(810090),
  M = n(63063),
  S = n(595433),
  I = n(981631),
  j = n(689938),
  A = n(11777),
  R = n(906739),
  Z = n(965358),
  O = n(420196),
  b = n(433075);

function L(e) {
  let {
    handleHide: t
  } = e;
  return (0, s.jsx)(d.Clickable, {
    onClick: t,
    className: A.closeButton,
    "aria-label": j.Z.Messages.DISMISS,
    children: (0, s.jsx)(T.Z, {
      className: A.closeIcon
    })
  })
}

function P(e) {
  let {
    username: t,
    title: n,
    videoSrc: l,
    messageCount: a,
    reaction: r,
    reactionCount: o,
    classname: c
  } = e;
  return (0, s.jsxs)("div", {
    className: i()(A.videoPreview, c),
    children: [(0, s.jsx)("div", {
      className: A.authorRow,
      children: (0, s.jsxs)("div", {
        className: A.rowGroup,
        children: [(0, s.jsx)(d.Text, {
          tag: "span",
          className: A.author,
          variant: "text-sm/semibold",
          children: t
        }), (0, s.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: A.postCreationTimestamp,
          children: j.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TIMESTAMP
        })]
      })
    }), (0, s.jsx)(d.Heading, {
      variant: "heading-md/extrabold",
      className: A.title,
      color: "header-primary",
      "aria-hidden": !0,
      children: n
    }), (0, s.jsx)(d.Spacer, {
      size: 10
    }), (0, s.jsx)(v.Z, {
      className: A.video,
      src: l,
      autoPlay: !0,
      loop: !0,
      muted: !0
    }), (0, s.jsx)(d.Spacer, {
      size: 10
    }), (0, s.jsx)("div", {
      className: A.footer,
      children: (0, s.jsxs)("div", {
        className: A.forumPostControls,
        children: [(0, s.jsxs)("div", {
          className: A.messageCountBox,
          children: [(0, s.jsx)("span", {
            className: A.messageCountIcon,
            children: (0, s.jsx)(N.Z, {
              width: 16,
              height: 16
            })
          }), (0, s.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "interactive-normal",
            children: a
          })]
        }), (0, s.jsxs)("div", {
          className: A.reactionBox,
          children: [(0, s.jsx)("span", {
            role: "img",
            "aria-label": "",
            children: r
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
t.Z = e => {
  var t, n;
  let {
    channel: a
  } = e, N = (0, u.ZP)(), T = (0, c.wj)(N), v = (0, o.e7)([E.Z], () => E.Z.getGuild(a.guild_id)), D = (0, o.e7)([h.Z], () => h.Z.useReducedMotion), y = (0, o.e7)([m.Z], () => m.Z.hasHidden(a.id)), H = (0, _.C)({
    guildId: a.guild_id,
    channelId: a.id
  }), {
    transitions: w,
    setVisible: F
  } = (0, S.H)(D), U = l.useCallback(() => {
    F(!1), g.Z.hideAdminOnboarding(a.id, !0)
  }, [a, F]);
  l.useEffect(() => {
    !(0, x.c)(a.id) && F(!y)
  }, [a, F, y]);
  let k = l.useMemo(() => [j.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_FAN_ART_TAG, j.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_DESK_SETUP_TAG, j.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PETS_TAG, j.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_HOUSEPLANTS_TAG], []),
    B = l.useMemo(() => [j.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_BEHIND_THE_SCENES_TAG, j.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_EXCLUSIVE_ART_TAG, j.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PRERELEASES_TAG, j.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_TUTORIALS_TAG], []),
    G = () => {
      f.Z.open(a.guild_id, I.pNK.ROLE_SUBSCRIPTIONS)
    },
    V = null !== (t = null == v ? void 0 : v.hasFeature(I.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) && void 0 !== t && t ? j.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_HAS_TIERS_CTA : j.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_NO_TIERS_CTA,
    z = null !== (n = (null == v ? void 0 : v.hasFeature(I.oNc.CREATOR_MONETIZABLE)) || (null == v ? void 0 : v.hasFeature(I.oNc.CREATOR_MONETIZABLE_PROVISIONAL))) && void 0 !== n && n,
    W = z ? j.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_MONETIZING_TITLE : j.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_NON_MONETIZING_TITLE,
    q = z ? j.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_MONETIZING_SUBTITLE : j.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_NON_MONETIZING_SUBTITLE;
  return (0, s.jsx)(s.Fragment, {
    children: w((e, t) => t ? (0, s.jsxs)(r.animated.div, {
      style: e,
      className: A.container,
      children: [(0, s.jsxs)("div", {
        className: i()(A.__invalid_wrapper, A.headerRow),
        children: [(0, s.jsxs)(d.Text, {
          variant: "text-xs/normal",
          className: A.visibilityInfo,
          children: [(0, s.jsx)(C.Z, {
            width: 12,
            height: 12,
            className: A.icon
          }), j.Z.Messages.FORUM_CHANNEL_ONBOARDING_VISIBILITY]
        }), (0, s.jsx)(L, {
          handleHide: U
        })]
      }), (0, s.jsxs)("div", {
        className: A.contentContainer,
        children: [(0, s.jsxs)("div", {
          className: i()(A.contentRow, z && A.contentRowOne),
          children: [(0, s.jsx)("div", {
            className: i()(A.contentMediaContainer),
            children: (0, s.jsxs)("div", {
              className: A.contentVideoContainer,
              children: [(0, s.jsx)(P, {
                username: j.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_ONE,
                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                title: j.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_ONE,
                messageCount: "34",
                reaction: "⚡️",
                reactionCount: "724",
                classname: A.backgroundVideo
              }), (0, s.jsx)(P, {
                username: j.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_TWO,
                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                title: j.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_TWO,
                messageCount: "34",
                reactionCount: "84",
                reaction: "\uD83D\uDC9E",
                classname: i()(A.backgroundVideo, A.secondaryVideo)
              }), (0, s.jsx)(P, {
                username: j.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_THREE,
                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                title: j.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_THREE,
                messageCount: "7,103",
                reaction: "⚡️",
                reactionCount: "724",
                classname: A.highlightVideo
              })]
            })
          }), (0, s.jsxs)("article", {
            className: A.contentTextContainer,
            children: [(0, s.jsx)(d.Heading, {
              variant: "heading-lg/semibold",
              color: "header-primary",
              children: W
            }), (0, s.jsx)(d.Spacer, {
              size: 8
            }), (0, s.jsx)(d.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: q
            }), (0, s.jsx)(d.Spacer, {
              size: 16
            }), (0, s.jsxs)(d.Clickable, {
              onClick: () => open(M.Z.getCreatorSupportArticleURL(I.BhN.MEDIA_CHANNEL)),
              className: A.helpCenterLink,
              children: [(0, s.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-link",
                className: A.__invalid_helpCenterLinkText,
                children: j.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_HELP_CENTER
              }), (0, s.jsx)(p.Z, {
                width: 16,
                height: 16,
                className: A.helpCenterLinkIcon
              })]
            }), (0, s.jsx)(d.Spacer, {
              size: 16
            }), (0, s.jsx)("div", {
              className: A.mediaChannelTagsContainer,
              children: k.map(e => (0, s.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-normal",
                className: A.mediaChannelTag,
                children: e
              }, e))
            })]
          })]
        }), z && (0, s.jsxs)("div", {
          className: i()(A.contentRow, A.contentRowTwo),
          children: [(0, s.jsx)("div", {
            className: i()(A.contentMediaContainer),
            children: (0, s.jsxs)("div", {
              className: A.contentImageContainer,
              children: [(0, s.jsx)("img", {
                src: T ? O : b,
                alt: "",
                className: i()(A.previewEmbedImage, A.secondaryImage)
              }), (0, s.jsx)("img", {
                src: T ? R : Z,
                alt: "",
                className: A.previewEmbedImage
              })]
            })
          }), (0, s.jsxs)("article", {
            className: A.contentTextContainer,
            children: [(0, s.jsxs)(d.Text, {
              variant: "text-xxs/bold",
              className: A.serverSubPill,
              children: [j.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_SERVER_SUB_PILL, " ", (0, s.jsx)("span", {
                role: "img",
                "aria-label": "",
                children: "\uD83D\uDD25"
              })]
            }), (0, s.jsx)(d.Spacer, {
              size: 10
            }), (0, s.jsx)(d.Heading, {
              variant: "heading-lg/semibold",
              color: "header-primary",
              children: j.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_SHARE_TITLE
            }), (0, s.jsx)(d.Spacer, {
              size: 8
            }), (0, s.jsx)(d.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: j.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_SHARE_SUBTITLE
            }), (0, s.jsx)(d.Spacer, {
              size: 16
            }), (0, s.jsx)("div", {
              className: A.mediaChannelTagsContainer,
              children: B.map(e => (0, s.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-normal",
                className: A.mediaChannelTag,
                children: e
              }, e))
            }), (0, s.jsx)(d.Spacer, {
              size: 16
            }), 0 === H.length && (0, s.jsx)(d.ShinyButton, {
              size: d.Button.Sizes.MEDIUM,
              pauseAnimation: D,
              onClick: G,
              className: A.addChannelButton,
              color: d.Button.Colors.CUSTOM,
              children: V
            })]
          })]
        })]
      })]
    }) : null)
  })
}