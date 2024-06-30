n.r(t), n.d(t, {
    default: function () {
        return D;
    }
}), n(47120);
var r = n(729594), i = n(873546), a = n(570140), o = n(447543), s = n(230711), l = n(581364), u = n(132871), c = n(960904), d = n(830121), _ = n(15274), E = n(924301), f = n(543842), h = n(754688), p = n(336197), m = n(540709), I = n(881706), T = n(701190), g = n(944486), S = n(914010), A = n(771845), N = n(626135), v = n(591759);
n(782568);
var O = n(981631);
async function R(e, t) {
    await a.Z.dispatch({
        type: 'INVITE_MODAL_OPEN',
        invite: e,
        code: t,
        context: O.IlC.APP
    });
}
async function C(e) {
    var t;
    let n = T.Z.getInvite(e.code);
    if (null == n) {
        let {invite: t} = await o.Z.resolveInvite(e.code, 'Markdown Link');
        n = t;
    }
    if (null == n)
        return;
    if (n.state === O.r2o.EXPIRED || n.state === O.r2o.BANNED || n.state === O.r2o.ERROR) {
        await R(n, e.code);
        return;
    }
    let r = A.ZP.getFlattenedGuildIds(), i = null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id;
    null != i && r.includes(i) ? o.Z.transitionToInviteSync(n) : await R(n, e.code);
}
let y = {
    skipExtensionCheck: void 0,
    analyticsLocations: []
};
function D(e) {
    let {
            skipExtensionCheck: t,
            analyticsLocations: a
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y, o = (0, d.zO)(e);
    if (null != o && (o.type === c.g.INVITE || o.type === c.g.EMBEDDED_ACTIVITY_INVITE))
        return e => (null == e || e.preventDefault(), C(o), !0);
    if (null != o && o.type === c.g.APP_DIRECTORY_PROFILE)
        return e => {
            var t;
            null == e || e.preventDefault();
            let {code: r} = o, a = null !== (t = S.Z.getGuildId()) && void 0 !== t ? t : void 0;
            return N.default.track(O.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                application_id: r,
                device_platform: i.tq ? 'mobile_web' : 'desktop_web',
                guild_id: a,
                channel_id: g.Z.getChannelId()
            }), Promise.resolve().then(n.bind(n, 147890)).then(e => {
                let {goToAppDirectory: t} = e, {ApplicationDirectoryViews: i} = n(132871);
                t({
                    view: i.APPLICATION,
                    applicationId: r,
                    guildId: a,
                    entrypoint: { name: u.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL }
                });
            }), !0;
        };
    if (null != o && o.type === c.g.GUILD_PRODUCT)
        return e => {
            null == e || e.preventDefault();
            let [t, r] = o.code.split('-');
            return n.e('84239').then(n.bind(n, 838433)).then(e => {
                let {openGuildProductLink: n} = e;
                n(t, r);
            }), !0;
        };
    let {
            path: T,
            hostname: A = '',
            host: R,
            query: D,
            hash: L
        } = r.parse(e), b = v.Z.isDiscordHostname(A) || v.Z.isDiscordLocalhost(R, A);
    if (b && (null == T ? void 0 : T.startsWith('/application-directory'))) {
        let e;
        let t = T.split('/'), [, , r, a] = t;
        5 === t.length && (e = t[4]);
        let o = null != r && (0, l.BH)(r) ? r : void 0;
        return t => {
            var s;
            null == t || t.preventDefault();
            let {ApplicationDirectoryProfileSections: l} = n(272242), {ApplicationDirectoryViews: c} = n(132871), d = null !== (s = S.Z.getGuildId()) && void 0 !== s ? s : void 0, _ = c.HOME;
            return 'search' === r && (_ = c.SEARCH), null != o && (_ = c.APPLICATION, N.default.track(O.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                application_id: o,
                device_platform: i.tq ? 'mobile_web' : 'desktop_web',
                guild_id: d,
                channel_id: g.Z.getChannelId()
            })), Promise.resolve().then(n.bind(n, 147890)).then(t => {
                let {goToAppDirectory: n} = t;
                n({
                    view: _,
                    applicationId: o,
                    guildId: d,
                    applicationSection: (0, f.Z)(l, a),
                    entrypoint: { name: u.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL },
                    skuId: e
                });
            }), !0;
        };
    }
    if (null != T && b && v.Z.isAppRoute(T)) {
        let e = {};
        return null != D && (e.search = D), null != L && (e.hash = L), t => (null == t || t.preventDefault(), (0, p.Z)(T, Object.keys(e).length > 0 ? e : null), !0);
    }
    if (null != T && b) {
        let {
                getOAuth2AuthorizeProps: t,
                openOAuth2ModalWithCreateGuildModal: r
            } = n(69580), i = t(e);
        if (null != i)
            return e => (null == e || e.preventDefault(), r(i), !0);
    }
    let M = (0, h.Ao)(T);
    if (null != T && b && null != M)
        return e => {
            null == e || e.preventDefault();
            let t = S.Z.getGuildId();
            null != M.guildId && '' !== M.guildId && M.guildId !== t && (0, p.Z)(O.Z5c.CHANNEL(M.guildId));
            let n = E.ZP.getGuildScheduledEvent(M.guildEventId);
            return null != n && (0, _.bO)({ eventId: n.id }), !0;
        };
    if (b && (null == T ? void 0 : T.startsWith('/settings/'))) {
        let {default: e} = n(357269), t = e(T);
        if (null != t)
            return e => (null == e || e.preventDefault(), s.Z.open(t.section, t.subsection, {
                openWithoutBackstack: !1,
                impressionSource: t.source,
                analyticsLocations: a
            }), !0);
    }
    if (!t && null != (0, I.v)(e))
        return t => (null == t || t.preventDefault(), m.Z.show(e), !0);
}
