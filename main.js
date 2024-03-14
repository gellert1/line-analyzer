// Line Analyzer

// Add Event Listener
document.getElementById("analyze").addEventListener("click", analyzeLine);

// Event Function
function analyzeLine() {
  // Get Inputted Point Data (pt1x, pt1y) and (pt2x, pt2y)
  let pt1x = Number(document.getElementById("pt1x").value);
  let pt1y = Number(document.getElementById("pt1y").value);
  let pt2x = Number(document.getElementById("pt2x").value);
  let pt2y = Number(document.getElementById("pt2y").value);

  // Call Analyze Functions and Display results

  document.getElementById("length").innerHTML = getLength(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("slope").innerHTML = getSlope(pt1x, pt1y, pt2x, pt2y);
  document.getElementById("description").innerHTML = getDescription(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("location-1").innerHTML = getPointLocation(
    pt1x,
    pt1y
  );
  document.getElementById("location-2").innerHTML = getPointLocation(
    pt2x,
    pt2y
  );
  document.getElementById("slope-point").innerHTML = getPointSlope(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("equation").innerHTML = getEquation(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
}

// Line Analyzer Functions (Write your solutions here. Uncomment above code when ready to test)

function getLength(pt1x, pt1y, pt2x, pt2y) {
  return Math.round(
    Math.sqrt((pt2x - pt1x) * (pt2x - pt1x) + (pt2y - pt1y) * (pt2y - pt1y))
  );
}

function getSlope(pt1x, pt1y, pt2x, pt2y) {
  return Math.round((pt2y - pt1y) / (pt2x - pt1x));
}

function getDescription(pt1x, pt1y, pt2x, pt2y) {
  if (pt2y > pt1y) {
    return "increasing";
  } else if (pt2y < pt1y) {
    return "decreasing";
  } else if (pt2y == pt1y) {
    return "vertical";
  } else if (pt1x == pt2x) {
    return "horizontal";
  }
}

function getPointLocation(pt1x, pt1y) {
  if (pt1x == 0 && pt1y == 0) {
    return "origin";
  } else if (pt1x == 0 && pt1y != 0) {
    return "x-axis";
  } else if (pt1y == 0 && pt1x != 0) {
    return "y-axis";
  } else if (pt1x > 0 && pt1y > 0) {
    return "quadrant 1";
  } else if (pt1x < 0 && pt1y > 0) {
    return "quadrant 2";
  } else if (pt1x < 0 && pt1y < 0) {
    return "quadrant 3";
  } else if (pt1x > 0 && pt1y < 0) {
    return "quadrant 4";
  }
}

function getPointLocation(pt2x, pt2y) {
  if (pt2x == 0 && pt2y == 0) {
    return "origin";
  } else if (pt2x == 0 && pt2y != 0) {
    return "x-axis";
  } else if (pt2x == 0 && pt2y != 0) {
    return "y-axis";
  } else if (pt2x > 0 && pt2y > 0) {
    return "quadrant 1";
  } else if (pt2x < 0 && pt2y > 0) {
    return "quadrant 2";
  } else if (pt2x < 0 && pt2y < 0) {
    return "quadrant 3";
  } else if (pt2x > 0 && pt2y < 0) {
    return "quadrant 4";
  }
}

function yInt(x1, y1, x2, y2) {
  return y1 - getSlope(x1, y1, x2, y2) * x1;
}

function getEquation(x1, y1, x2, y2) {
  let slope = getSlope(x1, y1, x2, y2);
  let yIntercept = yInt(x1, y1, x2, y2);
  let positiveYInt = Math.abs(yInt(x1, y1, x2, y2));
  if (slope == 1) {
    return `y = x + ${yIntercept}`;
  } else if (slope == 0) {
    return `y = ${yIntercept}`;
  } else if (yIntercept < 0) {
    return `y = ${getSlope(x1, y1, x2, y2)}x - ${positiveYInt}`;
  } else {
    return `y = ${getSlope(x1, y1, x2, y2)}x + ${yIntercept}`;
  }
}

// account for non acceptable equations:  y = 5x + -9  should be y = 5x - 9;  Math.abs(num)

function getPointSlope(x1, y1, x2, y2) {
  let slope = getSlope(x1, y1, x2, y2);
  let positiveY = Math.abs(y1);
  let positiveX = Math.abs(x1);

  if (slope == 0) {
    return `y - ${y1} = x - ${x1}`;
  } else if (y1 < 0 && x1 < 0) {
    return `y + ${positiveY} = ${slope}(x + ${positiveX})`;
  } else if (y1 < 0) {
    return `y + ${positiveY} = ${slope}(x - ${x1})`;
  } else if (x1 < 0) {
    return `y - ${y1} = ${slope}(x + ${positiveX})`;
  } else if (y1 == 0) {
    return `y = ${slope}(x - ${x1})`;
  } else if (x1 == 0) {
    return `y - ${y1} = ${slope}x`;
  } else {
    return `y - ${y1} = ${slope}(x - ${x1})`;
  }
}
