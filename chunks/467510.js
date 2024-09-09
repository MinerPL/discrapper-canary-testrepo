n.d(e, {
    Rt: function () {
        return s;
    },
    iY: function () {
        return c;
    },
    l4: function () {
        return o;
    },
    qT: function () {
        return u;
    }
});
var r = n(573736);
let i = n(899517).n;
function s(t, e = {}) {
    if (!t) return '<unknown>';
    try {
        let n,
            s = t,
            o = [],
            u = 0,
            c = 0,
            a = 3,
            l = Array.isArray(e) ? e : e.keyAttrs,
            f = (!Array.isArray(e) && e.maxStringLength) || 80;
        for (
            ;
            s &&
            u++ < 5 &&
            ((n = (function (t, e) {
                let n = [];
                if (!t || !t.tagName) return '';
                if (i.HTMLElement && t instanceof HTMLElement && t.dataset) {
                    if (t.dataset.sentryComponent) return t.dataset.sentryComponent;
                    if (t.dataset.sentryElement) return t.dataset.sentryElement;
                }
                n.push(t.tagName.toLowerCase());
                let s = e && e.length ? e.filter((e) => t.getAttribute(e)).map((e) => [e, t.getAttribute(e)]) : null;
                if (s && s.length)
                    s.forEach((t) => {
                        n.push(`[${t[0]}="${t[1]}"]`);
                    });
                else {
                    t.id && n.push(`#${t.id}`);
                    let e = t.className;
                    if (e && (0, r.HD)(e)) for (let t of e.split(/\s+/)) n.push(`.${t}`);
                }
                for (let e of ['aria-label', 'type', 'name', 'title', 'alt']) {
                    let r = t.getAttribute(e);
                    r && n.push(`[${e}="${r}"]`);
                }
                return n.join('');
            })(s, l)),
            'html' !== n && (!(u > 1) || !(c + o.length * a + n.length >= f)));

        ) {
            o.push(n), (c += n.length), (s = s.parentNode);
        }
        return o.reverse().join(' > ');
    } catch (t) {
        return '<unknown>';
    }
}
function o() {
    try {
        return i.document.location.href;
    } catch (t) {
        return '';
    }
}
function u(t) {
    return i.document && i.document.querySelector ? i.document.querySelector(t) : null;
}
function c(t) {
    if (!i.HTMLElement) return null;
    let e = t;
    for (let t = 0; t < 5 && e; t++) {
        if (e instanceof HTMLElement) {
            if (e.dataset.sentryComponent) return e.dataset.sentryComponent;
            if (e.dataset.sentryElement) return e.dataset.sentryElement;
        }
        e = e.parentNode;
    }
    return null;
}
