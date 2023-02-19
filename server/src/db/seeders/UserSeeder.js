import { User } from "../../models/index.js"

class UserSeeder {
  static async seed() {
    const userData = [
      {
        username: "bob",
        email: "bob@gmail.com",
        cryptedPassword: "kn4l3kn4l32kn4l2n4l5n66ln7l6n54ln32ln"
      },
      {
        username: "bobette",
        email: "bobette@gmail.com",
        cryptedPassword: "l7h354243h2l45j234h23l4jtg3bl4khcjkhv31"
      }
    ]

    for (const singleUserData of userData) {
      const currentUser = await User.query().findOne(singleUserData)
      if (!currentUser) {
        await User.query().insert(singleUserData)
      }
    }
  }
}

export default UserSeeder