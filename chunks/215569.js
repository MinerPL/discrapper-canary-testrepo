"use strict";
n.d(t, {
  W: function() {
    return a
  }
}), n(653041), n(47120);
var i, r = n(470079),
  s = n(830483);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class a extends(i = r.Component) {
  static getDerivedStateFromProps(e, t) {
    let {
      children: n,
      firstRender: i
    } = t, r = (0, s.n)(e.children);
    return {
      children: i ? r : (0, s.B)(n, r),
      firstRender: !1
    }
  }
  componentDidMount() {
    this._isMounted = !0;
    let {
      children: e
    } = this.state;
    if (this.props.transitionAppear)
      for (let t in e) e[t] && this.performAppear(t)
  }
  componentWillUnmount() {
    this._isMounted = !1, this._keyChildMapping = {}, this.state.children = {}
  }
  componentDidUpdate(e, t) {
    if (e !== this.props) {
      let e = (0, s.n)(this.props.children),
        n = t.children;
      if (this.props.transitionEnter ? this._enqueueTransitions(e, n, this._keysToEnter) : this._keysToEnter.length && (this._keysToEnter = []), this.props.transitionLeave) this._enqueueTransitions(n, e, this._keysToLeave);
      else {
        let t = [];
        this._enqueueTransitions(n, e, t);
        let i = (0, s.B)(n, e);
        for (let e = 0, n = t.length; e < n; e++) delete i[t[e]];
        this._isMounted && this.setState({
          children: i
        }), this._keysToLeave.length && (this._keysToLeave = [])
      }
    }
    if (this._keysToEnter.length) {
      let e = this._keysToEnter;
      this._keysToEnter = [], e.forEach(this.performEnter, this)
    }
    if (this._keysToLeave.length) {
      let e = this._keysToLeave;
      this._keysToLeave = [], e.forEach(this.performLeave, this)
    }
  }
  _enqueueTransitions(e, t, n) {
    for (let i in e) {
      let r = t && t.hasOwnProperty(i);
      e[i] && !r && !this._currentlyTransitioningKeys.has(i) && n.push(i)
    }
  }
  _perform(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    this._currentlyTransitioningKeys.add(e);
    let r = () => this._handleDonePerform(e, n, i),
      s = this._keyChildMapping[e];
    null != s && null != s[t] ? s[t](r) : r()
  }
  _handleDonePerform(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = this._keyChildMapping[e];
    null != i && null != i[t] && i[t](), this._currentlyTransitioningKeys.delete(e);
    let r = (0, s.n)(this.props.children);
    n ? null != r && r.hasOwnProperty(e) ? this.performEnter(e) : this.setState(t => {
      let {
        children: n
      } = t, {
        [e]: i,
        ...r
      } = n;
      return {
        children: r
      }
    }) : (null == r || !r.hasOwnProperty(e)) && this.performLeave(e)
  }
  performAppear(e) {
    this._perform(e, "componentWillAppear", "componentDidAppear")
  }
  performEnter(e) {
    this._perform(e, "componentWillEnter", "componentDidEnter")
  }
  performLeave(e) {
    this._perform(e, "componentWillLeave", "componentDidLeave", !0)
  }
  render() {
    let {
      childFactory: e,
      component: t
    } = this.props, {
      children: n
    } = this.state, i = [];
    for (let t in n) {
      let s = n[t];
      null != s && r.isValidElement(s) && i.push(r.cloneElement(null == e ? s : e(s), {
        ref: e => this.addChildRef(t, e),
        key: t
      }))
    }
    let s = {
      ...this.props
    };
    return Object.keys(a.defaultProps).forEach(e => delete s[e]), r.createElement(t, s, i)
  }
  constructor(e) {
    super(e), o(this, "_currentlyTransitioningKeys", void 0), o(this, "_keysToEnter", void 0), o(this, "_keysToLeave", void 0), o(this, "_isMounted", void 0), o(this, "_keyChildMapping", {}), o(this, "addChildRef", (e, t) => {
      this._keyChildMapping[e] = t
    }), this.state = {
      children: (0, s.n)(e.children),
      firstRender: !0
    }, this._currentlyTransitioningKeys = new Set, this._keysToEnter = [], this._keysToLeave = [], this._isMounted = !1
  }
}
o(a, "defaultProps", {
  component: "span",
  transitionAppear: !0,
  transitionLeave: !0,
  transitionEnter: !0,
  childFactory: null
})