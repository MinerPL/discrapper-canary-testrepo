var r, i;
n.d(t, {
    P: function () {
        return l;
    }
}), n(47120), n(653041), (i = r || (r = {}))[i.Unknown = 0] = 'Unknown', i[i.Loaded = 1] = 'Loaded', i[i.NotFound = 2] = 'NotFound';
let a = 0, o = null;
function l(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    try {
        let n = function (e) {
            if (2 === a)
                return null;
            0 === a && !function (e) {
                let t = e;
                for (; null != t && t !== document.body;) {
                    for (let t of Object.keys(e))
                        if (t.startsWith('__reactFiber$')) {
                            o = t, a = 1;
                            return;
                        }
                    t = t.parentElement;
                }
                null == o && (a = 2);
            }(e);
            let t = o, n = e;
            for (; null != n && n !== document.body;) {
                if (t in n)
                    return n[t];
                n = n.parentElement;
            }
            return null;
        }(e);
        if (null != n)
            return function (e, t) {
                let n = [], r = e;
                for (; null != r;) {
                    var i, a;
                    let e = null == r ? void 0 : null === (i = r._debugSource) || void 0 === i ? void 0 : i.fileName, o = null == r ? void 0 : null === (a = r._debugSource) || void 0 === a ? void 0 : a.lineNumber;
                    if (null != e && null != o) {
                        let r = ''.concat(e, ':').concat(o);
                        if (t) {
                            let e = r.split('/discord/');
                            0 !== e.length && n.push(e[e.length - 1]);
                        } else
                            n.push(r);
                    }
                    r = null == r ? void 0 : r._debugOwner;
                }
                return n;
            }(n, t);
        return null;
    } catch {
        return null;
    }
}
