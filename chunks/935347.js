n(653041);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(392711),
  o = n.n(l),
  c = n(442837),
  d = n(433517),
  u = n(481060),
  _ = n(205355),
  E = n(607070),
  h = n(38618),
  m = n(197344),
  I = n(474873),
  g = n(706454),
  p = n(215427),
  T = n(820254),
  S = n(358085),
  f = n(557177),
  C = n(998502),
  N = n(905656),
  A = n(981631),
  v = n(689938),
  Z = n(796983);

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class O extends a.PureComponent {
  createSound() {
let {
  soundpack: e
} = this.props, t = (0, f.uk)('discodo', e);
return t.volume = 1, t;
  }
  componentDidMount() {
this.setProblemsTimeout();
  }
  componentDidUpdate(e, t) {
let {
  ready: n,
  hide: i,
  problems: a
} = this.state, {
  connected: s,
  soundpack: r
} = this.props, l = s && n && !i && !a;
e.soundpack !== r && (this._connectedSound = this.createSound()), e.connected !== s || l ? (s && null != this.videoRef && d.K.get(A.wli) && this._connectedSound.play(), this.setState({
  problems: !1,
  hide: s
})) : t.hide !== i ? (i ? this.clearProblemsTimeout() : this.setProblemsTimeout(), this.setState({
  shouldRender: !0
}), setTimeout(() => this.setState({
  shouldRender: !i
}), 200)) : t.problems !== a && a && _.Z.checkIncidents();
  }
  componentWillUnmount() {
this.clearProblemsTimeout();
  }
  render() {
let {
  connected: e,
  incident: t
} = this.props, {
  hide: n
} = this.state;
if (!this.state.shouldRender)
  return null;
{
  let a = this._loadingText,
    s = null;
  return null != this._eventLoadingText && (a = this._eventLoadingText), null != t && (a = t.name, s = t.incident_updates[0].body), (0, i.jsxs)('div', {
    className: Z.container,
    'data-fade': n,
    style: {
      '--connecting-container-fade-duration': ''.concat(200, 'ms'),
      '--connecting-content-fade-duration': ''.concat(150, 'ms')
    },
    children: [
      (0, i.jsxs)('div', {
        className: Z.content,
        children: [
          (0, i.jsx)(N.Z, {
            autoPlay: !0,
            loop: !e,
            setRef: this.setVideoRef,
            onReady: this.handleReady,
            className: r()(Z.spinner, this.state.ready ? Z.ready : '')
          }),
          (0, i.jsxs)('div', {
            className: Z.text,
            children: [
              null != t ? null : (0, i.jsx)('div', {
                className: Z.tipTitle,
                children: v.Z.Messages.LOADING_DID_YOU_KNOW
              }),
              (0, i.jsx)('div', {
                className: null != t ? Z.title : Z.tip,
                children: a
              }),
              (0, i.jsx)('div', {
                className: Z.body,
                children: s
              })
            ]
          })
        ]
      }),
      (0, i.jsxs)('div', {
        className: r()(Z.problems, {
          [Z.slideIn]: this.state.problems
        }),
        children: [
          (0, i.jsx)('div', {
            className: Z.problemsText,
            children: v.Z.Messages.CONNECTING_PROBLEMS_CTA
          }),
          (0, i.jsxs)('div', {
            children: [
              (0, i.jsxs)(u.Anchor, {
                className: Z.twitterLink,
                href: A.yXt.TWITTER_SUPPORT,
                target: '_blank',
                children: [
                  (0, i.jsx)(u.XNeutralIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: Z.icon
                  }),
                  v.Z.Messages.TWEET_US
                ]
              }),
              (0, i.jsxs)(u.Anchor, {
                className: Z.statusLink,
                href: A.yXt.STATUS,
                target: '_blank',
                children: [
                  (0, i.jsx)(T.Z, {
                    className: Z.icon
                  }),
                  v.Z.Messages.SERVER_STATUS
                ]
              })
            ]
          })
        ]
      })
    ]
  });
}
  }
  constructor(e) {
super(e), L(this, 'videoRef', null), L(this, '_noProblemsTimeout', null), L(this, '_problemsTimeout', null), L(this, '_connectedSound', this.createSound()), L(this, '_loadingText', function() {
  let e = [
    v.Z.Messages.ACCESSIBILITY_LOADING_TIP_1,
    v.Z.Messages.ACCESSIBILITY_LOADING_TIP_2,
    v.Z.Messages.ACCESSIBILITY_LOADING_TIP_3,
    v.Z.Messages.ACCESSIBILITY_LOADING_TIP_4,
    v.Z.Messages.ACCESSIBILITY_LOADING_TIP_5,
    v.Z.Messages.ACCESSIBILITY_LOADING_TIP_6.format({
      tabHook: (e, t) => (0, i.jsx)(u.KeyCombo, {
        shortcut: 'tab',
        className: Z.keybind
      }, t)
    }),
    v.Z.Messages.ACCESSIBILITY_LOADING_TIP_7,
    v.Z.Messages.ACCESSIBILITY_LOADING_TIP_8,
    v.Z.Messages.ACCESSIBILITY_LOADING_TIP_9,
    v.Z.Messages.ACCESSIBILITY_LOADING_TIP_10.format({
      F6Hook: (e, t) => (0, i.jsx)(u.KeyCombo, {
        shortcut: 'f6',
        className: Z.keybind
      }, t),
      tabHook: (e, t) => (0, i.jsx)(u.KeyCombo, {
        shortcut: 'tab',
        className: Z.keybind
      }, t)
    }),
    v.Z.Messages.LOADING_LINE_1,
    v.Z.Messages.LOADING_LINE_2,
    v.Z.Messages.LOADING_LINE_4,
    v.Z.Messages.LOADING_LINE_5,
    v.Z.Messages.LOADING_LINE_6,
    v.Z.Messages.LOADING_LINE_7,
    v.Z.Messages.LOADING_LINE_8,
    v.Z.Messages.LOADING_LINE_9,
    v.Z.Messages.LOADING_LINE_10,
    v.Z.Messages.LOADING_LINE_11,
    v.Z.Messages.LOADING_LINE_12,
    v.Z.Messages.LOADING_LINE_13,
    v.Z.Messages.LOADING_LINE_14,
    v.Z.Messages.LOADING_LINE_15,
    v.Z.Messages.LOADING_TIP_1,
    v.Z.Messages.LOADING_TIP_2,
    v.Z.Messages.LOADING_TIP_3,
    v.Z.Messages.LOADING_TIP_4,
    v.Z.Messages.LOADING_TIP_5,
    v.Z.Messages.LOADING_TIP_6,
    v.Z.Messages.LOADING_TIP_7,
    v.Z.Messages.LOADING_TIP_8,
    v.Z.Messages.LOADING_TIP_9,
    v.Z.Messages.LOADING_TIP_10,
    v.Z.Messages.LOADING_TIP_11,
    v.Z.Messages.LOADING_TIP_12,
    v.Z.Messages.LOADING_TIP_13,
    v.Z.Messages.LOADING_TIP_14,
    v.Z.Messages.LOADING_TIP_15,
    v.Z.Messages.LOADING_TIP_16,
    v.Z.Messages.LOADING_TIP_17,
    v.Z.Messages.LOADING_TIP_18,
    v.Z.Messages.LOADING_TIP_19,
    v.Z.Messages.LOADING_TIP_20,
    v.Z.Messages.LOADING_TIP_21,
    v.Z.Messages.LOADING_TIP_22,
    v.Z.Messages.LOADING_TIP_23,
    v.Z.Messages.LOADING_TIP_24,
    v.Z.Messages.LOADING_TIP_25,
    v.Z.Messages.LOADING_TIP_26,
    v.Z.Messages.LOADING_TIP_27.format({
      asterisks: '**'
    }),
    v.Z.Messages.LOADING_KEYBIND_TIP_1.format({
      quickSwitcherHook: (e, t) => (0, i.jsx)(u.KeyCombo, {
        shortcut: 'mod+k',
        className: Z.keybind
      }, t)
    }),
    v.Z.Messages.LOADING_KEYBIND_TIP_2.format({
      markUnreadHook: (e, t) => (0, i.jsx)(u.KeyCombo, {
        shortcut: 'alt+click',
        className: Z.keybind
      }, t)
    }),
    v.Z.Messages.LOADING_KEYBIND_TIP_3.format({
      markServerUnreadHook: (e, t) => (0, i.jsx)(u.KeyCombo, {
        shortcut: 'shift+esc',
        className: Z.keybind
      }, t)
    }),
    v.Z.Messages.LOADING_KEYBIND_TIP_4.format({
      navigateUnreadHook: (e, t) => (0, i.jsx)(u.KeyCombo, {
        shortcut: 'shift+alt+up',
        className: Z.keybind
      }, t),
      downHook: (e, t) => (0, i.jsx)(u.KeyCombo, {
        shortcut: 'down',
        className: Z.keybind
      }, t)
    }),
    v.Z.Messages.LOADING_KEYBIND_TIP_5.format({
      keyboardShortcutsHook: (e, t) => (0, i.jsx)(u.KeyCombo, {
        shortcut: 'mod+/',
        className: Z.keybind
      }, t)
    }),
    v.Z.Messages.LOADING_KEYBIND_TIP_6.format({
      messageNewlineHook: (e, t) => (0, i.jsx)(u.KeyCombo, {
        shortcut: 'shift+return',
        className: Z.keybind
      }, t)
    }),
    v.Z.Messages.LOADING_KEYBIND_TIP_7.format({
      shiftHook: (e, t) => (0, i.jsx)(u.KeyCombo, {
        shortcut: 'shift',
        className: Z.keybind
      }, t)
    }),
    v.Z.Messages.LOADING_KEYBIND_TIP_8.format({
      upHook: (e, t) => (0, i.jsx)(u.KeyCombo, {
        shortcut: 'up',
        className: Z.keybind
      }, t)
    })
  ];
  return g.default.locale.startsWith('en-') && e.push(v.Z.Messages.POLLS_MARKETING_EASTER_EGG_LOADING_LINE), e[o().random(e.length - 1)];
}()), L(this, '_eventLoadingText', function() {
  let e = m.Z.getLoadingTips();
  if (null != e && e.length > 0)
    return e[o().random(e.length - 1)];
}()), L(this, 'handleReady', () => {
  this.setState({
    ready: !0
  }), (0, S.isDesktop)() && (C.ZP.send('UPDATED_QUOTES', ['Hold Tight \u2014 Loading Discord']), C.ZP.send('UPDATE_OPEN_ON_STARTUP'));
}), L(this, 'setVideoRef', e => {
  this.videoRef = e;
}), L(this, 'setProblemsTimeout', () => {
  null == this._problemsTimeout && (this._problemsTimeout = setTimeout(() => this.setState({
    problems: !0
  }), 10000));
}), L(this, 'clearProblemsTimeout', () => {
  clearTimeout(this._problemsTimeout), this._problemsTimeout = null;
});
let {
  connected: t
} = e;
this.state = {
  ready: t,
  hide: t,
  problems: !1,
  shouldRender: !t
}, this._connectedSound.volume = 1;
  }
}
t.Z = c.ZP.connectStores([
  h.Z,
  p.Z,
  I.Z,
  E.Z
], () => ({
  isTryingToConnect: h.Z.isTryingToConnect(),
  connected: h.Z.isConnected(),
  incident: p.Z.getIncident(),
  soundpack: I.Z.getSoundpack(),
  reducedMotion: E.Z.useReducedMotion
}))(e => {
  let {
isTryingToConnect: t,
connected: n,
incident: a,
soundpack: s,
reducedMotion: r
  } = e;
  return t ? (0, i.jsx)(O, {
reducedMotion: r,
soundpack: s,
connected: n,
incident: a
  }) : null;
});