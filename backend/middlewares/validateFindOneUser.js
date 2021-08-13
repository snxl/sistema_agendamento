
export default new class validateFindUser{

    validate(req, res, next){
        
        if(!req.query.pageUSer || !req.query.pageProvider || req.query.pageUSer == 0 || req.query.pageProvider == 0) return res.status(400).json({
            status:"ERR",
            error: "invalid page"
        })
        else return next()

    }

}