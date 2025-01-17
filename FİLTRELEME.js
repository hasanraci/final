app.get('/api/schools/filter', (req, res) => {
    const { type } = req.query;

    if (!type) {
        // If type parameter is not provided, return all schools
        return res.status(200).json(schools);
    }

    const filteredSchools = schools.filter(s => s.type === type);

    if (filteredSchools.length > 0) {
        res.status(200).json(filteredSchools);
    } else {
        res.status(404).json({ message: 'No schools found with the given type' });
    }
});
