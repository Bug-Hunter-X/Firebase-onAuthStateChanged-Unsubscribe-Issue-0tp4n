# Firebase onAuthStateChanged Unsubscribe Issue

This repository demonstrates a common issue with Firebase's `onAuthStateChanged` listener: forgetting to unsubscribe.  This can lead to memory leaks and unexpected behavior in your application.

The `bug.js` file shows the problematic code.  The `bugSolution.js` file provides a corrected version.

## Problem
The `onAuthStateChanged` listener is attached but never detached.  This means the listener continues to run even after the component that uses it is unmounted, consuming resources and potentially causing errors.