"use strict";
n.r(t), n("47120"), n("411104");
var a = n("735250"),
  r = n("470079"),
  i = n("392711"),
  s = n("481060"),
  l = n("100527"),
  u = n("906732"),
  o = n("488499"),
  c = n("84017"),
  E = n("626135"),
  A = n("197712"),
  d = n("522074"),
  h = n("486324"),
  _ = n("981631"),
  T = n("678916"),
  I = n("689938"),
  R = n("491856");
t.default = e => {
  let {
    file: t,
    imgURI: n,
    transitionState: p,
    allowSkip: g = !1,
    onCrop: N,
    onClose: D,
    uploadType: f = h.UploadTypes.AVATAR,
    showUpsellHeader: M = !1,
    analyticsPage: m
  } = e, [w, y] = r.useState({
    width: 0,
    height: 0
  }), [O, C] = r.useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }), [H, L] = r.useState(!1), [U, G] = r.useState(1), [S, B] = r.useState({
    x: 0,
    y: 0
  }), [V, x] = r.useState(null), [v, P] = r.useState(!1), {
    analyticsLocations: b
  } = (0, u.default)(l.default.IMAGE_CROPPING_MODAL), j = r.useRef({
    x: 0,
    y: 0
  }), F = r.useRef(null), X = r.useRef(null), k = "image/gif" === t.type;
  r.useEffect(() => {
    (0, d.default)()
  }, []), r.useEffect(() => {
    k && M && E.default.track(_.AnalyticEvents.OPEN_MODAL, {
      type: _.AnalyticsSections.CROP_GIF_MODAL,
      location: {
        page: m
      }
    })
  }, [M, m, k]);
  let W = () => {
      switch (f) {
        case h.UploadTypes.BANNER:
          return {
            height: h.USER_BANNER_MAX_HEIGHT, width: h.USER_BANNER_MAX_WIDTH
          };
        case h.UploadTypes.VIDEO_BACKGROUND:
          return T.BACKGROUND_REPLACEMENT_SIZE;
        case h.UploadTypes.AVATAR:
        case h.UploadTypes.AVATAR_DECORATION:
          return {
            height: _.AVATAR_MAX_SIZE, width: _.AVATAR_MAX_SIZE
          };
        case h.UploadTypes.GUILD_BANNER:
          return {
            height: h.GUILD_BANNER_MAX_HEIGHT, width: h.GUILD_BANNER_MAX_WIDTH
          };
        case h.UploadTypes.SCHEDULED_EVENT_IMAGE:
          return {
            height: h.SCHEDULED_EVENT_IMAGE_MAX_HEIGHT, width: h.SCHEDULED_EVENT_IMAGE_MAX_WIDTH
          };
        case h.UploadTypes.HOME_HEADER:
          return {
            height: h.HOME_HEADER_MAX_HEIGHT, width: h.HOME_HEADER_MAX_WIDTH
          }
      }
    },
    z = r.useCallback((e, t, n) => {
      j.current = (0, A.getBoundedCoordinates)(e, t, n), null != F.current && (F.current.style.transform = "translate3d(".concat(j.current.x, "px, ").concat(j.current.y, "px, 0)"))
    }, [F]),
    Y = r.useCallback(() => {
      if (null == F.current || U > 1) return;
      let {
        width: e,
        height: t
      } = F.current.getBoundingClientRect(), {
        width: n,
        height: a
      } = (0, A.adjustImageDimensionsForAspectRatio)(f, e, t), r = (0, A.calculateOverlaySize)(f, n, a, t);
      x({
        width: n,
        height: a
      }), y(r), C((0, A.calculateDragBoundaries)(n, a, r))
    }, [f, U]),
    K = r.useCallback(e => {
      let {
        x: t,
        y: n
      } = j.current;
      if (!H || e.clientX === t && e.clientY === n) return;
      let a = e.clientX - S.x;
      z(a, e.clientY - S.y, O)
    }, [O, H, S, z]),
    Z = () => {
      L(!1)
    },
    q = () => {
      let e = W();
      return e.width !== e.height
    },
    J = async () => {
      let e;
      if (null == F.current) return;
      P(!0);
      let n = F.current,
        a = W();
      if (k) try {
        let {
          result: r,
          cancelFn: i
        } = await (0, A.cropGIF)(t, n, w, j.current, a);
        X.current = i, e = await r, X.current = null
      } catch (e) {
        var r;
        throw null === (r = X.current) || void 0 === r || r.call(X), X.current = null, Error("Error cropping GIF")
      } else e = (0, A.cropStaticImage)(n, w, j.current, a);
      await N(e, t), P(!1), D()
    };
  return r.useEffect(() => (window.addEventListener("mouseup", Z), window.addEventListener("resize", Y), () => {
    window.removeEventListener("mouseup", Z), window.removeEventListener("resize", Y)
  }), [Y]), r.useEffect(() => () => {
    null != X.current && X.current()
  }, []), r.useEffect(() => {
    if (H) return window.addEventListener("mousemove", K), () => window.removeEventListener("mousemove", K)
  }, [K, H]), (0, a.jsx)(u.AnalyticsLocationProvider, {
    value: b,
    children: (0, a.jsxs)(s.ModalRoot, {
      onAnimationEnd: Y,
      transitionState: p,
      size: s.ModalSize.MEDIUM,
      children: [M && (0, a.jsx)(o.default, {
        type: f,
        analyticsPage: m,
        analyticsSection: _.AnalyticsSections.CROP_GIF_MODAL,
        isGIF: k,
        banner: n
      }), (0, a.jsx)(s.ModalHeader, {
        separator: !1,
        children: (0, a.jsx)(s.FormTitle, {
          className: R.titleCase,
          tag: s.FormTitleTags.H1,
          children: I.default.Messages.AVATAR_UPLOAD_EDIT_MEDIA
        })
      }), (0, a.jsxs)(s.ModalContent, {
        className: R.modalContent,
        children: [(0, a.jsxs)("div", {
          className: R.editingContainer,
          children: [(0, a.jsx)("img", {
            style: {
              opacity: null == V ? 0 : 1,
              transform: "translate3d(".concat(j.current.x, "px, ").concat(j.current.y, "px, 0px)"),
              ...(() => {
                if (null == V) return {};
                let e = V.width / V.height,
                  t = q() && e > h.BANNER_ASPECT_RATIO ? w.height / V.height : 1;
                return {
                  width: V.width * U * t,
                  minWidth: V.width * U * t,
                  height: V.height * U * t
                }
              })()
            },
            className: v ? R.imageDisabled : R.imageEnabled,
            src: n,
            alt: "avatar",
            ref: F,
            onMouseDown: e => {
              let t = e.clientX - j.current.x;
              B({
                x: t,
                y: e.clientY - j.current.y
              }), L(!0)
            },
            draggable: !1
          }), (0, a.jsx)("div", {
            className: f === h.UploadTypes.AVATAR ? R.overlayAvatar : R.overlayBanner,
            style: {
              opacity: null == V ? 0 : 1,
              width: w.width,
              height: w.height
            }
          })]
        }), (0, a.jsxs)("div", {
          className: R.sliderContainer,
          children: [(0, a.jsx)(c.default, {
            className: R.icon,
            width: 24,
            height: 24
          }), (0, a.jsx)(s.Slider, {
            initialValue: 1,
            minValue: 1,
            maxValue: 2,
            keyboardStep: .025,
            asValueChanges: e => {
              if (null == V) return;
              let {
                width: t,
                height: n
              } = V, a = (0, A.calculateDragBoundaries)(t * e, n * e, w), {
                x: r,
                y: s
              } = j.current;
              (!(0, i.inRange)(r, a.right, a.left) || !(0, i.inRange)(s, a.top, a.bottom)) && z(r, s, a), G(e), C(a)
            },
            disabled: v,
            equidistant: !0,
            hideBubble: !0,
            "aria-label": I.default.Messages.FORM_LABEL_AVATAR_SIZE
          }), (0, a.jsx)(c.default, {
            className: R.icon,
            width: 48,
            height: 48
          })]
        })]
      }), (0, a.jsxs)(s.ModalFooter, {
        className: R.modalFooter,
        children: [g ? (0, a.jsx)(s.Button, {
          className: R.cancelButton,
          look: s.Button.Looks.LINK,
          color: s.Button.Colors.PRIMARY,
          size: s.ButtonSizes.SMALL,
          onClick: () => {
            g && (N(n, t), D())
          },
          children: I.default.Messages.AVATAR_UPLOAD_SKIP
        }) : null, (0, a.jsxs)("div", {
          className: R.buttonsRight,
          children: [(0, a.jsx)(s.Button, {
            className: R.cancelButton,
            look: s.Button.Looks.LINK,
            color: s.Button.Colors.PRIMARY,
            size: s.ButtonSizes.SMALL,
            onClick: () => {
              if (null != X.current) {
                X.current(), X.current = null, P(!1);
                return
              }
              D()
            },
            children: I.default.Messages.AVATAR_UPLOAD_CANCEL
          }), (0, a.jsx)(s.Button, {
            submitting: v,
            size: s.ButtonSizes.SMALL,
            onClick: J,
            children: I.default.Messages.AVATAR_UPLOAD_APPLY
          })]
        })]
      })]
    })
  })
}