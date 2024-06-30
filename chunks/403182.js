n.d(t, {
    Ng: function () {
        return T;
    },
    OC: function () {
        return N;
    },
    dg: function () {
        return g;
    },
    dp: function () {
        return h;
    },
    f3: function () {
        return m;
    },
    nA: function () {
        return S;
    },
    qF: function () {
        return f;
    },
    uV: function () {
        return I;
    },
    vY: function () {
        return A;
    }
}), n(47120);
var r = n(112456), i = n.n(r), a = n(392711), o = n.n(a), s = n(206744), l = n(948350), u = n(430824), c = n(594174), d = n(74538), _ = n(981631), E = n(474936);
function f(e, t) {
    return e instanceof File ? e : h(e.data, e.filename, t);
}
function h(e, t, r) {
    let i = n(643907);
    if (null == t && (t = 'unknown', 'type' in e)) {
        let n = i.extension(e.type);
        n && (t += '.'.concat(n));
    }
    return null == r && ('type' in e && (r = e.type), r = null != r ? r : i.lookup(t)), new File([e], t, { type: r });
}
let p = [
    {
        reType: /^image\/vnd.adobe.photoshop/,
        klass: 'photoshop'
    },
    {
        reType: /^image\/svg\+xml/,
        klass: 'webcode'
    },
    {
        reType: /^image\//,
        klass: 'image'
    },
    {
        reType: /^video\//,
        klass: 'video'
    },
    {
        reName: /\.pdf$/,
        klass: 'acrobat'
    },
    {
        reName: /\.ae/,
        klass: 'ae'
    },
    {
        reName: /\.sketch$/,
        klass: 'sketch'
    },
    {
        reName: /\.ai$/,
        klass: 'ai'
    },
    {
        reName: /\.(?:rar|zip|7z|tar|tar\.gz)$/,
        klass: 'archive'
    },
    {
        reName: /\.(?:c\+\+|cpp|cc|c|h|hpp|mm|m|json|js|rb|rake|py|asm|fs|pyc|dtd|cgi|bat|rss|java|graphml|idb|lua|o|gml|prl|sls|conf|cmake|make|sln|vbe|cxx|wbf|vbs|r|wml|php|bash|applescript|fcgi|yaml|ex|exs|sh|ml|actionscript)$/,
        klass: 'code'
    },
    {
        reName: /\.(?:txt|rtf|doc|docx|md|pages|ppt|pptx|pptm|key|log)$/,
        klass: 'document'
    },
    {
        reName: /\.(?:xls|xlsx|numbers|csv)$/,
        klass: 'spreadsheet'
    },
    {
        reName: /\.(?:html|xhtml|htm|js|xml|xls|xsd|css|styl)$/,
        klass: 'webcode'
    },
    {
        reName: /\.(?:mp3|ogg|wav|flac)$/,
        klass: 'audio'
    }
];
function m(e) {
    return I(e.name, e.type);
}
function I(e, t) {
    var n;
    e = null !== (n = null == e ? void 0 : e.toLowerCase()) && void 0 !== n ? n : '';
    let r = o().find(p, n => null != n.reType && null != t ? n.reType.test(t) : null != n.reName && '' !== e && n.reName.test(e));
    return null != r ? r.klass : 'unknown';
}
function T(e) {
    return i().filesize(e);
}
function g(e) {
    let t = c.default.getCurrentUser();
    s.Z.trackExposure({ location: 'de18ec_1' }), l.Z.trackExposure({ location: 'de18ec_2' });
    let n = d.ZP.getUserMaxFileSize(t);
    if (null == e)
        return n;
    let r = u.Z.getGuild(e);
    return Math.max(null != r ? E.HO[r.premiumTier].limits.fileSize : _.mBz, n);
}
function S(e, t) {
    let n = g(t);
    return Array.from(e).some(e => e.size > n);
}
function A(e) {
    return function (e) {
        let t = 0;
        for (let n of e)
            t += n.size;
        return t;
    }(e) > N();
}
function N() {
    let e = c.default.getCurrentUser();
    return null != e && e.isStaff() ? 524288000 : 524288000;
}
