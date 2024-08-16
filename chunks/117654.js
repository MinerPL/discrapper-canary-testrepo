n.d(e, {
    O: function () {
        return h;
    }
});
var r = n(573736),
    i = n(592014),
    s = n(307854),
    o = n(356442);
class u {
    constructor(t, e) {
        let n, r;
        (n = t ? t : new s.s()), (r = e ? e : new s.s()), (this._stack = [{ scope: n }]), (this._isolationScope = r);
    }
    withScope(t) {
        let e;
        let n = this._pushScope();
        try {
            e = t(n);
        } catch (t) {
            throw (this._popScope(), t);
        }
        return (0, r.J8)(e)
            ? e.then(
                  (t) => (this._popScope(), t),
                  (t) => {
                      throw (this._popScope(), t);
                  }
              )
            : (this._popScope(), e);
    }
    getClient() {
        return this.getStackTop().client;
    }
    getScope() {
        return this.getStackTop().scope;
    }
    getIsolationScope() {
        return this._isolationScope;
    }
    getStackTop() {
        return this._stack[this._stack.length - 1];
    }
    _pushScope() {
        let t = this.getScope().clone();
        return (
            this._stack.push({
                client: this.getClient(),
                scope: t
            }),
            t
        );
    }
    _popScope() {
        return !(this._stack.length <= 1) && !!this._stack.pop();
    }
}
function c() {
    let t = (0, o.c)(),
        e = (0, o.q)(t);
    return (e.stack = e.stack || new u((0, i.X)(), (0, i.T)()));
}
function a(t) {
    return c().withScope(t);
}
function l(t, e) {
    let n = c();
    return n.withScope(() => ((n.getStackTop().scope = t), e(t)));
}
function f(t) {
    return c().withScope(() => t(c().getIsolationScope()));
}
function h() {
    return {
        withIsolationScope: f,
        withScope: a,
        withSetScope: l,
        withSetIsolationScope: (t, e) => f(e),
        getCurrentScope: () => c().getScope(),
        getIsolationScope: () => c().getIsolationScope()
    };
}
