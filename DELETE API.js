app.delete('/api/schools/:id', authenticateJWT, (req, res) => {
    const schoolId = parseInt(req.params.id);

    //Check validity of ID
    if (isNaN(schoolId)) {
        return res.status(400).json({ message: 'Invalid school ID' });
    }

    const index = schools.findIndex(s => s.id === schoolId);
    if (index !== -1) {
        schools.splice(index, 1);
        res.status(200).json({ message: `School with ID ${schoolId} deleted successfully.` });
    } else {
        res.status(404).json({ message: 'School not found' });
    }
});
