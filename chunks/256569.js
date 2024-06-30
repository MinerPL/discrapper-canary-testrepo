n.d(t, {
    Z: function () {
        return T;
    }
}), n(47120), n(177593);
var s = n(735250), a = n(470079), i = n(120356), r = n.n(i), l = n(481060), o = n(347469), c = n(853276), d = n(596390), u = n(870472), _ = n(775708);
function E(e) {
    let {
            resizableNode: t,
            onResize: n,
            onResizeEnd: a
        } = e, i = (0, o.Z)({
            minDimension: d.tq,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: a,
            orientation: o.y.VERTICAL_BOTTOM,
            throttleDuration: 16
        });
    return (0, s.jsx)('div', {
        onMouseDown: i,
        className: _.resizeHandle
    });
}
let I = a.forwardRef(function (e, t) {
    let {
            children: n,
            onFocus: i,
            onBlur: r,
            onClick: o
        } = e, c = a.useRef(null), [u, I] = a.useState(d.tq);
    return (0, s.jsxs)(l.Clickable, {
        className: _.textArea,
        onFocus: i,
        onBlur: r,
        onClick: o,
        innerRef: c,
        ignoreKeyPress: !0,
        style: { minHeight: u },
        children: [
            (0, s.jsx)(l.AdvancedScroller, {
                className: _.innerScroller,
                style: { minHeight: u - 2 },
                ref: t,
                children: n
            }),
            (0, s.jsx)(E, {
                resizableNode: c,
                onResize: I,
                onResizeEnd: e => {
                    I(e), null == i || i();
                }
            })
        ]
    });
});
function T(e) {
    var t;
    let {
            initialValue: n,
            onChangeTags: i,
            onChangeNewTagValue: o,
            tagErrors: d = {},
            placeholder: E,
            className: T,
            maxTags: m
        } = e, N = a.useRef(null), S = a.useRef(null), h = a.useRef(null), g = (0, u.V)(n), {
            handlePasteEvent: C,
            handleInputChange: x,
            handleKeyDown: p,
            handleContainerKeyUp: R,
            handleRemoveTag: f,
            handleTagChangeEvent: L,
            handleSelectTag: O,
            handleUnselectTag: A,
            handleResetTagSelections: M,
            handleInputBlurEvent: v
        } = (0, u.Q)(g, {
            scrollerRef: h,
            mainInputRef: N,
            mainContainerRef: S
        }), {
            state: {
                value: D,
                tags: j,
                selections: Z,
                isSelecting: b
            }
        } = g, [U, G] = a.useState(!1), P = a.useCallback(() => {
            var e;
            G(!1), M(), null === (e = N.current) || void 0 === e || e.focus({ preventScroll: !0 });
        }, [M]);
    a.useEffect(() => {
        if (!U)
            i(j);
    }, [
        i,
        j,
        U
    ]), a.useEffect(() => {
        if (!U)
            o(D);
    }, [
        o,
        D,
        U
    ]);
    let B = a.useCallback(function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            e && P(), G(!1);
        }, [P]), y = a.useCallback(e => t => {
            if (t) {
                var n;
                let t = Z.includes(j[e]);
                null === (n = N.current) || void 0 === n || n.focus(), t ? A(e) : (O(e), setImmediate(() => {
                    var e;
                    null === (e = N.current) || void 0 === e || e.blur(), setTimeout(() => {
                        var e;
                        return null === (e = S.current) || void 0 === e ? void 0 : e.focus();
                    }, 16);
                }));
            } else
                A(e, !0), G(!0);
        }, [
            O,
            A,
            Z,
            j
        ]);
    return (0, s.jsxs)('div', {
        className: r()(_.mainContainer, T),
        ref: S,
        tabIndex: 0,
        onKeyUp: R,
        children: [
            (0, s.jsxs)(I, {
                ref: h,
                onClick: P,
                children: [
                    j.map((e, t) => (0, s.jsx)(c.Z, {
                        value: e,
                        onChange: L(t),
                        onBlur: B,
                        onFocus: y(t),
                        onRemove: () => f(t),
                        isSelected: Z.includes(e),
                        isSelecting: b,
                        error: d[e],
                        forceShowErrorTooltip: !U && t === j.length - 1
                    }, t)),
                    (0, s.jsx)('input', {
                        className: r()(_.mainTextInput, { [_.isEditingOtherNodes]: U }),
                        ref: N,
                        onChange: x,
                        onKeyDownCapture: p,
                        onPaste: C,
                        onBlur: v,
                        placeholder: 0 === j.length ? E : void 0,
                        value: D
                    })
                ]
            }),
            null != m && (0, s.jsxs)(l.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                className: _.maxTags,
                children: [
                    null !== (t = null == j ? void 0 : j.length) && void 0 !== t ? t : 0,
                    '/',
                    m
                ]
            })
        ]
    });
}
