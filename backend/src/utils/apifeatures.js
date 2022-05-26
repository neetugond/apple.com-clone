class ApiFeatures{
    constructor(query, querystr) {
        this.query = query;
        this.querystr= querystr
        
    }
    search() {
        const keyword = this.querystr.keyword ? {
            name: {
                $regex: this.querystr.keyword,
                $options: "i",
                
            }, //we will get keyword
        } : {};
        this.query = this.query.find({ ...keyword })
        return this;
    }

    filter() {
        const queryCopy = { ...this.querystr }
        
        
        // removing some fields for category

        const removeFields = ["keyword", "page", "limit"];

        removeFields.forEach(key => delete queryCopy[key]);

        this.query = this.query.find(queryCopy)
        return this;
    }

    pagination(resultPerPage) {
        const currentPage = Number(this.querystr.page) || 1;

        const skip = resultPerPage * (currentPage - 1) //skip
        
        this.query = this.query.limit(resultPerPage).skip(skip); //limit
        return this;
    }
    
};

module.exports = ApiFeatures;