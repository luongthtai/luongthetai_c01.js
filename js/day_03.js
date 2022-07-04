// ham chuyen doi tu do F sang do C

function bai4() {
    let doF = Number(prompt("nhap do F", ''));

    let ketQua = (5 / 9) * (doF - 32);

    console.log(ketQua);
    
    alert("do C: " + ketQua);

    return ketQua;
}


// ham tinh tong binhf phuong 2 so 

function bai5() {
    confirm("tinh tong binh phuong 2 so a va b ");

    let a = Number(prompt("nhap so a: ", ''));
    let b = Number(prompt("nhap so b: ", ''));

    let tong = Math.pow(a, 2) + Math.pow(b, 2);

    alert("tong binh phuong 2 so la: " + tong);
    return tong;
}

// phep chia 3 so 

function bai7() {
    confirm("bieu thuc: (a^2 * b^2) / c ");
    let a = Number(prompt("nhap so a: ", ''));
    let b = Number(prompt("nhap so b: ", ''));
    let c = Number(prompt("nhap so c: ", ''));

    let ketQua = (Math.pow(a, 2) * Math.pow(b, 2)) / c ;
    alert("ket qua: " + ketQua);

    return ketQua;
}

// tinh diem trung binh cua 4 mon

function bai8() {
    confirm("diem trung binh 4 mon Toan, Ly, Sinh, Anh");
    let toan = Number(prompt("diem Toan: ", ''));
    let ly = Number(prompt("diem Ly: ", ''))
    let sinh = Number(prompt("diem Sinh: ", ''));
    let anh = Number(prompt("diem Anh: ", ''));

    console.log(toan + ly + sinh + anh);

    let diemTrungBinh = (toan + ly + sinh + anh) / 4;

    alert("diem: " + diemTrungBinh);

    return diemTrungBinh;
}

// mang so

function bai12() {
    let mangSo = [1, 3, 7, 2, 5];
    console.log(mangSo[4]);
}

// goi ham va su dung