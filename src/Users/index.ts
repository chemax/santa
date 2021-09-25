interface User {
    // firstname?: string;
    // surname?: string;
    nickname: string;
    id?: number;
}

// let Users: User[] = []

interface AbstractUsersRepository {
    users: User[];
    add: (User) => number;
    get: (number) => User;
}

class UsersRepo implements AbstractUsersRepository {
    users: User[];

    constructor() {
        this.users = []
    }

    add(u: User): number {
        let newUserId = 0
        if (this.users.length > 0) {
            newUserId = this.users[this.users.length - 1].id + 1
        }
        let newUser = Object.assign({id: newUserId}, u)
        // console.log(newUser)
        this.users.push(newUser)
        return newUserId;
    }

    get(id: number): User {
        let u: User = {id: 0, nickname: ""}

        return this.users.find(u => u.id === id) || u
    }
}

let usersRepo = new UsersRepo();
export default usersRepo;
