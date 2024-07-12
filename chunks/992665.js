n.d(t, {
  Z: function() {
return s;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(640108),
  o = n(403182);
class s extends i.PureComponent {
  render() {
let {
  src: e,
  fileSize: t,
  fileName: n,
  className: i,
  playable: s,
  volume: l,
  renderLinkComponent: u,
  onVolumeChange: c,
  onVolumeShow: d,
  onVolumeHide: _,
  autoMute: E,
  onMute: f,
  mimeType: h,
  onPlay: p
} = this.props;
return (0, r.jsx)(a.ZP, {
  src: e,
  fileName: n,
  fileSize: (0, o.Ng)(t),
  fileSizeBytes: t,
  type: a.ZP.Types.AUDIO,
  className: i,
  playable: s,
  volume: l,
  onMute: f,
  autoMute: E,
  onVolumeChange: c,
  onVolumeShow: d,
  onVolumeHide: _,
  renderLinkComponent: u,
  mimeType: h,
  onPlay: p
});
  }
}