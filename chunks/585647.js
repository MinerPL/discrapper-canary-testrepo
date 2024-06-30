n(47120);
var r = n(485589), i = n(14160), a = n(247123), o = n(207662);
t.Z = {
    id: 'aria-attribute-valid-value',
    selector: o.J8,
    tags: [],
    metadata: {
        description: 'ARIA attributes must use valid values',
        help: ''
    },
    check: function (e) {
        let t = function (e) {
            for (let t of o.cg)
                if (e.hasAttribute(t)) {
                    let n = e.getAttribute(t), i = r.aria.get(t);
                    switch (i.type) {
                    case 'string':
                        return a.w;
                    case 'id':
                        return function (e, t) {
                            return null == document.getElementById(t) ? ''.concat(e, ' references #').concat(t, ' which does not exist') : a.w;
                        }(t, n);
                    case 'idlist':
                        return function (e, t, n) {
                            if ('aria-controls' === e && ('false' === n.getAttribute('aria-expanded') || 'false' === n.getAttribute('aria-selected')) || 'aria-owns' === e && 'false' === n.getAttribute('aria-expanded'))
                                return a.w;
                            for (let n of t.split(' '))
                                if (null == document.getElementById(n))
                                    return ''.concat(e, ' references #').concat(t, ' which does not exist');
                            return a.w;
                        }(t, n, e);
                    case 'integer':
                        return function (e, t) {
                            return String(parseInt(t, 10)) !== t ? ''.concat(e, ' requires an integer but got ').concat(t) : a.w;
                        }(t, n);
                    case 'number':
                        return function (e, t) {
                            return isFinite(t) ? a.w : ''.concat(e, ' requires a numeric value but got ').concat(t);
                        }(t, n);
                    case 'boolean':
                        return function (e, t, n) {
                            return 'true' === t || 'false' === t || '' === t && !0 === n.allowundefined ? a.w : ''.concat(e, ' must be either "true" or "false"');
                        }(t, n, i);
                    case 'token':
                        return function (e, t, n) {
                            var r, i;
                            let o = function (e) {
                                switch (e) {
                                case 'true':
                                    return !0;
                                case 'false':
                                    return !1;
                                default:
                                    return e;
                                }
                            }(t);
                            return (null === (r = n.values) || void 0 === r ? void 0 : r.includes(o)) ? a.w : ''.concat(e, ' was ').concat(t, ' but must be: ').concat(null === (i = n.values) || void 0 === i ? void 0 : i.join(', '));
                        }(t, n, i);
                    case 'tokenlist':
                        return function (e, t, n) {
                            for (let a of t.split(' ')) {
                                var r, i;
                                if (null === (r = n.values) || void 0 === r ? !void 0 : !r.includes(a))
                                    return ''.concat(e, ' included ').concat(t, ' but is restricted to: ').concat(null === (i = n.values) || void 0 === i ? void 0 : i.join(', '));
                            }
                            return a.w;
                        }(t, n, i);
                    case 'tristate':
                        return function (e, t) {
                            switch (t) {
                            case 'true':
                            case 'false':
                            case 'mixed':
                                return a.w;
                            default:
                                return ''.concat(e, ' must be "true", "false", or "mixed" not ').concat(t);
                            }
                        }(t, n);
                    }
                }
            return a.w;
        }(e);
        return t !== a.w && ((0, o.Uu)(e) || !(0, i.p)(e)) ? a.w : t;
    }
};
