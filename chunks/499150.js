var c = a(735250), t = a(470079), i = a(481060), o = a(703656), r = a(981631);
n.Z = t.forwardRef(function (e, n) {
    let {
            href: a,
            children: l,
            onClick: d,
            onKeyPress: s,
            focusProps: _,
            ...u
        } = e, b = t.useCallback(e => {
            if (!e.repeat)
                (e.charCode === r.yXg.SPACE || e.charCode === r.yXg.ENTER) && (e.preventDefault(), null != a && (0, o.uL)(a), null == d || d()), null == s || s(e);
        }, [
            a,
            s,
            d
        ]), h = t.useCallback(e => {
            if (!e.metaKey && !e.shiftKey && 0 === e.button)
                e.preventDefault(), e.stopPropagation(), null != a && (0, o.uL)(a), null == d || d();
        }, [
            a,
            d
        ]), f = (0, c.jsx)('a', {
            ref: n,
            href: a,
            onClick: h,
            onKeyPress: b,
            ...u,
            children: l
        });
    return (0, c.jsx)(i.FocusRing, {
        ..._,
        children: f
    });
});
