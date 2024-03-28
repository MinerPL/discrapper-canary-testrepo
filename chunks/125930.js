"use strict";
s.r(t), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("803997"),
  n = s.n(r),
  l = s("481060"),
  o = s("378720"),
  u = s("285952"),
  d = s("424218"),
  c = s("823379"),
  _ = s("358085"),
  E = s("843445"),
  T = s("981631"),
  I = s("689938"),
  R = s("989466");
let S = {
  [T.OperatingSystems.WINDOWS]: _.PlatformTypes.WINDOWS,
  [T.OperatingSystems.MACOS]: _.PlatformTypes.OSX,
  [T.OperatingSystems.LINUX]: _.PlatformTypes.LINUX
};
class f extends i.PureComponent {
  render() {
    let {
      active: e,
      children: t,
      pageSize: s,
      onClick: i
    } = this.props, r = s === E.PageSizes.LARGE;
    return (0, a.jsx)(l.Button, {
      size: r ? l.Button.Sizes.MIN : l.Button.Sizes.LARGE,
      fullWidth: !r,
      color: e ? R.tabSelectedColor : R.tabNotSelectedColor,
      className: n()({
        [R.tabPageLarge]: r,
        [R.tabPageSmall]: !r,
        [R.tabSelected]: e,
        [R.tabNotSelected]: !e
      }),
      onClick: i,
      children: t
    })
  }
}
let m = e => [{
  key: I.default.Messages.APPLICATION_STORE_SPECS_OS,
  value: e.operating_system_version
}, {
  key: I.default.Messages.APPLICATION_STORE_SPECS_CPU,
  value: e.cpu
}, {
  key: I.default.Messages.APPLICATION_STORE_SPECS_MEMORY,
  value: null != e.ram ? I.default.Messages.APPLICATION_STORE_SPECS_MEMORY_VALUE.format({
    size: (0, d.formatSize)(1e3 * e.ram, {
      showDecimalForGB: !1
    })
  }) : null
}, {
  key: I.default.Messages.APPLICATION_STORE_SPECS_VIDEO,
  value: e.gpu
}, {
  key: I.default.Messages.APPLICATION_STORE_SPECS_STORAGE,
  value: null != e.disk ? (0, d.formatSize)(1e3 * e.disk, {
    showDecimalForGB: !1
  }) : null
}, {
  key: I.default.Messages.APPLICATION_STORE_SPECS_SOUND,
  value: e.sound_card
}, {
  key: I.default.Messages.APPLICATION_STORE_SPECS_NETWORK,
  value: e.network
}, {
  key: I.default.Messages.APPLICATION_STORE_SPECS_NOTES,
  value: e.notes
}];
class N extends i.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let {
      systemRequirements: s
    } = e, {
      selectedOperatingSystem: a
    } = t, i = Object.keys(s);
    return i.includes(a) ? null : {
      selectedOperatingSystem: i[0]
    }
  }
  renderTabs() {
    let {
      pageSize: e,
      systemRequirements: t
    } = this.props, {
      selectedOperatingSystem: s
    } = this.state, i = Object.keys(t);
    return 1 === i.length ? null : (0, a.jsxs)(u.default, {
      className: R.tabs,
      children: [(0, a.jsx)("div", {
        className: R.separator
      }), i.map(t => (0, a.jsx)(f, {
        active: t === s,
        onClick: () => this.handleSelectOperatingSystem(t),
        pageSize: e,
        children: function(e) {
          switch (e) {
            case T.OperatingSystems.WINDOWS:
              return I.default.Messages.WINDOWS;
            case T.OperatingSystems.MACOS:
              return I.default.Messages.MACOS;
            case T.OperatingSystems.LINUX:
              return I.default.Messages.LINUX
          }
        }(t)
      }, t))]
    })
  }
  renderRequirementsSection(e, t) {
    if (null == e) return null;
    let s = m(e).map((e, t) => {
      let s = null != e.value ? e.value.trim() : null;
      return null == s || 0 === s.length ? null : (0, a.jsxs)("div", {
        className: R.requirement,
        children: [(0, a.jsxs)("span", {
          className: R.requirementKey,
          children: [e.key, ":"]
        }), s]
      }, t)
    }).filter(c.isNotNullish);
    return (0, a.jsxs)("div", {
      className: R.requirements,
      children: [(0, a.jsx)(o.default, {
        tag: "h4",
        children: t
      }), s]
    })
  }
  renderBody() {
    let {
      minimum: e,
      recommended: t
    } = this.props.systemRequirements[this.state.selectedOperatingSystem];
    return (0, a.jsxs)("div", {
      className: R.requirementsContainer,
      children: [this.renderRequirementsSection(e, I.default.Messages.APPLICATION_STORE_SPECS_MINIMUM), this.renderRequirementsSection(t, I.default.Messages.APPLICATION_STORE_SPECS_RECOMMENDED)]
    })
  }
  render() {
    return (0, a.jsxs)("div", {
      className: this.props.className,
      children: [(0, a.jsx)(o.default, {
        children: I.default.Messages.APPLICATION_STORE_SECTION_TITLE_SYSTEM_REQUIREMENTS
      }), this.renderTabs(), this.renderBody()]
    })
  }
  constructor(e) {
    var t, s, a;
    super(e), t = this, s = "handleSelectOperatingSystem", a = e => {
      this.setState({
        selectedOperatingSystem: e
      })
    }, s in t ? Object.defineProperty(t, s, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[s] = a;
    let i = (0, _.getPlatform)(),
      r = Object.keys(e.systemRequirements),
      n = r[0];
    for (let e of r) S[e] === i && (n = e);
    this.state = {
      selectedOperatingSystem: n
    }
  }
}
t.default = N