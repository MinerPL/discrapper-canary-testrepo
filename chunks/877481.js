n(411104), n(47120);
var r = n(274616), i = n(710845), a = n(893988), o = n(812967), s = n(314897), l = n(757266), u = n(906467), c = n(6132), d = n(830168), _ = n(358085), E = n(591759), f = n(998502), h = n(981631);
let p = new i.Z('Games'), m = {}, I = 0, T = null;
function g() {
    return null != T ? Promise.resolve(T) : (0, _.isDesktop)() ? f.ZP.ensureModule('discord_game_utils').then(() => {
        let e = f.ZP.getGameUtils();
        return null != e && null != e.findLaunchable ? (T = e, e) : Promise.reject(Error('game utils not found'));
    }) : Promise.reject(Error('not desktop client'));
}
function S(e) {
    let t = {
            id: e.id,
            name: e.name,
            thirdPartySkus: e.thirdPartySkus,
            executables: e.executables.filter(e => e.os === (0, _.getPlatformName)()).map(e => e.name)
        }, n = e.aliases.map(e => ({
            ...t,
            name: e
        }));
    return [
        t,
        ...n
    ];
}
function A(e) {
    return { id: e };
}
async function N(e) {
    if (!Array.isArray(e) && (e = [e]), !u.Z.isDeveloper && (e = e.filter(e => null == e.thirdPartySkus || -1 === e.thirdPartySkus.findIndex(e => {
            let {distributor: t} = e;
            return t === h.GQo.BATTLENET;
        }))), 0 === e.length)
        throw Error('No remaining launchable queries');
    let t = Date.now();
    t > I && (I = t + 3600000, m = {});
    let n = await g();
    for (let t of e) {
        let e = m[t.id];
        if (null != e)
            return e;
        let r = await new Promise(e => n.findLaunchable(t, e));
        if (null != r)
            return m[t.id] = r, r;
    }
    throw Error('could not find launchable');
}
function v(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    if (e()) {
        t();
        return;
    }
    setTimeout(() => {
        250 * r <= 120000 ? v(e, t, n, r + 1) : n();
    }, 250);
}
function O(e) {
    return p.info('launch', e), new Promise((t, n) => {
        null == E.Z.safeParseWithQuery(e.launchTarget) ? n(Error('Failed to parse launch target. '.concat(e.launchTarget))) : (window.open(e.launchTarget), t([]));
    });
}
t.Z = {
    waitSubscribed: (e, t) => new Promise((n, r) => v(() => o.Z.isSubscribed(e, t), n, r)),
    waitConnected(e) {
        return new Promise(v.bind(this, () => l.Z.isConnected(e)));
    },
    isLaunchable: e => N(S(e)).then(e => null != e).catch(() => !1),
    launch: e => N(S(e)).then(O),
    launchDispatchApplication(e, t, n, i, o) {
        let {
            launchOptions: l,
            defaultLaunchOptionId: u,
            installPath: _,
            applicationId: E,
            branchId: f,
            buildId: p,
            shouldPatch: m
        } = e;
        if (null == l || null == u || null == _)
            throw Error('Couldn\'t construct launchable for '.concat(e.applicationId));
        null == o && (o = u);
        let I = l[o];
        if (null == I)
            throw Error('Couldn\'t construct launchable for '.concat(e.applicationId, '. No launch option.'));
        return (0, r.o)([f]).then(e => {
            let t = e[0];
            if (null == t)
                return Promise.reject(Error('branch is null'));
            let {liveBuildId: n} = t;
            if (m && n !== p)
                return Promise.reject(Error('live build id changed'));
        }).then(() => d.Z.runLaunchSetup(E, f)).then(() => {
            let e = (0, a.Z)(_), r = {
                    DISCORD_INSTANCE_ID: c.Z.getId().toString(),
                    DISCORD_ACCESS_TOKEN: null != t ? t : '',
                    DISCORD_CURRENT_LOCALE: n,
                    DISCORD_CURRENT_BRANCH: i,
                    DISCORD_STORAGE_PATH: h.SRg.ROOT_STORAGE_PATH(e, s.default.getId())
                };
            return d.Z.launch(E, f, I.name, r);
        });
    },
    removeShortcuts: e => (0, _.isWindows)() ? g().then(t => {
        var n, r;
        return null !== (r = null === (n = t.removeShortcuts) || void 0 === n ? void 0 : n.call(t, e)) && void 0 !== r && r;
    }) : Promise.resolve(!1),
    createShortcuts(e, t, n, r, i) {
        if (null == i || !(0, _.isWindows)())
            return Promise.resolve(!1);
        let a = 'discord:///library/'.concat(r, '/launch'), o = ''.concat(i, '\\icon.ico');
        return g().then(r => {
            var i, s;
            return null !== (s = null === (i = r.createShortcuts) || void 0 === i ? void 0 : i.call(r, e, t, n, a, o)) && void 0 !== s && s;
        });
    },
    isGameLaunchable: e => N({ id: e }).then(e => null != e).catch(() => !1),
    launchGame(e) {
        if (l.Z.isConnected(e))
            return Promise.resolve();
        return N({ id: e }).then(O);
    },
    isProtocolRegistered: e => g().then(t => {
        var n, r;
        return null !== (r = null === (n = t.isProtocolSchemeRegistered) || void 0 === n ? void 0 : n.call(t, e)) && void 0 !== r && r;
    }),
    setRecentGames(e) {
        g().then(t => {
            var n;
            return null === (n = t.setRecentGames) || void 0 === n ? void 0 : n.call(t, e);
        }).catch(() => {
        });
    }
};
