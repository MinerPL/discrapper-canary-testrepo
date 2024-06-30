t.d(n, {
    QC: function () {
        return Z;
    },
    SO: function () {
        return R;
    }
}), t(653041);
var l = t(512722), a = t.n(l), r = t(913527), o = t.n(r), i = t(705512), u = t(812206), s = t(55000), c = t(220082), d = t(693824), E = t(690725), _ = t(706454), f = t(594174), T = t(70956), v = t(709054), m = t(561308), N = t(206295), x = t(737583), I = t(438226), g = t(169040), h = t(689938);
let M = (e, n) => ({
        AvatarImage1: e[0],
        ...null != e[1] && { AvatarImage2: e[1] },
        ...null != e[2] && { AvatarImage3: e[2] },
        ...null != n && { ApplicationImage: n }
    }), A = (e, n) => {
        let t = [{
                    iconPath: g.NM,
                    text: n
                }], l = v.default.extractTimestamp(e.extra.application_id);
        if (7 >= o()().diff(o()(l), 'days') && t.push({
                iconPath: g.As,
                text: h.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_RELEASE
            }), (0, m.Ol)(e) && t.push({
                iconPath: g.fO,
                text: h.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER
            }), (0, m.q_)(e)) {
            let n = (0, m.vU)(e);
            t.push({
                iconPath: g.t1,
                text: h.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({ days: n })
            });
        }
        (0, m.ig)(e) === i.o.GLOBAL && t.push({
            iconPath: g.Op,
            text: h.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
        });
        let a = (0, m.dw)(e);
        if (null != a && t.push({
                iconPath: g.Z,
                text: (0, m.GE)(a)
            }), (0, m.V5)(e) && t.push({
                iconPath: g.Md,
                text: (0, m.kr)(e) ? (0, m.z5)(e) : (0, m.nB)(e)
            }), (0, m.Jd)(e)) {
            let n = (0, m.yA)(e);
            if (null != n) {
                let e = h.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK.format({ hours: Math.round(n / T.Z.Seconds.HOUR) });
                return [{
                        iconPath: g.eF,
                        text: ''.concat(h.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME, ' \u2014 ').concat(e)
                    }];
            }
        }
        return t;
    }, C = (e, n) => {
        let {
                timestamp: t,
                colors: l,
                description: a,
                entry: r,
                numAvatars: o
            } = n, i = l.map((e, n) => ({
                color: e,
                stop: n
            }));
        e.setSize({
            w: g.nx,
            h: g.bg
        }, 4), e.drawRoundedGradientRect(i, {
            x: 0,
            y: g.bg
        }, {
            x: g.nx,
            y: 0
        }, {
            x: 0,
            y: 0,
            h: g.bg,
            w: g.nx
        }, 8), e.setColor('rgba(108, 111, 124, 0.24)'), e.drawRoundedRect({
            x: g.nx - g.sB - g.if,
            y: g.sB,
            w: g.if,
            h: g.wI
        }, 4, !0), e.setColor('rgba(255, 255, 255, 0.5)');
        e.setFont({
            size: 12,
            family: [
                'gg sans',
                'sans-serif'
            ],
            weight: 500,
            truncate: d.GX.None
        }), e.drawText(h.Z.Messages.BETA, {
            x: g.nx - g.sB - 29,
            y: g.sB + 12 + 2
        }, !0), e.setColor('white'), e.drawRoundedImage('ApplicationImage', {
            x: g.sB,
            y: g.sB
        }, {
            w: g.Pu,
            h: g.Pu
        }, 8) === d.vP.Failure && e.drawPath(s.Cv, {
            x: g.sB,
            y: g.sB
        }, !0, 2 + 2 / 3);
        (0, x.l)({
            canvas: e,
            avatarSrcs: [
                'AvatarImage1',
                'AvatarImage2',
                'AvatarImage3'
            ].slice(0, o),
            position: {
                x: g.Iq,
                y: g.sB
            },
            avatarImageSize: g.$S
        }), e.setColor('white'), e.setFont({
            size: 16,
            truncate: d.GX.Wrap
        }), e.drawText(a, {
            x: g.Iq,
            y: 64,
            h: 32,
            w: g.kC
        }, !0);
        let u = A(r, t);
        (0, x.J)({
            canvas: e,
            badges: u,
            startPosition: g.Iq,
            maxWidth: g.kC
        });
    }, R = async e => {
        let {
                applicationImageSrc: n,
                entry: t,
                avatarSrcs: l,
                description: a,
                timestamp: r,
                colors: o,
                channelId: i
            } = e, u = t.extra.game_name, s = M(l, n);
        return await (0, E.f)({
            assetsToLoad: s,
            drawImage: e => C(e, {
                timestamp: r,
                colors: o,
                description: a,
                entry: t,
                numAvatars: l.length
            }),
            exportConfigs: {
                format: d.kH.CloudUpload,
                quality: 1,
                fileName: 'user-reacting-to-'.concat(u, '.png').toLowerCase(),
                fileType: 'png',
                channelId: i
            }
        });
    };
async function Z(e, n, t) {
    let l = e.extra.game_name, r = u.Z.getApplication(e.extra.application_id), o = null == r ? void 0 : r.getIconURL(128), i = f.default.getUser(e.author_id);
    a()(null != i, 'Author must not be null'), await (0, c.vM)(null != o ? o : '');
    let s = [null == i ? void 0 : i.getAvatarURL(n.guild_id, 128)], T = M(s, o), v = _.default.locale, x = (0, m.yh)(e, v), {
            primaryColor: g,
            secondaryColor: h
        } = (0, N.w)(null != o ? o : ''), A = (0, I.HV)(e, n, i), R = {
            format: t,
            quality: 1,
            fileName: 'user-reacting-to-'.concat(l, '.png').toLowerCase(),
            fileType: 'png'
        };
    if (t === d.kH.CloudUpload) {
        var Z;
        R.channelId = null !== (Z = n.id) && void 0 !== Z ? Z : '';
    }
    return await (0, E.f)({
        assetsToLoad: T,
        drawImage: n => C(n, {
            timestamp: x,
            colors: [
                g,
                h
            ],
            description: A,
            entry: e,
            numAvatars: s.length
        }),
        exportConfigs: R
    });
}
