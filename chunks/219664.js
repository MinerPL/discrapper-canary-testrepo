"use strict";
a.r(t), a("47120");
var s = a("735250"),
  n = a("470079"),
  l = a("803997"),
  r = a.n(l),
  i = a("683860"),
  o = a("442837"),
  d = a("692547"),
  u = a("481060"),
  c = a("738619"),
  m = a("841762"),
  h = a("25610"),
  f = a("118139"),
  g = a("169525"),
  x = a("255269"),
  C = a("524444"),
  _ = a("695346"),
  S = a("433355"),
  T = a("592125"),
  p = a("496675"),
  E = a("332475"),
  N = a("730845"),
  M = a("84017"),
  v = a("897353"),
  A = a("113039"),
  I = a("26290"),
  j = a("456269"),
  R = a("109590"),
  O = a("368844"),
  b = a("73315"),
  F = a("404616"),
  L = a("510060"),
  P = a("983200"),
  y = a("196255"),
  D = a("858543"),
  U = a("482062"),
  w = a("883728"),
  k = a("710352"),
  H = a("981631"),
  B = a("689938"),
  G = a("783050");

function V(e) {
  let {
    id: t,
    channel: a,
    goToThread: l,
    overrideMedia: c,
    className: m,
    coords: h,
    gridCoords: f,
    gridSectionBoundaries: g,
    observePostVisibilityAnalytics: C
  } = e, E = (0, o.useStateFromStores)([T.default], () => T.default.getChannel(a.parent_id)), N = a.id, M = n.useRef(null), v = (0, o.useStateFromStores)([S.default], () => S.default.getCurrentSidebarChannelId(a.parent_id) === a.id), {
    firstMessage: A,
    loaded: b
  } = (0, R.useFirstForumPostMessage)(a), {
    firstMedia: P
  } = (0, j.useForumPostFirstMessageMarkup)({
    firstMessage: A,
    formatInline: !1,
    noStyleAndInteraction: !1
  }), {
    messageCountText: V
  } = (0, j.useMessageCount)(a), {
    isNew: z,
    hasUnreads: K
  } = (0, j.useForumPostReadStates)(a), X = n.useRef(null), {
    handleLeftClick: q,
    handleRightClick: Q
  } = (0, w.default)({
    facepileRef: X,
    goToThread: l,
    channel: a
  });
  n.useEffect(() => {
    null == C || C(M.current, N)
  }, [C, N]);
  let J = (0, o.useStateFromStores)([p.default], () => p.default.can(H.Permissions.MANAGE_MESSAGES, a)),
    $ = _.GifAutoPlay.useSetting(),
    ee = _.RenderSpoilers.useSetting(),
    et = (0, x.default)(ee, J),
    ea = (0, O.useForumPostMediaThumbnail)(A, E, !1),
    [es, en] = (0, L.getFrameDimensions)(h.width - 2 * L.IMAGE_PADDING),
    el = (0, j.useLastActiveTimestamp)(a, i.ThreadSortOrder.CREATION_DATE, k.ForumTimestampFormats.POSTED_DURATION_AGO),
    er = (0, F.useHighlightedChannelName)(a),
    ei = (null == A ? void 0 : A.blocked) || null == (null != c ? c : P),
    {
      onFocus: eo,
      ...ed
    } = (0, U.useForumGridItem)({
      id: t,
      row: f.row,
      column: f.column,
      section: f.section,
      boundaries: g
    }),
    eu = a.isMediaPost();
  return (0, s.jsxs)("li", {
    ref: M,
    onClick: q,
    onFocus: eo,
    onContextMenu: Q,
    className: r()(G.container, m, {
      [G.isOpen]: v
    }),
    style: {
      ...h
    },
    children: [(0, s.jsx)(u.Clickable, {
      onClick: q,
      focusProps: {
        ringTarget: M
      },
      onContextMenu: Q,
      "aria-label": B.default.Messages.FORUM_POST_ARIA_LABEL.format({
        title: a.name,
        count: V
      }),
      className: G.focusTarget,
      ...ed
    }), (0, s.jsxs)("div", {
      className: G.header,
      children: [(0, s.jsxs)("div", {
        className: G.authorRow,
        children: [(0, s.jsxs)("div", {
          className: G.rowGroup,
          children: [(0, s.jsx)(y.default, {
            channel: a,
            message: A
          }), (0, s.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: G.postCreationTimestamp,
            children: el
          })]
        }), z ? (0, s.jsx)(I.TextBadge, {
          className: r()(G.newBadge),
          color: d.default.unsafe_rawColors.BRAND_260.css,
          text: B.default.Messages.NEW
        }) : null]
      }), (0, s.jsx)(u.HeadingLevel, {
        children: (0, s.jsx)(u.Heading, {
          variant: "heading-md/extrabold",
          className: G.title,
          color: K ? "header-primary" : "text-muted",
          style: {
            width: "".concat(h.width - 2 * L.GRID_POST_CONTROLS_MARGIN, "px")
          },
          children: er
        })
      })]
    }), (0, s.jsx)("div", {
      className: G.postBody,
      children: (0, s.jsx)(u.FocusBlock, {
        children: ei ? (0, s.jsx)(Z, {
          channel: a,
          firstMessage: A,
          isFirstMessageLoaded: b,
          containerWidth: h.width,
          hasUnreads: K
        }) : (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(Y, {
            mediaAttachments: ea,
            globalSpoilerRenderSetting: et,
            containerWidth: es,
            containerHeight: eu ? 9 / 16 * es : en,
            canAutoPlay: $,
            shouldMaintainAspectRatio: eu
          }), (0, s.jsx)("div", {
            className: G.tagsRow,
            children: (0, s.jsx)(D.default, {
              channel: a,
              tagsClassName: G.tagPill
            })
          })]
        })
      })
    }), (0, s.jsx)("div", {
      className: G.footer,
      children: (0, s.jsx)(u.FocusBlock, {
        children: (0, s.jsx)(W, {
          channel: a,
          firstMessage: A,
          facepileRef: X
        })
      })
    })]
  })
}

function W(e) {
  let {
    channel: t,
    facepileRef: a,
    firstMessage: n
  } = e, l = (0, j.useTypingUserIds)(t), r = (null == n ? void 0 : n.reactions) != null && n.reactions.length > 0;
  return (0, s.jsxs)("div", {
    className: G.forumPostControls,
    children: [(0, s.jsxs)("div", {
      className: G.controlsGroup,
      children: [(0, s.jsx)("div", {
        className: G.messageCountContainer,
        children: (0, s.jsx)(F.MessageCount, {
          channel: t,
          iconSize: 16,
          showReadState: !0
        })
      }), l.length > 0 ? (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("span", {
          className: G.bullet,
          children: "•"
        }), (0, s.jsxs)("div", {
          className: G.typing,
          children: [(0, s.jsx)(F.Facepile, {
            channel: t,
            userIds: l,
            facepileRef: a
          }), (0, s.jsx)("div", {
            className: G.dots,
            children: (0, s.jsx)(u.Dots, {
              themed: !0,
              dotRadius: 2
            })
          }), (0, s.jsx)(c.default, {
            channel: t,
            className: G.typingUsers,
            renderDots: !1
          })]
        })]
      }) : null]
    }), (0, s.jsxs)("div", {
      className: G.controlsGroup,
      children: [r || null == n ? null : (0, s.jsx)(F.DefaultReaction, {
        firstMessage: n,
        channel: t
      }), null == n ? null : (0, s.jsx)(F.MostUsedReaction, {
        firstMessage: n,
        channel: t
      })]
    })]
  })
}
t.default = n.memo(function(e) {
  let {
    id: t,
    threadId: a,
    goToThread: n,
    overrideMedia: l,
    className: r,
    coords: i,
    gridCoords: d,
    gridSectionBoundaries: u,
    observePostVisibilityAnalytics: c
  } = e, m = (0, o.useStateFromStores)([T.default], () => T.default.getChannel(a));
  return null == m ? null : (0, s.jsx)(V, {
    id: t,
    channel: m,
    goToThread: n,
    overrideMedia: l,
    className: r,
    coords: i,
    gridCoords: d,
    observePostVisibilityAnalytics: c,
    gridSectionBoundaries: u
  })
});
let z = e => e.preventDefault(),
  K = n.memo(function(e) {
    return (0, s.jsx)(s.Fragment, {
      children: (0, C.renderImageComponent)(e)
    })
  }),
  Y = n.memo(function(e) {
    let {
      mediaAttachments: t,
      globalSpoilerRenderSetting: a,
      containerWidth: l,
      containerHeight: i,
      canAutoPlay: o,
      shouldMaintainAspectRatio: d = !1
    } = e, {
      containsVideo: u,
      containsGif: c
    } = n.useMemo(() => (0, O.messageContainsGifOrVideo)(t), [t]), x = n.useMemo(() => t.slice(P.MOSAIC_MIN_INDEX, P.MOSAIC_MAX_INDEX), [t]), C = (0, P.useImageContainerStyles)({
      numAttachments: x.length,
      containerWidth: l,
      containerHeight: i
    }), _ = (0, P.useImageDimensionStyles)({
      imageContainerStyles: C,
      containerWidth: l,
      containerHeight: i
    }), S = (0, h.useShouldRedactExplicitContentForForum)(), T = n.useMemo(() => x.map((e, t) => {
      var n;
      let [l, i] = (0, g.getForumPostShouldObscure)(e, !a, S), h = (0, g.getObscuredAlt)(i), x = {
        ..._[t],
        src: e.src,
        width: e.width,
        height: e.height,
        alt: null != e.alt && l ? h : e.alt,
        onClick: z,
        shouldRenderAccessory: !c && !u
      }, T = (0, f.isAnimatedImageUrl)(e.src) ? "".concat(e.src, "?format=png") : e.src, p = o && !l ? e.src : T;
      return (0, s.jsxs)("div", {
        className: G.bodyMediaFrame,
        style: C[t],
        children: [d ? (0, s.jsx)(m.default, {
          ...x,
          src: p,
          backgroundSrc: T,
          aspectRatio: x.maxWidth / x.maxHeight,
          alt: null !== (n = x.alt) && void 0 !== n ? n : "",
          className: r()(G.mediaPostContainer, {
            [G.obscured]: l
          }),
          imageChildClassName: G.mediaPostThumbnail
        }) : e.src.startsWith("data:") ? (0, s.jsx)(E.default, {
          ...x,
          className: G.mediaContainer,
          imageClassName: r()(G.thumbnailOverride, {
            [G.obscured]: l
          })
        }) : (0, s.jsx)(K, {
          ...x,
          autoPlay: o && !l,
          containerClassName: G.mosaicMediaContainer,
          imageClassName: r()(G.imageCover, {
            [G.obscured]: l
          }),
          responsive: !0
        }), l && (0, s.jsx)("div", {
          className: G.obscuredTagContainer,
          children: (0, s.jsx)(b.default, {
            obscureReason: i,
            iconClassname: G.obscuredTag
          })
        })]
      }, e.src)
    }), [o, c, u, a, C, _, x, d, S]);
    return (0, s.jsxs)("div", {
      className: G.bodyMedia,
      style: {
        width: l,
        height: i
      },
      children: [(0, s.jsx)(s.Fragment, {
        children: T
      }), (c || u) && (0, s.jsxs)("div", {
        className: G.mediaIconsRow,
        children: [u && (0, s.jsx)(v.default, {
          width: "22px",
          height: "22px",
          className: G.mediaIcon
        }), c && (0, s.jsx)(N.default, {
          className: G.mediaIcon
        })]
      }), t.length > P.MOSAIC_MAX_IMAGE_COUNT && (0, s.jsx)(X, {
        text: (t.length - (0, P.MOSAIC_MAX_IMAGE_COUNT)).toString(),
        icon: M.default,
        pillClassName: G.moreImagesPill,
        iconClassName: G.moreImagesPillIcon,
        textClassName: G.moreImagesPillText
      })]
    })
  });

function X(e) {
  let {
    text: t,
    icon: a,
    pillClassName: n,
    iconClassName: l,
    textClassName: r
  } = e;
  return (0, s.jsxs)("div", {
    className: n,
    children: [(0, s.jsx)(a, {
      className: l
    }), (0, s.jsxs)(u.Text, {
      variant: "text-xs/medium",
      className: r,
      children: ["+", t]
    })]
  })
}

function Z(e) {
  let {
    channel: t,
    firstMessage: a,
    isFirstMessageLoaded: l,
    containerWidth: i,
    hasUnreads: o
  } = e, [d, c] = (0, L.getFrameDimensions)(i - 2 * L.IMAGE_PADDING), {
    content: m
  } = (0, j.useForumPostFirstMessageMarkup)({
    firstMessage: a,
    formatInline: !1,
    noStyleAndInteraction: !0
  }), {
    shouldRenderTagsRow: h
  } = (0, D.useTagsRowHooks)({
    channel: t,
    isNew: !1
  }), f = n.useMemo(() => ({
    width: d,
    height: c
  }), [d, c]), g = o ? G.textContentUnread : G.textContentRead;
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)("div", {
      className: G.contentPreview,
      style: f,
      children: [(0, s.jsxs)("div", {
        className: G.content,
        children: [l && null == a && (0, s.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: o ? "header-secondary" : "text-muted",
          children: B.default.Messages.REPLY_QUOTE_MESSAGE_DELETED
        }), l && null != a && (0, s.jsx)(A.default, {
          message: a,
          content: m,
          className: g
        })]
      }), (0, s.jsx)("div", {
        className: r()(G.textContentFooter, {
          [G.noTags]: !h
        }),
        children: h ? (0, s.jsx)(D.default, {
          channel: t,
          tagsClassName: G.tagPill,
          className: G.__invalid_row
        }) : null
      })]
    })
  })
}