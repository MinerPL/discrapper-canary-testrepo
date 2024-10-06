n.d(t, {
    Bd: function () {
        return r;
    },
    fh: function () {
        return l;
    }
}),
    n(571269),
    n(298267),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var r,
    i,
    a = n(46140);
let s = /\.([a-zA-Z0-9]+)$/,
    o = ['video/mp4', 'video/webm'];
function l(e, t, n) {
    var r, i, a, s, l;
    switch (t) {
        case 'hero': {
            let t = null !== (r = e.config.assets.heroVideo) && void 0 !== r ? r : e.config.assets.hero,
                n = u(e.id, t),
                i = c(t),
                a = null != i && o.includes(i);
            return {
                url: n,
                mimetype: i,
                isAnimated: a
            };
        }
        case 'quest_bar_hero': {
            let t = null !== (i = e.config.assets.questBarHeroVideo) && void 0 !== i ? i : e.config.assets.questBarHero,
                n = u(e.id, t),
                r = c(t),
                a = null != r && o.includes(r);
            return {
                url: n,
                mimetype: r,
                isAnimated: a
            };
        }
        case 'reward': {
            let t = null !== (s = null === (a = e.userStatus) || void 0 === a ? void 0 : a.claimedTier) && void 0 !== s ? s : 0,
                n = 'rewardsConfig' in e.config ? e.config.rewardsConfig.rewards[t] : e.config.rewards[t],
                r = null !== (l = n.assetVideo) && void 0 !== l ? l : n.asset,
                i = u(e.id, r),
                d = c(r),
                _ = null != d && o.includes(d);
            return {
                url: i,
                mimetype: d,
                isAnimated: _
            };
        }
        case 'game_tile': {
            let t = e.config.assets.gameTile,
                r = u(e.id, t, n),
                i = c(t),
                a = null != i && o.includes(i);
            return {
                url: r,
                mimetype: i,
                isAnimated: a
            };
        }
        case 'logo_type': {
            let t = e.config.assets.logotype,
                r = u(e.id, t, n),
                i = c(t),
                a = null != i && o.includes(i);
            return {
                url: r,
                mimetype: i,
                isAnimated: a
            };
        }
    }
}
((i = r || (r = {})).HERO = 'hero'), (i.QUEST_BAR_HERO = 'quest_bar_hero'), (i.REWARD = 'reward'), (i.GAME_TILE = 'game_tile'), (i.LOGO_TYPE = 'logo_type');
function u(e, t, n) {
    if (t.startsWith('blob:')) {
        var r, i;
        return null !== (i = (r = t).split('?', 1).at(0)) && void 0 !== i ? i : r;
    }
    return ''
        .concat(a.tD)
        .concat(e)
        .concat(null != n ? '/'.concat(n) : '', '/')
        .concat(t);
}
function c(e) {
    var t, n, r;
    if (e.startsWith('blob:')) {
        let t = null !== (r = new URL(e).searchParams.get('mimetype')) && void 0 !== r ? r : void 0;
        return null != t ? decodeURIComponent(t) : null;
    }
    switch (null === (n = s.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) {
        case 'webm':
            return 'video/webm';
        case 'mp4':
            return 'video/mp4';
        case 'webp':
            return 'image/webp';
        case 'jpg':
        case 'jpeg':
            return 'image/jpeg';
        case 'png':
            return 'image/png';
        case 'gif':
            return 'image/gif';
        case 'svg':
            return 'image/svg+xml';
        default:
            return null;
    }
}
