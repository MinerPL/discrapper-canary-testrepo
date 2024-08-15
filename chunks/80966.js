n.d(t, {
  Z: function() {
return c;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(403182),
  s = n(124347),
  o = n(640108),
  l = n(981631),
  u = n(689938);
class c extends i.Component {
  render() {
let {
  src: e,
  fileSize: t,
  className: n,
  mediaPlayerClassName: i,
  poster: c,
  fileName: d,
  naturalWidth: _,
  naturalHeight: E,
  playable: f,
  downloadable: h = !0,
  volume: p,
  autoPlay: m,
  autoMute: I,
  responsive: T,
  mediaLayoutType: g,
  mimeType: S,
  renderOverlayContent: A,
  renderLinkComponent: N,
  onClick: v,
  onPlay: O,
  onPause: R,
  onEnded: C,
  onControlsShow: y,
  onControlsHide: D,
  onVolumeChange: L,
  onMute: b,
  alt: M = u.Z.Messages.VIDEO,
  ...P
} = this.props;
return (0, r.jsx)(s.Z, {
  alt: M,
  className: n,
  src: c,
  ...P,
  minWidth: o.ZP.minWidth,
  minHeight: o.ZP.minHeight,
  shouldLink: !1,
  shouldAnimate: !1,
  mediaLayoutType: g,
  responsive: T,
  children: n => {
    let {
      src: s,
      size: {
        width: u,
        height: c
      }
    } = n, M = !(_ <= l.N_j && E <= l.XKF || _ <= l.XKF && E <= l.N_j);
    return (0, r.jsx)(o.ZP, {
      className: i,
      forceExternal: M,
      src: e,
      poster: s,
      width: u,
      height: c,
      responsive: T,
      volume: p,
      autoPlay: null != m && m,
      autoMute: null != I && I,
      type: o.ZP.Types.VIDEO,
      mediaLayoutType: g,
      fileName: d,
      fileSize: null == t ? void 0 : (0, a.Ng)(t),
      fileSizeBytes: null == t ? void 0 : t,
      playable: f,
      renderLinkComponent: N,
      renderOverlayContent: A,
      onClick: v,
      onPlay: O,
      onPause: R,
      onEnded: C,
      onVolumeChange: L,
      onMute: b,
      onControlsShow: y,
      onControlsHide: D,
      mimeType: S,
      downloadable: h
    });
  }
});
  }
}