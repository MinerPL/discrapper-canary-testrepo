n.d(t, {
    PP: function () {
        return _;
    },
    SO: function () {
        return f;
    },
    cn: function () {
        return E;
    }
}), n(411104), n(470079);
var r, i, a = n(652874), o = n(433517);
n(353926), n(311089);
var s = n(777639), l = n(721877), u = n(488832);
(i = r || (r = {}))[i.EXISTING_USERS = 0] = 'EXISTING_USERS', i[i.NEW_USERS = 1] = 'NEW_USERS';
let c = 'tabs-v2-experiment-key', d = (0, a.Z)((e, t) => ({
        _experimentCacheInitialized: !1,
        _experimentEnabled: !1,
        getExperimentEnabled() {
            if (!(0, l.I)())
                return !1;
            let {
                _experimentCacheInitialized: e,
                _experimentEnabled: n
            } = t();
            if (!e)
                throw Error('MainTabsV2ExperimentStore: Experiment cache not initialized');
            return n;
        },
        setExperimentEnabled: t => {
            e({ _experimentEnabled: t }), o.K.set(c, t);
        },
        setInitialized: () => {
            e(e => e._experimentCacheInitialized ? e : {
                _experimentCacheInitialized: !0,
                _experimentEnabled: !0 === o.K.get(c)
            });
        }
    }));
function _() {
    return E() ? (0, s.D)() : void 0;
}
function E() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.getState().getExperimentEnabled();
    return (0, u.y)(e), e;
}
function f() {
    return E(d(e => e.getExperimentEnabled()));
}
