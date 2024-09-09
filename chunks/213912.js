var n = r(837512),
    i = r(531463),
    o = r(65183),
    a = o.List,
    u = o.Map,
    s = o.OrderedSet,
    c = o.Record,
    l = o.Repeat,
    f = s(),
    p = c({
        key: '',
        type: 'unstyled',
        text: '',
        characterList: a(),
        depth: 0,
        data: u()
    }),
    h = function (t) {
        if (!t) return t;
        var e = t.characterList,
            r = t.text;
        return r && !e && (t.characterList = a(l(n.EMPTY, r.length))), t;
    },
    d = (function (t) {
        function e(e) {
            return t.call(this, h(e)) || this;
        }
        (r = e), (n = t), (r.prototype = Object.create(n.prototype)), (r.prototype.constructor = r), (r.__proto__ = n);
        var r,
            n,
            o = e.prototype;
        return (
            (o.getKey = function () {
                return this.get('key');
            }),
            (o.getType = function () {
                return this.get('type');
            }),
            (o.getText = function () {
                return this.get('text');
            }),
            (o.getCharacterList = function () {
                return this.get('characterList');
            }),
            (o.getLength = function () {
                return this.getText().length;
            }),
            (o.getDepth = function () {
                return this.get('depth');
            }),
            (o.getData = function () {
                return this.get('data');
            }),
            (o.getInlineStyleAt = function (t) {
                var e = this.getCharacterList().get(t);
                return e ? e.getStyle() : f;
            }),
            (o.getEntityAt = function (t) {
                var e = this.getCharacterList().get(t);
                return e ? e.getEntity() : null;
            }),
            (o.findStyleRanges = function (t, e) {
                i(this.getCharacterList(), g, t, e);
            }),
            (o.findEntityRanges = function (t, e) {
                i(this.getCharacterList(), y, t, e);
            }),
            e
        );
    })(p);
function g(t, e) {
    return t.getStyle() === e.getStyle();
}
function y(t, e) {
    return t.getEntity() === e.getEntity();
}
t.exports = d;
