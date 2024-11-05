n.d(t, {
    Cb: function () {
        return r;
    },
    Hv: function () {
        return _;
    },
    JD: function () {
        return d;
    },
    VY: function () {
        return c;
    },
    y_: function () {
        return f;
    },
    ym: function () {
        return u;
    }
}),
    n(789020);
var r,
    i,
    a = n(406432),
    s = n(630388),
    o = n(591759),
    l = n(981631);
(i = r || (r = {}))[(i.EXPLICIT = 1)] = 'EXPLICIT';
function u(e) {
    var t;
    return {
        url: e.url,
        proxyUrl: e.proxy_url,
        height: e.height,
        width: e.width,
        placeholder: e.placeholder,
        placeholderVersion: e.placeholder_version,
        contentType: e.content_type,
        contentScanMetadata:
            null != e.content_scan_metadata
                ? {
                      version: (t = e.content_scan_metadata).version,
                      flags: t.flags
                  }
                : void 0,
        srcIsAnimated: !1
    };
}
function c(e) {
    var t, n, r, i, a;
    let o = 0;
    return (
        (0, s.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, l.J0y.CONTAINS_EXPLICIT_MEDIA) && (o += 1),
        {
            url: e.url,
            proxyUrl: e.proxy_url,
            height: null !== (n = e.height) && void 0 !== n ? n : 0,
            width: null !== (r = e.width) && void 0 !== r ? r : 0,
            contentType: null !== (i = e.content_type) && void 0 !== i ? i : 'unknown/unknown',
            placeholder: e.placeholder,
            placeholderVersion: e.placeholder_version,
            contentScanMetadata:
                null == e.content_scan_version
                    ? void 0
                    : {
                          version: e.content_scan_version,
                          flags: o
                      },
            srcIsAnimated: (0, s.yE)(null !== (a = e.flags) && void 0 !== a ? a : 0, l.J0y.IS_ANIMATED)
        }
    );
}
function d(e, t) {
    var n;
    return {
        ...c(e),
        type: ((n = e), (0, a.CO)(n.filename) ? 'IMAGE' : (0, a.NU)(n.filename) ? 'VIDEO' : 'INVALID'),
        sourceMetadata: {
            message: t,
            identifier: {
                type: 'attachment',
                attachmentId: e.id
            }
        }
    };
}
function f(e) {
    var t;
    return {
        ...e,
        type: ((t = e), (0, a.tw)(t.contentType) ? 'IMAGE' : (0, a.X2)(t.contentType) && null != t.proxyUrl && null != o.Z.toURLSafe(t.proxyUrl) ? 'VIDEO' : 'INVALID')
    };
}
function _(e, t, n) {
    return {
        type: n,
        url: e.url,
        proxyUrl: e.proxyURL,
        width: e.width,
        height: e.height,
        placeholder: e.placeholder,
        placeholderVersion: e.placeholderVersion,
        sourceMetadata: t
    };
}
