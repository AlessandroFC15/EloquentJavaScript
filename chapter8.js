// Exercises | Chapter 8

// 8.1 | Retry

function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  for (;;) {
  	try {
  		return primitiveMultiply(a, b);
    } catch (e) {
		if (e instanceof MultiplicatorUnitFailure)
          continue;
      	else
          throw e;
    }
  }
}

// 8.2 | The Locked Box

function withBoxUnlocked(body) {
  var boxWasLocked = box.locked;
  box.unlock();
  try {
    body();
  } finally {
    if (boxWasLocked)
      box.lock();
  }
  
  return;
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked);
// → true