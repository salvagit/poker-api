const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_PATH, {useNewUrlParser: true})
.then( () => console.log('db connection success.') )
.catch( (err) => console.error('db connection fail.', err) );

let Player = require('../models/Player');

class Players {

  get ( req, res ) {
    Player.find({}, null, {}, (err, players) => {
      if (err) throw err;
      return res.json({
        succes: true,
        status: 200,
        data: players
      });
    });
  }

  save ( req, res ) {
    const { _id, ...body } = req.body;
    if (_id) {
      Player.findById(_id, (err, player) => {
        if (err) return handleError(err);
        for ( const field in body ) {
          player[field] = body[field];
        }
        player.save( err => {
          if (err) throw err;
          return res.json({success:true});
        });
      })
    } else {
      const newPlayer = new Player(req.body);
      newPlayer.save( err => {
        if (err) throw err;
        return res.json({success:true});
      });
    }
  }

  delete (req, res) {
    const { _id } = req.body;
    Player.findById(_id, (err, player) => {
      if (err) return handleError(err);
      if (player) {
        player.delete( err => {
          if (err) throw err;
          return res.json({success:true});
        });
      } else {
        return res.json({
          success: false,
          message: 'Player not found'
        });
      }
    })
  }
}

module.exports = new Players();