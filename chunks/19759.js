n.d(t, {
    h: function () {
        return l;
    }
});
var r, i = n(442837), a = n(570140), o = n(906467);
function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let l = 360, u = {
        sidebarWidth: 360,
        lastOpenTabId: null,
        displayTools: !1,
        showDevWidget: !1,
        devWidgetPosition: {
            x: 0,
            y: 0
        }
    };
class c extends (r = i.ZP.DeviceSettingsStore) {
    initialize(e) {
        u = null != e ? e : u;
        a.Z.actionLogger.persist = o.Z.isDeveloper;
    }
    getUserAgnosticState() {
        return u;
    }
    get sidebarWidth() {
        return this.displayTools ? u.sidebarWidth : 0;
    }
    get lastOpenTabId() {
        var e;
        return null !== (e = u.lastOpenTabId) && void 0 !== e ? e : null;
    }
    get displayTools() {
        return o.Z.isDeveloper && u.displayTools;
    }
    get showDevWidget() {
        return o.Z.isDeveloper && u.showDevWidget;
    }
    get devWidgetPosition() {
        return u.devWidgetPosition;
    }
}
s(c, 'displayName', 'DevToolsSettingsStore'), s(c, 'persistKey', 'DevToolsSettingsStore'), t.Z = new c(a.Z, {
    DEV_TOOLS_SETTINGS_UPDATE: function (e) {
        if (!!o.Z.isDeveloper)
            u = {
                ...u,
                ...e.settings
            };
    }
});
