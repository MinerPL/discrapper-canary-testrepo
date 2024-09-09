E.d(_, {
    a: function () {
        return r;
    }
});
var s,
    T,
    I,
    n,
    t = E(442837),
    A = E(570140);
let r = {},
    a = {},
    N = {},
    l = !1,
    L = !1,
    S = !1;
function D(e) {
    let { guild: _ } = e.invite;
    return (null == _ ? void 0 : _.welcome_screen) != null && ((a[_.id] = _.welcome_screen), !0);
}
function U(e) {
    let { welcomeScreen: _, guildId: E } = e;
    a[E] = null != _ ? _ : r;
}
class G extends (n = t.ZP.Store) {
    get(e) {
        if (null != e) return a[e];
    }
    isFetching() {
        return L;
    }
    hasError() {
        return S;
    }
    hasSeen(e) {
        let _ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null != e && (_ ? l : N[e] || !1);
    }
    isEmpty(e) {
        if (null == e) return !0;
        let _ = a[e];
        return null == _ || 0 === _.welcome_channels.length;
    }
}
(I = 'WelcomeScreenStore'),
    (T = 'displayName') in (s = G)
        ? Object.defineProperty(s, T, {
              value: I,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[T] = I),
    (_.Z = new G(A.Z, {
        INVITE_RESOLVE_SUCCESS: D,
        INVITE_ACCEPT_SUCCESS: D,
        WELCOME_SCREEN_SUBMIT_SUCCESS: U,
        WELCOME_SCREEN_UPDATE: U,
        WELCOME_SCREEN_VIEW: function (e) {
            let { guildId: _, isLurking: E } = e;
            (N[_] = !0), E && (l = !0);
        },
        GUILD_STOP_LURKING: function () {
            l = !1;
        },
        GUILD_DELETE: function (e) {
            let {
                guild: { id: _ }
            } = e;
            N[_] = !1;
        },
        WELCOME_SCREEN_FETCH_START: function () {
            (L = !0), (S = !1);
        },
        WELCOME_SCREEN_FETCH_SUCCESS: function (e) {
            (L = !1), (S = !1);
            let { welcomeScreen: _, guildId: E } = e;
            a[E] = null != _ ? _ : r;
        },
        WELCOME_SCREEN_FETCH_FAIL: function () {
            (L = !1), (S = !0);
        }
    }));
