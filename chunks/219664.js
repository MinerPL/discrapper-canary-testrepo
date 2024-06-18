"use strict";
n(47120);
var s = n(735250),
  l = n(470079),
  a = n(120356),
  i = n.n(a),
  r = n(683860),
  o = n(442837),
  c = n(692547),
  d = n(481060),
  u = n(738619),
  h = n(841762),
  m = n(25610),
  g = n(118139),
  x = n(169525),
  _ = n(255269),
  f = n(524444),
  E = n(695346),
  N = n(433355),
  T = n(592125),
  C = n(496675),
  p = n(730845),
  v = n(84017),
  M = n(897353),
  S = n(113039),
  I = n(456269),
  j = n(109590),
  A = n(368844),
  R = n(73315),
  Z = n(404616),
  O = n(510060),
  b = n(983200),
  L = n(196255),
  P = n(858543),
  D = n(482062),
  y = n(883728),
  H = n(710352),
  w = n(981631),
  F = n(689938),
  U = n(850994);

function k(e) {
  let {
    id: t,
    channel: n,
    goToThread: a,
    overrideMedia: u,
    className: h,
    coords: m,
    gridCoords: g,
    gridSectionBoundaries: x,
    observePostVisibilityAnalytics: f
  } = e, p = (0, o.e7)([T.Z], () => T.Z.getChannel(n.parent_id)), v = n.id, M = l.useRef(null), S = (0, o.e7)([N.ZP], () => N.ZP.getCurrentSidebarChannelId(n.parent_id) === n.id), {
    firstMessage: R,
    loaded: b
  } = (0, j.cl)(n), {
    firstMedia: k
  } = (0, I.mX)({
    firstMessage: R,
    formatInline: !1,
    noStyleAndInteraction: !1
  }), {
    messageCountText: G
  } = (0, I.nP)(n), {
    isNew: V,
    hasUnreads: W
  } = (0, I.J$)(n), K = l.useRef(null), {
    handleLeftClick: Y,
    handleRightClick: X
  } = (0, y.Z)({
    facepileRef: K,
    goToThread: a,
    channel: n
  });
  l.useEffect(() => {
    null == f || f(M.current, v)
  }, [f, v]);
  let J = (0, o.e7)([C.Z], () => C.Z.can(w.Plq.MANAGE_MESSAGES, n)),
    Q = E.QK.useSetting(),
    $ = E.cC.useSetting(),
    ee = (0, _.Z)($, J),
    et = (0, A.aU)(R, p, !1),
    [en, es] = (0, O.rI)(m.width - 2 * O.LT),
    el = (0, I.xw)(n, r.z.CREATION_DATE, H.R6.POSTED_DURATION_AGO),
    ea = (0, Z.NN)(n),
    ei = (null == R ? void 0 : R.blocked) || null == (null != u ? u : k),
    {
      onFocus: er,
      ...eo
    } = (0, D.nX)({
      id: t,
      row: g.row,
      column: g.column,
      section: g.section,
      boundaries: x
    }),
    ec = n.isMediaPost();
  return (0, s.jsxs)("li", {
    ref: M,
    onClick: Y,
    onFocus: er,
    onContextMenu: X,
    className: i()(U.container, h, {
      [U.isOpen]: S
    }),
    style: {
      ...m
    },
    children: [(0, s.jsx)(d.Clickable, {
      onClick: Y,
      focusProps: {
        ringTarget: M
      },
      onContextMenu: X,
      "aria-label": F.Z.Messages.FORUM_POST_ARIA_LABEL.format({
        title: n.name,
        count: G
      }),
      className: U.focusTarget,
      ...eo
    }), (0, s.jsxs)("div", {
      className: U.header,
      children: [(0, s.jsxs)("div", {
        className: U.authorRow,
        children: [(0, s.jsxs)("div", {
          className: U.rowGroup,
          children: [(0, s.jsx)(L.Z, {
            channel: n,
            message: R
          }), (0, s.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: U.postCreationTimestamp,
            children: el
          })]
        }), V ? (0, s.jsx)(d.TextBadge, {
          className: i()(U.newBadge),
          color: c.Z.unsafe_rawColors.BRAND_260.css,
          text: F.Z.Messages.NEW
        }) : null]
      }), (0, s.jsx)(d.HeadingLevel, {
        children: (0, s.jsx)(d.Heading, {
          variant: "heading-md/extrabold",
          className: U.title,
          color: W ? "header-primary" : "text-muted",
          style: {
            width: "".concat(m.width - 2 * O.I8, "px")
          },
          children: ea
        })
      })]
    }), (0, s.jsx)("div", {
      className: U.postBody,
      children: (0, s.jsx)(d.FocusBlock, {
        children: ei ? (0, s.jsx)(q, {
          channel: n,
          firstMessage: R,
          isFirstMessageLoaded: b,
          containerWidth: m.width,
          hasUnreads: W
        }) : (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(z, {
            mediaAttachments: et,
            globalSpoilerRenderSetting: ee,
            containerWidth: en,
            containerHeight: ec ? 9 / 16 * en : es,
            canAutoPlay: Q,
            shouldMaintainAspectRatio: ec
          }), (0, s.jsx)("div", {
            className: U.tagsRow,
            children: (0, s.jsx)(P.ZP, {
              channel: n,
              tagsClassName: U.tagPill
            })
          })]
        })
      })
    }), (0, s.jsx)("div", {
      className: U.footer,
      children: (0, s.jsx)(d.FocusBlock, {
        children: (0, s.jsx)(B, {
          channel: n,
          firstMessage: R,
          facepileRef: K
        })
      })
    })]
  })
}

function B(e) {
  let {
    channel: t,
    facepileRef: n,
    firstMessage: l
  } = e, a = (0, I.Q)(t), i = (null == l ? void 0 : l.reactions) != null && l.reactions.length > 0;
  return (0, s.jsxs)("div", {
    className: U.forumPostControls,
    children: [(0, s.jsxs)("div", {
      className: U.controlsGroup,
      children: [(0, s.jsx)("div", {
        className: U.messageCountContainer,
        children: (0, s.jsx)(Z.m9, {
          channel: t,
          iconSize: 16,
          showReadState: !0
        })
      }), a.length > 0 ? (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("span", {
          className: U.bullet,
          children: "•"
        }), (0, s.jsxs)("div", {
          className: U.typing,
          children: [(0, s.jsx)(Z.og, {
            channel: t,
            userIds: a,
            facepileRef: n
          }), (0, s.jsx)("div", {
            className: U.dots,
            children: (0, s.jsx)(d.Dots, {
              themed: !0,
              dotRadius: 2
            })
          }), (0, s.jsx)(u.Z, {
            channel: t,
            className: U.typingUsers,
            renderDots: !1
          })]
        })]
      }) : null]
    }), (0, s.jsxs)("div", {
      className: U.controlsGroup,
      children: [i || null == l ? null : (0, s.jsx)(Z.kZ, {
        firstMessage: l,
        channel: t
      }), null == l ? null : (0, s.jsx)(Z.au, {
        firstMessage: l,
        channel: t
      })]
    })]
  })
}
t.Z = l.memo(function(e) {
  let {
    id: t,
    threadId: n,
    goToThread: l,
    overrideMedia: a,
    className: i,
    coords: r,
    gridCoords: c,
    gridSectionBoundaries: d,
    observePostVisibilityAnalytics: u
  } = e, h = (0, o.e7)([T.Z], () => T.Z.getChannel(n));
  return null == h ? null : (0, s.jsx)(k, {
    id: t,
    channel: h,
    goToThread: l,
    overrideMedia: a,
    className: i,
    coords: r,
    gridCoords: c,
    observePostVisibilityAnalytics: u,
    gridSectionBoundaries: d
  })
});
let G = e => e.preventDefault(),
  V = l.memo(function(e) {
    return (0, s.jsx)(s.Fragment, {
      children: (0, f.Yi)(e)
    })
  }),
  z = l.memo(function(e) {
    let {
      mediaAttachments: t,
      globalSpoilerRenderSetting: n,
      containerWidth: a,
      containerHeight: r,
      canAutoPlay: o,
      shouldMaintainAspectRatio: c = !1
    } = e, {
      containsVideo: u,
      containsGif: _
    } = l.useMemo(() => (0, A.cp)(t), [t]), f = l.useMemo(() => t.slice(b.$x, b.GV), [t]), E = (0, b.tu)({
      numAttachments: f.length,
      containerWidth: a,
      containerHeight: r
    }), N = (0, b.S$)({
      imageContainerStyles: E,
      containerWidth: a,
      containerHeight: r
    }), T = (0, m.m)(), C = l.useMemo(() => f.map((e, t) => {
      var l;
      let [a, r] = (0, x.As)(e, !n, T), m = (0, x.MC)(r), f = {
        ...N[t],
        src: e.src,
        width: e.width,
        height: e.height,
        alt: null != e.alt && a ? m : e.alt,
        onClick: G,
        shouldRenderAccessory: !_ && !u,
        renderForwardComponent: w.VqG
      }, C = (0, g.d$)(e.src) ? "".concat(e.src, "?format=png") : e.src, p = o && !a ? e.src : C;
      return (0, s.jsxs)("div", {
        className: U.bodyMediaFrame,
        style: E[t],
        children: [c ? (0, s.jsx)(h.Z, {
          ...f,
          src: p,
          backgroundSrc: C,
          aspectRatio: f.maxWidth / f.maxHeight,
          alt: null !== (l = f.alt) && void 0 !== l ? l : "",
          className: i()(U.mediaPostContainer, {
            [U.obscured]: a
          }),
          imageChildClassName: U.mediaPostThumbnail
        }) : e.src.startsWith("data:") ? (0, s.jsx)(d.Image, {
          ...f,
          className: U.mediaContainer,
          imageClassName: i()(U.thumbnailOverride, {
            [U.obscured]: a
          })
        }) : (0, s.jsx)(V, {
          ...f,
          autoPlay: o && !a,
          containerClassName: U.mosaicMediaContainer,
          imageClassName: i()(U.imageCover, {
            [U.obscured]: a
          }),
          responsive: !0
        }), a && (0, s.jsx)("div", {
          className: U.obscuredTagContainer,
          children: (0, s.jsx)(R.Z, {
            obscureReason: r,
            iconClassname: U.obscuredTag
          })
        })]
      }, e.src)
    }), [o, _, u, n, E, N, f, c, T]);
    return (0, s.jsxs)("div", {
      className: U.bodyMedia,
      style: {
        width: a,
        height: r
      },
      children: [(0, s.jsx)(s.Fragment, {
        children: C
      }), (_ || u) && (0, s.jsxs)("div", {
        className: U.mediaIconsRow,
        children: [u && (0, s.jsx)(M.Z, {
          width: "22px",
          height: "22px",
          className: U.mediaIcon
        }), _ && (0, s.jsx)(p.Z, {
          className: U.mediaIcon
        })]
      }), t.length > b.Vn && (0, s.jsx)(W, {
        text: (t.length - b.Vn).toString(),
        icon: v.Z,
        pillClassName: U.moreImagesPill,
        iconClassName: U.moreImagesPillIcon,
        textClassName: U.moreImagesPillText
      })]
    })
  });

function W(e) {
  let {
    text: t,
    icon: n,
    pillClassName: l,
    iconClassName: a,
    textClassName: i
  } = e;
  return (0, s.jsxs)("div", {
    className: l,
    children: [(0, s.jsx)(n, {
      className: a
    }), (0, s.jsxs)(d.Text, {
      variant: "text-xs/medium",
      className: i,
      children: ["+", t]
    })]
  })
}

function q(e) {
  let {
    channel: t,
    firstMessage: n,
    isFirstMessageLoaded: a,
    containerWidth: r,
    hasUnreads: o
  } = e, [c, u] = (0, O.rI)(r - 2 * O.LT), {
    content: h
  } = (0, I.mX)({
    firstMessage: n,
    formatInline: !1,
    noStyleAndInteraction: !0
  }), {
    shouldRenderTagsRow: m
  } = (0, P.DM)({
    channel: t,
    isNew: !1
  }), g = l.useMemo(() => ({
    width: c,
    height: u
  }), [c, u]), x = o ? U.textContentUnread : U.textContentRead;
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)("div", {
      className: U.contentPreview,
      style: g,
      children: [(0, s.jsxs)("div", {
        className: U.content,
        children: [a && null == n && (0, s.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: o ? "header-secondary" : "text-muted",
          children: F.Z.Messages.REPLY_QUOTE_MESSAGE_DELETED
        }), a && null != n && (0, s.jsx)(S.ZP, {
          message: n,
          content: h,
          className: x
        })]
      }), (0, s.jsx)("div", {
        className: i()(U.textContentFooter, {
          [U.noTags]: !m
        }),
        children: m ? (0, s.jsx)(P.ZP, {
          channel: t,
          tagsClassName: U.tagPill,
          className: U.__invalid_row
        }) : null
      })]
    })
  })
}