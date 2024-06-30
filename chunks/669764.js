n(47120);
var r, i, a, o, s = n(442837), l = n(570140);
let u = new Map(), c = new Set(), d = new Set();
class _ extends (r = s.ZP.Store) {
    canFetch(e) {
        return !c.has(e) && !d.has(e) && !u.has(e);
    }
    isFetching(e) {
        return c.has(e);
    }
    getGame(e) {
        return u.get(e);
    }
    getLocalizedName(e) {
        var t;
        return null === (t = u.get(e)) || void 0 === t ? void 0 : t.name;
    }
    getThemes(e) {
        var t;
        return null === (t = u.get(e)) || void 0 === t ? void 0 : t.themes;
    }
    getCoverImageUrl(e, t) {
        var n;
        let r = null === (n = u.get(e)) || void 0 === n ? void 0 : n.coverImageUrl;
        return null == r ? null : null == t ? r : ''.concat(r, '?width=').concat(t.width, '&height=').concat(t.height);
    }
}
o = 'DetectableGameSupplementalStore', (a = 'displayName') in (i = _) ? Object.defineProperty(i, a, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = o, t.Z = new _(l.Z, {
    CONNECTION_OPEN: function () {
        u = new Map(), c = new Set(), d = new Set();
    },
    DETECTABLE_GAME_SUPPLEMENTAL_FETCH: function (e) {
        let {applicationIds: t} = e;
        t.forEach(e => {
            c.add(e), d.delete(e);
        });
    },
    DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS: function (e) {
        let {
            applicationIds: t,
            supplementalGameData: n
        } = e;
        t.forEach(e => {
            c.delete(e), d.delete(e);
        }), n.forEach(e => {
            let {
                application_id: t,
                name: n,
                summary: r,
                websites: i,
                themes: a,
                genres: o,
                platforms: s,
                artwork_urls: l,
                screenshot_urls: c,
                cover_image_url: d,
                first_release_date: _,
                publisher_names: E,
                developer_names: f
            } = e;
            u.set(t, {
                applicationId: t,
                name: n,
                summary: r,
                websites: i,
                themes: a,
                genres: o,
                platforms: s,
                artwork: l,
                screenshots: c,
                coverImageUrl: d,
                firstReleaseDate: _,
                publishers: null != E ? E : [],
                developers: null != f ? f : []
            });
        });
    },
    DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE: function (e) {
        let {applicationIds: t} = e;
        t.forEach(e => {
            c.delete(e), d.add(e);
        });
    }
});
