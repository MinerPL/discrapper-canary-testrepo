t.d(n, {
    iN: function () {
        return i;
    },
    oV: function () {
        return o;
    }
});
var l = t(846027);
let i = {
        binds: ['mod+shift+m'],
        comboKeysBindGlobal: !0,
        action: () => (
            l.Z.toggleSelfMute({
                usedKeybind: !0,
                location: 'Default Keybind'
            }),
            !1
        )
    },
    o = {
        binds: ['mod+shift+d'],
        comboKeysBindGlobal: !0,
        action: () => (
            l.Z.toggleSelfDeaf({
                usedKeybind: !0,
                location: 'Default Keybind'
            }),
            !1
        )
    };
