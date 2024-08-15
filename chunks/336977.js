e.r(n), e.d(n, {
  VibingWumpus: function() {
return p;
  }
}), e(47120);
var o = e(735250),
  i = e(470079),
  r = e(120356),
  a = e.n(r),
  s = e(399606),
  c = e(481060),
  u = e(607070),
  _ = e(626135),
  l = e(832239),
  I = e(407383),
  d = e(981631),
  N = e(689938),
  A = e(649056),
  C = e(917475),
  P = e(617921);

function p(t) {
  let {
onClose: n,
source: r = I.I.INAPPROPRIATE_CONVERSATION
  } = t, p = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), [b, f] = i.useState(!1);
  i.useEffect(() => {
let t = new Date();
return _.default.track(d.rMx.VIBING_WUMPUS_VIEWED, {
  source: r
}), (0, l.JO)(), () => {
  _.default.track(d.rMx.VIBING_WUMPUS_CLOSED, {
    duration_open_ms: new Date().getTime() - t.getTime(),
    source: r
  }), (0, l.zu)();
};
  }, [r]);
  let x = () => {
b ? ((0, l.JO)(), _.default.track(d.rMx.VIBING_WUMPUS_ACTION, {
  action: I.G.PLAY
})) : ((0, l.hW)(), _.default.track(d.rMx.VIBING_WUMPUS_ACTION, {
  action: I.G.PAUSE
})), f(!b);
  };
  async function S() {
let {
  default: t
} = await e.e('29641').then(e.t.bind(e, 937359, 19));
return t;
  }
  return (0, o.jsxs)(o.Fragment, {
children: [
  (0, o.jsx)('div', {
    className: A.ringContainer,
    children: (0, o.jsx)('img', {
      src: P,
      alt: '',
      className: A.__invalid_ringArt
    })
  }),
  (0, o.jsx)(c.LottieAnimation, {
    importData: S,
    shouldAnimate: !b && !p,
    className: A.wumpus,
    pauseAtFrame: p ? 200 : void 0
  }),
  (0, o.jsx)(c.Tooltip, {
    text: b ? N.Z.Messages.PLAY : N.Z.Messages.PAUSE,
    position: 'top',
    'aria-label': b ? N.Z.Messages.PLAY : N.Z.Messages.PAUSE,
    children: t => (0, o.jsx)(c.Clickable, {
      ...t,
      onClick: x,
      className: A.iconButton,
      children: b ? (0, o.jsx)(c.PlayIcon, {
        size: 'xs',
        color: 'currentColor',
        className: A.icon
      }) : (0, o.jsx)(c.PauseIcon, {
        size: 'xs',
        color: 'currentColor',
        className: A.icon
      })
    })
  }),
  (0, o.jsxs)(c.ModalContent, {
    className: a()(C.body, A.body),
    children: [
      (0, o.jsxs)('div', {
        className: a()(C.textContainer, A.textContainer),
        children: [
          (0, o.jsx)(c.Heading, {
            variant: 'heading-xl/semibold',
            color: 'header-primary',
            children: N.Z.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_HEADER
          }),
          (0, o.jsx)(c.Text, {
            variant: 'text-md/normal',
            color: 'header-secondary',
            children: N.Z.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_DESCRIPTION
          })
        ]
      }),
      (0, o.jsx)('div', {
        className: A.buttonContainer,
        children: (0, o.jsx)(c.Button, {
          fullWidth: !0,
          color: c.Button.Colors.BRAND,
          size: c.Button.Sizes.MEDIUM,
          onClick: () => {
            n(), _.default.track(d.rMx.VIBING_WUMPUS_ACTION, {
              action: I.G.BACK_TO_CONVERSATION
            });
          },
          children: N.Z.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_RETURN
        })
      })
    ]
  })
]
  });
}
n.default = t => {
  let {
onClose: n,
transitionState: e
  } = t;
  return (0, o.jsx)(c.ModalRoot, {
transitionState: e,
children: (0, o.jsx)(p, {
  onClose: n
})
  });
};