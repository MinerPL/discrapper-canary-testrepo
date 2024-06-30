n.d(t, {
    Z: function () {
        return r;
    }
}), n(47120);
var i = n(470079), a = n(585483), s = n(981631);
function l(e) {
    return Object.keys(e).some(t => e[t]);
}
function r(e, t) {
    let [n, r] = i.useState(t), [o, c] = i.useState(l(n)), d = i.useRef(o), u = i.useRef(null), _ = i.useCallback(e => {
            r(t => {
                let n = {
                        ...t,
                        ...e
                    }, i = l(n);
                return i !== d.current && (d.current = i, null != u.current && (cancelAnimationFrame(u.current), u.current = null), i ? c(!0) : u.current = requestAnimationFrame(() => c(!1))), n;
            });
        }, []);
    return i.useEffect(() => {
        let t = e => {
            let {
                emojiPicker: t,
                emojiBurstPicker: n
            } = e;
            return _({
                emojiPicker: t,
                emojiBurstPicker: n
            });
        };
        return a.S.subscribeKeyed(s.LPv.TOGGLE_REACTION_POPOUT, e, t), () => void a.S.unsubscribeKeyed(s.LPv.TOGGLE_REACTION_POPOUT, e, t);
    }, [
        e,
        _
    ]), {
        popouts: n,
        setPopout: _,
        selected: o
    };
}
