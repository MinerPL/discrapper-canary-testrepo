n.r(t),
    n.d(t, {
        default: function () {
            return M;
        }
    }),
    n(47120);
var r = n(729594),
    i = n(873546),
    a = n(636977),
    s = n(570140),
    o = n(447543),
    l = n(230711),
    u = n(581364),
    c = n(132871),
    d = n(960904),
    _ = n(830121),
    E = n(15274),
    f = n(924301),
    h = n(543842),
    p = n(754688),
    I = n(336197),
    m = n(977156),
    T = n(540709),
    S = n(881706),
    g = n(701190),
    A = n(944486),
    N = n(914010),
    O = n(771845),
    R = n(626135),
    v = n(591759);
n(782568);
var C = n(981631),
    y = n(46140);
async function L(e, t) {
    await s.Z.dispatch({
        type: 'INVITE_MODAL_OPEN',
        invite: e,
        code: t,
        context: C.IlC.APP
    });
}
async function D(e) {
    var t;
    let n = g.Z.getInvite(e.code);
    if (null == n) {
        let { invite: t } = await o.Z.resolveInvite(e.code, 'Markdown Link');
        n = t;
    }
    if (null == n) return;
    if (n.state === C.r2o.EXPIRED || n.state === C.r2o.BANNED || n.state === C.r2o.ERROR) {
        await L(n, e.code);
        return;
    }
    let r = O.ZP.getFlattenedGuildIds(),
        i = null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id;
    null != i && r.includes(i) ? o.Z.transitionToInviteSync(n) : await L(n, e.code);
}
let b = {
    skipExtensionCheck: void 0,
    analyticsLocations: []
};
function M(e) {
    let { skipExtensionCheck: t, analyticsLocations: s } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b,
        o = (0, _.zO)(e);
    if (null != o && (o.type === d.g.INVITE || o.type === d.g.EMBEDDED_ACTIVITY_INVITE)) return (e) => (null == e || e.preventDefault(), D(o), !0);
    if (null != o && o.type === d.g.APP_DIRECTORY_PROFILE)
        return (e) => {
            var t;
            null == e || e.preventDefault();
            let { code: r } = o,
                a = null !== (t = N.Z.getGuildId()) && void 0 !== t ? t : void 0;
            return (
                R.default.track(C.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
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
                            entrypoint: { name: c.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL }
                        });
                    }),
                !0
            );
        };
    if (null != o && o.type === d.g.GUILD_PRODUCT)
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
    if (null != o && o.type === d.g.QUESTS_EMBED && (0, m.cB)({ location: y.dr.EMBED_MOBILE }))
        return (e) => (
            null == e || e.preventDefault(),
            Promise.resolve()
                .then(n.bind(n, 341907))
                .then((e) => {
                    let { navigateToQuestHome: t } = e;
                    t(y.dr.CODED_LINK, a.j.QUEST_SHARE_LINK, o.code);
                }),
            !0
        );
    let { path: g, hostname: O = '', host: L, query: M, hash: P } = r.parse(e),
        U = v.Z.isDiscordHostname(O) || v.Z.isDiscordLocalhost(L, O);
    if (U && (null == g ? void 0 : g.startsWith('/application-directory'))) {
        let e;
        let t = g.split('/'),
            [, , r, a] = t;
        5 === t.length && (e = t[4]);
        let s = null != r && (0, u.BH)(r) ? r : void 0;
        return (t) => {
            var o;
            null == t || t.preventDefault();
            let { ApplicationDirectoryProfileSections: l } = n(272242),
                { ApplicationDirectoryViews: u } = n(132871),
                d = null !== (o = N.Z.getGuildId()) && void 0 !== o ? o : void 0,
                _ = u.HOME;
            return (
                'search' === r && (_ = u.SEARCH),
                null != s &&
                    ((_ = u.APPLICATION),
                    R.default.track(C.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                        application_id: s,
                        device_platform: i.tq ? 'mobile_web' : 'desktop_web',
                        guild_id: d,
                        channel_id: A.Z.getChannelId()
                    })),
                n
                    .e('56630')
                    .then(n.bind(n, 147890))
                    .then((t) => {
                        let { goToAppDirectory: n } = t;
                        n({
                            view: _,
                            applicationId: s,
                            guildId: d,
                            applicationSection: (0, h.Z)(l, a),
                            entrypoint: { name: c.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL },
                            skuId: e
                        });
                    }),
                !0
            );
        };
    }
    if (null != g && U && v.Z.isAppRoute(g)) {
        let e = {};
        return null != M && (e.search = M), null != P && (e.hash = P), (t) => (null == t || t.preventDefault(), (0, I.Z)(g, Object.keys(e).length > 0 ? e : null), !0);
    }
    if (null != g && U) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: r } = n(69580),
            i = t(e);
        if (null != i) return (e) => (null == e || e.preventDefault(), r(i), !0);
    }
    let w = (0, p.Ao)(g);
    if (null != g && U && null != w)
        return (e) => {
            null == e || e.preventDefault();
            let t = N.Z.getGuildId();
            null != w.guildId && '' !== w.guildId && w.guildId !== t && (0, I.Z)(C.Z5c.CHANNEL(w.guildId));
            let n = f.ZP.getGuildScheduledEvent(w.guildEventId);
            return null != n && (0, E.bO)({ eventId: n.id }), !0;
        };
    if (U && (null == g ? void 0 : g.startsWith('/settings/'))) {
        let { default: e } = n(357269),
            t = e(g);
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
    if (!t && null != (0, S.v)(e)) return (t) => (null == t || t.preventDefault(), T.Z.show(e), !0);
}
