n.d(t, {
    cS: function () {
        return s;
    },
    nE: function () {
        return a;
    },
    xC: function () {
        return u;
    },
    xV: function () {
        return l;
    }
});
var r = n(592125), i = n(765305);
function a(e) {
    let t;
    let {
        entity_type: n,
        channel_id: a
    } = e;
    if (n in i.nz && null != a) {
        var o;
        t = null !== (o = r.Z.getChannel(e.channel_id)) && void 0 !== o ? o : void 0;
    }
    return t;
}
function o(e, t) {
    let n = null;
    return e === i.WX.EXTERNAL && null != t && 'location' in t && (n = t.location), n;
}
function s(e) {
    let {
        entity_type: t,
        entity_metadata: n
    } = e;
    return o(t, n);
}
function l(e) {
    let {
        entityType: t,
        entityMetadata: n
    } = e;
    return o(t, n);
}
function u(e) {
    return e === i.WX.VOICE || e === i.WX.STAGE_INSTANCE ? i.nz[e] : void 0;
}
