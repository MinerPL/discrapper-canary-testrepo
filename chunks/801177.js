"use strict";
n.r(t), n.d(t, {
  default: function() {
    return k
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("627445"),
  o = n.n(r),
  u = n("748820"),
  d = n("171210"),
  c = n("65597"),
  E = n("77078"),
  f = n("206230"),
  _ = n("812204"),
  T = n("716241"),
  I = n("606292"),
  m = n("955735"),
  N = n("537325"),
  p = n("651693"),
  S = n("380986"),
  A = n("969706"),
  C = n("506885"),
  h = n("981601"),
  g = n("845579"),
  M = n("26989"),
  O = n("697218"),
  R = n("181114"),
  L = n("752531"),
  v = n("315102"),
  P = n("794818"),
  D = n("866190"),
  x = n("781083"),
  y = n("159938"),
  U = n("49111"),
  j = n("894488"),
  b = n("782340"),
  G = n("960392"),
  B = n("760238");

function k(e) {
  var t, n, l;
  let {
    embedUrl: r,
    message: k,
    channel: F
  } = e, w = (0, y.useMediaPostEmbedData)(r, k), {
    setPopout: H
  } = (0, A.default)(k.id, j.DEFAULT_POPOUTS), V = (0, S.useContextMenuMessage)(k, F, H, !0), Y = g.GifAutoPlay.useSetting(), K = (0, D.useIsWindowFocused)(), [W, z] = a.useState(!1), [Q, Z] = a.useState((null == w ? void 0 : w.coverImage) == null), J = (0, c.useStateFromStores)([f.default], () => f.default.useReducedMotion), X = (0, c.useStateFromStores)([M.default, O.default], () => {
    var e;
    return M.default.isMember(null == w ? void 0 : w.guildId, null === (e = O.default.getCurrentUser()) || void 0 === e ? void 0 : e.id)
  }, [w]), [q, $] = (0, c.useStateFromStoresArray)([M.default], () => {
    var e;
    let t = (null == w ? void 0 : w.authorId) != null ? M.default.getMember(w.guildId, w.authorId) : null;
    return [null !== (e = null == t ? void 0 : t.colorString) && void 0 !== e ? e : "inherit", null == t ? void 0 : t.colorRoleId]
  }), {
    reducedMotion: ee
  } = a.useContext(E.AccessibilityPreferencesContext), [et, en] = a.useState(!1), es = a.useCallback(() => {
    z(!0)
  }, [z]), ea = a.useCallback(() => {
    z(!1)
  }, [z]), el = a.useCallback(async () => {
    null != w && ((0, T.trackWithMetadata)(U.AnalyticEvents.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
      media_post_id: w.threadId,
      channel_id: F.id,
      can_access: w.canAccess,
      is_member: X
    }), w.canAccess ? (0, N.default)(U.Routes.CHANNEL(w.guildId, w.threadId, w.messageId)) : X ? (0, N.default)(U.Routes.CHANNEL(w.guildId, w.parentChannelId)) : await P.startLurking(w.guildId, {}, {
      channelId: w.parentChannelId
    }))
  }, [w, F, X]), ei = a.useCallback(() => (o((null == w ? void 0 : w.authorId) != null, "Author Id cannot be null when loading user profile"), (0, C.default)(w.authorId, w.avatarUrl, {
    guildId: w.guildId,
    channelId: F.id
  })), [w, F]);
  if (null == w) return null;
  let er = (e, t) => (o(null != w.authorId, "Author Id cannot be null when rendering user popout"), (0, s.jsx)(h.default, {
      ...e,
      userId: w.authorId,
      guildId: w.guildId,
      channelId: F.id,
      messageId: k.id,
      roleId: $,
      newAnalyticsLocations: t
    })),
    eo = (0, v.getAvatarDecorationURL)({
      avatarDecoration: null === (t = w.user) || void 0 === t ? void 0 : t.avatarDecoration,
      size: (0, I.getDecorationSizeForAvatarSize)(E.AvatarSizes.SIZE_40),
      canAnimate: et
    }),
    eu = null === (n = w.user) || void 0 === n ? void 0 : n.getAvatarURL(w.guildId, 40, et),
    ed = () => {
      !ee.enabled && en(e => !e)
    },
    ec = w.coverImage,
    eE = null != ec && (0, p.isAnimatedImageUrl)(ec);
  return (0, s.jsxs)("div", {
    className: G.postPreviewContainer,
    children: [(0, s.jsxs)("div", {
      className: G.thumbnailContainer,
      onMouseEnter: es,
      onMouseLeave: ea,
      children: [!Q && (!0 === w.shouldShowBlurredThumbnailImage ? (0, s.jsx)("img", {
        src: B,
        alt: b.default.Messages.MEDIA_POST_EMBED_THUMBNAIL_ALT,
        className: i(G.thumbnail, {
          [G.spoiler]: w.shouldSpoiler
        }),
        onContextMenu: V,
        onError: () => Z(!0)
      }) : (0, s.jsx)(m.default, {
        src: !(K && (Y || W)) && eE ? "".concat(ec, "?format=png") : ec,
        backgroundSrc: "".concat(ec, "?format=png"),
        alt: b.default.Messages.MEDIA_POST_EMBED_THUMBNAIL_ALT,
        aspectRatio: 16 / 9,
        className: i(G.thumbnail, {
          [G.spoiler]: w.shouldSpoiler
        }),
        imageChildClassName: G.thumbnailImage,
        onContextMenu: V,
        onError: () => Z(!0)
      })), null != w.coverImageOverlayText && (0, s.jsx)(E.Clickable, {
        onClick: el,
        children: (0, s.jsx)("div", {
          className: G.thumbnailOverlay,
          children: (0, s.jsxs)("div", {
            className: G.thumbnailOverlayCta,
            children: [(0, s.jsx)(x.default, {
              color: d.default.WHITE
            }), (0, s.jsx)(E.Text, {
              variant: "text-sm/semibold",
              color: "always-white",
              children: w.coverImageOverlayText
            })]
          })
        })
      })]
    }), (0, s.jsxs)("div", {
      className: G.descriptionContainer,
      children: [(0, s.jsxs)("div", {
        className: G.descriptionHeader,
        children: [(0, s.jsx)(E.Text, {
          variant: "text-md/semibold",
          color: "text-normal",
          className: G.descriptionHeaderText,
          children: w.title
        }), (0, s.jsx)(E.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: i(G.descriptionHeaderText, G.descriptionSubtitle),
          children: w.subtitle
        })]
      }), (0, s.jsxs)("div", {
        className: G.descriptionFooter,
        children: [null != eu && (0, s.jsx)(E.Popout, {
          renderPopout: e => er(e, [_.default.AVATAR]),
          position: "right",
          spacing: 12,
          preload: null == w.authorId ? void 0 : ei,
          children: e => (0, s.jsx)("div", {
            onMouseEnter: ed,
            onMouseLeave: ed,
            children: (0, s.jsx)(E.Avatar, {
              ...e,
              size: E.AvatarSizes.SIZE_40,
              src: eu,
              "aria-label": b.default.Messages.MEDIA_POST_EMBED_AUTHOR_AVATAR_ALT,
              avatarDecoration: eo
            })
          })
        }), (0, s.jsxs)("div", {
          className: G.descriptionFooterContainer,
          children: [(0, s.jsxs)("div", {
            className: G.descriptionFooterChannelName,
            children: [null != w.channelName && (0, s.jsx)(L.default, {
              className: G.mediaChannelIcon
            }), (0, s.jsx)(E.Clickable, {
              onClick: el,
              className: G.channelName,
              children: (0, s.jsx)(E.Heading, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: null !== (l = w.channelName) && void 0 !== l ? l : w.guildName
              })
            })]
          }), null != w.authorName && (0, s.jsx)(E.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            className: G.descriptionFooterAuthorContainer,
            children: b.default.Messages.MEDIA_POST_EMBED_FOOTER_WEB.format({
              authorName: w.authorName,
              authorNameHook: () => (0, s.jsx)(E.Popout, {
                renderPopout: e => er(e, [_.default.USERNAME]),
                position: "right",
                preload: null == w.authorId ? void 0 : ei,
                children: e => (0, s.jsx)(E.NameWithRoleAnchor, {
                  ...e,
                  name: w.authorName,
                  color: q,
                  className: G.authorName
                })
              }, (0, u.v4)())
            })
          })]
        }), w.canAccess ? (0, s.jsx)(E.Button, {
          color: E.ButtonColors.BRAND,
          onClick: el,
          children: (0, s.jsx)(E.Text, {
            variant: "text-sm/medium",
            color: "always-white",
            children: w.ctaText
          })
        }) : (0, s.jsx)(R.default, {
          pauseAnimation: J,
          onClick: el,
          className: i(G.ctaButtonContent, G.subscribeButton),
          color: E.Button.Colors.CUSTOM,
          children: (0, s.jsx)(E.Text, {
            variant: "text-sm/medium",
            color: "always-white",
            children: w.ctaText
          })
        })]
      })]
    })]
  })
}