module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("university", [
      {
        name: "University of Nevada, Las Vegas",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "University of Nevada, Reno",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});

    await queryInterface.bulkInsert("address", [
      {
        street: "4505 S Maryland Pkwy",
        city: "Las Vegas",
        state: "Nevada",
        zip: "89154",
        country: "USA",
        university_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        street: "1664 N Virginia St",
        city: "Reno",
        state: "Nevada",
        zip: "89557",
        country: "USA",
        university_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});

    await queryInterface.bulkInsert("department", [
      {
        id: 1,
        name: "Computer Science",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});

    await queryInterface.bulkInsert("university_departments", [
      {
        university_id: 1,
        department_id: 1,
      },
      {
        university_id: 2,
        department_id: 1,
      },
    ], {});

    await queryInterface.bulkInsert("degree", [
      {
        name: "Bachelor of Arts in Computer Science",
        degree_type: "Bachelor",
        department_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Bachelor of Science in Computer Science",
        degree_type: "Bachelor",
        department_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Minor in big data",
        degree_type: "Minor",
        department_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Minor in cybersecurity",
        degree_type: "Minor",
        department_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});

    await queryInterface.bulkInsert("course", [
      {
        name: "MATH 182 - Calculus II",
        description: "Further applications and techniques of integration including integration by parts, sequences and series, polynomial approximations.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "MATH 251 - Discrete Mathematics I",
        description: "Topics include set operations, Cartesian product, relations and functions, equivalence relation, graphs and digraphs, propositional calculus, truth tables, mathematical induction, elementary combinatorics with applications.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "CS 431 - Introduction to Big Data ",
        description: "This course offers an introduction to big data techniques and applications. It covers basic topics like Big Data Overview, Big Data Management, Big Data Modeling, Big Data Analytics, Big Data Tools, and Big Data Applications.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "CS 457 - Database Management Systems ",
        description: "An overview of existing systems; physical data organization; relational, network and hierarchical models; data manipulation languages, data definition languages; database protection; database application using INGRES.",
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        name: "CS 151 - Introduction to Cybersecurity ",
        description: "Introduction to fundamental concepts of cybersecurity, common cybersecurity vulnerabilities and threats, and techniques and tools for detecting and defending against cyber-attacks.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "CS 252 - Digital Forensics Fundamentals ",
        description: "Introduction to the basic computer and networking, forensic process, digital evidence collection, preserving the evidentiary chain, cybercrime statutes, and the legal aspects of search and seizure.",
        created_at: new Date(),
        updated_at: new Date(),
      },

    ], {});

    await queryInterface.bulkInsert("degree_courses", [
      {
        degree_id: 1,
        course_id: 1,
      },
      {
        degree_id: 1,
        course_id: 2,
      },
      {
        degree_id: 2,
        course_id: 1,
      },
      {
        degree_id: 2,
        course_id: 2,
      },
      {
        degree_id: 3,
        course_id: 3,
      },
      {
        degree_id: 3,
        course_id: 4,
      },
      {
        degree_id: 4,
        course_id: 5,
      },
      {
        degree_id: 4,
        course_id: 6,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("degree_courses", null, {});
    await queryInterface.bulkDelete("course", null, {});
    await queryInterface.bulkDelete("degree", null, {});
    await queryInterface.bulkDelete("university_departments", null, {});
    await queryInterface.bulkDelete("department", null, {});
    await queryInterface.bulkDelete("address", null, {});
    await queryInterface.bulkDelete("univeristy", null, {});
  },
};
