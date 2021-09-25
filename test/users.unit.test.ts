import Users from '../src/Users';
import {suite, test} from '@testdeck/mocha';
import * as _chai from 'chai';
import {expect} from 'chai';

_chai.should();
_chai.expect;

@suite
class UsersUnitTest {
    private Users = Users;
    private SearchID: number;

    before() {
        Users.add({nickname: "2"})
        Users.add({nickname: "2"})
        Users.add({nickname: "2"})
        this.SearchID = Users.add({nickname: "boroda"})
        Users.add({nickname: "2"})
        Users.add({nickname: "2"})
        console.log("sadasdsa", this.Users.get(this.SearchID))
    }

    @test 'Users is created'() {
        this.Users.get(this.SearchID).should.have.property("nickname").equal("boroda")
    }
}