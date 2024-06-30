var r = n(201694).forEach, i = n(864483), a = n(10968), o = n(525185), s = n(498031), l = n(763160), u = n(117417), c = n(775548), d = n(656082), _ = n(302366), E = n(78687);
function f(e) {
    return Array.isArray(e) || void 0 !== e.length;
}
function h(e) {
    if (Array.isArray(e))
        return e;
    var t = [];
    return r(e, function (e) {
        t.push(e);
    }), t;
}
function p(e) {
    return e && 1 === e.nodeType;
}
function m(e, t, n) {
    var r = e[t];
    return null == r && void 0 !== n ? n : r;
}
e.exports = function (e) {
    if ((e = e || {}).idHandler)
        t = {
            get: function (t) {
                return e.idHandler.get(t, !0);
            },
            set: e.idHandler.set
        };
    else {
        var t, n;
        t = s({
            idGenerator: o(),
            stateHandler: d
        });
    }
    var I = e.reporter;
    !I && (I = l(!1 === I));
    var T = m(e, 'batchProcessor', c({ reporter: I })), g = {};
    g.callOnAdd = !!m(e, 'callOnAdd', !0), g.debug = !!m(e, 'debug', !1);
    var S = a(t), A = i({ stateHandler: d }), N = m(e, 'strategy', 'object'), v = m(e, 'important', !1), O = {
            reporter: I,
            batchProcessor: T,
            stateHandler: d,
            idHandler: t,
            important: v
        };
    if ('scroll' === N && (u.isLegacyOpera() ? (I.warn('Scroll strategy is not supported on legacy Opera. Changing to object strategy.'), N = 'object') : u.isIE(9) && (I.warn('Scroll strategy is not supported on IE9. Changing to object strategy.'), N = 'object')), 'scroll' === N)
        n = E(O);
    else if ('object' === N)
        n = _(O);
    else
        throw Error('Invalid strategy name: ' + N);
    var R = {};
    return {
        listenTo: function (e, i, a) {
            function o(e) {
                r(S.get(e), function (t) {
                    t(e);
                });
            }
            function s(e, t, n) {
                S.add(t, n), e && n(t);
            }
            if (!a && (a = i, i = e, e = {}), !i)
                throw Error('At least one element required.');
            if (!a)
                throw Error('Listener required.');
            if (p(i))
                i = [i];
            else {
                if (!f(i))
                    return I.error('Invalid arguments. Must be a DOM element or a collection of DOM elements.');
                i = h(i);
            }
            var l = 0, u = m(e, 'callOnAdd', g.callOnAdd), c = m(e, 'onReady', function () {
                }), _ = m(e, 'debug', g.debug);
            r(i, function (e) {
                !d.getState(e) && (d.initState(e), t.set(e));
                var E = t.get(e);
                if (_ && I.log('Attaching listener to element', E, e), !A.isDetectable(e)) {
                    if (_ && I.log(E, 'Not detectable.'), A.isBusy(e)) {
                        _ && I.log(E, 'System busy making it detectable'), s(u, e, a), R[E] = R[E] || [], R[E].push(function () {
                            ++l === i.length && c();
                        });
                        return;
                    }
                    return _ && I.log(E, 'Making detectable...'), A.markBusy(e, !0), n.makeDetectable({
                        debug: _,
                        important: v
                    }, e, function (e) {
                        if (_ && I.log(E, 'onElementDetectable'), d.getState(e)) {
                            A.markAsDetectable(e), A.markBusy(e, !1), n.addListener(e, o), s(u, e, a);
                            var t = d.getState(e);
                            if (t && t.startSize) {
                                var f = e.offsetWidth, h = e.offsetHeight;
                                (t.startSize.width !== f || t.startSize.height !== h) && o(e);
                            }
                            R[E] && r(R[E], function (e) {
                                e();
                            });
                        } else
                            _ && I.log(E, 'Element uninstalled before being detectable.');
                        delete R[E], ++l === i.length && c();
                    });
                }
                _ && I.log(E, 'Already detecable, adding listener.'), s(u, e, a), l++;
            }), l === i.length && c();
        },
        removeListener: S.removeListener,
        removeAllListeners: S.removeAllListeners,
        uninstall: function (e) {
            if (!e)
                return I.error('At least one element is required.');
            if (p(e))
                e = [e];
            else {
                if (!f(e))
                    return I.error('Invalid arguments. Must be a DOM element or a collection of DOM elements.');
                e = h(e);
            }
            r(e, function (e) {
                S.removeAllListeners(e), n.uninstall(e), d.cleanState(e);
            });
        },
        initDocument: function (e) {
            n.initDocument && n.initDocument(e);
        }
    };
};
