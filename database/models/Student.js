/*==================================================
/database/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require("sequelize"); // Import Sequelize
const db = require("../db"); // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "dummyemailfordummystudent@:).com",
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png",
  },

  gpa: {
    type: Sequelize.FLOAT,
  },
});

// Export the student model
module.exports = Student;
