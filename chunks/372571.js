function n() {
    throw TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}
r.d(t, {
    Z: function () {
        return n;
    }
});
