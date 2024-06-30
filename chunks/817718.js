n.d(e, {
    U3: function () {
        return h;
    },
    XM: function () {
        return u;
    },
    hd: function () {
        return c;
    },
    lI: function () {
        return l;
    },
    py: function () {
        return p;
    }
});
var o = n(481060), r = n(819640), i = n(585483), s = n(981631);
let a = () => r.Z.hasLayers() || (0, o.hasAnyModalOpen)(), l = 12633 == n.j ? {
        binds: ['right'],
        comboKeysBindGlobal: !0,
        action() {
            if (!a())
                return i.S.dispatch(s.CkL.CAROUSEL_NEXT), !1;
        }
    } : null, c = 12633 == n.j ? {
        binds: ['left'],
        comboKeysBindGlobal: !0,
        action() {
            if (!a())
                return i.S.dispatch(s.CkL.CAROUSEL_PREV), !1;
        }
    } : null, u = {
        binds: [
            'right',
            'down',
            'space'
        ],
        comboKeysBindGlobal: !0,
        action: () => (i.S.dispatch(s.CkL.MODAL_CAROUSEL_NEXT), !1)
    }, p = {
        binds: [
            'left',
            'up'
        ],
        comboKeysBindGlobal: !0,
        action: () => (i.S.dispatch(s.CkL.MODAL_CAROUSEL_PREV), !1)
    }, h = {
        binds: ['esc'],
        comboKeysBindGlobal: !0,
        action() {
            if (i.S.hasSubscribers(s.CkL.MODAL_CLOSE))
                return i.S.dispatch(s.CkL.MODAL_CLOSE), !1;
        }
    };
