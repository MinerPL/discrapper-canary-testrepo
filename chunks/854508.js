function(t, e, i) {
    "use strict";
    var n = i("859514"),
        r = i("503486"),
        a = i("18563"),
        s = i("814026"),
        o = TypeError,
        l = Object.defineProperty,
        u = r.self !== r;
    try {
        if (s) {
            var c = Object.getOwnPropertyDescriptor(r, "self");
            (u || !c || !c.get || !c.enumerable) && a(r, "self", {
                get: function() {
                    return r
                },
                set: function(t) {
                    if (this !== r) throw o("Illegal invocation");
                    l(r, "self", {
                        value: t,
                        writable: !0,
                        configurable: !0,
                        enumerable: !0
                    })
                },
                configurable: !0,
                enumerable: !0
            })
        } else n({
            global: !0,
            simple: !0,
            forced: u
        }, {
            self: r
        })
    } catch (t) {}
}