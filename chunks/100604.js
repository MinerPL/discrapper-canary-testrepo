n.d(t, {
    r: function () {
        return N;
    }
});
var i = n(933557),
    a = n(356264),
    s = n(592125),
    l = n(430824),
    r = n(496675),
    o = n(699516),
    c = n(594174),
    d = n(768581),
    u = n(55935),
    _ = n(631184),
    E = n(346610);
n(978003);
var I = n(689938);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function T(e, t) {
    return {
        originLabel: e.name,
        originIconUrl: d.ZP.getGuildIconURL({
            id: e.id,
            size: 16,
            icon: e.icon,
            canAnimate: !1
        }),
        timestampLabel: t,
        accessibilityLabel: I.Z.Messages.MESSAGE_FORWARD_FOOTER_WITH_ORIGIN_A11Y.format({
            origin: e.name,
            timestamp: t
        })
    };
}
class N {
    getForwardInfo() {
        var e, t, n, d;
        let m = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.Z,
            N = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.default,
            h = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Z,
            C = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.Z,
            p = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : l.Z,
            f = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : a.Z,
            { snapshotIndex: g, parentMessage: A, messageSnapshot: S } = this,
            { useOldIcon: M } = (0, E.WT)({ location: 'GetForwardInfo' }, { autoTrackExposure: !1 }),
            { showForwardBreadcrumb: x } = _.u.getCurrentConfig({ location: 'MessageForward' });
        if (!x)
            return {
                snapshotIndex: g,
                useOldIcon: M
            };
        let O = (0, u.Xf)(S.message.timestamp),
            R = m.getChannel(this.parentMessage.channel_id);
        if (null != R && R.guild_id === (null === (e = A.messageReference) || void 0 === e ? void 0 : e.guild_id)) {
            let e = m.getChannel(null === (n = A.messageReference) || void 0 === n ? void 0 : n.channel_id);
            if (null == e) {
                let e = p.getGuild(R.guild_id);
                return null == e
                    ? {
                          snapshotIndex: g,
                          useOldIcon: M
                      }
                    : {
                          snapshotIndex: g,
                          footerInfo: T(e, O),
                          useOldIcon: M
                      };
            }
            if (!C.can(e.accessPermissions, e))
                return {
                    snapshotIndex: g,
                    useOldIcon: M
                };
            let t = (0, i.F6)(e, N, h, !0);
            return {
                snapshotIndex: g,
                footerInfo: {
                    originLabel: t,
                    timestampLabel: O,
                    accessibilityLabel: I.Z.Messages.MESSAGE_FORWARD_FOOTER_WITH_ORIGIN_A11Y.format({
                        origin: t,
                        timestamp: O
                    })
                },
                useOldIcon: M
            };
        }
        let v = null === (t = A.messageReference) || void 0 === t ? void 0 : t.guild_id;
        if (null == v)
            return {
                snapshotIndex: g,
                useOldIcon: M
            };
        let L = null !== (d = p.getGuild(v)) && void 0 !== d ? d : f.getGuild(v);
        return null == L
            ? {
                  snapshotIndex: g,
                  useOldIcon: M
              }
            : {
                  snapshotIndex: g,
                  footerInfo: T(L, O),
                  useOldIcon: M
              };
    }
    constructor(e, t, n) {
        m(this, 'parentMessage', void 0), m(this, 'messageSnapshot', void 0), m(this, 'snapshotIndex', void 0), (this.parentMessage = e), (this.messageSnapshot = t), (this.snapshotIndex = n);
    }
}
