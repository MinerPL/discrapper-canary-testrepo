n(411104);
var r = n(141795),
	i = n(476326),
	a = n(956664),
	s = n(693824);
t.Z = class e {
	toDataUrl(e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'png',
			n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
		return e.toDataURL(t, n);
	}
	async exportCanvas(e, t) {
		let { format: n, fileType: o = 'png', quality: l = 1, fileName: u } = t;
		if (n === s.kH.Base64) return this.toDataUrl(e, o, l);
		if (n === s.kH.Blob) {
			let t = this.toDataUrl(e, o, l);
			return (0, a.kD)(t);
		}
		if (n === s.kH.File) {
			let t = this.toDataUrl(e, o, l);
			return await (0, a.Bo)(t, u, 'image/png');
		}
		if (n === s.kH.CloudUpload) {
			let { channelId: n } = t,
				s = this.toDataUrl(e, o, l),
				c = await (0, a.Bo)(s, u, 'image/png');
			return new r.n(
				{
					file: c,
					platform: i.ow.WEB,
					isThumbnail: !1
				},
				n
			);
		}
		throw Error('DiscordCanvas: '.concat(n, ' is not a valid export format.'));
	}
};
