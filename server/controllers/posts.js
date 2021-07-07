const Post = require('../models/Post')
const mongoose = require('mongoose')

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({_id:-1})

        res.json(posts)
    } catch (error) {
        res.status(404)
            .json({
                message: error.message
            })
    }
}

exports.createPost = async (req, res) => {
    const post = req.body

    const newPost = new Post({
        name: post.fullname,
        description: post.email,
        message: post.message,
        photoUrl: post.photoUrl,
        createdAt: new Date().toISOString()
    })

    try {
        await newPost.save()

        res.status(201).json({
            message: 'Post created successfully',
            newPost
        })
    } catch (error) {
        res.status(404)
            .json({
                message: error.message
            })
    }
}