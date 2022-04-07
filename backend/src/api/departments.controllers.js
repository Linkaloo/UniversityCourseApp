import db from "../../models/index";

const apiGetDepartments = async (req, res) => {
  const list = await db.Department.findAll({
    include: {
      model: db.University,
      attributes: ["name"],
    },
  });

  const response = {
    departments: list,
  };
  return res.json(response);
};

export default { apiGetDepartments };
