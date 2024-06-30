var r, i, a, o, s = n(442837), l = n(570140);
let u = {};
function c() {
    u = {};
}
class d extends (o = s.ZP.Store) {
    getNote(e) {
        return u[e];
    }
}
a = 'NoteStore', (i = 'displayName') in (r = d) ? Object.defineProperty(r, i, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : r[i] = a, t.Z = new d(l.Z, {
    CONNECTION_OPEN: c,
    OVERLAY_INITIALIZE: c,
    USER_NOTE_UPDATE: function (e) {
        u[e.id] = {
            loading: !1,
            note: e.note
        };
    },
    USER_NOTE_LOAD_START: function (e) {
        let {userId: t} = e;
        u[t] = {
            loading: !0,
            note: null
        };
    },
    USER_NOTE_LOADED: function (e) {
        let {
            userId: t,
            note: n
        } = e;
        u[t] = {
            loading: !1,
            note: null == n ? void 0 : n.note
        };
    }
});
