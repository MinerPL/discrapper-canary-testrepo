"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
  }
}), n("222007");
var a = n("37983"),
  r = n("884691"),
  l = n("446674"),
  i = n("77078"),
  s = n("812204"),
  u = n("685665"),
  o = n("634544"),
  c = n("694187"),
  d = n("305961"),
  f = n("162771"),
  p = n("697218"),
  h = n("471671"),
  m = n("887718"),
  E = n("818643"),
  S = n("216422"),
  T = n("599110"),
  _ = n("719923"),
  y = n("354460"),
  C = n("424960"),
  I = n("49111"),
  g = n("75015"),
  v = n("991207"),
  A = n("782340"),
  N = n("81557");
let x = [{
  gif: n("6916"),
  png: n("12412")
}, {
  gif: n("463095"),
  png: n("733105")
}, {
  gif: n("749003"),
  png: n("918927")
}, {
  gif: n("54400"),
  png: n("122574")
}];

function P(e) {
  let {
    shouldAnimate: t = !0
  } = e, [n, l] = r.useState(!1);
  return (0, a.jsx)("div", {
    className: N.gifGrid,
    onMouseMove: () => l(!0),
    onMouseLeave: () => l(!1),
    children: x.map(e => (0, a.jsx)("div", {
      className: N.gif,
      style: {
        backgroundImage: "url(".concat(t || n ? e.gif : e.png, ")")
      }
    }, e.gif))
  })
}

function L(e) {
  let {
    guildFeature: t,
    guild: n
  } = e;
  return null == t || null == n ? null : (0, a.jsx)("div", {
    className: N.pillWrapper,
    children: (0, a.jsx)(o.default, {
      guildFeature: t,
      guild: n,
      hideTooltip: !0
    })
  })
}

function R(e) {
  let {
    uploadType: t,
    guild: n
  } = e;
  return (0, a.jsxs)("div", {
    className: N.optionBoxText,
    children: [(0, a.jsx)(L, {
      guild: n,
      guildFeature: (0, y.getGuildFeatureFromUploadType)(t, {
        isGIF: !0
      })
    }), (0, a.jsxs)("div", {
      className: N.optionBoxDescription,
      children: [(0, y.shouldShowPremiumIconForGIFPickerOption)(t) && (0, a.jsx)(i.TooltipContainer, {
        className: N.nitroWheelFlairContainer,
        text: A.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
        children: (0, a.jsx)(S.default, {
          className: N.nitroWheelFlair
        })
      }), A.default.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF]
    })]
  })
}

function M(e) {
  let {
    title: t,
    uploadType: n,
    guild: r
  } = e;
  return (0, a.jsxs)("div", {
    className: N.optionBoxText,
    children: [(0, a.jsx)(L, {
      guildFeature: (0, y.getGuildFeatureFromUploadType)(n, {
        isGIF: !1
      }),
      guild: r
    }), (0, a.jsx)("div", {
      className: N.optionBoxDescription,
      children: t
    })]
  })
}

function F(e) {
  let {
    transitionState: t,
    onClose: o,
    onComplete: S,
    uploadType: y,
    maxFileSizeBytes: x,
    showUpsellHeader: L,
    filters: F,
    analyticsLocation: O,
    analyticsLocations: U = [],
    modalSubTitle: b,
    imageSpecifications: j,
    modalTitle: H = A.default.Messages.SELECT_IMAGE_MODAL_TITLE,
    uploadOptionTitle: w = A.default.Messages.UPLOAD_IMAGE
  } = e, D = (0, l.useStateFromStores)([h.default], () => h.default.isFocused()), k = (0, l.useStateFromStores)([p.default], () => p.default.getCurrentUser()), G = (0, l.useStateFromStores)([f.default], () => f.default.getGuildId()), B = (0, l.useStateFromStores)([d.default], () => d.default.getGuild(G)), {
    reducedMotion: V
  } = r.useContext(i.AccessibilityPreferencesContext), z = (0, i.useModalContext)(), K = !_.default.canUseAnimatedAvatar(k) && y === g.UploadTypes.AVATAR, {
    analyticsLocations: Z
  } = (0, u.default)(U, s.default.SELECT_IMAGE_MODAL);

  function W(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    o(), S(e, t, n)
  }
  return r.useEffect(() => {
    K && T.default.track(I.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: I.AnalyticsSections.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
      location_stack: Z
    }), T.default.track(I.AnalyticEvents.OPEN_MODAL, {
      type: I.AnalyticsSections.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
      location: O
    })
  }, [K, O, Z]), (0, a.jsxs)(i.ModalRoot, {
    transitionState: t,
    size: i.ModalSize.SMALL,
    children: [(0, a.jsxs)(i.ModalHeader, {
      className: N.modalHeader,
      separator: !1,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)(i.FormTitle, {
          tag: i.FormTitleTags.H1,
          className: N.modalTitle,
          children: H
        }), null != b ? (0, a.jsx)(i.Text, {
          variant: "text-md/normal",
          children: b
        }) : null]
      }), (0, a.jsx)(i.ModalCloseButton, {
        onClick: o,
        className: N.modalCloseButton
      })]
    }), (0, a.jsxs)(i.ModalContent, {
      className: N.modalContent,
      children: [(0, a.jsxs)("div", {
        className: N.imagePickerContainer,
        children: [(0, a.jsxs)(i.Clickable, {
          className: N.optionBox,
          children: [(0, a.jsx)("div", {
            className: N.contentCircle,
            children: (0, a.jsx)(E.default, {
              className: N.uploadIcon
            })
          }), (0, a.jsx)(i.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: (0, a.jsx)(M, {
              title: w,
              uploadType: y,
              guild: B
            })
          }), (0, a.jsx)(c.default, {
            onChange: function(e, t) {
              if (t.type === v.FileTypes.MP4) return W(e, t);
              (0, i.openModalLazy)(async () => {
                let {
                  default: r
                } = await n.el("57015").then(n.bind(n, "57015"));
                return n => (0, a.jsx)(r, {
                  imgURI: e,
                  file: t,
                  onCrop: W,
                  uploadType: y,
                  showUpsellHeader: L,
                  allowSkip: !0,
                  analyticsPage: null == O ? void 0 : O.page,
                  ...n
                })
              }, {
                contextKey: z
              })
            },
            maxFileSizeBytes: x,
            onFileSizeError: function() {
              o(), (0, C.default)(x)
            },
            filters: F
          })]
        }), (0, a.jsxs)(i.Clickable, {
          className: N.optionBox,
          onClick: function() {
            (0, i.openModalLazy)(async () => {
              let {
                default: e
              } = await n.el("646077").then(n.bind(n, "646077"));
              return t => (0, a.jsx)(e, {
                uploadType: y,
                onComplete: (e, t) => W(e, t, !0),
                showUpsellHeader: L,
                analyticsPage: null == O ? void 0 : O.page,
                ...t
              })
            }, {
              contextKey: z
            })
          },
          children: [(0, a.jsxs)("div", {
            className: N.contentCircle,
            children: [(0, a.jsx)(P, {
              shouldAnimate: D && !V.enabled
            }), (0, a.jsx)("div", {
              className: N.gifIconContainer,
              children: (0, a.jsx)(m.default, {
                className: N.gifIcon
              })
            })]
          }), (0, a.jsx)(i.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: (0, a.jsx)(R, {
              uploadType: y,
              guild: B
            })
          })]
        })]
      }), null != j ? (0, a.jsx)(i.Text, {
        className: N.imageSpecifications,
        variant: "text-sm/normal",
        children: j
      }) : null]
    })]
  })
}