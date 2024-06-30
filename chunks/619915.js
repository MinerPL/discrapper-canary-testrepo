n.d(t, {
    QN: function () {
        return p;
    },
    ZP: function () {
        return c;
    },
    gb: function () {
        return f;
    },
    uF: function () {
        return s;
    }
}), n(47120), n(653041);
var i = n(470079), l = n(442837), o = n(835473), u = n(158776), a = n(594174), r = n(823379), d = n(317381);
function c(e, t) {
    return f((0, l.Wu)([d.ZP], () => null != e && null != e.id && '' !== e.id ? d.ZP.getEmbeddedActivitiesForChannel(e.id) : d.i6), t);
}
function p(e) {
    let t = f((0, l.e7)([d.ZP], () => null != e ? d.ZP.getEmbeddedActivitiesForGuild(e) : d.i6));
    return i.useMemo(() => {
        let e = new Map();
        return t.forEach(t => {
            var n;
            let i = t.embeddedActivity.channelId, l = null !== (n = e.get(i)) && void 0 !== n ? n : [];
            l.push(t), e.set(i, l);
        }), e;
    }, [t]);
}
function f(e, t) {
    let n = e.map(e => e.applicationId), u = (0, o.Z)(n), d = new Set([]);
    for (let t of e)
        for (let e of t.userIds)
            d.add(e);
    let c = (0, l.Wu)([a.default], () => {
        let e = [];
        for (let t of d)
            e.push(a.default.getUser(t));
        return e;
    }, [d]);
    return i.useMemo(() => {
        let n = new Map();
        return c.forEach(e => {
            null != e && n.set(e.id, e);
        }), e.map((e, i) => {
            let l = u[i], o = [];
            if (null != o)
                for (let i of e.userIds) {
                    let e = n.get(i);
                    if (null != e && null != t) {
                        let n = t(e);
                        null != n && o.push(n);
                    }
                }
            return null == l ? null : {
                embeddedActivity: e,
                application: l,
                userParticipantAvatarUrls: o
            };
        }).filter(r.lm);
    }, [
        e,
        u,
        c,
        t
    ]);
}
function s(e) {
    return (0, l.e7)([u.Z], () => {
        let t = new Map();
        return e.forEach(e => {
            var n;
            let i = u.Z.findActivity(null == e ? void 0 : e.embeddedActivity.userIds.values().next().value, t => {
                var n;
                return t.application_id === (null == e ? void 0 : null === (n = e.application) || void 0 === n ? void 0 : n.id);
            });
            t.set(null == e ? void 0 : null === (n = e.application) || void 0 === n ? void 0 : n.id, {
                ...e,
                presenceActivity: i
            });
        }), t;
    }, [e], l.pF);
}
