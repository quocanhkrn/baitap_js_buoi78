function initialize() {
  globalThis.arr01Input = document.getElementById("initializeArray").value
  globalThis.arr01 = arr01Input.split(" ")
}

function initialize02() {
  globalThis.arr02Input = document.getElementById("initializeArray02").value
  globalThis.arr02 = arr02Input.split(" ")
}

function clearAns() {
  let elems = document.querySelectorAll(".alert")
  elems.forEach(item => {
    item.innerHTML = ""
    item.classList.remove("alert")
  });
}

// QUEST01
function quest01() {
  initialize()
  clearAns()
  let result = document.getElementById("quest01Result")
  let sum = 0
  for (item of arr01) {
    item = parseInt(item)
    if (item > 0) sum += item
  }
  result.classList.add("alert")
  result.innerHTML = `Tổng các số nguyên dương là: ${sum}`
}

// QUEST02
function quest02() {
  initialize()
  clearAns()
  let result = document.getElementById("quest02Result")
  let count = 0
  for (item of arr01) {
    item = parseInt(item)
    if (item > 0) count++
  }
  result.classList.add("alert")
  result.innerHTML = `Có ${count} số nguyên dương trong mảng`
}

// QUEST03
function quest03() {
  initialize()
  clearAns()
  let result = document.getElementById("quest03Result")
  let min = Math.min(...arr01)
  result.classList.add("alert")
  result.innerHTML = `Số nhỏ nhất trong mảng là: ${min}`
}

// QUEST04
function quest04() {
  initialize()
  clearAns()
  let newArr = new Array()
  for (item of arr01) {
    if (item > 0) {
      newArr.push(item)
    }
  }
  let result = document.getElementById("quest04Result")
  let min = Math.min(...newArr)
  result.classList.add("alert")
  result.innerHTML = `Số dương nhỏ nhất trong mảng là: ${min}`
}


// QUEST04
function quest05() {
  initialize()
  clearAns()
  let result = document.getElementById("quest05Result")
  let lastEven = -1
  for (item of arr01) {
    if (item % 2 === 0) {
      lastEven = item
    }
  }
  result.classList.add("alert")
  result.innerHTML = `Số chẵn cuối cùng trong mảng là: ${lastEven}`
}

// QUEST06
function quest06() {
  initialize()
  clearAns()
  let pos01 = parseInt(document.getElementById("pos01").value) - 1
  let pos02 = parseInt(document.getElementById("pos02").value) - 1
  let newArr = arr01
  let result = document.getElementById("quest06Result")
  result.classList.add("alert")
  result.innerHTML = `Mảng cũ: <br/>`
  for (item of newArr) {
    result.innerHTML += `${item} `
  }
  [newArr[pos01], newArr[pos02]] = [newArr[pos02], newArr[pos01]]
  result.innerHTML += `<br/>`
  result.innerHTML += `Mảng mới: <br/>`
  for (item of newArr) {
    result.innerHTML += `${item} `
  }
}

// QUEST07
function quest07() {
  initialize()
  clearAns()
  let result = document.getElementById("quest07Result")
  let newArr = arr01.sort(function (a, b) { return a - b })
  result.classList.add("alert")
  result.innerHTML = `Mảng sau khi sắp xếp theo thứ tự tăng dần`
  for (item of newArr) {
    result.innerHTML += `${item} `
  }
}

// QUEST08
function quest08() {
  initialize()
  clearAns()
  let result = document.getElementById("quest08Result")
  let firstPrime = -1
  loop01:
  for (item of arr01) {
    loop02:
    if (item >= 2) {
      for (let i = 1; i < item; i++) {
        if (i !== 1 && item % i === 0) continue loop01
      }
      firstPrime = item
      break loop01
    }
  }
  result.classList.add("alert")
  result.innerHTML = `${firstPrime}`
}

// QUEST09
function quest09() {
  initialize02()
  clearAns()
  let result = document.getElementById("quest09Result")
  let sum = 0
  let newArr = []
  for (item of arr02) {
    if (Number.isInteger(parseFloat(item))) {
      sum++
      newArr.push(item)
    }
  }
  result.classList.add("alert")
  result.innerHTML = `Có ${sum} số nguyên trong mảng`
}

// QUEST10
function quest10() {
  initialize02()
  clearAns()
  let result = document.getElementById("quest10Result")
  let countPos = 0
  let countNeg = 0
  for (item of arr02) {
    switch (item > 0) {
      case true:
        countPos++
        break;
      case false:
        countNeg++
        break
    }
  }
  result.classList.add("alert")
  result.innerHTML = `Có ${countPos} số dương và ${countNeg} số âm. `
  if (countPos === countNeg) {
    result.innerHTML += `Số dương bằng số âm.`
  } else switch (countPos > countNeg) {
    case true:
      result.innerHTML += `Số dương nhiều hơn số âm.`
      break;
    case false:
      result.innerHTML += `Số âm nhiều hơn số dương.`
      break;
  }
}