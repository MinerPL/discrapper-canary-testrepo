"use strict";
n.r(t), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("718017"),
  o = n("873546"),
  u = n("481060"),
  d = n("666188"),
  c = n("695346"),
  f = n("752916"),
  h = n("898140"),
  C = n("768581"),
  p = n("358555"),
  m = n("981631"),
  g = n("647086"),
  E = n("689938"),
  S = n("126905");

function _(e) {
  var t;
  let {
    guild: n,
    controller: a,
    guildBanner: s,
    animate: u
  } = e, {
    value: d
  } = a.springs, f = c.GifAutoPlay.getSetting();
  return (0, l.jsx)(r.animated.div, {
    className: S.animatedContainer,
    style: {
      opacity: d,
      transform: d.to(e => "translateY(-".concat((1 - e) * 90, "px)"))
    },
    children: (0, l.jsx)(r.animated.div, {
      className: i()(S.bannerImage, {
        [S.bannerImgFullWidth]: o.isMobile
      }),
      style: {
        transform: d.to(e => f ? "translateY(".concat((1 - e) * 60, "px) scale(").concat(1 + (1 - e) * .2, ")") : "translateY(".concat((1 - e) * 90, "px)"))
      },
      children: (0, l.jsx)("img", {
        className: i()(S.bannerImg, {
          [S.bannerImgFullWidth]: o.isMobile
        }),
        src: null !== (t = C.default.getGuildBannerURL({
          id: n.id,
          banner: s
        }, u)) && void 0 !== t ? t : "",
        alt: "",
        height: 135,
        width: 240,
        "aria-hidden": !0
      })
    })
  })
}

function I(e) {
  let {
    guild: t,
    controller: n,
    hasBanner: a,
    hasSubheader: s
  } = e, {
    value: o
  } = n.springs, d = t.hasFeature(m.GuildFeatures.DISCOVERABLE), c = (0, l.jsx)("div", {
    className: S.communityInfo,
    children: d && (0, l.jsx)(u.Tooltip, {
      text: E.default.Messages.DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO,
      position: "right",
      children: e => (0, l.jsxs)("div", {
        className: S.communityInfoPill,
        ...e,
        children: [(0, l.jsx)(f.default, {
          width: 12,
          height: 12,
          className: S.communityIcon
        }), (0, l.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "none",
          children: E.default.Messages.DISCOVERABLE_GUILD_HEADER_PUBLIC
        })]
      })
    })
  });
  return s ? (0, l.jsx)("div", {
    className: i()(S.communityInfoContainer, S.hasSubheader),
    children: c
  }) : (0, l.jsx)(r.animated.div, {
    className: S.communityInfoContainer,
    style: a ? {
      opacity: o
    } : {
      height: o.to(e => "".concat(20 * e, "px"))
    },
    children: c
  })
}

function N() {
  return (0, l.jsx)(h.default, {
    className: S.favoritesIcon,
    height: 20,
    width: 20
  })
}
t.default = a.memo(function(e) {
  var t;
  let {
    bannerVisible: n,
    controller: s,
    className: r,
    onClick: f,
    onContextMenu: h,
    onMouseDown: T,
    disableBannerAnimation: A,
    "aria-expanded": L,
    "aria-controls": v,
    guild: x,
    guildBanner: R,
    animationOverlayHeight: M,
    children: O,
    headerClassName: y,
    communityInfoVisible: D,
    hasSubheader: b
  } = e, j = x.hasFeature(m.GuildFeatures.ANIMATED_BANNER), G = (0, d.default)(x), U = !G && x.hasCommunityInfoSubheader(), P = (0, C.isAnimatedIconHash)(R) && j && !A, [w, F] = a.useState(!1), B = a.useRef(), V = a.useRef(null), H = a.useRef(), k = c.GifAutoPlay.getSetting();
  a.useEffect(() => {
    if (P && n && !B.current && k) return F(!0), H.current = setTimeout(() => {
      F(!1)
    }, 5e3), () => {
      clearTimeout(H.current)
    }
  }, [P, n, k]), a.useEffect(() => {
    B.current = n
  }, [n]);
  let Y = () => {
    let {
      renderBanner: t,
      guildBanner: n
    } = e;
    return null != n && !t
  };
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      ref: V,
      className: i()(r, {
        [S.container]: !0,
        [S.clickable]: null != f,
        [S.selected]: null != f && L,
        [S.hasBanner]: Y(),
        [S.bannerVisible]: n,
        [S.communityInfoVisible]: !G && D || b && U
      }),
      onMouseDown: T,
      onContextMenu: h,
      onClick: f,
      children: [(0, l.jsxs)("header", {
        className: i()(S.header, y, {
          [S.themedHeaderMobile]: o.isMobile
        }),
        children: [(0, l.jsxs)("div", {
          className: i()(S.headerContent, S.primaryInfo),
          children: [(0, l.jsx)(p.default, {
            guild: x,
            isBannerVisible: n
          }), x.id === g.FAVORITES_RAW_GUILD_ID && (0, l.jsx)(N, {}), (0, l.jsx)(u.Text, {
            color: "none",
            variant: "text-md/semibold",
            lineClamp: 1,
            className: S.name,
            children: x.toString()
          }), null != f && (0, l.jsx)(u.Clickable, {
            className: S.headerButton,
            "aria-controls": v,
            "aria-expanded": L,
            focusProps: {
              ringTarget: V,
              offset: 4
            },
            onClick: f,
            onContextMenu: h,
            "aria-label": E.default.Messages.GUILD_SIDEBAR_ACTIONS_BUTTON.format({
              guildName: null !== (t = null == x ? void 0 : x.toString()) && void 0 !== t ? t : ""
            })
          }), (0, l.jsx)("div", {
            className: S.headerChildren,
            children: O
          })]
        }), U && (0, l.jsx)(I, {
          guild: x,
          controller: s,
          hasBanner: null != R,
          hasSubheader: null != b && b
        })]
      }), null != R ? (0, l.jsx)(_, {
        guild: x,
        controller: s,
        guildBanner: R,
        animate: w
      }) : null]
    }), P && Y() ? (0, l.jsx)("div", {
      className: S.animatedBannerHoverLayer,
      onMouseEnter: () => {
        F(!0), clearTimeout(H.current)
      },
      onMouseLeave: () => F(!1),
      style: {
        height: M
      }
    }) : null]
  })
})