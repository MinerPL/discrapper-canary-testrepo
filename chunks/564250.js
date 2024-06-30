var r = n(505388), i = Object.prototype.hasOwnProperty, a = Array.isArray, o = {
        allowDots: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: 'utf-8',
        charsetSentinel: !1,
        comma: !1,
        decoder: r.decode,
        delimiter: '&',
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1000,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1
    }, s = function (e, t) {
        return e && 'string' == typeof e && t.comma && e.indexOf(',') > -1 ? e.split(',') : e;
    }, l = function (e, t) {
        var n = { __proto__: null }, l = t.ignoreQueryPrefix ? e.replace(/^\?/, '') : e, u = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, c = l.split(t.delimiter, u), d = -1, _ = t.charset;
        if (t.charsetSentinel)
            for (E = 0; E < c.length; ++E)
                0 === c[E].indexOf('utf8=') && ('utf8=%E2%9C%93' === c[E] ? _ = 'utf-8' : 'utf8=%26%2310003%3B' === c[E] && (_ = 'iso-8859-1'), d = E, E = c.length);
        for (E = 0; E < c.length; ++E) {
            if (E !== d) {
                var E, f, h, p = c[E], m = p.indexOf(']='), I = -1 === m ? p.indexOf('=') : m + 1;
                if (-1 === I ? (f = t.decoder(p, o.decoder, _, 'key'), h = t.strictNullHandling ? null : '') : (f = t.decoder(p.slice(0, I), o.decoder, _, 'key'), h = r.maybeMap(s(p.slice(I + 1), t), function (e) {
                        return t.decoder(e, o.decoder, _, 'value');
                    })), h && t.interpretNumericEntities && 'iso-8859-1' === _)
                    h = h.replace(/&#(\d+);/g, function (e, t) {
                        return String.fromCharCode(parseInt(t, 10));
                    });
                p.indexOf('[]=') > -1 && (h = a(h) ? [h] : h), i.call(n, f) ? n[f] = r.combine(n[f], h) : n[f] = h;
            }
        }
        return n;
    }, u = function (e, t, n, r) {
        for (var i = r ? t : s(t, n), a = e.length - 1; a >= 0; --a) {
            var o, l = e[a];
            if ('[]' === l && n.parseArrays)
                o = [].concat(i);
            else {
                o = n.plainObjects ? Object.create(null) : {};
                var u = '[' === l.charAt(0) && ']' === l.charAt(l.length - 1) ? l.slice(1, -1) : l, c = parseInt(u, 10);
                n.parseArrays || '' !== u ? !isNaN(c) && l !== u && String(c) === u && c >= 0 && n.parseArrays && c <= n.arrayLimit ? (o = [])[c] = i : '__proto__' !== u && (o[u] = i) : o = { 0: i };
            }
            i = o;
        }
        return i;
    }, c = function (e, t, n, r) {
        if (!!e) {
            var a = n.allowDots ? e.replace(/\.([^.[]+)/g, '[$1]') : e, o = /(\[[^[\]]*])/g, s = n.depth > 0 && /(\[[^[\]]*])/.exec(a), l = s ? a.slice(0, s.index) : a, c = [];
            if (l) {
                if (!n.plainObjects && i.call(Object.prototype, l) && !n.allowPrototypes)
                    return;
                c.push(l);
            }
            for (var d = 0; n.depth > 0 && null !== (s = o.exec(a)) && d < n.depth;) {
                if (d += 1, !n.plainObjects && i.call(Object.prototype, s[1].slice(1, -1)) && !n.allowPrototypes)
                    return;
                c.push(s[1]);
            }
            return s && c.push('[' + a.slice(s.index) + ']'), u(c, t, n, r);
        }
    }, d = function (e) {
        if (!e)
            return o;
        if (null !== e.decoder && void 0 !== e.decoder && 'function' != typeof e.decoder)
            throw TypeError('Decoder has to be a function.');
        if (void 0 !== e.charset && 'utf-8' !== e.charset && 'iso-8859-1' !== e.charset)
            throw TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
        var t = void 0 === e.charset ? o.charset : e.charset;
        return {
            allowDots: void 0 === e.allowDots ? o.allowDots : !!e.allowDots,
            allowPrototypes: 'boolean' == typeof e.allowPrototypes ? e.allowPrototypes : o.allowPrototypes,
            allowSparse: 'boolean' == typeof e.allowSparse ? e.allowSparse : o.allowSparse,
            arrayLimit: 'number' == typeof e.arrayLimit ? e.arrayLimit : o.arrayLimit,
            charset: t,
            charsetSentinel: 'boolean' == typeof e.charsetSentinel ? e.charsetSentinel : o.charsetSentinel,
            comma: 'boolean' == typeof e.comma ? e.comma : o.comma,
            decoder: 'function' == typeof e.decoder ? e.decoder : o.decoder,
            delimiter: 'string' == typeof e.delimiter || r.isRegExp(e.delimiter) ? e.delimiter : o.delimiter,
            depth: 'number' == typeof e.depth || !1 === e.depth ? +e.depth : o.depth,
            ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
            interpretNumericEntities: 'boolean' == typeof e.interpretNumericEntities ? e.interpretNumericEntities : o.interpretNumericEntities,
            parameterLimit: 'number' == typeof e.parameterLimit ? e.parameterLimit : o.parameterLimit,
            parseArrays: !1 !== e.parseArrays,
            plainObjects: 'boolean' == typeof e.plainObjects ? e.plainObjects : o.plainObjects,
            strictNullHandling: 'boolean' == typeof e.strictNullHandling ? e.strictNullHandling : o.strictNullHandling
        };
    };
e.exports = function (e, t) {
    var n = d(t);
    if ('' === e || null == e)
        return n.plainObjects ? Object.create(null) : {};
    for (var i = 'string' == typeof e ? l(e, n) : e, a = n.plainObjects ? Object.create(null) : {}, o = Object.keys(i), s = 0; s < o.length; ++s) {
        var u = o[s], _ = c(u, i[u], n, 'string' == typeof e);
        a = r.merge(a, _, n);
    }
    return !0 === n.allowSparse ? a : r.compact(a);
};
