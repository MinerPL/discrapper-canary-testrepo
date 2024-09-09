var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(585483),
    c = n(981631);
let d = null,
    _ = 0;
function E() {
    d = null;
}
class f extends (s = o.ZP.Store) {
    isOpen() {
        return null != d;
    }
    get version() {
        return _;
    }
    getContextMenu() {
        return d;
    }
    close() {
        return !!this.isOpen() && (u.S.dispatch(c.CkL.CONTEXT_MENU_CLOSE), !0);
    }
}
(a = 'ContextMenuStore'),
    (i = 'displayName') in (r = f)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new f(l.Z, {
        CONTEXT_MENU_OPEN: function (e) {
            let { contextMenu: t } = e;
            _++, (d = t);
        },
        LAYER_PUSH: E,
        CONTEXT_MENU_CLOSE: E,
        OVERLAY_SET_UI_LOCKED: E,
        OVERLAY_DEACTIVATE_ALL_REGIONS: E
    }));
