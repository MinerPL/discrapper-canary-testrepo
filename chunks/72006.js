t.d(n, {
    FZ: function () {
        return Z;
    },
    Hl: function () {
        return w;
    },
    NJ: function () {
        return U;
    },
    R8: function () {
        return G;
    },
    Sq: function () {
        return b;
    },
    Wg: function () {
        return y;
    },
    Zn: function () {
        return L;
    },
    c2: function () {
        return D;
    },
    eE: function () {
        return x;
    },
    iE: function () {
        return j;
    },
    iK: function () {
        return P;
    },
    lv: function () {
        return M;
    },
    nR: function () {
        return O;
    },
    q0: function () {
        return o.a;
    },
    x0: function () {
        return v;
    },
    xb: function () {
        return B;
    },
    yd: function () {
        return R;
    }
}), t(47120), t(653041);
var r = t(371917), i = t(421520), o = t.n(i), l = t(563751), u = t.n(l), s = t(608382), a = t.n(s), c = t(722661), d = t.n(c), _ = t(225389), f = t.n(_), E = t(71716), I = t.n(E), g = t(869045), p = t.n(g), C = t(110599), T = t.n(C), S = t(801539), m = t.n(S), h = t(887868), N = t.n(h);
function A(e, n, t, i) {
    let o = i.getCurrentContent(), l = null;
    null != e && (l = (o = o.createEntity(...e)).getLastCreatedEntityKey());
    let u = o.getFirstBlock(), s = new r.SelectionState({
            anchorKey: u.getKey(),
            anchorOffset: n,
            focusKey: u.getKey(),
            focusOffset: t
        });
    return o = r.Modifier.applyEntity(o, s, l), r.EditorState.set(i, { currentContent: o });
}
function v(e, n, t, i) {
    let o, l;
    let s = n.getCurrentContent(), a = s.getFirstBlock(), c = a.getText();
    'number' == typeof t ? (t > c.length && (t = c.length), null != i && i > c.length && (i = c.length), o = new r.SelectionState({
        anchorKey: a.getKey(),
        anchorOffset: t,
        focusKey: a.getKey(),
        focusOffset: null != i && 0 !== i ? i : t
    })) : o = n.getSelection();
    let d = n.getCurrentInlineStyle(), _ = u()(s, o);
    return o.isCollapsed() ? (s = r.Modifier.insertText(s, o, e, d, _), l = 'insert-characters') : (s = r.Modifier.replaceText(s, o, e, d, _), l = 'replace-characters'), r.EditorState.push(n, s, l);
}
function R(e, n) {
    switch (e) {
    case 'delete':
        return m()(n);
    case 'delete-word':
        return f()(n);
    case 'backspace':
        return T()(n);
    case 'backspace-word':
        return d()(n);
    case 'backspace-to-start-of-line':
        return a()(n);
    default:
        return n;
    }
}
function L(e, n) {
    switch (e) {
    case 'transpose-characters':
        return N()(n);
    case 'move-selection-to-start-of-block':
        return p()(n);
    case 'move-selection-to-end-of-block':
        return I()(n);
    default:
        return n;
    }
}
function b(e) {
    return e.getCurrentContent().getFirstBlock().getText();
}
function M(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = n.getCurrentContent(), i = r.getFirstBlock(), o = i.getText(), l = [];
    return i.findEntityRanges(e => null !== e.getEntity(), (e, n) => {
        let t = r.getEntity(i.getEntityAt(e)).getType(), u = o.substring(e, n);
        l.push({
            processed: !1,
            type: t,
            start: e,
            end: n,
            text: u
        });
    }), e.forEach(e => {
        let r = !1;
        if (l.forEach(t => {
                let {
                        type: i,
                        start: o,
                        end: l
                    } = e, u = e.getFullMatch();
                if (!t.processed)
                    t.type === i && t.start === o && t.text === u ? (t.processed = !0, r = !0) : (o >= t.start && o < t.end || l > t.start && l <= t.end) && (t.processed = !0, n = A(null, t.start, t.end, n));
            }), r)
            return;
        let i = t[e.type];
        n = A([
            e.type,
            null != i && i.mutable ? 'MUTABLE' : 'IMMUTABLE',
            { token: e }
        ], e.start, e.end, n);
    }), l.forEach(e => {
        !e.processed && (n = A(null, e.start, e.end, n));
    }), n;
}
function O(e) {
    return r.EditorState.createEmpty(new r.CompositeDecorator(e));
}
function Z(e) {
    let n = r.EditorState.push(e, r.ContentState.createFromText('')), t = e.getSelection();
    return null != t && t.hasFocus && (n = r.EditorState.moveFocusToEnd(n)), n;
}
function D(e, n) {
    let t = b(n);
    return v(e, n, 0, t.length);
}
function P(e, n) {
    let t = n.getSelection();
    return t = (t = t.set('focusOffset', e)).set('anchorOffset', e), r.EditorState.forceSelection(n, t);
}
function U(e) {
    return P(e.getCurrentContent().getFirstBlock().getText().length, e);
}
function x(e) {
    return P(0, e);
}
function G(e) {
    let n = e.getSelection();
    return n = (n = n.set('focusOffset', 0)).set('isBackward', !0), r.EditorState.forceSelection(e, n);
}
function y(e) {
    let n = b(e), t = e.getSelection();
    return t = (t = t.set('focusOffset', n.length)).set('isBackward', !1), r.EditorState.forceSelection(e, t);
}
function w(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512, t = b(e);
    if (t.length > n) {
        let i = e.getSelection();
        e = v('', e, n, t.length), i.getAnchorOffset() > n && (i = i.set('anchorOffset', n)), i.getFocusOffset() > n && (i = i.set('focusOffset', n)), e = r.EditorState.forceSelection(e, i);
    }
    return e;
}
function j(e) {
    let n = window.getSelection();
    if (null == n || 'Caret' !== n.type || null == e)
        return;
    let t = n.getRangeAt(0);
    if (!function (e, n) {
            for (; null != e;) {
                if (e === n)
                    return !0;
                e = e.parentNode;
            }
            return !1;
        }(t.commonAncestorContainer, e))
        return;
    let r = t.getClientRects()[0], i = e.getClientRects()[0];
    if (null == r || null == i)
        return;
    let o = r.left - i.left + e.scrollLeft;
    o < e.scrollLeft ? e.scrollLeft = o - 10 : o > e.scrollLeft + e.offsetWidth && (e.scrollLeft = o - e.offsetWidth + 3);
}
function B(e) {
    return 0 === b(e).length;
}
