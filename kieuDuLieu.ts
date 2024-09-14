// const/let tenBien: kieu-du-lieu = gia-tri;
//Kiểu dữ liệu cơ bản: 
let testNumber: number = 5; // 1. Number (số)
let testString: string = "WD19201"; // 2. String (chuỗi)
let testBoolean: boolean = true; // 3. Boolean (true/false)

//Object: 
let testObjectSV: { //khai báo kiểu dữ liệu của từng key
    maSV: string, // key: kieu-du-lieu : bắt buộc phải có
    hoten: string, // key?: kieu-du-lieu : ko bắt buộc phải có (optional) 
    email: string,
    age: number,
    status?: boolean
}

testObjectSV = { //khai báo value của key
    maSV: "PH12345",
    hoten: "nguyen van A",
    email: "a@fpt.edu.vn",
    age: 19
}

//Array: có 2 cách để khai báo mảng trong typescript
let testArray: Array<string> = ["Abc", "Xyz"]; //C1: angle-bracket: let/const tenBien: Array<kieu-du-lieu>
let testArrayC2: number[] = [2,3,5]; //C2: let/const tenBien: kieu-du-lieu[] = [];

//tuple (kiểu dữ liệu mới trong typescript)
//chỉ định kiểu dữ liệu của từng phần tử -> xác định trước số phần tử ở trong mảng
let testTuple: [boolean, number, string] = [true, 5, "abc"];

//any: không xác định kiểu dữ liệu cụ thể
let testAny: any = [];

//union: có thể nhận 1 trong 2 kiểu dữ liệu đều được: let/const tenBien: kieu-du-lieu-1|kieu-du-lieu-2|kieu-du-lieu-x = gia-tri;
let testUnion: number|boolean = true;
//union áp dụng cho mảng: các phần tử trong mảng có thể là 1 trong các kiểu dữ liệu hợp lệ
let testUnionArray: (number|boolean)[] = [1, true, false, 2];
let testUnionArrayC2: Array<number|string> = [];

//enum: chỉ đc trọn 1 trong các giá trị có sẵn
enum Gender {Male, Female, Other};
enum Role {Admin, Staff, User};

//ép kiểu:
let input: any = 22222; //kiểu dữ liệu bất kỳ
//ép kiểu về string để sử dụng hàm .length
let count1: number = (<string>input).length; //C1: sử dụng angle-bracket: <kieu-du-lieu>tenBien
let count2: number = (input as string).length; //C2: sử dụng từ khóa as (tenBien as kieu-du-lieu)
