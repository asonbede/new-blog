const bcrypt = require("bcrypt");
const User = require("../models/user");
const mongoose = require("mongoose");
const helper = require("./test_helper");
const app = require("../app");
const supertest = require("supertest");
const api = supertest(app);

beforeEach(async () => {
  await User.deleteMany({});

  const passwordHash = await bcrypt.hash("sekret", 10);
  const user = new User({ username: "root", passwordHash });

  await user.save();
});

describe("when there is initially some users saved", () => {
  test("users are returned as json", async (done) => {
    await api
      .get("/api/users")
      .expect(200)
      .expect("Content-Type", /application\/json/);
    done();
  });

  test("All users are returned in correct amount", async () => {
    const response = await api.get("/api/users");

    expect(response.body).toHaveLength(1);
  });

  test("a specific user is within the returned users", async () => {
    const response = await api.get("/api/users");

    const contents = response.body.map((r) => r.username); //title: "TDD harms architecture"

    expect(contents).toContain("root");
  });
});

describe("when there is initially one user in db", () => {
  test("creation succeeds with a fresh username", async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {
      username: "mluukkai",
      name: "Matti Luukkainen",
      password: "salainen",
    };

    await api
      .post("/api/users")
      .send(newUser)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    const usersAtEnd = await helper.usersInDb();
    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1);

    const usernames = usersAtEnd.map((u) => u.username);
    expect(usernames).toContain(newUser.username);
  });
});

describe("when there is initially one user in db", () => {
  // ...

  test("creation fails with proper statuscode and message if username already taken", async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {
      username: "root",
      name: "Superuser",
      password: "salainen",
    };

    const result = await api
      .post("/api/users")
      .send(newUser)
      .expect(400)
      .expect("Content-Type", /application\/json/);

    expect(result.body.error).toContain("`username` to be unique");

    const usersAtEnd = await helper.usersInDb();
    expect(usersAtEnd).toHaveLength(usersAtStart.length);
  });
});

afterAll(() => {
  mongoose.connection.close();
});
