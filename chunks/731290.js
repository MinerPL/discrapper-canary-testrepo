var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(433517),
    u = n(570140);
let c = 'GuildNSFWAgreeStore',
    d = {};
class _ extends (s = o.ZP.Store) {
    initialize() {
        var e;
        d = null !== (e = l.K.get(c)) && void 0 !== e ? e : d;
    }
    didAgree(e) {
        return null != e && (d[e] || !1);
    }
}
(a = 'GuildNSFWAgreeStore'),
    (i = 'displayName') in (r = _)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new _(u.Z, {
        GUILD_NSFW_AGREE: function (e) {
            let { guildId: t } = e;
            (d[t] = !0), l.K.set(c, d);
        }
    }));
