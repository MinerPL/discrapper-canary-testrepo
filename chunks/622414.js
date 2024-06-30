var n = s(570140);
t.Z = {
    startSpeedTest() {
        n.Z.dispatch({ type: 'RTC_SPEED_TEST_START_TEST' });
    },
    stopSpeedTest() {
        n.Z.dispatch({ type: 'RTC_SPEED_TEST_STOP_TEST' });
    }
};
