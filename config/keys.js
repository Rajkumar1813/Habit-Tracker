const mongoose = require('mongoose');
const db='mongodb+srv://fileshare1813:LK8i73GCMe4rSd6@cluster0.zf341md.mongodb.net/';

const connectionparams={
    useNewUrlParser:true,
    useUnifiedTopology:true
};
mongoose.connect(db,connectionparams).then(()=>{console.log('connected to  the database');})
.catch((e)=>{
    console.log('Error:',e);
});
