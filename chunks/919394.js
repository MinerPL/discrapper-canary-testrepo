n.d(e, {
    QC: function () {
        return R;
    },
    SO: function () {
        return C;
    }
}),
    n(653041);
var a = n(512722),
    r = n.n(a),
    l = n(913527),
    u = n.n(l),
    i = n(705512),
    o = n(812206),
    c = n(55000),
    s = n(220082),
    E = n(693824),
    _ = n(690725),
    f = n(706454),
    d = n(594174),
    M = n(70956),
    h = n(709054),
    g = n(561308),
    Z = n(206295),
    T = n(737583),
    N = n(438226),
    m = n(169040),
    I = n(689938);
let A = (t, e) => ({
        AvatarImage1: t[0],
        ...(null != t[1] && { AvatarImage2: t[1] }),
        ...(null != t[2] && { AvatarImage3: t[2] }),
        ...(null != e && { ApplicationImage: e })
    }),
    p = (t, e) => {
        let n = [
                {
                    iconPath: m.NM,
                    text: e
                }
            ],
            a = h.default.extractTimestamp(t.extra.application_id);
        if (
            (7 >= u()().diff(u()(a), 'days') &&
                n.push({
                    iconPath: m.As,
                    text: I.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_RELEASE
                }),
            (0, g.Ol)(t) &&
                n.push({
                    iconPath: m.fO,
                    text: I.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER
                }),
            (0, g.q_)(t))
        ) {
            let e = (0, g.vU)(t);
            n.push({
                iconPath: m.t1,
                text: I.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({ days: e })
            });
        }
        (0, g.ig)(t) === i.o.GLOBAL &&
            n.push({
                iconPath: m.Op,
                text: I.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
            });
        let r = (0, g.dw)(t);
        if (
            (null != r &&
                n.push({
                    iconPath: m.Z,
                    text: (0, g.GE)(r)
                }),
            (0, g.V5)(t))
        ) {
            let { text: e } = (0, g.zo)(t);
            null != e &&
                n.push({
                    iconPath: m.Md,
                    text: e
                });
        }
        if ((0, g.Jd)(t)) {
            let e = (0, g.yA)(t);
            if (null != e) {
                let t = I.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK.format({ hours: Math.round(e / M.Z.Seconds.HOUR) });
                return [
                    {
                        iconPath: m.eF,
                        text: ''.concat(I.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME, ' \u2014 ').concat(t)
                    }
                ];
            }
        }
        return n;
    },
    v = (t, e) => {
        let { timestamp: n, colors: a, description: r, entry: l, numAvatars: u } = e,
            i = a.map((t, e) => ({
                color: t,
                stop: e
            }));
        t.setSize(
            {
                w: m.nx,
                h: m.bg
            },
            4
        ),
            t.drawRoundedGradientRect(
                i,
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
            t.setColor('white'),
            t.drawRoundedImage(
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
            ) === E.vP.Failure &&
                t.drawPath(
                    c.Cv,
                    {
                        x: m.sB,
                        y: m.sB
                    },
                    !0,
                    2 + 2 / 3
                );
        (0, T.l)({
            canvas: t,
            avatarSrcs: ['AvatarImage1', 'AvatarImage2', 'AvatarImage3'].slice(0, u),
            position: {
                x: m.Iq,
                y: m.sB
            },
            avatarImageSize: m.$S
        }),
            t.setColor('white'),
            t.setFont({
                size: 16,
                family: m.I8,
                weight: m.Ue,
                truncate: E.GX.Wrap
            }),
            t.drawText(
                r,
                {
                    x: m.Iq,
                    y: 64,
                    h: 32,
                    w: m.kC
                },
                !0
            );
        let o = p(l, n);
        (0, T.J)({
            canvas: t,
            badges: o,
            startPosition: m.Iq,
            maxWidth: m.kC
        });
    },
    C = async (t) => {
        let { applicationImageSrc: e, entry: n, avatarSrcs: a, description: r, timestamp: l, colors: u, channelId: i } = t,
            o = n.extra.game_name,
            c = A(a, e);
        return await (0, _.f)({
            assetsToLoad: c,
            drawImage: (t) =>
                v(t, {
                    timestamp: l,
                    colors: u,
                    description: r,
                    entry: n,
                    numAvatars: a.length
                }),
            exportConfigs: {
                format: E.kH.CloudUpload,
                quality: 1,
                fileName: 'user-reacting-to-'.concat(o, '.png').toLowerCase(),
                fileType: 'png',
                channelId: i
            }
        });
    };
async function R(t, e, n) {
    let a = t.extra.game_name,
        l = o.Z.getApplication(t.extra.application_id),
        u = null == l ? void 0 : l.getIconURL(128),
        i = d.default.getUser(t.author_id);
    r()(null != i, 'Author must not be null'), await (0, s.vM)(null != u ? u : '');
    let c = [null == i ? void 0 : i.getAvatarURL(e.guild_id, 128)],
        M = A(c, u),
        h = f.default.locale,
        T = (0, g.yh)(t, h),
        { primaryColor: m, secondaryColor: I } = (0, Z.w)(null != u ? u : ''),
        p = (0, N.HV)(t, e, i),
        C = {
            format: n,
            quality: 1,
            fileName: 'user-reacting-to-'.concat(a, '.png').toLowerCase(),
            fileType: 'png'
        };
    if (n === E.kH.CloudUpload) {
        var R;
        C.channelId = null !== (R = e.id) && void 0 !== R ? R : '';
    }
    return await (0, _.f)({
        assetsToLoad: M,
        drawImage: (e) =>
            v(e, {
                timestamp: T,
                colors: [m, I],
                description: p,
                entry: t,
                numAvatars: c.length
            }),
        exportConfigs: C
    });
}
