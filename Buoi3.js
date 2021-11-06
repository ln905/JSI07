//Bai1
let arrayNumber = [10, -3, 5, -7, 11, -15, -20, 23];
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



//Bai3
function bai3 () {
	let arr = []
	let match = 0
	let n = parseInt(prompt('Nhap so n'))
	for (let i=3; i<n; i++){
		for (let k=2; k<i; k++){
			if (i%k==0){
				match = match + 1
			}
			if (k==i-1 && match==0){
				arr.push(i)
			}
			if (k==i-1 && match!==0){
				match=0
			}
		}
	}
	console.log(arr)
}



//Bai5
function bai5() {
	let arr=[]
	let valNumber = parseInt(prompt('So phan tu ban dinh nhap (<=50): '))
	for (let i=0; i<valNumber; i++) {
		arr.push(parseInt(prompt(`Nhap so thu ${i+1}`)))
	}

	function chenSo() {
		let addNum = prompt('Ban co muon chen so khong? (co/khong): ')
		if (addNum == 'co'){
			let x = parseInt(prompt('Nhap so x ban muon them vao mang: '))
			let k = parseInt(prompt('Nhap vi tri k ban muon chen vao day (So phan tu >= x >=0): '))
			arr.splice(k, 0, x)
		}
	}
	chenSo()

	function chiaHetCho3() {
		let copyArr =[]
		let sum=0
		for (let j=0; j<arr.length; j++){
			if (arr[j]%3==0){
				copyArr.push(arr[j])
			}
		}
		for (let k=0; k<copyArr.length; k++){
			sum=sum+copyArr[k]
		}
		console.log(`Trung binh cong cua cac so chia het cho 3 la ${sum/copyArr.length}`)
	}
	chiaHetCho3()
}



//Bai6
function bai6() {
	let arr1=[]
	let valNumber1 = parseInt(prompt('So phan tu ban dinh nhap cho mang 1: '))
	for (let i=0; i<valNumber1; i++) {
		arr1.push(parseInt(prompt(`Nhap so thu ${i+1} mang 1`)))
	}

	let arr2=[]
	let valNumber2 = parseInt(prompt('So phan tu ban dinh nhap cho mang 2: '))
	for (let i=0; i<valNumber2; i++) {
		arr2.push(parseInt(prompt(`Nhap so thu ${i+1} mang 2`)))
	}

	//Tranh lap trong array
	let arr3=[...new Set(arr1)]
	let arr4=[...new Set(arr2)]

	//Check
	function checkMatch() {
		let notmatch=0
		let checked=0
		let lastarr=[]
		for (let m=0; m<arr3.length; m++){
			for (let n=0; n<arr4.length; n++){
				checked=checked+1				
				if (arr3[m]!==arr4[n]){
					notmatch=notmatch+1;
					console.log(`${arr3[m]} khac ${arr4[n]}`)
				}
				if (checked==arr4.length){
					console.log('den buoc nay roi')
					if (notmatch==arr4.length){
						lastarr.push(arr3[m])
						notmatch=0
						checked=0
					} else {
						notmatch=0
						checked=0
					}				
				} 
			}
		}
		result = arr4.concat(lastarr)
		console.log(`So cac phan tu khong giong nhau o hai mang la ${result.length}`)
	}
	checkMatch()
}



//Bai8
function bai8() {
	let arr=[]
	let valNumber = parseInt(prompt('So phan tu ban dinh nhap cho mang 1: '))
	for (let i=0; i<valNumber; i++) {
		arr.push(parseInt(prompt(`Nhap so thu ${i+1} mang 1`)))
	}

	function checkSoChan() {
		let chan=0
		for (let i=0; i<arr.length; i++){
			if (arr[i]%2==0){
				chan=chan+1
			}
		}
		if (chan==arr.length){
			console.log('1')
		} else {
			console.log('0')
		}
	}
checkSoChan()
}



//Bai9
function bai9() {
	let arr1=[]
	let valNumber1 = parseInt(prompt('So phan tu ban dinh nhap cho mang 1: '))
	for (let i=0; i<valNumber1; i++) {
		arr1.push(parseInt(prompt(`Nhap so thu ${i+1} mang 1`)))
	}

	let arr2=[]
	let valNumber2 = parseInt(prompt('So phan tu ban dinh nhap cho mang 2: '))
	for (let i=0; i<valNumber2; i++) {
		arr2.push(parseInt(prompt(`Nhap so thu ${i+1} mang 2`)))
	}

	let arr3 = arr1.concat(arr2)
	
    function down(){
	    arr3.sort(function(a, b) {
		    return b - a;
	    })
		console.log(arr3)
    }	
	down()
}
