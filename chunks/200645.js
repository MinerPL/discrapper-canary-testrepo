"use strict";
s.r(t);
var a = s("735250"),
  n = s("470079"),
  l = s("803997"),
  i = s.n(l),
  r = s("481060"),
  o = s("358085"),
  d = s("998502"),
  u = s("689938"),
  c = s("794711");

function S(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class E extends n.PureComponent {
  async componentDidMount() {
    this.setState({
      openOnStartup: await d.default.getSetting("OPEN_ON_STARTUP", !0),
      startMinimized: await d.default.getSetting("START_MINIMIZED", !1),
      minimizeToTray: await d.default.getSetting("MINIMIZE_TO_TRAY", !0)
    })
  }
  render() {
    let {
      openOnStartup: e,
      startMinimized: t,
      minimizeToTray: s
    } = this.state, n = (0, o.isLinux)() ? u.default.Messages.USER_SETTINGS_LINUX_SETTINGS : u.default.Messages.USER_SETTINGS_WINDOWS_SETTINGS;
    return (0, a.jsxs)(r.FormSection, {
      tag: r.FormTitleTags.H1,
      title: n,
      children: [(0, a.jsx)(r.FormTitle, {
        children: u.default.Messages.USER_SETTINGS_STARTUP_BEHAVIOR
      }), (0, a.jsx)(r.FormSwitch, {
        className: c.marginBottom20,
        value: e,
        note: u.default.Messages.USER_SETTINGS_OPEN_ON_STARTUP_BODY,
        onChange: this.handleToggleOpenOnStartup,
        children: u.default.Messages.USER_SETTINGS_OPEN_ON_STARTUP_LABEL
      }), (0, o.isWindows)() ? (0, a.jsx)(r.FormSwitch, {
        disabled: !e,
        className: i()(c.marginTop8, c.marginBottom20),
        value: !!e && t,
        note: u.default.Messages.USER_SETTINGS_START_MINIMIZED_BODY,
        onChange: this.handleToggleStartMinimized,
        children: u.default.Messages.USER_SETTINGS_START_MINIMIZED_LABEL
      }) : null, (0, a.jsx)(r.FormTitle, {
        className: i()(c.marginTop20, c.marginBottom8),
        children: u.default.Messages.USER_SETTINGS_CLOSE_BUTTON
      }), (0, a.jsx)(r.FormSwitch, {
        className: c.marginBottom20,
        value: s,
        note: u.default.Messages.USER_SETTINGS_MINIMIZE_TO_TRAY_BODY,
        onChange: this.handleToggleMinimizeToTray,
        children: u.default.Messages.USER_SETTINGS_MINIMIZE_TO_TRAY_LABEL
      })]
    })
  }
  constructor(e) {
    super(e), S(this, "handleToggleOpenOnStartup", () => {
      let e = !this.state.openOnStartup;
      this.setState({
        openOnStartup: e
      }), d.default.send("TOGGLE_OPEN_ON_STARTUP", e)
    }), S(this, "handleToggleStartMinimized", () => {
      let e = !this.state.startMinimized;
      this.setState({
        startMinimized: e
      }), d.default.send("TOGGLE_START_MINIMIZED", e)
    }), S(this, "handleToggleMinimizeToTray", () => {
      let e = !this.state.minimizeToTray;
      this.setState({
        minimizeToTray: e
      }), d.default.send("TOGGLE_MINIMIZE_TO_TRAY", e)
    }), this.state = {
      openOnStartup: !0,
      startMinimized: !1,
      minimizeToTray: !0
    }
  }
}
t.default = E