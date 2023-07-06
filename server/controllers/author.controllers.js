const Author = require('../models/author.models');

module.exports.findAll = (req, res) => {
    Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.status(400).json(err));
}

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => {
            console.log('DB SUCCESS!!!')
            res.json(newAuthor)})
        .catch(err => {
            console.log('DB ERROR!!!')
            res.status(400).json(err)});
}


module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.status(400).json(err));
}


module.exports.updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => {
            console.log('DB SUCCESS!!!')
            res.json(updatedAuthor)})
        .catch(err => {
            console.log('DB ERROR!!!')
            res.status(400).json(err)});
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => res.json(result))
        .catch(err => res.status(400).json('Something went wrong',err));
}