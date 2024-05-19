"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("512722"),
  o = n.n(r),
  u = n("153832"),
  d = n("831209"),
  c = n("399606"),
  f = n("481060"),
  E = n("607070"),
  _ = n("100527"),
  m = n("367907"),
  T = n("1585"),
  I = n("841762"),
  p = n("336197"),
  h = n("118139"),
  N = n("348238"),
  S = n("38267"),
  C = n("484459"),
  A = n("103575"),
  g = n("695346"),
  M = n("271383"),
  R = n("594174"),
  v = n("976644"),
  O = n("806361"),
  x = n("768581"),
  L = n("900849"),
  D = n("506071"),
  P = n("495114"),
  y = n("170140"),
  U = n("981631"),
  j = n("959517"),
  b = n("689938"),
  B = n("902168"),
  F = n("527455");

function G(e) {
  var t, n, l;
  let {
    embedUrl: r,
    message: G,
    channel: k
  } = e, w = (0, y.useMediaPostEmbedData)(r, G), {
    setPopout: H
  } = (0, S.default)(G.id, j.DEFAULT_POPOUTS), V = (0, N.useContextMenuMessage)(G, k, H, !0), Y = g.GifAutoPlay.useSetting(), K = (0, D.useIsWindowFocused)(), [W, z] = a.useState(!1), [Q, q] = a.useState((null == w ? void 0 : w.coverImage) == null), X = (0, c.useStateFromStores)([E.default], () => E.default.useReducedMotion), Z = (0, c.useStateFromStores)([M.default, R.default], () => {
    var e;
    return M.default.isMember(null == w ? void 0 : w.guildId, null === (e = R.default.getCurrentUser()) || void 0 === e ? void 0 : e.id)
  }, [w]), J = (0, c.useStateFromStores)([M.default], () => (null == w ? void 0 : w.authorId) != null ? M.default.getMember(w.guildId, w.authorId) : null), [$, ee] = a.useMemo(() => {
    var e;
    return [null !== (e = null == J ? void 0 : J.colorString) && void 0 !== e ? e : "inherit", null == J ? void 0 : J.colorRoleId]
  }, [J]), {
    reducedMotion: et
  } = a.useContext(f.AccessibilityPreferencesContext), [en, es] = a.useState(!1), ea = a.useCallback(() => {
    z(!0)
  }, [z]), el = a.useCallback(() => {
    z(!1)
  }, [z]), ei = a.useCallback(async () => {
    null != w && ((0, m.trackWithMetadata)(U.AnalyticEvents.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
      media_post_id: w.threadId,
      channel_id: k.id,
      can_access: w.canAccess,
      is_member: Z
    }), w.canAccess ? (0, p.default)(U.Routes.CHANNEL(w.guildId, w.threadId, w.messageId)) : Z ? (0, p.default)(U.Routes.CHANNEL(w.guildId, w.parentChannelId)) : await L.startLurking(w.guildId, {}, {
      channelId: w.parentChannelId
    }))
  }, [w, k, Z]), er = a.useCallback(() => (o()((null == w ? void 0 : w.authorId) != null, "Author Id cannot be null when loading user profile"), (0, C.maybeFetchUserProfileForPopout)(w.authorId, w.avatarUrl, {
    guildId: w.guildId,
    channelId: k.id
  })), [w, k]);
  if (null == w) return null;
  let eo = (e, t) => (o()(null != w.authorId, "Author Id cannot be null when rendering user popout"), (0, s.jsx)(A.default, {
      ...e,
      location: "MediaPostEmbed",
      userId: w.authorId,
      guildId: w.guildId,
      channelId: k.id,
      messageId: G.id,
      roleId: ee,
      newAnalyticsLocations: t
    })),
    eu = (0, x.getAvatarDecorationURL)({
      avatarDecoration: (null == J ? void 0 : J.avatarDecoration) != null ? null == J ? void 0 : J.avatarDecoration : null === (t = w.user) || void 0 === t ? void 0 : t.avatarDecoration,
      size: (0, T.getDecorationSizeForAvatarSize)(f.AvatarSizes.SIZE_40),
      canAnimate: en
    }),
    ed = null === (n = w.user) || void 0 === n ? void 0 : n.getAvatarURL(w.guildId, 40, en),
    ec = () => {
      !et.enabled && es(e => !e)
    },
    ef = w.coverImage,
    eE = null != ef && (0, h.isAnimatedImageUrl)(ef);
  return (0, s.jsxs)("div", {
    className: B.postPreviewContainer,
    children: [(0, s.jsxs)("div", {
      className: B.thumbnailContainer,
      onMouseEnter: ea,
      onMouseLeave: el,
      children: [!Q && (!0 === w.shouldShowBlurredThumbnailImage ? (0, s.jsx)("img", {
        src: F,
        alt: b.default.Messages.MEDIA_POST_EMBED_THUMBNAIL_ALT,
        className: i()(B.thumbnail, {
          [B.spoiler]: w.shouldSpoiler
        }),
        onContextMenu: V,
        onError: () => q(!0)
      }) : (0, s.jsx)(I.default, {
        src: !(K && (Y || W)) && eE ? "".concat(ef, "?format=png") : ef,
        backgroundSrc: "".concat(ef, "?format=png"),
        alt: b.default.Messages.MEDIA_POST_EMBED_THUMBNAIL_ALT,
        aspectRatio: 16 / 9,
        className: i()(B.thumbnail, {
          [B.spoiler]: w.shouldSpoiler
        }),
        imageChildClassName: B.thumbnailImage,
        onContextMenu: V,
        onError: () => q(!0)
      })), null != w.coverImageOverlayText && (0, s.jsx)(f.Clickable, {
        onClick: ei,
        children: (0, s.jsx)("div", {
          className: B.thumbnailOverlay,
          children: (0, s.jsxs)("div", {
            className: B.thumbnailOverlayCta,
            children: [(0, s.jsx)(P.default, {
              color: d.default.WHITE
            }), (0, s.jsx)(f.Text, {
              variant: "text-sm/semibold",
              color: "always-white",
              children: w.coverImageOverlayText
            })]
          })
        })
      })]
    }), (0, s.jsxs)("div", {
      className: B.descriptionContainer,
      children: [(0, s.jsxs)("div", {
        className: B.descriptionHeader,
        children: [(0, s.jsx)(f.Text, {
          variant: "text-md/semibold",
          color: "text-normal",
          className: B.descriptionHeaderText,
          children: w.title
        }), (0, s.jsx)(f.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: i()(B.descriptionHeaderText, B.descriptionSubtitle),
          children: w.subtitle
        })]
      }), (0, s.jsxs)("div", {
        className: B.descriptionFooter,
        children: [null != ed && (0, s.jsx)(f.Popout, {
          renderPopout: e => eo(e, [_.default.AVATAR]),
          position: "right",
          spacing: 12,
          preload: null == w.authorId ? void 0 : er,
          children: e => (0, s.jsx)("div", {
            onMouseEnter: ec,
            onMouseLeave: ec,
            children: (0, s.jsx)(f.Avatar, {
              ...e,
              size: f.AvatarSizes.SIZE_40,
              src: ed,
              "aria-label": b.default.Messages.MEDIA_POST_EMBED_AUTHOR_AVATAR_ALT,
              avatarDecoration: eu
            })
          })
        }), (0, s.jsxs)("div", {
          className: B.descriptionFooterContainer,
          children: [(0, s.jsxs)("div", {
            className: B.descriptionFooterChannelName,
            children: [null != w.channelName && (0, s.jsx)(O.default, {
              className: B.mediaChannelIcon
            }), (0, s.jsx)(f.Clickable, {
              onClick: ei,
              className: B.channelName,
              children: (0, s.jsx)(f.Heading, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: null !== (l = w.channelName) && void 0 !== l ? l : w.guildName
              })
            })]
          }), null != w.authorName && (0, s.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            className: B.descriptionFooterAuthorContainer,
            children: b.default.Messages.MEDIA_POST_EMBED_FOOTER_WEB.format({
              authorName: w.authorName,
              authorNameHook: () => (0, s.jsx)(f.Popout, {
                renderPopout: e => eo(e, [_.default.USERNAME]),
                position: "right",
                preload: null == w.authorId ? void 0 : er,
                children: e => (0, s.jsx)(f.NameWithRoleAnchor, {
                  ...e,
                  name: w.authorName,
                  color: $,
                  className: B.authorName
                })
              }, (0, u.v4)())
            })
          })]
        }), w.canAccess ? (0, s.jsx)(f.Button, {
          color: f.ButtonColors.BRAND,
          onClick: ei,
          children: (0, s.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "always-white",
            children: w.ctaText
          })
        }) : (0, s.jsx)(v.default, {
          pauseAnimation: X,
          onClick: ei,
          className: i()(B.__invalid_ctaButtonContent, B.subscribeButton),
          color: f.Button.Colors.CUSTOM,
          children: (0, s.jsx)(f.Text, {
            variant: "text-sm/medium",
            color: "always-white",
            children: w.ctaText
          })
        })]
      })]
    })]
  })
}