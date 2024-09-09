n(47120);
var i,
    s,
    l,
    r,
    a = n(442837),
    d = n(570140),
    h = n(45114),
    o = n(897473),
    u = n(581883),
    c = n(314897),
    C = n(592125),
    g = n(984933),
    p = n(271383),
    f = n(430824),
    v = n(306680),
    I = n(9156),
    E = n(70956),
    S = n(709054),
    y = n(981631);
let w = new Set(),
    _ = {},
    N = {};
function m(e, t) {
    let n = _[e];
    if (null != n && null != t && n.has(t)) {
        var i;
        I.ZP.isOptInEnabled(e) && !(null === (i = C.Z.getChannel(t)) || void 0 === i ? void 0 : i.isThread()) && null == v.ZP.ackMessageId(t) && d.Z.wait(() => (0, h.In)(t, !0, !0, S.default.atPreviousMillisecond(t)));
    }
}
function A(e) {
    var t;
    if (null != _[e]) return;
    let n = g.ZP.getChannels(e)[g.sH].map((e) => e.channel.id),
        i = null === (t = p.ZP.getMember(e, c.default.getId())) || void 0 === t ? void 0 : t.joinedAt;
    if (null == i) return;
    _[e] = new Set();
    let s = new Date(i).getTime();
    if (0 !== n.length)
        (_[e] = new Set(
            n.filter((t) => {
                let n = S.default.extractTimestamp(t);
                return null == v.ZP.getTrackedAckMessageId(t) && n > Date.now() - E.Z.Millis.WEEK && n > u.Z.getGuildRecentsDismissedAt(e) && n > s && !I.ZP.isChannelOrParentOptedIn(e, t);
            })
        )),
            (N[e] = Date.now());
}
function L() {
    S.default.keys(_).forEach((e) => {
        let t = _[e];
        _[e] = new Set([...t].filter((t) => !I.ZP.isChannelOrParentOptedIn(e, t)));
    });
}
class R extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(g.ZP, c.default, p.ZP, I.ZP, v.ZP, u.Z), this.syncWith([I.ZP], L);
    }
    getNewChannelIds(e) {
        var t;
        return null != e && null == _[e] && A(e), null != e && null !== (t = _[e]) && void 0 !== t ? t : w;
    }
    shouldIndicateNewChannel(e, t) {
        var n;
        if (null == e) return !1;
        let i = f.Z.getGuild(e);
        return !!(null != i && i.hasFeature(y.oNc.COMMUNITY)) && (null != e && null == _[e] && A(e), (null === (n = _[e]) || void 0 === n ? void 0 : n.has(t)) && null == v.ZP.getTrackedAckMessageId(t));
    }
}
(r = 'NewChannelsStore'),
    (l = 'displayName') in (s = R)
        ? Object.defineProperty(s, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[l] = r),
    (t.Z = new R(d.Z, {
        BULK_CLEAR_RECENTS: function (e) {
            let { guildId: t, channelIds: n } = e;
            if (null == _[t]) return !1;
            n.forEach((e) => _[t].delete(e)), 0 === _[t].size && delete _[t];
        },
        CHANNEL_ACK: () => !0,
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            return null != t && (null == _[t] || N[t] < Date.now() - E.Z.Millis.HOUR ? (A(t), !0) : (null != n && m(t, n), !1));
        },
        SIDEBAR_VIEW_CHANNEL: function (e) {
            let { guildId: t, channelId: n, sidebarType: i } = e;
            return null != t && i === o.tI.VIEW_CHANNEL && (m(t, n), !1);
        },
        SIDEBAR_VIEW_GUILD: function (e) {
            let { guildId: t, baseChannelId: n } = e;
            return null != t && (m(t, n), !1);
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            delete _[t.id];
        },
        CHANNEL_CREATE: function (e) {
            var t;
            let { channel: n } = e;
            !n.isVocal() && ((_[n.guild_id] = null !== (t = _[n.guild_id]) && void 0 !== t ? t : new Set()), _[n.guild_id].add(n.id));
        }
    }));
