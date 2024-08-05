i.r(n), i.d(n, {
  default: function() {
return L;
  }
}), i(47120);
var t = i(735250),
  o = i(470079),
  a = i(442837),
  s = i(481060),
  l = i(100527),
  r = i(906732),
  c = i(807582),
  d = i(813197),
  f = i(430824),
  u = i(914010),
  p = i(594174),
  x = i(451478),
  g = i(626135),
  m = i(74538),
  C = i(621961),
  _ = i(884858),
  h = i(981631),
  j = i(486324),
  I = i(869783),
  N = i(689938),
  M = i(232580);
let T = [{
gif: i(495682),
png: i(458060)
  },
  {
gif: i(842786),
png: i(460790)
  },
  {
gif: i(578831),
png: i(642193)
  },
  {
gif: i(145908),
png: i(690695)
  }
];

function b(e) {
  let {
shouldAnimate: n = !0
  } = e, [i, a] = o.useState(!1);
  return (0, t.jsx)('div', {
className: M.gifGrid,
onMouseMove: () => a(!0),
onMouseLeave: () => a(!1),
children: T.map(e => (0, t.jsx)('div', {
  className: M.gif,
  style: {
    backgroundImage: 'url('.concat(n || i ? e.gif : e.png, ')')
  }
}, e.gif))
  });
}

function A(e) {
  let {
guildFeature: n,
guild: i
  } = e;
  return null == n || null == i ? null : (0, t.jsx)('div', {
className: M.pillWrapper,
children: (0, t.jsx)(c.Z, {
  guildFeature: n,
  guild: i,
  hideTooltip: !0
})
  });
}

function E(e) {
  let {
uploadType: n,
guild: i
  } = e;
  return (0, t.jsxs)('div', {
className: M.optionBoxText,
children: [
  (0, t.jsx)(A, {
    guild: i,
    guildFeature: (0, C.C)(n, {
      isGIF: !0
    })
  }),
  (0, t.jsxs)('div', {
    className: M.optionBoxDescription,
    children: [
      (0, C.K)(n) && (0, t.jsx)(s.TooltipContainer, {
        className: M.nitroWheelFlairContainer,
        text: N.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
        children: (0, t.jsx)(s.NitroWheelIcon, {
          size: 'md',
          color: 'currentColor',
          className: M.nitroWheelFlair
        })
      }),
      N.Z.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF
    ]
  })
]
  });
}

function v(e) {
  let {
title: n,
uploadType: i,
guild: o
  } = e;
  return (0, t.jsxs)('div', {
className: M.optionBoxText,
children: [
  (0, t.jsx)(A, {
    guildFeature: (0, C.C)(i, {
      isGIF: !1
    }),
    guild: o
  }),
  (0, t.jsx)('div', {
    className: M.optionBoxDescription,
    children: n
  })
]
  });
}

function L(e) {
  let {
transitionState: n,
onClose: c,
onComplete: C,
uploadType: T,
maxFileSizeBytes: A,
showUpsellHeader: L,
filters: O,
analyticsLocation: F,
analyticsLocations: B = [],
modalSubTitle: P,
imageSpecifications: S,
modalTitle: y = N.Z.Messages.SELECT_IMAGE_MODAL_TITLE,
uploadOptionTitle: Z = N.Z.Messages.UPLOAD_IMAGE
  } = e, k = (0, a.e7)([x.Z], () => x.Z.isFocused()), D = (0, a.e7)([p.default], () => p.default.getCurrentUser()), G = (0, a.e7)([u.Z], () => u.Z.getGuildId()), R = (0, a.e7)([f.Z], () => f.Z.getGuild(G)), {
reducedMotion: U
  } = o.useContext(s.AccessibilityPreferencesContext), W = (0, s.useModalContext)(), H = !m.ZP.canUseAnimatedAvatar(D) && T === j.pC.AVATAR, {
analyticsLocations: z
  } = (0, r.ZP)(B, l.Z.SELECT_IMAGE_MODAL);

  function w(e, n) {
let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
c(), C(e, n, i);
  }
  return o.useEffect(() => {
H && g.default.track(h.rMx.PREMIUM_UPSELL_VIEWED, {
  type: h.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
  location_stack: z
}), g.default.track(h.rMx.OPEN_MODAL, {
  type: h.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
  location: F
});
  }, [
H,
F,
z
  ]), (0, t.jsxs)(s.ModalRoot, {
transitionState: n,
size: s.ModalSize.SMALL,
children: [
  (0, t.jsxs)(s.ModalHeader, {
    className: M.modalHeader,
    separator: !1,
    children: [
      (0, t.jsxs)('div', {
        children: [
          (0, t.jsx)(s.FormTitle, {
            tag: s.FormTitleTags.H1,
            className: M.modalTitle,
            children: y
          }),
          null != P ? (0, t.jsx)(s.Text, {
            variant: 'text-md/normal',
            children: P
          }) : null
        ]
      }),
      (0, t.jsx)(s.ModalCloseButton, {
        onClick: c,
        className: M.modalCloseButton
      })
    ]
  }),
  (0, t.jsxs)(s.ModalContent, {
    className: M.modalContent,
    children: [
      (0, t.jsxs)('div', {
        className: M.imagePickerContainer,
        children: [
          (0, t.jsxs)(s.Clickable, {
            className: M.optionBox,
            children: [
              (0, t.jsx)('div', {
                className: M.contentCircle,
                children: (0, t.jsx)(s.ImagePlusIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: M.uploadIcon
                })
              }),
              (0, t.jsx)(s.Text, {
                variant: 'text-sm/semibold',
                color: 'interactive-normal',
                children: (0, t.jsx)(v, {
                  title: Z,
                  uploadType: T,
                  guild: R
                })
              }),
              (0, t.jsx)(d.ZP, {
                onChange: function(e, n) {
                  if (n.type === I.m.MP4)
                    return w(e, n);
                  (0, s.openModalLazy)(async () => {
                    let {
                      default: o
                    } = await i.e('48017').then(i.bind(i, 850085));
                    return i => (0, t.jsx)(o, {
                      imgURI: e,
                      file: n,
                      onCrop: w,
                      uploadType: T,
                      showUpsellHeader: L,
                      allowSkip: !0,
                      analyticsPage: null == F ? void 0 : F.page,
                      ...i
                    });
                  }, {
                    contextKey: W
                  });
                },
                maxFileSizeBytes: A,
                onFileSizeError: function() {
                  c(), (0, _.Z)(A);
                },
                filters: O
              })
            ]
          }),
          (0, t.jsxs)(s.Clickable, {
            className: M.optionBox,
            onClick: function() {
              (0, s.openModalLazy)(async () => {
                let {
                  default: e
                } = await i.e('72891').then(i.bind(i, 195297));
                return n => (0, t.jsx)(e, {
                  uploadType: T,
                  onComplete: (e, n) => w(e, n, !0),
                  showUpsellHeader: L,
                  analyticsPage: null == F ? void 0 : F.page,
                  ...n
                });
              }, {
                contextKey: W
              });
            },
            children: [
              (0, t.jsxs)('div', {
                className: M.contentCircle,
                children: [
                  (0, t.jsx)(b, {
                    shouldAnimate: k && !U.enabled
                  }),
                  (0, t.jsx)('div', {
                    className: M.gifIconContainer,
                    children: (0, t.jsx)(s.GifIcon, {
                      size: 'custom',
                      width: 29,
                      height: 29,
                      color: 'currentColor',
                      className: M.gifIcon
                    })
                  })
                ]
              }),
              (0, t.jsx)(s.Text, {
                variant: 'text-sm/semibold',
                color: 'interactive-normal',
                children: (0, t.jsx)(E, {
                  uploadType: T,
                  guild: R
                })
              })
            ]
          })
        ]
      }),
      null != S ? (0, t.jsx)(s.Text, {
        className: M.imageSpecifications,
        variant: 'text-sm/normal',
        children: S
      }) : null
    ]
  })
]
  });
}