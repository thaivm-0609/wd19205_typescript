"use strict";
// const/let tenBien: kieu-du-lieu = gia-tri;
//Kiểu dữ liệu cơ bản: 
let testNumber = 5; // 1. Number (số)
let testString = "WD19201"; // 2. String (chuỗi)
let testBoolean = true; // 3. Boolean (true/false)
//Object: 
let testObjectSV;
testObjectSV = {
    maSV: "PH12345",
    hoten: "nguyen van A",
    email: "a@fpt.edu.vn",
    age: 19
};
//Array: có 2 cách để khai báo mảng trong typescript
let testArray = ["Abc", "Xyz"]; //C1: angle-bracket: let/const tenBien: Array<kieu-du-lieu>
let testArrayC2 = [2, 3, 5]; //C2: let/const tenBien: kieu-du-lieu[] = [];
//tuple (kiểu dữ liệu mới trong typescript)
//chỉ định kiểu dữ liệu của từng phần tử -> xác định trước số phần tử ở trong mảng
let testTuple = [true, 5, "abc"];
//any: không xác định kiểu dữ liệu cụ thể
let testAny = [];
//union: có thể nhận 1 trong 2 kiểu dữ liệu đều được: let/const tenBien: kieu-du-lieu-1|kieu-du-lieu-2|kieu-du-lieu-x = gia-tri;
let testUnion = true;
//union áp dụng cho mảng: các phần tử trong mảng có thể là 1 trong các kiểu dữ liệu hợp lệ
let testUnionArray = [1, true, false, 2];
let testUnionArrayC2 = [];
//enum: chỉ đc trọn 1 trong các giá trị có sẵn
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Other"] = 2] = "Other";
})(Gender || (Gender = {}));
;
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Staff"] = 1] = "Staff";
    Role[Role["User"] = 2] = "User";
})(Role || (Role = {}));
;
//ép kiểu:
let input = 22222; //kiểu dữ liệu bất kỳ
//ép kiểu về string để sử dụng hàm .length
let count1 = input.length; //C1: sử dụng angle-bracket: <kieu-du-lieu>tenBien
let count2 = input.length; //C2: sử dụng từ khóa as (tenBien as kieu-du-lieu)
