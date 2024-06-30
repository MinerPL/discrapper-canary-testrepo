n(653041), n(47120);
var r = n(392711), i = n.n(r), a = n(377108), o = n(433517), s = n(147913), l = n(654455), u = n(822245), c = n(339085), d = n(178106), _ = n(822179), E = n(580005), f = n(70956), h = n(675478), p = n(581883), m = n(48481), I = n(526761), T = n(674563);
let g = 'lastFrecencySavedTime', S = Math.random() * (5 * f.Z.Millis.MINUTE), A = 1 * f.Z.Millis.DAY + Math.floor(Math.random() * (1 * f.Z.Millis.HOUR)), N = null, v = Date.now();
class O extends s.Z {
    _initialize() {
        h.DZ.beforeSendCallbacks.push({
            hasChanges: () => !1,
            processProto: () => {
                D(!0);
            }
        }), h.DZ.beforeSendCallbacks.push({
            hasChanges: () => _.Z.hasPendingUsage() && p.Z.hasLoaded(I.yP.FRECENCY_AND_FAVORITES_SETTINGS),
            processProto: e => {
                if (!!_.Z.hasPendingUsage())
                    p.Z.hasLoaded(I.yP.FRECENCY_AND_FAVORITES_SETTINGS) && (e.stickerFrecency = a.ls.create(), e.stickerFrecency.stickers = (0, m.tU)(_.Z.stickerFrecencyWithoutFetchingLatest.usageHistory, 100));
            }
        }), h.DZ.beforeSendCallbacks.push({
            hasChanges: () => c.Z.hasPendingUsage() && p.Z.hasLoaded(I.yP.FRECENCY_AND_FAVORITES_SETTINGS),
            processProto: e => {
                if (!!c.Z.hasPendingUsage())
                    p.Z.hasLoaded(I.yP.FRECENCY_AND_FAVORITES_SETTINGS) && (e.emojiFrecency = a.PL.create(), e.emojiFrecency.emojis = (0, m.tU)(c.Z.emojiFrecencyWithoutFetchingLatest.usageHistory, 100));
            }
        }), h.DZ.beforeSendCallbacks.push({
            hasChanges: () => d.Z.hasPendingUsage() && p.Z.hasLoaded(I.yP.FRECENCY_AND_FAVORITES_SETTINGS),
            processProto: e => {
                if (!!d.Z.hasPendingUsage())
                    p.Z.hasLoaded(I.yP.FRECENCY_AND_FAVORITES_SETTINGS) && !i().isEmpty(d.Z.playedSoundHistory) && (e.playedSoundFrecency = a.pL.create(), e.playedSoundFrecency.playedSounds = (0, m.tU)(d.Z.playedSoundHistory, 100));
            }
        }), h.DZ.beforeSendCallbacks.push({
            hasChanges: () => l.ZP.hasPendingUsage() && p.Z.hasLoaded(I.yP.FRECENCY_AND_FAVORITES_SETTINGS),
            processProto: e => {
                if (!!l.ZP.hasPendingUsage())
                    p.Z.hasLoaded(I.yP.FRECENCY_AND_FAVORITES_SETTINGS) && (e.applicationCommandFrecency = a.YI.create(), e.applicationCommandFrecency.applicationCommands = (0, m.tU)(l.ZP.getCommandFrecencyWithoutLoadingLatest().usageHistory, 500));
            }
        }), h.DZ.beforeSendCallbacks.push({
            hasChanges: () => u.Z.hasPendingUsage() && p.Z.hasLoaded(I.yP.FRECENCY_AND_FAVORITES_SETTINGS),
            processProto: e => {
                if (!!u.Z.hasPendingUsage())
                    p.Z.hasLoaded(I.yP.FRECENCY_AND_FAVORITES_SETTINGS) && (e.applicationFrecency = a.UY.create(), e.applicationFrecency.applications = (0, m.tU)(u.Z.getApplicationFrecencyWithoutLoadingLatest().usageHistory, T.yP));
            }
        }), h.DZ.beforeSendCallbacks.push({
            hasChanges: () => E.Z.hasPendingUsage() && p.Z.hasLoaded(I.yP.FRECENCY_AND_FAVORITES_SETTINGS),
            processProto: e => {
                if (!!E.Z.hasPendingUsage())
                    p.Z.hasLoaded(I.yP.FRECENCY_AND_FAVORITES_SETTINGS) && (e.guildAndChannelFrecency = a.lG.create(), e.guildAndChannelFrecency.guildAndChannels = (0, m.tU)(E.Z.frecencyWithoutFetchingLatest.usageHistory, E.C));
            }
        });
    }
    constructor(...e) {
        var t, n, r;
        super(...e), t = this, n = 'actions', r = {
            POST_CONNECTION_OPEN: R,
            CONNECTION_RESUMED: R,
            CONNECTION_CLOSED: C
        }, n in t ? Object.defineProperty(t, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = r;
    }
}
function R() {
    var e;
    v = null !== (e = o.K.get(g)) && void 0 !== e ? e : Date.now(), D(!1);
}
function C() {
    clearTimeout(N), N = null;
}
async function y() {
    v = Date.now(), D(!0), !p.Z.hasLoaded(I.yP.FRECENCY_AND_FAVORITES_SETTINGS) && (_.Z.hasPendingUsage() || c.Z.hasPendingUsage() || l.ZP.hasPendingUsage() || u.Z.hasPendingUsage() || E.Z.hasPendingUsage()) && await h.DZ.loadIfNecessary(), i().forEach(h.aj, e => {
        e.markDirtyIfHasPendingChange();
    });
}
function D(e) {
    e && (v = Date.now(), o.K.set(g, v)), null != N && clearTimeout(N), N = setTimeout(y, Math.max(S, A - (Date.now() - v)));
}
t.Z = new O();
