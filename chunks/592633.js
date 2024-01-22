"use strict";
s.r(t), s.d(t, {
  default: function() {
    return V
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  r = s.n(l),
  i = s("335710"),
  o = s("446674"),
  u = s("669491"),
  d = s("77078"),
  c = s("125667"),
  m = s("955735"),
  h = s("963119"),
  f = s("651693"),
  g = s("605160"),
  x = s("70845"),
  C = s("933629"),
  T = s("845579"),
  _ = s("982108"),
  S = s("42203"),
  p = s("957255"),
  E = s("594098"),
  N = s("887718"),
  M = s("95689"),
  A = s("132755"),
  v = s("497880"),
  I = s("956089"),
  j = s("680986"),
  R = s("612278"),
  O = s("791234"),
  F = s("512630"),
  L = s("152637"),
  b = s("363622"),
  P = s("855455"),
  y = s("136460"),
  D = s("601016"),
  w = s("485055"),
  U = s("390083"),
  k = s("953371"),
  H = s("49111"),
  B = s("782340"),
  G = s("507134"),
  V = n.memo(function(e) {
    let {
      id: t,
      threadId: s,
      goToThread: n,
      overrideMedia: l,
      className: r,
      coords: i,
      gridCoords: u,
      gridSectionBoundaries: d,
      observePostVisibilityAnalytics: c
    } = e, m = (0, o.useStateFromStores)([S.default], () => S.default.getChannel(s));
    return null == m ? null : (0, a.jsx)(z, {
      id: t,
      channel: m,
      goToThread: n,
      overrideMedia: l,
      className: r,
      coords: i,
      gridCoords: u,
      observePostVisibilityAnalytics: c,
      gridSectionBoundaries: d
    })
  });

function z(e) {
  let {
    id: t,
    channel: s,
    goToThread: l,
    overrideMedia: c,
    className: m,
    coords: h,
    gridCoords: f,
    gridSectionBoundaries: g,
    observePostVisibilityAnalytics: C
  } = e, E = (0, o.useStateFromStores)([S.default], () => S.default.getChannel(s.parent_id)), N = s.id, M = n.useRef(null), A = (0, o.useStateFromStores)([_.default], () => _.default.getCurrentSidebarChannelId(s.parent_id) === s.id), {
    firstMessage: v,
    loaded: F
  } = (0, R.useFirstForumPostMessage)(s), {
    firstMedia: P
  } = (0, j.useForumPostFirstMessageMarkup)({
    firstMessage: v,
    formatInline: !1,
    noStyleAndInteraction: !1
  }), {
    messageCountText: V
  } = (0, j.useMessageCount)(s), {
    isNew: z,
    hasUnreads: K
  } = (0, j.useForumPostReadStates)(s), Y = n.useRef(null), {
    handleLeftClick: Z,
    handleRightClick: Q
  } = (0, U.default)({
    facepileRef: Y,
    goToThread: l,
    channel: s
  });
  n.useEffect(() => {
    null == C || C(M.current, N)
  }, [C, N]);
  let J = (0, o.useStateFromStores)([p.default], () => p.default.can(H.Permissions.MANAGE_MESSAGES, s)),
    $ = T.GifAutoPlay.useSetting(),
    ee = T.RenderSpoilers.useSetting(),
    et = (0, x.default)(ee, J),
    es = (0, O.useForumPostMediaThumbnail)(v, E, !1),
    [ea, en] = (0, b.getFrameDimensions)(h.width - 2 * b.IMAGE_PADDING),
    el = (0, j.useLastActiveTimestamp)(s, i.ThreadSortOrder.CREATION_DATE, k.ForumTimestampFormats.POSTED_DURATION_AGO),
    er = (0, L.useHighlightedChannelName)(s),
    ei = (null == v ? void 0 : v.blocked) || null == (null != c ? c : P),
    {
      onFocus: eo,
      ...eu
    } = (0, w.useForumGridItem)({
      id: t,
      row: f.row,
      column: f.column,
      section: f.section,
      boundaries: g
    }),
    ed = s.isMediaPost();
  return (0, a.jsxs)("li", {
    ref: M,
    onClick: Z,
    onFocus: eo,
    onContextMenu: Q,
    className: r(G.container, m, {
      [G.isOpen]: A
    }),
    style: {
      ...h
    },
    children: [(0, a.jsx)(d.Clickable, {
      onClick: Z,
      focusProps: {
        ringTarget: M
      },
      onContextMenu: Q,
      "aria-label": B.default.Messages.FORUM_POST_ARIA_LABEL.format({
        title: s.name,
        count: V
      }),
      className: G.focusTarget,
      ...eu
    }), (0, a.jsxs)("div", {
      className: G.header,
      children: [(0, a.jsxs)("div", {
        className: G.authorRow,
        children: [(0, a.jsxs)("div", {
          className: G.rowGroup,
          children: [(0, a.jsx)(y.default, {
            channel: s,
            message: v
          }), (0, a.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: G.postCreationTimestamp,
            children: el
          })]
        }), z ? (0, a.jsx)(I.TextBadge, {
          className: r(G.newBadge),
          color: u.default.unsafe_rawColors.BRAND_260.css,
          text: B.default.Messages.NEW
        }) : null]
      }), (0, a.jsx)(d.HeadingLevel, {
        children: (0, a.jsx)(d.Heading, {
          variant: "heading-md/extrabold",
          className: G.title,
          color: K ? "header-primary" : "text-muted",
          style: {
            width: "".concat(h.width - 2 * b.GRID_POST_CONTROLS_MARGIN, "px")
          },
          children: er
        })
      })]
    }), (0, a.jsx)("div", {
      className: G.postBody,
      children: (0, a.jsx)(d.FocusBlock, {
        children: ei ? (0, a.jsx)(q, {
          channel: s,
          firstMessage: v,
          isFirstMessageLoaded: F,
          containerWidth: h.width,
          hasUnreads: K
        }) : (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(X, {
            mediaAttachments: es,
            globalSpoilerRenderSetting: et,
            containerWidth: ea,
            containerHeight: ed ? ea * (9 / 16) : en,
            canAutoPlay: $,
            shouldMaintainAspectRatio: ed
          }), (0, a.jsx)("div", {
            className: G.tagsRow,
            children: (0, a.jsx)(D.default, {
              channel: s,
              tagsClassName: G.tagPill
            })
          })]
        })
      })
    }), (0, a.jsx)("div", {
      className: G.footer,
      children: (0, a.jsx)(d.FocusBlock, {
        children: (0, a.jsx)(W, {
          channel: s,
          firstMessage: v,
          facepileRef: Y
        })
      })
    })]
  })
}

function W(e) {
  let {
    channel: t,
    facepileRef: s,
    firstMessage: n
  } = e, l = (0, j.useTypingUserIds)(t), r = (null == n ? void 0 : n.reactions) != null && n.reactions.length > 0;
  return (0, a.jsxs)("div", {
    className: G.forumPostControls,
    children: [(0, a.jsxs)("div", {
      className: G.controlsGroup,
      children: [(0, a.jsx)("div", {
        className: G.messageCountContainer,
        children: (0, a.jsx)(L.MessageCount, {
          channel: t,
          iconSize: 16,
          showReadState: !0
        })
      }), l.length > 0 ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("span", {
          className: G.bullet,
          children: "•"
        }), (0, a.jsxs)("div", {
          className: G.typing,
          children: [(0, a.jsx)(L.Facepile, {
            channel: t,
            userIds: l,
            facepileRef: s
          }), (0, a.jsx)("div", {
            className: G.dots,
            children: (0, a.jsx)(d.Dots, {
              themed: !0,
              dotRadius: 2
            })
          }), (0, a.jsx)(c.default, {
            channel: t,
            className: G.typingUsers,
            renderDots: !1
          })]
        })]
      }) : null]
    }), (0, a.jsxs)("div", {
      className: G.controlsGroup,
      children: [r || null == n ? null : (0, a.jsx)(L.DefaultReaction, {
        firstMessage: n,
        channel: t
      }), null == n ? null : (0, a.jsx)(L.MostUsedReaction, {
        firstMessage: n,
        channel: t
      })]
    })]
  })
}
let K = e => e.preventDefault(),
  Y = n.memo(function(e) {
    return (0, a.jsx)(a.Fragment, {
      children: (0, C.renderImageComponent)(e)
    })
  }),
  X = n.memo(function(e) {
    let {
      mediaAttachments: t,
      globalSpoilerRenderSetting: s,
      containerWidth: l,
      containerHeight: i,
      canAutoPlay: o,
      shouldMaintainAspectRatio: u = !1
    } = e, {
      containsVideo: d,
      containsGif: c
    } = n.useMemo(() => (0, O.messageContainsGifOrVideo)(t), [t]), x = n.useMemo(() => t.slice(P.MOSAIC_MIN_INDEX, P.MOSAIC_MAX_INDEX), [t]), C = (0, P.useImageContainerStyles)({
      numAttachments: x.length,
      containerWidth: l,
      containerHeight: i
    }), T = (0, P.useImageDimensionStyles)({
      imageContainerStyles: C,
      containerWidth: l,
      containerHeight: i
    }), _ = (0, h.useShouldRedactExplicitContentForForum)(), S = n.useMemo(() => x.map((e, t) => {
      var n;
      let [l, i] = (0, g.getForumPostShouldObscure)(e, !s, _), h = (0, g.getObscuredAlt)(i), x = {
        ...T[t],
        src: e.src,
        width: e.width,
        height: e.height,
        alt: null != e.alt && l ? h : e.alt,
        onClick: K,
        shouldRenderAccessory: !c && !d
      }, S = (0, f.isAnimatedImageUrl)(e.src) ? "".concat(e.src, "?format=png") : e.src, p = o && !l ? e.src : S;
      return (0, a.jsxs)("div", {
        className: G.bodyMediaFrame,
        style: C[t],
        children: [u ? (0, a.jsx)(m.default, {
          ...x,
          src: p,
          backgroundSrc: S,
          aspectRatio: x.maxWidth / x.maxHeight,
          alt: null !== (n = x.alt) && void 0 !== n ? n : "",
          className: r(G.mediaPostContainer, {
            [G.obscured]: l
          }),
          imageChildClassName: G.mediaPostThumbnail
        }) : e.src.startsWith("data:") ? (0, a.jsx)(E.default, {
          ...x,
          className: G.mediaContainer,
          imageClassName: r(G.thumbnailOverride, {
            [G.obscured]: l
          })
        }) : (0, a.jsx)(Y, {
          ...x,
          autoPlay: o && !l,
          containerClassName: G.mosaicMediaContainer,
          imageClassName: r(G.imageCover, {
            [G.obscured]: l
          }),
          responsive: !0
        }), l && (0, a.jsx)("div", {
          className: G.obscuredTagContainer,
          children: (0, a.jsx)(F.default, {
            obscureReason: i,
            iconClassname: G.obscuredTag
          })
        })]
      }, e.src)
    }), [o, c, d, s, C, T, x, u, _]);
    return (0, a.jsxs)("div", {
      className: G.bodyMedia,
      style: {
        width: l,
        height: i
      },
      children: [(0, a.jsx)(a.Fragment, {
        children: S
      }), (c || d) && (0, a.jsxs)("div", {
        className: G.mediaIconsRow,
        children: [d && (0, a.jsx)(A.default, {
          width: "22px",
          height: "22px",
          className: G.mediaIcon
        }), c && (0, a.jsx)(N.default, {
          className: G.mediaIcon
        })]
      }), t.length > P.MOSAIC_MAX_IMAGE_COUNT && (0, a.jsx)(Z, {
        text: (t.length - (0, P.MOSAIC_MAX_IMAGE_COUNT)).toString(),
        icon: M.default,
        pillClassName: G.moreImagesPill,
        iconClassName: G.moreImagesPillIcon,
        textClassName: G.moreImagesPillText
      })]
    })
  });

function Z(e) {
  let {
    text: t,
    icon: s,
    pillClassName: n,
    iconClassName: l,
    textClassName: r
  } = e;
  return (0, a.jsxs)("div", {
    className: n,
    children: [(0, a.jsx)(s, {
      className: l
    }), (0, a.jsxs)(d.Text, {
      variant: "text-xs/medium",
      className: r,
      children: ["+", t]
    })]
  })
}

function q(e) {
  let {
    channel: t,
    firstMessage: s,
    isFirstMessageLoaded: l,
    containerWidth: i,
    hasUnreads: o
  } = e, [u, c] = (0, b.getFrameDimensions)(i - 2 * b.IMAGE_PADDING), {
    content: m
  } = (0, j.useForumPostFirstMessageMarkup)({
    firstMessage: s,
    formatInline: !1,
    noStyleAndInteraction: !0
  }), {
    shouldRenderTagsRow: h
  } = (0, D.useTagsRowHooks)({
    channel: t,
    isNew: !1
  }), f = n.useMemo(() => ({
    width: u,
    height: c
  }), [u, c]), g = o ? G.textContentUnread : G.textContentRead;
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsxs)("div", {
      className: G.contentPreview,
      style: f,
      children: [(0, a.jsxs)("div", {
        className: G.content,
        children: [l && null == s && (0, a.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: o ? "header-secondary" : "text-muted",
          children: B.default.Messages.REPLY_QUOTE_MESSAGE_DELETED
        }), l && null != s && (0, a.jsx)(v.default, {
          message: s,
          content: m,
          className: g
        })]
      }), (0, a.jsx)("div", {
        className: r(G.textContentFooter, {
          [G.noTags]: !h
        }),
        children: h ? (0, a.jsx)(D.default, {
          channel: t,
          tagsClassName: G.tagPill,
          className: G.row
        }) : null
      })]
    })
  })
}