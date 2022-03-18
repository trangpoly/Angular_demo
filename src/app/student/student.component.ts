import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Danh sách sinh viên';
  subtitle = 'Web16303';

  users = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      height: 150,
      weight: 46,
      image: "https://banner2.cleanpng.com/20180625/req/kisspng-computer-icons-avatar-business-computer-software-user-avatar-5b3097fcae25c3.3909949015299112927133.jpg"
    },
    {
      id: 2,
      name: "Nguyễn Văn B",
      height: 160,
      weight: 25,
      image: "https://banner2.cleanpng.com/20180625/req/kisspng-computer-icons-avatar-business-computer-software-user-avatar-5b3097fcae25c3.3909949015299112927133.jpg"
    },
    {
      id: 3,
      name: "Nguyễn Văn C",
      height: 170,
      weight: 30,
      image: "https://banner2.cleanpng.com/20180625/req/kisspng-computer-icons-avatar-business-computer-software-user-avatar-5b3097fcae25c3.3909949015299112927133.jpg"
    },
    {
      id: 4,
      name: "Nguyễn Văn D",
      height: 130,
      weight: 50,
      image: "https://banner2.cleanpng.com/20180625/req/kisspng-computer-icons-avatar-business-computer-software-user-avatar-5b3097fcae25c3.3909949015299112927133.jpg"
    }

  ];

  // filterUsers = [
  //   ...this.users  //  newArray = [...oldArray]: gán các ptu của mảng cũ vào 1 mảng mới
  // ];
  filterUsers = this.users;

  //DELETE:
  remove(id : number){
    // return this.users = this.users.filter(user => user.id !== id)
    let userFind = this.users.find(user => user.weight < 30 && user.id === id);
    if(userFind){
      alert("Không được xóa");
      return this.filterUsers;
    }
    else {
      return this.filterUsers = this.filterUsers.filter(user => user.id !== id);
    }
  }


  //SEARCH:
  searchValue = "";
  // filterUsers = [
  //   ...this.users  //  newArray = [...oldArray]: gán các ptu của mảng cũ vào 1 mảng mới
  // ];

  onSearch(event :any){
    this.searchValue = event.target.value;
    this.filterUsers = this.users.filter(user => {
      //toLowerCase(): chuyển chữ hoa thành thường.
      //trim(): loại bỏ khoảng trắng
      const userNameLowerCase = user.name.toLowerCase();
      const searchValueLowerCase = this.searchValue.toLowerCase().trim();

      return userNameLowerCase.indexOf(searchValueLowerCase) !== -1;
    })
  }
  //ADD:
  newUser = {
    name : "",
    height: 0,
    weight: 0,
    image: "",
    id: 0
  }
  onChangeInput(event: any, key: string){
    const inputValue = event.target.value;
    this.newUser = {
      ...this.newUser,
      [key]: inputValue
    }
    // console.log(this.newUser);
  }
  onSubmit(){
    //Validate trước khi cập nhật dữ liệu
    if(!this.onValidate(this.newUser)){
      //Nếu ko pass qua điều kiện validate, thì sẽ return ra khỏi hàm submit luôn
      alert("Lỗi form!");
      return;
    }
    //Kiểm tra xem this.newUser có id ko? Nếu có là edit, ko có là add
    if(this.newUser.id){
      //Công việc Edit
      for(let i =0 ; i<this.users.length; i ++){
        if(this.users[i].id === this.newUser.id){
          this.users[i] = this.newUser;
        }
      }
    }
    else {
      //Công việc Add
      this.newUser = {
        ...this.newUser,
        id: this.users.length + 1,
        height: Number(this.newUser.height),
        weight: Number(this.newUser.weight)
      }
      this.users.push(this.newUser);
      this.filterUsers.push(this.newUser);
      console.log(this.users);
    }
    
    //Cập nhật dữ liệu default cho newUser để hiển thị bên view
    this.newUser = {
      name : "",
      height: 0,
      weight: 0,
      image: "",
      id: 0
    }
  }
  //Validate:
  onValidate(obj: any) {
    if(!obj.name || !obj.height || !obj.weight || !obj.image){
      return false;
    }
    return true;
  }

  //EDIT: 
  onEdit(user: any){
    this.newUser = user;
  }
}
