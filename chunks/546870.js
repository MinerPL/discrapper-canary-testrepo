var n = r(837512),
    i = r(531463),
    o = r(65183),
    a = o.List,
    u = o.Map,
    s = o.OrderedSet,
    c = o.Record,
    l = o.Repeat,
    f = s(),
    p = {
        parent: null,
        characterList: a(),
        data: u(),
        depth: 0,
        key: '',
        text: '',
        type: 'unstyled',
        children: a(),
        prevSibling: null,
        nextSibling: null
    },
    h = function (t, e) {
        return t.getStyle() === e.getStyle();
    },
    d = function (t, e) {
        return t.getEntity() === e.getEntity();
    },
    g = function (t) {
        if (!t) return t;
        var e = t.characterList,
            r = t.text;
        return r && !e && (t.characterList = a(l(n.EMPTY, r.length))), t;
    },
    y = (function (t) {
        function e() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p;
            return t.call(this, g(e)) || this;
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
            (o.getChildKeys = function () {
                return this.get('children');
            }),
            (o.getParentKey = function () {
                return this.get('parent');
            }),
            (o.getPrevSiblingKey = function () {
                return this.get('prevSibling');
            }),
            (o.getNextSiblingKey = function () {
                return this.get('nextSibling');
            }),
            (o.findStyleRanges = function (t, e) {
                i(this.getCharacterList(), h, t, e);
            }),
            (o.findEntityRanges = function (t, e) {
                i(this.getCharacterList(), d, t, e);
            }),
            e
        );
    })(c(p));
t.exports = y;
