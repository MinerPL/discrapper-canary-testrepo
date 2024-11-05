n.r(t),
    n.d(t, {
        default: function () {
            return U;
        }
    }),
    n(47120);
var r = n(729594),
    i = n(873546),
    a = n(636977),
    s = n(570140),
    o = n(447543),
    l = n(230711),
    u = n(367907),
    c = n(581364),
    d = n(132871),
    f = n(963202),
    _ = n(960904),
    h = n(830121),
    p = n(15274),
    m = n(924301),
    g = n(543842),
    E = n(754688),
    v = n(336197),
    I = n(977156),
    S = n(341907),
    T = n(540709),
    b = n(881706),
    y = n(701190),
    A = n(944486),
    N = n(914010),
    C = n(771845),
    R = n(626135),
    O = n(591759);
n(782568);
var D = n(981631),
    L = n(49898),
    x = n(128449),
    w = n(46140);
async function M(e, t) {
    await s.Z.dispatch({
        type: 'INVITE_MODAL_OPEN',
        invite: e,
        code: t,
        context: D.IlC.APP
    });
}
async function P(e) {
    var t;
    let n = y.Z.getInvite(e.code);
    if (null == n) {
        let { invite: t } = await o.Z.resolveInvite(e.code, 'Markdown Link');
        n = t;
    }
    if (null == n) return;
    if (n.state === D.r2o.EXPIRED || n.state === D.r2o.BANNED || n.state === D.r2o.ERROR) {
        await M(n, e.code);
        return;
    }
    let r = C.ZP.getFlattenedGuildIds(),
        i = null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id;
    null != i && r.includes(i) ? o.Z.transitionToInviteSync(n) : await M(n, e.code);
}
let k = {
    skipExtensionCheck: void 0,
    analyticsLocations: []
};
function U(e) {
    let { skipExtensionCheck: t, analyticsLocations: s } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : k,
        o = (0, h.zO)(e);
    if (null != o && (o.type === _.g.INVITE || o.type === _.g.EMBEDDED_ACTIVITY_INVITE)) return (e) => (null == e || e.preventDefault(), P(o), !0);
    if (null != o && o.type === _.g.APP_DIRECTORY_PROFILE)
        return (e) => {
            var t;
            null == e || e.preventDefault();
            let { code: r } = o,
                a = null !== (t = N.Z.getGuildId()) && void 0 !== t ? t : void 0;
            return (
                R.default.track(D.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                    application_id: r,
                    device_platform: i.tq ? 'mobile_web' : 'desktop_web',
                    guild_id: a,
                    channel_id: A.Z.getChannelId()
                }),
                n
                    .e('56630')
                    .then(n.bind(n, 147890))
                    .then((e) => {
                        let { goToAppDirectory: t } = e,
                            { ApplicationDirectoryViews: i } = n(132871);
                        t({
                            view: i.APPLICATION,
                            applicationId: r,
                            guildId: a,
                            entrypoint: { name: d.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL }
                        });
                    }),
                !0
            );
        };
    if (null != o && o.type === _.g.GUILD_PRODUCT)
        return (e) => {
            null == e || e.preventDefault();
            let [t, r] = o.code.split('-');
            return (
                n
                    .e('84239')
                    .then(n.bind(n, 838433))
                    .then((e) => {
                        let { openGuildProductLink: n } = e;
                        n(t, r);
                    }),
                !0
            );
        };
    if (null != o && o.type === _.g.QUESTS_EMBED && (0, I.cB)({ location: w.dr.EMBED_MOBILE }))
        return (e) => (
            null == e || e.preventDefault(),
            Promise.resolve()
                .then(n.bind(n, 341907))
                .then((e) => {
                    let { navigateToQuestHome: t } = e;
                    t(w.dr.CODED_LINK, a.j.QUEST_SHARE_LINK, o.code);
                }),
            !0
        );
    if (null != o && o.type === _.g.DISCOVERY_GAME && (0, f.rx)('discovery_coded_link'))
        return (e) => (
            null == e || e.preventDefault(),
            Promise.resolve()
                .then(n.bind(n, 749681))
                .then((e) => {
                    let { transitionToGlobalDiscovery: t } = e;
                    t({
                        tab: L.F$.SERVERS,
                        selectedServersTab: x.vf.GUILDS,
                        entrypoint: x.Qq.GAME_LINK,
                        extra: { search: '?game='.concat(o.code) }
                    });
                }),
            !0
        );
    let { path: y, hostname: C = '', host: M, query: U, hash: G } = r.parse(e),
        B = O.Z.isDiscordHostname(C) || O.Z.isDiscordLocalhost(M, C);
    if (B && (null == y ? void 0 : y.startsWith('/application-directory'))) {
        let e;
        let t = y.split('/'),
            [, , r, a] = t;
        5 === t.length && (e = t[4]);
        let s = null != r && (0, c.BH)(r) ? r : void 0;
        return (t) => {
            var o;
            null == t || t.preventDefault();
            let { ApplicationDirectoryProfileSections: l } = n(272242),
                { ApplicationDirectoryViews: u } = n(132871),
                c = null !== (o = N.Z.getGuildId()) && void 0 !== o ? o : void 0,
                f = u.HOME;
            return (
                'search' === r && (f = u.SEARCH),
                null != s &&
                    ((f = u.APPLICATION),
                    R.default.track(D.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                        application_id: s,
                        device_platform: i.tq ? 'mobile_web' : 'desktop_web',
                        guild_id: c,
                        channel_id: A.Z.getChannelId()
                    })),
                n
                    .e('56630')
                    .then(n.bind(n, 147890))
                    .then((t) => {
                        let { goToAppDirectory: n } = t;
                        n({
                            view: f,
                            applicationId: s,
                            guildId: c,
                            applicationSection: (0, g.Z)(l, a),
                            entrypoint: { name: d.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL },
                            skuId: e
                        });
                    }),
                !0
            );
        };
    }
    if (null != y && B && O.Z.isAppRoute(y)) {
        let e = {
            navigationReplace: !1,
            openChannel: !0
        };
        return null != U && (e.search = U), null != G && (e.hash = G), (t) => (null == t || t.preventDefault(), (0, v.Z)(y, e), !0);
    }
    if (null != y && B) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: r } = n(69580),
            i = t(e);
        if (null != i) return (e) => (null == e || e.preventDefault(), null != o && o.type === _.g.APP_OAUTH2_LINK && u.ZP.trackWithMetadata(D.rMx.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: i.clientId }), r(i), !0);
    }
    let Z = (0, E.Ao)(y);
    if (null != y && B && null != Z)
        return (e) => {
            null == e || e.preventDefault();
            let t = N.Z.getGuildId();
            null != Z.guildId && '' !== Z.guildId && Z.guildId !== t && (0, v.Z)(D.Z5c.CHANNEL(Z.guildId));
            let n = m.ZP.getGuildScheduledEvent(Z.guildEventId);
            return null != n && (0, p.bO)({ eventId: n.id }), !0;
        };
    if (B && (null == y ? void 0 : y.startsWith('/settings/'))) {
        let { default: e } = n(357269),
            t = e(y);
        if (null != t)
            return (e) => (
                null == e || e.preventDefault(),
                l.Z.open(t.section, t.subsection, {
                    openWithoutBackstack: !1,
                    impressionSource: t.source,
                    analyticsLocations: s
                }),
                !0
            );
    }
    return B && (null == y ? void 0 : y.startsWith('/discovery/quests')) ? (e) => (null == e || e.preventDefault(), (0, S.navigateToQuestHome)(w.dr.BADGE, a.j.QUEST_BADGE), !0) : t || null == (0, b.v)(e) ? void 0 : (t) => (null == t || t.preventDefault(), T.Z.show(e), !0);
}
