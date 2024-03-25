"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
}), s("222007");
var a = s("37983"),
  r = s("884691"),
  i = s("414456"),
  n = s.n(i),
  l = s("77078"),
  o = s("895530"),
  u = s("145131"),
  d = s("993105"),
  c = s("449008"),
  _ = s("773336"),
  E = s("75576"),
  T = s("49111"),
  I = s("782340"),
  f = s("28918");
let R = {
  [T.OperatingSystems.WINDOWS]: _.PlatformTypes.WINDOWS,
  [T.OperatingSystems.MACOS]: _.PlatformTypes.OSX,
  [T.OperatingSystems.LINUX]: _.PlatformTypes.LINUX
};
class S extends r.PureComponent {
  render() {
    let {
      active: e,
      children: t,
      pageSize: s,
      onClick: r
    } = this.props, i = s === E.PageSizes.LARGE;
    return (0, a.jsx)(l.Button, {
      size: i ? l.Button.Sizes.MIN : l.Button.Sizes.LARGE,
      fullWidth: !i,
      color: e ? f.tabSelectedColor : f.tabNotSelectedColor,
      className: n({
        [f.tabPageLarge]: i,
        [f.tabPageSmall]: !i,
        [f.tabSelected]: e,
        [f.tabNotSelected]: !e
      }),
      onClick: r,
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
class N extends r.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let {
      systemRequirements: s
    } = e, {
      selectedOperatingSystem: a
    } = t, r = Object.keys(s);
    return r.includes(a) ? null : {
      selectedOperatingSystem: r[0]
    }
  }
  renderTabs() {
    let {
      pageSize: e,
      systemRequirements: t
    } = this.props, {
      selectedOperatingSystem: s
    } = this.state, r = Object.keys(t);
    return 1 === r.length ? null : (0, a.jsxs)(u.default, {
      className: f.tabs,
      children: [(0, a.jsx)("div", {
        className: f.separator
      }), r.map(t => (0, a.jsx)(S, {
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
    let s = m(e),
      r = s.map((e, t) => {
        let s = null != e.value ? e.value.trim() : null;
        return null == s || 0 === s.length ? null : (0, a.jsxs)("div", {
          className: f.requirement,
          children: [(0, a.jsxs)("span", {
            className: f.requirementKey,
            children: [e.key, ":"]
          }), s]
        }, t)
      }).filter(c.isNotNullish);
    return (0, a.jsxs)("div", {
      className: f.requirements,
      children: [(0, a.jsx)(o.default, {
        tag: "h4",
        children: t
      }), r]
    })
  }
  renderBody() {
    let {
      minimum: e,
      recommended: t
    } = this.props.systemRequirements[this.state.selectedOperatingSystem];
    return (0, a.jsxs)("div", {
      className: f.requirementsContainer,
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
    super(e), this.handleSelectOperatingSystem = e => {
      this.setState({
        selectedOperatingSystem: e
      })
    };
    let t = (0, _.getPlatform)(),
      s = Object.keys(e.systemRequirements),
      a = s[0];
    for (let e of s) R[e] === t && (a = e);
    this.state = {
      selectedOperatingSystem: a
    }
  }
}
var A = N