"use strict";
n.d(t, {
  Z: function() {
    return _
  }
});
var i = n(735250),
  r = n(470079),
  s = n(403182),
  o = n(261922),
  a = n(715246),
  l = n(981631),
  u = n(689938);
class _ extends r.Component {
  render() {
    let {
      src: e,
      fileSize: t,
      className: n,
      mediaPlayerClassName: r,
      poster: _,
      fileName: d,
      naturalWidth: c,
      naturalHeight: E,
      playable: I,
      downloadable: T = !0,
      volume: h,
      autoPlay: S,
      autoMute: f,
      responsive: N,
      mediaLayoutType: A,
      mimeType: m,
      renderOverlayContent: O,
      renderLinkComponent: R,
      onClick: C,
      onPlay: p,
      onPause: g,
      onEnded: L,
      onControlsShow: v,
      onControlsHide: D,
      onVolumeChange: M,
      onMute: P,
      alt: y = u.Z.Messages.VIDEO,
      ...U
    } = this.props;
    return (0, i.jsx)(o.Z, {
      alt: y,
      className: n,
      src: _,
      ...U,
      minWidth: a.ZP.minWidth,
      minHeight: a.ZP.minHeight,
      shouldLink: !1,
      shouldAnimate: !1,
      mediaLayoutType: A,
      responsive: N,
      children: n => {
        let {
          src: o,
          size: {
            width: u,
            height: _
          }
        } = n, y = !(c <= l.N_j && E <= l.XKF || c <= l.XKF && E <= l.N_j);
        return (0, i.jsx)(a.ZP, {
          className: r,
          forceExternal: y,
          src: e,
          poster: o,
          width: u,
          height: _,
          responsive: N,
          volume: h,
          autoPlay: null != S && S,
          autoMute: null != f && f,
          type: a.ZP.Types.VIDEO,
          mediaLayoutType: A,
          fileName: d,
          fileSize: null == t ? void 0 : (0, s.Ng)(t),
          fileSizeBytes: null == t ? void 0 : t,
          playable: I,
          renderLinkComponent: R,
          renderOverlayContent: O,
          onClick: C,
          onPlay: p,
          onPause: g,
          onEnded: L,
          onVolumeChange: M,
          onMute: P,
          onControlsShow: v,
          onControlsHide: D,
          mimeType: m,
          downloadable: T
        })
      }
    })
  }
}