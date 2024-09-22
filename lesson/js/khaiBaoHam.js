"use strict";
//khai báo hàm trong js: 
//Phân loại theo có giá trị trả về hay không?: có giá trị trả về - không có giá trị trả về
function tenHam() {
    return;
}
;
let tenHamArrow = () => {
    return;
};
//khai báo kiểu dữ liệu cho giá trị trả về của hàm
// function tenHam(): kieu-du-lieu {
//     return ;
// }
// let tenHamArrow = (): kieu-du-lieu {
// }
//nếu hàm không có giá trị trả về thì sẽ gán kieu-du-lieu là "void"
let className = 'wd19201';
let helloWorld = () => {
    return `Hello ${className}`;
};
// console.log(helloWorld());
//Phân loại theo có tham số truyền vào hay không?
//Kiểu 1: không có tham số truyền vào
//Kiểu 2: có tham số truyền vào
let tinhTong = (a, b) => {
    return a + b;
};
//Kiểu 2.1: tham số truyền vào có giá trị mặc định (tenThamSo1: kieu-du-lieu = gia-tri-1, tenThamSo2: kieu-du-lieu, ...)
let tinhHieu = (a = 8, b) => {
    return a - b;
};
//tham số mặc định: nếu truyền tham số thì sẽ lấy giá trị truyền vào, ko thì lấy giá trị mặc định
//(sử dụng giá trị mặc định) nếu tham số mặc định đứng sau: bỏ qua, ko truyền tham số đó
//(sử dụng giá trị mặc định) nếu tham số mặc định đứng trước: sử dụng undefined thay cho tham số đó
//Kiểu 2.2: tham số tùy chọn: (tenThamSo?:kieu-du-lieu);
let tinhTich = (a, b) => {
    return a + b;
};
