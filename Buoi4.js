//Bai`1
class PhanSo {
    constructor(tu,mau){
        this.tu = tu
        this.mau = mau
    }
    add(phanSo2) {
        return new PhanSo(this.tu*phanSo2.mau + phanSo2.tu*this.mau,this.mau*phanSo2.mau)
    }
    mul() {
        return new PhanSo(this.tu*phanSo2.mau - phanSo2.tu*this.mau,this.mau*phanSo2.mau)
    }
    sub() {
        return new PhanSo(this.tu*phanSo2.tu,this.mau*phanSo2.mau)
    }
    div() {
        return new PhanSo(this.tu*phanSo2.mau,this.mau*phanSo2.tu)
    }
    show() {
        console.log($(this.tu)/$(this.mau))
    }
}

//Bai`2
const a = prompt("nhập học sinh: ")
class Candidate {
    constructor(id,name,dob,math,literature,english){
        this.id = id
        this.name = name
        this.dob = dob
        this.math = math
        this.literature = literature
        this.english = english
    }
}
const hocsinh = []
for ( let i = 0; i <= Number(a); i++) {
    const student = new Candidate(
        prompt("id: "),
        prompt("name: "),
        prompt("dob: "),
        prompt("math: "),
        prompt("literature: "),
        prompt("english: "));
    hocsinh.push(student);
}
class TestCandidate {
    run() {
        for (let j = 0; j < hocsinh.length; j++) {
            if (Number(hocsinh[j].math) + Number(hocsinh[j].literature) + Number(hocsinh[j].english) > 15){
                console.log(hocsinh[j]);
            }
        }
    }
}
let test = new TestCandidate();
test.run();
