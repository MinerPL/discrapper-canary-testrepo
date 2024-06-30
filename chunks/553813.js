var r, i = n(444675);
t = e.exports = E, r = 'object' == typeof i && i.env && i.env.NODE_DEBUG && /\bsemver\b/i.test(i.env.NODE_DEBUG) ? function () {
    var e = Array.prototype.slice.call(arguments, 0);
    e.unshift('SEMVER'), console.log.apply(console, e);
} : function () {
}, t.SEMVER_SPEC_VERSION = '2.0.0';
var a = Number.MAX_SAFE_INTEGER || 9007199254740991, o = t.re = [], s = t.src = [], l = t.tokens = {}, u = 0;
function c(e) {
    l[e] = u++;
}
c('NUMERICIDENTIFIER'), s[l.NUMERICIDENTIFIER] = '0|[1-9]\\d*', c('NUMERICIDENTIFIERLOOSE'), s[l.NUMERICIDENTIFIERLOOSE] = '[0-9]+', c('NONNUMERICIDENTIFIER'), s[l.NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*', c('MAINVERSION'), s[l.MAINVERSION] = '(' + s[l.NUMERICIDENTIFIER] + ')\\.(' + s[l.NUMERICIDENTIFIER] + ')\\.(' + s[l.NUMERICIDENTIFIER] + ')', c('MAINVERSIONLOOSE'), s[l.MAINVERSIONLOOSE] = '(' + s[l.NUMERICIDENTIFIERLOOSE] + ')\\.(' + s[l.NUMERICIDENTIFIERLOOSE] + ')\\.(' + s[l.NUMERICIDENTIFIERLOOSE] + ')', c('PRERELEASEIDENTIFIER'), s[l.PRERELEASEIDENTIFIER] = '(?:' + s[l.NUMERICIDENTIFIER] + '|' + s[l.NONNUMERICIDENTIFIER] + ')', c('PRERELEASEIDENTIFIERLOOSE'), s[l.PRERELEASEIDENTIFIERLOOSE] = '(?:' + s[l.NUMERICIDENTIFIERLOOSE] + '|' + s[l.NONNUMERICIDENTIFIER] + ')', c('PRERELEASE'), s[l.PRERELEASE] = '(?:-(' + s[l.PRERELEASEIDENTIFIER] + '(?:\\.' + s[l.PRERELEASEIDENTIFIER] + ')*))', c('PRERELEASELOOSE'), s[l.PRERELEASELOOSE] = '(?:-?(' + s[l.PRERELEASEIDENTIFIERLOOSE] + '(?:\\.' + s[l.PRERELEASEIDENTIFIERLOOSE] + ')*))', c('BUILDIDENTIFIER'), s[l.BUILDIDENTIFIER] = '[0-9A-Za-z-]+', c('BUILD'), s[l.BUILD] = '(?:\\+(' + s[l.BUILDIDENTIFIER] + '(?:\\.' + s[l.BUILDIDENTIFIER] + ')*))', c('FULL'), c('FULLPLAIN'), s[l.FULLPLAIN] = 'v?' + s[l.MAINVERSION] + s[l.PRERELEASE] + '?' + s[l.BUILD] + '?', s[l.FULL] = '^' + s[l.FULLPLAIN] + '$', c('LOOSEPLAIN'), s[l.LOOSEPLAIN] = '[v=\\s]*' + s[l.MAINVERSIONLOOSE] + s[l.PRERELEASELOOSE] + '?' + s[l.BUILD] + '?', c('LOOSE'), s[l.LOOSE] = '^' + s[l.LOOSEPLAIN] + '$', c('GTLT'), s[l.GTLT] = '((?:<|>)?=?)', c('XRANGEIDENTIFIERLOOSE'), s[l.XRANGEIDENTIFIERLOOSE] = s[l.NUMERICIDENTIFIERLOOSE] + '|x|X|\\*', c('XRANGEIDENTIFIER'), s[l.XRANGEIDENTIFIER] = s[l.NUMERICIDENTIFIER] + '|x|X|\\*', c('XRANGEPLAIN'), s[l.XRANGEPLAIN] = '[v=\\s]*(' + s[l.XRANGEIDENTIFIER] + ')(?:\\.(' + s[l.XRANGEIDENTIFIER] + ')(?:\\.(' + s[l.XRANGEIDENTIFIER] + ')(?:' + s[l.PRERELEASE] + ')?' + s[l.BUILD] + '?)?)?', c('XRANGEPLAINLOOSE'), s[l.XRANGEPLAINLOOSE] = '[v=\\s]*(' + s[l.XRANGEIDENTIFIERLOOSE] + ')(?:\\.(' + s[l.XRANGEIDENTIFIERLOOSE] + ')(?:\\.(' + s[l.XRANGEIDENTIFIERLOOSE] + ')(?:' + s[l.PRERELEASELOOSE] + ')?' + s[l.BUILD] + '?)?)?', c('XRANGE'), s[l.XRANGE] = '^' + s[l.GTLT] + '\\s*' + s[l.XRANGEPLAIN] + '$', c('XRANGELOOSE'), s[l.XRANGELOOSE] = '^' + s[l.GTLT] + '\\s*' + s[l.XRANGEPLAINLOOSE] + '$', c('COERCE'), s[l.COERCE] = '(^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])', c('COERCERTL'), o[l.COERCERTL] = RegExp(s[l.COERCE], 'g'), c('LONETILDE'), s[l.LONETILDE] = '(?:~>?)', c('TILDETRIM'), s[l.TILDETRIM] = '(\\s*)' + s[l.LONETILDE] + '\\s+', o[l.TILDETRIM] = RegExp(s[l.TILDETRIM], 'g');
c('TILDE'), s[l.TILDE] = '^' + s[l.LONETILDE] + s[l.XRANGEPLAIN] + '$', c('TILDELOOSE'), s[l.TILDELOOSE] = '^' + s[l.LONETILDE] + s[l.XRANGEPLAINLOOSE] + '$', c('LONECARET'), s[l.LONECARET] = '(?:\\^)', c('CARETTRIM'), s[l.CARETTRIM] = '(\\s*)' + s[l.LONECARET] + '\\s+', o[l.CARETTRIM] = RegExp(s[l.CARETTRIM], 'g');
c('CARET'), s[l.CARET] = '^' + s[l.LONECARET] + s[l.XRANGEPLAIN] + '$', c('CARETLOOSE'), s[l.CARETLOOSE] = '^' + s[l.LONECARET] + s[l.XRANGEPLAINLOOSE] + '$', c('COMPARATORLOOSE'), s[l.COMPARATORLOOSE] = '^' + s[l.GTLT] + '\\s*(' + s[l.LOOSEPLAIN] + ')$|^$', c('COMPARATOR'), s[l.COMPARATOR] = '^' + s[l.GTLT] + '\\s*(' + s[l.FULLPLAIN] + ')$|^$', c('COMPARATORTRIM'), s[l.COMPARATORTRIM] = '(\\s*)' + s[l.GTLT] + '\\s*(' + s[l.LOOSEPLAIN] + '|' + s[l.XRANGEPLAIN] + ')', o[l.COMPARATORTRIM] = RegExp(s[l.COMPARATORTRIM], 'g');
c('HYPHENRANGE'), s[l.HYPHENRANGE] = '^\\s*(' + s[l.XRANGEPLAIN] + ')\\s+-\\s+(' + s[l.XRANGEPLAIN] + ')\\s*$', c('HYPHENRANGELOOSE'), s[l.HYPHENRANGELOOSE] = '^\\s*(' + s[l.XRANGEPLAINLOOSE] + ')\\s+-\\s+(' + s[l.XRANGEPLAINLOOSE] + ')\\s*$', c('STAR'), s[l.STAR] = '(<|>)?=?\\s*\\*';
for (var d = 0; d < u; d++)
    r(d, s[d]), !o[d] && (o[d] = new RegExp(s[d]));
function _(e, t) {
    if ((!t || 'object' != typeof t) && (t = {
            loose: !!t,
            includePrerelease: !1
        }), e instanceof E)
        return e;
    if ('string' != typeof e || e.length > 256 || !(t.loose ? o[l.LOOSE] : o[l.FULL]).test(e))
        return null;
    try {
        return new E(e, t);
    } catch (e) {
        return null;
    }
}
t.parse = _, t.valid = function (e, t) {
    var n = _(e, t);
    return n ? n.version : null;
};
t.clean = function (e, t) {
    var n = _(e.trim().replace(/^[=v]+/, ''), t);
    return n ? n.version : null;
};
function E(e, t) {
    if ((!t || 'object' != typeof t) && (t = {
            loose: !!t,
            includePrerelease: !1
        }), e instanceof E) {
        if (e.loose === t.loose)
            return e;
        e = e.version;
    } else if ('string' != typeof e)
        throw TypeError('Invalid Version: ' + e);
    if (e.length > 256)
        throw TypeError('version is longer than 256 characters');
    if (!(this instanceof E))
        return new E(e, t);
    r('SemVer', e, t), this.options = t, this.loose = !!t.loose;
    var n = e.trim().match(t.loose ? o[l.LOOSE] : o[l.FULL]);
    if (!n)
        throw TypeError('Invalid Version: ' + e);
    if (this.raw = e, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > a || this.major < 0)
        throw TypeError('Invalid major version');
    if (this.minor > a || this.minor < 0)
        throw TypeError('Invalid minor version');
    if (this.patch > a || this.patch < 0)
        throw TypeError('Invalid patch version');
    n[4] ? this.prerelease = n[4].split('.').map(function (e) {
        if (/^[0-9]+$/.test(e)) {
            var t = +e;
            if (t >= 0 && t < a)
                return t;
        }
        return e;
    }) : this.prerelease = [], this.build = n[5] ? n[5].split('.') : [], this.format();
}
t.SemVer = E, E.prototype.format = function () {
    return this.version = this.major + '.' + this.minor + '.' + this.patch, this.prerelease.length && (this.version += '-' + this.prerelease.join('.')), this.version;
}, E.prototype.toString = function () {
    return this.version;
}, E.prototype.compare = function (e) {
    return r('SemVer.compare', this.version, this.options, e), !(e instanceof E) && (e = new E(e, this.options)), this.compareMain(e) || this.comparePre(e);
}, E.prototype.compareMain = function (e) {
    return !(e instanceof E) && (e = new E(e, this.options)), h(this.major, e.major) || h(this.minor, e.minor) || h(this.patch, e.patch);
}, E.prototype.comparePre = function (e) {
    if (!(e instanceof E) && (e = new E(e, this.options)), this.prerelease.length && !e.prerelease.length)
        return -1;
    if (!this.prerelease.length && e.prerelease.length)
        return 1;
    if (!this.prerelease.length && !e.prerelease.length)
        return 0;
    var t = 0;
    do {
        var n = this.prerelease[t], i = e.prerelease[t];
        if (r('prerelease compare', t, n, i), void 0 === n && void 0 === i)
            return 0;
        if (void 0 === i)
            return 1;
        else if (void 0 === n)
            return -1;
        else if (n === i)
            continue;
        else
            return h(n, i);
    } while (++t);
}, E.prototype.compareBuild = function (e) {
    !(e instanceof E) && (e = new E(e, this.options));
    var t = 0;
    do {
        var n = this.build[t], i = e.build[t];
        if (r('prerelease compare', t, n, i), void 0 === n && void 0 === i)
            return 0;
        if (void 0 === i)
            return 1;
        else if (void 0 === n)
            return -1;
        else if (n === i)
            continue;
        else
            return h(n, i);
    } while (++t);
}, E.prototype.inc = function (e, t) {
    switch (e) {
    case 'premajor':
        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc('pre', t);
        break;
    case 'preminor':
        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc('pre', t);
        break;
    case 'prepatch':
        this.prerelease.length = 0, this.inc('patch', t), this.inc('pre', t);
        break;
    case 'prerelease':
        0 === this.prerelease.length && this.inc('patch', t), this.inc('pre', t);
        break;
    case 'major':
        (0 !== this.minor || 0 !== this.patch || 0 === this.prerelease.length) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
        break;
    case 'minor':
        (0 !== this.patch || 0 === this.prerelease.length) && this.minor++, this.patch = 0, this.prerelease = [];
        break;
    case 'patch':
        0 === this.prerelease.length && this.patch++, this.prerelease = [];
        break;
    case 'pre':
        if (0 === this.prerelease.length)
            this.prerelease = [0];
        else {
            for (var n = this.prerelease.length; --n >= 0;)
                'number' == typeof this.prerelease[n] && (this.prerelease[n]++, n = -2);
            -1 === n && this.prerelease.push(0);
        }
        t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [
            t,
            0
        ]) : this.prerelease = [
            t,
            0
        ]);
        break;
    default:
        throw Error('invalid increment argument: ' + e);
    }
    return this.format(), this.raw = this.version, this;
}, t.inc = function (e, t, n, r) {
    'string' == typeof n && (r = n, n = void 0);
    try {
        return new E(e, n).inc(t, r).version;
    } catch (e) {
        return null;
    }
};
t.diff = function (e, t) {
    if (T(e, t))
        return null;
    var n = _(e), r = _(t), i = '';
    if (n.prerelease.length || r.prerelease.length) {
        i = 'pre';
        var a = 'prerelease';
    }
    for (var o in n)
        if (('major' === o || 'minor' === o || 'patch' === o) && n[o] !== r[o])
            return i + o;
    return a;
};
t.compareIdentifiers = h;
var f = /^[0-9]+$/;
function h(e, t) {
    var n = f.test(e), r = f.test(t);
    return n && r && (e = +e, t = +t), e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1;
}
t.rcompareIdentifiers = function (e, t) {
    return h(t, e);
};
t.major = function (e, t) {
    return new E(e, t).major;
};
t.minor = function (e, t) {
    return new E(e, t).minor;
};
t.patch = function (e, t) {
    return new E(e, t).patch;
};
function p(e, t, n) {
    return new E(e, n).compare(new E(t, n));
}
t.compare = p, t.compareLoose = function (e, t) {
    return p(e, t, !0);
};
t.compareBuild = function (e, t, n) {
    var r = new E(e, n), i = new E(t, n);
    return r.compare(i) || r.compareBuild(i);
};
t.rcompare = function (e, t, n) {
    return p(t, e, n);
};
t.sort = function (e, n) {
    return e.sort(function (e, r) {
        return t.compareBuild(e, r, n);
    });
};
t.rsort = function (e, n) {
    return e.sort(function (e, r) {
        return t.compareBuild(r, e, n);
    });
};
function m(e, t, n) {
    return p(e, t, n) > 0;
}
function I(e, t, n) {
    return 0 > p(e, t, n);
}
function T(e, t, n) {
    return 0 === p(e, t, n);
}
function g(e, t, n) {
    return 0 !== p(e, t, n);
}
function S(e, t, n) {
    return p(e, t, n) >= 0;
}
function A(e, t, n) {
    return 0 >= p(e, t, n);
}
function N(e, t, n, r) {
    switch (t) {
    case '===':
        return 'object' == typeof e && (e = e.version), 'object' == typeof n && (n = n.version), e === n;
    case '!==':
        return 'object' == typeof e && (e = e.version), 'object' == typeof n && (n = n.version), e !== n;
    case '':
    case '=':
    case '==':
        return T(e, n, r);
    case '!=':
        return g(e, n, r);
    case '>':
        return m(e, n, r);
    case '>=':
        return S(e, n, r);
    case '<':
        return I(e, n, r);
    case '<=':
        return A(e, n, r);
    default:
        throw TypeError('Invalid operator: ' + t);
    }
}
function v(e, t) {
    if ((!t || 'object' != typeof t) && (t = {
            loose: !!t,
            includePrerelease: !1
        }), e instanceof v) {
        if (!!t.loose === e.loose)
            return e;
        e = e.value;
    }
    if (!(this instanceof v))
        return new v(e, t);
    r('comparator', e, t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === O ? this.value = '' : this.value = this.operator + this.semver.version, r('comp', this);
}
t.gt = m, t.lt = I, t.eq = T, t.neq = g, t.gte = S, t.lte = A, t.cmp = N, t.Comparator = v;
var O = {};
function R(e, t) {
    if ((!t || 'object' != typeof t) && (t = {
            loose: !!t,
            includePrerelease: !1
        }), e instanceof R)
        return !!t.loose === e.loose && !!t.includePrerelease === e.includePrerelease ? e : new R(e.raw, t);
    if (e instanceof v)
        return new R(e.value, t);
    if (!(this instanceof R))
        return new R(e, t);
    if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this.raw = e, this.set = e.split(/\s*\|\|\s*/).map(function (e) {
            return this.parseRange(e.trim());
        }, this).filter(function (e) {
            return e.length;
        }), !this.set.length)
        throw TypeError('Invalid SemVer Range: ' + e);
    this.format();
}
function C(e, t) {
    for (var n = !0, r = e.slice(), i = r.pop(); n && r.length;)
        n = r.every(function (e) {
            return i.intersects(e, t);
        }), i = r.pop();
    return n;
}
v.prototype.parse = function (e) {
    var t = this.options.loose ? o[l.COMPARATORLOOSE] : o[l.COMPARATOR], n = e.match(t);
    if (!n)
        throw TypeError('Invalid comparator: ' + e);
    this.operator = void 0 !== n[1] ? n[1] : '', '=' === this.operator && (this.operator = ''), n[2] ? this.semver = new E(n[2], this.options.loose) : this.semver = O;
}, v.prototype.toString = function () {
    return this.value;
}, v.prototype.test = function (e) {
    if (r('Comparator.test', e, this.options.loose), this.semver === O || e === O)
        return !0;
    if ('string' == typeof e)
        try {
            e = new E(e, this.options);
        } catch (e) {
            return !1;
        }
    return N(e, this.operator, this.semver, this.options);
}, v.prototype.intersects = function (e, t) {
    if (!(e instanceof v))
        throw TypeError('a Comparator is required');
    if ((!t || 'object' != typeof t) && (t = {
            loose: !!t,
            includePrerelease: !1
        }), '' === this.operator)
        return '' === this.value || (n = new R(e.value, t), L(this.value, n, t));
    if ('' === e.operator)
        return '' === e.value || (n = new R(this.value, t), L(e.semver, n, t));
    var n, r = ('>=' === this.operator || '>' === this.operator) && ('>=' === e.operator || '>' === e.operator), i = ('<=' === this.operator || '<' === this.operator) && ('<=' === e.operator || '<' === e.operator), a = this.semver.version === e.semver.version, o = ('>=' === this.operator || '<=' === this.operator) && ('>=' === e.operator || '<=' === e.operator), s = N(this.semver, '<', e.semver, t) && ('>=' === this.operator || '>' === this.operator) && ('<=' === e.operator || '<' === e.operator), l = N(this.semver, '>', e.semver, t) && ('<=' === this.operator || '<' === this.operator) && ('>=' === e.operator || '>' === e.operator);
    return r || i || a && o || s || l;
}, t.Range = R, R.prototype.format = function () {
    return this.range = this.set.map(function (e) {
        return e.join(' ').trim();
    }).join('||').trim(), this.range;
}, R.prototype.toString = function () {
    return this.range;
}, R.prototype.parseRange = function (e) {
    var t = this.options.loose;
    e = e.trim();
    var n = t ? o[l.HYPHENRANGELOOSE] : o[l.HYPHENRANGE];
    e = e.replace(n, D), r('hyphen replace', e), e = e.replace(o[l.COMPARATORTRIM], '$1$2$3'), r('comparator trim', e, o[l.COMPARATORTRIM]), e = (e = (e = e.replace(o[l.TILDETRIM], '$1~')).replace(o[l.CARETTRIM], '$1^')).split(/\s+/).join(' ');
    var i = t ? o[l.COMPARATORLOOSE] : o[l.COMPARATOR], a = e.split(' ').map(function (e) {
            return function (e, t) {
                return r('comp', e, t), e = function (e, t) {
                    return e.trim().split(/\s+/).map(function (e) {
                        return function (e, t) {
                            r('caret', e, t);
                            var n = t.loose ? o[l.CARETLOOSE] : o[l.CARET];
                            return e.replace(n, function (t, n, i, a, o) {
                                var s;
                                return r('caret', e, t, n, i, a, o), y(n) ? s = '' : y(i) ? s = '>=' + n + '.0.0 <' + (+n + 1) + '.0.0' : y(a) ? s = '0' === n ? '>=' + n + '.' + i + '.0 <' + n + '.' + (+i + 1) + '.0' : '>=' + n + '.' + i + '.0 <' + (+n + 1) + '.0.0' : o ? (r('replaceCaret pr', o), s = '0' === n ? '0' === i ? '>=' + n + '.' + i + '.' + a + '-' + o + ' <' + n + '.' + i + '.' + (+a + 1) : '>=' + n + '.' + i + '.' + a + '-' + o + ' <' + n + '.' + (+i + 1) + '.0' : '>=' + n + '.' + i + '.' + a + '-' + o + ' <' + (+n + 1) + '.0.0') : (r('no pr'), s = '0' === n ? '0' === i ? '>=' + n + '.' + i + '.' + a + ' <' + n + '.' + i + '.' + (+a + 1) : '>=' + n + '.' + i + '.' + a + ' <' + n + '.' + (+i + 1) + '.0' : '>=' + n + '.' + i + '.' + a + ' <' + (+n + 1) + '.0.0'), r('caret return', s), s;
                            });
                        }(e, t);
                    }).join(' ');
                }(e, t), r('caret', e), e = function (e, t) {
                    return e.trim().split(/\s+/).map(function (e) {
                        return function (e, t) {
                            var n = t.loose ? o[l.TILDELOOSE] : o[l.TILDE];
                            return e.replace(n, function (t, n, i, a, o) {
                                var s;
                                return r('tilde', e, t, n, i, a, o), y(n) ? s = '' : y(i) ? s = '>=' + n + '.0.0 <' + (+n + 1) + '.0.0' : y(a) ? s = '>=' + n + '.' + i + '.0 <' + n + '.' + (+i + 1) + '.0' : o ? (r('replaceTilde pr', o), s = '>=' + n + '.' + i + '.' + a + '-' + o + ' <' + n + '.' + (+i + 1) + '.0') : s = '>=' + n + '.' + i + '.' + a + ' <' + n + '.' + (+i + 1) + '.0', r('tilde return', s), s;
                            });
                        }(e, t);
                    }).join(' ');
                }(e, t), r('tildes', e), e = function (e, t) {
                    return r('replaceXRanges', e, t), e.split(/\s+/).map(function (e) {
                        return function (e, t) {
                            e = e.trim();
                            var n = t.loose ? o[l.XRANGELOOSE] : o[l.XRANGE];
                            return e.replace(n, function (n, i, a, o, s, l) {
                                r('xRange', e, n, i, a, o, s, l);
                                var u = y(a), c = u || y(o), d = c || y(s);
                                return '=' === i && d && (i = ''), l = t.includePrerelease ? '-0' : '', u ? n = '>' === i || '<' === i ? '<0.0.0-0' : '*' : i && d ? (c && (o = 0), s = 0, '>' === i ? (i = '>=', c ? (a = +a + 1, o = 0) : o = +o + 1, s = 0) : '<=' === i && (i = '<', c ? a = +a + 1 : o = +o + 1), n = i + a + '.' + o + '.' + s + l) : c ? n = '>=' + a + '.0.0' + l + ' <' + (+a + 1) + '.0.0' + l : d && (n = '>=' + a + '.' + o + '.0' + l + ' <' + a + '.' + (+o + 1) + '.0' + l), r('xRange return', n), n;
                            });
                        }(e, t);
                    }).join(' ');
                }(e, t), r('xrange', e), e = function (e, t) {
                    return r('replaceStars', e, t), e.trim().replace(o[l.STAR], '');
                }(e, t), r('stars', e), e;
            }(e, this.options);
        }, this).join(' ').split(/\s+/);
    return this.options.loose && (a = a.filter(function (e) {
        return !!e.match(i);
    })), a = a.map(function (e) {
        return new v(e, this.options);
    }, this);
}, R.prototype.intersects = function (e, t) {
    if (!(e instanceof R))
        throw TypeError('a Range is required');
    return this.set.some(function (n) {
        return C(n, t) && e.set.some(function (e) {
            return C(e, t) && n.every(function (n) {
                return e.every(function (e) {
                    return n.intersects(e, t);
                });
            });
        });
    });
}, t.toComparators = function (e, t) {
    return new R(e, t).set.map(function (e) {
        return e.map(function (e) {
            return e.value;
        }).join(' ').trim().split(' ');
    });
};
function y(e) {
    return !e || 'x' === e.toLowerCase() || '*' === e;
}
function D(e, t, n, r, i, a, o, s, l, u, c, d, _) {
    return t = y(n) ? '' : y(r) ? '>=' + n + '.0.0' : y(i) ? '>=' + n + '.' + r + '.0' : '>=' + t, (t + ' ' + (s = y(l) ? '' : y(u) ? '<' + (+l + 1) + '.0.0' : y(c) ? '<' + l + '.' + (+u + 1) + '.0' : d ? '<=' + l + '.' + u + '.' + c + '-' + d : '<=' + s)).trim();
}
R.prototype.test = function (e) {
    if (!e)
        return !1;
    if ('string' == typeof e)
        try {
            e = new E(e, this.options);
        } catch (e) {
            return !1;
        }
    for (var t = 0; t < this.set.length; t++)
        if (function (e, t, n) {
                for (var i = 0; i < e.length; i++)
                    if (!e[i].test(t))
                        return !1;
                if (t.prerelease.length && !n.includePrerelease) {
                    for (i = 0; i < e.length; i++) {
                        if (r(e[i].semver), e[i].semver !== O) {
                            if (e[i].semver.prerelease.length > 0) {
                                var a = e[i].semver;
                                if (a.major === t.major && a.minor === t.minor && a.patch === t.patch)
                                    return !0;
                            }
                        }
                    }
                    return !1;
                }
                return !0;
            }(this.set[t], e, this.options))
            return !0;
    return !1;
};
function L(e, t, n) {
    try {
        t = new R(t, n);
    } catch (e) {
        return !1;
    }
    return t.test(e);
}
t.satisfies = L, t.maxSatisfying = function (e, t, n) {
    var r = null, i = null;
    try {
        var a = new R(t, n);
    } catch (e) {
        return null;
    }
    return e.forEach(function (e) {
        a.test(e) && (!r || -1 === i.compare(e)) && (i = new E(r = e, n));
    }), r;
};
t.minSatisfying = function (e, t, n) {
    var r = null, i = null;
    try {
        var a = new R(t, n);
    } catch (e) {
        return null;
    }
    return e.forEach(function (e) {
        a.test(e) && (!r || 1 === i.compare(e)) && (i = new E(r = e, n));
    }), r;
};
t.minVersion = function (e, t) {
    e = new R(e, t);
    var n = new E('0.0.0');
    if (e.test(n))
        return n;
    if (n = new E('0.0.0-0'), e.test(n))
        return n;
    n = null;
    for (var r = 0; r < e.set.length; ++r)
        e.set[r].forEach(function (e) {
            var t = new E(e.semver.version);
            switch (e.operator) {
            case '>':
                0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), t.raw = t.format();
            case '':
            case '>=':
                (!n || m(n, t)) && (n = t);
                break;
            case '<':
            case '<=':
                break;
            default:
                throw Error('Unexpected operation: ' + e.operator);
            }
        });
    return n && e.test(n) ? n : null;
};
t.validRange = function (e, t) {
    try {
        return new R(e, t).range || '*';
    } catch (e) {
        return null;
    }
};
t.ltr = function (e, t, n) {
    return b(e, t, '<', n);
};
t.gtr = function (e, t, n) {
    return b(e, t, '>', n);
};
function b(e, t, n, r) {
    switch (e = new E(e, r), t = new R(t, r), n) {
    case '>':
        i = m, a = A, o = I, s = '>', l = '>=';
        break;
    case '<':
        i = I, a = S, o = m, s = '<', l = '<=';
        break;
    default:
        throw TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (L(e, t, r))
        return !1;
    for (var i, a, o, s, l, u = 0; u < t.set.length; ++u) {
        var c = t.set[u], d = null, _ = null;
        if (c.forEach(function (e) {
                e.semver === O && (e = new v('>=0.0.0')), d = d || e, _ = _ || e, i(e.semver, d.semver, r) ? d = e : o(e.semver, _.semver, r) && (_ = e);
            }), d.operator === s || d.operator === l)
            return !1;
        if ((!_.operator || _.operator === s) && a(e, _.semver))
            return !1;
        if (_.operator === l && o(e, _.semver))
            return !1;
    }
    return !0;
}
t.outside = b, t.prerelease = function (e, t) {
    var n = _(e, t);
    return n && n.prerelease.length ? n.prerelease : null;
};
t.intersects = function (e, t, n) {
    return e = new R(e, n), t = new R(t, n), e.intersects(t);
};
t.coerce = function (e, t) {
    if (e instanceof E)
        return e;
    if ('number' == typeof e && (e = String(e)), 'string' != typeof e)
        return null;
    var n, r = null;
    if ((t = t || {}).rtl) {
        for (; (n = o[l.COERCERTL].exec(e)) && (!r || r.index + r[0].length !== e.length);)
            (!r || n.index + n[0].length !== r.index + r[0].length) && (r = n), o[l.COERCERTL].lastIndex = n.index + n[1].length + n[2].length;
        o[l.COERCERTL].lastIndex = -1;
    } else
        r = e.match(o[l.COERCE]);
    return null === r ? null : _(r[2] + '.' + (r[3] || '0') + '.' + (r[4] || '0'), t);
};
