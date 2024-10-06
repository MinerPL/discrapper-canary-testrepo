var r,
    i,
    a,
    s =
        (this && this.__extends) ||
        ((i = function (e, t) {
            return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                        e.__proto__ = t;
                    }) ||
                function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                })(e, t);
        }),
        function (e, t) {
            if ('function' != typeof t && null !== t) throw TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
            function n() {
                this.constructor = e;
            }
            i(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
        }),
    o =
        (this && this.__read) ||
        function (e, t) {
            var n = 'function' == typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var r,
                i,
                a = n.call(e),
                s = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; ) s.push(r.value);
            } catch (e) {
                i = { error: e };
            } finally {
                try {
                    r && !r.done && (n = a.return) && n.call(a);
                } finally {
                    if (i) throw i.error;
                }
            }
            return s;
        },
    l =
        (this && this.__spreadArray) ||
        function (e, t, n) {
            if (n || 2 == arguments.length) for (var r, i = 0, a = t.length; i < a; i++) (r || !(i in t)) && (!r && (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
            return e.concat(r || Array.prototype.slice.call(t));
        };
Object.defineProperty(t, '__esModule', { value: !0 }), (t.astFormatter = t.RichTextNodeType = void 0), (t.formatToAst = _);
var u = n(817500);
((r = a || (t.RichTextNodeType = a = {})).Text = 'text'), (r.Strong = 'strong'), (r.Emphasis = 'emphasis'), (r.Strikethrough = 'strikethrough'), (r.Code = 'code'), (r.Link = 'link'), (r.Paragraph = 'paragraph'), (r.Object = 'object');
var c = {
        $_: function () {
            return {
                type: a.Text,
                content: ''
            };
        },
        $b: function (e) {
            return {
                type: a.Strong,
                content: e
            };
        },
        $i: function (e) {
            return {
                type: a.Emphasis,
                content: e
            };
        },
        $del: function (e) {
            return {
                type: a.Strikethrough,
                content: e
            };
        },
        $code: function (e) {
            return {
                type: a.Code,
                content: e
            };
        },
        $link: function (e) {
            var t = o(e),
                n = t[0],
                r = t.slice(1);
            return {
                type: a.Link,
                target: n.content,
                content: r
            };
        },
        $p: function (e) {
            return {
                type: a.Paragraph,
                content: e
            };
        }
    },
    d = (function (e) {
        function t() {
            var t = e.apply(this, l([], o(arguments), !1)) || this;
            return (t.result = []), t;
        }
        return (
            s(t, e),
            (t.prototype.pushRichTextTag = function (e, t) {
                if (!(e in c)) throw ''.concat(e, ' is not a known rich text formatting tag');
                var n,
                    r = c[e](t, '');
                Array.isArray(r) ? (n = this.result).push.apply(n, l([], o(r), !1)) : this.result.push(r);
            }),
            (t.prototype.pushLiteralText = function (e) {
                var t = this.result[this.result.length - 1];
                null != t && t.type === a.Text
                    ? (t.content += e)
                    : this.result.push({
                          type: a.Text,
                          content: e
                      });
            }),
            (t.prototype.pushObject = function (e) {
                this.result.push({
                    type: a.Object,
                    content: e
                });
            }),
            (t.prototype.finish = function () {
                return this.result;
            }),
            t
        );
    })(u.FormatBuilder);
function _(e, t) {
    return 'string' == typeof e
        ? [
              {
                  type: a.Text,
                  content: e
              }
          ]
        : this.bindFormatValues(d, e, t);
}
t.astFormatter = {
    format: _,
    builder: d
};
