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
        id: 1,
        name: "University of Nevada, Las Vegas",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        name: "University of Nevada, Reno",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});

    await queryInterface.bulkInsert("address", [
      {
        id: 1,
        street: "4505 S Maryland Pkwy",
        city: "Las Vegas",
        state: "Nevada",
        zip: 89154,
        country: "USA",
        university_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        street: "1664 N Virginia St",
        city: "Reno",
        state: "Nevada",
        zip: 89557,
        country: "USA",
        university_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});

    await queryInterface.bulkInsert("department", [
      {
        id: 1,
        name: "Department of Computer Science",
        university_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        name: "Computer Science & Engineering",
        university_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});

    await queryInterface.bulkInsert("degree", [
      {
        id: 1,
        name: "Bachelor of Arts in Computer Science",
        degree_type: "Bachelor",
        department_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        name: "Bachelor of Science in Computer Science",
        degree_type: "Bachelor",
        department_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        name: "Minor in big data",
        degree_type: "Minor",
        department_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        name: "Minor in cybersecurity",
        degree_type: "Minor",
        department_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});

    await queryInterface.bulkInsert("course", [
      {
        id: 1,
        name: "MATH 182 - Calculus II",
        description: "Further applications and techniques of integration including integration by parts, sequences and series, polynomial approximations.",
        degree_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        name: "MATH 251 - Discrete Mathematics I",
        description: "Topics include set operations, Cartesian product, relations and functions, equivalence relation, graphs and digraphs, propositional calculus, truth tables, mathematical induction, elementary combinatorics with applications.",
        degree_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        id: 3,
        name: "MATH 182 - Calculus II",
        description: "Further applications and techniques of integration including integration by parts, sequences and series, polynomial approximations.",
        degree_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        name: "MATH 251 - Discrete Mathematics I",
        description: "Topics include set operations, Cartesian product, relations and functions, equivalence relation, graphs and digraphs, propositional calculus, truth tables, mathematical induction, elementary combinatorics with applications.",
        degree_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        id: 5,
        name: "CS 431 - Introduction to Big Data ",
        description: "This course offers an introduction to big data techniques and applications. It covers basic topics like Big Data Overview, Big Data Management, Big Data Modeling, Big Data Analytics, Big Data Tools, and Big Data Applications.",
        degree_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        name: "CS 457 - Database Management Systems ",
        description: "An overview of existing systems; physical data organization; relational, network and hierarchical models; data manipulation languages, data definition languages; database protection; database application using INGRES.",
        degree_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        id: 7,
        name: "CS 151 - Introduction to Cybersecurity ",
        description: "Introduction to fundamental concepts of cybersecurity, common cybersecurity vulnerabilities and threats, and techniques and tools for detecting and defending against cyber-attacks.",
        degree_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 8,
        name: "CS 252 - Digital Forensics Fundamentals ",
        description: "Introduction to the basic computer and networking, forensic process, digital evidence collection, preserving the evidentiary chain, cybercrime statutes, and the legal aspects of search and seizure.",
        degree_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
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

    await queryInterface.bulkDelete("course", null, {});
    await queryInterface.bulkDelete("degree", null, {});
    await queryInterface.bulkDelete("department", null, {});
    await queryInterface.bulkDelete("address", null, {});
    await queryInterface.bulkDelete("univeristy", null, {});
  },
};
