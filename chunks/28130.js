"use strict";
l.r(t), l.d(t, {
  default: function() {
    return S
  }
}), l("47120");
var a = l("735250"),
  i = l("470079"),
  s = l("442837"),
  n = l("481060"),
  o = l("100527"),
  r = l("906732"),
  c = l("807582"),
  d = l("813197"),
  u = l("430824"),
  f = l("914010"),
  p = l("594174"),
  x = l("451478"),
  h = l("730845"),
  m = l("54264"),
  g = l("466111"),
  C = l("626135"),
  v = l("74538"),
  j = l("621961"),
  I = l("884858"),
  M = l("981631"),
  N = l("486324"),
  _ = l("869783"),
  A = l("689938"),
  T = l("165030");
let E = [{
  gif: l("495682"),
  png: l("458060")
}, {
  gif: l("842786"),
  png: l("460790")
}, {
  gif: l("578831"),
  png: l("642193")
}, {
  gif: l("145908"),
  png: l("690695")
}];

function L(e) {
  let {
    shouldAnimate: t = !0
  } = e, [l, s] = i.useState(!1);
  return (0, a.jsx)("div", {
    className: T.gifGrid,
    onMouseMove: () => s(!0),
    onMouseLeave: () => s(!1),
    children: E.map(e => (0, a.jsx)("div", {
      className: T.gif,
      style: {
        backgroundImage: "url(".concat(t || l ? e.gif : e.png, ")")
      }
    }, e.gif))
  })
}

function F(e) {
  let {
    guildFeature: t,
    guild: l
  } = e;
  return null == t || null == l ? null : (0, a.jsx)("div", {
    className: T.pillWrapper,
    children: (0, a.jsx)(c.default, {
      guildFeature: t,
      guild: l,
      hideTooltip: !0
    })
  })
}

function O(e) {
  let {
    uploadType: t,
    guild: l
  } = e;
  return (0, a.jsxs)("div", {
    className: T.optionBoxText,
    children: [(0, a.jsx)(F, {
      guild: l,
      guildFeature: (0, j.getGuildFeatureFromUploadType)(t, {
        isGIF: !0
      })
    }), (0, a.jsxs)("div", {
      className: T.optionBoxDescription,
      children: [(0, j.shouldShowPremiumIconForGIFPickerOption)(t) && (0, a.jsx)(n.TooltipContainer, {
        className: T.nitroWheelFlairContainer,
        text: A.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
        children: (0, a.jsx)(g.default, {
          className: T.nitroWheelFlair
        })
      }), A.default.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF]
    })]
  })
}

function y(e) {
  let {
    title: t,
    uploadType: l,
    guild: i
  } = e;
  return (0, a.jsxs)("div", {
    className: T.optionBoxText,
    children: [(0, a.jsx)(F, {
      guildFeature: (0, j.getGuildFeatureFromUploadType)(l, {
        isGIF: !1
      }),
      guild: i
    }), (0, a.jsx)("div", {
      className: T.optionBoxDescription,
      children: t
    })]
  })
}

function S(e) {
  let {
    transitionState: t,
    onClose: c,
    onComplete: g,
    uploadType: j,
    maxFileSizeBytes: E,
    showUpsellHeader: F,
    filters: S,
    analyticsLocation: H,
    analyticsLocations: R = [],
    modalSubTitle: b,
    imageSpecifications: U,
    modalTitle: G = A.default.Messages.SELECT_IMAGE_MODAL_TITLE,
    uploadOptionTitle: P = A.default.Messages.UPLOAD_IMAGE
  } = e, V = (0, s.useStateFromStores)([x.default], () => x.default.isFocused()), w = (0, s.useStateFromStores)([p.default], () => p.default.getCurrentUser()), D = (0, s.useStateFromStores)([f.default], () => f.default.getGuildId()), k = (0, s.useStateFromStores)([u.default], () => u.default.getGuild(D)), {
    reducedMotion: B
  } = i.useContext(n.AccessibilityPreferencesContext), Z = (0, n.useModalContext)(), z = !v.default.canUseAnimatedAvatar(w) && j === N.UploadTypes.AVATAR, {
    analyticsLocations: W
  } = (0, r.default)(R, o.default.SELECT_IMAGE_MODAL);

  function K(e, t) {
    let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    c(), g(e, t, l)
  }
  return i.useEffect(() => {
    z && C.default.track(M.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: M.AnalyticsSections.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
      location_stack: W
    }), C.default.track(M.AnalyticEvents.OPEN_MODAL, {
      type: M.AnalyticsSections.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
      location: H
    })
  }, [z, H, W]), (0, a.jsxs)(n.ModalRoot, {
    transitionState: t,
    size: n.ModalSize.SMALL,
    children: [(0, a.jsxs)(n.ModalHeader, {
      className: T.modalHeader,
      separator: !1,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)(n.FormTitle, {
          tag: n.FormTitleTags.H1,
          className: T.modalTitle,
          children: G
        }), null != b ? (0, a.jsx)(n.Text, {
          variant: "text-md/normal",
          children: b
        }) : null]
      }), (0, a.jsx)(n.ModalCloseButton, {
        onClick: c,
        className: T.modalCloseButton
      })]
    }), (0, a.jsxs)(n.ModalContent, {
      className: T.modalContent,
      children: [(0, a.jsxs)("div", {
        className: T.imagePickerContainer,
        children: [(0, a.jsxs)(n.Clickable, {
          className: T.optionBox,
          children: [(0, a.jsx)("div", {
            className: T.contentCircle,
            children: (0, a.jsx)(m.default, {
              className: T.uploadIcon
            })
          }), (0, a.jsx)(n.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: (0, a.jsx)(y, {
              title: P,
              uploadType: j,
              guild: k
            })
          }), (0, a.jsx)(d.default, {
            onChange: function(e, t) {
              if (t.type === _.FileTypes.MP4) return K(e, t);
              (0, n.openModalLazy)(async () => {
                let {
                  default: i
                } = await Promise.all([l.e("99387"), l.e("48017")]).then(l.bind(l, "850085"));
                return l => (0, a.jsx)(i, {
                  imgURI: e,
                  file: t,
                  onCrop: K,
                  uploadType: j,
                  showUpsellHeader: F,
                  allowSkip: !0,
                  analyticsPage: null == H ? void 0 : H.page,
                  ...l
                })
              }, {
                contextKey: Z
              })
            },
            maxFileSizeBytes: E,
            onFileSizeError: function() {
              c(), (0, I.default)(E)
            },
            filters: S
          })]
        }), (0, a.jsxs)(n.Clickable, {
          className: T.optionBox,
          onClick: function() {
            (0, n.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([l.e("99387"), l.e("72891")]).then(l.bind(l, "240518"));
              return t => (0, a.jsx)(e, {
                uploadType: j,
                onComplete: (e, t) => K(e, t, !0),
                showUpsellHeader: F,
                analyticsPage: null == H ? void 0 : H.page,
                ...t
              })
            }, {
              contextKey: Z
            })
          },
          children: [(0, a.jsxs)("div", {
            className: T.contentCircle,
            children: [(0, a.jsx)(L, {
              shouldAnimate: V && !B.enabled
            }), (0, a.jsx)("div", {
              className: T.gifIconContainer,
              children: (0, a.jsx)(h.default, {
                className: T.gifIcon
              })
            })]
          }), (0, a.jsx)(n.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: (0, a.jsx)(O, {
              uploadType: j,
              guild: k
            })
          })]
        })]
      }), null != U ? (0, a.jsx)(n.Text, {
        className: T.imageSpecifications,
        variant: "text-sm/normal",
        children: U
      }) : null]
    })]
  })
}