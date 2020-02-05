// bad
!isRunning && startRunning();

// good
if (!isRunning) {
    startRunning();
}