const fs=require('node:fs');fs.mkdirSync('dist',{recursive:true});for(const f of ['index.html','style.css','interaction.js'])fs.copyFileSync(f,'dist/'+f);console.log('Built static site in dist');
