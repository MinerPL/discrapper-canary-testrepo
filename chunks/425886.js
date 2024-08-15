n.d(t, {
	Z: function () {
		return o;
	}
});
var r = n(735250),
	i = n(470079),
	a = n(403182),
	s = n(640108);
class o extends i.PureComponent {
	render() {
		let { src: e, fileSize: t, fileName: n, className: i, playable: o, volume: l, renderLinkComponent: u, onVolumeChange: c, onVolumeShow: d, onVolumeHide: _, autoMute: E, onMute: f, mimeType: h, onPlay: p } = this.props;
		return (0, r.jsx)(s.ZP, {
			src: e,
			fileName: n,
			fileSize: (0, a.Ng)(t),
			fileSizeBytes: t,
			type: s.ZP.Types.AUDIO,
			className: i,
			playable: o,
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
