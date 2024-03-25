"use strict";
a.r(t), a.d(t, {
  default: function() {
    return z
  }
}), a("222007");
var s = a("37983"),
  n = a("884691"),
  l = a("414456"),
  o = a.n(l),
  c = a("446674"),
  i = a("77078"),
  r = a("272030"),
  d = a("997289"),
  u = a("812204"),
  O = a("685665"),
  E = a("597517"),
  _ = a("269596"),
  g = a("589578"),
  A = a("818643"),
  p = a("216422"),
  f = a("468759"),
  M = a("132755"),
  m = a("956089"),
  I = a("58608"),
  v = a("599110"),
  h = a("315102"),
  x = a("299039"),
  C = a("239448"),
  N = a("977801"),
  R = a("917219"),
  T = a("49111"),
  k = a("533613"),
  D = a("75015"),
  B = a("646718"),
  U = a("782340"),
  j = a("754146");

function L(e) {
  let {
    icon: t,
    onClick: a,
    text: n,
    children: l,
    className: c,
    selected: r = !1,
    disabled: d = !1,
    onMouseLeave: u,
    onBlur: O
  } = e;
  return (0, s.jsxs)(i.Clickable, {
    className: o(c, j.backgroundOption, {
      [j.backgroundOptionSelected]: r,
      [j.backgroundOptionDisabled]: d
    }),
    onMouseLeave: u,
    onBlur: O,
    onClick: d ? void 0 : a,
    children: [r ? (0, s.jsx)("div", {
      className: j.backgroundOptionRing
    }) : null, (0, s.jsxs)("div", {
      className: j.backgroundOptionInner,
      children: [l, (0, s.jsxs)("div", {
        className: j.backgroundOptionContent,
        children: [(0, s.jsx)(t, {
          className: o(j.backgroundIconOptionIcon),
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
    option: t,
    source: a,
    isAnimated: l
  } = e, [o, c] = n.useState(!1);
  if (n.useEffect(() => {
      let e = new Image;
      e.src = a
    }, [a]), !l || null == t) return (0, s.jsx)("div", {
    className: j.backgroundImageOption,
    style: {
      backgroundImage: "url(".concat(a, ")")
    }
  });
  let i = (0, h.getVideoFilterAssetURL)({
    userId: t.user_id,
    assetId: t.id,
    assetHash: t.asset,
    size: 720,
    canAnimate: !1
  });
  return (0, s.jsx)("img", {
    onMouseMove: () => c(!0),
    onMouseLeave: () => c(!1),
    className: j.backgroundImageOption,
    src: o ? a : i,
    alt: t.id
  })
}

function S(e) {
  let {
    option: t,
    source: n,
    selected: l = !1,
    onSelectOption: g,
    isAnimatedImage: A,
    isVideo: p,
    hotspotLocation: f,
    ...h
  } = e, x = (0, d.useAnalyticsContext)(), {
    analyticsLocations: N
  } = (0, O.default)(u.default.VIDEO_BACKGROUND_IMAGE_OPTION), R = (0, c.useStateFromStores)([_.default], () => null != f && _.default.hasHotspot(f)), k = p ? (0, s.jsx)(I.default, {
    className: j.backgroundImageOption,
    src: n,
    loop: !0,
    playOnHover: !0,
    muted: !0
  }) : (0, s.jsx)(V, {
    isAnimated: A,
    option: (0, C.isCustomBackgroundOption)(t) ? t : void 0,
    source: n
  });

  function D() {
    null != f && R && (E.hideHotspot(f), v.default.track(T.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: B.PremiumUpsellTypes.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
      location: x.location,
      location_stack: N
    }))
  }
  return (0, s.jsxs)(i.Clickable, {
    ...h,
    className: o(j.backgroundOption, {
      [j.backgroundOptionSelected]: l
    }),
    onClick: () => g(t),
    onContextMenu: e => (0, r.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await a.el("597035").then(a.bind(a, "597035"));
      return a => (0, s.jsx)(e, {
        ...a,
        backgroundOption: t,
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

function P() {
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
    onClick: t,
    tooltipText: a,
    disabled: n = !1
  } = e, l = (0, c.useStateFromStores)([_.default], () => _.default.hasHotspot(k.HotspotLocations.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));

  function o() {
    E.hideHotspot(k.HotspotLocations.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW)
  }
  let r = l ? U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_NEW_ANIMATED_TOOLTIP : a;
  return (0, s.jsxs)(i.TooltipContainer, {
    text: r,
    className: j.newBackgroundTooltipContainer,
    children: [(0, s.jsxs)(L, {
      className: j.backgroundOptionBlurred,
      disabled: n,
      icon: A.default,
      onClick: t,
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
    onClick: t
  } = e, a = (0, d.useAnalyticsContext)(), {
    analyticsLocations: l
  } = (0, O.default)(u.default.VIDEO_BACKGROUND_CUSTOM_UPSELL);
  return n.useEffect(() => {
    v.default.track(T.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: B.PremiumUpsellTypes.VIDEO_BACKGROUNDS_INLINE,
      location: a.location,
      location_stack: l
    })
  }, []), (0, s.jsx)(b, {
    onClick: t,
    tooltipText: U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPSELL_TOOLTIP
  })
}

function w(e) {
  let {
    onAddBackgroundImage: t,
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
        } = await a.el("420333").then(a.bind(a, "420333"));
        return a => (0, s.jsx)(e, {
          maxFileSizeBytes: R.MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES,
          onComplete: t,
          uploadType: D.UploadTypes.VIDEO_BACKGROUND,
          filters: c,
          modalTitle: U.default.Messages.UPLOAD_BACKGROUND,
          imageSpecifications: U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPLOAD_SUBTITLE,
          uploadOptionTitle: U.default.Messages.SELECT_IMAGE_MODAL_UPLOAD_IMAGE_OR_VIDEO,
          showUpsellHeader: !0,
          ...a
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
    canUseCustomBackgrounds: t,
    customBackgroundOptions: a,
    selectedOption: l,
    onSelectOption: o,
    onUpsellClick: c,
    onAddBackgroundImage: r,
    smallerOptions: d
  } = e, E = n.useMemo(() => a.sort((e, t) => null == e.last_used || null == t.last_used ? x.default.compare(t.id, e.id) : new Date(t.last_used).getTime() - new Date(e.last_used).getTime()), [a]), _ = E.length >= 25, {
    analyticsLocations: A
  } = (0, O.default)(u.default.VIDEO_BACKGROUND_OPTIONS), p = Object.values((0, N.default)()), M = p.sort((e, t) => R.DEFAULT_VIDEO_BACKGROUND_SORT[e.id] - R.DEFAULT_VIDEO_BACKGROUND_SORT[t.id]);
  return (0, s.jsx)(O.AnalyticsLocationProvider, {
    value: A,
    children: (0, s.jsxs)("div", {
      className: d ? j.backgroundOptionsSmall : j.backgroundOptionsLarge,
      children: [(0, s.jsx)(L, {
        selected: null == l,
        icon: f.default,
        onClick: () => o(null),
        text: U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_NONE
      }), (0, s.jsx)(L, {
        className: j.backgroundOptionBlurred,
        selected: l === R.BLUR_BACKGROUND_OPTION,
        icon: g.default,
        onClick: () => o(R.BLUR_BACKGROUND_OPTION),
        text: U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_BLUR,
        children: (0, s.jsx)("div", {
          className: j.backgroundOptionBlurBackground
        })
      }), t ? (0, s.jsx)(w, {
        onAddBackgroundImage: r,
        disabled: _
      }) : (0, s.jsx)(y, {
        onClick: c
      }), E.map(e => (0, s.jsx)(i.Tooltip, {
        text: (0, s.jsx)(P, {}),
        "aria-label": U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CUSTOM_TOOLTIP,
        children: t => {
          let a = (0, h.getVideoFilterAssetURL)({
            userId: e.user_id,
            assetId: e.id,
            assetHash: e.asset,
            size: 720
          });
          return null == a ? null : (0, n.createElement)(S, {
            ...t,
            key: e.id,
            option: e,
            source: a,
            selected: (0, C.isCustomBackgroundOption)(l) && l.id === e.id,
            onSelectOption: o,
            isVideo: (0, h.isVideoAssetHash)(e.asset),
            isAnimatedImage: (0, h.isAnimatedIconHash)(e.asset)
          })
        }
      }, e.id)), M.map(e => {
        let t = !0 === e.isVideo;
        return (0, s.jsx)(i.Tooltip, {
          text: e.name,
          "aria-label": e.name,
          children: a => (0, n.createElement)(S, {
            ...a,
            key: e.id,
            option: e.id,
            source: e.source,
            selected: l === e.id,
            onSelectOption: o,
            isVideo: t,
            isAnimatedImage: !1,
            hotspotLocation: e.hotspotLocation
          })
        }, e.id)
      })]
    })
  })
}