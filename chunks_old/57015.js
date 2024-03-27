"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("222007"), n("70102");
var r = n("37983"),
  i = n("884691"),
  a = n("917351"),
  l = n("77078"),
  s = n("812204"),
  u = n("685665"),
  o = n("652914"),
  c = n("95689"),
  d = n("599110"),
  E = n("8731"),
  _ = n("817295"),
  A = n("75015"),
  T = n("49111"),
  f = n("917219"),
  I = n("782340"),
  h = n("304379"),
  R = e => {
    let {
      file: t,
      imgURI: n,
      transitionState: R,
      allowSkip: p = !1,
      onCrop: N,
      onClose: C,
      uploadType: m = A.UploadTypes.AVATAR,
      showUpsellHeader: M = !1,
      analyticsPage: S
    } = e, [O, D] = i.useState({
      width: 0,
      height: 0
    }), [g, L] = i.useState({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }), [P, y] = i.useState(!1), [U, v] = i.useState(1), [H, w] = i.useState({
      x: 0,
      y: 0
    }), [G, B] = i.useState(null), [x, b] = i.useState(!1), {
      analyticsLocations: V
    } = (0, u.default)(s.default.IMAGE_CROPPING_MODAL), j = i.useRef({
      x: 0,
      y: 0
    }), F = i.useRef(null), W = i.useRef(null), k = "image/gif" === t.type;
    i.useEffect(() => {
      (0, _.default)()
    }, []), i.useEffect(() => {
      k && M && d.default.track(T.AnalyticEvents.OPEN_MODAL, {
        type: T.AnalyticsSections.CROP_GIF_MODAL,
        location: {
          page: S
        }
      })
    }, [M, S, k]);
    let X = () => {
        switch (m) {
          case A.UploadTypes.BANNER:
            return {
              height: A.USER_BANNER_MAX_HEIGHT, width: A.USER_BANNER_MAX_WIDTH
            };
          case A.UploadTypes.VIDEO_BACKGROUND:
            return f.BACKGROUND_REPLACEMENT_SIZE;
          case A.UploadTypes.AVATAR:
          case A.UploadTypes.AVATAR_DECORATION:
            return {
              height: T.AVATAR_MAX_SIZE, width: T.AVATAR_MAX_SIZE
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
      Y = i.useCallback((e, t, n) => {
        j.current = (0, E.getBoundedCoordinates)(e, t, n), null != F.current && (F.current.style.transform = "translate3d(".concat(j.current.x, "px, ").concat(j.current.y, "px, 0)"))
      }, [F]),
      Z = i.useCallback(() => {
        if (null == F.current || U > 1) return;
        let {
          width: e,
          height: t
        } = F.current.getBoundingClientRect(), {
          width: n,
          height: r
        } = (0, E.adjustImageDimensionsForAspectRatio)(m, e, t), i = (0, E.calculateOverlaySize)(m, n, r, t);
        B({
          width: n,
          height: r
        }), D(i), L((0, E.calculateDragBoundaries)(n, r, i))
      }, [m, U]),
      z = i.useCallback(e => {
        let {
          x: t,
          y: n
        } = j.current;
        if (!P || e.clientX === t && e.clientY === n) return;
        let r = e.clientX - H.x,
          i = e.clientY - H.y;
        Y(r, i, g)
      }, [g, P, H, Y]),
      K = () => {
        y(!1)
      },
      q = () => {
        let e = X();
        return e.width !== e.height
      },
      J = async () => {
        let e;
        if (null == F.current) return;
        b(!0);
        let n = F.current,
          r = X();
        if (k) try {
          let {
            result: i,
            cancelFn: a
          } = await (0, E.cropGIF)(t, n, O, j.current, r);
          W.current = a, e = await i, W.current = null
        } catch (e) {
          var i;
          throw null === (i = W.current) || void 0 === i || i.call(W), W.current = null, Error("Error cropping GIF")
        } else e = (0, E.cropStaticImage)(n, O, j.current, r);
        await N(e, t), b(!1), C()
      };
    return i.useEffect(() => (window.addEventListener("mouseup", K), window.addEventListener("resize", Z), () => {
      window.removeEventListener("mouseup", K), window.removeEventListener("resize", Z)
    }), [Z]), i.useEffect(() => () => {
      null != W.current && W.current()
    }, []), i.useEffect(() => {
      if (P) return window.addEventListener("mousemove", z), () => window.removeEventListener("mousemove", z)
    }, [z, P]), (0, r.jsx)(u.AnalyticsLocationProvider, {
      value: V,
      children: (0, r.jsxs)(l.ModalRoot, {
        onAnimationEnd: Z,
        transitionState: R,
        size: l.ModalSize.MEDIUM,
        children: [M && (0, r.jsx)(o.default, {
          type: m,
          analyticsPage: S,
          analyticsSection: T.AnalyticsSections.CROP_GIF_MODAL,
          isGIF: k,
          banner: n
        }), (0, r.jsx)(l.ModalHeader, {
          separator: !1,
          children: (0, r.jsx)(l.FormTitle, {
            className: h.titleCase,
            tag: l.FormTitleTags.H1,
            children: I.default.Messages.AVATAR_UPLOAD_EDIT_MEDIA
          })
        }), (0, r.jsxs)(l.ModalContent, {
          className: h.modalContent,
          children: [(0, r.jsxs)("div", {
            className: h.editingContainer,
            children: [(0, r.jsx)("img", {
              style: {
                opacity: null == G ? 0 : 1,
                transform: "translate3d(".concat(j.current.x, "px, ").concat(j.current.y, "px, 0px)"),
                ...(() => {
                  if (null == G) return {};
                  let e = G.width / G.height,
                    t = q() && e > A.BANNER_ASPECT_RATIO ? O.height / G.height : 1;
                  return {
                    width: G.width * U * t,
                    minWidth: G.width * U * t,
                    height: G.height * U * t
                  }
                })()
              },
              className: x ? h.imageDisabled : h.imageEnabled,
              src: n,
              alt: "avatar",
              ref: F,
              onMouseDown: e => {
                let t = e.clientX - j.current.x,
                  n = e.clientY - j.current.y;
                w({
                  x: t,
                  y: n
                }), y(!0)
              },
              draggable: !1
            }), (0, r.jsx)("div", {
              className: m === A.UploadTypes.AVATAR ? h.overlayAvatar : h.overlayBanner,
              style: {
                opacity: null == G ? 0 : 1,
                width: O.width,
                height: O.height
              }
            })]
          }), (0, r.jsxs)("div", {
            className: h.sliderContainer,
            children: [(0, r.jsx)(c.default, {
              className: h.icon,
              width: 24,
              height: 24
            }), (0, r.jsx)(l.Slider, {
              initialValue: 1,
              minValue: 1,
              maxValue: 2,
              keyboardStep: .025,
              asValueChanges: e => {
                if (null == G) return;
                let {
                  width: t,
                  height: n
                } = G, r = (0, E.calculateDragBoundaries)(t * e, n * e, O), {
                  x: i,
                  y: l
                } = j.current;
                (!(0, a.inRange)(i, r.right, r.left) || !(0, a.inRange)(l, r.top, r.bottom)) && Y(i, l, r), v(e), L(r)
              },
              disabled: x,
              equidistant: !0,
              hideBubble: !0,
              "aria-label": I.default.Messages.FORM_LABEL_AVATAR_SIZE
            }), (0, r.jsx)(c.default, {
              className: h.icon,
              width: 48,
              height: 48
            })]
          })]
        }), (0, r.jsxs)(l.ModalFooter, {
          className: h.modalFooter,
          children: [p ? (0, r.jsx)(l.Button, {
            className: h.cancelButton,
            look: l.Button.Looks.LINK,
            color: l.Button.Colors.PRIMARY,
            size: l.ButtonSizes.SMALL,
            onClick: () => {
              p && (N(n, t), C())
            },
            children: I.default.Messages.AVATAR_UPLOAD_SKIP
          }) : null, (0, r.jsxs)("div", {
            className: h.buttonsRight,
            children: [(0, r.jsx)(l.Button, {
              className: h.cancelButton,
              look: l.Button.Looks.LINK,
              color: l.Button.Colors.PRIMARY,
              size: l.ButtonSizes.SMALL,
              onClick: () => {
                if (null != W.current) {
                  W.current(), W.current = null, b(!1);
                  return
                }
                C()
              },
              children: I.default.Messages.AVATAR_UPLOAD_CANCEL
            }), (0, r.jsx)(l.Button, {
              submitting: x,
              size: l.ButtonSizes.SMALL,
              onClick: J,
              children: I.default.Messages.AVATAR_UPLOAD_APPLY
            })]
          })]
        })]
      })
    })
  }