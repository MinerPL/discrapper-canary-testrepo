"use strict";
n.d(t, {
  Z: function() {
    return a
  }
});
var i = n(735250),
  r = n(470079),
  s = n(403182),
  o = n(715246);
class a extends r.PureComponent {
  render() {
    let {
      src: e,
      fileSize: t,
      fileName: n,
      className: r,
      playable: a,
      volume: l,
      renderLinkComponent: u,
      onVolumeChange: _,
      onVolumeShow: d,
      onVolumeHide: c,
      autoMute: E,
      onMute: I,
      mimeType: T,
      onPlay: h
    } = this.props;
    return (0, i.jsx)(o.ZP, {
      src: e,
      fileName: n,
      fileSize: (0, s.Ng)(t),
      fileSizeBytes: t,
      type: o.ZP.Types.AUDIO,
      className: r,
      playable: a,
      volume: l,
      onMute: I,
      autoMute: E,
      onVolumeChange: _,
      onVolumeShow: d,
      onVolumeHide: c,
      renderLinkComponent: u,
      mimeType: T,
      onPlay: h
    })
  }
}