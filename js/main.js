function computeForce() {

  let m = 0.0, a=0.0, force= 0.0;
  m = parseFloat(document.getElementById("getMass").value);
  a = parseFloat(document.getElementById("getAcceleration").value);
  force = (m*a);
  document.getElementById('fOut').innerHTML = force.toString();
}

function computeAvgVelocity() {

  let d =0.0;
  let v = parseFloat(document.getElementById("getVelocity").value);
  let t = parseFloat(document.getElementById("getTime").value);
  let a1 = parseFloat(document.getElementById("getAcceleration2").value);

  d = (v * t ) + (1/2) * Math.pow((a1 * t),2);

  document.getElementById("dOut").innerHTML = "Displacement: " + d.toString();
}

function computeQuad() {

  let ans =0.0;
  let a = parseFloat(document.getElementById("getSideA").value);
  let b = parseFloat(document.getElementById("getSideB").value);
  let c = parseFloat(document.getElementById("getSideC").value);

  ans1 = ((-b) + Math.sqrt(Math.abs(Math.pow(b,2)-(4*a*c))/ 2 * a));
  ans2 = ((-b) - Math.sqrt(Math.abs(Math.pow(b,2)-(4*a*c))/ 2 * a));

  document.getElementById("root1").innerHTML = "Answer 1: " + ans1.toString();
  document.getElementById("root2").innerHTML = "Answer 2: " + ans2.toString();
}

function computePresentValue() {

  // pmt *    (  1 -  ( 1 / (math.pow(1+r), n) / r )  )
  let p = parseFloat(document.getElementById("getPMT").value);
  let r = parseFloat(document.getElementById("getInt").value);
  let n = parseFloat(document.getElementById("getNumPay").value);

  let finalAmount = Math.abs(p * (  1 -  ( 1 / (Math.pow(1+r), n) / r )  ));

  // let finalAmount = (numPs)*(1-(1/(1+r)^n)/r);
  document.getElementById("pmtOut").innerHTML = "Solution:  " + "$ " + finalAmount.toString();
}
