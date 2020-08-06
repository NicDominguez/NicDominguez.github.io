const express = require('express');
const router = express.Router();
const { projects } = require('../data.json')

const technologiesArray = projects.map(project => project.technologies)

function flatten(arr) {
    let flat = []
    for (var i = 0; i< arr.length; i++) {
        flat = flat.concat(arr[i])
    }
    return flat;
}

const allTechnologies = flatten(technologiesArray)
const techs = allTechnologies.filter((tech, i) => {
    return allTechnologies.indexOf(tech) == i
})

// Renders index pug file on root route
router.get('/', (req, res) => {
    res.render('index', { projects, techs });
});

// Renders about pug file on about route
router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;