let r, i;
var a,
    s,
    o,
    l,
    u = n(392711),
    c = n(442837),
    d = n(570140),
    _ = n(358085),
    E = n(729436);
let f = [],
    h = [],
    p = !1;
let I = f,
    m = {},
    T = null;
let S = 0,
    g = (e) => {
        I = (0, u.cloneDeep)(e);
        let t = {};
        I.forEach((e) => {
            if (((t[e.id] = (0, _.isAndroid)() ? (0, E.QE)(e) : e), h.length > 0)) {
                var n;
                t[e.id].config.effects = null !== (n = (0, u.sample)(h)) && void 0 !== n ? n : [];
            }
        }),
            (m = t);
    },
    A = () => {
        g(f), (T = null), (i = void 0), (p = !1);
    };
class N extends (l = c.ZP.Store) {
    get isFetching() {
        return p;
    }
    get fetchError() {
        return r;
    }
    get profileEffects() {
        return I;
    }
    get tryItOutId() {
        return T;
    }
    canFetch() {
        return null == i || Date.now() >= i;
    }
    hasFetched() {
        return null != i && null == r;
    }
    getProfileEffectById(e) {
        return null != e ? m[e] : void 0;
    }
}
(o = 'ProfileEffectStore'),
    (s = 'displayName') in (a = N)
        ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = o),
    (t.Z = new N(d.Z, {
        USER_PROFILE_EFFECTS_FETCH: () => {
            p = !0;
        },
        USER_PROFILE_EFFECTS_FETCH_SUCCESS: (e) => {
            let { profileEffects: t } = e;
            (r = void 0), (i = Date.now() + 300000), (S = 0), g(0 === t.length ? f : t), (p = !1);
        },
        USER_PROFILE_EFFECTS_FETCH_FAILURE: (e) => {
            let { error: t } = e;
            (r = t), (i = Date.now() + Math.min(60000 * 2 ** S, 3600000)), ++S, g(f), (p = !1);
        },
        PROFILE_EFFECTS_SET_TRY_IT_OUT: (e) => {
            let { id: t } = e;
            T = t;
        },
        LOGOUT: (e) => {
            A();
        }
    }));
