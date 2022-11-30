


const update = (req, res, next) => {
    let userID = req.body.userID

    

    let updatedData = {
        name: req.body.name,
    }
    
    if (req.files) {
        let path = ''
        req.files.forEach((files, index, arr) => {
            path = path + files.path + ','
        })
        path = path.substring(0, path.lastIndexOf(","))
        updatedData.art_pieces = path.split(',').map((image) => {
            return (
                {
                    name: image.name,
                    image: image
                }
            )
        })
    } else if (req.file) {
        updatedData.profile_image = req.file.path
    }

}