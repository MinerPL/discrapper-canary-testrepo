n.d(t, {
    Eg: function () {
        return s;
    },
    XL: function () {
        return c;
    }
});
var i = n(470079), l = n(652874), r = n(143927);
let a = (0, l.Z)(e => ({ upsellsByGuildId: {} }));
function s(e) {
    return a(t => {
        var n;
        let i = {};
        return null == e ? i : null !== (n = t.upsellsByGuildId[e]) && void 0 !== n ? n : i;
    }, r.Z);
}
function o(e) {
    if (null == e)
        return !1;
    try {
        return window.getComputedStyle(e).overflow.includes('scroll');
    } catch (e) {
        return !1;
    }
}
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], l = i.useRef(null);
    return i.useLayoutEffect(() => {
        let i = l.current, r = () => {
                requestAnimationFrame(() => {
                    var i, r, s;
                    let o = null !== (r = null === (i = l.current) || void 0 === i ? void 0 : i.getBoundingClientRect()) && void 0 !== r ? r : null;
                    s = {
                        name: t,
                        guildId: e,
                        disabled: n,
                        boundingRect: null != o ? o : null
                    }, a.setState(e => {
                        var t, n;
                        return {
                            upsellsByGuildId: {
                                ...null !== (t = e.upsellsByGuildId) && void 0 !== t ? t : {},
                                [s.guildId]: {
                                    ...null !== (n = e.upsellsByGuildId[s.guildId]) && void 0 !== n ? n : {},
                                    [s.name]: s
                                }
                            }
                        };
                    });
                });
            };
        if (null == i)
            return r(), () => {
            };
        let s = function (e) {
            let t = e.parentNode;
            for (; null != t && t !== document.body && !o(t);)
                t = t.parentNode;
            return o(t) ? t : null;
        }(i);
        return r(), null == s || s.addEventListener('scroll', r, { passive: !0 }), () => {
            null == s || s.removeEventListener('scroll', r);
        };
    }, [
        e,
        t,
        n
    ]), l;
}
