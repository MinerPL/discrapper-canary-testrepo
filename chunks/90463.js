function r(e) {
    return e.replace(/[\s-~]+/g, '-').replace(/^-+/, '').replace(/[\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '').toLowerCase();
}
n.d(t, {
    Z: function () {
        return r;
    }
}), n(757143);
