import { AskType, UserType, categoryType } from "./dataTypes";
import Category from "./models/categoryModel";
import User from "./models/userModel";


export default function upload(exArr: UserType[]) {
  let index = 0;
  const upFxn = async() => {
    if (index >= exArr.length) {
      clearInterval(interval);
    } else {
      const arr = exArr[index];

      const user : UserType = {
        username: arr.username,
        profileImage: arr.profileImage,
        category: arr.category,
        ban: arr.ban
      } 
      const newUser = await User.create(user)
        .then(() => {
          console.log(index, arr.username, 'successfully written');
        })
        .catch(err => console.log('error occured', err.message));
      // console.log(index, newProject.title, "Successfully added");
    }
    index++;
  };
  const interval = setInterval(upFxn, 5000);
}

// upload(ProjectData);