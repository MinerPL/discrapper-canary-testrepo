n.d(t, {
	C4: function () {
		return g;
	}
}),
	n(653041),
	n(627494),
	n(757143),
	n(512722);
var i = n(913527),
	a = n.n(i),
	s = n(705512);
n(812206);
var l = n(55000);
n(220082);
var r = n(693824),
	o = n(690725);
n(706454), n(594174);
var c = n(70956);
n(5192);
var u = n(709054),
	d = n(561308);
n(206295);
var h = n(737583),
	m = n(169040),
	p = n(689938);
let _ = (e, t) => ({
		AvatarImage1: e[0],
		...(null != e[1] && { AvatarImage2: e[1] }),
		...(null != e[2] && { AvatarImage3: e[2] }),
		...(null != t && { ApplicationImage: t })
	}),
	f = (e, t) => {
		let n = [
				{
					iconPath: m.NM,
					text: t
				}
			],
			i = u.default.extractTimestamp(e.extra.application_id);
		if (
			(7 >= a()().diff(a()(i), 'days') &&
				n.push({
					iconPath: m.As,
					text: p.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_RELEASE
				}),
			(0, d.Ol)(e) &&
				n.push({
					iconPath: m.fO,
					text: p.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER
				}),
			(0, d.q_)(e))
		) {
			let t = (0, d.vU)(e);
			n.push({
				iconPath: m.t1,
				text: p.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({ days: t })
			});
		}
		(0, d.ig)(e) === s.o.GLOBAL &&
			n.push({
				iconPath: m.Op,
				text: p.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
			});
		let l = (0, d.dw)(e);
		if (
			(null != l &&
				n.push({
					iconPath: m.Z,
					text: (0, d.GE)(l)
				}),
			(0, d.V5)(e))
		) {
			let { text: t } = (0, d.zo)(e);
			null != t &&
				n.push({
					iconPath: m.Md,
					text: t
				});
		}
		if ((0, d.Jd)(e)) {
			let t = (0, d.yA)(e);
			if (null != t) {
				let e = p.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK.format({
					hours: Math.round(t / c.Z.Seconds.HOUR)
				});
				return [
					{
						iconPath: m.eF,
						text: ''.concat(p.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME, ' \u2014 ').concat(e)
					}
				];
			}
		}
		return n;
	},
	E = (e, t) => {
		let { timestamp: n, colors: i, description: a, entry: s, numAvatars: o } = t,
			c = i.map((e, t) => ({
				color: e,
				stop: t
			}));
		e.setSize(
			{
				w: m.nx,
				h: m.bg
			},
			4
		),
			e.drawRoundedGradientRect(
				c,
				{
					x: 0,
					y: m.bg
				},
				{
					x: m.nx,
					y: 0
				},
				{
					x: 0,
					y: 0,
					h: m.bg,
					w: m.nx
				},
				8
			),
			e.setColor('white'),
			e.drawRoundedImage(
				'ApplicationImage',
				{
					x: m.sB,
					y: m.sB
				},
				{
					w: m.Pu,
					h: m.Pu
				},
				8
			) === r.vP.Failure &&
				e.drawPath(
					l.Cv,
					{
						x: m.sB,
						y: m.sB
					},
					!0,
					2 + 2 / 3
				);
		(0, h.l)({
			canvas: e,
			avatarSrcs: ['AvatarImage1', 'AvatarImage2', 'AvatarImage3'].slice(0, o),
			position: {
				x: m.Iq,
				y: m.sB
			},
			avatarImageSize: m.$S
		}),
			e.setColor('white'),
			e.setFont({
				size: 16,
				family: m.I8,
				weight: m.Ue,
				truncate: r.GX.Wrap
			}),
			e.drawText(
				a,
				{
					x: m.Iq,
					y: 64,
					h: 32,
					w: m.kC
				},
				!0
			);
		let u = f(s, n);
		(0, h.J)({
			canvas: e,
			badges: u,
			startPosition: m.Iq,
			maxWidth: m.kC
		});
	},
	g = async (e) => {
		let { applicationImageSrc: t, entry: n, avatarSrcs: i, description: a, timestamp: s, colors: l, channelId: c } = e,
			u = n.extra.activity_name,
			d = _(i, t);
		return await (0, o.f)({
			assetsToLoad: d,
			drawImage: (e) =>
				E(e, {
					timestamp: s,
					colors: l,
					description: a,
					entry: n,
					numAvatars: i.length
				}),
			exportConfigs: {
				format: r.kH.CloudUpload,
				quality: 1,
				fileName: 'user-reacting-to-'.concat(u, '.png').toLowerCase(),
				fileType: 'png',
				channelId: c
			}
		});
	};
