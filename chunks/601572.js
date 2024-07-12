a.r(o), a.d(o, {
  default: function() {
return x;
  }
}), a(47120);
var n = a(735250),
  d = a(470079),
  t = a(481060),
  r = a(846027),
  c = a(410575),
  i = a(2052),
  s = a(100527),
  l = a(906732),
  u = a(695346),
  g = a(932724),
  p = a(716161),
  _ = a(672339),
  k = a(898531),
  b = a(131951),
  E = a(594174),
  m = a(285952),
  O = a(153124),
  C = a(626135),
  I = a(747545),
  h = a(981631),
  f = a(689938),
  A = a(253445);
let B = 368,
  R = 207;

function x(e) {
  let {
transitionState: o,
videoEnabled: a,
onEnable: x,
onClose: v
  } = e, M = b.Z.getCameraComponent(), T = (0, O.Dt)(), w = (0, k.Z)(), D = u.qF.useSetting(), [N, P] = d.useState((0, g.P)(E.default.getCurrentUser())), S = (0, i.O)(), {
analyticsLocations: j
  } = (0, l.ZP)(s.Z.CAMERA_PREVIEW), U = d.useRef(null);
  d.useEffect(() => {
C.default.track(h.rMx.OPEN_MODAL, {
  type: 'Camera Preview Modal'
});
  }, []), d.useEffect(() => {
var e;
null === (e = U.current) || void 0 === e || e.scrollToTop();
  }, []);
  let V = async () => {
await W(), r.Z.setVideoEnabled(!0), null == x || x();
  }, W = async () => {
try {
  await (0, _.wG)(N, {
    location: {
      page: h.ZY5.PREVIEW_CAMERA_MODAL,
      ...S.location
    }
  });
} catch (e) {}
await v(), (0, p.Up)(N);
  };
  return (0, n.jsx)(l.Gt, {
value: j,
children: (0, n.jsx)(c.Z, {
  page: h.ZY5.PREVIEW_CAMERA_MODAL,
  children: (0, n.jsxs)(t.ModalRoot, {
    className: A.modalRoot,
    size: t.ModalSize.DYNAMIC,
    'aria-labelledby': T,
    transitionState: o,
    children: [
      (0, n.jsxs)(t.ModalContent, {
        className: w ? A.contentWithVideoBackgrounds : A.content,
        scrollerRef: U,
        children: [
          (0, n.jsx)(t.Heading, {
            id: T,
            className: A.header,
            variant: 'heading-xl/semibold',
            children: a ? f.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_HEADER : f.Z.Messages.CAMERA_PREVIEW_MODAL_HEADER
          }),
          (0, n.jsx)(I.Z, {
            hidePreviewToggle: !0,
            showSmallBackgroundOptions: !0,
            hideDeviceHeader: !0,
            selectedBackgroundOption: N,
            onSelectBackgroundOption: P,
            hideDeviceSelector: a,
            renderCamera: e => (0, n.jsxs)('div', {
              className: A.cameraPreview,
              children: [
                (0, n.jsx)('div', {
                  className: A.camera,
                  children: (0, n.jsx)(M, {
                    disabled: !1,
                    deviceId: e,
                    width: B,
                    height: R
                  })
                }),
                (0, n.jsx)(I.S, {})
              ]
            }),
            onLearnMore: v
          })
        ]
      }),
      (0, n.jsxs)(t.ModalFooter, {
        justify: m.Z.Justify.BETWEEN,
        children: [
          (() => {
            let e = a ? f.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CHANGE_BACKGROUND : f.Z.Messages.CAMERA_ON;
            return (0, n.jsx)(t.Button, {
              onClick: a ? W : V,
              size: t.Button.Sizes.SMALL,
              autoFocus: !a,
              children: e
            });
          })(),
          (0, n.jsx)(t.Checkbox, {
            size: 18,
            type: t.Checkbox.Types.INVERTED,
            value: D,
            onChange: () => {
              u.qF.updateSetting(!D), C.default.track(h.rMx.UPDATE_USER_SETTINGS_LOCAL, {
                always_preview_video: !D
              });
            },
            children: (0, n.jsx)(t.Text, {
              variant: 'text-sm/normal',
              children: f.Z.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW
            })
          })
        ]
      }),
      (0, n.jsx)(t.ModalCloseButton, {
        onClick: v,
        className: A.modalClose
      })
    ]
  })
})
  });
}