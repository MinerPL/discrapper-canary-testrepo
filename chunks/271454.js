Object.defineProperty(t, '__esModule', { value: !0 }), (t.reactFormatter = t.DEFAULT_REACT_RICH_TEXT_ELEMENTS = void 0), (t.formatReact = s), (t.makeReactFormatter = o);
let r = n(192379),
    i = n(757672),
    a = r.createElement;
t.DEFAULT_REACT_RICH_TEXT_ELEMENTS = {
    $b: (e, t) => a('strong', { key: t }, e),
    $i: (e, t) => a('em', { key: t }, e),
    $del: (e, t) => a('del', { key: t }, e),
    $code: (e, t) => a('code', { key: t }, e),
    $link: (e, t, [n]) =>
        a(
            'a',
            {
                href: n,
                key: t
            },
            e
        ),
    $p: (e, t) => a('p', { key: t }, e)
};
function s(e, t, n) {
    return 'string' == typeof e ? [e] : this.bindFormatValues(n, e, t);
}
function o(e) {
    var t;
    return {
        format: s,
        builder:
            ((t = e),
            class extends i.FormatBuilder {
                constructor() {
                    super(...arguments), (this._nodeKey = 0), (this.result = []);
                }
                pushRichTextTag(e, n, r) {
                    this.result.push(t[e](n, `${this._nodeKey++}`, r));
                }
                pushLiteralText(e) {
                    'string' == typeof this.result[this.result.length - 1] ? (this.result[this.result.length - 1] += e) : this.result.push(e);
                }
                pushObject(e) {
                    this.result.push(e);
                }
                finish() {
                    return this.result;
                }
            })
    };
}
t.reactFormatter = o(t.DEFAULT_REACT_RICH_TEXT_ELEMENTS);
