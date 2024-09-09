n.d(t, {
    SO: function () {
        return v;
    }
}),
    n(653041),
    n(512722);
var l = n(913527),
    a = n.n(l),
    i = n(705512);
n(812206);
var r = n(55000);
n(220082);
var s = n(693824),
    o = n(690725);
n(706454), n(594174);
var u = n(70956),
    c = n(709054),
    d = n(561308);
n(206295);
var h = n(737583);
n(438226);
var m = n(169040),
    x = n(689938);
let E = (e, t) => ({
        AvatarImage1: e[0],
        ...(null != e[1] && { AvatarImage2: e[1] }),
        ...(null != e[2] && { AvatarImage3: e[2] }),
        ...(null != t && { ApplicationImage: t })
    }),
    _ = (e, t) => {
        let n = [
                {
                    iconPath: m.NM,
                    text: t
                }
            ],
            l = c.default.extractTimestamp(e.extra.application_id);
        if (
            (7 >= a()().diff(a()(l), 'days') &&
                n.push({
                    iconPath: m.As,
                    text: x.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_RELEASE
                }),
            (0, d.Ol)(e) &&
                n.push({
                    iconPath: m.fO,
                    text: x.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER
                }),
            (0, d.q_)(e))
        ) {
            let t = (0, d.vU)(e);
            n.push({
                iconPath: m.t1,
                text: x.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({ days: t })
            });
        }
        (0, d.ig)(e) === i.o.GLOBAL &&
            n.push({
                iconPath: m.Op,
                text: x.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
            });
        let r = (0, d.dw)(e);
        if (
            (null != r &&
                n.push({
                    iconPath: m.Z,
                    text: (0, d.GE)(r)
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
                let e = x.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK.format({ hours: Math.round(t / u.Z.Seconds.HOUR) });
                return [
                    {
                        iconPath: m.eF,
                        text: ''.concat(x.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME, ' \u2014 ').concat(e)
                    }
                ];
            }
        }
        return n;
    },
    p = (e, t) => {
        let { timestamp: n, colors: l, description: a, entry: i, numAvatars: o } = t,
            u = l.map((e, t) => ({
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
                u,
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
            ) === s.vP.Failure &&
                e.drawPath(
                    r.Cv,
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
                truncate: s.GX.Wrap
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
        let c = _(i, n);
        (0, h.J)({
            canvas: e,
            badges: c,
            startPosition: m.Iq,
            maxWidth: m.kC
        });
    },
    v = async (e) => {
        let { applicationImageSrc: t, entry: n, avatarSrcs: l, description: a, timestamp: i, colors: r, channelId: u } = e,
            c = n.extra.game_name,
            d = E(l, t);
        return await (0, o.f)({
            assetsToLoad: d,
            drawImage: (e) =>
                p(e, {
                    timestamp: i,
                    colors: r,
                    description: a,
                    entry: n,
                    numAvatars: l.length
                }),
            exportConfigs: {
                format: s.kH.CloudUpload,
                quality: 1,
                fileName: 'user-reacting-to-'.concat(c, '.png').toLowerCase(),
                fileType: 'png',
                channelId: u
            }
        });
    };
