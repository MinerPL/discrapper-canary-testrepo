var r,
    i = n(392711),
    a = n.n(i),
    s = n(442837),
    o = n(433517),
    l = n(570140),
    u = n(981631);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let d = {};
class _ extends (r = s.ZP.PersistedStore) {
    initialize(e) {
        d = null != e ? e : {};
    }
    getState() {
        return d;
    }
    shouldSync(e) {
        var t;
        return (null === (t = d[e]) || void 0 === t ? void 0 : t.shouldSync) !== !1;
    }
    getTextSettings() {
        var e;
        return null === (e = d.text) || void 0 === e ? void 0 : e.settings;
    }
    getAppearanceSettings() {
        var e;
        return null === (e = d.appearance) || void 0 === e ? void 0 : e.settings;
    }
}
c(_, 'displayName', 'SelectivelySyncedUserSettingsStore'),
    c(_, 'persistKey', 'SelectivelySyncedUserSettingsStore'),
    c(_, 'migrations', [
        () => {
            var e, t;
            let n = null !== (e = o.K.get('UserSettingsSync')) && void 0 !== e ? e : {},
                r = null !== (t = o.K.get('UserSettingsStore')) && void 0 !== t ? t : {};
            o.K.remove('UserSettingsSync');
            let i = {};
            return (
                !1 === n[u.oAB.TEXT] &&
                    (i.text = {
                        shouldSync: !1,
                        settings: a().pick(r, ['inlineAttachmentMedia', 'inlineEmbedMedia', 'renderEmbeds', 'renderReactions', 'animateEmoji', 'animateStickers', 'gifAutoPlay'])
                    }),
                !1 === n[u.oAB.APPEARANCE] &&
                    (i.appearance = {
                        shouldSync: !1,
                        settings: a().pick(r, ['theme', 'clientThemeSettings', 'developerMode'])
                    }),
                i
            );
        },
        (e) => {
            var t, n;
            if ((null == e ? void 0 : null === (n = e.appearance) || void 0 === n ? void 0 : null === (t = n.settings) || void 0 === t ? void 0 : t.theme) === 'amoled')
                return {
                    ...e,
                    appearance: {
                        ...e.appearance,
                        settings: {
                            ...e.appearance.settings,
                            theme: 'midnight'
                        }
                    }
                };
        }
    ]),
    (t.Z = new _(l.Z, {
        SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: function (e) {
            let { changes: t } = e;
            for (let e in t) {
                var n;
                let { shouldSync: r, settings: i } = t[e];
                if (!0 === r) {
                    delete d[e];
                    continue;
                }
                !1 === r &&
                    (d[e] = {
                        shouldSync: r,
                        settings: {}
                    });
                if ((null === (n = d[e]) || void 0 === n ? void 0 : n.shouldSync) === !1) for (let t in i) d[e].settings[t] = i[t];
            }
        },
        LOGOUT: function () {
            d = {};
        }
    }));
