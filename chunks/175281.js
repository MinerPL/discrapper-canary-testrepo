n.d(t, {
  Z: function() {
return j;
  }
}), n(47120), n(653041);
var i, l, r = n(735250),
  a = n(470079),
  s = n(120356),
  o = n.n(s),
  c = n(512722),
  u = n.n(c),
  d = n(392711),
  h = n.n(d),
  p = n(748780),
  _ = n(442837),
  f = n(215569),
  m = n(481060),
  g = n(612226),
  C = n(951483),
  I = n(714338),
  E = n(607070),
  N = n(585483),
  x = n(557177),
  S = n(264549),
  v = n(981631),
  Z = n(689938),
  T = n(796544);

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
(l = i || (i = {})).UP = 'UP', l.DOWN = 'DOWN', l.LEFT = 'LEFT', l.RIGHT = 'RIGHT';
let A = {
  UP: h().throttle(() => (0, x.GN)('ddr-up'), 100),
  DOWN: h().throttle(() => (0, x.GN)('ddr-down'), 100),
  LEFT: h().throttle(() => (0, x.GN)('ddr-left'), 100),
  RIGHT: h().throttle(() => (0, x.GN)('ddr-right'), 100)
};

function b(e) {
  switch (e.keyCode) {
case v.yXg.ARROW_UP:
  return 'UP';
case v.yXg.ARROW_DOWN:
  return 'DOWN';
case v.yXg.ARROW_LEFT:
  return 'LEFT';
case v.yXg.ARROW_RIGHT:
  return 'RIGHT';
default:
  return null;
  }
}
let M = [
  g.Q2.MESSAGE,
  g.Q2.NAVIGATION,
  g.Q2.VOICE_AND_VIDEO,
  g.Q2.CHAT,
  g.Q2.MISCELLANEOUS
];

function R(e) {
  let {
showBackdrop: t
  } = e;
  return (0, r.jsx)('div', {
className: o()(T.backdrop, {
  [T.show]: t
})
  });
}

function O() {
  let e = a.useMemo(() => h()((0, g.Rv)()).groupBy(e => e.group).value(), []);
  return (0, r.jsx)('div', {
className: T.keyboardShortcutList,
children: M.map(t => {
  let n = e[t],
    i = (0, g.UD)(t),
    l = (0, g.U6)(t);
  return (0, r.jsxs)('div', {
    className: T.keyboardShortcutSection,
    children: [
      (0, r.jsxs)('div', {
        children: [
          (0, r.jsx)(m.Heading, {
            variant: 'heading-lg/semibold',
            children: i
          }),
          null != l && (0, r.jsx)(m.Text, {
            className: T.keybindGroupDescription,
            variant: 'text-sm/normal',
            children: l
          })
        ]
      }),
      (0, r.jsx)('div', {
        className: T.keyboardShortcutListGroup,
        children: n.map((e, t) => {
          var n;
          return (null === (n = e.predicate) || void 0 === n ? void 0 : n.call(e)) === !1 ? null : (0, r.jsxs)('div', {
            className: o()(T.keybindGroup),
            children: [
              (0, r.jsx)(m.Text, {
                variant: 'text-sm/normal',
                children: e.description
              }),
              (0, r.jsx)('div', {
                className: 'keybind-shortcuts',
                children: e.binds.map(e => (0, r.jsx)(m.KeyCombo, {
                  className: T.keybindKey,
                  shortcut: e
                }, e))
              })
            ]
          }, t);
        })
      }, t)
    ]
  }, t);
})
  });
}
class y extends a.PureComponent {
  componentDidMount() {
this.lastInputedKeys = [], N.S.subscribe(v.CkL.SCROLL_PAGE_UP, this.scrollPageUp), N.S.subscribe(v.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.addEventListener('keydown', this.handleKeyDown, {
  capture: !0
}), window.addEventListener('keyup', this.handleKeyUp, {
  capture: !0
});
  }
  componentWillUnmount() {
N.S.unsubscribe(v.CkL.SCROLL_PAGE_UP, this.scrollPageUp), N.S.unsubscribe(v.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.removeEventListener('keydown', this.handleKeyDown, {
  capture: !0
}), window.removeEventListener('keyup', this.handleKeyUp, {
  capture: !0
});
  }
  render() {
let {
  UP: e,
  DOWN: t,
  LEFT: n,
  RIGHT: i
} = this.state;
return (0, r.jsxs)(p.Z.div, {
  className: T.keyboardShortcutsModal,
  style: this.getStyles(),
  children: [
    (0, r.jsxs)(m.H, {
      className: T.modalTitle,
      children: [
        (0, r.jsx)('div', {
          className: T.content,
          children: Z.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TITLE
        }),
        (0, r.jsx)(m.KeyCombo, {
          shortcut: 'mod+/'
        })
      ]
    }),
    (0, r.jsx)('div', {
      className: T.modalSubtitle,
      children: Z.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SUBTITLE
    }),
    (0, r.jsxs)('div', {
      className: T.ddrArrows,
      children: [
        (0, r.jsx)(P, {
          arrow: 'LEFT',
          isActive: n,
          className: T.left,
          children: 'left'
        }),
        (0, r.jsx)(P, {
          arrow: 'DOWN',
          isActive: t,
          className: T.down,
          children: 'down'
        }),
        (0, r.jsx)(P, {
          arrow: 'UP',
          isActive: e,
          className: T.up,
          children: 'up'
        }),
        (0, r.jsx)(P, {
          arrow: 'RIGHT',
          isActive: i,
          className: T.right,
          children: 'right'
        })
      ]
    }),
    (0, r.jsx)(m.AdvancedScrollerAuto, {
      ref: this.scrollerRef,
      fade: !0,
      children: (0, r.jsx)(m.HeadingLevel, {
        children: (0, r.jsx)(O, {})
      })
    })
  ]
});
  }
  constructor(...e) {
super(...e), L(this, 'state', {
  UP: !1,
  DOWN: !1,
  LEFT: !1,
  RIGHT: !1,
  opacity: new p.Z.Value(1),
  scaleX: new p.Z.Value(1),
  scaleY: new p.Z.Value(0),
  animating: !1
}), L(this, 'scrollerRef', a.createRef()), L(this, 'lastInputedKeys', []), L(this, 'scrollPageUp', () => {
  let e = this.scrollerRef.current;
  u()(null != e, 'Scroller is pagedUp when not mounted'), e.scrollPageUp({
    animate: !0
  });
}), L(this, 'scrollPageDown', () => {
  let e = this.scrollerRef.current;
  u()(null != e, 'Scroller is pagedDown when not mounted'), e.scrollPageDown({
    animate: !0
  });
}), L(this, 'arrowUp', e => {
  let {
    direction: t
  } = e;
  this.setState({
    [t]: !1
  });
}), L(this, 'arrowDown', e => {
  let {
    direction: t
  } = e;
  A[t](), this.setState({
    [t]: !0
  });
}), L(this, 'componentWillLeave', e => {
  this.setState({
    animating: !0
  }), this.state.opacity.setValue(1), this.state.scaleX.setValue(0.5), this.state.scaleY.setValue(1), p.Z.sequence([p.Z.timing(this.state.opacity, {
    toValue: 0,
    duration: 800,
    easing: p.Z.Easing.cubic
  })]).start(e);
}), L(this, 'toggleOpacity', () => {
  1 === this.state.opacity._value ? this.state.opacity.setValue(0) : this.state.opacity.setValue(1);
}), L(this, 'getStyles', () => ({
  opacity: this.state.opacity.interpolate({
    inputRange: [
      0,
      1
    ],
    outputRange: [
      0,
      1
    ]
  }),
  transform: [{
      scaleX: this.state.scaleX.interpolate({
        inputRange: [
          0,
          1
        ],
        outputRange: [
          0,
          2
        ]
      })
    },
    {
      scaleY: this.state.scaleY.interpolate({
        inputRange: [
          0,
          1
        ],
        outputRange: [
          0,
          1
        ]
      })
    }
  ]
})), L(this, 'handleKeyDown', e => {
  if (this.lastInputedKeys.push(e.keyCode), this.lastInputedKeys = this.lastInputedKeys.slice(-5), this.lastInputedKeys[0] === v.yXg.H && this.lastInputedKeys[1] === v.yXg.H && this.lastInputedKeys[2] === v.yXg.ARROW_RIGHT && this.lastInputedKeys[3] === v.yXg.N && this.lastInputedKeys[4] === v.yXg.K && this.props.activateRagingDemon(), this.props.keyboardModeEnabled)
    return;
  let t = b(e);
  null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowDown({
    direction: t
  }));
}), L(this, 'handleKeyUp', e => {
  if (this.props.keyboardModeEnabled)
    return;
  let t = b(e);
  null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowUp({
    direction: t
  }));
}), L(this, 'onArrowClick', e => {
  this.arrowDown({
    direction: e
  });
});
  }
}

function P(e) {
  let {
isActive: t,
arrow: n,
className: i,
children: l
  } = e, [s, c] = a.useState(t), u = a.useCallback(() => {
A[n](), c(!0);
  }, [n]);
  return a.useEffect(() => {
if (s) {
  let e = setTimeout(() => c(!1), 500);
  return () => clearTimeout(e);
}
  }, [s]), (0, r.jsx)(m.Clickable, {
onClick: u,
className: o()(T.arrow, i, {
  [T.active]: t || s
}),
children: l
  });
}

function j(e) {
  let {
transitionState: t,
onClose: n
  } = e, [i, l] = a.useState(!1), [s, c] = a.useState(!1), u = a.useMemo(() => __OVERLAY__ ? (0, C.Zg)() : (0, g.Rv)(), []), {
keyboardModeEnabled: d,
useReducedMotion: h
  } = (0, _.cj)([E.Z], () => ({
keyboardModeEnabled: E.Z.keyboardModeEnabled,
useReducedMotion: E.Z.useReducedMotion
  }));
  return (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsx)(R, {
    showBackdrop: s
  }),
  (0, r.jsx)(m.ModalRoot, {
    className: o()(T.noBackground, {
      [T.noShadow]: i
    }),
    size: m.ModalSize.DYNAMIC,
    'aria-label': Z.Z.Messages.KEYBINDS,
    transitionState: t,
    children: (0, r.jsx)(f.W, {
      component: 'div',
      children: i ? (0, r.jsx)(S.Z, {
        handleDemonClose: function() {
          c(!1), setTimeout(n, 500);
        }
      }, 'raging-demo') : (0, r.jsx)(y, {
        content: u,
        keyboardModeEnabled: d,
        activateRagingDemon: function() {
          !h && (I.Z.disable(), l(!0), c(!0));
        }
      }, 'modal')
    })
  })
]
  });
}