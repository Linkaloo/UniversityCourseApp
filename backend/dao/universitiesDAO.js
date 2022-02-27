let universities

export default class UniversitiesDAO {
    static async injectDB(conn) {
        if(universities) {
            return
        }
        try {
            universities = await conn.db(process.env.UNI_NS).collection("examplecol")
        } catch(err) {
            console.error(`Unable to establish a collenction handle in restaurantsDAO: ${e}`)
        }
    }

    static async getUniversities({
        filters = null,
        page = 0,
        universitiesPerPage = 5,
    } = {}) {
        let query

        if(filters) {
            if("name" in filters) {
                query = { $text: { $search: filters["name"] } }
            }
            else if("zipcode" in filters) {
                query = { "zipcode": { $eq: filters["zipcode"] } }
            }
        }

        let cursor

        try {
            cursor = await universities.find(query)
        } catch (err) {
            console.error(`Unable to issue find command: ${err}`)
            return { universityList: [], totalNumUniversities: 0 }
        }

        const displayCursor = cursor.limit(universitiesPerPage).skip(universitiesPerPage * page)
        
        try {
            const universityList = await displayCursor.toArray()
            const totalNumUniversities = await universities.countDocuments(query)

            return {universityList, totalNumUniversities}
        } catch (err) {
            console.error(`Unable to conver cursor to array or problem counting documents: ${err}`)
            return {universityList: [], totalNumUniversities: 0 }
        }
    }
}