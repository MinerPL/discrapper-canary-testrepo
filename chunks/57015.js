"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007"), n("70102");
var l = n("37983"),
  i = n("884691"),
  r = n("917351"),
  a = n("77078"),
  o = n("812204"),
  s = n("685665"),
  u = n("652914"),
  c = n("95689"),
  d = n("599110"),
  E = n("8731"),
  f = n("817295"),
  A = n("75015"),
  _ = n("49111"),
  T = n("917219"),
  p = n("782340"),
  h = n("879777"),
  I = e => {
    let {
      file: t,
      imgURI: n,
      transitionState: I,
      allowSkip: R = !1,
      onCrop: C,
      onClose: g,
      uploadType: m = A.UploadTypes.AVATAR,
      showUpsellHeader: N = !1,
      analyticsPage: M
    } = e, [S, O] = i.useState({
      width: 0,
      height: 0
    }), [v, w] = i.useState({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }), [D, L] = i.useState(!1), [U, y] = i.useState(1), [b, P] = i.useState({
      x: 0,
      y: 0
    }), [H, x] = i.useState(null), [G, B] = i.useState(!1), {
      AnalyticsLocationProvider: V
    } = (0, s.default)(o.default.IMAGE_CROPPING_MODAL), j = i.useRef({
      x: 0,
      y: 0
    }), k = i.useRef(null), F = i.useRef(null), W = "image/gif" === t.type;
    i.useEffect(() => {
      (0, f.default)()
    }, []), i.useEffect(() => {
      W && N && d.default.track(_.AnalyticEvents.OPEN_MODAL, {
        type: _.AnalyticsSections.CROP_GIF_MODAL,
        location: {
          page: M
        }
      })
    }, [N, M, W]);
    let Z = () => {
        switch (m) {
          case A.UploadTypes.BANNER:
            return {
              height: A.USER_BANNER_MAX_HEIGHT, width: A.USER_BANNER_MAX_WIDTH
            };
          case A.UploadTypes.VIDEO_BACKGROUND:
            return T.BACKGROUND_REPLACEMENT_SIZE;
          case A.UploadTypes.AVATAR:
          case A.UploadTypes.AVATAR_DECORATION:
            return {
              height: _.AVATAR_MAX_SIZE, width: _.AVATAR_MAX_SIZE
            };
          case A.UploadTypes.GUILD_BANNER:
            return {
              height: A.GUILD_BANNER_MAX_HEIGHT, width: A.GUILD_BANNER_MAX_WIDTH
            };
          case A.UploadTypes.SCHEDULED_EVENT_IMAGE:
            return {
              height: A.SCHEDULED_EVENT_IMAGE_MAX_HEIGHT, width: A.SCHEDULED_EVENT_IMAGE_MAX_WIDTH
            };
          case A.UploadTypes.HOME_HEADER:
            return {
              height: A.HOME_HEADER_MAX_HEIGHT, width: A.HOME_HEADER_MAX_WIDTH
            }
        }
      },
      X = i.useCallback((e, t, n) => {
        j.current = (0, E.getBoundedCoordinates)(e, t, n), null != k.current && (k.current.style.transform = "translate3d(".concat(j.current.x, "px, ").concat(j.current.y, "px, 0)"))
      }, [k]),
      Y = i.useCallback(() => {
        if (null == k.current || U > 1) return;
        let {
          width: e,
          height: t
        } = k.current.getBoundingClientRect(), {
          width: n,
          height: l
        } = (0, E.adjustImageDimensionsForAspectRatio)(m, e, t), i = (0, E.calculateOverlaySize)(m, n, l, t);
        x({
          width: n,
          height: l
        }), O(i), w((0, E.calculateDragBoundaries)(n, l, i))
      }, [m, U]),
      K = i.useCallback(e => {
        let {
          x: t,
          y: n
        } = j.current;
        if (!D || e.clientX === t && e.clientY === n) return;
        let l = e.clientX - b.x,
          i = e.clientY - b.y;
        X(l, i, v)
      }, [v, D, b, X]),
      z = () => {
        L(!1)
      },
      q = () => {
        let e = Z();
        return e.width !== e.height
      },
      J = async () => {
        let e;
        if (null == k.current) return;
        B(!0);
        let n = k.current,
          l = Z();
        if (W) try {
          let {
            result: i,
            cancelFn: r
          } = await (0, E.cropGIF)(t, n, S, j.current, l);
          F.current = r, e = await i, F.current = null
        } catch (e) {
          var i;
          throw null === (i = F.current) || void 0 === i || i.call(F), F.current = null, Error("Error cropping GIF")
        } else e = (0, E.cropStaticImage)(n, S, j.current, l);
        await C(e, t), B(!1), g()
      };
    return i.useEffect(() => (window.addEventListener("mouseup", z), window.addEventListener("resize", Y), () => {
      window.removeEventListener("mouseup", z), window.removeEventListener("resize", Y)
    }), [Y]), i.useEffect(() => () => {
      null != F.current && F.current()
    }, []), i.useEffect(() => {
      if (D) return window.addEventListener("mousemove", K), () => window.removeEventListener("mousemove", K)
    }, [K, D]), (0, l.jsx)(V, {
      children: (0, l.jsxs)(a.ModalRoot, {
        onAnimationEnd: Y,
        transitionState: I,
        size: a.ModalSize.MEDIUM,
        children: [N && (0, l.jsx)(u.default, {
          type: m,
          analyticsPage: M,
          analyticsSection: _.AnalyticsSections.CROP_GIF_MODAL,
          isGIF: W,
          banner: n
        }), (0, l.jsx)(a.ModalHeader, {
          separator: !1,
          children: (0, l.jsx)(a.FormTitle, {
            className: h.titleCase,
            tag: a.FormTitleTags.H1,
            children: p.default.Messages.AVATAR_UPLOAD_EDIT_MEDIA
          })
        }), (0, l.jsxs)(a.ModalContent, {
          className: h.modalContent,
          children: [(0, l.jsxs)("div", {
            className: h.editingContainer,
            children: [(0, l.jsx)("img", {
              style: {
                opacity: null == H ? 0 : 1,
                transform: "translate3d(".concat(j.current.x, "px, ").concat(j.current.y, "px, 0px)"),
                ...(() => {
                  if (null == H) return {};
                  let e = H.width / H.height,
                    t = q() && e > A.BANNER_ASPECT_RATIO ? S.height / H.height : 1;
                  return {
                    width: H.width * U * t,
                    minWidth: H.width * U * t,
                    height: H.height * U * t
                  }
                })()
              },
              className: G ? h.imageDisabled : h.imageEnabled,
              src: n,
              alt: "avatar",
              ref: k,
              onMouseDown: e => {
                let t = e.clientX - j.current.x,
                  n = e.clientY - j.current.y;
                P({
                  x: t,
                  y: n
                }), L(!0)
              },
              draggable: !1
            }), (0, l.jsx)("div", {
              className: m === A.UploadTypes.AVATAR ? h.overlayAvatar : h.overlayBanner,
              style: {
                opacity: null == H ? 0 : 1,
                width: S.width,
                height: S.height
              }
            })]
          }), (0, l.jsxs)("div", {
            className: h.sliderContainer,
            children: [(0, l.jsx)(c.default, {
              className: h.icon,
              width: 24,
              height: 24
            }), (0, l.jsx)(a.Slider, {
              initialValue: 1,
              minValue: 1,
              maxValue: 2,
              keyboardStep: .025,
              asValueChanges: e => {
                if (null == H) return;
                let {
                  width: t,
                  height: n
                } = H, l = (0, E.calculateDragBoundaries)(t * e, n * e, S), {
                  x: i,
                  y: a
                } = j.current;
                (!(0, r.inRange)(i, l.right, l.left) || !(0, r.inRange)(a, l.top, l.bottom)) && X(i, a, l), y(e), w(l)
              },
              disabled: G,
              equidistant: !0,
              hideBubble: !0,
              "aria-label": p.default.Messages.FORM_LABEL_AVATAR_SIZE
            }), (0, l.jsx)(c.default, {
              className: h.icon,
              width: 48,
              height: 48
            })]
          })]
        }), (0, l.jsxs)(a.ModalFooter, {
          className: h.modalFooter,
          children: [R ? (0, l.jsx)(a.Button, {
            className: h.cancelButton,
            look: a.Button.Looks.LINK,
            color: a.Button.Colors.PRIMARY,
            size: a.ButtonSizes.SMALL,
            onClick: () => {
              R && (C(n, t), g())
            },
            children: p.default.Messages.AVATAR_UPLOAD_SKIP
          }) : null, (0, l.jsxs)("div", {
            className: h.buttonsRight,
            children: [(0, l.jsx)(a.Button, {
              className: h.cancelButton,
              look: a.Button.Looks.LINK,
              color: a.Button.Colors.PRIMARY,
              size: a.ButtonSizes.SMALL,
              onClick: () => {
                if (null != F.current) {
                  F.current(), F.current = null, B(!1);
                  return
                }
                g()
              },
              children: p.default.Messages.AVATAR_UPLOAD_CANCEL
            }), (0, l.jsx)(a.Button, {
              submitting: G,
              size: a.ButtonSizes.SMALL,
              onClick: J,
              children: p.default.Messages.AVATAR_UPLOAD_APPLY
            })]
          })]
        })]
      })
    })
  }