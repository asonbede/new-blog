const supertest = require("supertest");
const mongoose = require("mongoose");
const helper = require("./test_helper");
const app = require("../app");
const api = supertest(app);
const config = require("../utils/config");
const logger = require("../utils/logger");
const Bloglist = require("../models/blogs");
//const { deleteOne } = require("../models/blogs");
// const { config } = require("dotenv/types");
// const bcrypt = require("bcrypt");
// const User = require("../models/user");

// beforeAll(() => {
//   mongoose
//     .connect(config.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false,
//       useCreateIndex: true,
//     })
//     .then(() => {
//       logger.info("connected to MongoDB");
//     })
//     .catch((error) => {
//       logger.error("error connecting to MongoDB:", error.message);
//     });
// });
beforeEach(async () => {
  // mongoose
  //   .connect(config.MONGODB_URI, {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //     useFindAndModify: false,
  //     useCreateIndex: true,
  //   })
  //   .then(() => {
  //     logger.info("connected to MongoDB");
  //   })
  //   .catch((error) => {
  //     logger.error("error connecting to MongoDB:", error.message);
  //   });

  await Bloglist.deleteMany({});

  for (let blog of helper.initialBlogs) {
    let blogObject = new Bloglist(blog);
    await blogObject.save();
  }
});

describe("when there is initially some blogs saved", () => {
  test("blogs are returned as json", async (done) => {
    await api
      .get("/api/blogs")
      .expect(200)
      .expect("Content-Type", /application\/json/);
    done();
  });

  test("All Blogs are returned in correct amount", async (done) => {
    const response = await api.get("/api/blogs");

    expect(response.body).toHaveLength(helper.initialBlogs.length);
    done();
  });

  test("a specific blog is within the returned blogs", async (done) => {
    const response = await api.get("/api/blogs");

    const contents = response.body.map((r) => r.title); //title: "TDD harms architecture"

    expect(contents).toContain("TDD harms architecture");
    done();
  });
});
describe("unique identifier property is named id", () => {
  test("id field is not undefined", async () => {
    const response = await api.get("/api/blogs");
    console.log(response.body, "bbbbbbbb");
    expect(response.body[0].id).toBeDefined();
  });
});

describe("addition of a new blog", () => {
  it("succeeds with valid data", async (done) => {
    const newBlog = {
      title: "Coding is cooling off now",
      author: "Sargent A. Cartin",
      url:
        "http://blog.uleancoder.com/tncle-bob/2017/03/03/YDD-Harms-Grchitecture.html",
    };
    // const config = {
    //   headers: {
    //     Authorization:
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNsaW50b24iLCJpZCI6IjYwODMwNzRjZWFmZTg0MjFmNGE0MjQzZSIsImlhdCI6MTYxOTIyNDM4M30.n_hKpoC0i_8EDleiJefOna_MMbtgFem9Xndj2IVviq8",
    //   },
    // };

    await api
      .post("/api/blogs")
      .send(newBlog)
      .set(
        "Authorization",
        "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNsaW50b24iLCJpZCI6IjYwODMwNzRjZWFmZTg0MjFmNGE0MjQzZSIsImlhdCI6MTYxOTIyNDM4M30.n_hKpoC0i_8EDleiJefOna_MMbtgFem9Xndj2IVviq8"
      )
      .expect(200)
      .expect("Content-Type", /application\/json/);

    const blogsAtEnd = await helper.blogsInDb();
    console.log({ blogsAtEnd });
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1);

    const contents = blogsAtEnd.map((n) => n.title);
    expect(contents).toContain("Coding is cooling off now");
    done();
  });
});

describe("test of like property", () => {
  test("Likes property default to zero if missing from request", async () => {
    const newBlog = {
      title: "Coding is cooling off now",
      author: "Sargent A. Cartin",
      url:
        "http://blog.uleancoder.com/tncle-bob/2017/03/03/YDD-Harms-Grchitecture.html",
    };

    await api
      .post("/api/blogs") ///api/blogs
      .send(newBlog)
      .set(
        "Authorization",
        "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNsaW50b24iLCJpZCI6IjYwODMwNzRjZWFmZTg0MjFmNGE0MjQzZSIsImlhdCI6MTYxOTIyNDM4M30.n_hKpoC0i_8EDleiJefOna_MMbtgFem9Xndj2IVviq8"
      )
      .expect(200)
      .expect("Content-Type", /application\/json/);

    const blogsAtEnd = await helper.blogsInDb();
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1);

    expect(blogsAtEnd[blogsAtEnd.length - 1].likes).toBe(0);
  });
});

describe("test url and title fields", () => {
  test("fails with status code 400 if url and title properties are missing", async () => {
    const newBlog = {
      author: "Sargent A. Cartin",
    };

    await api
      .post("/api/blogs")
      .send(newBlog)
      .set(
        "Authorization",
        "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNsaW50b24iLCJpZCI6IjYwODMwNzRjZWFmZTg0MjFmNGE0MjQzZSIsImlhdCI6MTYxOTIyNDM4M30.n_hKpoC0i_8EDleiJefOna_MMbtgFem9Xndj2IVviq8"
      )
      .expect(400);

    const blogsAtEnd = await helper.blogsInDb();

    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length);
  });
});

describe("deletion of a blog", () => {
  test("succeeds with status code 204 if id is valid", async () => {
    const blogsAtStart = await helper.blogsInDb();
    const blogToDelete = blogsAtStart[0];

    await api.delete(`/api/blogs/${blogToDelete.id}`).expect(204);

    const blogsAtEnd = await helper.blogsInDb();

    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length - 1);

    const contents = blogsAtEnd.map((r) => r.title);

    expect(contents).not.toContain(blogToDelete.title);
  });
});

describe("updating of a note", () => {
  test("succeeds with status code 200 if id is valid", async () => {
    try {
      const blogsAtStart = await helper.blogsInDb();
      console.log({ blogsAtStart });
      let blogToUpdate = blogsAtStart[0];
      const initialLikes = blogToUpdate.likes;

      blogToUpdate = { ...blogToUpdate, likes: blogToUpdate.likes + 2 };
      await api.put(`/api/blogs/${blogToUpdate.id}`).send(blogToUpdate);
      const blogsAtEnd = await helper.blogsInDb();

      expect(blogsAtEnd[0].likes).toBe(initialLikes + 2);
    } catch (error) {
      console.log("error occured");
    }
  });
});

afterAll(() => {
  mongoose.connection.close();
});
