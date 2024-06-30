n(47120), n(315314), n(610138), n(216116), n(78328), n(815648);
var r = n(628735), i = n.n(r), a = n(392711), o = n.n(a), s = n(729594), l = n(981631);
let u = /(?:^|\.)(?:discordapp|discord)\.com$/i, c = i().v4().source, d = RegExp('(?:'.concat('(?:(?:[a-z]+:)?//)', '|www\\.)').concat('(?:\\S+(?::\\S*)?@)?', '(?:localhost|').concat(c, '|').concat('(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+').concat('(?:(?:[a-z\\u00a1-\\uffff]{2,}))', ')').concat('(?::\\d{2,5})?').concat('(?:[/?#][^\\s"]*)?'), 'ig'), _ = new Set([
        window.GLOBAL_ENV.CDN_HOST,
        window.GLOBAL_ENV.INVITE_HOST,
        window.GLOBAL_ENV.GIFT_CODE_HOST,
        window.GLOBAL_ENV.GUILD_TEMPLATE_HOST
    ]);
function E(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == e)
        return !1;
    return u.test(e) || n && (t = e, _.has(t.toLowerCase()));
}
function f(e) {
    return null != e && 'discord:' === e;
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e && E(s.parse(e).hostname, t);
}
function p(e) {
    return null != e && f(s.parse(e).protocol);
}
t.Z = {
    URL_REGEX: d,
    isDiscordHostname: E,
    isDiscordLocalhost: function (e, t) {
        return null != e && null != t && (window.location.host === e || !1);
    },
    isDiscordProtocol: f,
    isDiscordUrl: h,
    isDiscordUri: p,
    isDiscordCdnUrl: function (e) {
        return null != e && s.parse(e).hostname === window.GLOBAL_ENV.CDN_HOST;
    },
    isDiscordUrlOrUri: e => h(e) || p(e),
    isAppRoute: e => {
        let t = e.toLowerCase();
        return t.startsWith('/channels/') || t.startsWith(l.Z5c.APPLICATION_STORE) || t.startsWith(l.Z5c.APPLICATION_LIBRARY) || t.startsWith(l.Z5c.MESSAGE_REQUESTS) || t.startsWith(l.Z5c.ACTIVITIES) || t.startsWith(l.Z5c.COLLECTIBLES_SHOP) || t.startsWith(l.Z5c.ACTIVITY);
    },
    format: e => s.format(e),
    formatPathWithQuery: (e, t) => s.format({
        pathname: e,
        query: o().pickBy(t)
    }),
    formatSearch: e => s.format({ query: o().pickBy(e) }),
    safeParseWithQuery(e) {
        try {
            return s.parse(e, !0);
        } catch (e) {
            return null;
        }
    },
    toURLSafe(e, t) {
        try {
            return new URL(e, t);
        } catch (e) {
            return null;
        }
    },
    makeUrl: function (e) {
        let t = (0, location.host);
        return ''.concat(location.protocol, '//').concat(t).concat(e);
    }
};
