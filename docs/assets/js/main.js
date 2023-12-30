function send() {
  const position_A = document.getElementById("position_A").value;
  const position_B = document.getElementById("position_B").value;
  const divi_position_A = position_A.split(' ');
  const divi_position_B = position_B.split(' ');
  let position_AX = Number(divi_position_A[0]);
  let position_AY = Number(divi_position_A[1]);
  let position_AZ = Number(divi_position_A[2]);
  let position_BX = Number(divi_position_B[0]);
  let position_BY = Number(divi_position_B[1]);
  let position_BZ = Number(divi_position_B[2]);


  function X(position_AX, position_BX) {
    if (position_AX <= position_BX) {
      let x = position_AX
      let dx = position_BX - position_AX
      let _X = `x=${x},dx=${dx}`
      return _X
    } else {
      let x = position_BX
      let dx = position_AX - position_BX
      let _X = `x=${x},dx=${dx}`
      return _X
    }
  }

  function Y(position_AY, position_BY) {
    if (position_AY <= position_BY) {
      let y = position_AY
      let dy = position_BY - position_AY
      let _Y = `y=${y},dy=${dy}`
      return _Y
    } else {
      let y = position_BY
      let dy = position_AY - position_BY
      let _Y = `y=${y},dy=${dy}`
      return _Y
    }
  }

  function Z(position_AZ, position_BZ) {
    if (position_AZ <= position_BZ) {
      let z = position_AZ
      let dz = position_BZ - position_AZ
      let _Z = `z=${z},dz=${dz}`
      return _Z
    } else {
      let z = position_BZ
      let dz = position_AZ - position_BZ
      let _Z = `z=${z},dz=${dz}`
      return _Z
    }
  }
  let _X = X(position_AX, position_BX)
  let _Y = Y(position_AY, position_BY)
  let _Z = Z(position_AZ, position_BZ)
  let selector_position = `${_X},${_Y},${_Z}`
  document.getElementById("result").textContent = "変換しました";
  document.getElementById("selector_position").value = selector_position;
}

function cp() {
  let text = document.getElementById("selector_position").value;
  let removetext = document.createElement("textarea");
  removetext.textContent = text;
  document.body.appendChild(removetext);
  removetext.select();
  document.execCommand("Copy");
  document.body.removeChild(removetext);
}
