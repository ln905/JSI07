let arrayNumber = [10, -3, 5, -7, 11, -15, -20, 23];

//BAI1
function bai1_1() {
	let newArr = []
	for (let i=0; i<=arrayNumber.length; i++){
		if (arrayNumber[i]%2==0){
			newArr.push(arrayNumber[i])
		}
	}
	console.log(newArr)
}

function bai1_2() {
	let max=arrayNumber[0]
		for (let i=0; i<=arrayNumber.length; i++){
		if (arrayNumber[i]>max){
			max=arrayNumber[i];
		}
	}
	console.log(`Max cua day la${max}`)
}

function bai3_3() {
	let min=arrayNumber[0]
	let index=0
	for (let i=0; i<=arrayNumber.length; i++){
		if (arrayNumber[i]<min){
			min=arrayNumber[i];
			index=i;
		}
	}
	console.log(`Min cua day la${min}`)
	console.log(`Phan tu Min dung thu ${index}`)
}

function bai1_4() {
	let newArr = []
	for (let i=0; i<=arrayNumber.length; i++){
		if (Math.sqrt(arrayNumber[i])%1==0){
			newArr.push(arrayNumber[i])
		}
	}
	console.log(newArr.length)
}

function bai1_6(){
	let newArr = [...arrayNumber]
	for (let i=0; i<newArr.length; i++){
		if (newArr[i]<0){
			newArr.splice(i, 1, 0)
		}
	}
	console.log(newArr)
}

function bai1_7(){
	let newArr = [...arrayNumber]
	for (let i=0; i<newArr.length; i++){
		if (newArr[i]<0){
			newArr.splice(i,1)
			i=i-1
		}
	}
	console.log(newArr)
}

//Bai2
function bai2(){
    let arr = []
    for (let i=0; i<10; i++){
	    arr.push(parseInt(prompt(`Nhap so thu ${i+1}`)))
    }
    let arrUp = [...arr]
    let arrDown = [...arr]
    function up(){
	    arrUp.sort(function(a, b) {
		    return a - b;
	    })
    }

    function down(){
	    arrDown.sort(function(a, b) {
		    return b - a;
	    })
    }
up(); down()
console.log(arrUp)
console.log(arrDown)
}

