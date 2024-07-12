n(47120);
var i = n(735250),
  a = n(470079),
  s = n(442837),
  r = n(481060),
  l = n(668781),
  o = n(431583),
  c = n(91372),
  d = n(19780),
  u = n(35818),
  _ = n(665149),
  E = n(689938),
  I = n(139715);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class T extends a.PureComponent {
  static getDerivedStateFromProps(e, t) {
return e.mode !== t.memoizedMode ? {
  memoizedMode: e.mode,
  clicked: !1
} : null;
  }
  handleDownloadApps() {
(0, r.openModal)(e => (0, i.jsx)(o.default, {
  source: 'Links',
  ...e
}));
  }
  render() {
switch (this.props.mode) {
  case 'UPDATE_AVAILABLE':
    return (0, i.jsx)(_.JO, {
      hideOnClick: !1,
      tooltip: E.Z.Messages.UPDATE_AVAILABLE,
      foreground: I.downloadArrow,
      background: I.cloud,
      icon: r.DownloadIcon
    });
  case 'UPDATE_MANUALLY':
  case 'UPDATE_DOWNLOADED':
    return (0, i.jsx)(_.JO, {
      tooltip: E.Z.Messages.UPDATE_DOWNLOADED,
      foreground: I.updateIconForeground,
      onClick: this.handleInstallDownload,
      icon: r.DownloadIcon
    });
  default:
    return null;
}
  }
  constructor(...e) {
super(...e), m(this, 'state', {
  memoizedMode: this.props.mode,
  clicked: !1
}), m(this, 'handleInstallDownload', () => {
  d.Z.isConnected() ? l.Z.show({
    title: E.Z.Messages.UPDATE_DURING_CALL_TITLE,
    body: E.Z.Messages.UPDATE_DURING_CALL_BODY,
    onConfirm: this.doUpdate,
    cancelText: E.Z.Messages.CANCEL,
    confirmText: E.Z.Messages.UPDATE_DURING_CALL_CONTINUE
  }) : this.doUpdate();
}), m(this, 'doUpdate', () => {
  !this.state.clicked && (this.setState({
    clicked: !0
  }), (0, u.Q)());
});
  }
}
t.Z = s.ZP.connectStores([c.Z], () => ({
  mode: c.Z.getState()
}))(T);