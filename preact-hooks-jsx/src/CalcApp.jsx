import React, { useState, useEffect } from 'react'

import CalcNumButton  from "./CalcNumButton"
import CalcOpButton   from "./CalcOpButton"
import CalcDarkButton from "./CalcDarkButton"
import CalcDisplay    from "./CalcDisplay"
import "./CalcApp.sass"

export function CalcApp() {
  const [ax_r, set_ax_r] = useState(0)
  const [bx_r, set_bx_r] = useState(null)
  const [cx_r, set_cx_r] = useState(null)
  const [op_r, set_op_r] = useState(null)

  // https://qiita.com/okumurakengo/items/999243dcfcd1d015e2d5#react-12
  useEffect(() => {
    document.title = ax_r.toString()
  }, [ax_r])

  function onNumberClickHandle(plus_value) {
    if (op_r == null) {
      set_ax_r(prev => prev * 10 + plus_value)
    } else {
      set_bx_r(prev => prev * 10 + plus_value)
    }
  }

  function onZeroZeroClick() {
    onNumberClickHandle(0)
    onNumberClickHandle(0)
  }

  function onClearHandle() {
    set_bx_r(null)
  }

  function onAllClearHandle() {
    set_ax_r(0)
    set_bx_r(null)
    set_cx_r(null)
    set_op_r(null)
  }

  function onSetOpHandle(op_r) {
    if (bx_r != null) {
      calcUpdate()
    }
    set_op_r(op_r)
  }

  function onEqualHandle() {
    if (op_r != null) {
      if (false) {
        // React の問題のある仕様
        // 本当は単に bx_r ??= cx_r ?? ax_r 相当を行いたい
        // でも setState しても bx_r は更新されない
        // なので 1 + = と操作しても 1 + 1 にはならない
        set_bx_r(bx_r ?? cx_r ?? ax_r)
        calcUpdate()
      } else {
        // とりあえず動かすには別の変数を用意し次のように書かなければならない
        // 若干複雑なロジックなのに似た処理は calcUpdate() にもある
        // Reactの仕様に引きづられてメンテしずらく負債となっているのがわかる
        let rhv = bx_r ?? cx_r ?? ax_r
        const value = calcUpdate2(ax_r, rhv, op_r)
        set_ax_r(value)
        set_cx_r(rhv)
        set_bx_r(null)
      }
    }
  }

  function calcUpdate() {
    const value = calcUpdate2(ax_r, bx_r, op_r)
    set_ax_r(value)
    set_cx_r(bx_r)
    set_bx_r(null)
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
    if (bx_r != null) {
      set_bx_r(-bx_r)
    } else if (ax_r != null) {
      set_ax_r(-ax_r)
    }
  }

  function onParcentage() {
    if (bx_r != null) {
      set_bx_r(bx_r / 100)
    } else if (ax_r != null) {
      set_ax_r(ax_r / 100)
    }
  }

  // computed
  // https://qiita.com/okumurakengo/items/999243dcfcd1d015e2d5#react-8

  const isClearHandle = bx_r != null

  const resultString = (() => {
    let str = null
    if (bx_r != null) {
      str = bx_r
    } else if (ax_r != null) {
      str = ax_r
    }
    return str
  })()

  return (
    <div className="CalcApp">
      {/* {ax_r},{op_r},{bx_r}({cx_r}) */}

      <CalcDisplay>{resultString}</CalcDisplay>

      <div className="CalcNumButtons">
        {isClearHandle
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
        <CalcNumButton  label="0"  onClick={() => onNumberClickHandle(0)} is_wide />
        <CalcNumButton  label="00" onClick={onZeroZeroClick} />
        <CalcOpButton   label="="  onClick={onEqualHandle} />
      </div>
    </div>
  )
}
