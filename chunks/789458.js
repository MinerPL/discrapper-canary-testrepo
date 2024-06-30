e(312677), self.addEventListener('message', async r => {
    let {
            data: {url: t}
        } = r, e = !1;
    try {
        await fetch(t);
    } catch (r) {
        e = !0;
    }
    self.postMessage({
        url: t,
        error: e
    });
});
