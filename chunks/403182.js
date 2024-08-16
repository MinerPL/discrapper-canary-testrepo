n.d(t, {
    Ng: function () {
        return g;
    },
    OC: function () {
        return v;
    },
    dg: function () {
        return S;
    },
    dp: function () {
        return p;
    },
    f3: function () {
        return I;
    },
    nA: function () {
        return A;
    },
    qF: function () {
        return h;
    },
    uV: function () {
        return T;
    },
    vY: function () {
        return N;
    }
}),
    n(47120);
var r = n(112456),
    i = n.n(r),
    a = n(392711),
    s = n.n(a),
    o = n(206744),
    l = n(948350),
    u = n(430824),
    c = n(594174),
    d = n(380684),
    _ = n(74538),
    E = n(981631),
    f = n(474936);
function h(e, t) {
    return e instanceof File ? e : p(e.data, e.filename, t);
}
function p(e, t, r) {
    let i = n(643907);
    if (null == t && ((t = 'unknown'), 'type' in e)) {
        let n = i.extension(e.type);
        n && (t += '.'.concat(n));
    }
    return null == r && ('type' in e && (r = e.type), (r = null != r ? r : i.lookup(t))), new File([e], t, { type: r });
}
let m = [
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
function I(e) {
    return T(e.name, e.type);
}
function T(e, t) {
    var n;
    e = null !== (n = null == e ? void 0 : e.toLowerCase()) && void 0 !== n ? n : '';
    let r = s().find(m, (n) => (null != n.reType && null != t ? n.reType.test(t) : null != n.reName && '' !== e && n.reName.test(e)));
    return null != r ? r.klass : 'unknown';
}
function g(e) {
    return i().filesize(e);
}
function S(e) {
    let t = c.default.getCurrentUser();
    o.Z.trackExposure({ location: 'de18ec_1' }), l.Z.trackExposure({ location: 'de18ec_2' });
    let n = _.ZP.getUserMaxFileSize(t);
    if (null == e) return n;
    let r = u.Z.getGuild(e),
        i = null != r ? f.HO[r.premiumTier].limits.fileSize : E.mBz;
    return (0, d.XS)() && null != r && r.premiumTier < 2 && n < i ? n : Math.max(i, n);
}
function A(e, t) {
    let n = S(t);
    return Array.from(e).some((e) => e.size > n);
}
function N(e) {
    return (
        (function (e) {
            let t = 0;
            for (let n of e) t += n.size;
            return t;
        })(e) > v()
    );
}
function v() {
    let e = c.default.getCurrentUser();
    return null != e && e.isStaff() ? ((0, d.Xv)() ? 1073741824 : 524288000) : (0, d.Xv)() ? 1073741824 : 524288000;
}
