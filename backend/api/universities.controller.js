import { parse } from "dotenv";
import UniversitiesDAO from "../dao/universitiesDAO.js";

export default class UniversitiesController {
    static async apiGetUniversities(req, res, next) {
        const universitiesPerPage = req.query.universitiesPerPage ? parseInt(req.query.universitiesPerPage, 5) : 10 
        const page = req.query.page ? parseInt(req.query.page, 10) : 0

        let filters = {}
        if(req.query.name) {
            filters.name = req.query.name
        }
        else if(req.query.zipcode) {
            filters.zipcode = req.query.zipcode
        }

        const { universityList, totalNumUniversities } = await UniversitiesDAO.getUniversities({
            filters,
            page,
            universitiesPerPage,
        })
        
        let response = {
            universities: universityList,
            page: page,
            filters: filters,
            entries_per_page: universitiesPerPage,
            total_results: totalNumUniversities,
        }
        res.json(response)
    }
}