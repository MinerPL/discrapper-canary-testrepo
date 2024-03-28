"use strict";
n.r(t), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("668781"),
  o = n("431583"),
  u = n("91372"),
  d = n("19780"),
  c = n("943461"),
  f = n("264674"),
  E = n("502568"),
  _ = n("35818"),
  T = n("689938"),
  m = n("210652");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class p extends a.PureComponent {
  static getDerivedStateFromProps(e, t) {
    return e.mode !== t.memoizedMode ? {
      memoizedMode: e.mode,
      clicked: !1
    } : null
  }
  handleDownloadApps() {
    (0, i.openModal)(e => (0, s.jsx)(o.default, {
      source: "Links",
      ...e
    }))
  }
  render() {
    switch (this.props.mode) {
      case "UPDATE_AVAILABLE":
        return (0, s.jsx)(E.Icon, {
          hideOnClick: !1,
          tooltip: T.default.Messages.UPDATE_AVAILABLE,
          foreground: m.downloadArrow,
          background: m.cloud,
          icon: f.default
        });
      case "UPDATE_MANUALLY":
      case "UPDATE_DOWNLOADED":
        return (0, s.jsx)(E.Icon, {
          tooltip: T.default.Messages.UPDATE_DOWNLOADED,
          foreground: m.updateIconForeground,
          onClick: this.handleInstallDownload,
          icon: c.default
        });
      default:
        return null
    }
  }
  constructor(...e) {
    super(...e), I(this, "state", {
      memoizedMode: this.props.mode,
      clicked: !1
    }), I(this, "handleInstallDownload", () => {
      d.default.isConnected() ? r.default.show({
        title: T.default.Messages.UPDATE_DURING_CALL_TITLE,
        body: T.default.Messages.UPDATE_DURING_CALL_BODY,
        onConfirm: this.doUpdate,
        cancelText: T.default.Messages.CANCEL,
        confirmText: T.default.Messages.UPDATE_DURING_CALL_CONTINUE
      }) : this.doUpdate()
    }), I(this, "doUpdate", () => {
      !this.state.clicked && (this.setState({
        clicked: !0
      }), (0, _.quitAndInstall)())
    })
  }
}
t.default = l.default.connectStores([u.default], () => ({
  mode: u.default.getState()
}))(p)