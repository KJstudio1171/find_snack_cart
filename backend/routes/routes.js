const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const marketController = require('../controllers/marketController');
const commentController = require('../controllers/commentController');

router.post('/user', userController.createUser);
router.delete('/user', userController.deleteUser);
router.get('/user/:user_id', userController.getUserInfo);
router.patch('/password', userController.changePassword);

router.post('/login', userController.login);
router.post('/logout', userController.logout);

router.patch('/user/favor/add', userController.addFavorite);
router.patch('/user/favor/remove', userController.removeFavorite);

router.get('/market', marketController.getMarket);
router.get('/market/:market_index', marketController.getMarketInfo);
router.post('/market', marketController.createMarket);
router.delete('/market', marketController.deleteMarket);
router.patch('/market/:market_index', marketController.editMarket);

router.get('/comment', commentController.getComment);
router.get('/comment/:comment_id', commentController.getCommentInfo);
router.post('/comment', commentController.createComment);
router.delete('/comment', commentController.deleteComment);
router.patch('/comment/:comment_id', commentController.editComment);

module.exports = router;
