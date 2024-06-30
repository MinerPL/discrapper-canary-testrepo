r.d(e, {
    q: function () {
        return i;
    }
});
var n = r(703498), _ = r(876122), a = r(643487);
class i {
    constructor() {
        i.prototype.__init.call(this);
    }
    static __initStatic() {
        this.id = 'HttpContext';
    }
    __init() {
        this.name = i.id;
    }
    setupOnce() {
        (0, n.c)(t => {
            if ((0, _.Gd)().getIntegration(i)) {
                if (!a.m9.navigator && !a.m9.location && !a.m9.document)
                    return t;
                let e = t.request && t.request.url || a.m9.location && a.m9.location.href, {referrer: r} = a.m9.document || {}, {userAgent: n} = a.m9.navigator || {}, _ = {
                        ...t.request && t.request.headers,
                        ...r && { Referer: r },
                        ...n && { 'User-Agent': n }
                    }, i = {
                        ...t.request,
                        ...e && { url: e },
                        headers: _
                    };
                return {
                    ...t,
                    request: i
                };
            }
            return t;
        });
    }
}
i.__initStatic();
