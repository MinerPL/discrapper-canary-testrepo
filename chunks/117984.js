n.d(t, {
    CM: function () {
        return T;
    },
    UT: function () {
        return c;
    },
    _Z: function () {
        return p;
    },
    kj: function () {
        return _;
    },
    oC: function () {
        return I;
    },
    s3: function () {
        return S;
    },
    uA: function () {
        return f;
    },
    xh: function () {
        return N;
    }
}), n(47120);
var i = n(524437), r = n(675478), a = n(592125), o = n(496675), u = n(709054), s = n(853856), l = n(231338);
function d() {
    let e = s.Z.getFavoriteChannels(), t = 1;
    for (let n in e)
        t = Math.max(t, e[n].order);
    return t + 1;
}
function E(e) {
    for (let t in e) {
        let n = e[t];
        if (null == n) {
            delete e[t];
            continue;
        }
        if (n.type === i.Dd.CATEGORY)
            continue;
        let r = a.Z.getChannel(t);
        if (null == r) {
            delete e[t];
            continue;
        }
        if (!r.isPrivate()) {
            if (!o.Z.can(l.Pl.VIEW_CHANNEL, r)) {
                delete e[t];
                continue;
            }
        }
    }
}
function _(e, t) {
    if (!s.Z.isFavorite(e))
        r.hW.updateAsync('favorites', n => {
            n.favoriteChannels[e] = i.aV.create({
                nickname: '',
                type: i.Dd.REFERENCE_ORIGINAL,
                position: d(),
                parentId: null != t ? t : '0'
            }), E(n.favoriteChannels);
        }, r.fy.FREQUENT_USER_ACTION);
}
function I(e) {
    let t = s.Z.getFavorite(e);
    if (null != t)
        r.hW.updateAsync('favorites', n => {
            if (delete n.favoriteChannels[e], t.type === i.Dd.CATEGORY)
                for (let t in n.favoriteChannels)
                    n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = '0');
            E(n.favoriteChannels);
        }, r.fy.INFREQUENT_USER_ACTION);
}
function c(e, t) {
    if (!!s.Z.isFavorite(e))
        r.hW.updateAsync('favorites', n => {
            n.favoriteChannels[e].nickname = null != t ? t : '';
        }, r.fy.INFREQUENT_USER_ACTION);
}
function T(e) {
    let t = u.default.fromTimestamp(Date.now());
    r.hW.updateAsync('favorites', n => {
        n.favoriteChannels[t] = i.aV.create({
            nickname: e,
            type: i.Dd.CATEGORY,
            position: d(),
            parentId: '0'
        });
    }, r.fy.FREQUENT_USER_ACTION);
}
function N(e) {
    I(e);
}
function S(e) {
    r.hW.updateAsync('favorites', t => {
        for (let i of e)
            if (null != i.position && (t.favoriteChannels[i.id].position = i.position), void 0 !== i.parent_id) {
                var n;
                t.favoriteChannels[i.id].parentId = null !== (n = i.parent_id) && void 0 !== n ? n : '0';
            }
    }, r.fy.FREQUENT_USER_ACTION);
}
function f(e, t) {
    r.hW.updateAsync('favorites', n => {
        n.favoriteChannels[e].parentId = null != t ? t : '0';
    }, r.fy.FREQUENT_USER_ACTION);
}
function p() {
    r.hW.updateAsync('favorites', e => {
        e.muted = !e.muted;
    }, r.fy.INFREQUENT_USER_ACTION);
}
