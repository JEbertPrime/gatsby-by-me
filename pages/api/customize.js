// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';
export default async (req, res) => {
    try{
    var book = fs.createReadStream('./public/gatsby.txt', {encoding: 'utf8'})
  book.pipe(res)
    }catch(err){
      console.log(err)
  }
}
