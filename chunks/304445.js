r(47120), r(411104);
var a = r(934951), n = r(266067), i = r(38618), o = r(57132), l = r(215355), c = r(777639), s = r(311163), d = r(272423), u = r(781157), h = r(700615), m = r(905423), g = r(703656), p = r(981631);
function b(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}
t.Z = new class e {
    initialize() {
        this.cleanup(), this.unlistenHistory = (0, g.s1)().listen(this.handleRouteChange);
        let {pathname: e} = (0, g.s1)().location;
        m.Z.getState().resetPath(e), this.unlistenKeyboardChange = m.Z.subscribe(this.handleKeybindRouteChange), i.Z.addChangeListener(this.handleConnectionChange);
    }
    convertRouteToNavigation(e, t) {
        var r, a, i;
        let {pathname: m} = e, g = (0, c.D)(), b = (0, o.cn)(), {mergeTabs: f} = (0, l.LI)({ location: 'convertRouteToNavigation' });
        if (null == g || !g.isReady())
            return;
        let y = e.navigationReplace, x = null !== (r = e.useScreen) && void 0 !== r && r;
        if (b && (0, u.x7)() && m === p.Z5c.ME) {
            (0, d.vp)({
                screen: 'messages',
                resetRoot: y
            });
            return;
        }
        if (b && m === p.Z5c.NOTIFICATIONS) {
            (0, d.vp)({
                screen: 'notifications',
                resetRoot: y
            });
            return;
        }
        if (m.startsWith('/channels/')) {
            let e = (0, n.LX)(m, { path: p.Z5c.CHANNEL(':guildId', ':channelId?', ':messageId?') }), t = (0, n.LX)(m, { path: ''.concat(p.Z5c.CHANNEL(':guildId', ':channelId?')).concat(p.Z5c.VOICE_CHAT_CHANNEL_PARTIAL(':voiceGuildId', ':voiceChannelId', ':voiceMessageId?')) });
            if (!b) {
                let e = g.getRootState();
                (null == e ? void 0 : null === (i = e.routes) || void 0 === i ? void 0 : null === (a = i[0]) || void 0 === a ? void 0 : a.name) !== 'panels' && (0, d.H)();
                return;
            }
            if (null != t) {
                let {
                    voiceGuildId: e,
                    voiceChannelId: r,
                    voiceMessageId: a
                } = t.params;
                !(0, h.ur)() && (0, d.k4)({
                    channelId: r,
                    guildId: e,
                    messageId: a,
                    replaceChannelAndFixRoot: y,
                    useScreen: x
                });
                return;
            }
            if (null != e) {
                let {
                    channelId: t,
                    guildId: r,
                    messageId: a
                } = e.params;
                if (!(0, u.x7)() && !f) {
                    (0, d.vp)({
                        screen: 'guilds',
                        guildId: r,
                        resetRoot: y
                    });
                    return;
                }
                if ((0, u.JH)()) {
                    let [e, a] = (0, s.Z)(g.getCurrentRoute());
                    if (e === r && a === t)
                        return;
                }
                null == t || (0, u.Z0)(r) && !1 !== y ? r !== p.ME || f ? (0, d.vp)({
                    screen: 'guilds',
                    guildId: r,
                    channelId: (0, u.JH)() ? t : void 0,
                    resetRoot: y
                }) : (0, d.vp)({
                    screen: 'messages',
                    resetRoot: y
                }) : null != r && (0, d.k4)({
                    channelId: t,
                    guildId: r,
                    messageId: a,
                    replaceChannelAndFixRoot: y,
                    useScreen: x
                });
            }
            return;
        }
        if (m.startsWith('/member-verification/')) {
            let e = (0, n.LX)(m, { path: p.Z5c.GUILD_MEMBER_VERIFICATION(':guildId', ':inviteCode?') });
            null != e && (0, d.fA)(e.params.guildId, e.params.inviteCode);
            return;
        }
        if (m.startsWith('/login') || m.startsWith('/register')) {
            (0, d.Bj)();
            return;
        }
        if (m.startsWith('/account-standing')) {
            g.navigate({
                name: 'account-standing',
                params: void 0
            });
            return;
        }
        b && (0, d.vp)({
            screen: 'messages',
            resetRoot: y
        });
    }
    executeRouteRewrites(e, t) {
        if (this.routeChangeCount += 1, this.routeChangeCount < 10)
            for (let r of this.rewrites) {
                let n = (0, g.s1)().location.pathname, i = r(e, t);
                if (null != i)
                    return (0, a.n_)({
                        message: 'RouteManager.handleRouteChange: A route rewrite is replacing the current route',
                        data: {
                            replacePath: i.path,
                            previousPath: n
                        }
                    }), (0, g.dL)(i.path, i.state), !0;
            }
        else
            throw Error('RouteManager: Something has gone horribly wrong with rewrites');
        return !1;
    }
    cleanup() {
        var e, t;
        null === (e = this.unlistenHistory) || void 0 === e || e.call(this), this.unlistenHistory = void 0, null === (t = this.unlistenKeyboardChange) || void 0 === t || t.call(this), this.unlistenKeyboardChange = void 0, i.Z.removeChangeListener(this.handleConnectionChange);
    }
    addRouteChangeListener(e) {
        return null != this.unlistenHistory && e((0, g.s1)().location, 'REPLACE'), this.listeners.add(e), () => this.removeRouteChangeListener(e);
    }
    addRouteRewriter(e) {
        if (null != this.unlistenHistory) {
            let t = e((0, g.s1)().location, (0, g.s1)().action);
            null != t && (0, g.dL)(t.path, t.state);
        }
        return this.rewrites.add(e), () => this.removeRouteRewriter(e);
    }
    removeRouteChangeListener(e) {
        this.listeners.delete(e);
    }
    removeRouteRewriter(e) {
        this.rewrites.delete(e);
    }
    getHistory() {
        return (0, g.s1)();
    }
    constructor() {
        b(this, 'unlistenHistory', void 0), b(this, 'unlistenKeyboardChange', void 0), b(this, 'rewrites', new Set()), b(this, 'listeners', new Set()), b(this, 'routeChangeCount', 0), b(this, 'timer', -1), b(this, 'connected', !1), b(this, 'handleConnectionChange', () => {
            let e = i.Z.isConnected(), t = e && !this.connected;
            this.connected = e, t && (this.routeChangeCount = 0, this.executeRouteRewrites((0, g.s1)().location, 'REPLACE'));
        }), b(this, 'handleRouteChange', (e, t) => {
            if (this.executeRouteRewrites(e, t))
                return;
            let r = m.Z.getState();
            for (let a of (r.basePath !== e.pathname && r.resetPath(e.pathname), this.listeners))
                try {
                    a(e, t);
                } catch (e) {
                    console.warn('RouteManager.listen: A route listener has caused an error', e.message);
                }
            this.convertRouteToNavigation(e, t), this.routeChangeCount = 0;
        }), b(this, 'handleKeybindRouteChange', e => {
            let {path: t} = e;
            null != t ? (clearTimeout(this.timer), this.timer = setTimeout(this.flushRoute, 200)) : null == t && clearTimeout(this.timer);
        }), b(this, 'flushRoute', () => {
            clearTimeout(this.timer);
            let e = m.Z.getState();
            null != e.path && (0, g.uL)(e.path);
        });
    }
}();
