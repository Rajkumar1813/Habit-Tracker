const mongoose = require('mongoose');
const db='mongodb+srv://ohiabhist:duFoybPfg3hbfJPY@ohiabhist.zjaxj.mongodb.net/?retryWrites=true&w=majority&appName=ohiabhist';
          // mongodb+srv://fileshare1813:nn1z8uDnOfaAafi8@cluster0.zf341md.mongodb.net/

const connectionparams={
    useNewUrlParser:true,
    useUnifiedTopology:true
};
mongoose.connect(db,connectionparams).then(()=>{console.log('connected to  the database');})
.catch((e)=>{
    console.log('Error:',e);
});
