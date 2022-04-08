import React, { useState } from 'react'

import CalcNumButton  from "./CalcNumButton"
import CalcOpButton   from "./CalcOpButton"
import CalcDarkButton from "./CalcDarkButton"
import CalcDisplay    from "./CalcDisplay"

export default (props) => {
  const [ax_value, set_ax_value] = useState(0)
  const [bx_value, set_bx_value] = useState(null)
  const [cx_value, set_cx_value] = useState(null)
  const [op_value, set_op_value] = useState(null)

  function onNumberClickHandle(plus_value) {
    if (op_value == null) {
      set_ax_value(prev => prev * 10 + plus_value)
    } else {
      set_bx_value(prev => prev * 10 + plus_value)
    }
  }

  function onZeroZeroClick() {
    onNumberClickHandle(0)
    onNumberClickHandle(0)
  }

  function onClearHandle() {
    set_bx_value(null)
  }

  function onAllClearHandle() {
    set_ax_value(0)
    set_bx_value(null)
    set_cx_value(null)
    set_op_value(null)
  }

  function isClearHandle() {
    return bx_value != null
  }

  function onSetOpHandle(op_value) {
    if (bx_value != null) {
      calcUpdate()
    }
    set_op_value(op_value)
  }

  function onEqualHandle() {
    if (false) {
      // 次のように書きたかったが bx_value を設定しても stata.bx_value は更新されない
      if (op_value != null) {
        if (bx_value == null) {
          set_bx_value(ax_value)
        }
        calcUpdate()
      }
    } else {
      // しかたなくばらして実行
      // すでに使いにくくなっている
      if (op_value != null) {
        let rhv = bx_value ?? cx_value ?? ax_value
        const value = calcUpdate2(ax_value, rhv, op_value)
        set_ax_value(value)
        set_bx_value(null)
        set_cx_value(rhv)
      }
    }
  }

  function calcUpdate() {
    const value = calcUpdate2(ax_value, bx_value, op_value)
    set_ax_value(value)
    set_bx_value(null)
  }

  function calcUpdate2(ax, bx, op) {
    let value = null;
    if (false) {
    } else if (op === "+") {
      value = ax + bx
    } else if (op === "-") {
      value = ax - bx
    } else if (op === "*") {
      value = ax * bx
    } else if (op === "/") {
      value = ax / bx
    }
    return Math.trunc(value)
  }

  function onSignToggle() {
    if (bx_value != null) {
      set_bx_value(-bx_value)
    } else if (ax_value != null) {
      set_ax_value(-ax_value)
    }
  }

  function onParcentage() {
    if (bx_value != null) {
      set_bx_value(bx_value / 100)
    } else if (ax_value != null) {
      set_ax_value(ax_value / 100)
    }
  }

  function resultString() {
    let str = null
    if (bx_value != null) {
      str = bx_value
    } else if (ax_value != null) {
      str = ax_value
    }
    return str
  }

  return (
    <div className="CalcApp">
      {/* <CalcDisplay> */}
      {/*   {(ax_value != null) && <span>{ax_value}</span>} */}
      {/*   {(op_value != null) && <span>{op_value}</span>} */}
      {/*   {(bx_value != null) && <span>{bx_value}</span>} */}
      {/* </CalcDisplay> */}
      {/* <CalcDisplay>{ax_value}, {op_value}, {bx_value} ({cx_value})</CalcDisplay> */}

      <CalcDisplay>{resultString()}</CalcDisplay>

      <div className="CalcNumButtons">
        {isClearHandle()
         ? <CalcDarkButton label="C"  onClick={onClearHandle} />
         : <CalcDarkButton label="AC"  onClick={onAllClearHandle} />
        }
        <CalcDarkButton label="±" onClick={onSignToggle} />
        <CalcDarkButton label="％"  onClick={onParcentage} />
        <CalcOpButton   label="÷" onClick={() => onSetOpHandle("/")} />
        <CalcNumButton  label="7"  onClick={() => onNumberClickHandle(7)} />
        <CalcNumButton  label="8"  onClick={() => onNumberClickHandle(8)} />
        <CalcNumButton  label="9"  onClick={() => onNumberClickHandle(9)} />
        <CalcOpButton   label="×" onClick={() => onSetOpHandle("*")} />
        <CalcNumButton  label="4"  onClick={() => onNumberClickHandle(4)} />
        <CalcNumButton  label="5"  onClick={() => onNumberClickHandle(5)} />
        <CalcNumButton  label="6"  onClick={() => onNumberClickHandle(6)} />
        <CalcOpButton   label="-" onClick={() => onSetOpHandle("-")} />
        <CalcNumButton  label="1"  onClick={() => onNumberClickHandle(1)} />
        <CalcNumButton  label="2"  onClick={() => onNumberClickHandle(2)} />
        <CalcNumButton  label="3"  onClick={() => onNumberClickHandle(3)} />
        <CalcOpButton   label="+" onClick={() => onSetOpHandle("+")} />
        <CalcNumButton  label="0"  onClick={() => onNumberClickHandle(0)} className="CalcNumButton is_2x" />
        <CalcNumButton  label="00" onClick={onZeroZeroClick} />
        <CalcOpButton   label="="  onClick={onEqualHandle} />
      </div>
    </div>
  )
}
