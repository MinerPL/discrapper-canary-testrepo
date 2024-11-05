let r, i;
var a,
    s,
    o,
    l,
    u = n(392711),
    c = n(442837),
    d = n(570140);
let f = [],
    _ = [],
    h = !1;
let p = f,
    m = {},
    g = null;
let E = 0,
    v = (e) => {
        p = (0, u.cloneDeep)(e);
        let t = {};
        p.forEach((e) => {
            if (((t[e.id] = e), _.length > 0)) {
                var n;
                t[e.id].config.effects = null !== (n = (0, u.sample)(_)) && void 0 !== n ? n : [];
            }
        }),
            (m = t);
    },
    I = () => {
        v(f), (g = null), (i = void 0), (h = !1);
    };
class S extends (l = c.ZP.Store) {
    get isFetching() {
        return h;
    }
    get fetchError() {
        return r;
    }
    get profileEffects() {
        return p;
    }
    get tryItOutId() {
        return g;
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
    (s = 'displayName') in (a = S)
        ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = o),
    (t.Z = new S(d.Z, {
        USER_PROFILE_EFFECTS_FETCH: () => {
            h = !0;
        },
        USER_PROFILE_EFFECTS_FETCH_SUCCESS: (e) => {
            let { profileEffects: t } = e;
            (r = void 0), (i = Date.now() + 300000), (E = 0), v(0 === t.length ? f : t), (h = !1);
        },
        USER_PROFILE_EFFECTS_FETCH_FAILURE: (e) => {
            let { error: t } = e;
            (r = t), (i = Date.now() + Math.min(60000 * 2 ** E, 3600000)), ++E, v(f), (h = !1);
        },
        PROFILE_EFFECTS_SET_TRY_IT_OUT: (e) => {
            let { id: t } = e;
            g = t;
        },
        LOGOUT: (e) => {
            I();
        }
    }));
