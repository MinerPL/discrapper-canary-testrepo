n.d(t, {
	B: function () {
		return u;
	}
}),
	n(653041);
var i = n(55000),
	a = n(693824),
	s = n(690725),
	l = n(737583),
	r = n(169040);
let o = (e, t, n) => ({
		AvatarImage: e,
		...(null != t && { MediaImage: t }),
		...(null != n && { ApplicationImage: n })
	}),
	c = (e, t) => {
		let n = [
			{
				iconPath: r.i6,
				text: e
			}
		];
		return (
			null != t &&
				n.push({
					iconPath: r.fj,
					text: t
				}),
			n
		);
	},
	u = async (e) => {
		let {
				mediaImageSrc: t,
				entry: n,
				avatarSrc: u,
				description: d,
				timestamp: h,
				episodeDescription: m,
				colors: p,
				channelId: _
			} = e,
			f = n.extra.media_title,
			E = o(u, t);
		return await (0, s.f)({
			assetsToLoad: E,
			drawImage: (e) => {
				let t = p.map((e, t) => ({
					color: e,
					stop: t
				}));
				e.setSize(
					{
						w: r.nx,
						h: r.bg
					},
					4
				),
					e.drawRoundedGradientRect(
						t,
						{
							x: 0,
							y: r.bg
						},
						{
							x: r.nx,
							y: 0
						},
						{
							x: 0,
							y: 0,
							h: r.bg,
							w: r.nx
						},
						8
					),
					e.setColor('white');
				let n = e.drawRoundedImage(
					'MediaImage',
					{
						x: r.sB,
						y: r.sB
					},
					{
						w: r.Pu,
						h: r.Pu
					},
					8,
					{ fillMode: a.JU.Contain }
				);
				n === a.vP.Failure &&
					(n = e.drawRoundedImage(
						'ApplicationImage',
						{
							x: r.sB,
							y: r.sB
						},
						{
							w: r.Pu,
							h: r.Pu
						},
						8
					)),
					n === a.vP.Failure &&
						e.drawPath(
							i.Cv,
							{
								x: r.sB,
								y: r.sB
							},
							!0,
							2 + 2 / 3
						),
					e.drawRoundedImage(
						'AvatarImage',
						{
							x: r.Iq,
							y: r.sB
						},
						{
							w: r.$S,
							h: r.$S
						},
						50
					),
					e.setFont({
						size: 16,
						family: r.I8,
						weight: r.Ue,
						truncate: a.GX.Wrap
					}),
					e.drawText(
						d,
						{
							x: r.Iq,
							y: 64,
							h: 32,
							w: r.kC
						},
						!0
					);
				let s = c(h, m);
				(0, l.J)({
					canvas: e,
					badges: s,
					startPosition: r.Iq,
					maxWidth: r.kC
				});
			},
			exportConfigs: {
				format: a.kH.CloudUpload,
				quality: 1,
				fileName: 'user-reacting-to-'.concat(f, '.png').toLowerCase(),
				fileType: 'png',
				channelId: _
			}
		});
	};
