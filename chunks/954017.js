n.r(t),
    n.d(t, {
        sendReactionToActivity: function () {
            return I;
        },
        sendReplyToActivity: function () {
            return x;
        }
    });
var i = n(512722),
    s = n.n(i),
    a = n(493683),
    l = n(726542),
    r = n(122810),
    o = n(503438),
    c = n(693824),
    u = n(690725),
    d = n(90712),
    h = n(592125),
    m = n(81063),
    p = n(176354),
    _ = n(201133),
    f = n(55000),
    E = n(314091),
    g = n(981631),
    C = n(689938);
let I = async (e) => {
        let { reaction: t, altText: n, ...i } = e,
            s = await v(i);
        (0, _.a)({
            file: s,
            altText: n,
            user: i.user,
            reaction: t
        });
    },
    x = async (e) => {
        let { reply: t, altText: n, ...i } = e,
            l = await v(i),
            r = await a.Z.openPrivateChannel(i.user.id, !1, !1),
            o = h.Z.getChannel(r);
        s()(null != o, 'Channel cannot be null'),
            (0, _.B)({
                file: l,
                altText: n,
                channel: o,
                reply: t
            });
    },
    T = (e) => {
        var t;
        let { activity: i, application: s, user: a } = e,
            { theme: l } = (0, E.j3)(a, 'black'),
            r = 'dark' === l,
            o = (0, d.Z)(i),
            { assets: c, application_id: u } = i,
            h = (0, m.getAssetImage)(u, null == c ? void 0 : c.large_image, 64),
            _ = null == s ? void 0 : s.getIconURL(64),
            f = null != o ? (r ? o.icon.darkPNG : o.icon.lightPNG) : i.type === g.IIU.PLAYING ? (r ? n(414575) : n(807612)) : null,
            C =
                i.type === g.IIU.HANG_STATUS && (null === (t = i.emoji) || void 0 === t ? void 0 : t.id) != null
                    ? (0, p.qc)({
                          id: i.emoji.id,
                          name: i.emoji.name,
                          animated: !1
                      })
                    : null;
        return {
            ...(null != f && { Platform: f }),
            ...(null != h && { AssetImage: h.includes('http') ? h : n(869469)(h) }),
            ...(null != _ && { ApplicationImage: _ }),
            ...(null != C && { HangStatus: C })
        };
    },
    v = async (e) => {
        let { user: t, activity: n, application: i, stream: s } = e,
            d = await a.Z.openPrivateChannel(t.id, !1, !1),
            h = T({
                activity: n,
                application: i,
                user: t
            });
        return await (0, u.f)({
            assetsToLoad: h,
            drawImage: (e) => {
                var i;
                e.setFont({ truncate: c.GX.Truncate }),
                    null != s ? b(e, n, t) : (0, o.Z)(n) ? A(e, n, t) : (0, r.Z)(n) && n.name === l.Z.get(g.ABu.LEAGUE_OF_LEGENDS).name ? M(e, n, t) : n.type === g.IIU.HANG_STATUS ? Z(e, n, t) : N(e, n, t),
                    (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has('Platform')) &&
                        e.drawImage(
                            'Platform',
                            {
                                x: f.En - f.o3 - f.ez,
                                y: f.o3
                            },
                            {
                                w: f.ez,
                                h: f.ez
                            }
                        );
            },
            exportConfigs: {
                format: c.kH.CloudUpload,
                quality: 1,
                fileName: 'user-reacting-to-'.concat(n.name, '.png').toLowerCase(),
                fileType: 'png',
                channelId: d
            }
        });
    },
    S = (e, t) => {
        e.setColor('dark' === t ? 'white' : 'black'),
            e.drawPath(
                f.Cv,
                {
                    x: f.o3,
                    y: f.o3
                },
                !0,
                2 + 2 / 3
            );
    },
    N = (e, t, n) => {
        var i, s, a;
        e.setSize({
            w: f.En,
            h: f.dI
        });
        let { color: l, theme: r } = (0, E.j3)(n, 'black');
        e.setColor(l),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: f.dI,
                    w: f.En
                },
                8,
                !0
            ),
            e.setColor('dark' === r ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: f.dI,
                    w: f.En
                },
                8,
                !0
            ),
            (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has('AssetImage'))
                ? e.drawRoundedImage(
                      'AssetImage',
                      {
                          x: f.o3,
                          y: f.o3
                      },
                      {
                          w: f.vS,
                          h: f.vS
                      },
                      8
                  )
                : (null === (s = e.assetMap) || void 0 === s ? void 0 : s.has('ApplicationImage'))
                  ? e.drawRoundedImage(
                        'ApplicationImage',
                        {
                            x: f.o3,
                            y: f.o3
                        },
                        {
                            w: f.vS,
                            h: f.vS
                        },
                        8
                    )
                  : S(e, r);
        let o = f.vS + f.o3 + f.sB;
        e.setColor('dark' === r ? 'white' : 'rgb(6, 6, 7)'),
            e.setFont({
                size: 16,
                family: ['gg sans', 'sans-serif'],
                weight: 700
            }),
            e.drawText(
                ''.concat(t.name),
                {
                    x: o,
                    y: f.SG + 1 * f.Nv,
                    w: (null === (a = e.assetMap) || void 0 === a ? void 0 : a.has(f.W3.Platform)) ? f.ee : f.sp
                },
                !0
            ),
            null != t.timestamps &&
                (e.setFont({
                    size: 14,
                    weight: 400
                }),
                e.drawText(
                    'for '.concat((0, E.b6)(t.timestamps)),
                    {
                        x: o,
                        y: f.SG + 2 * f.Nv
                    },
                    !0
                ));
    },
    A = (e, t, n) => {
        var i, s;
        e.setSize({
            w: f.En,
            h: f.dI
        });
        let { color: a, theme: l } = (0, E.j3)(n, 'black');
        e.setColor(a),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: f.dI,
                    w: f.En
                },
                8,
                !0
            ),
            e.setColor('dark' === l ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: f.dI,
                    w: f.En
                },
                8,
                !0
            ),
            (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has('AssetImage')) &&
                e.drawRoundedImage(
                    'AssetImage',
                    {
                        x: f.o3,
                        y: f.o3
                    },
                    {
                        w: f.vS,
                        h: f.vS
                    },
                    8
                );
        let r = f.vS + f.o3 + f.sB;
        e.setColor('dark' === l ? 'white' : 'rgb(6, 6, 7)'),
            e.setFont({
                size: 14,
                family: ['gg sans', 'sans-serif'],
                weight: 700
            }),
            e.drawText(
                ''.concat(t.details),
                {
                    x: r,
                    y: f.SG + 1 * f.Nv,
                    w: (null === (s = e.assetMap) || void 0 === s ? void 0 : s.has(f.W3.Platform)) ? f.ee : f.sp
                },
                !0
            ),
            e.setFont({
                size: 14,
                weight: 400
            }),
            e.drawText(
                'by '.concat(t.state),
                {
                    x: r,
                    y: f.SG + 2 * f.Nv
                },
                !0
            );
    },
    Z = (e, t, i) => {
        var s, a;
        e.setSize({
            w: f.En,
            h: f.dI
        });
        let { color: l, theme: r } = (0, E.j3)(i, 'black');
        e.setColor(l),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: f.dI,
                    w: f.En
                },
                8,
                !0
            ),
            e.setColor('dark' === r ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: f.dI,
                    w: f.En
                },
                8,
                !0
            ),
            (null === (s = e.assetMap) || void 0 === s ? void 0 : s.has('HangStatus'))
                ? e.drawRoundedImage(
                      'HangStatus',
                      {
                          x: f.o3,
                          y: f.o3
                      },
                      {
                          w: f.vS,
                          h: f.vS
                      },
                      8
                  )
                : S(e, r);
        let o = f.vS + f.o3 + f.sB;
        e.setColor('dark' === r ? 'white' : 'rgb(6, 6, 7)'),
            e.setFont({
                size: 14,
                family: ['gg sans', 'sans-serif'],
                weight: 700
            }),
            e.drawText(
                C.Z.Messages.STATUS_LEAD_IN_JUST,
                {
                    x: o,
                    y: f.SG + 1 * f.Nv,
                    w: (null === (a = e.assetMap) || void 0 === a ? void 0 : a.has(f.W3.Platform)) ? f.ee : f.sp
                },
                !0
            ),
            e.setFont({
                size: 14,
                weight: 400
            });
        let c = '';
        (c = (0, n(833858).O8)(t)),
            e.drawText(
                c,
                {
                    x: o,
                    y: f.SG + 2 * f.Nv
                },
                !0
            );
    },
    M = (e, t, n) => {
        var i;
        e.setSize({
            w: f.En,
            h: f.dI
        });
        let { color: s, theme: a } = (0, E.j3)(n, 'black');
        e.setColor(s),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: f.dI,
                    w: f.En
                },
                8,
                !0
            ),
            e.setColor('dark' === a ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: f.dI,
                    w: f.En
                },
                8,
                !0
            ),
            e.setColor('dark' === a ? 'white' : 'black'),
            e.drawRoundedImage(
                'AssetImage',
                {
                    x: f.o3,
                    y: f.o3
                },
                {
                    w: f.vS,
                    h: f.vS
                },
                8
            ) === c.vP.Failure &&
                e.drawPath(
                    f.Cv,
                    {
                        x: f.o3,
                        y: f.o3
                    },
                    !0,
                    2 + 2 / 3
                );
        let l = f.vS + f.o3 + f.sB;
        e.setColor('dark' === a ? 'white' : 'rgb(6, 6, 7)'),
            e.setFont({
                size: 14,
                family: ['gg sans', 'sans-serif'],
                weight: 700
            }),
            e.drawText(
                ''.concat(t.details),
                {
                    x: l,
                    y: f.SG + 1 * f.Nv,
                    w: (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has('Platform')) ? f.ee : f.sp
                },
                !0
            ),
            e.setFont({
                size: 14,
                weight: 400
            }),
            e.drawText(
                ''.concat(t.state),
                {
                    x: l,
                    y: f.SG + 2 * f.Nv
                },
                !0
            );
    },
    b = (e, t, n) => {
        var i, s, a;
        e.setSize({
            w: f.En,
            h: f.dI
        });
        let { color: l, theme: r } = (0, E.j3)(n, 'black');
        e.setColor(l),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: f.dI,
                    w: f.En
                },
                8,
                !0
            ),
            e.setColor('dark' === r ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.7)'),
            e.drawRoundedRect(
                {
                    x: 0,
                    y: 0,
                    h: f.dI,
                    w: f.En
                },
                8,
                !0
            ),
            (null === (i = e.assetMap) || void 0 === i ? void 0 : i.has('AssetImage'))
                ? e.drawRoundedImage(
                      'AssetImage',
                      {
                          x: f.o3,
                          y: f.o3
                      },
                      {
                          w: f.vS,
                          h: f.vS
                      },
                      8
                  )
                : (null === (s = e.assetMap) || void 0 === s ? void 0 : s.has('ApplicationImage'))
                  ? e.drawRoundedImage(
                        'ApplicationImage',
                        {
                            x: f.o3,
                            y: f.o3
                        },
                        {
                            w: f.vS,
                            h: f.vS
                        },
                        8
                    )
                  : S(e, r);
        let o = f.vS + f.o3 + f.sB;
        e.setColor('dark' === r ? 'white' : 'rgb(6, 6, 7)'),
            e.setFont({
                size: 16,
                family: ['gg sans', 'sans-serif'],
                weight: 700
            }),
            e.drawText(
                'Streaming '.concat(t.name),
                {
                    x: o,
                    y: f.SG + f.Nv * (null != t.timestamps ? 1 : 1.5),
                    w: (null === (a = e.assetMap) || void 0 === a ? void 0 : a.has(f.W3.Platform)) ? f.ee : f.sp
                },
                !0
            ),
            null != t.timestamps &&
                (e.setFont({
                    size: 14,
                    weight: 500
                }),
                e.drawText(
                    'for '.concat((0, E.b6)(t.timestamps)),
                    {
                        x: o,
                        y: f.SG + 2 * f.Nv
                    },
                    !0
                ));
    };
