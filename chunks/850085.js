n.r(t), n(47120), n(411104);
var r = n(735250),
  a = n(470079),
  i = n(392711),
  l = n(481060),
  s = n(100527),
  o = n(906732),
  u = n(488499),
  c = n(626135),
  h = n(197712),
  d = n(511004),
  g = n(486324),
  A = n(981631),
  m = n(678916),
  E = n(689938),
  C = n(693564);
t.default = e => {
  let {
file: t,
imgURI: n,
transitionState: p,
allowSkip: b = !1,
onCrop: w,
onClose: _,
uploadType: f = g.pC.AVATAR,
showUpsellHeader: R = !1,
analyticsPage: M
  } = e, [v, y] = a.useState({
width: 0,
height: 0
  }), [L, N] = a.useState({
top: 0,
bottom: 0,
left: 0,
right: 0
  }), [x, D] = a.useState(!1), [I, O] = a.useState(1), [B, T] = a.useState({
x: 0,
y: 0
  }), [P, S] = a.useState(null), [V, j] = a.useState(!1), {
analyticsLocations: G
  } = (0, o.ZP)(s.Z.IMAGE_CROPPING_MODAL), U = a.useRef({
x: 0,
y: 0
  }), k = a.useRef(null), F = a.useRef(null), H = 'image/gif' === t.type;
  a.useEffect(() => {
(0, d.Z)();
  }, []), a.useEffect(() => {
H && R && c.default.track(A.rMx.OPEN_MODAL, {
  type: A.jXE.CROP_GIF_MODAL,
  location: {
    page: M
  }
});
  }, [
R,
M,
H
  ]);
  let z = () => {
  switch (f) {
    case g.pC.BANNER:
      return {
        height: g.f,
          width: g.L0
      };
    case g.pC.VIDEO_BACKGROUND:
      return m.HE;
    case g.pC.AVATAR:
    case g.pC.AVATAR_DECORATION:
      return {
        height: A.dGM,
          width: A.dGM
      };
    case g.pC.GUILD_BANNER:
      return {
        height: g._T,
          width: g.X_
      };
    case g.pC.SCHEDULED_EVENT_IMAGE:
      return {
        height: g.xT,
          width: g.d6
      };
    case g.pC.HOME_HEADER:
      return {
        height: g.Uo,
          width: g.N8
      };
  }
},
Z = a.useCallback((e, t, n) => {
  U.current = (0, h.U$)(e, t, n), null != k.current && (k.current.style.transform = 'translate3d('.concat(U.current.x, 'px, ').concat(U.current.y, 'px, 0)'));
}, [k]),
Y = a.useCallback(() => {
  if (null == k.current || I > 1)
    return;
  let {
    width: e,
    height: t
  } = k.current.getBoundingClientRect(), {
    width: n,
    height: r
  } = (0, h.Es)(f, e, t), a = (0, h.AK)(f, n, r, t);
  S({
    width: n,
    height: r
  }), y(a), N((0, h.kH)(n, r, a));
}, [
  f,
  I
]),
J = a.useCallback(e => {
  let {
    x: t,
    y: n
  } = U.current;
  if (!x || e.clientX === t && e.clientY === n)
    return;
  let r = e.clientX - B.x;
  Z(r, e.clientY - B.y, L);
}, [
  L,
  x,
  B,
  Z
]),
K = () => {
  D(!1);
},
X = () => {
  let e = z();
  return e.width !== e.height;
},
W = async () => {
  let e;
  if (null == k.current)
    return;
  j(!0);
  let n = k.current,
    r = z();
  if (H)
    try {
      let {
        result: a,
        cancelFn: i
      } = await (0, h.$p)(t, n, v, U.current, r);
      F.current = i, e = await a, F.current = null;
    } catch (e) {
      var a;
      throw null === (a = F.current) || void 0 === a || a.call(F), F.current = null, Error('Error cropping GIF');
    }
  else
    e = (0, h.PT)(n, v, U.current, r);
  await w(e, t), j(!1), _();
};
  return a.useEffect(() => (window.addEventListener('mouseup', K), window.addEventListener('resize', Y), () => {
window.removeEventListener('mouseup', K), window.removeEventListener('resize', Y);
  }), [Y]), a.useEffect(() => () => {
null != F.current && F.current();
  }, []), a.useEffect(() => {
if (x)
  return window.addEventListener('mousemove', J), () => window.removeEventListener('mousemove', J);
  }, [
J,
x
  ]), (0, r.jsx)(o.Gt, {
value: G,
children: (0, r.jsxs)(l.ModalRoot, {
  onAnimationEnd: Y,
  transitionState: p,
  size: l.ModalSize.MEDIUM,
  children: [
    R && (0, r.jsx)(u.Z, {
      type: f,
      analyticsPage: M,
      analyticsSection: A.jXE.CROP_GIF_MODAL,
      isGIF: H,
      banner: n
    }),
    (0, r.jsx)(l.ModalHeader, {
      separator: !1,
      children: (0, r.jsx)(l.FormTitle, {
        className: C.titleCase,
        tag: l.FormTitleTags.H1,
        children: E.Z.Messages.AVATAR_UPLOAD_EDIT_MEDIA
      })
    }),
    (0, r.jsxs)(l.ModalContent, {
      className: C.modalContent,
      children: [
        (0, r.jsxs)('div', {
          className: C.editingContainer,
          children: [
            (0, r.jsx)('img', {
              style: {
                opacity: null == P ? 0 : 1,
                transform: 'translate3d('.concat(U.current.x, 'px, ').concat(U.current.y, 'px, 0px)'),
                ...(() => {
                  if (null == P)
                    return {};
                  let e = P.width / P.height,
                    t = X() && e > g.MY ? v.height / P.height : 1;
                  return {
                    width: P.width * I * t,
                    minWidth: P.width * I * t,
                    height: P.height * I * t
                  };
                })()
              },
              className: V ? C.imageDisabled : C.imageEnabled,
              src: n,
              alt: 'avatar',
              ref: k,
              onMouseDown: e => {
                let t = e.clientX - U.current.x;
                T({
                  x: t,
                  y: e.clientY - U.current.y
                }), D(!0);
              },
              draggable: !1
            }),
            (0, r.jsx)('div', {
              className: f === g.pC.AVATAR ? C.overlayAvatar : C.overlayBanner,
              style: {
                opacity: null == P ? 0 : 1,
                width: v.width,
                height: v.height
              }
            })
          ]
        }),
        (0, r.jsxs)('div', {
          className: C.sliderContainer,
          children: [
            (0, r.jsx)(l.ImageIcon, {
              size: 'md',
              color: 'currentColor',
              className: C.icon
            }),
            (0, r.jsx)(l.Slider, {
              initialValue: 1,
              minValue: 1,
              maxValue: 2,
              keyboardStep: 0.025,
              asValueChanges: e => {
                if (null == P)
                  return;
                let {
                  width: t,
                  height: n
                } = P, r = (0, h.kH)(t * e, n * e, v), {
                  x: a,
                  y: l
                } = U.current;
                (!(0, i.inRange)(a, r.right, r.left) || !(0, i.inRange)(l, r.top, r.bottom)) && Z(a, l, r), O(e), N(r);
              },
              disabled: V,
              equidistant: !0,
              hideBubble: !0,
              'aria-label': E.Z.Messages.FORM_LABEL_AVATAR_SIZE
            }),
            (0, r.jsx)(l.ImageIcon, {
              size: 'custom',
              color: 'currentColor',
              className: C.icon,
              width: 48,
              height: 48
            })
          ]
        })
      ]
    }),
    (0, r.jsxs)(l.ModalFooter, {
      className: C.modalFooter,
      children: [
        b ? (0, r.jsx)(l.Button, {
          className: C.cancelButton,
          look: l.Button.Looks.LINK,
          color: l.Button.Colors.PRIMARY,
          size: l.ButtonSizes.SMALL,
          onClick: () => {
            b && (w(n, t), _());
          },
          children: E.Z.Messages.AVATAR_UPLOAD_SKIP
        }) : null,
        (0, r.jsxs)('div', {
          className: C.buttonsRight,
          children: [
            (0, r.jsx)(l.Button, {
              className: C.cancelButton,
              look: l.Button.Looks.LINK,
              color: l.Button.Colors.PRIMARY,
              size: l.ButtonSizes.SMALL,
              onClick: () => {
                if (null != F.current) {
                  F.current(), F.current = null, j(!1);
                  return;
                }
                _();
              },
              children: E.Z.Messages.AVATAR_UPLOAD_CANCEL
            }),
            (0, r.jsx)(l.Button, {
              submitting: V,
              size: l.ButtonSizes.SMALL,
              onClick: W,
              children: E.Z.Messages.AVATAR_UPLOAD_APPLY
            })
          ]
        })
      ]
    })
  ]
})
  });
};