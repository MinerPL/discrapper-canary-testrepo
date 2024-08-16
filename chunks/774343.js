var i,
    l,
    o,
    r,
    E,
    a,
    u,
    s = t(442837),
    d = t(570140),
    _ = t(592125),
    c = t(896797),
    C = t(430824),
    I = t(944486),
    A = t(55589),
    S = t(981631);
let T = (null !== (a = null === (E = window) || void 0 === E ? void 0 : null === (r = E.location) || void 0 === r ? void 0 : r.pathname) && void 0 !== a ? a : '').startsWith(S.Z5c.ACTIVITIES) ? S.Z5c.ACTIVITIES : null;
function L(e) {
    let { link: n } = e;
    if (T === n) return !1;
    T = n;
}
class N extends (u = s.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, A.Z, I.Z, C.Z, _.Z);
    }
    getHomeLink() {
        return null != T ? T : c.Z.fallbackRoute;
    }
}
(o = 'AppViewStore'),
    (l = 'displayName') in (i = N)
        ? Object.defineProperty(i, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[l] = o),
    (n.Z = new N(d.Z, {
        OVERLAY_INITIALIZE: function () {
            let e = A.Z.getPrivateChannelIds(),
                n = I.Z.getChannelId(S.ME);
            (null != n || null != e[0]) && (T = S.Z5c.CHANNEL(S.ME, null != n ? n : e[0]));
        },
        APP_VIEW_SET_HOME_LINK: L,
        APPLICATION_STORE_LOCATION_CHANGE: function (e) {
            let { location: n } = e;
            L({
                link: n.pathname,
                type: 'APP_VIEW_SET_HOME_LINK'
            });
        },
        APPLICATION_STORE_RESET_NAVIGATION: function () {
            if (null == T || !T.startsWith(S.Z5c.APPLICATION_STORE)) return !1;
            T = S.Z5c.APPLICATION_STORE;
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: n, channelId: t } = e;
            if (null == n && null != t) {
                let e = S.Z5c.CHANNEL(S.ME, t);
                if (e !== T) return (T = e), !0;
            }
            return !1;
        },
        CHANNEL_DELETE: function (e) {
            let { channel: n } = e;
            null == n.guild_id && null != n.id && null != T && T === S.Z5c.CHANNEL(S.ME, n.id) && (T = null);
        }
    }));
