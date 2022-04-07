import db from "../../models/index";

const apiGetUniversities = async (req, res) => {
  const universitiesPerPage = req.query.universitiesPerPage
    ? parseInt(req.query.universitiesPerPage, 5) : 10;
  const page = req.query.page ? parseInt(req.query.page, 10) : 0;

  const query = req.query.name ? { name: req.query.name } : null;
  let totalNumUniversities;
  let universityList;

  if (query != null) {
    const list = await db.University.findAll({
      where: {
        name: query.name,
      },
      limit: universitiesPerPage,
      offset: universitiesPerPage * page,
    });
    totalNumUniversities = Object.keys(list).length;
    universityList = list;
  } else {
    const list = await db.University.findAll({
      limit: universitiesPerPage,
      offset: universitiesPerPage * page,
    });
    totalNumUniversities = Object.keys(list).length;
    universityList = list;
  }

  const response = {
    universities: universityList,
    page,
    total_universities: totalNumUniversities,
    query,
    entries_per_page: universitiesPerPage,
  };
  return res.json(response);
};

const apiCreateUniversity = async (req, res) => {
  const university = req.body;
  let response;

  try {
    const newUniversity = await db.University.create(university, { include: [db.Address] });
    response = newUniversity;
  } catch (err) {
    console.log(err);
    response = {
      error: err,
    };
  }

  return res.json(response);
};

const apiDeleteUniversity = async (req, res) => {
  const des = await db.University.destroy({ where: { id: req.params.id } });

  const response = {
    total_deleted: des,
  };
  return res.json(response);
};

export default { apiGetUniversities, apiCreateUniversity, apiDeleteUniversity };
