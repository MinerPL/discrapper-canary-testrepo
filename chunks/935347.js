"use strict";
n.r(t), n("653041");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("392711"),
  o = n.n(r),
  u = n("748780"),
  d = n("442837"),
  c = n("433517"),
  f = n("481060"),
  E = n("205355"),
  h = n("607070"),
  _ = n("38618"),
  C = n("197344"),
  S = n("474873"),
  m = n("706454"),
  p = n("215427"),
  I = n("820254"),
  T = n("985806"),
  g = n("838949"),
  A = n("70956"),
  N = n("358085"),
  v = n("557177"),
  R = n("998502"),
  L = n("981631"),
  O = n("689938"),
  M = n("689511");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class y extends s.PureComponent {
  createSound() {
    let {
      soundpack: e
    } = this.props, t = (0, v.createSoundForPack)("discodo", e);
    return t.volume = 1, t
  }
  componentDidMount() {
    this.setProblemsTimeout()
  }
  componentDidUpdate(e, t) {
    let {
      ready: n,
      hide: a,
      problems: s,
      opacity: l
    } = this.state, {
      connected: i,
      soundpack: r,
      reducedMotion: o
    } = this.props, d = i && n && !a && !s;
    if (e.soundpack !== r && (this._connectedSound = this.createSound()), e.connected !== i || d) {
      if (i && null != this.videoRef) {
        let e = Math.max(Math.ceil((this.videoRef.duration - this.videoRef.currentTime) * A.default.Millis.SECOND), 600);
        clearTimeout(this._noProblemsTimeout), c.Storage.get(L.DISCODO_STORAGE_KEY) && this._connectedSound.play(), o ? this.setState({
          problems: !1,
          hide: i
        }) : this._noProblemsTimeout = setTimeout(() => {
          this.setState({
            problems: !1,
            hide: i
          })
        }, e)
      } else this.setState({
        problems: !1,
        hide: i
      })
    } else t.hide !== a ? (a ? this.clearProblemsTimeout() : this.setProblemsTimeout(), this.setState({
      shouldRender: !0
    }), u.default.timing(l, {
      toValue: a ? 0 : 1,
      duration: 200
    }).start(() => this.setState({
      shouldRender: !a
    }))) : t.problems !== s && s && E.default.checkIncidents()
  }
  componentWillUnmount() {
    this.clearProblemsTimeout(), clearTimeout(this._noProblemsTimeout)
  }
  render() {
    let {
      connected: e,
      incident: t
    } = this.props;
    if (!this.state.shouldRender) return null;
    {
      let n = this._loadingText,
        s = null;
      return null != this._eventLoadingText && (n = this._eventLoadingText), null != t && (n = t.name, s = t.incident_updates[0].body), (0, a.jsxs)(u.default.div, {
        className: M.container,
        style: {
          opacity: this.state.opacity
        },
        children: [(0, a.jsxs)("div", {
          className: M.content,
          children: [(0, a.jsx)(g.default, {
            autoPlay: !0,
            loop: !e,
            setRef: this.setVideoRef,
            onReady: this.handleReady,
            className: this.state.ready ? M.ready : ""
          }), (0, a.jsxs)("div", {
            className: M.text,
            children: [null != t ? null : (0, a.jsx)("div", {
              className: M.tipTitle,
              children: O.default.Messages.LOADING_DID_YOU_KNOW
            }), (0, a.jsx)("div", {
              className: null != t ? M.title : M.tip,
              children: n
            }), (0, a.jsx)("div", {
              className: M.body,
              children: s
            })]
          })]
        }), (0, a.jsxs)("div", {
          className: i()(M.problems, {
            [M.slideIn]: this.state.problems
          }),
          children: [(0, a.jsx)("div", {
            className: M.problemsText,
            children: O.default.Messages.CONNECTING_PROBLEMS_CTA
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsxs)(f.Anchor, {
              className: M.twitterLink,
              href: L.Links.TWITTER_SUPPORT,
              target: "_blank",
              children: [(0, a.jsx)(T.default, {
                className: M.icon
              }), O.default.Messages.TWEET_US]
            }), (0, a.jsxs)(f.Anchor, {
              className: M.statusLink,
              href: L.Links.STATUS,
              target: "_blank",
              children: [(0, a.jsx)(I.default, {
                className: M.icon
              }), O.default.Messages.SERVER_STATUS]
            })]
          })]
        })]
      })
    }
  }
  constructor(e) {
    super(e), P(this, "videoRef", null), P(this, "_noProblemsTimeout", null), P(this, "_problemsTimeout", null), P(this, "_connectedSound", this.createSound()), P(this, "_loadingText", function() {
      let e = [O.default.Messages.ACCESSIBILITY_LOADING_TIP_1, O.default.Messages.ACCESSIBILITY_LOADING_TIP_2, O.default.Messages.ACCESSIBILITY_LOADING_TIP_3, O.default.Messages.ACCESSIBILITY_LOADING_TIP_4, O.default.Messages.ACCESSIBILITY_LOADING_TIP_5, O.default.Messages.ACCESSIBILITY_LOADING_TIP_6.format({
        tabHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "tab",
          className: M.keybind
        }, t)
      }), O.default.Messages.ACCESSIBILITY_LOADING_TIP_7, O.default.Messages.ACCESSIBILITY_LOADING_TIP_8, O.default.Messages.ACCESSIBILITY_LOADING_TIP_9, O.default.Messages.ACCESSIBILITY_LOADING_TIP_10.format({
        F6Hook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "f6",
          className: M.keybind
        }, t),
        tabHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "tab",
          className: M.keybind
        }, t)
      }), O.default.Messages.LOADING_LINE_1, O.default.Messages.LOADING_LINE_2, O.default.Messages.LOADING_LINE_4, O.default.Messages.LOADING_LINE_5, O.default.Messages.LOADING_LINE_6, O.default.Messages.LOADING_LINE_7, O.default.Messages.LOADING_LINE_8, O.default.Messages.LOADING_LINE_9, O.default.Messages.LOADING_LINE_10, O.default.Messages.LOADING_LINE_11, O.default.Messages.LOADING_LINE_12, O.default.Messages.LOADING_LINE_13, O.default.Messages.LOADING_LINE_14, O.default.Messages.LOADING_LINE_15, O.default.Messages.LOADING_TIP_1, O.default.Messages.LOADING_TIP_2, O.default.Messages.LOADING_TIP_3, O.default.Messages.LOADING_TIP_4, O.default.Messages.LOADING_TIP_5, O.default.Messages.LOADING_TIP_6, O.default.Messages.LOADING_TIP_7, O.default.Messages.LOADING_TIP_8, O.default.Messages.LOADING_TIP_9, O.default.Messages.LOADING_TIP_10, O.default.Messages.LOADING_TIP_11, O.default.Messages.LOADING_TIP_12, O.default.Messages.LOADING_TIP_13, O.default.Messages.LOADING_TIP_14, O.default.Messages.LOADING_TIP_15, O.default.Messages.LOADING_TIP_16, O.default.Messages.LOADING_TIP_17, O.default.Messages.LOADING_TIP_18, O.default.Messages.LOADING_TIP_19, O.default.Messages.LOADING_TIP_20, O.default.Messages.LOADING_TIP_21, O.default.Messages.LOADING_TIP_22, O.default.Messages.LOADING_TIP_23, O.default.Messages.LOADING_TIP_24, O.default.Messages.LOADING_TIP_25, O.default.Messages.LOADING_TIP_26, O.default.Messages.LOADING_TIP_27.format({
        asterisks: "**"
      }), O.default.Messages.LOADING_KEYBIND_TIP_1.format({
        quickSwitcherHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "mod+k",
          className: M.keybind
        }, t)
      }), O.default.Messages.LOADING_KEYBIND_TIP_2.format({
        markUnreadHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "alt+click",
          className: M.keybind
        }, t)
      }), O.default.Messages.LOADING_KEYBIND_TIP_3.format({
        markServerUnreadHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "shift+esc",
          className: M.keybind
        }, t)
      }), O.default.Messages.LOADING_KEYBIND_TIP_4.format({
        navigateUnreadHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "shift+alt+up",
          className: M.keybind
        }, t),
        downHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "down",
          className: M.keybind
        }, t)
      }), O.default.Messages.LOADING_KEYBIND_TIP_5.format({
        keyboardShortcutsHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "mod+/",
          className: M.keybind
        }, t)
      }), O.default.Messages.LOADING_KEYBIND_TIP_6.format({
        messageNewlineHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "shift+return",
          className: M.keybind
        }, t)
      }), O.default.Messages.LOADING_KEYBIND_TIP_7.format({
        shiftHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "shift",
          className: M.keybind
        }, t)
      }), O.default.Messages.LOADING_KEYBIND_TIP_8.format({
        upHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "up",
          className: M.keybind
        }, t)
      })];
      return m.default.locale.startsWith("en-") && e.push(O.default.Messages.POLLS_MARKETING_EASTER_EGG_LOADING_LINE), e[o().random(e.length - 1)]
    }()), P(this, "_eventLoadingText", function() {
      let e = C.default.getLoadingTips();
      if (null != e && e.length > 0) return e[o().random(e.length - 1)]
    }()), P(this, "handleReady", () => {
      this.setState({
        ready: !0
      }), (0, N.isDesktop)() && (R.default.send("UPDATED_QUOTES", ["Hold Tight — Loading Discord"]), R.default.send("UPDATE_OPEN_ON_STARTUP"))
    }), P(this, "setVideoRef", e => {
      this.videoRef = e
    }), P(this, "setProblemsTimeout", () => {
      null == this._problemsTimeout && (this._problemsTimeout = setTimeout(() => this.setState({
        problems: !0
      }), 1e4))
    }), P(this, "clearProblemsTimeout", () => {
      clearTimeout(this._problemsTimeout), this._problemsTimeout = null
    });
    let {
      connected: t
    } = e;
    this.state = {
      ready: t,
      hide: t,
      problems: !1,
      shouldRender: !t,
      opacity: new u.default.Value(t ? 0 : 1)
    }, this._connectedSound.volume = 1
  }
}
t.default = d.default.connectStores([_.default, p.default, S.default, h.default], () => ({
  isTryingToConnect: _.default.isTryingToConnect(),
  connected: _.default.isConnected(),
  incident: p.default.getIncident(),
  soundpack: S.default.getSoundpack(),
  reducedMotion: h.default.useReducedMotion
}))(e => {
  let {
    isTryingToConnect: t,
    connected: n,
    incident: s,
    soundpack: l,
    reducedMotion: i
  } = e;
  return t ? (0, a.jsx)(y, {
    reducedMotion: i,
    soundpack: l,
    connected: n,
    incident: s
  }) : null
})