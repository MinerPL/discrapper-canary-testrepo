n.d(t, {
    s: function () {
        return o;
    }
});
var r,
    i = n(778882),
    a = n(401010);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var o =
    (s((r = {}), i.FILE, {
        exposeProperties: {
            files: function (e) {
                return Array.prototype.slice.call(e.files);
            },
            items: function (e) {
                return e.items;
            }
        },
        matchesTypes: ['Files']
    }),
    s(r, i.HTML, {
        exposeProperties: {
            html: function (e, t) {
                return (0, a.R)(e, t, '');
            }
        },
        matchesTypes: ['Html', 'text/html']
    }),
    s(r, i.URL, {
        exposeProperties: {
            urls: function (e, t) {
                return (0, a.R)(e, t, '').split('\n');
            }
        },
        matchesTypes: ['Url', 'text/uri-list']
    }),
    s(r, i.TEXT, {
        exposeProperties: {
            text: function (e, t) {
                return (0, a.R)(e, t, '');
            }
        },
        matchesTypes: ['Text', 'text/plain']
    }),
    r);
