exports.processDate = (req, res) => {
    // get the date string 
    const { date_string } = req.params
    const timestamp = parseInt(date_string * 1, 10)
    // parse date string
    const date = new Date(timestamp || date_string || Date.now())

    // convert to unix and utc if using utf format or if empty string
    const unix = date.getTime()
    const utc = date.toUTCString()
    console.log(unix)
    console.log(utc)

    if(isNaN(date)) {
        res.json({ error: 'Invalid Date' })
    } else {
        res.json({
            unix: unix,
            utc: utc
        })
    }
}