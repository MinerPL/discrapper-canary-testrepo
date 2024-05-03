"use strict";
t.r(a), t.d(a, {
  default: function() {
    return z
  }
}), t("47120");
var s = t("735250"),
  n = t("470079"),
  l = t("120356"),
  o = t.n(l),
  c = t("442837"),
  i = t("481060"),
  r = t("239091"),
  d = t("2052"),
  u = t("100527"),
  _ = t("906732"),
  O = t("142497"),
  E = t("810788"),
  g = t("648575"),
  A = t("54264"),
  p = t("466111"),
  f = t("783014"),
  M = t("897353"),
  m = t("26290"),
  v = t("810090"),
  I = t("626135"),
  h = t("768581"),
  x = t("709054"),
  C = t("647177"),
  N = t("63985"),
  R = t("678916"),
  T = t("981631"),
  k = t("190378"),
  D = t("486324"),
  B = t("474936"),
  U = t("689938"),
  j = t("678056");

function L(e) {
  let {
    icon: a,
    onClick: t,
    text: n,
    children: l,
    className: c,
    selected: r = !1,
    disabled: d = !1,
    onMouseLeave: u,
    onBlur: _
  } = e;
  return (0, s.jsxs)(i.Clickable, {
    className: o()(c, j.backgroundOption, {
      [j.backgroundOptionSelected]: r,
      [j.backgroundOptionDisabled]: d
    }),
    onMouseLeave: u,
    onBlur: _,
    onClick: d ? void 0 : t,
    children: [r ? (0, s.jsx)("div", {
      className: j.backgroundOptionRing
    }) : null, (0, s.jsxs)("div", {
      className: j.backgroundOptionInner,
      children: [l, (0, s.jsxs)("div", {
        className: j.backgroundOptionContent,
        children: [(0, s.jsx)(a, {
          className: o()(j.backgroundIconOptionIcon),
          width: 18,
          height: 18
        }), (0, s.jsx)(i.Text, {
          className: j.backgroundOptionText,
          color: "none",
          variant: "text-sm/normal",
          children: n
        })]
      })]
    })]
  })
}

function V(e) {
  let {
    option: a,
    source: t,
    isAnimated: l
  } = e, [o, c] = n.useState(!1);
  if (n.useEffect(() => {
      new Image().src = t
    }, [t]), !l || null == a) return (0, s.jsx)("div", {
    className: j.backgroundImageOption,
    style: {
      backgroundImage: "url(".concat(t, ")")
    }
  });
  let i = (0, h.getVideoFilterAssetURL)({
    userId: a.user_id,
    assetId: a.id,
    assetHash: a.asset,
    size: 720,
    canAnimate: !1
  });
  return (0, s.jsx)("img", {
    onMouseMove: () => c(!0),
    onMouseLeave: () => c(!1),
    className: j.backgroundImageOption,
    src: o ? t : i,
    alt: a.id
  })
}

function P(e) {
  let {
    option: a,
    source: n,
    selected: l = !1,
    onSelectOption: g,
    isAnimatedImage: A,
    isVideo: p,
    hotspotLocation: f,
    ...h
  } = e, x = (0, d.useAnalyticsContext)(), {
    analyticsLocations: N
  } = (0, _.default)(u.default.VIDEO_BACKGROUND_IMAGE_OPTION), R = (0, c.useStateFromStores)([E.default], () => null != f && E.default.hasHotspot(f)), k = p ? (0, s.jsx)(v.default, {
    className: j.backgroundImageOption,
    src: n,
    loop: !0,
    playOnHover: !0,
    muted: !0
  }) : (0, s.jsx)(V, {
    isAnimated: A,
    option: (0, C.isCustomBackgroundOption)(a) ? a : void 0,
    source: n
  });

  function D() {
    null != f && R && (O.hideHotspot(f), I.default.track(T.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: B.PremiumUpsellTypes.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
      location: x.location,
      location_stack: N
    }))
  }
  return (0, s.jsxs)(i.Clickable, {
    ...h,
    className: o()(j.backgroundOption, {
      [j.backgroundOptionSelected]: l
    }),
    onClick: () => g(a),
    onContextMenu: e => (0, r.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await t.e("99414").then(t.bind(t, "187658"));
      return t => (0, s.jsx)(e, {
        ...t,
        backgroundOption: a,
        optionIsInUse: l
      })
    }),
    children: [l ? (0, s.jsx)("div", {
      className: j.backgroundOptionRing
    }) : null, (0, s.jsx)("div", {
      onFocus: D,
      onMouseEnter: D,
      className: j.backgroundOptionInner,
      children: k
    }), p || A ? (0, s.jsx)("div", {
      className: j.playIcon,
      children: (0, s.jsx)(M.default, {
        width: 12,
        height: 12
      })
    }) : null, R && (0, s.jsx)(m.TextBadge, {
      text: U.default.Messages.NEW,
      className: j.newTextBadge
    })]
  })
}

function S() {
  return (0, s.jsxs)("div", {
    className: j.customBackgroundTooltip,
    children: [(0, s.jsx)(p.default, {
      className: j.customBackgroundTooltipIcon
    }), (0, s.jsx)(i.Text, {
      variant: "text-sm/normal",
      children: U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CUSTOM_TOOLTIP
    })]
  })
}

function b(e) {
  let {
    onClick: a,
    tooltipText: t,
    disabled: n = !1
  } = e, l = (0, c.useStateFromStores)([E.default], () => E.default.hasHotspot(k.HotspotLocations.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));

  function o() {
    O.hideHotspot(k.HotspotLocations.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW)
  }
  let r = l ? U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_NEW_ANIMATED_TOOLTIP : t;
  return (0, s.jsxs)(i.TooltipContainer, {
    text: r,
    className: j.newBackgroundTooltipContainer,
    children: [(0, s.jsxs)(L, {
      className: j.__invalid_backgroundOptionBlurred,
      disabled: n,
      icon: A.default,
      onClick: a,
      onMouseLeave: o,
      onBlur: o,
      text: (0, s.jsxs)("div", {
        className: j.backgroundCustomInlineUpsell,
        children: [(0, s.jsx)(p.default, {
          className: j.backgroundCustomInlineUpsellIcon
        }), (0, s.jsx)("div", {
          className: j.overflowEllipsis,
          children: U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CUSTOM
        })]
      }),
      children: [(0, s.jsx)("div", {
        className: j.backgroundCustomInlineUpsellBackground
      }), (0, s.jsx)("div", {
        className: j.backgroundCustomInlineUpsellBackgroundDarkener
      })]
    }), l && (0, s.jsx)(m.TextBadge, {
      text: U.default.Messages.NEW,
      className: j.newTextBadge
    })]
  })
}

function y(e) {
  let {
    onClick: a
  } = e, t = (0, d.useAnalyticsContext)(), {
    analyticsLocations: l
  } = (0, _.default)(u.default.VIDEO_BACKGROUND_CUSTOM_UPSELL);
  return n.useEffect(() => {
    I.default.track(T.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: B.PremiumUpsellTypes.VIDEO_BACKGROUNDS_INLINE,
      location: t.location,
      location_stack: l
    })
  }, []), (0, s.jsx)(b, {
    onClick: a,
    tooltipText: U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPSELL_TOOLTIP
  })
}

function w(e) {
  let {
    onAddBackgroundImage: a,
    disabled: n
  } = e, l = (0, i.useModalContext)(), o = n ? U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPLOAD_TOOLTIP_MAX_REACHED.format({
    maxCustomBackgrounds: 25
  }) : U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPLOAD_TOOLTIP_PREMIUM, c = [{
    name: U.default.Messages.IMAGES,
    extensions: ["jpg", "jpeg", "png", "gif", "mp4"]
  }];
  return (0, s.jsx)(b, {
    disabled: n,
    onClick: function() {
      (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("99387"), t.e("20653")]).then(t.bind(t, "28130"));
        return t => (0, s.jsx)(e, {
          maxFileSizeBytes: R.MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES,
          onComplete: a,
          uploadType: D.UploadTypes.VIDEO_BACKGROUND,
          filters: c,
          modalTitle: U.default.Messages.UPLOAD_BACKGROUND,
          imageSpecifications: U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPLOAD_SUBTITLE,
          uploadOptionTitle: U.default.Messages.SELECT_IMAGE_MODAL_UPLOAD_IMAGE_OR_VIDEO,
          showUpsellHeader: !0,
          ...t
        })
      }, {
        contextKey: l
      })
    },
    tooltipText: o
  })
}

function z(e) {
  let {
    canUseCustomBackgrounds: a,
    customBackgroundOptions: t,
    selectedOption: l,
    onSelectOption: o,
    onUpsellClick: c,
    onAddBackgroundImage: r,
    smallerOptions: d
  } = e, O = n.useMemo(() => t.sort((e, a) => null == e.last_used || null == a.last_used ? x.default.compare(a.id, e.id) : new Date(a.last_used).getTime() - new Date(e.last_used).getTime()), [t]), E = O.length >= 25, {
    analyticsLocations: A
  } = (0, _.default)(u.default.VIDEO_BACKGROUND_OPTIONS), p = Object.values((0, N.default)()).sort((e, a) => R.DEFAULT_VIDEO_BACKGROUND_SORT[e.id] - R.DEFAULT_VIDEO_BACKGROUND_SORT[a.id]);
  return (0, s.jsx)(_.AnalyticsLocationProvider, {
    value: A,
    children: (0, s.jsxs)("div", {
      className: d ? j.backgroundOptionsSmall : j.backgroundOptionsLarge,
      children: [(0, s.jsx)(L, {
        selected: null == l,
        icon: f.default,
        onClick: () => o(null),
        text: U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_NONE
      }), (0, s.jsx)(L, {
        className: j.__invalid_backgroundOptionBlurred,
        selected: l === R.BLUR_BACKGROUND_OPTION,
        icon: g.default,
        onClick: () => o(R.BLUR_BACKGROUND_OPTION),
        text: U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_BLUR,
        children: (0, s.jsx)("div", {
          className: j.backgroundOptionBlurBackground
        })
      }), a ? (0, s.jsx)(w, {
        onAddBackgroundImage: r,
        disabled: E
      }) : (0, s.jsx)(y, {
        onClick: c
      }), O.map(e => (0, s.jsx)(i.Tooltip, {
        text: (0, s.jsx)(S, {}),
        "aria-label": U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CUSTOM_TOOLTIP,
        children: a => {
          let t = (0, h.getVideoFilterAssetURL)({
            userId: e.user_id,
            assetId: e.id,
            assetHash: e.asset,
            size: 720
          });
          return null == t ? null : (0, n.createElement)(P, {
            ...a,
            key: e.id,
            option: e,
            source: t,
            selected: (0, C.isCustomBackgroundOption)(l) && l.id === e.id,
            onSelectOption: o,
            isVideo: (0, h.isVideoAssetHash)(e.asset),
            isAnimatedImage: (0, h.isAnimatedIconHash)(e.asset)
          })
        }
      }, e.id)), p.map(e => {
        let a = !0 === e.isVideo;
        return (0, s.jsx)(i.Tooltip, {
          text: e.name,
          "aria-label": e.name,
          children: t => (0, n.createElement)(P, {
            ...t,
            key: e.id,
            option: e.id,
            source: e.source,
            selected: l === e.id,
            onSelectOption: o,
            isVideo: a,
            isAnimatedImage: !1,
            hotspotLocation: e.hotspotLocation
          })
        }, e.id)
      })]
    })
  })
}